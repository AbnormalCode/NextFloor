// Kitchen units, appliances, bathroom fittings and radiators.

import { Color } from "three";
import type { Furniture } from "../../model.ts";
import { DEG, type GeoBuffer } from "../geo.ts";
import { flipWinding, type Builder } from "./builder.ts";
import { cabinet, fronts } from "./parts.ts";
import { RADIATOR_Y } from "./screens.ts";
import { C, EDGE_FAINT, EDGE_FURN, EDGE_GLOW, M, material } from "./palette.ts";

const worktop = (b: Builder, w: number, d: number, h: number) => b.block({ x: [-w / 2, w / 2], y: [h - 0.04, h], z: [-d / 2, d / 2] }, M.worktop, EDGE_FURN);

/** A base unit with a worktop. */
export function kitchenUnit(b: Builder, w: number, d: number, h: number): void {
  cabinet(b, w, d - 0.02, h - 0.04, Math.max(1, Math.round(w / 0.6)), h - 0.2);
  worktop(b, w, d, h);
}

/** Just the worktop, 4 cm thick at its height, with nothing below it. */
export function worktopOnly(b: Builder, w: number, d: number, h: number): void {
  b.block({ x: [-w / 2, w / 2], y: [Math.max(0, h - 0.04), h], z: [-d / 2, d / 2] }, M.worktop, EDGE_FURN);
}

export function fridge(b: Builder, w: number, d: number, h: number): void {
  b.block({ x: [-w / 2, w / 2], y: [0, h], z: [-d / 2, d / 2] }, M.white, EDGE_FURN);
  const split = h * 0.62;
  b.seg(-w / 2, split, d / 2, w / 2, split, d / 2, EDGE_FAINT);
  const x = w / 2 - 0.06;
  b.seg(x, split + 0.08, d / 2 + 0.015, x, split + 0.4, d / 2 + 0.015, EDGE_GLOW);
  b.seg(x, split - 0.4, d / 2 + 0.015, x, split - 0.08, d / 2 + 0.015, EDGE_GLOW);
}

/** The thickness of a smart fridge's doors. */
export const FRIDGE_DOOR = 0.06;

/** A smart side-by-side fridge without its doors (they move, see pushFridgeDoors): the body and, behind the doors, shelves. */
export function fridgeSmart(b: Builder, w: number, d: number, h: number): void {
  const front = d / 2 - FRIDGE_DOOR;
  b.block({ x: [-w / 2, w / 2], y: [0.02, h], z: [-d / 2, front] }, M.body, EDGE_FURN);
  b.block({ x: [-w / 2 + 0.05, w / 2 - 0.05], y: [0, 0.02], z: [-d / 2 + 0.05, front - 0.05] }, M.dark);
  // shelves of both compartments, seen when a door stands open
  for (const y of [0.35, 0.7, 1.05, 1.4]) {
    if (y > h - 0.15) continue;
    b.seg(-w / 2 + 0.03, y, front + 0.001, -0.03, y, front + 0.001, EDGE_FAINT);
    b.seg(0.03, y, front + 0.001, w / 2 - 0.03, y, front + 0.001, EDGE_FAINT);
  }
}

type DoorGeometry = Pick<Furniture, "x" | "z" | "rotation" | "w" | "d" | "h" | "mirror">;

const OPENING_ANGLE = 1.83; // about 105°

function fridgeDoorsUnflipped(buf: GeoBuffer, f: DoorGeometry, base: number, left: number, right: number): void {
  const [c, s] = [Math.cos(f.rotation * DEG), Math.sin(f.rotation * DEG)];
  const mx = f.mirror ? -1 : 1;
  const plan = (lx: number, lz: number): [number, number] => [f.x + mx * lx * c - lz * s, f.z + mx * lx * s + lz * c];
  const [y0, y1] = [base + 0.05, base + f.h - 0.02];
  const red = new Color(0.75, 0.1, 0.14);
  const dark = new Color(C.dark);
  const accent = new Color(C.accent);
  const doorWidth = f.w / 2 - 0.006;

  // a door: u runs from the hinge along the door (positive to the right), v through its thickness (0 = front face)
  const door = (hingeX: number, sign: 1 | -1, angle: number) => {
    const open = angle / OPENING_ANGLE;
    const frontColor = new Color(0x1f2d4c).lerp(red, open);
    const sideColor = new Color(C.body).lerp(red, open * 0.8);
    const [ca, sa] = [Math.cos(angle), Math.sin(angle)];
    const at = (u: number, v: number): [number, number] => plan(hingeX + sign * (u * ca - v * sa), f.d / 2 + u * sa + v * ca);
    const quad = (p: [number, number][], ya: number, yb: number, color: Color) => {
      const [p0, p1, p2, p3] = p;
      buf.tri([p0[0], ya, p0[1]], [p1[0], ya, p1[1]], [p2[0], yb, p2[1]], color);
      buf.tri([p0[0], ya, p0[1]], [p2[0], yb, p2[1]], [p3[0], yb, p3[1]], color);
    };
    const box = (u0: number, u1: number, ya: number, yb: number, v0: number, v1: number, color: Color, face = color) => {
      const q = [at(u0, v1), at(u1, v1), at(u1, v0), at(u0, v0)];
      // the front (v1 side), the back, the sides, the top and the bottom
      quad([q[0], q[1], q[1], q[0]], ya, yb, face);
      quad([q[3], q[2], q[2], q[3]], ya, yb, color);
      quad([q[0], q[3], q[3], q[0]], ya, yb, color);
      quad([q[1], q[2], q[2], q[1]], ya, yb, color);
      quad([q[0], q[1], q[2], q[3]], yb, yb, color);
      quad([q[3], q[2], q[1], q[0]], ya, ya, color);
    };
    box(0, doorWidth, y0, y1, -FRIDGE_DOOR, 0, sideColor, frontColor);
    // the handle at the free edge
    box(doorWidth - 0.05, doorWidth - 0.03, base + f.h * 0.45, base + f.h * 0.75, 0.005, 0.025, accent);
    return box;
  };

  const leftDoor = door(-f.w / 2, 1, left * OPENING_ANGLE);
  // the water dispenser: a dark recess in the left door
  leftDoor(0.12, 0.3, base + f.h * 0.5, base + f.h * 0.68, 0.001, 0.005, dark);
  const rightDoor = door(f.w / 2, -1, right * OPENING_ANGLE);
  // the screen: a dark panel on the right door (a picture rule puts its picture over it)
  rightDoor(0.06, doorWidth - 0.06, base + f.h * 0.52, base + f.h * 0.86, 0.001, 0.005, dark);
}

/**
 * The two doors of a smart fridge, each swung open by a fraction (0 closed to 1 wide open) around its outer hinge: the left
 * one carries the water dispenser, the right one the screen. An open door turns red, as it should not stay open for long.
 */
export function pushFridgeDoors(buf: GeoBuffer, f: DoorGeometry, base: number, left: number, right: number): void {
  const first = buf.p.length;
  fridgeDoorsUnflipped(buf, f, base, left, right);
  if (f.mirror) flipWinding(buf, first);
}

export function stove(b: Builder, w: number, d: number, h: number): void {
  cabinet(b, w, d - 0.02, h - 0.04, 1, h - 0.24, true);
  b.block({ x: [-w / 2, w / 2], y: [h - 0.04, h], z: [-d / 2, d / 2] }, M.dark, EDGE_FURN);
  const plates: [number, number, number][] = [[-0.14, -0.13, 0.09], [0.14, -0.13, 0.07], [-0.14, 0.13, 0.07], [0.14, 0.13, 0.09]];
  for (const [x, z, r] of plates) b.cylinder((x * w) / 0.6, (z * d) / 0.62, r, h, h + 0.004, material(C.dark, 0x16263f), 12, EDGE_GLOW);
}

export function sink(b: Builder, w: number, d: number, h: number): void {
  cabinet(b, w, d - 0.02, h - 0.04, Math.max(1, Math.round(w / 0.45)), h - 0.2);
  const basin = Math.min(0.5, w - 0.2);
  const top = (x0: number, x1: number, z0: number, z1: number, edges = false) => b.block({ x: [x0, x1], y: [h - 0.04, h], z: [z0, z1] }, M.worktop, edges ? EDGE_FURN : null);
  top(-w / 2, -basin / 2, -d / 2, d / 2, true);
  top(basin / 2, w / 2, -d / 2, d / 2, true);
  top(-basin / 2, basin / 2, -d / 2, -d / 2 + 0.1);
  top(-basin / 2, basin / 2, d / 2 - 0.08, d / 2);
  b.block({ x: [-basin / 2, basin / 2], y: [h - 0.2, h - 0.17], z: [-d / 2 + 0.1, d / 2 - 0.08] }, M.metal, EDGE_GLOW);
  b.cylinder(0, -d / 2 + 0.05, 0.02, h, h + 0.28, M.metal, 8);
  b.block({ x: [-0.015, 0.015], y: [h + 0.24, h + 0.28], z: [-d / 2 + 0.05, -d / 2 + 0.22] }, M.metal);
}

export function kitchenWall(b: Builder, w: number, d: number, h: number): void {
  // hangs above the worktop
  const y0 = 1.45;
  b.block({ x: [-w / 2, w / 2], y: [y0, y0 + h], z: [-d / 2, d / 2 - 0.02] }, M.body, EDGE_FURN);
  fronts(b, -w / 2, w / 2, y0, y0 + h, d / 2 - 0.02, Math.max(1, Math.round(w / 0.5)), y0 + 0.08);
}

export function kitchenTall(b: Builder, w: number, d: number, h: number): void {
  b.block({ x: [-w / 2, w / 2], y: [0.02, h], z: [-d / 2, d / 2 - 0.02] }, M.body, EDGE_FURN);
  b.block({ x: [-w / 2 + 0.02, w / 2 - 0.02], y: [0, 0.08], z: [-d / 2 + 0.02, d / 2 - 0.06] }, M.dark);
  const z = d / 2 - 0.02;
  // an oven with a dark glass door and a glowing handle, fronts above and below
  b.block({ x: [-w / 2 + 0.03, w / 2 - 0.03], y: [0.85, 1.45], z: [z, z + 0.01] }, M.dark, EDGE_GLOW);
  b.seg(-w / 2 + 0.08, 1.4, z + 0.02, w / 2 - 0.08, 1.4, z + 0.02, EDGE_GLOW);
  for (const y of [0.85, 1.45]) b.seg(-w / 2, y, z, w / 2, y, z, EDGE_FAINT);
  b.seg(w / 2 - 0.06, 0.5, z + 0.012, w / 2 - 0.06, 0.7, z + 0.012, EDGE_GLOW);
  b.seg(w / 2 - 0.06, 1.6, z + 0.012, w / 2 - 0.06, 1.8, z + 0.012, EDGE_GLOW);
}

export function island(b: Builder, w: number, d: number, h: number): void {
  const inner = d - 0.3;
  b.block({ x: [-w / 2 + 0.05, w / 2 - 0.05], y: [0.08, h - 0.04], z: [-d / 2 + 0.02, -d / 2 + inner] }, M.body, EDGE_FURN);
  b.block({ x: [-w / 2 + 0.07, w / 2 - 0.07], y: [0, 0.08], z: [-d / 2 + 0.04, -d / 2 + inner - 0.04] }, M.dark);
  fronts(b, -w / 2 + 0.05, w / 2 - 0.05, 0.08, h - 0.04, -d / 2 + inner, Math.max(2, Math.round(w / 0.6)), h - 0.2);
  // the worktop overhangs at the front, for bar stools
  worktop(b, w, d, h);
}

export function dishwasher(b: Builder, w: number, d: number, h: number): void {
  b.block({ x: [-w / 2, w / 2], y: [0.02, h - 0.04], z: [-d / 2, d / 2 - 0.02] }, M.body, EDGE_FURN);
  b.block({ x: [-w / 2 + 0.02, w / 2 - 0.02], y: [0, 0.08], z: [-d / 2 + 0.02, d / 2 - 0.06] }, M.dark);
  b.seg(-w / 2 + 0.08, h - 0.12, d / 2 - 0.008, w / 2 - 0.08, h - 0.12, d / 2 - 0.008, EDGE_GLOW);
  worktop(b, w, d, h);
}

/** A washing machine, or a dryer (`dryer`): a control panel line and a round door drawn on the front. */
export function laundry(b: Builder, w: number, d: number, h: number, dryer: boolean): void {
  b.block({ x: [-w / 2, w / 2], y: [0, h], z: [-d / 2, d / 2 - 0.02] }, M.white, EDGE_FURN);
  const z = d / 2 - 0.012;
  b.seg(-w / 2, h - 0.14, z, w / 2, h - 0.14, z, EDGE_FAINT);
  b.seg(w / 2 - 0.16, h - 0.07, z, w / 2 - 0.08, h - 0.07, z, EDGE_GLOW);
  const cy = (h - 0.14) / 2 + 0.04;
  const r = Math.min(w * 0.36, (h - 0.2) * 0.42);
  // the door ring (and an inner ring on a washer), drawn segment by segment
  const sides = 20;
  for (let i = 0; i < sides; i++) {
    const [a0, a1] = [(i / sides) * Math.PI * 2, ((i + 1) / sides) * Math.PI * 2];
    const arc = (scale: number, color: typeof EDGE_GLOW) => b.seg(Math.cos(a0) * r * scale, cy + Math.sin(a0) * r * scale, z, Math.cos(a1) * r * scale, cy + Math.sin(a1) * r * scale, z, color);
    arc(1, EDGE_GLOW);
    if (!dryer) arc(0.72, EDGE_FAINT);
  }
}

export function bathtub(b: Builder, w: number, d: number, h: number): void {
  const rim = 0.07;
  b.block({ x: [-w / 2, w / 2], y: [0, h - 0.02], z: [-d / 2, d / 2] }, M.white, EDGE_FURN);
  const lip = (x0: number, x1: number, z0: number, z1: number) => b.block({ x: [x0, x1], y: [h - 0.02, h], z: [z0, z1] }, M.worktop);
  lip(-w / 2, w / 2, -d / 2, -d / 2 + rim);
  lip(-w / 2, w / 2, d / 2 - rim, d / 2);
  lip(-w / 2, -w / 2 + rim, -d / 2 + rim, d / 2 - rim);
  lip(w / 2 - rim, w / 2, -d / 2 + rim, d / 2 - rim);
  b.block({ x: [-w / 2 + rim, w / 2 - rim], y: [h - 0.03, h - 0.02], z: [-d / 2 + rim, d / 2 - rim] }, M.glass, EDGE_GLOW);
  b.cylinder(-w / 2 + 0.04, 0, 0.02, h, h + 0.12, M.metal, 8);
}

export function shower(b: Builder, w: number, d: number, h: number): void {
  b.block({ x: [-w / 2, w / 2], y: [0, 0.05], z: [-d / 2, d / 2] }, M.worktop, EDGE_FURN);
  b.cylinder(0, 0, 0.04, 0.05, 0.052, M.metal, 8);
  // glass walls at the front and one side: only edges, the glass itself stays clear
  for (const [xa, za, xb, zb] of [[-w / 2, d / 2, w / 2, d / 2], [w / 2, -d / 2, w / 2, d / 2]]) {
    b.seg(xa, 0.05, za, xb, 0.05, zb, EDGE_GLOW);
    b.seg(xa, h, za, xb, h, zb, EDGE_GLOW);
    b.seg(xb, 0.05, zb, xb, h, zb, EDGE_GLOW);
  }
  b.cylinder(-w / 2 + 0.06, -d / 2 + 0.06, 0.015, 0.05, h - 0.05, M.metal, 6);
  b.cylinder(-w / 2 + 0.2, -d / 2 + 0.2, 0.1, h - 0.08, h - 0.06, M.metal, 12, EDGE_GLOW);
}

export function wc(b: Builder, w: number, d: number, h: number): void {
  const tank = Math.min(0.18, d * 0.3);
  b.block({ x: [-w / 2, w / 2], y: [0.45, h], z: [-d / 2, -d / 2 + tank] }, M.white, EDGE_FURN);
  b.block({ x: [-w * 0.3, w * 0.3], y: [0, 0.36], z: [-d / 2 + tank - 0.02, d / 2 - 0.12] }, M.white);
  b.cylinder(0, d / 2 - 0.26, Math.min(w / 2, 0.19), 0.36, 0.41, M.white, 12, EDGE_FURN);
  b.block({ x: [-w / 2 + 0.02, w / 2 - 0.02], y: [0.41, 0.43], z: [-d / 2 + tank, -d / 2 + tank + 0.05] }, M.worktop);
}

export function washbasin(b: Builder, w: number, d: number, h: number): void {
  cabinet(b, w, d - 0.02, h - 0.12, w > 0.8 ? 2 : 1, h - 0.3);
  b.block({ x: [-w / 2, w / 2], y: [h - 0.12, h], z: [-d / 2, d / 2] }, M.white, EDGE_FURN);
  b.block({ x: [-w / 2 + 0.07, w / 2 - 0.07], y: [h - 0.005, h], z: [-d / 2 + 0.12, d / 2 - 0.06] }, M.glass, EDGE_GLOW);
  b.cylinder(0, -d / 2 + 0.06, 0.018, h, h + 0.2, M.metal, 8);
  // the mirror above
  b.block({ x: [-w / 2 + 0.04, w / 2 - 0.04], y: [h + 0.35, h + 1], z: [-d / 2, -d / 2 + 0.02] }, M.glass, EDGE_GLOW);
}

export { RADIATOR_Y } from "./screens.ts";

/** A radiator on the wall (back at -z): a panel with vertical fins, standing on short brackets. */
export function radiator(b: Builder, w: number, d: number, h: number): void {
  const y0 = RADIATOR_Y;
  b.block({ x: [-w / 2 + 0.05, -w / 2 + 0.08], y: [0, y0], z: [-d / 2, -d / 2 + 0.03] }, M.metal);
  b.block({ x: [w / 2 - 0.08, w / 2 - 0.05], y: [0, y0], z: [-d / 2, -d / 2 + 0.03] }, M.metal);
  b.block({ x: [-w / 2, w / 2], y: [y0, y0 + h], z: [-d / 2 + 0.02, d / 2] }, M.white, EDGE_FURN);
  const fins = Math.max(3, Math.round(w / 0.1));
  for (let i = 1; i < fins; i++) {
    const x = -w / 2 + (w / fins) * i;
    b.seg(x, y0 + 0.03, d / 2 + 0.002, x, y0 + h - 0.03, d / 2 + 0.002, EDGE_FAINT);
  }
}
