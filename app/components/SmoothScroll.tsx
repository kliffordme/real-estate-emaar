"use client";

import { ReactLenis } from "lenis/react";
import type { LenisRef } from "lenis/react";
import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "lenis/dist/lenis.css";

gsap.registerPlugin(ScrollTrigger);

/**
 * Momentum/inertia smooth scrolling via Lenis, synced to GSAP.
 * `root` attaches Lenis to the page scroller; `anchors` makes in-page
 * `#hash` links scroll through Lenis too, offset so targets clear the
 * fixed 72px navbar.
 *
 * Lenis is driven from GSAP's ticker (autoRaf off) and its scroll events feed
 * ScrollTrigger, so pinned/scrubbed sections stay in sync with the smoothed
 * scroll instead of fighting it (which caused janky stops on fast scrolls).
 */
export default function SmoothScroll({ children }: { children: ReactNode }) {
  const lenisRef = useRef<LenisRef>(null);

  useEffect(() => {
    const lenis = lenisRef.current?.lenis;

    const update = (time: number) => {
      // gsap ticker time is in seconds; Lenis expects milliseconds.
      lenisRef.current?.lenis?.raf(time * 1000);
    };

    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);
    lenis?.on("scroll", ScrollTrigger.update);

    return () => {
      gsap.ticker.remove(update);
      lenis?.off("scroll", ScrollTrigger.update);
    };
  }, []);

  return (
    <ReactLenis
      root
      ref={lenisRef}
      options={{
        lerp: 0.1,
        smoothWheel: true,
        anchors: { offset: -88 },
        // GSAP's ticker drives the loop instead of Lenis's own rAF.
        autoRaf: false,
      }}
    >
      {children}
    </ReactLenis>
  );
}
