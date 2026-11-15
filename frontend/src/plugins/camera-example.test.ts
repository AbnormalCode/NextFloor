import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import { runInNewContext } from "node:vm";

const BLANK_PREFIX = "data:image/gif";

function setup(settings: Record<string, unknown> = {}, picture = "/api/camera_proxy/camera.door?token=abc") {
  let plugin: any, nextTimer = 0;
  const images: any[] = [], draws: any[][] = [], fills: unknown[][] = [];
  const timeouts = new Map<number, { fn: () => void; ms: number }>(), intervals = new Map<number, { fn: () => void; ms: number }>();
  class Img { src = ""; onload: any; onerror: any; naturalWidth = 0; naturalHeight = 0; constructor() { images.push(this); } }
  const ctx2d = { fillStyle: "", fillRect: (...a: unknown[]) => { fills.push(a); }, drawImage: (...a: unknown[]) => { draws.push(a); } };
  const canvas: any = { width: 0, height: 0, getContext: () => ctx2d };
  runInNewContext(readFileSync(new URL("../../../docs/examples/nextfloor-camera-texture.js", import.meta.url), "utf8"), {
    window: { NextFloor: { register: (p: unknown) => { plugin = p; } } }, document: { createElement: () => canvas }, Image: Img, Date,
    setTimeout: (fn: () => void, ms: number) => { timeouts.set(++nextTimer, { fn, ms }); return nextTimer; }, clearTimeout: (id: number) => timeouts.delete(id),
    setInterval: (fn: () => void, ms: number) => { intervals.set(++nextTimer, { fn, ms }); return nextTimer; }, clearInterval: (id: number) => intervals.delete(id),
  });
  const provider = plugin.textures[0];
  const errors: unknown[] = []; let invalidated = 0;
  const hass = { states: { "camera.door": { state: "idle", attributes: { entity_picture: picture } } } };
  const context = { hass, surface: "screen", entityId: null, state: undefined, settings: { camera: "camera.door", mode: "snapshot", interval: 5, fps: 8, ...settings } };
  const source = provider.create({ ...context, invalidate: () => { invalidated++; }, reportError: (e: unknown) => errors.push(e) });
  return { provider, source, canvas, images, draws, fills, timeouts, intervals, errors, context, invalidated: () => invalidated };
}
const frame = (img: any, w: number, h: number) => { img.naturalWidth = w; img.naturalHeight = h; };

test("snapshot mode loads the camera picture, fits it into the canvas and schedules the next one", () => {
  const { source, canvas, images, draws, timeouts, invalidated, errors } = setup();
  assert.equal(canvas.width, 1280); assert.equal(canvas.height, 720);
  const [img] = images;
  assert.match(img.src, /^\/api\/camera_proxy\/camera\.door\?token=abc&_=\d+$/);
  frame(img, 640, 480); img.onload();
  assert.deepEqual(draws[0].slice(1), [160, 0, 960, 720]); // 4:3 picture letterboxed in 16:9
  assert.equal(invalidated(), 1); assert.equal(timeouts.size, 1); assert.equal([...timeouts.values()][0].ms, 5000);
  assert.equal(errors.length, 0); source.dispose();
});

test("a failing snapshot is reported once, retried no faster than 5 s, and dispose cancels everything", () => {
  const { source, images, timeouts, errors } = setup({ interval: 1 });
  const [img] = images;
  img.onerror(); img.onerror();
  assert.equal(errors.length, 1);
  assert.ok([...timeouts.values()].every((t) => t.ms >= 5000));
  source.dispose();
  assert.equal(timeouts.size, 0); assert.ok(img.src.startsWith(BLANK_PREFIX)); assert.equal(img.onload, null);
});

test("the freshest access token is used for each snapshot", () => {
  const { source, images, context, timeouts } = setup();
  const [img] = images;
  frame(img, 1920, 1080); img.onload();
  (context.hass.states["camera.door"].attributes as any).entity_picture = "/api/camera_proxy/camera.door?token=new";
  source.update({ ...context, hass: context.hass });
  [...timeouts.values()][0].fn();
  assert.match(img.src, /token=new&_=/); source.dispose();
});

test("MJPEG mode opens the stream once, copies frames on an interval and closes the connection on dispose", () => {
  const { source, images, intervals, draws, timeouts, errors } = setup({ mode: "mjpeg", fps: 10 });
  const [img] = images;
  assert.equal(img.src, "/api/camera_proxy_stream/camera.door?token=abc");
  const [tick] = [...intervals.values()]; assert.equal(tick.ms, 100);
  tick.fn(); assert.equal(draws.length, 0); // nothing decoded yet
  frame(img, 1920, 1080); tick.fn(); assert.equal(draws.length, 1);
  img.onerror(); img.onerror(); assert.equal(errors.length, 1); assert.equal(timeouts.size, 1);
  [...timeouts.values()][0].fn(); assert.match(img.src, /camera_proxy_stream/);
  source.dispose();
  assert.equal(intervals.size, 0); assert.equal(timeouts.size, 0); assert.ok(img.src.startsWith(BLANK_PREFIX));
});

test("a camera without a picture path or MJPEG stream is reported, not thrown", () => {
  const none = setup({}, "");
  assert.equal(none.errors.length, 1); none.source.dispose();
  const odd = setup({ mode: "mjpeg" }, "/local/still.jpg");
  assert.equal(odd.errors.length, 1); assert.equal(odd.images[0].src, ""); odd.source.dispose();
  assert.equal(odd.timeouts.size, 0);
});

test("match needs a camera that exists, and a TV only shows it while its player is on", () => {
  const { provider, context } = setup();
  const m = (over: Record<string, unknown>) => provider.match({ ...context, ...over });
  assert.equal(m({}), true);
  assert.equal(m({ surface: "picture" }), true);
  assert.equal(m({ surface: "art" }), false);
  assert.equal(m({ settings: { ...context.settings, camera: "" } }), false);
  assert.equal(m({ settings: { ...context.settings, camera: "camera.gone" } }), false);
  assert.equal(m({ hass: { states: { "camera.door": { state: "unavailable", attributes: {} } } } }), false);
  assert.equal(m({ entityId: "media_player.tv", state: { state: "playing" } }), true);
  assert.equal(m({ entityId: "media_player.tv", state: { state: "off" } }), false);
  assert.equal(m({ entityId: "media_player.tv", state: undefined }), false);
});

test("the camera plugin offers camera, mode, interval and fps for screens and frames", () => {
  const { provider } = setup();
  assert.deepEqual([...provider.surfaces], ["screen", "picture"]);
  assert.deepEqual(JSON.parse(JSON.stringify(provider.settings.map((s: any) => [s.key, s.type]))), [["camera", "entity"], ["mode", "select"], ["interval", "number"], ["fps", "number"]]);
});
