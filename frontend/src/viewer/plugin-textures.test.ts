import assert from "node:assert/strict";
import { afterEach, test } from "node:test";
import { Scene } from "three";
import { registerPlugin, resetPlugins, pluginStatuses } from "../plugins/registry.ts";
import type { TextureProvider } from "../plugins/api.ts";
import { PluginTextureLayer, type TextureInput } from "./plugin-textures.ts";

// Only element identity and video callbacks are needed; actual WebGL is checked in the browser smoke test.
class Canvas {}
class Image {}
class Video {
  callbacks = new Map<number, () => void>();
  next = 1;
  requestVideoFrameCallback(fn: () => void) { const id = this.next++; this.callbacks.set(id, fn); return id; }
  cancelVideoFrameCallback(id: number) { this.callbacks.delete(id); }
}
Object.assign(globalThis, { HTMLCanvasElement: Canvas, HTMLImageElement: Image, HTMLVideoElement: Video });
afterEach(resetPlugins);
const input = { key: "floor/f/screen", x: 0, z: 0, rotation: 0, surface: { name: "screen", x: 0, y: 1, z: 0, width: 1, height: 1, rotation: 0 },
  context: { hass: { states: {} }, floorId: "floor", furnitureId: "f", furnitureType: "tv_wall", surface: "screen", entityId: null, state: undefined } } as TextureInput;
const register = (provider: TextureProvider) => registerPlugin({ id: "texture-test", apiVersion: 1, textures: [provider] });
const layer = (visible = () => true) => new PluginTextureLayer(new Scene(), () => ({ y: 2, dy: 0, visible: visible() }), () => {});

test("state updates keep one source; replacement/removal dispose exactly once", () => {
  let created = 0, disposed = 0, updated = 0;
  const provider: TextureProvider = { match: () => true, create: () => { created++; return { source: new Canvas() as HTMLCanvasElement, update: () => { updated++; }, dispose: () => { disposed++; } }; } };
  register(provider);
  const l = layer(); l.set([input]); l.set([input]); l.step();
  assert.equal(created, 1); assert.equal(updated, 2);
  assert.equal(l.group.children[0].position.y, 3);
  register(provider); l.set([input]);
  assert.equal(created, 2); assert.equal(disposed, 1);
  resetPlugins(); l.step(); l.dispose();
  assert.equal(disposed, 2); assert.equal(l.group.children.length, 0);
});

test("hidden floors and hidden viewers release connections and recreate when shown", () => {
  let visible = true, disposed = 0, created = 0;
  register({ match: () => true, create: () => { created++; return { source: new Canvas() as HTMLCanvasElement, dispose: () => { disposed++; } }; } });
  const l = layer(() => visible); l.set([input]);
  visible = false; l.step(); assert.equal(disposed, 1);
  visible = true; l.step(); assert.equal(created, 2);
  l.setEnabled(false); assert.equal(disposed, 2);
  l.set([input]); assert.equal(created, 2);
  l.setEnabled(true); assert.equal(created, 3);
  l.set([]); l.dispose(); assert.equal(disposed, 3);
});

test("malformed sources and throwing lifecycle hooks cannot break other surfaces", () => {
  let cleanups = 0;
  register({ match: () => true, create: () => ({ source: {} as HTMLCanvasElement, dispose: () => { cleanups++; throw new Error("cleanup"); } }) });
  const l = layer(); l.set([input]); l.step(); l.step();
  assert.equal(cleanups, 1); assert.equal(l.group.children.length, 0);
  assert.equal(pluginStatuses()[0].errors.length, 2);
  register({ match: () => true, create: () => ({ source: new Canvas() as HTMLCanvasElement, update: () => { throw new Error("update"); }, dispose: () => { cleanups++; } }) });
  l.set([input]); assert.equal(cleanups, 2); l.dispose();
});

test("video callbacks and GPU resources are released; late invalidations are inert", () => {
  const video = new Video(); let invalidate = () => {}, renders = 0, textures = 0, materials = 0, geometry = 0;
  register({ match: () => true, create: (ctx) => { invalidate = ctx.invalidate; return { source: video as unknown as HTMLVideoElement, dispose: () => {} }; } });
  const l = new PluginTextureLayer(new Scene(), () => ({ y: 0, dy: 0, visible: true }), () => { renders++; });
  l.set([input]);
  const mesh = l.group.children[0] as import("three").Mesh<import("three").PlaneGeometry, import("three").MeshBasicMaterial>;
  mesh.geometry.addEventListener("dispose", () => geometry++);
  mesh.material.addEventListener("dispose", () => materials++);
  mesh.material.map!.addEventListener("dispose", () => textures++);
  assert.equal(video.callbacks.size, 2); // Three.js + the render-on-demand callback
  l.dispose(); assert.equal(video.callbacks.size, 0);
  const before = renders; invalidate(); assert.equal(renders, before);
  assert.deepEqual([textures, materials, geometry], [1, 1, 1]);
});


test("switching between providers in one plugin recreates the source", () => {
  let first = true, disposed = 0, created = 0;
  const create = () => { created++; return { source: new Canvas() as HTMLCanvasElement, dispose: () => { disposed++; } }; };
  registerPlugin({ id: "switching", apiVersion: 1, textures: [{ match: () => first, create }, { match: () => !first, create }] });
  const l = layer(); l.set([input]); first = false; l.set([input]);
  assert.equal(created, 2); assert.equal(disposed, 1);
  l.dispose(); assert.equal(disposed, 2);
});
