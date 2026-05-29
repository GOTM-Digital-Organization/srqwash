// SRQ Wash PageHero — reusable hero for interior pages
// Design: Full-bleed image with dark overlay, Bebas Neue headline

import { Phone } from "lucide-react";
import { SITE } from "@/lib/siteData";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  image?: string;
  breadcrumb?: string;
  showCTA?: boolean;
}

export default function PageHero({
  title,
  subtitle,
  image = "https://d2xsxph8kpxj0f.cloudfront.net/310419663028316757/S8hJyhgpkGHR2RfqK8Ywnb/hero-pressure-wash-h5B6kYx39PPPvEhFPzciZQ.webp",
  breadcrumb,
  showCTA = true,
}: PageHeroProps) {
  return (
    <section
      className="relative min-h-[420px] flex items-end pb-14 pt-28"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />

      <div className="container relative z-10">
        {breadcrumb && (
          <p
            className="text-[#0EA5E9] text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ fontFamily: "'Nunito Sans', sans-serif" }}
          >
            {breadcrumb}
          </p>
        )}
        <h1
          className="text-5xl lg:text-7xl text-white mb-4 leading-none"
          style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.02em" }}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className="text-lg lg:text-xl text-gray-200 max-w-2xl mb-6"
            style={{ fontFamily: "'Nunito Sans', sans-serif" }}
          >
            {subtitle}
          </p>
        )}
        {showCTA && (
          <a
            href={`tel:${SITE.phoneCall}`}
            className="btn-orange"
          >
            <Phone size={16} />
            Free Quote — Call Now
          </a>
        )}
      </div>
    </section>
  );
}
