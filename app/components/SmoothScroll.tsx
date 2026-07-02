"use client";

import { ReactLenis } from "lenis/react";
import type { ReactNode } from "react";
import "lenis/dist/lenis.css";

/**
 * Momentum/inertia smooth scrolling via Lenis.
 * `root` attaches Lenis to the page scroller; `anchors` makes in-page
 * `#hash` links scroll through Lenis too, offset so targets clear the
 * fixed 72px navbar.
 */
export default function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        smoothWheel: true,
        anchors: { offset: -88 },
      }}
    >
      {children}
    </ReactLenis>
  );
}
