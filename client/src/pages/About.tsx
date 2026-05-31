// SRQ Wash — About Page (/about)
// Design: Florida Power — Slate Black + Pressure Blue + Safety Orange

import { useEffect } from "react";
import { Link } from "wouter";
import { Phone, CheckCircle, ArrowRight, Star, Shield, Leaf, Award, Clock } from "lucide-react";
import { SITE, SERVICES } from "@/lib/siteData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import PageHero from "@/components/PageHero";

const VALUES = [
  {
    icon: Shield,
    title: "Integrity First",
    description:
      "We show up on time, do what we say, and stand behind our work. No hidden fees, no shortcuts, no excuses.",
  },
  {
    icon: Award,
    title: "Craftsmanship",
    description:
      "We treat every property as if it were our own. Attention to detail and professional results on every job.",
  },
  {
    icon: Leaf,
    title: "Environmental Responsibility",
    description:
      "We use biodegradable, plant-safe cleaning solutions that are effective without harming Florida's environment.",
  },
  {
    icon: Clock,
    title: "Reliability",
    description:
      "Same-week scheduling, on-time arrivals, and clear communication from quote to completion.",
  },
];

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <PageHero
        title="About SRQ Wash"
        subtitle="Lakewood Ranch's locally owned and operated pressure washing company, serving Sarasota and Manatee Counties with pride."
        breadcrumb="About Us"
      />

      {/* ── STORY ── */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="section-label mb-4">Our Story</p>
              <h2
                className="text-5xl lg:text-6xl text-[#111827] mb-6 leading-none"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                Built on Quality, Driven by Results
              </h2>
              <p
                className="text-gray-600 leading-relaxed mb-5 text-lg"
                style={{ fontFamily: "'Nunito Sans', sans-serif" }}
              >
                SRQ Wash was founded right here in Lakewood Ranch with a simple mission: to provide the highest quality exterior cleaning services in Sarasota and Manatee Counties. We started with a single truck and a commitment to doing things the right way — using the best equipment, the safest cleaning solutions, and the most professional approach in the industry.
              </p>
              <p
                className="text-gray-600 leading-relaxed mb-5"
                style={{ fontFamily: "'Nunito Sans', sans-serif" }}
              >
                Today, we're proud to be one of the most trusted pressure washing companies in the region, with a 5.0-star Google rating and hundreds of satisfied customers throughout Lakewood Ranch, Sarasota, Venice, and Bradenton. Our team of certified professionals brings the same dedication to every job, whether it's a single driveway cleaning or a full property restoration.
              </p>
              <p
                className="text-gray-600 leading-relaxed mb-8"
                style={{ fontFamily: "'Nunito Sans', sans-serif" }}
              >
                We also own and operate{" "}
                <a
                  href={SITE.partnerSite.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0EA5E9] font-semibold hover:underline"
                >
                  TomThePoolGuy.com
                </a>
                , a full-service pool cleaning and maintenance company. This dual expertise gives us a unique understanding of Florida's outdoor living spaces and how to keep them looking their best.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={`tel:${SITE.phoneCall}`} className="btn-orange">
                  <Phone size={16} />
                  Call for a Free Quote
                </a>
                <Link href="/contact-us" className="btn-blue">
                  Contact Us
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="/manus-storage/truck-trailer-1_7192309a.webp"
                alt="SRQ Wash truck and trailer at a Lakewood Ranch home"
                className="rounded-xl shadow-2xl w-full object-cover h-[480px]"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#F97316] text-white rounded-xl p-5 shadow-xl">
                <div
                  className="text-4xl"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  5+ Years
                </div>
                <div
                  className="text-sm font-semibold"
                  style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                >
                  Serving SW Florida
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="py-20 bg-[#F1F5F9]">
        <div className="container">
          <div className="text-center mb-14">
            <p className="section-label justify-center mb-4">What We Stand For</p>
            <h2
              className="text-5xl text-[#111827] mb-4"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              Our Core Values
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map(({ icon: Icon, title, description }) => (
              <div key={title} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 rounded-lg bg-[#0EA5E9]/10 flex items-center justify-center mb-4">
                  <Icon size={22} className="text-[#0EA5E9]" />
                </div>
                <h3
                  className="text-xl text-[#111827] mb-3"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}
                >
                  {title}
                </h3>
                <p
                  className="text-gray-600 text-sm leading-relaxed"
                  style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                >
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CREDENTIALS ── */}
      <section className="py-20 bg-[#111827]">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="section-label mb-4" style={{ color: "oklch(0.72 0.19 45)" }}>
                <span className="text-[#F97316]">Why Trust Us</span>
              </p>
              <h2
                className="text-5xl text-white mb-6 leading-none"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                Licensed, Insured & Certified
              </h2>
              <p
                className="text-gray-400 leading-relaxed mb-8"
                style={{ fontFamily: "'Nunito Sans', sans-serif" }}
              >
                Hiring an uninsured or unlicensed pressure washing contractor puts your property and finances at risk. SRQ Wash carries comprehensive general liability insurance and workers' compensation coverage on every job. We are happy to provide proof of insurance upon request.
              </p>
              <ul className="space-y-4">
                {[
                  "Fully licensed pressure washing contractor",
                  "General liability insurance — available on request",
                  "Workers' compensation coverage",
                  "ARMA-compliant soft wash roof cleaning methods",
                  "Environmentally responsible cleaning solutions",
                  "Ongoing professional training and certification",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-[#0EA5E9] mt-0.5 flex-shrink-0" />
                    <span
                      className="text-gray-300"
                      style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "5.0", label: "Star Rating", sub: `${SITE.reviewCount} Google Reviews` },
                { value: "500+", label: "Properties Cleaned", sub: "Residential & Commercial" },
                { value: "5+", label: "Years in Business", sub: "Serving SW Florida" },
                { value: "100%", label: "Satisfaction Guarantee", sub: "On Every Job" },
              ].map(({ value, label, sub }) => (
                <div
                  key={label}
                  className="bg-white/5 border border-white/10 rounded-xl p-6 text-center"
                >
                  <div
                    className="text-4xl text-[#F97316] mb-1"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    {value}
                  </div>
                  <div
                    className="text-white font-bold text-sm mb-1"
                    style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                  >
                    {label}
                  </div>
                  <div
                    className="text-gray-500 text-xs"
                    style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                  >
                    {sub}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── OWNER / MEET THE TEAM ── */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="relative">
              <img
                src="/manus-storage/owner-photo_01cb5149.webp"
                alt="Owner of SRQ Wash"
                className="rounded-2xl shadow-2xl w-full h-[520px]"
                style={{ objectFit: 'contain', objectPosition: 'center', background: '#f1f5f9' }}
              />
              <div className="absolute -bottom-5 -right-5 bg-[#0EA5E9] text-white rounded-xl px-5 py-4 shadow-xl">
                <div
                  className="text-3xl font-bold"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  Tom — Owner &amp; Operator
                </div>
                <div className="text-sm opacity-90" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
                  SRQ Wash, Lakewood Ranch FL
                </div>
              </div>
            </div>
            <div>
              <p className="section-label mb-4">Meet the Owner</p>
              <h2
                className="text-5xl lg:text-6xl text-[#111827] mb-6 leading-none"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                Hi, I'm Tom
              </h2>
              <p
                className="text-gray-600 leading-relaxed mb-5 text-lg"
                style={{ fontFamily: "'Nunito Sans', sans-serif" }}
              >
                SRQ Wash is owner-operated by Tom — which means when you hire us, you get the owner on the job. Not a subcontractor, not a crew you've never met. Tom personally oversees every project to make sure the work meets the standards he'd want for his own home.
              </p>
              <p
                className="text-gray-600 leading-relaxed mb-5"
                style={{ fontFamily: "'Nunito Sans', sans-serif" }}
              >
                Tom has been serving Lakewood Ranch, Sarasota, Venice, and Bradenton for over 5 years. He knows these neighborhoods, the HOA expectations, and how Florida's climate affects your home's exterior. That local knowledge makes a real difference in the quality of results he delivers.
              </p>
              <p
                className="text-gray-600 leading-relaxed mb-8"
                style={{ fontFamily: "'Nunito Sans', sans-serif" }}
              >
                Tom's goal is simple: leave every property cleaner than he found it, and every customer more satisfied than they expected. That's why 90% of his business comes from referrals and repeat customers.
              </p>
              <a href={`tel:${SITE.phoneCall}`} className="btn-orange">
                <Phone size={16} />
                Talk to Tom Directly
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES OVERVIEW ── */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <p className="section-label justify-center mb-4">What We Offer</p>
            <h2
              className="text-5xl text-[#111827]"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              Our Services
            </h2>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
            {SERVICES.map((service) => (
              <Link
                key={service.id}
                href={service.slug}
                className="group bg-[#F1F5F9] rounded-xl p-5 hover:bg-[#0EA5E9] transition-colors text-center"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-28 object-cover rounded-lg mb-3"
                />
                <div
                  className="font-bold text-gray-800 group-hover:text-white text-sm transition-colors"
                  style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                >
                  {service.title}
                </div>
                <div
                  className="text-xs text-gray-500 group-hover:text-blue-100 mt-1 flex items-center justify-center gap-1 transition-colors"
                  style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                >
                  Learn more <ArrowRight size={10} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
      <Footer />
    </div>
  );
}
