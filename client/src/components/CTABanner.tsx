// SRQ Wash CTABanner — reusable conversion section
// Design: Safety orange background with white text

import { Phone, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { SITE } from "@/lib/siteData";

interface CTABannerProps {
  title?: string;
  subtitle?: string;
  dark?: boolean;
}

export default function CTABanner({
  title = "Ready for a Cleaner Property?",
  subtitle = "Get a free, no-obligation quote today. We serve Lakewood Ranch, Sarasota, Bradenton, and Venice.",
  dark = false,
}: CTABannerProps) {
  return (
    <section
      className={`py-16 ${dark ? "bg-[#111827]" : ""}`}
      style={
        !dark
          ? { background: "linear-gradient(135deg, oklch(0.72 0.19 45) 0%, oklch(0.65 0.19 45) 100%)" }
          : undefined
      }
    >
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h2
              className={`text-4xl lg:text-5xl mb-3 ${dark ? "text-white" : "text-white"}`}
              style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.02em" }}
            >
              {title}
            </h2>
            <p
              className={`text-lg ${dark ? "text-gray-300" : "text-orange-100"}`}
              style={{ fontFamily: "'Nunito Sans', sans-serif" }}
            >
              {subtitle}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
            <a
              href={`tel:${SITE.phoneCall}`}
              className={`flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-150 active:scale-95 ${
                dark
                  ? "bg-[#F97316] text-white hover:bg-orange-600"
                  : "bg-white text-orange-600 hover:bg-orange-50"
              }`}
              style={{ fontFamily: "'Nunito Sans', sans-serif" }}
            >
              <Phone size={20} />
              Call Now — Free Quote
            </a>
            <Link
              href="/contact-us"
              className={`flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-150 active:scale-95 border-2 ${
                dark
                  ? "border-white/30 text-white hover:border-white hover:bg-white/10"
                  : "border-white/60 text-white hover:border-white hover:bg-white/20"
              }`}
              style={{ fontFamily: "'Nunito Sans', sans-serif" }}
            >
              Get a Quote Online
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
