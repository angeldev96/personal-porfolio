"use client";

import { createElement, useEffect, useState, type ReactNode } from "react";

import { cn } from "@/lib/utils";

type RevealTag = "div" | "li" | "section" | "article";

/**
 * Fades and lifts its children into view once, the first time they intersect.
 * The hidden state lives in CSS (.ai-reveal) so the server-rendered markup and
 * the first client render agree; only data-visible flips.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  /** Stagger in ms, applied as transition-delay. */
  delay?: number;
  as?: RevealTag;
}) {
  const [node, setNode] = useState<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!node || visible) return;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [node, visible]);

  return createElement(
    as,
    {
      ref: setNode,
      "data-visible": visible,
      style: delay ? { transitionDelay: `${delay}ms` } : undefined,
      className: cn("ai-reveal", className),
    },
    children,
  );
}
