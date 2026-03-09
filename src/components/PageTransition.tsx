"use client";

import React, { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect reduce motion preference
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      el.setAttribute("data-entered", "");
      return;
    }

    // Trigger the entry animation on next frame
    let mounted = true;
    requestAnimationFrame(() => {
      if (mounted && el) el.setAttribute("data-entered", "");
    });

    return () => {
      mounted = false;
    };
  }, [pathname]);

  // Using pathname as key causes remount on navigation so the effect runs
  return (
    <div key={pathname} ref={ref} className="page-transition">
      {children}
    </div>
  );
}
