export type ListingStatus = "For Sale" | "For Lease";

export interface Listing {
  id: string;
  title: string;
  tower: string;
  price: string;
  status: ListingStatus;
  beds: number;
  baths: number;
  sqft: number;
  image: string;
}

const unsplash = (id: string, w = 900, h = 640) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=80`;

export const listings: Listing[] = [
  {
    id: "marina-vista-2br",
    title: "Full Marina View Residence",
    tower: "Marina Vista, Tower 1",
    price: "AED 4,200,000",
    status: "For Sale",
    beds: 2,
    baths: 3,
    sqft: 1387,
    image: unsplash("1600585154340-be6161a56a0c"),
  },
  {
    id: "beach-isle-1br",
    title: "Palm-Facing Corner Suite",
    tower: "Beach Isle, Tower 2",
    price: "AED 185,000 / yr",
    status: "For Lease",
    beds: 1,
    baths: 2,
    sqft: 812,
    image: unsplash("1522708323590-d24dbb6b0267"),
  },
  {
    id: "sunrise-bay-3br",
    title: "Sunrise Bay Sky Residence",
    tower: "Sunrise Bay, Tower 1",
    price: "AED 7,850,000",
    status: "For Sale",
    beds: 3,
    baths: 4,
    sqft: 1902,
    image: unsplash("1600607687939-ce8a6c25118c"),
  },
  {
    id: "grand-bleu-2br",
    title: "Grand Bleu Designer Apartment",
    tower: "Grand Bleu Tower, by Elie Saab",
    price: "AED 260,000 / yr",
    status: "For Lease",
    beds: 2,
    baths: 3,
    sqft: 1245,
    image: unsplash("1600566753086-00f18fb6b3ea"),
  },
  {
    id: "palace-beach-4br",
    title: "Palace Beach Penthouse",
    tower: "Palace Beach Residence",
    price: "AED 14,500,000",
    status: "For Sale",
    beds: 4,
    baths: 5,
    sqft: 3210,
    image: unsplash("1600607687920-4e2a09cf159d"),
  },
  {
    id: "beachgate-1br",
    title: "Beachgate Marina Loft",
    tower: "Beachgate by Address",
    price: "AED 155,000 / yr",
    status: "For Lease",
    beds: 1,
    baths: 1,
    sqft: 745,
    image: unsplash("1560448204-e02f11c3d0e2"),
  },
];

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  photo: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "From the first viewing to handover, everything was seamless. Waking up to the Palm on one side and the marina on the other never gets old.",
    name: "Omar Al-Rashid",
    role: "Buyer, Sunrise Bay",
    photo: unsplash("1507003211169-0a1dd7228f2d", 200, 200),
  },
  {
    quote:
      "They found us a beachfront lease within our budget in under two weeks. Honest advice, zero pressure, and they handled every document.",
    name: "Elena Petrova",
    role: "Tenant, Beach Isle",
    photo: unsplash("1438761681033-6461ffad8d80", 200, 200),
  },
  {
    quote:
      "As an overseas investor I needed a team I could trust remotely. Their market knowledge of Emaar Beachfront is genuinely unmatched.",
    name: "James Whitfield",
    role: "Investor, Marina Vista",
    photo: unsplash("1472099645785-5658abf4ff4e", 200, 200),
  },
];

export const galleryImages = [
  {
    src: unsplash("1507525428034-b723cf961d3e", 800, 600),
    alt: "Private white-sand beach at Emaar Beachfront",
  },
  {
    src: unsplash("1540541338287-41700207dee6", 800, 600),
    alt: "Infinity pool overlooking the Arabian Gulf",
  },
  {
    src: unsplash("1512453979798-5ea266f8880c", 800, 600),
    alt: "Dubai Marina skyline at dusk",
  },
  {
    src: unsplash("1571896349842-33c89424de2d", 800, 600),
    alt: "Resort-style sun deck and cabanas",
  },
  {
    src: unsplash("1502672260266-1c1ef2d93688", 800, 600),
    alt: "Bright living room interior with floor-to-ceiling windows",
  },
  {
    src: unsplash("1519046904884-53103b34b206", 800, 600),
    alt: "Sunset over the beachfront promenade",
  },
];

export interface BentoMedia {
  /** Still image source; omit when `video` is provided. */
  src?: string;
  /** Video sources (webm first, then mp4) for the center cell. */
  video?: string[];
  /** Poster frame shown before the video decodes (video entries only). */
  poster?: string;
  alt: string;
}

// Eight tiles for the scrubbed bento gallery. Portrait crops fill the tall
// bento cells cleanly and hold up when the grid zooms to full-bleed. The
// center tile plays the looping night video.
export const bentoImages: BentoMedia[] = [
  { src: unsplash("1512453979798-5ea266f8880c", 700, 1000), alt: "Dubai Marina skyline at dusk" },
  { src: unsplash("1600596542815-ffad4c1539a9", 700, 1000), alt: "Sunlit residence interior with sea views" },
  {
    video: ["/hero-emaar-night.webm", "/hero-emaar-night.mp4"],
    poster: "/hero-night-poster.jpg",
    alt: "Emaar Beachfront at night",
  },
  { src: unsplash("1507525428034-b723cf961d3e", 700, 1000), alt: "Private white-sand beach at Emaar Beachfront" },
  { src: unsplash("1571896349842-33c89424de2d", 700, 1000), alt: "Resort-style sun deck and cabanas" },
  { src: unsplash("1613490493576-7fde63acd811", 700, 1000), alt: "Island living-room lifestyle" },
  { src: unsplash("1502672260266-1c1ef2d93688", 700, 1000), alt: "Bright living room with floor-to-ceiling windows" },
  { src: unsplash("1519046904884-53103b34b206", 700, 1000), alt: "Sunset over the beachfront promenade" },
];

// A still of the hero video's first frame, so the fallback matches the video
// exactly and there's no image-to-video swap on first load.
export const heroPoster = "/hero-poster.jpg";

export const showcase = [
  {
    image: unsplash("1600596542815-ffad4c1539a9", 1100, 800),
    eyebrow: "The Interiors",
    title: "Wake up to unobstructed sea views",
    copy: "Floor-to-ceiling glass, private balconies, and light-filled layouts finished to Emaar's signature standard. Every residence is oriented toward the water: the Palm, the marina, or the open Gulf.",
  },
  {
    image: unsplash("1613490493576-7fde63acd811", 1100, 800),
    eyebrow: "The Lifestyle",
    title: "An island address, minutes from everything",
    copy: "A private gated island at Dubai Harbour with 1.5 km of pristine beach, resort-grade pools, and a marina promenade at your doorstep, five minutes from Dubai Marina and Sheikh Zayed Road.",
  },
];
