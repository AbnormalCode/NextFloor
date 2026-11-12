import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import { runInNewContext } from "node:vm";

function setup(socketThrows = false) {
  let plugin: any, pc: any, ws: any, cancelled = 0;
  const errors: unknown[] = [], timers = new Map<number, () => void>();
  const video: any = { srcObject: null, play: async () => {}, pause() {}, removeAttribute() {}, load() {} };
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
  class Socket {
    static OPEN = 1;
    onopen: any; onmessage: any; onerror: any; onclose: any;
    readyState = 1; sent: any[] = []; closed = false;
    constructor(url: URL) { if (socketThrows) throw new Error("socket blocked"); ws = this; assert.equal(url.searchParams.get("src"), "capture"); }
    send(data: string) { this.sent.push(JSON.parse(data)); }
    close() { this.closed = true; }
  }
  class Media { tracks: any[] = []; addTrack(track: unknown) { this.tracks.push(track); } getTracks() { return this.tracks; } }
  runInNewContext(readFileSync(new URL("../../../docs/examples/nextfloor-go2rtc-texture.js", import.meta.url), "utf8").replace("const SOURCES = {", 'const SOURCES = { "media_player.test": { server: "https://example.test/", stream: "capture" },'), {
    window: { NextFloor: { register: (p: unknown) => { plugin = p; } } }, URL,
    document: { createElement: () => video }, RTCPeerConnection: Peer, WebSocket: Socket, MediaStream: Media,
    setTimeout: (fn: () => void) => { const id = ++cancelled; timers.set(id, fn); return id; }, clearTimeout: (id: number) => timers.delete(id),
  });
  const provider = plugin.textures[0];
  const source = provider.create({ entityId: "media_player.test", reportError: (error: unknown) => errors.push(error) });
  return { provider, source, video, pc, ws, errors, timers };
}
const flush = async () => { for (let i = 0; i < 12; i++) await Promise.resolve(); };

test("go2rtc example negotiates video only, queues early ICE and cleans up tracks", async () => {
  const { source, pc, ws, video, timers, errors } = setup();
  await ws.onopen();
  assert.equal(pc.transceivers.length, 1); assert.equal(pc.transceivers[0][0], "video");
  assert.equal(ws.sent[0].type, "webrtc/offer");
  ws.onmessage({ data: JSON.stringify({ type: "webrtc/candidate", value: "candidate" }) });
  ws.onmessage({ data: JSON.stringify({ type: "webrtc/answer", value: "answer" }) });
  await flush(); assert.equal(pc.candidates.length, 1); assert.equal(errors.length, 0);
  let stopped = 0; pc.ontrack({ track: { stop: () => { stopped++; } } });
  assert.ok(video.srcObject); source.dispose();
  assert.equal(stopped, 1); assert.ok(pc.closed && ws.closed); assert.equal(video.srcObject, null); assert.equal(timers.size, 0);
});
test("go2rtc example cancels scheduled retries on removal and only matches powered TVs", () => {
  const { provider, source, ws, timers } = setup();
  assert.equal(provider.match({ entityId: "media_player.test", surface: "screen", state: { state: "on" } }), true);
  assert.equal(provider.match({ entityId: "media_player.test", surface: "screen", state: { state: "off" } }), false);
  ws.onerror(); assert.equal(timers.size, 1); source.dispose(); assert.equal(timers.size, 0);
});
test("a synchronously blocked WebSocket does not leak its peer connection", () => {
  const { source, pc, errors, timers } = setup(true);
  assert.ok(pc.closed); assert.equal(errors.length, 1); source.dispose(); assert.equal(timers.size, 0);
});
