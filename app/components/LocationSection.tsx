import FadeIn from "./FadeIn";
import SectionHeading from "./SectionHeading";

const distances = [
  { place: "Dubai Marina", time: "5 min" },
  { place: "Palm Jumeirah", time: "10 min" },
  { place: "Downtown Dubai", time: "20 min" },
  { place: "DXB Airport", time: "25 min" },
];

export default function LocationSection() {
  return (
    <section className="py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Location"
          title={
            <>
              Anchored between the{" "}
              <span className="text-aqua-600">Marina and the Palm</span>
            </>
          }
        />

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-5 lg:gap-14">
          <FadeIn className="lg:col-span-3">
            <div className="overflow-hidden rounded-3xl shadow-[0_20px_60px_rgba(16,27,45,0.12)]">
              <iframe
                title="Map of Emaar Beachfront, Dubai Harbour"
                src="https://www.google.com/maps?q=Emaar+Beachfront,+Dubai+Harbour,+Dubai&z=13&output=embed"
                className="h-[380px] w-full border-0 sm:h-[440px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.15} className="lg:col-span-2">
            <h3 className="font-display text-2xl font-semibold text-navy-900">
              Dubai Harbour&apos;s private island
            </h3>
            <p className="mt-4 leading-relaxed text-navy-900/65">
              Emaar Beachfront sits on a reclaimed island within Dubai Harbour,
              directly off Sheikh Zayed Road. Residents get the seclusion of a
              gated beach community with the city&apos;s best dining, marinas,
              and nightlife minutes away.
            </p>
            <ul className="mt-7 divide-y divide-navy-100 rounded-2xl bg-offwhite px-6">
              {distances.map((d) => (
                <li
                  key={d.place}
                  className="flex items-center justify-between py-3.5"
                >
                  <span className="font-medium text-navy-900/80">
                    {d.place}
                  </span>
                  <span className="font-semibold text-aqua-600">{d.time}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
