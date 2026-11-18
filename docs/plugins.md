# Writing NextFloor plugins

Plugins add things to NextFloor without changing its code: your own light animations, support for
entities NextFloor does not know, and small cards in a room's panel. A plugin is one JavaScript
file (an ES module) that calls `window.NextFloor.register({...})`.

> **Trust:** a plugin runs in your browser with the same rights as NextFloor and Home Assistant's
> frontend. Only install plugins whose source you trust.

## Installing a plugin

**From the store:** open **Extensions → Plugins → Open plugin store** and press **Install**. The store
lists plugins that were reviewed and added through a pull request to
[NextFloor-Plugins](https://github.com/therealMRBK/NextFloor-Plugins), where you also find how to submit your own.
Each entry is pinned to one commit and carries the file's SHA-256, which NextFloor checks before the
plugin runs. A newer version of a plugin shows up as **Update** in the store. Store plugins must be a
single self-contained file, because they are run from memory after the check.

**Your own file:**

1. Put the file into Home Assistant's `www` folder, e.g. `/config/www/nextfloor/my-plugin.js`.
2. In NextFloor open **Extensions → Plugins**, enter `/local/nextfloor/my-plugin.js` and press **Add**.
3. The plugin loads right away. Turning a plugin off or removing it takes effect after reloading the page.

Allowed addresses: `/local/…` (the `www` folder), `/hacsfiles/…` (installed by HACS) and `https://…`,
each ending in `.js` or `.mjs`. At most 20 plugins.

A plugin can also be loaded as a **dashboard resource** (Settings → Dashboards → Resources, type
JavaScript module), which is how HACS installs frontend plugins. It then shows up on the Extensions
page as "registered by a dashboard resource". Resources only load with dashboards, so for the
sidebar panel add the plugin on the Extensions page as well.

## The API (version 1)

```js
const plugin = {
  id: "my-plugin",        // required: letters, digits, '.', '_', '-'; the same id again replaces the plugin
  name: "My plugin",      // shown on the Extensions page and as the room-section title
  version: "1.0.0",
  apiVersion: 1,          // required: must be 1

  lightAnimations: { … },
  devices: [ … ],
  roomSections: [ … ],
};

// works whether NextFloor loaded before or after your script
if (window.NextFloor) window.NextFloor.register(plugin);
else (window.__nextfloorPlugins ??= []).push(plugin);
```

`register` throws when the plugin is not valid (wrong `apiVersion`, a missing function, a built-in
animation name). Errors your functions throw later are caught; NextFloor keeps working and shows
the error next to the plugin on the Extensions page.

### `lightAnimations`

A map from an animation name to a function `(glow, seconds) => glow`. `glow` is
`{ color: [r, g, b], level }` with every value between 0 and 1, after the light's brightness was
applied; `seconds` counts up while the page is open. Return a new glow; values are clamped to 0–1.

The names appear in a light's **Effects** settings next to the built-in Rainbow, Pulse and Flicker,
so you can map e.g. the WLED effect "Fireworks" to your `"strobe"`. The names `none`, `rainbow`,
`pulse` and `flicker` are taken. Keep the function cheap: it runs every frame for every lit lamp.

```js
lightAnimations: {
  strobe: (glow, seconds) => ({ ...glow, level: seconds % 0.5 < 0.25 ? glow.level : 0 }),
},
```

### `devices`

Each entry handles the entities its `match(entityId, state)` returns `true` for:

| Field | What it does |
|---|---|
| `match(entityId, state)` | Required. Runs for every placed entity, so keep it cheap. |
| `kind` | For entities of domains NextFloor does not know (`vacuum`, `lawn_mower`, `todo`, …): NextFloor then shows them like this kind (`light`, `switch`, `fan`, `cover`, `climate`, `media`, `lock`, `sensor`, `binary`, `scene`, `script`; default `sensor`). |
| `marker({ hass, entityId, state })` | Returns what to change on the device's marker: `icon` (`"mdi:name"` or inline SVG), `text` (max. 60 characters), `active` (highlighted like an "on" device). Leave a field out to keep NextFloor's value. An icon picked in the plan wins over the plugin's. |

| `watch({ hass, entityId, state })` | Further entity ids whose changes redraw this device (e.g. a camera's motion sensor that colours its wedge). The 3D view only redraws for entities it watches. |
| `settings` | Extra fields in the device's form in the editor (see below). The values are stored with the placement and handed to `floorWedge` and `tap`. |
| `floorWedge({ hass, entityId, state, placement, settings })` | A field of view or range drawn flat on the floor from the device, stopping at walls. Return `{ angle, reach, near?, color?, opacity?, tapThrough? }` or `null`: `angle` in degrees (360 all around), `reach` and `near` in metres, `color` as `"#rrggbb"`, `opacity` 0–1. It points the way the device is turned (the handle in front of it in the editor). A tap on the wedge taps the device, unless `tapThrough`. |
| `tap({ hass, entityId, state, placement, settings, showWindow, moreInfo })` | A tap on the device's marker or wedge. Return `true` when you handled it; otherwise NextFloor does its usual thing. `showWindow(node, { title })` shows a node in a small window in the lower right corner of the 3D view (`null` closes it; a node with a `hass` property gets every new hass object). `moreInfo(entityId?)` opens Home Assistant's dialog. |

`placement` is where the device stands: `floorId`, `roomId`, `x`, `z`, `y` (height above the floor) and `rotation` (degrees).

```js
devices: [{
  match: (id) => id.startsWith("vacuum."),
  kind: "switch",
  marker: ({ state }) => ({ icon: "mdi:robot-vacuum", text: state.state, active: state.state === "cleaning" }),
}],
```

#### Device settings

Each entry of `settings` adds a field to the device's form, under the plugin's name:

```js
settings: [
  { key: "fov", label: { en: "Field of view (°)", de: "Blickwinkel (°)" }, type: "number", default: 90, min: 20, max: 180, step: 5 },
  { key: "mount", label: "Mount", type: "select", default: "wall", options: [["wall", "Wall"], ["dome", "Ceiling"]] },
  { key: "wedge", label: "Show the wedge", type: "boolean", default: true, hint: "Shown when hovering" },
],
```

`key` is 1–32 letters, digits or `_`; `type` is `number`, `select`, `boolean`, `text` (free text up to `maxLength`, at most 120 characters, with an optional `placeholder`; never for secrets, it is stored in the plan) or `entity` (an entity picker; `domains: ["binary_sensor"]` limits the choice, the value is an entity id, `""` for none). `marker` and `watch` get the settings too (`ctx.settings`). Labels, hints and option labels are
plain text or texts by language code (English is the fallback). Your functions get `settings` with every key filled
in: the stored value when it fits the field, the default otherwise.

A complete plugin with all of this: [NextFloor Cameras](https://github.com/therealMRBK/NextFloor-Plugins/blob/main/plugins/cameras/nextfloor-cameras.js)
(field-of-view wedges, red on detection, live picture in the corner, alarm panels).

### `roomSections`

Extra blocks at the end of a room's panel, titled with the plugin's name. `render({ hass, room, entities })`
gets the room (`id`, `name`, `area_id`) and the entities the panel lists; return a DOM node, a string,
or `null` to show nothing in this room. It runs again whenever Home Assistant's state changes, so
build the content fresh each time and keep it small.

```js
roomSections: [{
  id: "open-windows",
  render: ({ hass, entities }) => {
    const open = entities.filter((id) => hass.states[id]?.attributes.device_class === "window" && hass.states[id]?.state === "on");
    return open.length ? `🪟 ${open.length} window(s) open` : null;
  },
}],
```

A complete example with all three: [`docs/examples/nextfloor-plugin-example.js`](examples/nextfloor-plugin-example.js).

## Compatibility

The API version only changes when something breaks existing plugins; new optional fields can come
in any release. A plugin written for another API version is refused with a message on the
Extensions page instead of half-working.

## Texture providers

An optional `textures` array extends API version 1 without importing Three.js. A provider supplies an HTML video, canvas or image element for a **named furniture surface**, independent of media-player behaviour. This extension requires a NextFloor build containing texture providers.

```js
textures: [{
  match: ({ furnitureId, surface }) => furnitureId === "my-frame" && surface === "picture",
  create: ({ invalidate }) => {
    const source = document.createElement("canvas");
    source.width = 512;
    source.height = 288;
    const draw = () => {
      const ctx = source.getContext("2d");
      ctx.fillStyle = "#102030";
      ctx.fillRect(0, 0, source.width, source.height);
      ctx.fillStyle = "white";
      ctx.font = "48px sans-serif";
      ctx.fillText(new Date().toLocaleTimeString(), 30, 160);
      invalidate();
    };
    draw();
    const timer = setInterval(draw, 1000);
    return { source, unlit: true, dispose: () => clearInterval(timer) };
  },
}],
```

`match(context)` and `update(context)` receive `hass`, `floorId`, `furnitureId`, `furnitureType`, `surface`, `entityId` (the resolved furniture entity, or null) and `state` (or undefined) and `settings` (see below). The first matching provider wins. Match may run every rendered frame; keep it cheap and free of side effects. Returning false restores the normal surface. HA updates reach providers even when an entity is outside NextFloor's normal watch list.

`create(context)` additionally receives `invalidate()` and `reportError(error)`. It returns synchronously with `{ source, unlit?, update?, dispose }`. Start asynchronous work internally and cancel it in `dispose`; do not return a Promise. Keep the source element and its dimensions stable for the instance's lifetime. Drawn canvas frames and loaded images need `invalidate()`; video frames automatically request rendering, with a 30 fps fallback on browsers without video-frame callbacks. Set image/video CORS attributes before loading cross-origin media. Textures stretch to the surface's aspect ratio; supply matching content or letterbox it in a canvas.

`unlit` defaults to true (appropriate for a display). False uses a material affected by scene lights. `update` changes an existing instance without reconnecting its stream. `dispose` must release timers, event listeners, media tracks and connections. NextFloor owns and disposes its GPU texture, geometry and material. Synchronous plugin errors are isolated and recorded under Extensions; asynchronous work should call `reportError` and handle its own retries.

Instances are recreated after provider replacement or visibility changes. A hidden floor, hidden browser tab, off-screen NextFloor card, dimmed view, removed furniture or destroyed viewer releases its resources. Camera-frustum/occlusion culling is not implemented: a surface outside the camera's view on an otherwise visible floor can still stream. Time travel disables plugin textures to avoid displaying today's live feed over historic state.

### Settings per furniture item

A provider can ask for values the person sets in the editor, for example a stream address. List them in `settings` (the same fields as device settings, including `text`) and name the surfaces that show them in `surfaces`:

```js
textures: [{
  surfaces: ["screen"],
  settings: [{ key: "stream", type: "text", default: "", label: "Stream name", placeholder: "tv_capture" }],
  match: ({ surface, settings }) => surface === "screen" && settings.stream !== "",
  create: ({ settings }) => { /* … */ },
}],
```

Furniture with one of those surfaces shows the fields under the plugin's name in its form. The values are stored with the furniture item, and `match`, `create` and `update` receive them as `context.settings` (the stored value when it fits the field, the default otherwise). Changing a value disposes the instance and creates a new one. Do not ask for credentials: the values are saved in the plan and are readable by everyone who can read it.

### Surfaces

Existing display furniture exposes `screen`, and photo frames expose `picture`. Custom packs can mark a stationary box part with `"texture": "art"`, making its front (+z) a named surface; no `screen` or media-player flag is required. Names `screen` and `picture` are reserved; use distinct names within each item. Mount height, resizing, mirroring and rotation are respected. Curved surfaces, moving parts and arbitrary imported-model UV materials are outside this initial API.

### The TV and frame feeds example

The self-contained example `docs/examples/nextfloor-feed-texture.js` shows a Home Assistant camera on a TV screen or in a picture frame. Copy it to `/config/www/nextfloor/feed-texture.js` and add `/local/nextfloor/feed-texture.js` under Extensions → Plugins. Select the TV or frame in the editor and fill in the *TV and frame feeds* fields of its form: the source, and the camera. Each field shows only for the source that needs it. Each item has its own values, and there is nothing to edit in the file.

- **Snapshots** (every 1–60 s) or **live (MJPEG)** (1–15 frames per second): pick the camera. It loads the camera's own `entity_picture` (Home Assistant's camera proxy with the access token, which it renews), so NextFloor must be opened from the same address as Home Assistant. Snapshots are light and work with every camera; MJPEG is smoother, but every visible screen decodes the stream in the browser. The picture is fitted into a 16:9 canvas with black bars.
- A camera that Home Assistant serves from go2rtc or WebRTC works the same way, because it is still a camera entity.

A TV linked to a media player shows its feed only while the player is on; a frame always shows it. Hidden floors, tabs and removed furniture close the connection. The values are saved in the plan, so do not put passwords or tokens in them. Animated GIFs follow the same pattern: draw an `<img>` onto a canvas on a timer and call `invalidate()`.
