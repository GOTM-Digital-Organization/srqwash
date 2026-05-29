// SRQ Wash Footer
// Design: Florida Power — dark slate background, blue/orange accents

import { Link } from "wouter";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube, ExternalLink } from "lucide-react";
import { SITE, SERVICES, SERVICE_AREAS } from "@/lib/siteData";

export default function Footer() {
  return (
    <footer className="bg-[#111827] text-gray-300">
      {/* Main footer content */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold"
                style={{ backgroundColor: "oklch(0.62 0.2 220)", fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.1rem" }}
              >
                SRQ
              </div>
              <span
                className="text-white font-bold text-xl"
                style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}
              >
                SRQ WASH
              </span>
            </Link>
            <p className="text-sm text-gray-400 mb-5 leading-relaxed" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
              Lakewood Ranch's premier pressure washing company. Licensed, insured, and 5-star rated for residential and commercial exterior cleaning.
            </p>
            {/* Social links */}
            <div className="flex gap-3">
              <a
                href={SITE.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#0EA5E9] transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href={SITE.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#0EA5E9] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href={SITE.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#0EA5E9] transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={16} />
              </a>
            </div>
          </div>

          {/* Services column */}
          <div>
            <h3
              className="text-white font-bold text-base mb-4 uppercase tracking-wider"
              style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.1em" }}
            >
              Our Services
            </h3>
            <ul className="space-y-2">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <Link
                    href={service.slug}
                    className="text-sm text-gray-400 hover:text-[#0EA5E9] transition-colors"
                    style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas column */}
          <div>
            <h3
              className="text-white font-bold text-base mb-4 uppercase tracking-wider"
              style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.1em" }}
            >
              Service Areas
            </h3>
            <ul className="space-y-2">
              {SERVICE_AREAS.map((area) => (
                <li key={area.id}>
                  <Link
                    href={area.slug}
                    className="text-sm text-gray-400 hover:text-[#0EA5E9] transition-colors"
                    style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                  >
                    {area.name}, {area.state}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/service-areas"
                  className="text-sm text-[#0EA5E9] hover:text-white transition-colors"
                  style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                >
                  View All Areas →
                </Link>
              </li>
            </ul>

            {/* Partner site */}
            <div className="mt-6 p-3 rounded-lg bg-white/5 border border-white/10">
              <p className="text-xs text-gray-500 mb-1" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>Also need pool cleaning?</p>
              <a
                href={SITE.partnerSite.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-[#0EA5E9] hover:text-white transition-colors font-semibold"
                style={{ fontFamily: "'Nunito Sans', sans-serif" }}
              >
                {SITE.partnerSite.name}
                <ExternalLink size={12} />
              </a>
            </div>
          </div>

          {/* Contact column */}
          <div>
            <h3
              className="text-white font-bold text-base mb-4 uppercase tracking-wider"
              style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.1em" }}
            >
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin size={15} className="text-[#0EA5E9] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-400" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
                  {SITE.address}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={15} className="text-[#0EA5E9] flex-shrink-0" />
                <a
                  href={`tel:${SITE.phoneCall}`}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                  style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                >
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={15} className="text-[#0EA5E9] flex-shrink-0" />
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                  style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                >
                  {SITE.email}
                </a>
              </li>
            </ul>

            {/* Hours */}
            <div className="mt-5">
              <div className="flex items-center gap-2 mb-2">
                <Clock size={14} className="text-[#0EA5E9]" />
                <span
                  className="text-xs font-bold text-white uppercase tracking-wider"
                  style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                >
                  Hours
                </span>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-gray-400" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
                  Mon – Sat: 7am – 7pm
                </p>
                <p className="text-xs text-gray-400" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
            © {new Date().getFullYear()} SRQ Wash. All rights reserved. Licensed & Insured.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/privacy-policy"
              className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
              style={{ fontFamily: "'Nunito Sans', sans-serif" }}
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
              style={{ fontFamily: "'Nunito Sans', sans-serif" }}
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
