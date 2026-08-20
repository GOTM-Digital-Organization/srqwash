// SRQ Wash — Neighborhood / Suburb Service Area Page
// Design: Florida Power — Slate Black + Pressure Blue + Safety Orange
// Bebas Neue display, Nunito Sans body
// Used for all 26 LWR neighborhoods + additional suburbs

import { useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Phone, CheckCircle, ArrowRight, Star, MapPin, Home } from "lucide-react";
import { NEIGHBORHOOD_AREAS, SERVICES, TESTIMONIALS, SITE, SERVICE_AREAS } from "@/lib/siteData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import { useSeoMeta } from "@/hooks/useSeoMeta";
import { useJsonLd } from "@/hooks/useJsonLd";
import { buildNeighborhoodSchema } from "@/lib/schema";

interface NeighborhoodAreaPageProps {
  areaId: string;
}

export default function NeighborhoodAreaPage({ areaId }: NeighborhoodAreaPageProps) {
  const area = NEIGHBORHOOD_AREAS.find((a) => a.id === areaId);
  const [, navigate] = useLocation();

  useSeoMeta(area?.metaTitle, area?.metaDescription);
  useJsonLd(
    area
      ? buildNeighborhoodSchema({
          name: area.name,
          parent: area.parent,
          state: area.state,
          slug: area.slug,
          intro: area.intro,
        })
      : []
  );

  useEffect(() => {
    if (!area) navigate("/404");
    window.scrollTo(0, 0);
  }, [areaId]);

  if (!area) return null;

  // Find the parent city area for breadcrumb + sidebar link
  const parentArea = SERVICE_AREAS.find(
    (a) => a.name.toLowerCase() === area.parent.toLowerCase()
  );

  // Nearby neighborhoods (same parent, excluding self)
  const nearbyAreas = NEIGHBORHOOD_AREAS.filter(
    (a) => a.parent === area.parent && a.id !== areaId
  ).slice(0, 6);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* ── HERO ── */}
      <section
        className="relative pt-32 pb-20 bg-[#111827] overflow-hidden"
        style={{
          backgroundImage: `url('/images/truck-trailer-1.webp')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#111827]/80" />
        <div className="container relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
              <Home size={14} />
              Home
            </Link>
            <span>/</span>
            <Link href="/service-areas" className="hover:text-white transition-colors">
              Service Areas
            </Link>
            {parentArea && (
              <>
                <span>/</span>
                <Link href={parentArea.slug} className="hover:text-white transition-colors">
                  {parentArea.name}
                </Link>
              </>
            )}
            <span>/</span>
            <span className="text-white">{area.name}</span>
          </nav>

          <p
            className="text-[#F97316] text-sm font-bold uppercase tracking-widest mb-3"
            style={{ fontFamily: "'Nunito Sans', sans-serif" }}
          >
            {area.parent}, FL
          </p>
          <h1
            className="text-5xl lg:text-7xl text-white mb-5 leading-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            Pressure Washing<br />
            <span className="text-[#0EA5E9]">{area.name}</span>
          </h1>
          <p
            className="text-gray-300 text-lg max-w-2xl mb-8"
            style={{ fontFamily: "'Nunito Sans', sans-serif" }}
          >
            Professional roof cleaning, house washing, driveway cleaning, pool cage cleaning, and paver sealing in {area.name}, {area.parent}, FL.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href={`tel:${SITE.phoneCall}`}
              className="btn-orange"
            >
              <Phone size={16} />
              Call for a Free Quote
            </a>
            <Link href="/contact-us" className="btn-outline-white">
              Request Online Quote
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-4 mt-8">
            {["Licensed & Insured", "5.0 ★ Google Rating", "Same-Week Service", "Free Estimates"].map((badge) => (
              <div
                key={badge}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-xs text-white font-semibold"
                style={{ fontFamily: "'Nunito Sans', sans-serif" }}
              >
                <CheckCircle size={12} className="text-[#0EA5E9]" />
                {badge}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2">
              <p
                className="text-[#F97316] text-xs font-bold uppercase tracking-widest mb-3"
                style={{ fontFamily: "'Nunito Sans', sans-serif" }}
              >
                {area.name} · {area.parent}, FL
              </p>
              <h2
                className="text-4xl lg:text-5xl text-[#111827] mb-6 leading-none"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                Professional Pressure Washing in {area.name}
              </h2>

              <p
                className="text-gray-600 leading-relaxed mb-5 text-lg"
                style={{ fontFamily: "'Nunito Sans', sans-serif" }}
              >
                {area.intro}
              </p>
              <p
                className="text-gray-600 leading-relaxed mb-8"
                style={{ fontFamily: "'Nunito Sans', sans-serif" }}
              >
                {area.why}
              </p>

              {/* Services offered */}
              <h3
                className="text-3xl text-[#111827] mb-5"
                style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}
              >
                Services We Offer in {area.name}
              </h3>
              <div className="grid sm:grid-cols-2 gap-4 mb-10">
                {SERVICES.map((service) => (
                  <Link
                    key={service.id}
                    href={service.slug}
                    className="flex items-start gap-4 p-4 rounded-xl border border-gray-200 hover:border-[#0EA5E9] hover:bg-blue-50 transition-all group"
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                    />
                    <div>
                      <div
                        className="font-bold text-gray-800 group-hover:text-[#0EA5E9] transition-colors mb-1"
                        style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                      >
                        {service.title}
                      </div>
                      <div
                        className="text-xs text-gray-500 line-clamp-2"
                        style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                      >
                        {service.description.substring(0, 90)}...
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Why choose SRQ Wash */}
              <div className="p-6 bg-[#F1F5F9] rounded-xl mb-8">
                <h3
                  className="text-2xl text-[#111827] mb-5"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}
                >
                  Why {area.name} Homeowners Choose SRQ Wash
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    "Locally owned and operated in Lakewood Ranch",
                    "Fully licensed and insured",
                    "5.0 star Google rating — 48 reviews",
                    "Free, no-obligation estimates",
                    "Same-week service available",
                    "Eco-friendly, plant-safe cleaning solutions",
                    "Satisfaction guaranteed on every job",
                    "Manufacturer-approved soft wash methods",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <CheckCircle size={16} className="text-[#0EA5E9] mt-0.5 flex-shrink-0" />
                      <span
                        className="text-sm text-gray-700"
                        style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                      >
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Nearby neighborhoods */}
              {nearbyAreas.length > 0 && (
                <div>
                  <h3
                    className="text-2xl text-[#111827] mb-4"
                    style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}
                  >
                    Other {area.parent} Areas We Serve
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {nearbyAreas.map((n) => (
                      <Link
                        key={n.id}
                        href={n.slug}
                        className="flex items-center gap-2 p-3 rounded-lg border border-gray-200 hover:border-[#0EA5E9] hover:bg-blue-50 transition-colors text-sm font-semibold text-gray-700 hover:text-[#0EA5E9]"
                        style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                      >
                        <MapPin size={12} className="text-[#0EA5E9] flex-shrink-0" />
                        {n.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-[#111827] rounded-xl p-6 mb-6 sticky top-24">
                <h3
                  className="text-2xl text-white mb-2"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}
                >
                  Free Quote in {area.name}
                </h3>
                <p
                  className="text-gray-400 text-sm mb-5"
                  style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                >
                  Call or click below for a free, no-obligation estimate for your {area.name} property.
                </p>
                <a
                  href={`tel:${SITE.phoneCall}`}
                  className="btn-orange w-full justify-center mb-3"
                >
                  <Phone size={16} />
                  Call Now — Free Quote
                </a>
                <Link
                  href="/contact-us"
                  className="btn-outline-white w-full justify-center"
                >
                  Request Online Quote
                  <ArrowRight size={16} />
                </Link>

                <div className="mt-5 pt-5 border-t border-white/10 space-y-2">
                  {[
                    "Licensed & Insured",
                    "Free Estimates",
                    "Same-Week Service",
                    "Satisfaction Guaranteed",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <CheckCircle size={14} className="text-[#0EA5E9]" />
                      <span
                        className="text-xs text-gray-400"
                        style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                      >
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-5 pt-5 border-t border-white/10">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin size={14} className="text-[#0EA5E9]" />
                    <span
                      className="text-xs text-gray-400"
                      style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                    >
                      {SITE.address}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 mt-3">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} size={12} className="text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    <span
                      className="text-white text-xs font-bold"
                      style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                    >
                      {SITE.rating} ({SITE.reviewCount} reviews)
                    </span>
                  </div>
                </div>
              </div>

              {/* City areas */}
              <div>
                <h3
                  className="text-xl text-[#111827] mb-4"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}
                >
                  All Service Areas
                </h3>
                <div className="space-y-2">
                  {SERVICE_AREAS.map((a) => (
                    <Link
                      key={a.id}
                      href={a.slug}
                      className="flex items-center gap-2 p-3 rounded-lg border border-gray-200 hover:border-[#0EA5E9] hover:bg-blue-50 transition-colors"
                    >
                      <MapPin size={14} className="text-[#0EA5E9]" />
                      <span
                        className="text-sm font-semibold text-gray-700"
                        style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                      >
                        {a.name}, {a.state}
                      </span>
                      <ArrowRight size={12} className="text-gray-400 ml-auto" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-16 bg-[#111827]">
        <div className="container">
          <h2
            className="text-4xl text-white mb-8"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            What {area.parent} Customers Say
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.slice(0, 3).map((t, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6">
                <div className="flex mb-3">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={14} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p
                  className="text-gray-300 text-sm italic mb-4"
                  style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                >
                  "{t.text}"
                </p>
                <div
                  className="font-bold text-white text-sm"
                  style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                >
                  {t.name} — {t.location}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title={`Serving ${area.name}, ${area.parent}`}
        subtitle={`Get a free quote for professional pressure washing in ${area.name}. Same-week service available throughout ${area.parent}, FL.`}
      />

      <Footer />
    </div>
  );
}
