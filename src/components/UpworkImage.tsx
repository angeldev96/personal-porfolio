"use client";

import React, { useState, KeyboardEvent } from "react";
import Image from "next/image";
import { X } from "lucide-react";

interface Props {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  unoptimized?: boolean;
}

export default function UpworkImage({ src, alt, width = 1200, height = 800, unoptimized = false }: Props) {
  const [open, setOpen] = useState(false);

  function onKey(e: KeyboardEvent) {
    if (e.key === "Enter" || e.key === " ") setOpen(true);
  }

  return (
    <>
      <div
        role="button"
        tabIndex={0}
        onClick={() => setOpen(true)}
        onKeyDown={onKey}
        className="rounded-lg border overflow-hidden cursor-pointer hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-ring"
        aria-label="Open Upwork profile screenshot"
      >
        <Image src={src} alt={alt} width={width} height={height} unoptimized={unoptimized} style={{ width: "100%", height: "auto" }} />
      </div>

      {open ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
          <div className="relative max-w-[90vw] max-h-[90vh] w-full">
            <button
              aria-label="Close image"
              onClick={() => setOpen(false)}
              className="absolute top-2 right-2 z-50 rounded-full bg-black/60 p-2 text-white hover:bg-black/80"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative w-full h-[80vh]">
              <Image src={src} alt={alt} fill style={{ objectFit: "contain" }} unoptimized={unoptimized} />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
