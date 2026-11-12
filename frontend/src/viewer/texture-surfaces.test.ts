import assert from "node:assert/strict";
import { afterEach, test } from "node:test";
import { newFloor, type Furniture } from "../model.ts";
import { setPacks, type PackPart } from "../packs.ts";
import { textureSurfaces } from "./texture-surfaces.ts";

afterEach(() => setPacks([]));
const f: Furniture = { id: "f", type: "tv_wall", x: 0, z: 0, rotation: 0, w: 2, d: .2, h: 1, variant: null, entity: null, power: null };
const floor = newFloor("floor", "Floor", 0);
function pack(parts: PackPart[]) {
  setPacks([{ id: "test", name: "Test", publisher: "Test", items: [{ id: "box", name: { en: "Box" }, size: [2, .2, 1], stretch: true, parts }] }]);
}
const part: PackPart = { shape: "box", x: .1, z: 0, w: .5, d: 1, y: .2, h: .6, color: "dark", texture: "art" };

test("existing TVs expose screen without modifying their furniture definition", () => {
  const surfaces = textureSurfaces(f, floor);
  assert.equal(surfaces[0].name, "screen");
  assert.ok(surfaces[0].width > 1.9);
  assert.deepEqual(textureSurfaces({ ...f, type: "table" }, floor), []);
});
test("named surfaces follow mounting, part rotation and mirroring", () => {
  pack([{ ...part, rot: 90 }]);
  const furniture = { ...f, type: "pack:test:box", mount_y: 2 };
  const [surface] = textureSurfaces(furniture, floor);
  assert.ok(Math.abs(surface.x - .1) < 1e-6);
  assert.ok(Math.abs(surface.z) < 1e-6);
  assert.equal(surface.y, 2.5);
  assert.equal(surface.rotation, 90);
  const [mirrored] = textureSurfaces({ ...furniture, mirror: true }, floor);
  assert.equal(mirrored.x, -surface.x); assert.equal(mirrored.rotation, -90);
  assert.equal(mirrored.width, surface.width);
});
test("moving and curved parts do not produce misleading flat overlays", () => {
  pack([{ ...part, shape: "cyl" }, { ...part, move: "down" }]);
  assert.deepEqual(textureSurfaces({ ...f, type: "pack:test:box" }, floor), []);
});
