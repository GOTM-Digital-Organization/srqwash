// SRQ Wash — Service Areas Index Page (/service-areas)
// Design: Florida Power — Slate Black + Pressure Blue + Safety Orange

import { useEffect } from "react";
import { Link } from "wouter";
import { MapPin, ArrowRight, Phone } from "lucide-react";
import { SITE, SERVICE_AREAS, NEIGHBORHOODS } from "@/lib/siteData";
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

export default function ServiceAreas() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <PageHero
        title="Service Areas"
        subtitle="SRQ Wash provides professional pressure washing throughout Sarasota and Manatee Counties, FL."
        breadcrumb="Where We Work"
        showCTA={false}
      />

      {/* ── MAIN AREAS ── */}
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

          {/* Lakewood Ranch Neighborhoods */}
          <div className="bg-[#F1F5F9] rounded-2xl p-8">
            <div className="flex flex-col md:flex-row items-start justify-between gap-6 mb-8">
              <div>
                <p className="section-label mb-3">Lakewood Ranch</p>
                <h3
                  className="text-4xl text-[#111827]"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  All Neighborhoods Served
                </h3>
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
              {NEIGHBORHOODS.map((n) => (
                <div key={n} className="flex items-center gap-2 bg-white rounded-lg px-3 py-2.5">
                  <div className="w-2 h-2 rounded-full bg-[#0EA5E9] flex-shrink-0" />
                  <span
                    className="text-sm text-gray-700 font-medium"
                    style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                  >
                    {n}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
      <Footer />
    </div>
  );
}
