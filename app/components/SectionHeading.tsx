import FadeIn from "./FadeIn";

interface SectionHeadingProps {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: SectionHeadingProps) {
  return (
    <FadeIn className="mx-auto max-w-2xl text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-aqua-600">
        {eyebrow}
      </p>
      <h2 className="mt-3 font-display text-3xl font-semibold text-navy-900 sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg leading-relaxed text-navy-900/60">
          {subtitle}
        </p>
      )}
    </FadeIn>
  );
}
