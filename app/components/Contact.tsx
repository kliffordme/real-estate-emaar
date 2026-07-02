"use client";

import Image from "next/image";
import { useState, type FormEvent } from "react";
import FadeIn from "./FadeIn";
import SectionHeading from "./SectionHeading";

const inputClasses =
  "w-full rounded-xl border border-navy-200 bg-white px-4 py-3 text-navy-900 placeholder:text-navy-900/40 outline-none transition focus:border-aqua-500 focus:ring-2 focus:ring-aqua-500/20";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // No backend yet. Wire this to a CRM, email service, or route handler later.
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="scroll-mt-16 bg-gradient-to-b from-white via-aqua-50/50 to-aqua-100/40 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Contact"
          title={
            <>
              Let&apos;s find your place{" "}
              <span className="text-aqua-600">on the water</span>
            </>
          }
          subtitle="Tell us what you're looking for and we'll respond within one business day."
        />

        <div className="mx-auto mt-14 grid max-w-5xl gap-10 lg:grid-cols-2">
          <FadeIn className="rounded-3xl bg-white p-8 shadow-[0_12px_48px_rgba(16,27,45,0.10)] sm:p-10">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center py-16 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-aqua-100">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="text-aqua-600">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <h3 className="mt-5 text-xl font-semibold text-navy-900">
                  Thank you, we&apos;ve got it.
                </h3>
                <p className="mt-2 text-navy-900/60">
                  An advisor will reach out within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-navy-900/80">
                      Name
                    </label>
                    <input id="name" name="name" required placeholder="Your full name" className={inputClasses} />
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-navy-900/80">
                      Phone
                    </label>
                    <input id="phone" name="phone" type="tel" required placeholder="+971 50 000 0000" className={inputClasses} />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-navy-900/80">
                    Email
                  </label>
                  <input id="email" name="email" type="email" required placeholder="you@example.com" className={inputClasses} />
                </div>
                <div>
                  <label htmlFor="interest" className="mb-1.5 block text-sm font-medium text-navy-900/80">
                    Interested in
                  </label>
                  <select id="interest" name="interest" className={inputClasses} defaultValue="Buying">
                    <option>Buying</option>
                    <option>Leasing</option>
                    <option>Selling my unit</option>
                    <option>General enquiry</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-navy-900/80">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell us about your ideal residence…"
                    className={`${inputClasses} resize-none`}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-aqua-500 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-aqua-500/25 transition hover:bg-aqua-600"
                >
                  Send Enquiry
                </button>
              </form>
            )}
          </FadeIn>

          <FadeIn delay={0.15} className="flex flex-col justify-center">
            <div className="flex items-center gap-5">
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=240&h=240&fit=crop&q=80"
                alt="Portrait of Sarah Haddad, Senior Property Advisor"
                width={96}
                height={96}
                className="h-24 w-24 rounded-2xl object-cover shadow-lg"
              />
              <div>
                <h3 className="text-xl font-semibold text-navy-900">
                  Sarah Haddad
                </h3>
                <p className="text-navy-900/60">Senior Property Advisor</p>
                <p className="mt-0.5 text-sm font-medium text-aqua-600">
                  Emaar Beachfront Specialist
                </p>
              </div>
            </div>

            <p className="mt-7 leading-relaxed text-navy-900/65">
              Fluent in English and Arabic, Sarah has closed over 200
              transactions at Emaar Beachfront and Dubai Harbour. Reach out
              directly, evenings and weekends included.
            </p>

            <div className="mt-8 space-y-3">
              <a
                href="https://wa.me/971500000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-2xl bg-white px-5 py-4 font-semibold text-navy-900 shadow-sm transition hover:shadow-md"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366]/15">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#25D366">
                    <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.5 14.1c-.2.6-1.2 1.2-1.7 1.2-.4.1-1 .1-1.6-.1a14 14 0 0 1-1.5-.5c-2.6-1.1-4.3-3.8-4.4-4-.1-.2-1-1.4-1-2.7 0-1.3.6-1.9.9-2.2.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.4l.9 2.1c.1.2.1.4 0 .6l-.4.6-.4.5c-.1.1-.3.3-.1.6.2.3.7 1.2 1.6 1.9 1.1 1 2 1.3 2.3 1.4.3.1.5.1.6-.1l.7-.9c.2-.3.4-.2.7-.1l1.9.9c.3.1.5.2.5.4.1.1.1.7-.2 1.3Z" />
                  </svg>
                </span>
                WhatsApp: +971 50 000 0000
              </a>
              <a
                href="tel:+971500000000"
                className="flex items-center gap-3 rounded-2xl bg-white px-5 py-4 font-semibold text-navy-900 shadow-sm transition hover:shadow-md"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-aqua-100">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-aqua-600">
                    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.8.7a2 2 0 0 1 1.7 2Z" />
                  </svg>
                </span>
                Call: +971 50 000 0000
              </a>
              <a
                href="mailto:hello@beachfront.example"
                className="flex items-center gap-3 rounded-2xl bg-white px-5 py-4 font-semibold text-navy-900 shadow-sm transition hover:shadow-md"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sand-100">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-sand-600">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-10 6L2 7" />
                  </svg>
                </span>
                hello@beachfront.example
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
