import Image from "next/image";
import { testimonials } from "../lib/data";
import FadeIn from "./FadeIn";

export default function Testimonials() {
  return (
    <section className="bg-navy-900 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-aqua-400">
            Testimonials
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">
            Trusted by buyers, tenants,{" "}
            <span className="text-sand-400">and investors</span>
          </h2>
        </FadeIn>

        <div className="mt-14 grid gap-7 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <FadeIn
              key={t.name}
              delay={i * 0.12}
              className="flex flex-col rounded-2xl bg-white/[0.06] p-8 backdrop-blur-sm"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-aqua-400/70"
              >
                <path d="M10 8c-3 1-5 3.5-5 7v3h6v-6H8c0-2 1-3 3-4l-1-2zm9 0c-3 1-5 3.5-5 7v3h6v-6h-3c0-2 1-3 3-4l-1-2z" />
              </svg>
              <p className="mt-4 flex-1 leading-relaxed text-white/85">
                {t.quote}
              </p>
              <div className="mt-7 flex items-center gap-3.5">
                <Image
                  src={t.photo}
                  alt={`Portrait of ${t.name}`}
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-white">{t.name}</p>
                  <p className="text-sm text-aqua-300">{t.role}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
