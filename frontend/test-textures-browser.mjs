// Run after npm run build. The camera feed example in the actual preview: a test camera answers the camera proxy with an
// image whose colour changes, the plugin loads from a /local URL like in Home Assistant, and the TV in the preview shows it.
import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { readFileSync, mkdirSync } from 'node:fs';
import { resolve, extname } from 'node:path';
import puppeteer from 'puppeteer-core';
const root = resolve(import.meta.dirname, '..');
let phase = 0, snapshots = 0;
const server = createServer((req, res) => {
  const url = new URL(req.url, 'http://localhost');
  if (url.pathname === '/api/camera_proxy/camera.test') {
    snapshots++;
    const colour = phase ? '#d62d77' : '#12d9b0';
    return res.writeHead(200, { 'Content-Type': 'image/svg+xml', 'Cache-Control': 'no-store' }).end(`<svg xmlns="http://www.w3.org/2000/svg" width="640" height="360"><rect width="640" height="360" fill="${colour}"/></svg>`);
  }
  const path = url.pathname === '/local/nextfloor/feed-texture.js' ? resolve(root, 'docs/examples/nextfloor-feed-texture.js') : resolve(root, '.' + url.pathname);
  if (!path.startsWith(root + '/')) return res.writeHead(403).end();
  try { res.setHeader('Content-Type', ({'.html':'text/html','.js':'text/javascript','.json':'application/json'})[extname(path)] ?? 'application/octet-stream'); res.end(readFileSync(path)); }
  catch { res.writeHead(404).end(); }
});
await new Promise(done => server.listen(0, '127.0.0.1', done));
let browser;
try {
  browser = await puppeteer.launch({ executablePath: process.env.CHROME_PATH ?? '/usr/bin/chromium', headless: true, args: ['--use-angle=swiftshader','--enable-unsafe-swiftshader', ...(process.getuid?.() === 0 ? ['--no-sandbox'] : [])] });
  const page = await browser.newPage();
  await page.setViewport({width:1400,height:900});
  const errors = []; page.on('pageerror', e => errors.push(e.message));
  await page.goto(`http://127.0.0.1:${server.address().port}/preview/index.html?lang=en`, {waitUntil:'networkidle0'});
  await page.waitForFunction(() => document.querySelector('nextfloor-panel')?.shadowRoot.querySelector('nf-view3d')?.viewer?.textureLayer);
  // The plugin comes from the plugin list (as under Extensions), the camera and the TV's settings from the plan.
  await page.evaluate(() => {
    window.nfDemoSet('camera.test', 'idle', { friendly_name: 'Test camera', entity_picture: '/api/camera_proxy/camera.test?token=t' });
    const panel = document.querySelector('nextfloor-panel');
    const b = structuredClone(panel.data.building);
    b.settings.plugins = [{ url: '/local/nextfloor/feed-texture.js', enabled: true }];
    const tv = b.floors.flatMap(f => f.furniture).find(f => f.type === 'tv_board');
    tv.entity = 'media_player.fernseher'; // linked, so the feed follows the player's state
    tv.plugin = { 'feed-texture': { source: 'snapshot', camera: 'camera.test', interval: 1 } };
    panel.data.edit(b);
  });
  const views = () => page.evaluate(() => [...document.querySelector('nextfloor-panel').shadowRoot.querySelector('nf-view3d').viewer.textureLayer.views.values()].length);
  const centre = () => page.evaluate(() => {
    const view = [...document.querySelector('nextfloor-panel').shadowRoot.querySelector('nf-view3d').viewer.textureLayer.views.values()][0];
    const c = view.source.source, g = c.getContext('2d');
    return [...g.getImageData(c.width / 2, c.height / 2, 1, 1).data];
  });
  await page.waitForFunction(() => document.querySelector('nextfloor-panel').shadowRoot.querySelector('nf-view3d').viewer.textureLayer.views.size > 0, { timeout: 20000 });
  // the first snapshot is drawn onto the canvas
  await page.waitForFunction(() => { const v = [...document.querySelector('nextfloor-panel').shadowRoot.querySelector('nf-view3d').viewer.textureLayer.views.values()][0]; const c = v.source.source; return c.getContext('2d').getImageData(c.width / 2, c.height / 2, 1, 1).data[1] > 150; }, { timeout: 10000 });
  const first = await centre();
  phase = 1; // the camera now shows something else; the next snapshot (every second) must follow
  await page.waitForFunction(() => { const v = [...document.querySelector('nextfloor-panel').shadowRoot.querySelector('nf-view3d').viewer.textureLayer.views.values()][0]; const c = v.source.source; return c.getContext('2d').getImageData(c.width / 2, c.height / 2, 1, 1).data[0] > 150; }, { timeout: 10000 });
  const second = await centre();
  assert.notDeepEqual(first, second);
  const status = await page.evaluate(() => window.__nextfloorPluginStore.plugins.get('feed-texture').status);
  assert.deepEqual(status.errors, []);
  mkdirSync(resolve(root,'preview/screenshots'),{recursive:true});
  await page.screenshot({path:resolve(root,'preview/screenshots/plugin-texture-camera.png')});
  // Switching the TV off releases the instance and stops asking the camera.
  await page.evaluate(() => window.nfDemoSet('media_player.fernseher','off'));
  await page.waitForFunction(() => document.querySelector('nextfloor-panel').shadowRoot.querySelector('nf-view3d').viewer.textureLayer.views.size === 0, { timeout: 10000 });
  const before = snapshots;
  await new Promise(done => setTimeout(done, 2500));
  assert.equal(snapshots, before, 'no snapshots are requested while the TV is off');
  assert.equal(await views(), 0);
  assert.deepEqual(errors, []);
  console.log('PASS: camera snapshots update on the preview TV, the plugin loads from /local, TV-off cleanup', { first, second, snapshots });
}finally{await browser?.close();await new Promise(done=>server.close(done));}
