import Link from "next/link";

const footerLinks = [
  { label: "Listings", href: "#listings" },
  { label: "Leasing", href: "#leasing" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: (
      <>
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
      </>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <>
        <rect x="2" y="2" width="20" height="20" rx="3" />
        <path d="M7 10v7M7 7v.1M12 17v-4a2.5 2.5 0 0 1 5 0v4M12 10v2" />
      </>
    ),
  },
  {
    label: "YouTube",
    href: "https://youtube.com",
    icon: (
      <>
        <rect x="2" y="5" width="20" height="14" rx="4" />
        <path d="m10 9 5 3-5 3V9z" />
      </>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-navy-900 py-14 text-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <Link href="#top" className="flex items-center gap-2 text-lg font-semibold">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-aqua-500 font-display text-base font-bold">
              EB
            </span>
            Beachfront<span className="text-aqua-400">.</span>
          </Link>

          <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-white/70 transition hover:text-aqua-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-aqua-500"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {s.icon}
                </svg>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-2 border-t border-white/10 pt-8 text-center text-sm text-white/50">
          <p>RERA ORN: 00000 · DED License: 000000 · Dubai, UAE</p>
          <p>
            © {new Date().getFullYear()} Beachfront Real Estate. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
