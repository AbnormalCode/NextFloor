import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import { runInNewContext } from "node:vm";

/** Loads the example plugin once with fakes for everything a browser provides. */
function load() {
  let plugin: any, pc: any, ws: any, nextTimer = 0;
  const errors: unknown[] = [], timeouts = new Map<number, { fn: () => void; ms: number }>(), intervals = new Map<number, { fn: () => void; ms: number }>();
  const images: any[] = [], draws: any[][] = [];
  const video: any = { srcObject: null, play: async () => {}, pause() {}, removeAttribute() {}, load() {} };
  const ctx2d = { fillStyle: "", fillRect() {}, drawImage: (...a: unknown[]) => { draws.push(a); } };
  const canvas: any = { width: 0, height: 0, getContext: () => ctx2d };
  class Peer {
    ontrack: any; onicecandidate: any; onconnectionstatechange: any;
    localDescription: any; remoteDescription: any; connectionState = "new"; closed = false;
    candidates: unknown[] = []; transceivers: unknown[] = [];
    constructor() { pc = this; }
    addTransceiver(...args: unknown[]) { this.transceivers.push(args); }
    async createOffer() { return { type: "offer", sdp: "offer" }; }
    async setLocalDescription(value: unknown) { this.localDescription = value; }
    async setRemoteDescription(value: unknown) { this.remoteDescription = value; }
    async addIceCandidate(value: unknown) { assert.ok(this.remoteDescription); this.candidates.push(value); }
    close() { this.closed = true; }
  }
  let socketThrows = false;
  class Socket {
    static OPEN = 1;
    onopen: any; onmessage: any; onerror: any; onclose: any;
    readyState = 1; sent: any[] = []; closed = false;
    constructor(url: URL) { if (socketThrows) throw new Error("socket blocked"); ws = this; assert.equal(url.searchParams.get("src"), "capture"); }
    send(data: string) { this.sent.push(JSON.parse(data)); }
    close() { this.closed = true; }
  }
  class Media { tracks: any[] = []; addTrack(track: unknown) { this.tracks.push(track); } getTracks() { return this.tracks; } }
  class Img { src = ""; onload: any; onerror: any; naturalWidth = 0; naturalHeight = 0; constructor() { images.push(this); } }
  runInNewContext(readFileSync(new URL("../../../docs/examples/nextfloor-feed-texture.js", import.meta.url), "utf8"), {
    window: { NextFloor: { register: (p: unknown) => { plugin = p; } } }, URL, Date, Image: Img,
    document: { createElement: (tag: string) => (tag === "canvas" ? canvas : video) }, RTCPeerConnection: Peer, WebSocket: Socket, MediaStream: Media,
    setTimeout: (fn: () => void, ms: number) => { timeouts.set(++nextTimer, { fn, ms }); return nextTimer; }, clearTimeout: (id: number) => timeouts.delete(id),
    setInterval: (fn: () => void, ms: number) => { intervals.set(++nextTimer, { fn, ms }); return nextTimer; }, clearInterval: (id: number) => intervals.delete(id),
  });
  const provider = plugin.textures[0];
  const hass = { states: { "camera.door": { state: "idle", attributes: { entity_picture: "/api/camera_proxy/camera.door?token=abc" } } } };
  const base = { hass, surface: "screen", entityId: null, state: undefined };
  let invalidated = 0;
  const make = (settings: Record<string, unknown>, ctx: Record<string, unknown> = {}) =>
    provider.create({ ...base, ...ctx, settings: { source: "none", server: "", stream: "", camera: "camera.door", interval: 5, fps: 8, ...settings }, invalidate: () => { invalidated++; }, reportError: (e: unknown) => errors.push(e) });
  return {
    plugin, provider, base, hass, errors, timeouts, intervals, images, draws, video, canvas, invalidated: () => invalidated,
    pc: () => pc, ws: () => ws, blockSockets: () => { socketThrows = true; },
    go2rtc: () => make({ source: "go2rtc", server: "https://example.test/", stream: "capture" }),
    camera: (settings: Record<string, unknown> = {}, ctx: Record<string, unknown> = {}) => make({ source: "snapshot", ...settings }, ctx),
  };
}
const BLANK_PREFIX = "data:image/gif";
const flush = async () => { for (let i = 0; i < 12; i++) await Promise.resolve(); };
const frame = (img: any, w: number, h: number) => { img.naturalWidth = w; img.naturalHeight = h; };

test("go2rtc source negotiates video only, queues early ICE and cleans up tracks", async () => {
  const t = load(); const source = t.go2rtc(); const [pc, ws] = [t.pc(), t.ws()];
  await ws.onopen();
  assert.equal(pc.transceivers.length, 1); assert.equal(pc.transceivers[0][0], "video");
  assert.equal(ws.sent[0].type, "webrtc/offer");
  ws.onmessage({ data: JSON.stringify({ type: "webrtc/candidate", value: "candidate" }) });
  ws.onmessage({ data: JSON.stringify({ type: "webrtc/answer", value: "answer" }) });
  await flush(); assert.equal(pc.candidates.length, 1); assert.equal(t.errors.length, 0);
  let stopped = 0; pc.ontrack({ track: { stop: () => { stopped++; } } });
  assert.ok(t.video.srcObject); source.dispose();
  assert.equal(stopped, 1); assert.ok(pc.closed && ws.closed); assert.equal(t.video.srcObject, null); assert.equal(t.timeouts.size, 0);
});

test("go2rtc source cancels scheduled retries on removal", () => {
  const t = load(); const source = t.go2rtc();
  t.ws().onerror(); assert.equal(t.timeouts.size, 1); source.dispose(); assert.equal(t.timeouts.size, 0);
});

test("a synchronously blocked WebSocket does not leak its peer connection", () => {
  const t = load(); t.blockSockets(); const source = t.go2rtc();
  assert.ok(t.pc().closed); assert.equal(t.errors.length, 1); source.dispose(); assert.equal(t.timeouts.size, 0);
});

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

test("match depends on the chosen source and its fields, and a TV shows a feed only while its player is on", () => {
  const t = load();
  const m = (settings: Record<string, unknown>, over: Record<string, unknown> = {}) =>
    t.provider.match({ ...t.base, ...over, settings: { source: "none", server: "", stream: "", camera: "", interval: 5, fps: 8, ...settings } });
  assert.equal(m({}), false); // no source chosen
  assert.equal(m({ source: "go2rtc", server: "https://x/", stream: "s" }), true);
  assert.equal(m({ source: "go2rtc", server: "https://x/" }), false);
  assert.equal(m({ source: "go2rtc", server: "", stream: "s" }), false);
  assert.equal(m({ source: "snapshot", camera: "camera.door" }), true);
  assert.equal(m({ source: "mjpeg", camera: "camera.door" }, { surface: "picture" }), true);
  assert.equal(m({ source: "snapshot", camera: "camera.door" }, { surface: "art" }), false);
  assert.equal(m({ source: "snapshot", camera: "" }), false);
  assert.equal(m({ source: "snapshot", camera: "camera.gone" }), false);
  assert.equal(m({ source: "snapshot", camera: "camera.door" }, { hass: { states: { "camera.door": { state: "unavailable", attributes: {} } } } }), false);
  const on = { entityId: "media_player.tv", state: { state: "playing" } };
  assert.equal(m({ source: "go2rtc", server: "https://x/", stream: "s" }, on), true);
  assert.equal(m({ source: "go2rtc", server: "https://x/", stream: "s" }, { ...on, state: { state: "off" } }), false);
  assert.equal(m({ source: "go2rtc", server: "https://x/", stream: "s" }, { ...on, state: undefined }), false);
});

test("the plugin offers source, address, stream, camera, interval and fps, each shown only for the sources that need it", () => {
  const t = load(); const plain = (v: unknown) => JSON.parse(JSON.stringify(v));
  assert.equal(t.plugin.name, "TV and frame feeds");
  assert.deepEqual(plain(t.provider.surfaces), ["screen", "picture"]);
  assert.deepEqual(plain(t.provider.settings.map((s: any) => [s.key, s.type, s.showWhen?.value ?? null])),
    [["source", "select", null], ["server", "text", "go2rtc"], ["stream", "text", "go2rtc"], ["camera", "entity", ["snapshot", "mjpeg"]], ["interval", "number", "snapshot"], ["fps", "number", "mjpeg"]]);
});
