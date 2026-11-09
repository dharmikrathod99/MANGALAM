import React, { useEffect, useRef, useState } from 'react';
import BookingModal from './BookingModal';

const SKY = 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20261102_045255_3cb4b3c2-3cb5-4af9-93b4-bd88f2f883c3.png&w=1920&q=80';
const STILL = 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20261102_045249_4f7fe287-c84b-479f-a953-04990fe1a3ac.png&w=1080&q=85';
const VIDEO = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20261102_045327_a6584765-3154-43e6-b1c9-4e574f83a811.mp4';
const WORDS = ['WEDDING INVITATIONS', 'CELEBRATING LOVE', 'YOUR INVITATION'];
const STEP = 0.50, GAP = 3.4, RADIUS = 9, CAM = 11, FOCAL = 8.14;

export default function DriftlabHero({ onExploreStudio, onOpenBooking }) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [soundOn, setSoundOn] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const audioStateRef = useRef({ ctx: null, gain: null });

  useEffect(() => {
    const cv = canvasRef.current;
    if (!cv) return;
    const gl = cv.getContext('webgl2', { alpha: false, antialias: true, premultipliedAlpha: true });
    if (!gl) return;

    const calm = window.matchMedia('(prefers-reduced-motion:reduce)').matches;

    const clamp = (x, a = 0, b = 1) => Math.min(b, Math.max(a, x));
    const smooth = (a, b, x) => {
      x = clamp((x - a) / (b - a));
      return x * x * (3 - 2 * x);
    };
    const ease = (x) => x * x * x * (x * (6 * x - 15) + 10);

    function program(vs, fs, names) {
      const sh = (t, s) => {
        const o = gl.createShader(t);
        gl.shaderSource(o, '#version 300 es\nprecision highp float;\n' + s);
        gl.compileShader(o);
        if (!gl.getShaderParameter(o, gl.COMPILE_STATUS)) {
          console.error(gl.getShaderInfoLog(o));
        }
        return o;
      };
      const p = gl.createProgram();
      gl.attachShader(p, sh(gl.VERTEX_SHADER, vs));
      gl.attachShader(p, sh(gl.FRAGMENT_SHADER, fs));
      gl.linkProgram(p);
      const u = {};
      names.forEach((n) => (u[n] = gl.getUniformLocation(p, n)));
      return { p, u };
    }

    const QUAD = `out vec2 v;void main(){vec2 c=vec2((gl_VertexID<<1)&2,gl_VertexID&2);v=c;gl_Position=vec4(c*2.-1.,0,1);}`;
    const skyP = program(
      QUAD,
      `in vec2 v;uniform sampler2D T;uniform vec3 C;out vec4 O;
      void main(){vec2 uv=vec2(.5)+(v-.5)*C.xy;uv.y=1.-uv.y;uv.x+=C.z;O=textureLod(T,uv,1.6);}`,
      ['T', 'C']
    );
    const wordP = program(
      `layout(location=0) in vec2 a;uniform vec4 W;uniform vec4 B;uniform float A;uniform vec3 L;out vec2 v;
      void main(){
        float t=(a.x-.5)*W.x+W.y;
        float th=clamp(t/${RADIUS.toFixed(1)},-1.45,1.45);
        float x=${RADIUS.toFixed(1)}*sin(th),z=${RADIUS.toFixed(1)}*(1.-cos(th))*.82;
        float y=(a.y-.5)*L.x+L.y-L.z-3.6*pow(smoothstep(.8,8.,t),1.25)-.012*t*t;
        v=vec2(mix(B.x,B.z,a.x),mix(B.w,B.y,a.y));
        gl_Position=vec4(x*${FOCAL.toFixed(2)}/A,y*${FOCAL.toFixed(2)},0.,${CAM.toFixed(1)}-z);
      }`,
      `in vec2 v;uniform sampler2D T;out vec4 O;void main(){float a=texture(T,v).a;O=vec4(vec3(.043,.043,.063)*a,a);}`,
      ['W', 'B', 'A', 'L', 'T']
    );
    const dotP = program(
      `layout(location=0) in vec4 a;uniform float S,H,P;out float k;out float r;
      void main(){k=a.w;float y=fract(a.y+S*.012*(.4+a.z))*2.3-1.15;float x=fract(a.x+H*(a.w>.5?.035:.004))*2.4-1.2+.03*sin(S*.2+a.z*9.);
        gl_Position=vec4(x,y,0,1);gl_PointSize=(a.w>.5?5.+a.z*15.:5.+a.z*24.)*P;r=S*.6+a.z*7.+H;}`,
      `in float k;in float r;out vec4 O;void main(){vec2 p=gl_PointCoord-.5;
        if(k>.5){float c=cos(r),s=sin(r);p=mat2(c,-s,s,c)*p;float a=step(max(abs(p.x),abs(p.y)),.3);O=vec4(vec3(.04)*a,a);}
        else{float a=smoothstep(.5,.1,length(p))*.62;O=vec4(vec3(1.)*a,a);}}`,
      ['S', 'H', 'P']
    );
    const jellyP = program(
      `uniform mat3 M;out vec2 v;void main(){vec2 c=vec2((gl_VertexID<<1)&2,gl_VertexID&2);if(gl_VertexID==3)c=vec2(2,2);c*=.5;v=vec2(c.x,1.-c.y);gl_Position=vec4((M*vec3(c-.5,1.)).xy,0,1);}`,
      `in vec2 v;uniform sampler2D T;out vec4 O;void main(){
        vec3 c=texture(T,v).rgb;
        float d=c.g-max(c.r,c.b);
        float a=1.-smoothstep(.10,.38,d);
        c.g=min(c.g,max(c.r,c.b)*.96);
        O=vec4(c*a,a);}`,
      ['M', 'T']
    );

    const ROW = 512, EM = 440;
    const atlas = document.createElement('canvas');
    atlas.width = 4096;
    atlas.height = ROW * WORDS.length;
    let layout = [];

    function drawAtlas() {
      const x = atlas.getContext('2d');
      // Measure text width to guarantee it never overflows the 4096 atlas texture
      x.font = `${EM}px Anton, sans-serif`;
      let maxTextW = 0;
      WORDS.forEach((w) => {
        const tw = x.measureText(w).width;
        if (tw > maxTextW) maxTextW = tw;
      });
      // Safety margin: ensure longest text fits comfortably in 4096px texture
      const safeEM = maxTextW > 3750 ? Math.floor(EM * (3750 / maxTextW)) : EM;

      x.clearRect(0, 0, atlas.width, atlas.height);
      x.font = `${safeEM}px Anton, sans-serif`;
      x.textBaseline = 'alphabetic';
      x.fillStyle = '#000';
      x.textAlign = 'left';
      x.letterSpacing = '6px';
      let c = 0;
      layout = [];
      WORDS.forEach((w, i) => {
        const m = x.measureText(w).width + 16;
        x.fillText(w, 8, i * ROW + safeEM * 0.92 + 6);
        const uW = (m / safeEM) * 0.86;
        layout.push({
          len: uW,
          c: c + uW / 2,
          u: m / atlas.width,
          top: i / WORDS.length,
          bot: (i + 1) / WORDS.length,
        });
        c += uW + GAP;
      });
    }

    const tex = (unit, filter) => {
      const t = gl.createTexture();
      gl.activeTexture(gl.TEXTURE0 + unit);
      gl.bindTexture(gl.TEXTURE_2D, t);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, filter);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      return t;
    };

    const tSky = tex(0, gl.LINEAR_MIPMAP_LINEAR);
    const tWords = tex(1, gl.LINEAR_MIPMAP_LINEAR);
    const tJelly = tex(2, gl.LINEAR);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array([0, 255, 0, 255]));
    const aniso = gl.getExtension('EXT_texture_filter_anisotropic');

    function loadImg(url) {
      return new Promise((r) => {
        const i = new Image();
        i.crossOrigin = 'anonymous';
        i.onload = () => r(i);
        i.onerror = () => r(null);
        i.src = url;
      });
    }

    const cols = 56;
    const ribbon = new Float32Array((cols + 1) * 4);
    for (let i = 0; i <= cols; i++) {
      ribbon.set([i / cols, 0, i / cols, 1], i * 4);
    }
    const vaoW = gl.createVertexArray();
    gl.bindVertexArray(vaoW);
    gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
    gl.bufferData(gl.ARRAY_BUFFER, ribbon, gl.STATIC_DRAW);
    gl.enableVertexAttribArray(0);
    gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);

    const dots = [];
    let sd = 7;
    const rnd = () => (sd = (sd * 16807) % 2147483647) / 2147483647;
    for (let i = 0; i < 40; i++) dots.push(rnd(), rnd(), rnd(), i % 4 ? 0 : 1);
    const vaoD = gl.createVertexArray();
    gl.bindVertexArray(vaoD);
    gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(dots), gl.STATIC_DRAW);
    gl.enableVertexAttribArray(0);
    gl.vertexAttribPointer(0, 4, gl.FLOAT, false, 0, 0);
    const vaoE = gl.createVertexArray();

    const video = document.createElement('video');
    video.crossOrigin = 'anonymous';
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.preload = 'auto';
    video.src = VIDEO;

    let W = 1, H = 1, dpr = 1, asp = 1, haveVid = false, lastT = -1;

    function size() {
      if (!cv) return;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = Math.round(cv.clientWidth * dpr);
      H = Math.round(cv.clientHeight * dpr);
      cv.width = W;
      cv.height = H;
      asp = W / H;
      gl.viewport(0, 0, W, H);
    }
    window.addEventListener('resize', size);

    function pushVideo() {
      if (video.readyState < 2 || video.currentTime === lastT) return;
      lastT = video.currentTime;
      haveVid = true;
      gl.activeTexture(gl.TEXTURE2);
      gl.bindTexture(gl.TEXTURE_2D, tJelly);
      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, video);
    }

    let lastIdx = 0;
    const trackEl = containerRef.current;
    const marks = trackEl ? [...trackEl.querySelectorAll('.drift-index b')] : [];
    const thumbEl = trackEl ? trackEl.querySelector('.drift-thumb') : null;
    const line1El = trackEl ? trackEl.querySelector('.drift-hero-line-1') : null;
    const line2El = trackEl ? trackEl.querySelector('.drift-hero-line-2') : null;
    const line3El = trackEl ? trackEl.querySelector('.drift-hero-line-3') : null;

    function updateUi(s, k) {
      // Transition the 3 signature hero lines with k (0 -> 1 -> 2)
      const l1 = 1 - smooth(0.35, 0.65, k);
      const l2 = smooth(0.35, 0.65, k) * (1 - smooth(1.35, 1.65, k));
      const l3 = smooth(1.35, 1.65, k);
      if (line1El) {
        line1El.style.opacity = l1;
        line1El.style.transform = `translateY(${(1 - l1) * 8}px)`;
      }
      if (line2El) {
        line2El.style.opacity = l2;
        line2El.style.transform = `translateY(${(1 - l2) * 8}px)`;
      }
      if (line3El) {
        line3El.style.opacity = l3;
        line3El.style.transform = `translateY(${(1 - l3) * 8}px)`;
      }

      const idx = Math.min(2, Math.max(0, Math.round(k)));
      if (marks.length && idx !== lastIdx) {
        if (marks[lastIdx]) {
          marks[lastIdx].classList.remove('on');
          marks[lastIdx].style.opacity = '0.45';
        }
        if (marks[idx]) {
          marks[idx].classList.add('on');
          marks[idx].style.opacity = '1';
        }
        lastIdx = idx;
      }
      if (thumbEl) {
        thumbEl.style.transform = `translateY(${(s * 1011).toFixed(1)}%)`;
      }
    }

    let target = 0, now = 0, mx = 0, my = 0, tmx = 0, tmy = 0;

    function draw(s, sec) {
      pushVideo();
      const n = WORDS.length;
      const span = STEP * (n - 1);
      const k = clamp(s / span) * (n - 1);
      const i = Math.min(n - 2, Math.floor(k));
      const f = k - i;
      if (!layout.length) return;
      const c0 = layout[i].c;
      const c1 = layout[i + 1].c;
      const head = c0 + (c1 - c0) * ease(f);
      const sink = ease(smooth(0.85, 0.96, s)) * 6;
      const grow = ease(smooth(0.50, 0.85, s));
      const side = smooth(0.55, 0.68, s) - smooth(0.75, 0.90, s);

      // 1. Sky
      gl.disable(gl.BLEND);
      gl.useProgram(skyP.p);
      gl.bindVertexArray(vaoE);
      gl.uniform1i(skyP.u.T, 0);
      const ca = asp / (16 / 9);
      const fx = ca > 1 ? 1 : ca;
      const fy = ca > 1 ? 1 / ca : 1;
      gl.uniform3f(skyP.u.C, fx * 0.92, fy * 0.92, s * 0.05 + sec * 0.0022);
      gl.drawArrays(gl.TRIANGLES, 0, 3);

      gl.enable(gl.BLEND);
      gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);

      // 2. Points
      gl.useProgram(dotP.p);
      gl.bindVertexArray(vaoD);
      gl.uniform1f(dotP.u.S, sec);
      gl.uniform1f(dotP.u.H, head * 0.1 + s * 4);
      gl.uniform1f(dotP.u.P, (dpr * H) / dpr / 900);
      gl.drawArrays(gl.POINTS, 0, 40);

      // 3. Words (Auto-fit so 3D curved words dynamically scale to fit any viewport perfectly without clipping)
      gl.useProgram(wordP.p);
      gl.bindVertexArray(vaoW);
      gl.uniform1i(wordP.u.T, 1);
      gl.uniform1f(wordP.u.A, asp);
      const hs = clamp(asp * 0.58, 0.26, 1);
      // In NDC space, edge coordinate is x_ndc = (sin(th)*8.14/asp)/(11-z).
      // For x_ndc <= 0.78 (clean ~11% side margins, zero cutoff), maxSafeWidth = asp * 2.05
      const maxSafeWidth = asp * 2.05;

      layout.forEach((w) => {
        const t = w.c - head;
        if (Math.abs(t) > 24) return;
        const rawWordWidth = w.len * hs;
        // Dynamically scale word down if it exceeds safe viewport width
        const wordFitScale = rawWordWidth > maxSafeWidth ? maxSafeWidth / rawWordWidth : 1.0;
        const effectiveHs = hs * wordFitScale;
        gl.uniform3f(wordP.u.L, effectiveHs, 0.19 + 0.1 * (1 - effectiveHs), sink);
        gl.uniform4f(wordP.u.W, w.len * effectiveHs, t * hs, 0, 0);
        gl.uniform4f(wordP.u.B, 0, w.top, w.u, w.bot);
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, (cols + 1) * 2);
      });

      // 4. Jellyfish
      gl.useProgram(jellyP.p);
      gl.bindVertexArray(vaoE);
      gl.uniform1i(jellyP.u.T, 2);
      const h = (0.98 + grow * 0.42) * clamp(0.62 + asp * 0.4, 0.6, 1);
      const w = ((h * (1080 / 1920)) / asp) * (0.93 + 0.07 * Math.cos(s * 14));
      const roll = (0.1 * Math.sin(s * 13 + 0.4) + 0.03 * Math.sin(sec * 0.5)) * (1 + grow * 0.5);
      const co = Math.cos(roll);
      const si = Math.sin(roll);
      const ox = mx * 0.018 + side * 0.34 * Math.min(1, asp);
      const oy = 0.03 + 0.018 * Math.sin(sec * 0.8) + my * 0.018 - grow * 0.1;
      gl.uniformMatrix3fv(jellyP.u.M, false, [
        w * 2 * co,
        w * 2 * si * asp,
        0,
        (-h * 2 * si) / asp,
        h * 2 * co,
        0,
        ox,
        oy,
        1,
      ]);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

      updateUi(s, k);
    }

    let isVisible = true;

    const read = () => {
      if (!trackEl) return;
      const r = trackEl.getBoundingClientRect();
      const m = r.height - window.innerHeight;
      if (m > 0) {
        target = clamp(-r.top / m, 0, 1);
      }
      isVisible = r.bottom > -250 && r.top < window.innerHeight + 250;
    };
    window.addEventListener('scroll', read, { passive: true });

    const handlePointerMove = (e) => {
      tmx = (e.clientX / window.innerWidth) * 2 - 1;
      tmy = 1 - (e.clientY / window.innerHeight) * 2;
    };
    window.addEventListener('pointermove', handlePointerMove, { passive: true });

    let animId;
    function loop(t) {
      read();
      now += (target - now) * (calm ? 1 : 0.12);
      mx += (tmx - mx) * 0.05;
      my += (tmy - my) * 0.05;
      // Always draw while visible or easing, maintaining live drifting tentacles and glow
      if (isVisible || Math.abs(target - now) > 0.0001) {
        draw(now, t / 1000);
      }
      animId = requestAnimationFrame(loop);
    }

    Promise.all([
      loadImg(SKY),
      loadImg(STILL),
      document.fonts.load(`${EM}px Anton`, 'DRIFTLAB'),
    ]).then(([sky, still]) => {
      drawAtlas();
      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, tSky);
      if (sky) {
        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, sky);
        gl.generateMipmap(gl.TEXTURE_2D);
      }
      gl.activeTexture(gl.TEXTURE1);
      gl.bindTexture(gl.TEXTURE_2D, tWords);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, atlas);
      gl.generateMipmap(gl.TEXTURE_2D);
      if (aniso) gl.texParameterf(gl.TEXTURE_2D, aniso.TEXTURE_MAX_ANISOTROPY_EXT, 8);
      if (still) {
        gl.activeTexture(gl.TEXTURE2);
        gl.bindTexture(gl.TEXTURE_2D, tJelly);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, still);
      }
      if (!calm) video.play().catch(() => {});
      size();
      read();
      now = target;
      animId = requestAnimationFrame(loop);
    });

    return () => {
      window.removeEventListener('resize', size);
      window.removeEventListener('scroll', read);
      window.removeEventListener('pointermove', handlePointerMove);
      cancelAnimationFrame(animId);
      video.pause();
      if (audioStateRef.current.ctx) {
        audioStateRef.current.ctx.close();
      }
    };
  }, []);

  const toggleSound = () => {
    const nextState = !soundOn;
    setSoundOn(nextState);

    let { ctx, gain } = audioStateRef.current;
    if (!ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      ctx = new AudioCtx();
      gain = ctx.createGain();
      gain.gain.value = 0;

      const n = ctx.createBuffer(2, ctx.sampleRate * 4, ctx.sampleRate);
      for (let c = 0; c < 2; c++) {
        const d = n.getChannelData(c);
        let l = 0;
        for (let i = 0; i < d.length; i++) {
          l = (l + 0.02 * (Math.random() * 2 - 1)) / 1.02;
          d[i] = l * 3.5;
        }
      }
      const src = ctx.createBufferSource();
      src.buffer = n;
      src.loop = true;

      const lp = ctx.createBiquadFilter();
      lp.type = 'lowpass';
      lp.frequency.value = 520;

      const lfo = ctx.createOscillator();
      const lg = ctx.createGain();
      lfo.frequency.value = 0.09;
      lg.gain.value = 240;
      lfo.connect(lg).connect(lp.frequency);

      src.connect(lp).connect(gain).connect(ctx.destination);
      src.start();
      lfo.start();

      audioStateRef.current = { ctx, gain };
    }

    ctx.resume();
    gain.gain.setTargetAtTime(nextState ? 0.34 : 0, ctx.currentTime, 0.4);
  };

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToStep = (stepIdx) => {
    if (!containerRef.current) return;
    const r = containerRef.current.getBoundingClientRect();
    const trackTop = window.scrollY + r.top;
    const m = containerRef.current.offsetHeight - window.innerHeight;
    const dest = trackTop + (stepIdx / 2) * m;
    window.scrollTo({ top: dest, behavior: 'smooth' });
  };

  return (
    <div
      ref={containerRef}
      className="driftlab-container relative"
      style={{
        height: '320vh',
        fontFamily: '"Space Mono", ui-monospace, monospace',
        color: '#0b0b10',
        background: '#dcd8f4'
      }}
    >
      <div
        className="drift-view sticky top-0 h-screen overflow-hidden"
        style={{ height: '100svh', background: '#dcd8f4' }}
      >
        <canvas
          ref={canvasRef}
          aria-label="A pink jellyfish drifting in a lilac sky with giant words wrapping around it"
          className="absolute inset-0 w-full h-full block"
        />

        <div className="drift-ui absolute inset-0 pointer-events-none">
          {/* Logo */}
          <a
            href="#"
            aria-label="Driftlab"
            className="drift-logo pointer-events-auto absolute flex items-center"
            style={{
              left: 'calc(30 * var(--u))',
              top: 'calc(20 * var(--u))',
              gap: 'calc(14 * var(--u))',
              font: '600 calc(25 * var(--u))/1 Outfit, sans-serif',
              letterSpacing: '-.01em'
            }}
          >
            Driftlab
            <svg
              viewBox="0 0 50 30"
              aria-hidden="true"
              style={{
                width: 'calc(50 * var(--u))',
                height: 'calc(30 * var(--u))',
                fill: 'none',
                stroke: 'currentColor',
                strokeWidth: '1.3',
                strokeLinecap: 'round'
              }}
            >
              <path d="M2 22C8 20 12 6 15 3c2-2-3 20-1 21 3 1 5-9 8-9-1 3-2 8 0 8 3 0 4-8 7-8s-1 8 2 8 5-6 8-6 2 4 9 2" />
            </svg>
          </a>

          {/* Top Right: [Book Now] Action Button replacing [Wedding Studio ↓] */}
          <div
            className="drift-book-btn pointer-events-auto absolute flex items-center"
            style={{
              right: 'calc(30 * var(--u))',
              top: 'calc(20 * var(--u))',
              zIndex: 40
            }}
          >
            <button
              type="button"
              onClick={() => {
                if (onOpenBooking) {
                  onOpenBooking();
                } else {
                  setIsBookingModalOpen(true);
                }
              }}
              className="pointer-events-auto flex items-center gap-1.5 transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer shadow-xs hover:shadow-md"
              style={{
                height: 'calc(32 * var(--u))',
                padding: '0 calc(14 * var(--u))',
                borderRadius: '99px',
                background: 'rgba(255, 255, 255, 0.90)',
                border: '1px solid rgba(11, 11, 16, 0.12)',
                color: '#5a3346',
                font: '600 calc(13 * var(--u))/1 "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace',
                letterSpacing: '.03em',
                backdropFilter: 'blur(8px)'
              }}
              aria-label="Book Now - Custom Wedding Invitation Suite"
            >
              <span className="text-[#D8B879]" style={{ fontSize: 'calc(11 * var(--u))' }}>✦</span>
              <span>[Book Now]</span>
            </button>
          </div>

          {/* Index Indicators (01, 02, 03 for the 3 scroll changes) */}
          <div
            className="drift-index pointer-events-auto absolute flex flex-col items-center"
            style={{
              left: 'calc(19 * var(--u))',
              top: '50%',
              transform: 'translateY(-50%)',
              gap: 'calc(9 * var(--u))',
              fontSize: 'calc(11 * var(--u))',
              zIndex: 35
            }}
            aria-label="Hero navigation steps"
          >
            <i style={{ width: 'calc(3*var(--u))', height: 'calc(3*var(--u))', borderRadius: '50%', background: 'currentColor', opacity: 0.75 }} />
            <b
              onClick={() => scrollToStep(0)}
              className="on font-normal transition-all duration-300 cursor-pointer hover:scale-125 select-none"
              style={{ opacity: 1 }}
              title="Phase 1: Wedding Invitations"
            >
              01
            </b>
            <i style={{ width: 'calc(3*var(--u))', height: 'calc(3*var(--u))', borderRadius: '50%', background: 'currentColor', opacity: 0.75 }} />
            <i style={{ width: 'calc(3*var(--u))', height: 'calc(3*var(--u))', borderRadius: '50%', background: 'currentColor', opacity: 0.75 }} />
            <i style={{ width: 'calc(3*var(--u))', height: 'calc(3*var(--u))', borderRadius: '50%', background: 'currentColor', opacity: 0.75 }} />
            <b
              onClick={() => scrollToStep(1)}
              className="font-normal transition-all duration-300 cursor-pointer hover:scale-125 select-none"
              style={{ opacity: 0.45 }}
              title="Phase 2: Celebrating Love"
            >
              02
            </b>
            <i style={{ width: 'calc(3*var(--u))', height: 'calc(3*var(--u))', borderRadius: '50%', background: 'currentColor', opacity: 0.75 }} />
            <i style={{ width: 'calc(3*var(--u))', height: 'calc(3*var(--u))', borderRadius: '50%', background: 'currentColor', opacity: 0.75 }} />
            <i style={{ width: 'calc(3*var(--u))', height: 'calc(3*var(--u))', borderRadius: '50%', background: 'currentColor', opacity: 0.75 }} />
            <b
              onClick={() => scrollToStep(2)}
              className="font-normal transition-all duration-300 cursor-pointer hover:scale-125 select-none"
              style={{ opacity: 0.45 }}
              title="Phase 3: Your Invitation"
            >
              03
            </b>
            <i style={{ width: 'calc(3*var(--u))', height: 'calc(3*var(--u))', borderRadius: '50%', background: 'currentColor', opacity: 0.75 }} />
          </div>

          {/* Right Scroll Rail */}
          <div
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const clickY = e.clientY - rect.top;
              const ratio = Math.max(0, Math.min(1, clickY / rect.height));
              if (containerRef.current) {
                const trackRect = containerRef.current.getBoundingClientRect();
                const trackTop = window.scrollY + trackRect.top;
                const m = containerRef.current.offsetHeight - window.innerHeight;
                window.scrollTo({ top: trackTop + ratio * m, behavior: 'smooth' });
              }
            }}
            className="drift-bar pointer-events-auto cursor-pointer absolute"
            style={{
              right: 'calc(10 * var(--u))',
              top: '22%',
              bottom: '22%',
              width: '5px',
              padding: '0 2px',
              background: 'rgba(11,11,16,.2)',
              zIndex: 35
            }}
            aria-label="Scroll rail - click to seek"
          >
            <i
              className="drift-thumb absolute pointer-events-none"
              style={{
                left: '-1px',
                top: 0,
                width: '3px',
                height: '9%',
                background: 'var(--ink)',
                willChange: 'transform'
              }}
            />
          </div>

          {/* Integrated Responsive Hero Headline & Atelier Tagline */}
          <div
            className="drift-main-editorial absolute inset-x-0 pointer-events-none flex flex-col items-center justify-center text-center px-4 select-none z-30"
            style={{
              bottom: 'calc(20 * var(--u))',
              maxWidth: 'min(92vw, 920px)',
              left: '50%',
              transform: 'translateX(-50%)'
            }}
          >
            {/* Rotating 3 Signature Lines in Stable Responsive Flex Box */}
            <div
              className="relative w-full flex items-center justify-center text-center"
              style={{ minHeight: 'calc(68 * var(--u))' }}
            >
              {/* 1. Beautiful Digital Wedding Invitations, Made Just for Your Big Day. */}
              <div
                className="drift-hero-line-1 transition-all duration-500 w-full"
                style={{ opacity: 1, willChange: 'opacity, transform' }}
              >
                <h2
                  className="font-serif text-[#0b0b10] font-normal tracking-wide drop-shadow-xs"
                  style={{
                    fontSize: 'clamp(18px, 2.3vw, 34px)',
                    lineHeight: 1.25
                  }}
                >
                  Beautiful Digital Wedding Invitations, <br className="hidden sm:inline" />
                  <span className="italic font-display text-blush-700">Made Just for Your Big Day.</span>
                </h2>
              </div>

              {/* 2. Love Deserves a Beautiful Invitation. */}
              <div
                className="drift-hero-line-2 transition-all duration-500 absolute inset-0 flex items-center justify-center w-full"
                style={{ opacity: 0, willChange: 'opacity, transform' }}
              >
                <h2
                  className="font-serif text-[#0b0b10] font-normal tracking-wide drop-shadow-xs"
                  style={{
                    fontSize: 'clamp(19px, 2.6vw, 38px)',
                    lineHeight: 1.25
                  }}
                >
                  Love Deserves a <span className="italic font-display text-blush-700">Beautiful Invitation.</span>
                </h2>
              </div>

              {/* 3. Your Day. Your Story. Your Invitation. */}
              <div
                className="drift-hero-line-3 transition-all duration-500 absolute inset-0 flex items-center justify-center w-full"
                style={{ opacity: 0, willChange: 'opacity, transform' }}
              >
                <h2
                  className="font-serif text-[#0b0b10] font-normal tracking-wide drop-shadow-xs"
                  style={{
                    fontSize: 'clamp(18px, 2.5vw, 36px)',
                    lineHeight: 1.25
                  }}
                >
                  Your Day. <span className="text-gold font-script text-xl sm:text-3xl normal-case">✦</span> Your Story.{' '}
                  <span className="italic font-display text-blush-700">Your Invitation.</span>
                </h2>
              </div>
            </div>

            {/* Atelier Tagline with Gold Diamonds */}
            <div
              className="flex items-center justify-center gap-2 mt-2 select-none"
              style={{ opacity: 0.85 }}
            >
              <span className="text-[#D8B879]" style={{ fontSize: 'calc(10 * var(--u))' }}>✦</span>
              <p
                className="uppercase tracking-widest text-[#0b0b10]/80 font-mono font-medium"
                style={{
                  fontSize: 'clamp(10px, 0.95vw, 13px)',
                  letterSpacing: '0.14em'
                }}
              >
                Rivayat & Co. • Artisan Digital Wedding Atelier
              </p>
              <span className="text-[#D8B879]" style={{ fontSize: 'calc(10 * var(--u))' }}>✦</span>
            </div>

            {/* Interactive Scroll Prompt */}
            <div className="mt-2.5">
              <button
                type="button"
                onClick={() => {
                  if (onExploreStudio) {
                    onExploreStudio();
                  } else {
                    scrollToStep(2);
                  }
                }}
                className="pointer-events-auto inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/75 hover:bg-white text-[11px] font-mono uppercase tracking-wider text-[#0b0b10] border border-[#c8c1ee]/60 transition-all duration-300 hover:scale-105 shadow-2xs cursor-pointer select-none"
                aria-label="Scroll to explore wedding atelier"
              >
                <span className="text-gold animate-bounce">↓</span>
                <span>Scroll to Unfold Suite</span>
              </button>
            </div>
          </div>

          {/* Ethereal Seamless Bottom Atmosphere Feather into Atelier */}
          <div
            className="absolute bottom-0 inset-x-0 h-28 sm:h-40 pointer-events-none z-10"
            style={{
              background: 'linear-gradient(to bottom, rgba(220, 216, 244, 0) 0%, rgba(220, 216, 244, 0.45) 45%, rgba(220, 216, 244, 0.92) 80%, #dcd8f4 100%)'
            }}
          />

          {/* Sound Pill */}
          <button
            onClick={toggleSound}
            className="drift-sound pointer-events-auto absolute flex items-center"
            style={{
              left: 'calc(30 * var(--u))',
              bottom: 'calc(30 * var(--u))',
              gap: 'calc(7 * var(--u))',
              height: 'calc(30 * var(--u))',
              padding: '0 calc(11 * var(--u))',
              borderRadius: '99px',
              background: '#0b0b10',
              color: '#f3f0ff',
              fontSize: 'calc(11 * var(--u))',
              letterSpacing: '.04em'
            }}
            aria-pressed={soundOn}
            aria-label="Ambient sound"
          >
            <span
              className="flex items-center"
              style={{ gap: 'calc(1.5 * var(--u))', height: 'calc(13 * var(--u))' }}
              aria-hidden="true"
            >
              {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                <i
                  key={num}
                  style={{
                    width: '1px',
                    height: soundOn ? (num % 2 !== 0 ? '100%' : '60%') : '30%',
                    background: 'currentColor',
                    transition: 'height .3s'
                  }}
                />
              ))}
            </span>
            <em style={{ fontStyle: 'normal' }}>{soundOn ? 'ON' : 'OFF'}</em>
          </button>

          {/* Back to Top */}
          <button
            onClick={handleScrollTop}
            className="drift-up pointer-events-auto absolute grid place-items-center rounded-full transition-transform hover:-translate-y-0.5"
            style={{
              right: 'calc(30 * var(--u))',
              bottom: 'calc(30 * var(--u))',
              width: 'calc(34 * var(--u))',
              height: 'calc(34 * var(--u))',
              background: '#0b0b10',
              color: '#f3f0ff'
            }}
            aria-label="Back to top"
          >
            <svg
              viewBox="0 0 16 16"
              style={{
                width: 'calc(16 * var(--u))',
                height: 'calc(16 * var(--u))',
                fill: 'none',
                stroke: 'currentColor',
                strokeWidth: '1.6',
                strokeLinecap: 'round'
              }}
              aria-hidden="true"
            >
              <path d="M8 14V2M3 7l5-5 5 5" />
            </svg>
          </button>
        </div>
      </div>

      {/* Luxury Bespoke Booking Suite Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </div>
  );
}

