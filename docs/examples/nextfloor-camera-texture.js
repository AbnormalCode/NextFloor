/** Copy to /config/www/nextfloor/camera-texture.js, then add /local/nextfloor/camera-texture.js under Extensions → Plugins.
 * Select a TV (screen) or a picture frame in the editor and fill in the "Camera textures" fields of its form:
 * the Home Assistant camera to show, and whether to refresh snapshots every few seconds or play the live MJPEG stream.
 * A TV shows its camera only while its linked media player is on; a frame always shows it.
 * The picture is fitted into a 16:9 canvas (black bars), so it looks right on 16:9 screens and a little stretched elsewhere.
 * It uses Home Assistant's own camera proxy with the camera's access token, so the browser must load NextFloor from the same
 * address as Home Assistant. No external JS dependencies, no credentials stored anywhere.
 */
const SURFACES = ["screen", "picture"];
const OFF = ["off", "unavailable", "unknown", "standby"];
const WIDTH = 1280, HEIGHT = 720;
// A one-pixel GIF: assigning it to an <img> closes a running MJPEG connection.
const BLANK = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";

const plugin = {
  id: "camera-texture",
  name: "Camera textures",
  version: "0.1.0",
  apiVersion: 1,
  textures: [{
    surfaces: SURFACES,
    settings: [
      { key: "camera", type: "entity", domains: ["camera"], default: "", label: { en: "Camera", de: "Kamera" } },
      { key: "mode", type: "select", default: "snapshot", label: { en: "Picture", de: "Bild" },
        options: [["snapshot", { en: "Snapshots every few seconds", de: "Standbild alle paar Sekunden" }], ["mjpeg", { en: "Live (MJPEG)", de: "Live (MJPEG)" }]] },
      { key: "interval", type: "number", default: 5, min: 1, max: 60, step: 1, label: { en: "Snapshot every (s)", de: "Standbild alle (s)" } },
      { key: "fps", type: "number", default: 8, min: 1, max: 15, step: 1, label: { en: "Live frames per second", de: "Live-Bilder pro Sekunde" },
        hint: { en: "Every visible screen decodes the stream in the browser; keep it low", de: "Jeder sichtbare Bildschirm dekodiert den Stream im Browser; niedrig halten" } },
    ],
    match: ({ hass, surface, entityId, state, settings }) => {
      if (!SURFACES.includes(surface) || !settings.camera) return false;
      const camera = hass.states[settings.camera];
      if (!camera || camera.state === "unavailable") return false;
      // A TV linked to a media player shows the camera only while that player is on.
      return !entityId || (!!state && !OFF.includes(state.state));
    },
    create: (ctx) => {
      const { settings, reportError, invalidate } = ctx;
      let latest = ctx, stopped = false, failing = false, timer = 0;
      const canvas = document.createElement("canvas");
      canvas.width = WIDTH;
      canvas.height = HEIGHT;
      const g = canvas.getContext("2d");
      g.fillStyle = "#000";
      g.fillRect(0, 0, WIDTH, HEIGHT);
      // The camera entity's picture path carries the access token, which Home Assistant renews; read it fresh each time.
      const pictureUrl = (stream) => {
        const path = latest.hass.states[settings.camera]?.attributes?.entity_picture;
        if (typeof path !== "string" || !path) throw new Error("The camera has no picture");
        let url = path;
        if (stream) {
          if (!path.includes("/api/camera_proxy/")) throw new Error("The camera offers no MJPEG stream");
          url = path.replace("/api/camera_proxy/", "/api/camera_proxy_stream/");
        }
        return typeof latest.hass.hassUrl === "function" ? latest.hass.hassUrl(url) : url;
      };
      const draw = (img) => {
        const w = img.naturalWidth, h = img.naturalHeight;
        if (!w || !h) return;
        const k = Math.min(WIDTH / w, HEIGHT / h);
        g.fillRect(0, 0, WIDTH, HEIGHT);
        g.drawImage(img, (WIDTH - w * k) / 2, (HEIGHT - h * k) / 2, w * k, h * k);
        invalidate();
      };
      // Report a failure once per streak, so a camera that stays offline does not flood the Extensions page.
      const fail = (error) => { if (!failing) reportError(error); failing = true; };
      // One pending timer at most, so dispose() can always cancel it.
      const later = (fn, ms) => { if (stopped) return; clearTimeout(timer); timer = setTimeout(fn, ms); };
      const img = new Image();
      let stop;
      if (settings.mode === "mjpeg") {
        const open = () => {
          if (stopped) return;
          try { img.src = pictureUrl(true); } catch (error) { fail(error); later(open, 5000); }
        };
        img.onload = () => { failing = false; };
        img.onerror = () => { fail(new Error("The camera stream failed")); later(open, 5000); };
        open();
        const every = setInterval(() => draw(img), 1000 / Math.max(1, Math.min(15, Number(settings.fps) || 8)));
        stop = () => clearInterval(every);
      } else {
        const delay = Math.max(1, Math.min(60, Number(settings.interval) || 5)) * 1000;
        const next = (ms) => later(tick, ms);
        const tick = () => {
          if (stopped) return;
          let url;
          try { url = pictureUrl(false); } catch (error) { fail(error); next(Math.max(delay, 5000)); return; }
          img.src = url + (url.includes("?") ? "&" : "?") + "_=" + Date.now();
        };
        img.onload = () => { failing = false; draw(img); next(delay); };
        img.onerror = () => { fail(new Error("The camera snapshot failed")); next(Math.max(delay, 5000)); };
        tick();
        stop = () => {};
      }
      return {
        source: canvas,
        unlit: true,
        update: (next) => { latest = next; },
        dispose: () => {
          stopped = true;
          clearTimeout(timer);
          stop();
          img.onload = img.onerror = null;
          img.src = BLANK;
        },
      };
    },
  }],
};
if (window.NextFloor) window.NextFloor.register(plugin);
else (window.__nextfloorPlugins ??= []).push(plugin);
