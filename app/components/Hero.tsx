"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { heroPoster } from "../lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: "easeOut" as const },
  }),
};

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-svh items-end overflow-hidden">
      {/* Static fallback image, always rendered; the video layers over it on desktop */}
      <Image
        src={heroPoster}
        alt="Aerial view of Emaar Beachfront towers and the Dubai coastline"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Looping drone video on all screens. WebM first (lighter, good for
          mobile data); MP4 fallback for browsers without WebM. The poster is
          the video's own first frame, so the fallback Image above matches it
          and there's no visible swap once the video decodes. */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/hero-poster.jpg"
        aria-hidden
      >
        <source src="/hero-emaar.webm" type="video/webm" />
        <source src="/hero-emaar.mp4" type="video/mp4" />
      </video>

      {/* Bottom-heavy gradient: keeps text readable without flattening the brightness */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-navy-900/25 to-navy-900/10" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-28 pt-40 sm:px-8 lg:pb-36">
        <motion.div
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.span
            variants={fadeUp}
            custom={0.1}
            className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-sand-400"
            >
              <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            Emaar Beachfront, Dubai
          </motion.span>

          <motion.h1
            variants={fadeUp}
            custom={0.25}
            className="mt-6 font-display text-5xl font-semibold leading-[1.08] text-white sm:text-6xl lg:text-7xl"
          >
            Own the <span className="text-aqua-300">Beachfront</span>.
            <br />
            Live the View.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            custom={0.4}
            className="mt-6 max-w-xl text-lg font-light leading-relaxed text-white/85 sm:text-xl"
          >
            Premium residences for sale and lease on Dubai&apos;s only private
            beachfront island, between Dubai Marina and Palm Jumeirah.
          </motion.p>

          <motion.div
            variants={fadeUp}
            custom={0.55}
            className="mt-9 flex flex-wrap gap-4"
          >
            <a
              href="#listings"
              className="rounded-full bg-aqua-500 px-7 py-3.5 text-base font-semibold text-white shadow-xl shadow-aqua-500/30 transition hover:bg-aqua-600"
            >
              View Listings
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/40 bg-white/10 px-7 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
            >
              Schedule a Tour
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#listings"
        aria-label="Scroll to explore"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-white/80 transition hover:text-white"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1.5"
        >
          <span className="text-xs font-medium uppercase tracking-[0.25em]">
            Scroll to explore
          </span>
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </motion.div>
      </motion.a>
    </section>
  );
}
