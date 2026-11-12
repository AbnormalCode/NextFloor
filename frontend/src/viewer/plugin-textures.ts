/** Own the GPU textures and provider lifetimes. Plugins never need a Three.js dependency. */
import { CanvasTexture, Group, Mesh, MeshBasicMaterial, MeshStandardMaterial, PlaneGeometry, SRGBColorSpace, Texture, VideoTexture, type Scene } from "three";
import type { TextureContext, TextureProvider, TextureSource } from "../plugins/api.ts";
import { pluginTexture } from "../plugins/registry.ts";
import type { FloorLift } from "./live-energy.ts";
import type { TextureSurface } from "./texture-surfaces.ts";

export interface TextureInput {
  key: string;
  context: TextureContext;
  surface: TextureSurface;
  x: number;
  z: number;
  rotation: number;
}
interface View {
  input: TextureInput;
  provider: TextureProvider;
  registration: object;
  source: TextureSource;
  texture: Texture;
  mesh: Mesh<PlaneGeometry, MeshBasicMaterial | MeshStandardMaterial>;
  reportError: (error: unknown) => void;
  cancelFrame: () => void;
  alive: boolean;
}

export class PluginTextureLayer {
  readonly group = new Group();
  private readonly scene: Scene;
  private readonly lift: FloorLift;
  private readonly invalidate: () => void;
  private inputs: TextureInput[] = [];
  private views = new Map<string, View>();
  private failed = new Set<string>();
  private enabled = true;

  constructor(scene: Scene, lift: FloorLift, invalidate: () => void) {
    this.scene = scene; this.lift = lift; this.invalidate = invalidate;
    this.group.name = "plugin-textures";
    scene.add(this.group);
  }

  set(inputs: TextureInput[]): void {
    this.inputs = inputs;
    this.failed.clear();
    this.reconcile(true);
  }

  setEnabled(enabled: boolean): void {
    if (this.enabled === enabled) return;
    this.enabled = enabled;
    this.reconcile(false);
  }

  /** Called while floors animate; hidden floors release their streams. */
  step(): void { this.reconcile(false); }

  private reconcile(update: boolean): void {
    const keep = new Set<string>();
    for (const input of this.inputs) {
      if (!this.enabled || !this.lift(input.context.floorId).visible) continue;
      const found = pluginTexture(input.context);
      if (!found) continue;
      keep.add(input.key);
      let v = this.views.get(input.key);
      if (v && (v.registration !== found.registration || v.provider !== found.provider)) { this.drop(input.key, v); v = undefined; }
      if (!v && !this.failed.has(input.key)) v = this.create(input, found.provider, found.registration, found.reportError);
      if (!v) continue;
      v.input = input;
      if (update) {
        try { v.source.update?.(input.context); }
        catch (error) { v.reportError(error); this.drop(input.key, v); this.failed.add(input.key); continue; }
      }
      const s = input.surface, a = input.rotation * Math.PI / 180;
      // A small forward offset avoids z-fighting with the existing screen/photo layer.
      const sa = s.rotation * Math.PI / 180;
      const x = s.x - .02 * Math.sin(sa), z = s.z + .02 * Math.cos(sa);
      v.mesh.position.set(input.x + x * Math.cos(a) - z * Math.sin(a), this.lift(input.context.floorId).y + s.y, input.z + x * Math.sin(a) + z * Math.cos(a));
      v.mesh.rotation.set(0, -(a + sa), 0);
      v.mesh.scale.set(s.width, s.height, 1);
    }
    for (const [key, v] of this.views) if (!keep.has(key)) this.drop(key, v);
  }

  private create(input: TextureInput, provider: TextureProvider, registration: object, reportError: (error: unknown) => void): View | undefined {
    let source: TextureSource | undefined;
    let texture: Texture | undefined;
    let view: View | undefined;
    let alive = true;
    const invalidate = () => {
      if (!alive) return;
      if (texture && !(texture instanceof VideoTexture)) texture.needsUpdate = true;
      this.invalidate();
    };
    try {
      source = provider.create({ ...input.context, invalidate, reportError });
      if (!source || typeof source.dispose !== "function") throw new Error("texture provider must return source and dispose()");
      const element = source.source;
      if (element instanceof HTMLVideoElement) texture = new VideoTexture(element);
      else if (element instanceof HTMLCanvasElement) texture = new CanvasTexture(element);
      else if (element instanceof HTMLImageElement) { texture = new Texture(element); texture.needsUpdate = true; }
      else throw new Error("texture source must be a video, canvas or image element");
      texture.colorSpace = SRGBColorSpace;
      const material = source.unlit === false ? new MeshStandardMaterial({ map: texture }) : new MeshBasicMaterial({ map: texture, toneMapped: false });
      const mesh = new Mesh(new PlaneGeometry(1, 1), material);
      mesh.renderOrder = 7;
      view = { input, provider, registration, source, texture, mesh, reportError, cancelFrame: () => {}, alive: true };
      const current = view;
      if (element instanceof HTMLVideoElement) {
        let frame = 0;
        if (typeof element.requestVideoFrameCallback === "function") {
          const tick = () => { if (!alive) return; invalidate(); frame = element.requestVideoFrameCallback(tick); };
          frame = element.requestVideoFrameCallback(tick);
          current.cancelFrame = () => { alive = false; element.cancelVideoFrameCallback(frame); };
        } else {
          const timer = setInterval(() => { if (!element.paused && element.readyState >= 2) invalidate(); }, 1000 / 30);
          current.cancelFrame = () => { alive = false; clearInterval(timer); };
        }
      } else current.cancelFrame = () => { alive = false; };
      this.views.set(input.key, current);
      this.group.add(mesh);
      return current;
    } catch (error) {
      alive = false;
      reportError(error);
      view?.cancelFrame();
      view?.mesh.geometry.dispose();
      view?.mesh.material.dispose();
      texture?.dispose();
      try { source?.dispose?.(); } catch (cleanupError) { reportError(cleanupError); }
      this.failed.add(input.key);
      return undefined;
    }
  }

  private drop(key: string, v: View): void {
    if (!v.alive) return;
    v.alive = false;
    v.cancelFrame();
    try { v.source.dispose(); } catch (error) { v.reportError(error); }
    this.group.remove(v.mesh);
    v.mesh.geometry.dispose(); v.mesh.material.dispose(); v.texture.dispose();
    this.views.delete(key);
    this.invalidate();
  }

  dispose(): void {
    this.inputs = [];
    for (const [key, v] of this.views) this.drop(key, v);
    this.scene.remove(this.group);
  }
}
