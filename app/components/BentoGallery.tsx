"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/Flip";
import { ExpoScaleEase } from "gsap/EasePack";
import { bentoImages } from "../lib/data";
import styles from "./BentoGallery.module.css";

gsap.registerPlugin(ScrollTrigger, Flip, ExpoScaleEase);

/**
 * Scrubbed bento gallery (GSAP Flip + ScrollTrigger).
 * The grid starts as a compact centered bento, and as the pinned section is
 * scrolled it Flips toward a full-bleed layout, giving a zoom-through effect.
 * Adapted from GSAP's "Scrubbed bento gallery" demo.
 */
export default function BentoGallery() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const wrap = wrapRef.current;
    const gallery = galleryRef.current;
    const overlay = overlayRef.current;
    if (!wrap || !gallery || !overlay) return;

    const items = gallery.querySelectorAll<HTMLElement>(`.${styles.item}`);
    const overlayEls = overlay.children;
    let flipCtx: ReturnType<typeof gsap.context> | undefined;

    const createTween = () => {
      flipCtx?.revert();
      gallery.classList.remove(styles.final);

      flipCtx = gsap.context(() => {
        // Momentarily apply the final layout to capture where items end up...
        gallery.classList.add(styles.final);
        const flipState = Flip.getState(items);
        gallery.classList.remove(styles.final);

        // ...then animate from the current (compact) state toward it on scroll.
        const flip = Flip.to(flipState, { simple: true, ease: "expoScale(1, 5)" });

        // Message stays hidden during the zoom, then makes a dramatic entrance.
        gsap.set(overlay, { autoAlpha: 0 });
        gsap.set(overlayEls, { y: 90, autoAlpha: 0, filter: "blur(14px)" });
        const reveal = gsap
          .timeline({ paused: true })
          .set(overlay, { autoAlpha: 1 })
          .to(overlayEls, {
            y: 0,
            autoAlpha: 1,
            filter: "blur(0px)",
            duration: 1.1,
            stagger: 0.14,
            ease: "expo.out",
          });

        let revealed = false;
        const REVEAL_AT = 0.7; // fire once the grid has finished zooming

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: gallery,
            start: "center center",
            end: "+=160%",
            scrub: true,
            pin: wrap,
            onUpdate: (self) => {
              if (self.progress >= REVEAL_AT && !revealed) {
                revealed = true;
                reveal.play();
              } else if (self.progress < REVEAL_AT && revealed) {
                revealed = false;
                reveal.reverse();
              }
            },
          },
        });
        tl.add(flip);
        // Hold on the fully-zoomed grid so the message enters after it settles.
        tl.to({}, { duration: tl.duration() * 0.5 });

        return () => {
          gsap.set(items, { clearProps: "all" });
          gsap.set([overlay, ...Array.from(overlayEls)], { clearProps: "all" });
        };
      });
    };

    createTween();
    window.addEventListener("resize", createTween);

    return () => {
      window.removeEventListener("resize", createTween);
      flipCtx?.revert();
    };
  }, []);

  return (
    <section aria-label="Beachfront gallery">
      <div className={styles.wrap} ref={wrapRef}>
        <div className={`${styles.gallery} ${styles.bento}`} ref={galleryRef}>
          {bentoImages.map((media) => (
            <div className={styles.item} key={media.src ?? media.video?.[0]}>
              {media.video ? (
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  poster={media.poster}
                  aria-label={media.alt}
                >
                  {media.video.map((src) => (
                    <source
                      key={src}
                      src={src}
                      type={src.endsWith(".webm") ? "video/webm" : "video/mp4"}
                    />
                  ))}
                </video>
              ) : (
                <>
                  {/* Plain img keeps Flip's measurements simple as the grid rescales */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={media.src} alt={media.alt} />
                </>
              )}
            </div>
          ))}
        </div>

        {/* Message overlay — hidden during the zoom, revealed once it settles */}
        <div className={styles.overlay} ref={overlayRef}>
          <p className={styles.eyebrow}>Emaar Beachfront, Dubai</p>
          <h2 className={styles.heading}>
            Own the Beachfront.
            <br />
            Live the View.
          </h2>
          <p className={styles.subtext}>
            1.5 km of private beach, resort-grade amenities, and residences
            framed by the sea, minutes from Dubai Marina.
          </p>
        </div>
      </div>
    </section>
  );
}
