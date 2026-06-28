"use client";
import { useEffect, useRef } from "react";

const VERT = `attribute vec2 a;void main(){gl_Position=vec4(a,0.0,1.0);}`;

const FRAG = `precision highp float;
uniform vec2 u_res;
uniform float u_time;
uniform vec2 u_mouse;
uniform float u_dark;

float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453123); }
float noise(vec2 p){
  vec2 i = floor(p), f = fract(p);
  vec2 u = f*f*(3.0-2.0*f);
  return mix(mix(hash(i+vec2(0.0,0.0)), hash(i+vec2(1.0,0.0)), u.x),
             mix(hash(i+vec2(0.0,1.0)), hash(i+vec2(1.0,1.0)), u.x), u.y);
}
float fbm(vec2 p){
  float v = 0.0, a = 0.5;
  for(int i=0;i<5;i++){ v += a*noise(p); p = p*2.02 + 7.3; a *= 0.5; }
  return v;
}

void main(){
  vec2 uv = gl_FragCoord.xy / u_res.xy;
  float aspect = u_res.x / u_res.y;
  vec2 p = vec2(uv.x*aspect, uv.y);
  float t = u_time * 0.08;
  vec2 m = vec2(u_mouse.x*aspect, u_mouse.y);

  // flowing domain-warped noise -> aurora ribbons
  vec2 q = vec2(fbm(p*1.6 + vec2(0.0, t)), fbm(p*1.6 + vec2(4.0, -t)));
  vec2 r = vec2(fbm(p*1.8 + 1.4*q + vec2(1.7, 9.2) + 0.30*t),
                fbm(p*1.8 + 1.4*q + vec2(8.3, 2.8) - 0.25*t));
  float f = fbm(p*1.5 + 2.2*r);

  vec3 blue   = vec3(0.357, 0.549, 1.0);
  vec3 violet = vec3(0.49, 0.36, 1.0);
  vec3 orange = vec3(1.0, 0.55, 0.42);
  vec3 col = mix(blue, violet, smoothstep(0.25, 0.85, f));
  col = mix(col, orange, smoothstep(0.55, 1.0, length(r)) * 0.5);

  float ribbon = smoothstep(0.28, 0.60, f) * (0.7 + 0.5*sin(6.2831*r.x + t*4.0));
  ribbon = clamp(ribbon, 0.0, 1.2);

  // soft large-scale colour field so even the calm areas carry some glow
  float base = smoothstep(0.20, 0.92, fbm(p*0.8 + 0.5*r + vec2(t*0.5, 0.0)));

  // interactive aura around the pointer
  float md = distance(p, m);
  float aura = exp(-md*md*2.2);
  col += (blue*0.6 + violet*0.4) * aura;

  // keep the left text column calmer; let the aurora bloom toward the right + lower area
  float guard = mix(0.20, 1.0, smoothstep(0.24, 0.92, uv.x));

  float alpha = (ribbon*0.8 + base*0.32 + aura*0.65) * guard;
  alpha *= mix(0.6, 1.0, u_dark);
  gl_FragColor = vec4(col, clamp(alpha, 0.0, 0.95));
}`;

export function HeroAurora() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const host = canvas?.parentElement;
    if (!canvas || !host) return;
    const gl = canvas.getContext("webgl", { alpha: true, premultipliedAlpha: false, antialias: true });
    if (!gl) return;

    const compile = (type: number, src: string) => {
      const s = gl.createShader(type)!;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return s;
    };
    const prog = gl.createProgram()!;
    gl.attachShader(prog, compile(gl.VERTEX_SHADER, VERT));
    gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, FRAG));
    gl.linkProgram(prog);
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const aLoc = gl.getAttribLocation(prog, "a");
    gl.enableVertexAttribArray(aLoc);
    gl.vertexAttribPointer(aLoc, 2, gl.FLOAT, false, 0, 0);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

    const uRes = gl.getUniformLocation(prog, "u_res");
    const uTime = gl.getUniformLocation(prog, "u_time");
    const uMouse = gl.getUniformLocation(prog, "u_mouse");
    const uDark = gl.getUniformLocation(prog, "u_dark");

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mouse = { x: 0.5, y: 0.42, tx: 0.5, ty: 0.42 };
    let raf = 0;
    let running = true;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.max(1, Math.floor(host.clientWidth * dpr));
      canvas.height = Math.max(1, Math.floor(host.clientHeight * dpr));
      gl.viewport(0, 0, canvas.width, canvas.height);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(host);

    const onMove = (e: PointerEvent) => {
      const b = host.getBoundingClientRect();
      mouse.tx = (e.clientX - b.left) / b.width;
      mouse.ty = 1.0 - (e.clientY - b.top) / b.height;
    };
    if (!reduce) host.addEventListener("pointermove", onMove);

    const start = performance.now();
    const draw = (now: number) => {
      mouse.x += (mouse.tx - mouse.x) * 0.06;
      mouse.y += (mouse.ty - mouse.y) * 0.06;
      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.uniform1f(uTime, reduce ? 9.0 : (now - start) / 1000);
      gl.uniform2f(uMouse, mouse.x, mouse.y);
      gl.uniform1f(uDark, document.documentElement.getAttribute("data-theme") === "light" ? 0.0 : 1.0);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
      if (running && !reduce) raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    const pause = () => { running = false; cancelAnimationFrame(raf); };
    const resume = () => { if (!running && !reduce) { running = true; raf = requestAnimationFrame(draw); } };
    const onVis = () => (document.hidden ? pause() : resume());
    document.addEventListener("visibilitychange", onVis);
    const io = new IntersectionObserver(([e]) => (e.isIntersecting ? resume() : pause()), { threshold: 0 });
    io.observe(host);

    return () => {
      pause();
      host.removeEventListener("pointermove", onMove);
      document.removeEventListener("visibilitychange", onVis);
      ro.disconnect();
      io.disconnect();
      gl.getExtension("WEBGL_lose_context")?.loseContext();
    };
  }, []);

  return <canvas ref={ref} aria-hidden className="pointer-events-none absolute inset-0 -z-[1] h-full w-full" />;
}
