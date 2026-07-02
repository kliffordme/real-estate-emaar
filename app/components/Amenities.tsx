import FadeIn from "./FadeIn";
import SectionHeading from "./SectionHeading";

const amenities = [
  {
    title: "Private Beach Access",
    copy: "1.5 km of pristine white sand reserved exclusively for residents.",
    icon: (
      <path d="M12 3v3m6.4-.4-2.1 2.1M21 12h-3M3 12h3M5.6 5.6l2.1 2.1M3 20c2 0 2-1.5 4-1.5S9 20 11 20s2-1.5 4-1.5S17 20 19 20s2-1.5 2-1.5M17 16a5 5 0 0 0-10 0" />
    ),
  },
  {
    title: "Marina & Palm Views",
    copy: "Dual-aspect residences overlooking Dubai Marina and Palm Jumeirah.",
    icon: (
      <path d="M3 21h18M5 21V8l7-5 7 5v13M9 21v-6h6v6M12 3v2" />
    ),
  },
  {
    title: "World-Class Amenities",
    copy: "Infinity pools, spa, gyms, and a vibrant marina promenade below.",
    icon: (
      <path d="M12 2l2.4 4.9 5.4.8-3.9 3.8.9 5.4-4.8-2.5-4.8 2.5.9-5.4L4.2 7.7l5.4-.8L12 2z" />
    ),
  },
  {
    title: "Prime Location",
    copy: "Five minutes to Dubai Marina, twenty to Downtown and DXB airport.",
    icon: (
      <>
        <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </>
    ),
  },
];

export default function Amenities() {
  return (
    <section className="bg-gradient-to-b from-aqua-50/60 to-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Why Emaar Beachfront"
          title={
            <>
              Island living, <span className="text-aqua-600">city energy</span>
            </>
          }
          subtitle="A gated beachfront community by Emaar, Dubai's most trusted master developer."
        />

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {amenities.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.1} className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-[0_4px_20px_rgba(31,182,201,0.18)]">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-aqua-500"
                >
                  {item.icon}
                </svg>
              </div>
              <h3 className="mt-5 text-lg font-semibold text-navy-900">
                {item.title}
              </h3>
              <p className="mt-2 leading-relaxed text-navy-900/60">
                {item.copy}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
