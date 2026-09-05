"use client";

import { useEffect, useRef } from "react";

/**
 * Canvas constellation behind the roadmap hero: slow-drifting "stars" that
 * link up when they get close. Purely decorative (aria-hidden), skipped
 * entirely under prefers-reduced-motion, and paused when the tab is hidden.
 */
export function AiStarfield({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    type Star = { x: number; y: number; vx: number; vy: number; r: number };

    let stars: Star[] = [];
    let width = 0;
    let height = 0;
    let frame = 0;
    let running = true;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const build = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Density scales with area, capped so phones stay cheap.
      const count = Math.min(70, Math.round((width * height) / 14000));
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        r: Math.random() * 1.4 + 0.6,
      }));
    };

    const LINK_DISTANCE = 130;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];
        s.x += s.vx;
        s.y += s.vy;

        // Wrap around the edges instead of bouncing — keeps motion calm.
        if (s.x < -10) s.x = width + 10;
        if (s.x > width + 10) s.x = -10;
        if (s.y < -10) s.y = height + 10;
        if (s.y > height + 10) s.y = -10;

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(139, 92, 246, 0.55)";
        ctx.fill();

        for (let j = i + 1; j < stars.length; j++) {
          const o = stars[j];
          const dx = s.x - o.x;
          const dy = s.y - o.y;
          const dist = Math.hypot(dx, dy);
          if (dist > LINK_DISTANCE) continue;

          ctx.beginPath();
          ctx.moveTo(s.x, s.y);
          ctx.lineTo(o.x, o.y);
          ctx.strokeStyle = `rgba(56, 189, 248, ${0.3 * (1 - dist / LINK_DISTANCE)})`;
          ctx.lineWidth = 0.7;
          ctx.stroke();
        }
      }

      if (running) frame = requestAnimationFrame(draw);
    };

    build();

    if (reduceMotion) {
      // Draw one static frame, then stop.
      running = false;
      draw();
      return;
    }

    frame = requestAnimationFrame(draw);

    const onResize = () => build();
    const onVisibility = () => {
      if (document.hidden) {
        running = false;
        cancelAnimationFrame(frame);
      } else if (!running) {
        running = true;
        frame = requestAnimationFrame(draw);
      }
    };

    window.addEventListener("resize", onResize);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      running = false;
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={className}
    />
  );
}
