/** Copy to /config/www/nextfloor/go2rtc-texture.js, edit SOURCES, then add under Extensions → Plugins.
 * Uses the generic texture API from the texture-providers branch. No external JS dependencies.
 * server is the browser-reachable go2rtc base URL (HTTPS when HA uses HTTPS), not an RTSP URL.
 * Do not put credentials here: /local files can be downloaded without HA authentication.
 */
const SOURCES = {
  // "media_player.living_room_tv": { server: "https://go2rtc.example.net/", stream: "tv_capture" },
};

const plugin = {
  id: "go2rtc-texture",
  name: "go2rtc video textures",
  version: "0.1.0",
  apiVersion: 1,
  textures: [{
    match: ({ entityId, surface, state }) => surface === "screen" && !!SOURCES[entityId] && !!state && !["off", "unavailable", "unknown", "standby"].includes(state.state),
    create: ({ entityId, reportError }) => {
      const config = SOURCES[entityId];
      const url = new URL("api/ws", config.server.endsWith("/") ? config.server : config.server + "/");
      if (!["http:", "https:"].includes(url.protocol)) throw new Error("go2rtc server must use HTTP or HTTPS");
      url.protocol = url.protocol === "https:" ? "wss:" : "ws:";
      url.searchParams.set("src", config.stream);
      const video = document.createElement("video");
      video.muted = true;
      video.autoplay = true;
      video.playsInline = true;
      let stopped = false, retry = 0, attempts = 0, teardown = () => {};
      const connect = () => {
        if (stopped) return;
        const pc = new RTCPeerConnection({ iceServers: [] });
        let ws;
        try { ws = new WebSocket(url); }
        catch (error) { pc.close(); reportError(error); return; }
        const media = new MediaStream();
        const candidates = [];
        let closed = false, timeout;
        const cleanup = () => {
          if (closed) return;
          closed = true;
          clearTimeout(timeout);
          ws.onclose = ws.onerror = ws.onmessage = ws.onopen = null;
          pc.ontrack = pc.onicecandidate = pc.onconnectionstatechange = null;
          ws.close();
          pc.close();
          media.getTracks().forEach((track) => track.stop());
          video.pause();
          video.srcObject = null;
        };
        teardown = cleanup;
        const fail = (error) => {
          if (closed || stopped) return;
          reportError(error);
          cleanup();
          retry = setTimeout(connect, Math.min(30000, 1000 * 2 ** Math.min(attempts++, 5)));
        };
        pc.addTransceiver("video", { direction: "recvonly" });
        pc.ontrack = ({ track }) => {
          if (closed) { track.stop(); return; }
          media.addTrack(track);
          video.srcObject = media;
          video.play().catch(fail);
        };
        pc.onicecandidate = ({ candidate }) => {
          if (!closed && candidate && ws.readyState === WebSocket.OPEN) ws.send(JSON.stringify({ type: "webrtc/candidate", value: candidate.candidate }));
        };
        pc.onconnectionstatechange = () => {
          if (pc.connectionState === "connected") { attempts = 0; clearTimeout(timeout); }
          else if (["failed", "disconnected"].includes(pc.connectionState)) fail(new Error("go2rtc WebRTC disconnected"));
        };
        ws.onopen = async () => {
          try {
            const offer = await pc.createOffer();
            if (closed) return;
            await pc.setLocalDescription(offer);
            if (!closed && ws.readyState === WebSocket.OPEN) ws.send(JSON.stringify({ type: "webrtc/offer", value: pc.localDescription.sdp }));
          } catch (error) { fail(error); }
        };
        // Serialize messages so candidates cannot race setRemoteDescription().
        let messages = Promise.resolve();
        ws.onmessage = ({ data }) => {
          messages = messages.then(async () => {
            if (closed) return;
            const msg = JSON.parse(data);
            if (msg.type === "webrtc/answer") {
              await pc.setRemoteDescription({ type: "answer", sdp: msg.value });
              if (closed) return;
              for (const candidate of candidates.splice(0)) await pc.addIceCandidate(candidate);
            } else if (msg.type === "webrtc/candidate") {
              const candidate = { candidate: msg.value, sdpMid: "0" };
              if (pc.remoteDescription) await pc.addIceCandidate(candidate);
              else candidates.push(candidate);
            } else if (msg.type === "error") throw new Error(String(msg.value));
          }).catch(fail);
        };
        ws.onerror = () => fail(new Error("Cannot connect to go2rtc signalling"));
        ws.onclose = () => fail(new Error("go2rtc signalling closed"));
        timeout = setTimeout(() => fail(new Error("go2rtc connection timed out")), 20000);
      };
      connect();
      return {
        source: video,
        unlit: true,
        dispose: () => { stopped = true; clearTimeout(retry); teardown(); video.removeAttribute("src"); video.load(); },
      };
    },
  }],
};
if (window.NextFloor) window.NextFloor.register(plugin);
else (window.__nextfloorPlugins ??= []).push(plugin);
