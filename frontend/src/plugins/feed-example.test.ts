import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import { runInNewContext } from "node:vm";

/** Loads the example plugin once with fakes for everything a browser provides. */
function load() {
  let plugin: any, nextTimer = 0;
  const errors: unknown[] = [], timeouts = new Map<number, { fn: () => void; ms: number }>(), intervals = new Map<number, { fn: () => void; ms: number }>();
  const images: any[] = [], draws: any[][] = [];
  const ctx2d = { fillStyle: "", fillRect() {}, drawImage: (...a: unknown[]) => { draws.push(a); } };
  const canvas: any = { width: 0, height: 0, getContext: () => ctx2d };
  class Img { src = ""; onload: any; onerror: any; naturalWidth = 0; naturalHeight = 0; constructor() { images.push(this); } }
  runInNewContext(readFileSync(new URL("../../../docs/examples/nextfloor-feed-texture.js", import.meta.url), "utf8"), {
    window: { NextFloor: { register: (p: unknown) => { plugin = p; } } }, Date, Image: Img, document: { createElement: () => canvas },
    setTimeout: (fn: () => void, ms: number) => { timeouts.set(++nextTimer, { fn, ms }); return nextTimer; }, clearTimeout: (id: number) => timeouts.delete(id),
    setInterval: (fn: () => void, ms: number) => { intervals.set(++nextTimer, { fn, ms }); return nextTimer; }, clearInterval: (id: number) => intervals.delete(id),
  });
  const provider = plugin.textures[0];
  const hass = { states: { "camera.door": { state: "idle", attributes: { entity_picture: "/api/camera_proxy/camera.door?token=abc" } } } };
  const base = { hass, surface: "screen", entityId: null, state: undefined };
  let invalidated = 0;
  const make = (settings: Record<string, unknown>, ctx: Record<string, unknown> = {}) =>
    provider.create({ ...base, ...ctx, settings: { source: "none", camera: "camera.door", interval: 5, fps: 8, ...settings }, invalidate: () => { invalidated++; }, reportError: (e: unknown) => errors.push(e) });
  return {
    plugin, provider, base, hass, errors, timeouts, intervals, images, draws, canvas, invalidated: () => invalidated,
    camera: (settings: Record<string, unknown> = {}, ctx: Record<string, unknown> = {}) => make({ source: "snapshot", ...settings }, ctx),
  };
}
const BLANK_PREFIX = "data:image/gif";
const frame = (img: any, w: number, h: number) => { img.naturalWidth = w; img.naturalHeight = h; };

test("snapshot mode loads the camera picture, fits it into the canvas and schedules the next one", () => {
  const t = load(); const source = t.camera();
  assert.equal(t.canvas.width, 1280); assert.equal(t.canvas.height, 720);
  const [img] = t.images;
  assert.match(img.src, /^\/api\/camera_proxy\/camera\.door\?token=abc&_=\d+$/);
  frame(img, 640, 480); img.onload();
  assert.deepEqual(t.draws[0].slice(1), [160, 0, 960, 720]); // 4:3 picture letterboxed in 16:9
  assert.equal(t.invalidated(), 1); assert.equal(t.timeouts.size, 1); assert.equal([...t.timeouts.values()][0].ms, 5000);
  assert.equal(t.errors.length, 0); source.dispose();
});

test("a failing snapshot is reported once, retried no faster than 5 s, and dispose cancels everything", () => {
  const t = load(); const source = t.camera({ interval: 1 });
  const [img] = t.images;
  img.onerror(); img.onerror();
  assert.equal(t.errors.length, 1);
  assert.ok([...t.timeouts.values()].every((x) => x.ms >= 5000));
  source.dispose();
  assert.equal(t.timeouts.size, 0); assert.ok(img.src.startsWith(BLANK_PREFIX)); assert.equal(img.onload, null);
});

test("the freshest access token is used for each snapshot", () => {
  const t = load(); const source = t.camera();
  const [img] = t.images;
  frame(img, 1920, 1080); img.onload();
  t.hass.states["camera.door"].attributes.entity_picture = "/api/camera_proxy/camera.door?token=new";
  source.update({ ...t.base, hass: t.hass });
  [...t.timeouts.values()][0].fn();
  assert.match(img.src, /token=new&_=/); source.dispose();
});

test("MJPEG mode opens the stream once, copies frames on an interval and closes the connection on dispose", () => {
  const t = load(); const source = t.camera({ source: "mjpeg", fps: 10 });
  const [img] = t.images;
  assert.equal(img.src, "/api/camera_proxy_stream/camera.door?token=abc");
  const [tick] = [...t.intervals.values()]; assert.equal(tick.ms, 100);
  tick.fn(); assert.equal(t.draws.length, 0); // nothing decoded yet
  frame(img, 1920, 1080); tick.fn(); assert.equal(t.draws.length, 1);
  img.onerror(); img.onerror(); assert.equal(t.errors.length, 1); assert.equal(t.timeouts.size, 1);
  [...t.timeouts.values()][0].fn(); assert.match(img.src, /camera_proxy_stream/);
  source.dispose();
  assert.equal(t.intervals.size, 0); assert.equal(t.timeouts.size, 0); assert.ok(img.src.startsWith(BLANK_PREFIX));
});

test("a camera without a picture path or MJPEG stream is reported, not thrown", () => {
  const none = load(); none.hass.states["camera.door"].attributes.entity_picture = "";
  none.camera().dispose(); assert.equal(none.errors.length, 1);
  const odd = load(); odd.hass.states["camera.door"].attributes.entity_picture = "/local/still.jpg";
  odd.camera({ source: "mjpeg" }).dispose(); assert.equal(odd.errors.length, 1); assert.equal(odd.images[0].src.startsWith(BLANK_PREFIX), true); assert.equal(odd.timeouts.size, 0);
});

test("match depends on the chosen source and the camera, and a TV shows a feed only while its player is on", () => {
  const t = load();
  const m = (settings: Record<string, unknown>, over: Record<string, unknown> = {}) =>
    t.provider.match({ ...t.base, ...over, settings: { source: "none", camera: "", interval: 5, fps: 8, ...settings } });
  assert.equal(m({}), false); // no source chosen
  assert.equal(m({ source: "go2rtc", server: "https://x/", stream: "s", camera: "camera.door" }), false); // go2rtc is no longer a source
  assert.equal(m({ source: "snapshot", camera: "camera.door" }), true);
  assert.equal(m({ source: "mjpeg", camera: "camera.door" }, { surface: "picture" }), true);
  assert.equal(m({ source: "snapshot", camera: "camera.door" }, { surface: "art" }), false);
  assert.equal(m({ source: "snapshot", camera: "" }), false);
  assert.equal(m({ source: "snapshot", camera: "camera.gone" }), false);
  assert.equal(m({ source: "snapshot", camera: "camera.door" }, { hass: { states: { "camera.door": { state: "unavailable", attributes: {} } } } }), false);
  const on = { entityId: "media_player.tv", state: { state: "playing" } };
  const cam = { source: "snapshot", camera: "camera.door" };
  assert.equal(m(cam, on), true);
  assert.equal(m(cam, { ...on, state: { state: "off" } }), false);
  assert.equal(m(cam, { ...on, state: undefined }), false);
});

test("the plugin offers source, camera, interval and fps, each shown only for the sources that need it", () => {
  const t = load(); const plain = (v: unknown) => JSON.parse(JSON.stringify(v));
  assert.equal(t.plugin.name, "TV and frame feeds");
  assert.deepEqual(plain(t.provider.surfaces), ["screen", "picture"]);
  assert.deepEqual(plain(t.provider.settings.map((s: any) => [s.key, s.type, s.showWhen?.value ?? null])),
    [["source", "select", null], ["camera", "entity", ["snapshot", "mjpeg"]], ["interval", "number", "snapshot"], ["fps", "number", "mjpeg"]]);
});
