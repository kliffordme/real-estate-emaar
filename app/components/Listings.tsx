"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { listings, type Listing, type ListingStatus } from "../lib/data";
import SectionHeading from "./SectionHeading";

const filters = ["All", "For Sale", "For Lease"] as const;
type Filter = (typeof filters)[number];

function PropertyCard({ listing }: { listing: Listing }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="group overflow-hidden rounded-2xl bg-white shadow-[0_2px_16px_rgba(16,27,45,0.07)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(16,27,45,0.14)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={listing.image}
          alt={`${listing.title}, ${listing.tower}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span
          className={`absolute left-4 top-4 rounded-full px-3.5 py-1 text-xs font-semibold uppercase tracking-wide text-white ${
            listing.status === "For Sale" ? "bg-aqua-500" : "bg-sand-500"
          }`}
        >
          {listing.status}
        </span>
      </div>
      <div className="p-6">
        <p className="text-xl font-semibold text-navy-900">{listing.price}</p>
        <h3 className="mt-1.5 font-medium text-navy-900/90">{listing.title}</h3>
        <p className="mt-0.5 text-sm text-navy-900/55">{listing.tower}</p>
        <div className="mt-4 flex items-center gap-4 border-t border-navy-100 pt-4 text-sm text-navy-900/70">
          <span className="flex items-center gap-1.5">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="text-aqua-600">
              <path d="M3 18v-6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6M3 18h18M3 18v2m18-2v2M7 10V7a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v3" />
            </svg>
            {listing.beds} Beds
          </span>
          <span className="flex items-center gap-1.5">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="text-aqua-600">
              <path d="M4 12h16a1 1 0 0 1 1 1 6 6 0 0 1-6 6H9a6 6 0 0 1-6-6 1 1 0 0 1 1-1Zm2 0V6a2 2 0 0 1 4 0M9 19l-1 2m8-2 1 2" />
            </svg>
            {listing.baths} Baths
          </span>
          <span className="flex items-center gap-1.5">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="text-aqua-600">
              <path d="M4 4h16v16H4zM4 9h5V4m6 16v-5h5" />
            </svg>
            {listing.sqft.toLocaleString()} sqft
          </span>
        </div>
      </div>
    </motion.article>
  );
}

export default function Listings() {
  const [filter, setFilter] = useState<Filter>("All");

  const visible =
    filter === "All"
      ? listings
      : listings.filter((l) => l.status === (filter as ListingStatus));

  return (
    <section id="listings" className="scroll-mt-16 bg-offwhite py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Featured Listings"
          title={
            <>
              Homes on the water,{" "}
              <span className="text-aqua-600">ready for you</span>
            </>
          }
          subtitle="A curated selection of residences across Emaar Beachfront's towers, for sale and for lease."
        />

        <div
          id="leasing"
          className="mt-10 flex scroll-mt-28 justify-center gap-2"
          role="tablist"
          aria-label="Filter listings"
        >
          {filters.map((f) => (
            <button
              key={f}
              role="tab"
              aria-selected={filter === f}
              onClick={() => setFilter(f)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                filter === f
                  ? "bg-navy-900 text-white shadow-md"
                  : "bg-white text-navy-900/70 shadow-sm hover:bg-navy-50"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {visible.map((listing) => (
              <PropertyCard key={listing.id} listing={listing} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
