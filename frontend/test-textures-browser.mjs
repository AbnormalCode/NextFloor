// Run after npm run build. Real WebRTC peers + a go2rtc signalling double in the actual preview.
import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { readFileSync, mkdirSync } from 'node:fs';
import { resolve, extname } from 'node:path';
import puppeteer from 'puppeteer-core';
const root = resolve(import.meta.dirname, '..');
const server = createServer((req, res) => {
  const path = resolve(root, '.' + new URL(req.url, 'http://localhost').pathname);
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
  await page.evaluate(() => {
    window.textureTest = {opened:0,closed:0,phase:0};
    window.WebSocket = class {
      static OPEN = 1;
      readyState = 1;
      constructor(url) {
        if (new URL(url).searchParams.get('src') !== 'test_capture') throw new Error('wrong stream');
        window.textureTest.opened++;
        this.pc = new RTCPeerConnection({iceServers:[]}); this.pending = [];
        const c = document.createElement('canvas'); c.width=640; c.height=360;
        const g=c.getContext('2d');
        const draw=()=>{ g.fillStyle=window.textureTest.phase?'#d62d77':'#12d9b0';g.fillRect(0,0,640,360);g.fillStyle='#102030';g.font='bold 54px sans-serif';g.fillText('LIVE VIDEO',100,155);g.font='28px sans-serif';g.fillText(`WebRTC frame ${Math.floor(performance.now()/33)}`,130,220); };
        draw();this.timer=setInterval(draw,33);this.media=c.captureStream(30);
        this.media.getTracks().forEach(t=>this.pc.addTrack(t,this.media));
        this.pc.onicecandidate=({candidate})=>{if(candidate)this.emit({type:'webrtc/candidate',value:candidate.candidate});};
        queueMicrotask(()=>this.onopen?.());
      }
      emit(msg){this.onmessage?.({data:JSON.stringify(msg)});}
      send(data){
        const msg=JSON.parse(data);
        if(msg.type==='webrtc/offer'){
          (async()=>{await this.pc.setRemoteDescription({type:'offer',sdp:msg.value});for(const c of this.pending.splice(0))await this.pc.addIceCandidate(c);await this.pc.setLocalDescription(await this.pc.createAnswer());this.emit({type:'webrtc/answer',value:this.pc.localDescription.sdp});})().catch(e=>{throw e;});
        }else if(msg.type==='webrtc/candidate'){
          const c={candidate:msg.value,sdpMid:'0'};if(this.pc.remoteDescription)this.pc.addIceCandidate(c);else this.pending.push(c);
        }
      }
      close(){if(this.readyState===3)return;this.readyState=3;window.textureTest.closed++;clearInterval(this.timer);this.pc.onicecandidate=null;this.pc.close();this.media.getTracks().forEach(t=>t.stop());}
    };
  });
  const example=readFileSync(resolve(root,'docs/examples/nextfloor-go2rtc-texture.js'),'utf8').replace('const SOURCES = {','const SOURCES = { "media_player.fernseher": { server: "http://localhost/", stream: "test_capture" },');
  await page.addScriptTag({content:example});
  await page.waitForFunction(()=>[...document.querySelector('nextfloor-panel').shadowRoot.querySelector('nf-view3d').viewer.textureLayer.views.values()].some(v=>v.source.source.readyState>=2&&v.source.source.videoWidth===640),{timeout:20000});
  const result=await page.evaluate(async()=>{
    const viewer=document.querySelector('nextfloor-panel').shadowRoot.querySelector('nf-view3d').viewer;
    const view=[...viewer.textureLayer.views.values()][0],video=view.source.source;
    const pixel=()=>{const c=document.createElement('canvas');c.width=c.height=1;const g=c.getContext('2d');g.drawImage(video,0,0,1,1);return [...g.getImageData(0,0,1,1).data];};
    const first=pixel(),before=video.getVideoPlaybackQuality().totalVideoFrames;window.textureTest.phase=1;
    await new Promise(done=>setTimeout(done,700));
    return {first,second:pixel(),frames:video.getVideoPlaybackQuality().totalVideoFrames-before,videoTexture:view.texture.isVideoTexture,errors:window.__nextfloorPluginStore.plugins.get('go2rtc-texture').status.errors};
  });
  assert.ok(result.videoTexture);assert.ok(result.frames>3,JSON.stringify(result));assert.notDeepEqual(result.first,result.second);assert.deepEqual(result.errors,[]);
  mkdirSync(resolve(root,'preview/screenshots'),{recursive:true});
  await page.screenshot({path:resolve(root,'preview/screenshots/plugin-texture-video.png')});
  await page.evaluate(()=>window.nfDemoSet('media_player.fernseher','off'));
  await page.waitForFunction(()=>window.textureTest.opened===window.textureTest.closed);
  assert.deepEqual(errors,[]);
  console.log('PASS: WebRTC frames update on preview TV; signalling, video texture and TV-off cleanup',result);
}finally{await browser?.close();await new Promise(done=>server.close(done));}
