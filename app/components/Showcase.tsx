import Image from "next/image";
import { showcase } from "../lib/data";
import FadeIn from "./FadeIn";
import SectionHeading from "./SectionHeading";

export default function Showcase() {
  return (
    <section id="about" className="scroll-mt-16 overflow-hidden py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="The View"
          title={
            <>
              Every window frames <span className="text-aqua-600">the sea</span>
            </>
          }
        />

        <div className="mt-16 space-y-20 lg:space-y-24">
          {showcase.map((item, i) => {
            const reversed = i % 2 === 1;
            return (
              <div
                key={item.title}
                className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
              >
                <FadeIn
                  x={reversed ? 40 : -40}
                  y={0}
                  className={reversed ? "lg:order-2" : ""}
                >
                  <div className="relative aspect-[11/8] overflow-hidden rounded-3xl shadow-[0_20px_60px_rgba(16,27,45,0.15)]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                </FadeIn>
                <FadeIn
                  x={reversed ? -40 : 40}
                  y={0}
                  delay={0.15}
                  className={reversed ? "lg:order-1" : ""}
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sand-600">
                    {item.eyebrow}
                  </p>
                  <h3 className="mt-3 font-display text-3xl font-semibold leading-tight text-navy-900 sm:text-4xl">
                    {item.title}
                  </h3>
                  <p className="mt-5 text-lg leading-relaxed text-navy-900/65">
                    {item.copy}
                  </p>
                </FadeIn>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
