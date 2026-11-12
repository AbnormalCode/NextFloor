/** Named flat surfaces: built-in displays/frames and stationary box faces from packs. */
import type { Floor, Furniture } from "../model.ts";
import { fittedParts, mountBase, packItem } from "../packs.ts";
import { pictureRect, screenRect, type ScreenRect } from "./furniture/screens.ts";

export interface TextureSurface {
  name: string;
  x: number;
  y: number;
  z: number;
  width: number;
  height: number;
  rotation: number;
}

export function textureSurfaces(f: Furniture, floor: Floor): TextureSurface[] {
  const out: TextureSurface[] = [];
  const rect = (name: string, r: ScreenRect | null) => {
    if (r) out.push({ name, x: (r.x0 + r.x1) / 2, y: (r.y0 + r.y1) / 2, z: r.z, width: r.x1 - r.x0, height: r.y1 - r.y0, rotation: 0 });
  };
  rect("screen", screenRect(f, floor));
  rect("picture", pictureRect(f, floor));
  const item = packItem(f.type);
  if (!item) return out;
  const [w, d, h] = [Math.max(.05, f.w), Math.max(.05, f.d), Math.max(.005, f.h)];
  for (const p of fittedParts(item, w, d, h)) {
    // Curved and moving geometry needs a different UV/animation contract; don't misplace an overlay.
    if (!p.texture || p.shape !== "box" || p.move || out.some((s) => s.name === p.texture)) continue;
    const a = (p.rot ?? 0) * Math.PI / 180;
    const mirror = f.mirror ? -1 : 1;
    out.push({ name: p.texture, x: mirror * (p.x * w - p.d * d / 2 * Math.sin(a)), y: mountBase(floor, f) + (p.y + p.h / 2) * h,
      z: p.z * d + p.d * d / 2 * Math.cos(a), width: p.w * w, height: p.h * h, rotation: mirror * (p.rot ?? 0) });
  }
  return out;
}
