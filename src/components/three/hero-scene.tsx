"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * Minimal 3D backdrop for the home page: a sparse field of dust drifting
 * slowly upward through real depth. Monochrome, taken live from the theme's
 * `--foreground` token so it works in light and dark.
 *
 * - Pointer moves nudge the camera (parallax between near and far dust).
 * - Scrolling shifts the camera slightly so the field feels attached to the page.
 * - prefers-reduced-motion: a single static frame, no listeners.
 * - Pauses while the tab is hidden; hidden entirely when printing.
 */

const DUST_COUNT = 480;

/** `--foreground: 224 71.4% 4.1%` -> `hsl(224, 71.4%, 4.1%)` for three.js. */
function readThemeColor(token: string, fallback: string) {
  const raw = getComputedStyle(document.documentElement)
    .getPropertyValue(token)
    .trim();
  const parts = raw.split(/\s+/);
  if (parts.length < 3) return fallback;
  return `hsl(${parts[0]}, ${parts[1]}, ${parts[2]})`;
}

export function HeroScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true,
        powerPreference: "low-power",
      });
    } catch {
      // No WebGL: leave the page exactly as it was.
      return;
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setClearColor(0x000000, 0);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
    camera.position.set(0, 0, 7);

    // --- Dust --------------------------------------------------------------
    const dustPositions = new Float32Array(DUST_COUNT * 3);
    const dustSpeed = new Float32Array(DUST_COUNT);
    for (let i = 0; i < DUST_COUNT; i++) {
      dustPositions[i * 3] = (Math.random() - 0.5) * 20;
      dustPositions[i * 3 + 1] = (Math.random() - 0.5) * 12;
      dustPositions[i * 3 + 2] = -6 + Math.random() * 8;
      dustSpeed[i] = 0.4 + Math.random() * 0.8;
    }
    const dustGeometry = new THREE.BufferGeometry();
    const dustAttribute = new THREE.BufferAttribute(dustPositions, 3);
    dustGeometry.setAttribute("position", dustAttribute);
    const dustMaterial = new THREE.PointsMaterial({
      size: 0.035,
      transparent: true,
      opacity: 0.5,
      sizeAttenuation: true,
      depthWrite: false,
    });
    const dust = new THREE.Points(dustGeometry, dustMaterial);
    scene.add(dust);

    // --- Theme -------------------------------------------------------------
    const applyTheme = () => {
      dustMaterial.color.setStyle(
        readThemeColor("--foreground", "hsl(0, 0%, 50%)"),
      );
    };
    applyTheme();

    // --- Layout ------------------------------------------------------------
    const layout = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height, true);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    layout();

    // --- Interaction -------------------------------------------------------
    const pointerTarget = new THREE.Vector2(0, 0);
    const pointer = new THREE.Vector2(0, 0);
    let scrollY = window.scrollY;

    const onPointerMove = (event: PointerEvent) => {
      pointerTarget.set(
        (event.clientX / window.innerWidth) * 2 - 1,
        -((event.clientY / window.innerHeight) * 2 - 1),
      );
    };
    const onPointerLeave = () => pointerTarget.set(0, 0);
    const onScroll = () => {
      scrollY = window.scrollY;
    };

    // --- Frame -------------------------------------------------------------
    let frame = 0;
    let running = true;

    const render = () => {
      pointer.lerp(pointerTarget, 0.04);

      const lookY = -scrollY * 0.0004;
      camera.position.x = pointer.x * 0.35;
      camera.position.y = pointer.y * 0.25 + lookY;
      camera.lookAt(0, lookY, 0);

      for (let i = 0; i < DUST_COUNT; i++) {
        let y = dustPositions[i * 3 + 1] + 0.0016 * dustSpeed[i];
        if (y > 6) y = -6;
        dustPositions[i * 3 + 1] = y;
      }
      dustAttribute.needsUpdate = true;

      renderer.render(scene, camera);
    };

    const loop = () => {
      render();
      if (running) frame = requestAnimationFrame(loop);
    };

    // Fade the canvas in once the first frame exists so it never pops.
    render();
    canvas.style.opacity = "1";

    const themeObserver = new MutationObserver(() => {
      applyTheme();
      if (reduceMotion) render();
    });
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    const onResize = () => {
      layout();
      if (reduceMotion) render();
    };
    window.addEventListener("resize", onResize);

    function dispose() {
      dustGeometry.dispose();
      dustMaterial.dispose();
      renderer.dispose();
    }

    if (reduceMotion) {
      running = false;
      return () => {
        themeObserver.disconnect();
        window.removeEventListener("resize", onResize);
        dispose();
      };
    }

    frame = requestAnimationFrame(loop);

    const onVisibility = () => {
      if (document.hidden) {
        running = false;
        cancelAnimationFrame(frame);
      } else if (!running) {
        running = true;
        frame = requestAnimationFrame(loop);
      }
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("pointerleave", onPointerLeave);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      running = false;
      cancelAnimationFrame(frame);
      themeObserver.disconnect();
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("pointerleave", onPointerLeave);
      document.removeEventListener("visibilitychange", onVisibility);
      dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full opacity-0 transition-opacity duration-1000 ease-out print:hidden"
    />
  );
}
