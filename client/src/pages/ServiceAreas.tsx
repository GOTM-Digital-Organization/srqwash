// SRQ Wash — Service Areas Index Page (/service-areas)
// Design: Florida Power — Slate Black + Pressure Blue + Safety Orange

import { useEffect } from "react";
import { Link } from "wouter";
import { MapPin, ArrowRight, Phone, CheckCircle } from "lucide-react";
import { SITE, SERVICE_AREAS, NEIGHBORHOOD_AREAS } from "@/lib/siteData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import PageHero from "@/components/PageHero";

const AREA_IMAGES: Record<string, string> = {
  "lakewood-ranch":
    "https://d2xsxph8kpxj0f.cloudfront.net/310419663028316757/S8hJyhgpkGHR2RfqK8Ywnb/house-washing-d8iTwVpg2DNLBPa4TF6qYx.webp",
  sarasota:
    "https://d2xsxph8kpxj0f.cloudfront.net/310419663028316757/S8hJyhgpkGHR2RfqK8Ywnb/driveway-cleaning-2i5rnpKXs2obVPyB7Mi9Xv.webp",
  venice:
    "https://d2xsxph8kpxj0f.cloudfront.net/310419663028316757/S8hJyhgpkGHR2RfqK8Ywnb/pool-cage-cleaning-FPWrGmUw9QQXQ2dHyeNXot.webp",
  bradenton:
    "https://d2xsxph8kpxj0f.cloudfront.net/310419663028316757/S8hJyhgpkGHR2RfqK8Ywnb/roof-cleaning-E5hFHyHQFJNnrFAnkehfGE.webp",
};

// Group neighborhood areas by parent city
const GROUPED = SERVICE_AREAS.map((city) => ({
  city,
  neighborhoods: NEIGHBORHOOD_AREAS.filter((n) => n.parent === city.name),
}));

// Additional suburb groups not covered by the main 4 cities
const SUBURB_GROUPS = [
  {
    label: "Sarasota Area Suburbs",
    parent: "Sarasota",
    areas: NEIGHBORHOOD_AREAS.filter((n) => n.parent === "Sarasota"),
  },
  {
    label: "Bradenton Area Suburbs",
    parent: "Bradenton",
    areas: NEIGHBORHOOD_AREAS.filter((n) => n.parent === "Bradenton"),
  },
  {
    label: "Venice Area Suburbs",
    parent: "Venice",
    areas: NEIGHBORHOOD_AREAS.filter((n) => n.parent === "Venice"),
  },
];

export default function ServiceAreas() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <PageHero
        title="Service Areas"
        subtitle="SRQ Wash provides professional pressure washing throughout Sarasota and Manatee Counties, FL — from Lakewood Ranch neighborhoods to coastal communities."
        breadcrumb="Where We Work"
        showCTA={false}
      />

      {/* ── MAIN CITY AREAS ── */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-14">
            <p className="section-label justify-center mb-4">Coverage Area</p>
            <h2
              className="text-5xl lg:text-6xl text-[#111827] mb-4"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              Serving Sarasota & Manatee Counties
            </h2>
            <p
              className="text-gray-600 text-lg max-w-2xl mx-auto"
              style={{ fontFamily: "'Nunito Sans', sans-serif" }}
            >
              From Lakewood Ranch to Venice, we bring professional exterior cleaning to homes and businesses throughout Southwest Florida.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {SERVICE_AREAS.map((area) => (
              <Link
                key={area.id}
                href={area.slug}
                className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-64">
                  <img
                    src={AREA_IMAGES[area.id]}
                    alt={`Pressure washing in ${area.name}, FL`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-2 mb-1">
                    <MapPin size={14} className="text-[#0EA5E9]" />
                    <span
                      className="text-xs font-semibold text-[#0EA5E9] uppercase tracking-wider"
                      style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                    >
                      Service Area
                    </span>
                  </div>
                  <h3
                    className="text-3xl text-white mb-2"
                    style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}
                  >
                    {area.name}, {area.state}
                  </h3>
                  <p
                    className="text-gray-300 text-sm mb-3 line-clamp-2"
                    style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                  >
                    {area.description}
                  </p>
                  <div
                    className="flex items-center gap-1.5 text-[#F97316] font-bold text-sm group-hover:gap-3 transition-all"
                    style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                  >
                    View Services in {area.name}
                    <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* ── LAKEWOOD RANCH NEIGHBORHOODS ── */}
          <div className="bg-[#F1F5F9] rounded-2xl p-8 mb-12">
            <div className="flex flex-col md:flex-row items-start justify-between gap-6 mb-8">
              <div>
                <p className="section-label mb-3">Lakewood Ranch</p>
                <h3
                  className="text-4xl text-[#111827]"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  All Neighborhoods Served
                </h3>
                <p
                  className="text-gray-600 mt-2 max-w-xl"
                  style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                >
                  We serve every community within Lakewood Ranch — from Waterside to Star Farms. Click any neighborhood for a dedicated service page.
                </p>
              </div>
              <a
                href={`tel:${SITE.phoneCall}`}
                className="btn-orange flex-shrink-0"
              >
                <Phone size={16} />
                Get a Quote
              </a>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {NEIGHBORHOOD_AREAS.filter((n) => n.parent === "Lakewood Ranch").map((n) => (
                <Link
                  key={n.id}
                  href={n.slug}
                  className="flex items-center gap-2 bg-white rounded-lg px-3 py-2.5 hover:bg-[#0EA5E9] hover:text-white transition-all group border border-transparent hover:border-[#0EA5E9]"
                >
                  <MapPin size={12} className="text-[#0EA5E9] group-hover:text-white flex-shrink-0" />
                  <span
                    className="text-sm text-gray-700 font-medium group-hover:text-white"
                    style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                  >
                    {n.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* ── SUBURB GROUPS ── */}
          {SUBURB_GROUPS.map((group) =>
            group.areas.length > 0 ? (
              <div key={group.parent} className="bg-[#F8FAFC] border border-gray-200 rounded-2xl p-8 mb-8">
                <div className="flex flex-col md:flex-row items-start justify-between gap-4 mb-6">
                  <div>
                    <p
                      className="text-[#F97316] text-xs font-bold uppercase tracking-widest mb-2"
                      style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                    >
                      {group.parent} County
                    </p>
                    <h3
                      className="text-3xl text-[#111827]"
                      style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                    >
                      {group.label}
                    </h3>
                  </div>
                  <Link
                    href={`/service-area/${group.parent.toLowerCase()}`}
                    className="text-sm font-bold text-[#0EA5E9] flex items-center gap-1 hover:gap-2 transition-all"
                    style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                  >
                    View {group.parent} Page
                    <ArrowRight size={14} />
                  </Link>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                  {group.areas.map((n) => (
                    <Link
                      key={n.id}
                      href={n.slug}
                      className="flex items-center gap-2 bg-white rounded-lg px-3 py-2.5 hover:bg-[#0EA5E9] hover:text-white transition-all group border border-gray-200 hover:border-[#0EA5E9]"
                    >
                      <MapPin size={12} className="text-[#0EA5E9] group-hover:text-white flex-shrink-0" />
                      <span
                        className="text-sm text-gray-700 font-medium group-hover:text-white"
                        style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                      >
                        {n.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            ) : null
          )}

          {/* Why local SEO matters callout */}
          <div className="bg-[#111827] rounded-2xl p-8 mt-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3
                  className="text-4xl text-white mb-4"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  Locally Owned. Locally Trusted.
                </h3>
                <p
                  className="text-gray-300 mb-6"
                  style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                >
                  SRQ Wash is based right here in Lakewood Ranch. We know these communities because we live and work in them. That means faster response times, better service, and a team that genuinely cares about your property.
                </p>
                <a
                  href={`tel:${SITE.phoneCall}`}
                  className="btn-orange"
                >
                  <Phone size={16} />
                  Call for a Free Quote
                </a>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Communities Served", value: "40+" },
                  { label: "Google Rating", value: "5.0 ★" },
                  { label: "Reviews", value: "48+" },
                  { label: "Years Serving SRQ", value: "5+" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-white/5 border border-white/10 rounded-xl p-5 text-center">
                    <div
                      className="text-4xl text-[#0EA5E9] mb-1"
                      style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                    >
                      {stat.value}
                    </div>
                    <div
                      className="text-xs text-gray-400 font-semibold uppercase tracking-wider"
                      style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                    >
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
      <Footer />
    </div>
  );
}
