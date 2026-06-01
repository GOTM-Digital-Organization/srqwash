// SRQ Wash — Homepage
// Design: Florida Power — Slate Black + Pressure Blue + Safety Orange
// Bebas Neue display, Nunito Sans body

import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import {
  Phone,
  Star,
  Shield,
  Clock,
  Leaf,
  Award,
  CheckCircle,
  ArrowRight,
  ChevronDown,
  MapPin,
} from "lucide-react";
import { SITE, SERVICES, TESTIMONIALS, NEIGHBORHOODS, FAQS } from "@/lib/siteData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import TrustBar from "@/components/TrustBar";

// Animated counter hook
function useCountUp(target: number, duration = 1500, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

const STATS = [
  { value: 500, suffix: "+", label: "Properties Cleaned" },
  { value: 48, suffix: "", label: "5-Star Reviews" },
  { value: 5, suffix: "+", label: "Years in Business" },
  { value: 100, suffix: "%", label: "Satisfaction Guarantee" },
];

export default function Home() {
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStatsVisible(true);
      },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  const count0 = useCountUp(STATS[0].value, 1500, statsVisible);
  const count1 = useCountUp(STATS[1].value, 1500, statsVisible);
  const count2 = useCountUp(STATS[2].value, 1500, statsVisible);
  const count3 = useCountUp(STATS[3].value, 1500, statsVisible);
  const counts = [count0, count1, count2, count3];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* ── HERO ── */}
      <section
        className="relative min-h-screen flex items-center"
        style={{
          backgroundImage:
            "url(/manus-storage/hero-roof-cleaning-barrel-tile-Fcd9LpuSZXD5dwY46PvXzH.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/20" />

        <div className="container relative z-10 pt-20">
          <div className="max-w-3xl">
            {/* Trust badges */}
            <div className="flex flex-wrap gap-3 mb-6">
              {[
                { icon: Shield, label: "Licensed & Insured" },
                { icon: Star, label: "5.0 Stars" },
                { icon: Clock, label: "Same-Week Service" },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1.5"
                >
                  <Icon size={12} className="text-[#0EA5E9]" />
                  <span
                    className="text-xs font-semibold text-white"
                    style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>

            {/* Headline */}
            <h1
              className="text-6xl sm:text-7xl lg:text-8xl text-white leading-none mb-6"
              style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.02em" }}
            >
              Professional
              <br />
              <span style={{ color: "oklch(0.72 0.19 45)" }}>Pressure Washing</span>
              <br />
              in Lakewood Ranch,
              <br />
              Sarasota & Venice
            </h1>

            <p
              className="text-lg lg:text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed"
              style={{ fontFamily: "'Nunito Sans', sans-serif" }}
            >
              From roof cleaning and house washing to driveway restoration and paver sealing — SRQ Wash delivers exceptional results for homes and businesses throughout Sarasota and Manatee Counties.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={`tel:${SITE.phoneCall}`} className="btn-orange text-lg px-8 py-4">
                <Phone size={20} />
                Call for a Free Quote
              </a>
              <Link href="/contact-us" className="btn-outline-white text-lg px-8 py-4">
                Get a Quote Online
                <ArrowRight size={20} />
              </Link>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-3 mt-8">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    size={18}
                    className="text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
              <span
                className="text-white font-bold"
                style={{ fontFamily: "'Nunito Sans', sans-serif" }}
              >
                {SITE.rating}
              </span>
              <span
                className="text-gray-300 text-sm"
                style={{ fontFamily: "'Nunito Sans', sans-serif" }}
              >
                ({SITE.reviewCount} Google Reviews)
              </span>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <ChevronDown size={28} className="text-white/60" />
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <TrustBar />

      {/* ── ABOUT INTRO ── */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="section-label mb-4">About SRQ Wash</p>
              <h2
                className="text-5xl lg:text-6xl text-[#111827] mb-6 leading-none"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                Lakewood Ranch's Premier Pressure Washing Company
              </h2>
              <p
                className="text-gray-600 text-lg leading-relaxed mb-5"
                style={{ fontFamily: "'Nunito Sans', sans-serif" }}
              >
                When it comes to professional pressure washing in Lakewood Ranch, our locally-owned company stands as the trusted choice for homeowners and business owners throughout Sarasota and Manatee Counties. We understand the unique challenges that Florida's climate presents to exterior surfaces.
              </p>
              <p
                className="text-gray-600 leading-relaxed mb-8"
                style={{ fontFamily: "'Nunito Sans', sans-serif" }}
              >
                From the relentless humidity that promotes mold and mildew growth to the seasonal pollen that coats everything in sight, our certified team brings years of experience to every project. We use environmentally safe cleaning solutions that are tough on dirt but gentle on your landscaping and family.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  "Fully Licensed & Insured",
                  "Eco-Friendly Solutions",
                  "Manufacturer-Approved Methods",
                  "Satisfaction Guaranteed",
                  "Same-Week Availability",
                  "Free, No-Obligation Quotes",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-[#0EA5E9] flex-shrink-0" />
                    <span
                      className="text-sm font-semibold text-gray-700"
                      style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
              <Link href="/about" className="btn-blue">
                Learn More About Us
                <ArrowRight size={16} />
              </Link>
            </div>
            <div className="relative">
              <img
                src="/manus-storage/truck-trailer-1_7192309a.webp"
                alt="SRQ Wash truck and trailer at a Lakewood Ranch home"
                className="rounded-xl shadow-2xl w-full object-cover h-[500px]"
              />
              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 bg-[#111827] text-white rounded-xl p-5 shadow-xl">
                <div
                  className="text-4xl text-[#F97316]"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  5.0
                </div>
                <div className="flex mb-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={12} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <div
                  className="text-xs text-gray-400"
                  style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                >
                  {SITE.reviewCount} Google Reviews
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section
        ref={statsRef}
        className="py-16 bg-[#111827]"
      >
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {STATS.map((stat, i) => (
              <div key={stat.label} className="text-center">
                <div
                  className="text-5xl lg:text-6xl mb-2"
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    color: "oklch(0.72 0.19 45)",
                  }}
                >
                  {counts[i]}
                  {stat.suffix}
                </div>
                <div
                  className="text-sm font-semibold text-gray-400 uppercase tracking-wider"
                  style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-20 bg-[#F1F5F9]">
        <div className="container">
          <div className="text-center mb-14">
            <p className="section-label justify-center mb-4">What We Do</p>
            <h2
              className="text-5xl lg:text-6xl text-[#111827] mb-4"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              Our Pressure Washing Services
            </h2>
            <p
              className="text-gray-600 text-lg max-w-2xl mx-auto"
              style={{ fontFamily: "'Nunito Sans', sans-serif" }}
            >
              Comprehensive exterior cleaning solutions for residential and commercial properties throughout Lakewood Ranch, Sarasota, and Bradenton.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, i) => (
              <Link
                key={service.id}
                href={service.slug}
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div
                    className="absolute bottom-3 left-4 text-2xl text-white"
                    style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}
                  >
                    {service.shortTitle}
                  </div>
                </div>
                <div className="p-5">
                  <p
                    className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3"
                    style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                  >
                    {service.description}
                  </p>
                  <div
                    className="flex items-center gap-1.5 text-[#0EA5E9] font-bold text-sm group-hover:gap-3 transition-all"
                    style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                  >
                    Learn More
                    <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <CTABanner />

      {/* ── SERVICE AREAS ── */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <p className="section-label mb-4">Where We Work</p>
              <h2
                className="text-5xl lg:text-6xl text-[#111827] mb-6 leading-none"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                Serving Lakewood Ranch, Sarasota, Venice & Bradenton
              </h2>
              <p
                className="text-gray-600 leading-relaxed mb-8"
                style={{ fontFamily: "'Nunito Sans', sans-serif" }}
              >
                SRQ Wash serves homeowners and businesses throughout Sarasota and Manatee Counties. Whether you're in a Lakewood Ranch master-planned community, a Sarasota waterfront home, or a Venice neighborhood, we bring the same professional service and quality results to every property.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {["Lakewood Ranch", "Sarasota", "Venice", "Bradenton"].map((area) => (
                  <div
                    key={area}
                    className="flex items-center gap-2 p-3 rounded-lg border border-gray-200 hover:border-[#0EA5E9] transition-colors"
                  >
                    <MapPin size={16} className="text-[#0EA5E9]" />
                    <span
                      className="font-semibold text-gray-700"
                      style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                    >
                      {area}, FL
                    </span>
                  </div>
                ))}
              </div>
              <Link href="/service-areas" className="btn-blue">
                View All Service Areas
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* Neighborhoods */}
            <div>
              <h3
                className="text-2xl text-[#111827] mb-5"
                style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}
              >
                Lakewood Ranch Neighborhoods We Serve
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {NEIGHBORHOODS.map((n) => (
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
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-20 bg-[#111827]">
        <div className="container">
          <div className="text-center mb-14">
            <p className="section-label justify-center mb-4" style={{ color: "oklch(0.72 0.19 45)" }}>
              <span className="text-[#F97316]">What Clients Say</span>
            </p>
            <h2
              className="text-5xl lg:text-6xl text-white mb-4"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              5-Star Google Reviews
            </h2>
            <div className="flex items-center justify-center gap-3">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={20} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <span
                className="text-white font-bold text-lg"
                style={{ fontFamily: "'Nunito Sans', sans-serif" }}
              >
                {SITE.rating} out of 5
              </span>
              <span
                className="text-gray-400"
                style={{ fontFamily: "'Nunito Sans', sans-serif" }}
              >
                ({SITE.reviewCount} reviews)
              </span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors"
              >
                <div className="flex mb-3">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={14} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p
                  className="text-gray-300 text-sm leading-relaxed mb-5 italic"
                  style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                >
                  "{t.text}"
                </p>
                <div className="border-t border-white/10 pt-4">
                  <div
                    className="font-bold text-white text-sm"
                    style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                  >
                    {t.name}
                  </div>
                  <div
                    className="text-xs text-gray-500"
                    style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                  >
                    {t.location} · {t.service}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/reviews-page" className="btn-outline-white">
              Read All Reviews
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── REAL WORK GALLERY ── */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <p className="section-label justify-center mb-4">Real Results</p>
            <h2
              className="text-5xl lg:text-6xl text-[#111827] mb-4"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              Our Work Speaks for Itself
            </h2>
            <p
              className="text-gray-600 text-lg max-w-2xl mx-auto"
              style={{ fontFamily: "'Nunito Sans', sans-serif" }}
            >
              Real photos from real jobs in Lakewood Ranch and Sarasota. No stock photos — just the results we deliver every day.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {[
              { src: "/manus-storage/job-roof-cleaning-1_3cdf5e49.webp", alt: "Soft wash roof cleaning in progress, Lakewood Ranch" },
              { src: "/manus-storage/job-roof-cleaning-2_c66b2d1d.webp", alt: "Roof cleaning with soft wash equipment, Sarasota" },
              { src: "/manus-storage/job-roof-before-after-1_68f4e192.webp", alt: "Tile roof before and after soft wash cleaning" },
              { src: "/manus-storage/job-roof-before-after-2_d8dd2e1a.webp", alt: "Roof cleaning before and after comparison" },
              { src: "/manus-storage/job-roof-after-1_90c9f27b.webp", alt: "Clean tile roof after soft wash treatment" },
              { src: "/manus-storage/job-roof-after-2_67294a74.webp", alt: "Restored roof tiles after professional cleaning" },
              { src: "/manus-storage/truck-trailer-1_7192309a.webp", alt: "SRQ Wash truck and trailer at a Lakewood Ranch home" },
              { src: "/manus-storage/trailer-closeup_8cbd8513.webp", alt: "SRQ Wash professional pressure washing trailer setup" },
            ].map(({ src, alt }, i) => (
              <div
                key={i}
                className="relative overflow-hidden rounded-xl aspect-square group cursor-pointer"
              >
                <img
                  src={src}
                  alt={alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <p className="section-label mb-4">Got Questions?</p>
              <h2
                className="text-5xl lg:text-6xl text-[#111827] mb-6 leading-none"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                Frequently Asked Questions
              </h2>
              <p
                className="text-gray-600 leading-relaxed mb-8"
                style={{ fontFamily: "'Nunito Sans', sans-serif" }}
              >
                We understand that choosing the right pressure washing company is an important decision. Here are answers to the most common questions we receive.
              </p>
              <Link href="/faqs" className="btn-blue">
                View All FAQs
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="space-y-3">
              {FAQS.slice(0, 5).map((faq, i) => (
                <div
                  key={i}
                  className="border border-gray-200 rounded-lg overflow-hidden"
                >
                  <button
                    className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span
                      className="font-semibold text-gray-800 pr-4"
                      style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                    >
                      {faq.question}
                    </span>
                    <ChevronDown
                      size={18}
                      className={`text-[#0EA5E9] flex-shrink-0 transition-transform ${
                        openFaq === i ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-5">
                      <p
                        className="text-gray-600 text-sm leading-relaxed"
                        style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                      >
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── POOL PARTNER ── */}
      <section className="py-12 bg-[#0EA5E9]">
        <div className="container">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3
                className="text-3xl text-white mb-1"
                style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}
              >
                Also Need Pool Cleaning?
              </h3>
              <p
                className="text-blue-100"
                style={{ fontFamily: "'Nunito Sans', sans-serif" }}
              >
                We also own and operate a pool service company. Click below to visit our sister site.
              </p>
            </div>
            <a
              href={SITE.partnerSite.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 bg-white text-[#0EA5E9] font-bold px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors"
              style={{ fontFamily: "'Nunito Sans', sans-serif" }}
            >
              Visit TomThePoolGuy.com →
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
