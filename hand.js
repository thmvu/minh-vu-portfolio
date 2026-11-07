import { createHandPoints, landmarks, landmarkNames, keyLandmarks, connections } from './hand-data.js';

export function mountHand(stage, labels) {
  const canvas = stage.querySelector('canvas');
  const play = document.getElementById('motion-toggle');
  const reset = document.getElementById('reset-camera');
  const activate = document.getElementById('activate-3d');
  const hudKeypoint = document.getElementById('hud-keypoint');
  const hudAngles = document.getElementById('hud-angles');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const compact = matchMedia('(max-width: 600px)');

  let gl, program, buffer, lineBuffer, jointBuffer, jointIndexBuffer;
  let frame = 0, visible = true, paused = reduced.matches;
  let initialized = false, destroyed = false, lost = false;
  let last = 0, lastHud = 0, time = 0;
  let targetX = 0, targetY = 0, angleX = 0, angleY = 0, ratio = 1;
  let activeJoint = 8;

  const fallback = () => {
    stage.removeAttribute('data-ready');
    stage.setAttribute('data-fallback', '');
    cancelAnimationFrame(frame);
  };

  const formatCoord = value => `${value >= 0 ? '+' : ''}${value.toFixed(2)}`;

  const syncHud = () => {
    if (hudKeypoint) {
      const pt = landmarks[activeJoint] || landmarks[8];
      const idx = String(activeJoint).padStart(2, '0');
      hudKeypoint.textContent = `[${idx}] ${landmarkNames[activeJoint]} (${formatCoord(pt[0])}, ${formatCoord(pt[1])})`;
    }
    if (hudAngles) {
      const yaw = Math.round((-.34 + angleY) * (180 / Math.PI));
      const pitch = Math.round((.13 + angleX) * (180 / Math.PI));
      hudAngles.textContent = `YAW ${yaw >= 0 ? '+' : ''}${yaw}° · PITCH ${pitch >= 0 ? '+' : ''}${pitch}°`;
    }
  };

  const updateLabels = () => {
    play.setAttribute('aria-label', paused ? labels().resume : labels().pause);
    play.title = paused ? labels().resume : labels().pause;
    play.textContent = paused ? '▷' : 'Ⅱ';
    reset.setAttribute('aria-label', labels().reset);
    reset.title = labels().reset;
    syncHud();
  };

  function shader(type, source) {
    const s = gl.createShader(type);
    gl.shaderSource(s, source);
    gl.compileShader(s);
    if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
      gl.deleteShader(s);
      throw new Error('Shader unavailable');
    }
    return s;
  }

  const vertex = `
    precision mediump float;
    attribute vec3 aPosition;
    attribute float aIndex;
    uniform float uAspect, uTime, uRatio, uX, uY, uMode, uActive;
    varying float vDepth, vBand, vFocus;
    void main() {
      vec3 p = aPosition;
      float ay = -.34 + uY;
      float ax = .13 + uX;
      vec3 q = vec3(p.x * cos(ay) + p.z * sin(ay), p.y, -p.x * sin(ay) + p.z * cos(ay));
      q = vec3(q.x, q.y * cos(ax) - q.z * sin(ax), q.y * sin(ax) + q.z * cos(ax));
      float a = -.13;
      q.xy = mat2(cos(a), -sin(a), sin(a), cos(a)) * q.xy;
      q.y -= .03;
      float size = .77;
      gl_Position = vec4(q.x * size / uAspect, q.y * size, q.z * .15, 1.0);
      vFocus = uMode > 1.5 ? (abs(aIndex - uActive) < .25 ? 1.0 : 0.0) : 0.0;
      gl_PointSize = uMode > 1.5
        ? (8.5 + 5.5 * vFocus) * uRatio
        : (1.65 + 1.45 * (q.z + .2)) * uRatio;
      vDepth = clamp(.55 + q.z, 0., 1.);
      vBand = exp(-pow((q.y - mod(uTime * .25 + 1.4, 2.8) + 1.4) * 8., 2.));
    }
  `;

  const fragment = `
    precision mediump float;
    uniform float uMode;
    varying float vDepth, vBand, vFocus;
    void main() {
      if (uMode > 0.5 && uMode < 1.5) {
        gl_FragColor = vec4(vec3(.45, .74, .98), .28);
        return;
      }
      float d = length(gl_PointCoord - vec2(.5));
      if (uMode > 1.5) {
        float core = 1.0 - smoothstep(.12, .26, d);
        float ring = smoothstep(.30, .38, d) * (1.0 - smoothstep(.42, .50, d));
        float alpha = clamp(core * .95 + ring * (.55 + .45 * vFocus), 0., 1.);
        vec3 jointColor = mix(vec3(.65, .85, 1.0), vec3(.38, .95, .83), vFocus);
        gl_FragColor = vec4(jointColor, alpha);
        return;
      }
      float alpha = (1.0 - smoothstep(.13, .5, d)) * (.30 + vDepth * .48 + vBand * .38);
      vec3 color = mix(vec3(.26, .49, .72), vec3(.69, .88, 1.), vDepth);
      color = mix(color, vec3(.45, .94, .85), vBand * .35);
      gl_FragColor = vec4(color, alpha);
    }
  `;

  function projectToNorm(pt) {
    const ay = -.34 + angleY, ax = .13 + angleX, a = -.13;
    const x1 = pt[0] * Math.cos(ay) + pt[2] * Math.sin(ay);
    const z1 = -pt[0] * Math.sin(ay) + pt[2] * Math.cos(ay);
    const y2 = pt[1] * Math.cos(ax) - z1 * Math.sin(ax);
    const rx = x1 * Math.cos(a) + y2 * Math.sin(a);
    const ry = -x1 * Math.sin(a) + y2 * Math.cos(a) - .03;
    const aspect = canvas.width / Math.max(1, canvas.height);
    return [0.5 + (rx * .77 / aspect) * 0.5, 0.5 - (ry * .77) * 0.5];
  }

  function resize() {
    if (!initialized || lost) return;
    const rect = stage.getBoundingClientRect();
    ratio = Math.min(devicePixelRatio || 1, compact.matches ? 1 : 1.5);
    canvas.width = Math.max(1, Math.round(rect.width * ratio));
    canvas.height = Math.max(1, Math.round(rect.height * ratio));
    gl.viewport(0, 0, canvas.width, canvas.height);
    render(false);
  }

  function render(advance = true) {
    if (!initialized || destroyed || lost) return;
    if (advance) {
      angleX += (targetX - angleX) * .055;
      angleY += (targetY - angleY) * .055;
    }
    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    gl.useProgram(program);
    gl.uniform1f(gl.getUniformLocation(program, 'uAspect'), canvas.width / canvas.height);
    gl.uniform1f(gl.getUniformLocation(program, 'uRatio'), ratio);
    gl.uniform1f(gl.getUniformLocation(program, 'uTime'), time);
    gl.uniform1f(gl.getUniformLocation(program, 'uX'), angleX + (paused ? 0 : Math.sin(time * .35) * .035));
    gl.uniform1f(gl.getUniformLocation(program, 'uY'), angleY + (paused ? 0 : Math.sin(time * .25) * .08));
    gl.uniform1f(gl.getUniformLocation(program, 'uActive'), activeJoint);

    const pos = gl.getAttribLocation(program, 'aPosition');
    const idx = gl.getAttribLocation(program, 'aIndex');
    gl.enableVertexAttribArray(pos);
    if (idx >= 0) {
      gl.disableVertexAttribArray(idx);
      gl.vertexAttrib1f(idx, -1);
    }

    // Pass 1: Point cloud
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.vertexAttribPointer(pos, 3, gl.FLOAT, false, 0, 0);
    gl.uniform1f(gl.getUniformLocation(program, 'uMode'), 0);
    gl.drawArrays(gl.POINTS, 0, compact.matches ? 2400 : 4200);

    // Pass 2: 21-point skeleton connections
    gl.bindBuffer(gl.ARRAY_BUFFER, lineBuffer);
    gl.vertexAttribPointer(pos, 3, gl.FLOAT, false, 0, 0);
    gl.uniform1f(gl.getUniformLocation(program, 'uMode'), 1);
    gl.drawArrays(gl.LINES, 0, connections.length * 2);

    // Pass 3: 21 MediaPipe anatomical joint nodes
    gl.bindBuffer(gl.ARRAY_BUFFER, jointBuffer);
    gl.vertexAttribPointer(pos, 3, gl.FLOAT, false, 0, 0);
    if (idx >= 0) {
      gl.enableVertexAttribArray(idx);
      gl.bindBuffer(gl.ARRAY_BUFFER, jointIndexBuffer);
      gl.vertexAttribPointer(idx, 1, gl.FLOAT, false, 0, 0);
    }
    gl.uniform1f(gl.getUniformLocation(program, 'uMode'), 2);
    gl.drawArrays(gl.POINTS, 0, landmarks.length);
  }

  function tick(now) {
    frame = 0;
    if (destroyed || lost || !visible || document.hidden || paused) return;
    if (now - last > 32) {
      time += Math.min((now - last) / 1000, .06);
      last = now;
      if (now - lastHud > 1400 && targetX === 0 && targetY === 0) {
        const slot = Math.floor(time * 0.65) % keyLandmarks.length;
        activeJoint = keyLandmarks[slot];
        lastHud = now;
        syncHud();
      }
      render();
    }
    frame = requestAnimationFrame(tick);
  }

  function schedule() {
    cancelAnimationFrame(frame);
    if (initialized && !paused && visible && !document.hidden && !lost) {
      last = performance.now();
      frame = requestAnimationFrame(tick);
    } else {
      render(false);
    }
  }

  function disposeResources() {
    if (!gl || lost) return;
    if (buffer) gl.deleteBuffer(buffer);
    if (lineBuffer) gl.deleteBuffer(lineBuffer);
    if (jointBuffer) gl.deleteBuffer(jointBuffer);
    if (jointIndexBuffer) gl.deleteBuffer(jointIndexBuffer);
    if (program) gl.deleteProgram(program);
    buffer = lineBuffer = jointBuffer = jointIndexBuffer = program = null;
  }

  function init() {
    if (initialized && !lost) return true;
    try {
      gl = canvas.getContext('webgl', { alpha: true, antialias: false, powerPreference: 'low-power', preserveDrawingBuffer: false });
      if (!gl) throw new Error('WebGL unavailable');
      lost = false;
      const vs = shader(gl.VERTEX_SHADER, vertex);
      const fs = shader(gl.FRAGMENT_SHADER, fragment);
      program = gl.createProgram();
      gl.attachShader(program, vs);
      gl.attachShader(program, fs);
      gl.linkProgram(program);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) throw new Error('Program unavailable');

      buffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
      gl.bufferData(gl.ARRAY_BUFFER, createHandPoints(), gl.STATIC_DRAW);

      lineBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, lineBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(connections.flatMap(([a, b]) => [...landmarks[a], ...landmarks[b]])), gl.STATIC_DRAW);

      jointBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, jointBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(landmarks.flat()), gl.STATIC_DRAW);

      jointIndexBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, jointIndexBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(landmarks.map((_, i) => i)), gl.STATIC_DRAW);

      gl.enable(gl.BLEND);
      gl.blendFunc(gl.SRC_ALPHA, gl.ONE);
      initialized = true;
      stage.removeAttribute('data-fallback');
      stage.setAttribute('data-ready', '');
      stage.tabIndex = 0;
      resize();
      syncHud();
      schedule();
      return true;
    } catch {
      disposeResources();
      initialized = false;
      fallback();
      return false;
    }
  }

  const pointer = e => {
    if (paused || reduced.matches) return;
    const r = stage.getBoundingClientRect();
    const nx = (e.clientX - r.left) / r.width;
    const ny = (e.clientY - r.top) / r.height;
    targetY = (nx - .5) * .8;
    targetX = (ny - .5) * .45;

    if (initialized && !lost) {
      let best = activeJoint, bestDist = Infinity;
      for (let i = 0; i < landmarks.length; i++) {
        const [px, py] = projectToNorm(landmarks[i]);
        const d = (px - nx) ** 2 + (py - ny) ** 2;
        if (d < bestDist) {
          bestDist = d;
          best = i;
        }
      }
      activeJoint = best;
      lastHud = performance.now();
      syncHud();
    }
  };

  const leave = () => { targetX = targetY = 0; syncHud(); };

  const keyboard = e => {
    if (!['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(e.key)) return;
    e.preventDefault();
    targetY += e.key === 'ArrowLeft' ? -.12 : e.key === 'ArrowRight' ? .12 : 0;
    targetX += e.key === 'ArrowUp' ? -.1 : e.key === 'ArrowDown' ? .1 : 0;
    angleX = paused ? targetX : angleX;
    angleY = paused ? targetY : angleY;
    syncHud();
    if (paused) render(false);
  };

  const toggle = () => { paused = !paused; updateLabels(); schedule(); };
  const resetView = () => { targetX = targetY = angleX = angleY = time = 0; activeJoint = 8; syncHud(); render(false); };
  const start = () => { if (init()) { paused = false; updateLabels(); schedule(); } };
  const contextLost = e => { e.preventDefault(); lost = true; initialized = false; fallback(); };
  const restored = () => { lost = false; initialized = false; init(); };
  const visibility = () => schedule();
  const preference = () => { paused = reduced.matches; updateLabels(); schedule(); };

  stage.addEventListener('pointermove', pointer);
  stage.addEventListener('pointerleave', leave);
  stage.addEventListener('keydown', keyboard);
  play.addEventListener('click', toggle);
  reset.addEventListener('click', resetView);
  activate.addEventListener('click', start);
  canvas.addEventListener('webglcontextlost', contextLost);
  canvas.addEventListener('webglcontextrestored', restored);
  document.addEventListener('visibilitychange', visibility);
  reduced.addEventListener('change', preference);

  const observer = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    schedule();
  }, { threshold: .05 });
  observer.observe(stage);

  const resizer = new ResizeObserver(resize);
  resizer.observe(stage);

  updateLabels();
  if (compact.matches || reduced.matches) fallback();
  else init();

  return {
    updateLabels,
    destroy() {
      destroyed = true;
      cancelAnimationFrame(frame);
      observer.disconnect();
      resizer.disconnect();
      stage.removeEventListener('pointermove', pointer);
      stage.removeEventListener('pointerleave', leave);
      stage.removeEventListener('keydown', keyboard);
      play.removeEventListener('click', toggle);
      reset.removeEventListener('click', resetView);
      activate.removeEventListener('click', start);
      canvas.removeEventListener('webglcontextlost', contextLost);
      canvas.removeEventListener('webglcontextrestored', restored);
      document.removeEventListener('visibilitychange', visibility);
      reduced.removeEventListener('change', preference);
      disposeResources();
      stage.removeAttribute('data-ready');
    }
  };
}
