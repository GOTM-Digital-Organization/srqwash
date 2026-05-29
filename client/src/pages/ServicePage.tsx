// SRQ Wash — Dynamic Service Page
// Design: Florida Power — used for all 5 service pages
// Bebas Neue display, Nunito Sans body

import { useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Phone, CheckCircle, ArrowRight, Star, MapPin } from "lucide-react";
import { SERVICES, SERVICE_AREAS, TESTIMONIALS, SITE } from "@/lib/siteData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import PageHero from "@/components/PageHero";

interface ServicePageProps {
  serviceId: string;
}

export default function ServicePage({ serviceId }: ServicePageProps) {
  const service = SERVICES.find((s) => s.id === serviceId);
  const [, navigate] = useLocation();

  useEffect(() => {
    if (!service) navigate("/404");
    window.scrollTo(0, 0);
  }, [serviceId]);

  if (!service) return null;

  const otherServices = SERVICES.filter((s) => s.id !== serviceId).slice(0, 3);
  const relatedTestimonials = TESTIMONIALS.filter((t) =>
    t.service.toLowerCase().includes(service.shortTitle.toLowerCase())
  ).slice(0, 2);
  const displayTestimonials =
    relatedTestimonials.length > 0
      ? relatedTestimonials
      : TESTIMONIALS.slice(0, 2);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <PageHero
        title={service.title}
        subtitle={service.subtitle}
        image={service.image}
        breadcrumb="Our Services"
      />

      {/* ── MAIN CONTENT ── */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2">
              <p className="section-label mb-4">{service.shortTitle}</p>
              <h2
                className="text-4xl lg:text-5xl text-[#111827] mb-6 leading-none"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                {service.subtitle}
              </h2>

              {service.longDescription.split("\n\n").map((para, i) => (
                <p
                  key={i}
                  className="text-gray-600 leading-relaxed mb-5"
                  style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                >
                  {para}
                </p>
              ))}

              {/* Benefits */}
              <div className="mt-8 p-6 bg-[#F1F5F9] rounded-xl">
                <h3
                  className="text-2xl text-[#111827] mb-5"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}
                >
                  Why Choose SRQ Wash for {service.shortTitle}?
                </h3>
                <ul className="space-y-3">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <CheckCircle
                        size={18}
                        className="text-[#0EA5E9] mt-0.5 flex-shrink-0"
                      />
                      <span
                        className="text-gray-700"
                        style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                      >
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Service areas for this service */}
              <div className="mt-8">
                <h3
                  className="text-2xl text-[#111827] mb-4"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}
                >
                  {service.shortTitle} Service Areas
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {SERVICE_AREAS.map((area) => (
                    <Link
                      key={area.id}
                      href={area.slug}
                      className="flex items-center gap-2 p-3 rounded-lg border border-gray-200 hover:border-[#0EA5E9] hover:bg-blue-50 transition-colors"
                    >
                      <MapPin size={14} className="text-[#0EA5E9]" />
                      <span
                        className="text-sm font-semibold text-gray-700"
                        style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                      >
                        {area.name}
                      </span>
                    </Link>
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
                  Get a Free Quote
                </h3>
                <p
                  className="text-gray-400 text-sm mb-5"
                  style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                >
                  Call or click below for a free, no-obligation estimate on {service.shortTitle.toLowerCase()} services.
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

                {/* Trust signals */}
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

                {/* Rating */}
                <div className="mt-5 pt-5 border-t border-white/10 flex items-center gap-3">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <span
                    className="text-white text-sm font-bold"
                    style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                  >
                    {SITE.rating} ({SITE.reviewCount} reviews)
                  </span>
                </div>
              </div>

              {/* Other services */}
              <div>
                <h3
                  className="text-xl text-[#111827] mb-4"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}
                >
                  Other Services
                </h3>
                <div className="space-y-3">
                  {otherServices.map((s) => (
                    <Link
                      key={s.id}
                      href={s.slug}
                      className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:border-[#0EA5E9] hover:bg-blue-50 transition-colors group"
                    >
                      <img
                        src={s.image}
                        alt={s.title}
                        className="w-14 h-14 rounded-lg object-cover flex-shrink-0"
                      />
                      <div>
                        <div
                          className="font-bold text-sm text-gray-800 group-hover:text-[#0EA5E9] transition-colors"
                          style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                        >
                          {s.title}
                        </div>
                        <div
                          className="text-xs text-gray-500 flex items-center gap-1 mt-0.5"
                          style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                        >
                          Learn more <ArrowRight size={10} />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-16 bg-[#F1F5F9]">
        <div className="container">
          <h2
            className="text-4xl text-[#111827] mb-8"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            What Customers Say About Our {service.shortTitle} Service
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {displayTestimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex mb-3">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={14} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p
                  className="text-gray-600 italic mb-4"
                  style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                >
                  "{t.text}"
                </p>
                <div
                  className="font-bold text-gray-800 text-sm"
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
        title={`Ready for Professional ${service.shortTitle}?`}
        subtitle={`Get a free quote for ${service.shortTitle.toLowerCase()} services in Lakewood Ranch, Sarasota, Bradenton, and Venice.`}
      />

      <Footer />
    </div>
  );
}
