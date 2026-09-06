"use client";

import dynamic from "next/dynamic";

// three.js is ~150 KB gzipped and only makes sense in a browser, so the scene
// is split into its own chunk and skipped on the server. The page renders and
// paints fully without it; the canvas fades in once the chunk arrives.
const HeroScene = dynamic(
  () => import("./hero-scene").then((mod) => mod.HeroScene),
  { ssr: false },
);

export function SceneBackground() {
  return <HeroScene />;
}
