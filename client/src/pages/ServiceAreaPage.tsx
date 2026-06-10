// SRQ Wash — Dynamic Service Area Page
// Design: Florida Power — used for Lakewood Ranch, Sarasota, Venice, Bradenton pages
// Bebas Neue display, Nunito Sans body

import { useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Phone, CheckCircle, ArrowRight, Star, MapPin } from "lucide-react";
import { SERVICE_AREAS, SERVICES, TESTIMONIALS, NEIGHBORHOODS, SITE } from "@/lib/siteData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import PageHero from "@/components/PageHero";
import { useSeoMeta } from "@/hooks/useSeoMeta";
import { useJsonLd } from "@/hooks/useJsonLd";
import { buildServiceAreaSchema } from "@/lib/schema";

interface ServiceAreaPageProps {
  areaId: string;
}

const AREA_CONTENT: Record<string, { intro: string; why: string; neighborhoods?: string[] }> = {
  "lakewood-ranch": {
    intro:
      "Lakewood Ranch is one of the fastest-growing master-planned communities in the United States, and SRQ Wash is proud to be the area's premier pressure washing company. From the newest neighborhoods in Waterside to established communities like Lorraine Lakes and Star Farms, we serve every corner of Lakewood Ranch with the same professional standard.",
    why:
      "Lakewood Ranch's lush landscaping and Florida climate create ideal conditions for algae, mold, and organic growth on exterior surfaces. HOA compliance is also a major consideration for many homeowners. Our team understands the specific needs of Lakewood Ranch properties and delivers results that keep your home looking its best year-round.",
    neighborhoods: NEIGHBORHOODS,
  },
  sarasota: {
    intro:
      "Sarasota is known for its stunning waterfront properties, vibrant arts scene, and beautiful neighborhoods. SRQ Wash provides professional pressure washing services throughout Sarasota, from downtown condos and commercial buildings to waterfront estates and residential neighborhoods. We understand the unique challenges that Sarasota's coastal environment presents to exterior surfaces.",
    why:
      "Sarasota's proximity to the Gulf of Mexico means salt air, humidity, and intense UV radiation constantly attack exterior surfaces. Regular professional cleaning is essential to maintain your property's appearance and protect your investment. Our eco-friendly cleaning solutions are safe for Sarasota's sensitive coastal environment.",
  },
  venice: {
    intro:
      "Venice, Florida is a charming coastal city known for its shark teeth beaches, historic downtown, and beautiful residential neighborhoods. SRQ Wash provides professional pressure washing services throughout Venice, helping homeowners maintain their properties in the face of Florida's challenging coastal climate.",
    why:
      "Venice's coastal location and humid climate make regular exterior cleaning essential. Salt air, humidity, and organic growth can quickly degrade exterior surfaces without proper maintenance. Our professional team brings the same quality and care to Venice properties that we provide throughout Sarasota and Manatee Counties.",
  },
  bradenton: {
    intro:
      "Bradenton is a vibrant city on the Manatee River with a growing residential and commercial base. SRQ Wash serves homeowners and businesses throughout Bradenton, providing professional pressure washing, roof cleaning, house washing, and exterior cleaning services that restore and protect your property.",
    why:
      "Bradenton's warm, humid climate creates perfect conditions for mold, mildew, and algae growth on exterior surfaces. Our professional cleaning services remove these contaminants and help prevent their return, keeping your Bradenton property looking clean and well-maintained.",
  },
};

export default function ServiceAreaPage({ areaId }: ServiceAreaPageProps) {
  const area = SERVICE_AREAS.find((a) => a.id === areaId);
  const [, navigate] = useLocation();

  useSeoMeta(area?.metaTitle, area?.metaDescription);
  useJsonLd(
    area
      ? buildServiceAreaSchema({
          name: area.name,
          state: area.state,
          slug: area.slug,
          description: area.description,
        })
      : []
  );

  useEffect(() => {
    if (!area) navigate("/404");
    window.scrollTo(0, 0);
  }, [areaId]);

  if (!area) return null;

  const content = AREA_CONTENT[areaId] || {
    intro: area.description,
    why: "Our professional team brings years of experience and the latest equipment to every job in this area.",
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <PageHero
        title={`Pressure Washing ${area.name}, FL`}
        subtitle={`Professional pressure washing, roof cleaning, house washing, and exterior cleaning services in ${area.name}, Florida.`}
        breadcrumb="Service Areas"
      />

      {/* ── MAIN CONTENT ── */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2">
              <p className="section-label mb-4">{area.name}, FL</p>
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
                {content.intro}
              </p>
              <p
                className="text-gray-600 leading-relaxed mb-8"
                style={{ fontFamily: "'Nunito Sans', sans-serif" }}
              >
                {content.why}
              </p>

              {/* Services offered in this area */}
              <h3
                className="text-3xl text-[#111827] mb-5"
                style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}
              >
                Services We Offer in {area.name}
              </h3>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
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
                        {service.description.substring(0, 80)}...
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Neighborhoods for Lakewood Ranch */}
              {content.neighborhoods && (
                <div className="mt-8 p-6 bg-[#F1F5F9] rounded-xl">
                  <h3
                    className="text-2xl text-[#111827] mb-5"
                    style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}
                  >
                    {area.name} Neighborhoods We Serve
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {content.neighborhoods.map((n) => (
                      <div key={n} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#0EA5E9] flex-shrink-0" />
                        <span
                          className="text-sm text-gray-600"
                          style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                        >
                          {n}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Why choose us */}
              <div className="mt-8">
                <h3
                  className="text-3xl text-[#111827] mb-5"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}
                >
                  Why Choose SRQ Wash in {area.name}?
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    "Locally owned and operated",
                    "Fully licensed and insured",
                    "5.0 star Google rating",
                    "Free, no-obligation estimates",
                    "Same-week service available",
                    "Eco-friendly cleaning solutions",
                    "Satisfaction guaranteed",
                    "Manufacturer-approved methods",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-[#0EA5E9] flex-shrink-0" />
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
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Quick quote card */}
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

              {/* Other service areas */}
              <div>
                <h3
                  className="text-xl text-[#111827] mb-4"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}
                >
                  Other Service Areas
                </h3>
                <div className="space-y-2">
                  {SERVICE_AREAS.filter((a) => a.id !== areaId).map((a) => (
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
            What {area.name} Customers Say
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
        title={`Serving ${area.name}, FL`}
        subtitle={`Get a free quote for professional pressure washing in ${area.name}. Same-week service available.`}
      />

      <Footer />
    </div>
  );
}
