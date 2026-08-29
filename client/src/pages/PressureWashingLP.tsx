/**
 * SRQ Wash — Multi-Service Google Ads Landing Page
 * Slug: /lakewood-ranch-pressure-washing-lp
 * Design: Florida Power — Slate Black + Pressure Blue + Safety Orange
 * Purpose: Maximum conversion for Google Search Ads targeting
 *          Lakewood Ranch, Bradenton & Sarasota across all services:
 *          soft wash roof cleaning, house washing, pool cage/lanai/pool deck
 *          cleaning, and driveway & concrete cleaning.
 * NO site navigation — single-purpose conversion page
 * All CTAs dial tel:+19412292355
 */

import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { Phone, CheckCircle2, Star, Shield, Clock, Award, ChevronDown, MapPin, AlertTriangle, Sparkles, Home as HomeIcon, Waves, Car } from "lucide-react";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";

const PHONE = "+19412292355";
const PHONE_DISPLAY = "(941) 229-2355";

const services = [
  {
    icon: Sparkles,
    title: "Soft Wash Roof Cleaning",
    image: "/images/job-roof-before-after-1.webp",
    alt: "Before and after soft wash roof cleaning in Lakewood Ranch FL",
    description:
      "Eliminate black streaks, algae, and mold with the manufacturer-approved soft wash method — safe for tile, shingle, and metal roofs. Results last 2–4 years and never void your warranty.",
    points: ["ARMA-approved soft wash", "Kills algae at the root", "Warranty-safe process"],
  },
  {
    icon: HomeIcon,
    title: "Exterior House Washing",
    image: "/images/house-washing.webp",
    alt: "Professional exterior house washing in Sarasota FL",
    description:
      "A tailored soft wash for stucco, siding, brick, and trim that removes mold, mildew, and environmental staining — restoring your home's curb appeal and keeping you HOA compliant.",
    points: ["Safe for all surfaces", "Eco-friendly solutions", "HOA compliance ready"],
  },
  {
    icon: Waves,
    title: "Pool Cage, Lanai & Pool Deck Cleaning",
    image: "/images/pool-cage-cleaning.webp",
    alt: "Pool cage and lanai cleaning in Bradenton FL",
    description:
      "We safely clean screen enclosures, aluminum frames, and pool decks — removing algae, mold, and oxidation while restoring slip resistance so your pool area is safe and sparkling.",
    points: ["Screen-safe cleaning", "Removes slippery algae", "Frames restored to like-new"],
  },
  {
    icon: Car,
    title: "Driveway & Concrete Cleaning",
    image: "/images/driveway-cleaning.webp",
    alt: "Driveway and concrete cleaning in Lakewood Ranch FL",
    description:
      "Professional-grade surface cleaners remove oil stains, tire marks, rust, and organic growth with even, streak-free results — the first thing visitors notice, transformed.",
    points: ["Streak-free surface cleaning", "Oil & rust pre-treatment", "Optional sealing available"],
  },
];

const galleryPhotos = [
  { src: "/images/job-roof-cleaning-1.webp", alt: "Soft wash roof cleaning job in Sarasota FL" },
  { src: "/images/house-washing.webp", alt: "House washing job in Lakewood Ranch FL" },
  { src: "/images/pool-cage-cleaning.webp", alt: "Pool cage cleaning job in Bradenton FL" },
  { src: "/images/driveway-cleaning.webp", alt: "Driveway cleaning job in Sarasota FL" },
];

const reviews = [
  {
    name: "Jennifer M.",
    location: "Lakewood Ranch, FL",
    rating: 5,
    text: "SRQ Wash did an incredible job on our roof and driveway. The crew was professional, on time, and the results were amazing. Our home looks brand new. Highly recommend!",
    date: "2 months ago",
  },
  {
    name: "Robert T.",
    location: "Sarasota, FL",
    rating: 5,
    text: "I've tried other pressure washing companies before but SRQ Wash is on another level. They took the time to explain what they were doing and why. The house looks fantastic.",
    date: "1 month ago",
  },
  {
    name: "Sarah K.",
    location: "Lakewood Ranch, FL",
    rating: 5,
    text: "Our pool cage was covered in green algae and the screens were almost opaque. After SRQ Wash came through, it looks like a brand new enclosure. Worth every penny.",
    date: "3 weeks ago",
  },
  {
    name: "Linda H.",
    location: "Bradenton, FL",
    rating: 5,
    text: "Called on a Tuesday, they were here by Thursday. Fast, efficient, and professional. The driveway went from embarrassingly dirty to spotless. Will definitely use again.",
    date: "1 month ago",
  },
];

const faqs = [
  {
    q: "What is soft washing, and is it safe for my home?",
    a: "Soft washing uses low pressure combined with biodegradable cleaning solutions to kill algae, mold, and mildew at the root. It's the manufacturer-recommended method for roofs, stucco, and painted surfaces — no risk of cracked tiles, stripped paint, or voided warranties that comes with high-pressure washing.",
  },
  {
    q: "Can you clean my pool cage screens without damaging them?",
    a: "Yes. We use the right pressure and chemistry specifically for screen enclosures — strong enough to remove algae, mold, and oxidation from screens and aluminum frames, but gentle enough to never tear or stretch the screen material.",
  },
  {
    q: "How much does it cost?",
    a: "Every property is different, so we provide free, no-obligation quotes — usually the same day you ask. Most homeowners in Lakewood Ranch, Bradenton, and Sarasota are surprised how affordable professional cleaning is, especially bundled across multiple services.",
  },
  {
    q: "How long does a typical job take?",
    a: "Most single services take 2–4 hours. A full exterior package (roof, house, driveway, pool cage) is typically completed in one day. You don't need to be home — we just need access to an outdoor water spigot.",
  },
  {
    q: "Will the cleaning solutions harm my plants or pets?",
    a: "No. We pre-wet all surrounding landscaping before applying any solutions and rinse thoroughly afterward. Our biodegradable products are safe for your lawn, plants, pets, and family when applied by our trained team.",
  },
  {
    q: "Do you serve my neighborhood?",
    a: "We serve all of Lakewood Ranch, Bradenton, and Sarasota — including Waterside, The Isles, Lorraine Lakes, Palmer Ranch, Siesta Key, West Bradenton, Parrish, and every community in between. Same-week appointments are usually available.",
  },
];

function StarRating({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
      ))}
    </div>
  );
}

function CallButton({ size = "lg", label = "Call for a Free Quote" }: { size?: "sm" | "lg"; label?: string }) {
  return (
    <a
      href={`tel:${PHONE}`}
      className={`inline-flex items-center justify-center gap-2 font-bold rounded-lg bg-orange-500 hover:bg-orange-600 active:scale-95 text-white transition-all duration-150 shadow-lg shadow-orange-500/30 ${
        size === "lg"
          ? "px-8 py-4 text-xl"
          : "px-5 py-3 text-base"
      }`}
      style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}
    >
      <Phone className={size === "lg" ? "w-6 h-6" : "w-5 h-5"} />
      {label}
    </a>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-slate-200 rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-slate-50 transition-colors"
      >
        <span className="font-semibold text-slate-800 pr-4">{q}</span>
        <ChevronDown
          className={`w-5 h-5 text-slate-500 flex-shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="px-5 pb-5 bg-white text-slate-600 leading-relaxed border-t border-slate-100">
          <p className="pt-4">{a}</p>
        </div>
      )}
    </div>
  );
}

function QuoteForm({ phone, phoneDisplay }: { phone: string; phoneDisplay: string }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [, navigate] = useLocation();

  const submitContact = trpc.contact.submit.useMutation({
    onSuccess: () => navigate("/thank-you"),
    onError: () => toast.error("Failed to send. Please call us directly."),
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitContact.mutate({
      name: `${formData.firstName} ${formData.lastName}`.trim(),
      email: formData.email || "",
      phone: formData.phone,
      address: formData.address,
      service: formData.service || "General Exterior Cleaning (Multi-Service LP)",
      message: formData.message,
    });
  };

  return (
    <section id="quote-form" className="py-14 px-4 bg-slate-900">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-sky-400 font-bold text-sm uppercase tracking-widest mb-2">Free Estimate</p>
          <h2
            className="text-white"
            style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2rem, 5vw, 3rem)", letterSpacing: "0.02em" }}
          >
            GET YOUR FREE QUOTE TODAY
          </h2>
          <p className="text-slate-400 mt-2">
            Most quotes are provided same-day. No obligation, no pressure.
          </p>
        </div>

        {submitted ? (
          <div className="bg-green-900/40 border border-green-500/30 rounded-xl p-8 text-center">
            <CheckCircle2 className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <h3 className="text-white text-2xl font-bold mb-2" style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}>
              REQUEST RECEIVED!
            </h3>
            <p className="text-slate-300">
              Thanks! We'll review your request and get back to you shortly. For faster service, call us directly.
            </p>
            <a
              href={`tel:${phone}`}
              className="inline-flex items-center gap-2 mt-6 bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-lg transition-colors"
              style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}
            >
              <Phone className="w-5 h-5" />
              CALL NOW FOR FASTER SERVICE
            </a>
          </div>
        ) : (
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-slate-300 text-sm font-semibold mb-1.5">First Name *</label>
                <input
                  type="text"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="John"
                  className="w-full bg-slate-800 border border-slate-700 text-white placeholder-slate-500 rounded-lg px-4 py-3 focus:outline-none focus:border-sky-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-slate-300 text-sm font-semibold mb-1.5">Last Name *</label>
                <input
                  type="text"
                  name="lastName"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Smith"
                  className="w-full bg-slate-800 border border-slate-700 text-white placeholder-slate-500 rounded-lg px-4 py-3 focus:outline-none focus:border-sky-500 transition-colors"
                />
              </div>
            </div>
            <div>
              <label className="block text-slate-300 text-sm font-semibold mb-1.5">Email Address (Optional)</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full bg-slate-800 border border-slate-700 text-white placeholder-slate-500 rounded-lg px-4 py-3 focus:outline-none focus:border-sky-500 transition-colors"
              />
            </div>
            <div>
              <label className="block text-slate-300 text-sm font-semibold mb-1.5">Phone Number *</label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="(941) 555-0123"
                className="w-full bg-slate-800 border border-slate-700 text-white placeholder-slate-500 rounded-lg px-4 py-3 focus:outline-none focus:border-sky-500 transition-colors"
              />
            </div>
            <div>
              <label className="block text-slate-300 text-sm font-semibold mb-1.5">Property Address *</label>
              <input
                type="text"
                name="address"
                required
                value={formData.address}
                onChange={handleChange}
                placeholder="123 Main St, Lakewood Ranch, FL"
                className="w-full bg-slate-800 border border-slate-700 text-white placeholder-slate-500 rounded-lg px-4 py-3 focus:outline-none focus:border-sky-500 transition-colors"
              />
            </div>
            <div>
              <label className="block text-slate-300 text-sm font-semibold mb-1.5">What Do You Need Cleaned?</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full bg-slate-800 border border-slate-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-sky-500 transition-colors"
              >
                <option value="">Select a service</option>
                <option value="Soft Wash Roof Cleaning">Soft Wash Roof Cleaning</option>
                <option value="Exterior House Washing">Exterior House Washing</option>
                <option value="Pool Cage / Lanai / Pool Deck Cleaning">Pool Cage / Lanai / Pool Deck Cleaning</option>
                <option value="Driveway & Concrete Cleaning">Driveway & Concrete Cleaning</option>
                <option value="Paver Sealing">Paver Sealing</option>
                <option value="Multiple Services / Full Exterior Package">Multiple Services / Full Exterior Package</option>
                <option value="Other / Not Sure">Other / Not Sure</option>
              </select>
            </div>
            <div>
              <label className="block text-slate-300 text-sm font-semibold mb-1.5">Message (Optional)</label>
              <textarea
                name="message"
                rows={3}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your property — black streaks on the roof, green pool cage, dirty driveway, HOA notice, etc."
                className="w-full bg-slate-800 border border-slate-700 text-white placeholder-slate-500 rounded-lg px-4 py-3 focus:outline-none focus:border-sky-500 transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={submitContact.isPending}
              className="w-full bg-orange-500 hover:bg-orange-600 active:scale-[0.99] text-white font-bold py-4 rounded-lg text-xl transition-all duration-150 shadow-lg shadow-orange-500/30 disabled:opacity-70"
              style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}
            >
              {submitContact.isPending ? "SENDING..." : "SEND MY FREE QUOTE REQUEST"}
            </button>
            <p className="text-center text-slate-500 text-xs">
              Or call us directly:{" "}
              <a href={`tel:${phone}`} className="text-sky-400 font-semibold hover:text-sky-300">
                {phoneDisplay}
              </a>
            </p>
          </form>
        )}
      </div>
    </section>
  );
}

export default function PressureWashingLP() {
  // Sticky mobile call bar visibility
  const [showStickyBar, setShowStickyBar] = useState(false);

  useEffect(() => {
    document.title = "Pressure Washing Lakewood Ranch, Bradenton & Sarasota | SRQ Wash";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Top-rated pressure washing & soft washing in Lakewood Ranch, Bradenton & Sarasota FL. Roof cleaning, house washing, pool cage & driveway cleaning. 5.0 stars. Free quotes: (941) 229-2355."
      );
    }
    const handleScroll = () => setShowStickyBar(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>

      {/* ─── STICKY MOBILE CALL BAR ─── */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-50 md:hidden transition-transform duration-300 ${
          showStickyBar ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <a
          href={`tel:${PHONE}`}
          className="flex items-center justify-center gap-3 bg-orange-500 text-white py-4 font-bold text-lg shadow-2xl"
          style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}
        >
          <Phone className="w-5 h-5" />
          TAP TO CALL — FREE QUOTE
        </a>
      </div>

      {/* ─── MINIMAL HEADER ─── */}
      <header className="bg-slate-900 py-3 px-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/images/srqwash-logo.webp"
              alt="SRQ Wash"
              className="h-10 w-auto brightness-0 invert"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
            <div className="hidden sm:block">
              <div className="text-white font-bold text-sm" style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.08em" }}>
                SRQ WASH
              </div>
              <div className="text-slate-400 text-xs">Licensed & Insured · Lakewood Ranch, FL</div>
            </div>
          </div>
          <a
            href={`tel:${PHONE}`}
            className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-bold text-sm transition-colors"
            style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}
          >
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">CALL NOW — FREE QUOTE</span>
            <span className="sm:hidden">CALL NOW</span>
          </a>
        </div>
      </header>

      {/* ─── HERO SECTION ─── */}
      <section
        className="relative min-h-[85vh] flex items-center"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(15,23,42,0.88) 0%, rgba(15,23,42,0.65) 50%, rgba(15,23,42,0.35) 100%), url('/images/hero-roof-cleaning.webp')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-5xl mx-auto px-4 py-16 w-full">
          <div className="max-w-2xl">
            {/* Trust badges */}
            <div className="flex flex-wrap gap-2 mb-6">
              {["Licensed & Insured", "5.0 ★ Google Rating", "Same-Week Service"].map((badge) => (
                <span
                  key={badge}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full"
                >
                  {badge}
                </span>
              ))}
            </div>

            {/* Headline */}
            <h1
              className="text-white leading-none mb-4"
              style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2.6rem, 7vw, 4.6rem)", letterSpacing: "0.02em" }}
            >
              LAKEWOOD RANCH, BRADENTON &{" "}
              <span className="text-orange-400">SARASOTA'S</span>
              <br />
              EXTERIOR CLEANING EXPERTS
            </h1>

            <p className="text-slate-200 text-lg mb-8 leading-relaxed max-w-xl">
              Soft wash roof cleaning, house washing, pool cage & lanai cleaning, and driveway restoration — one trusted local company for your entire exterior. Serving Sarasota & Manatee Counties since 2019.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <CallButton size="lg" label="Call for a Free Quote" />
              <a
                href="#quote-form"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-xl font-bold rounded-lg border-2 border-white/40 text-white hover:bg-white/10 transition-all duration-150"
                style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}
              >
                Get a Quote Online
              </a>
            </div>

            {/* Social proof row */}
            <div className="flex items-center gap-3">
              <StarRating count={5} />
              <span className="text-white font-semibold">5.0</span>
              <span className="text-slate-400">·</span>
              <span className="text-slate-300 text-sm">48 Google Reviews</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── URGENCY / PROBLEM AWARENESS BANNER ─── */}
      <section className="bg-amber-50 border-y border-amber-200 py-5 px-4">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <AlertTriangle className="w-8 h-8 text-amber-600 flex-shrink-0" />
          <div>
            <p className="font-bold text-amber-900 text-lg">
              Florida's humidity is eating your home's exterior — and your HOA has noticed.
            </p>
            <p className="text-amber-800 text-sm mt-0.5">
              Algae, mold, and mildew grow year-round in Sarasota & Manatee Counties, damaging roofs, staining stucco, and making pool decks dangerously slippery. Most HOAs require regular cleaning.
            </p>
          </div>
          <a
            href={`tel:${PHONE}`}
            className="flex-shrink-0 bg-amber-600 hover:bg-amber-700 text-white px-5 py-2.5 rounded-lg font-bold text-sm transition-colors whitespace-nowrap"
          >
            Fix It Today
          </a>
        </div>
      </section>

      {/* ─── TRUST BAR ─── */}
      <section className="bg-slate-900 py-8 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Shield, label: "Licensed & Insured", sub: "Fully covered in FL" },
            { icon: Award, label: "Soft Wash Certified", sub: "Manufacturer approved" },
            { icon: Star, label: "5.0 Stars", sub: "48 Google Reviews" },
            { icon: Clock, label: "Same-Week Service", sub: "Mon–Sat 7am–7pm" },
          ].map(({ icon: Icon, label, sub }) => (
            <div key={label} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-sky-500/20 flex items-center justify-center flex-shrink-0">
                <Icon className="w-5 h-5 text-sky-400" />
              </div>
              <div>
                <div className="text-white font-bold text-sm">{label}</div>
                <div className="text-slate-400 text-xs">{sub}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sky-600 font-bold text-sm uppercase tracking-widest mb-2">What We Clean</p>
            <h2
              className="text-slate-900"
              style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2rem, 5vw, 3rem)", letterSpacing: "0.02em" }}
            >
              ONE CALL CLEANS IT ALL
            </h2>
            <p className="text-slate-600 mt-3 max-w-2xl mx-auto">
              Bundle multiple services in a single visit and save. Every job is done by the owner — never subcontracted.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 flex flex-col"
              >
                <div className="aspect-[3/2] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center flex-shrink-0">
                      <service.icon className="w-5 h-5 text-sky-600" />
                    </div>
                    <h3
                      className="text-slate-900 text-xl"
                      style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.03em" }}
                    >
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">{service.description}</p>
                  <ul className="space-y-1.5 mt-auto">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-center gap-2 text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-sky-500 flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <CallButton size="lg" label="Get Your Free Multi-Service Quote" />
          </div>
        </div>
      </section>

      {/* ─── PHOTO GALLERY ─── */}
      <section className="py-14 px-4 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-sky-600 font-bold text-sm uppercase tracking-widest mb-2">Real Results</p>
            <h2
              className="text-slate-900"
              style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2rem, 5vw, 3rem)", letterSpacing: "0.02em" }}
            >
              HOMES WE'VE TRANSFORMED
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {galleryPhotos.map((photo, i) => (
              <div key={i} className="aspect-square rounded-xl overflow-hidden shadow-md group">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY SRQ WASH ─── */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sky-600 font-bold text-sm uppercase tracking-widest mb-2">Why It Matters</p>
              <h2
                className="text-slate-900 mb-6"
                style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", letterSpacing: "0.02em" }}
              >
                THE RIGHT METHOD FOR EVERY SURFACE
              </h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Soft Wash Where It Counts",
                    body: "Roofs, stucco, siding, and screens get our low-pressure soft wash — the manufacturer-approved method that kills growth at the root without cracking tiles, tearing screens, or voiding warranties.",
                  },
                  {
                    title: "Professional Pressure Where It Works",
                    body: "Driveways, walkways, and pool decks get professional-grade surface cleaning with rotating nozzles for even, streak-free results that consumer machines can't match.",
                  },
                  {
                    title: "Results That Last",
                    body: "Our biodegradable treatments kill algae and mold at the cellular level. Roofs stay clean 2–4 years, and surfaces resist regrowth far longer than pressure washing alone.",
                  },
                  {
                    title: "HOA & Insurance Compliant",
                    body: "Many Lakewood Ranch and Sarasota HOAs require regular exterior cleaning, and some insurers require clean roofs for renewal. We document every job with before-and-after photos.",
                  },
                ].map(({ title, body }) => (
                  <div key={title} className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-sky-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-slate-800">{title}</div>
                      <div className="text-slate-600 text-sm mt-0.5">{body}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/images/job-roof-before-after-2.webp"
                alt="Before and after exterior cleaning in Lakewood Ranch FL"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICE AREAS ─── */}
      <section className="py-10 px-4 bg-sky-600">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <MapPin className="w-5 h-5 text-sky-200" />
            <p className="text-sky-100 font-bold text-sm uppercase tracking-widest">Service Areas</p>
          </div>
          <h2
            className="text-white mb-4"
            style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(1.6rem, 4vw, 2.4rem)", letterSpacing: "0.02em" }}
          >
            PROUDLY SERVING LAKEWOOD RANCH, BRADENTON & SARASOTA
          </h2>
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {[
              "Lakewood Ranch", "Bradenton", "Sarasota", "Waterside", "The Isles",
              "Lorraine Lakes", "Palmer Ranch", "Siesta Key", "West Bradenton", "Parrish",
              "University Park", "Venice", "Ellenton", "North Port",
            ].map((area) => (
              <span
                key={area}
                className="bg-white/15 text-white text-sm font-semibold px-3 py-1.5 rounded-full border border-white/20"
              >
                {area}
              </span>
            ))}
          </div>
          <CallButton size="lg" label="Call Now — We Come to You" />
        </div>
      </section>

      {/* ─── OWNER INTRO ─── */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="flex justify-center md:justify-start">
              <div className="relative">
                <div className="w-64 h-64 rounded-2xl overflow-hidden shadow-xl bg-slate-100">
                  <img
                    src="/images/owner-photo.webp"
                    alt="Tom — Owner of SRQ Wash"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="absolute -bottom-3 -right-3 bg-orange-500 text-white px-4 py-2 rounded-xl shadow-lg">
                  <div className="font-bold text-sm" style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}>
                    OWNER & OPERATOR
                  </div>
                  <div className="text-xs text-orange-100">SRQ Wash, Lakewood Ranch</div>
                </div>
              </div>
            </div>
            <div>
              <p className="text-sky-600 font-bold text-sm uppercase tracking-widest mb-2">Owner Operated</p>
              <h2
                className="text-slate-900 mb-4"
                style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", letterSpacing: "0.02em" }}
              >
                YOU TALK TO TOM. TOM DOES THE WORK.
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                I'm Tom, owner and sole operator of SRQ Wash. When you call, you get me — not a call center. When we show up, it's me doing the work — not a subcontractor. I've been cleaning roofs, homes, pool cages, and driveways across Lakewood Ranch, Bradenton, and Sarasota since 2019.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                I use only manufacturer-approved soft wash methods, professional-grade equipment, and biodegradable solutions. Your home is treated with the same care I'd give my own.
              </p>
              <CallButton size="sm" label="Call Tom for a Free Quote" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── REVIEWS ─── */}
      <section className="py-14 px-4 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-sky-600 font-bold text-sm uppercase tracking-widest mb-2">What Customers Say</p>
            <h2
              className="text-slate-900"
              style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2rem, 5vw, 3rem)", letterSpacing: "0.02em" }}
            >
              5.0 STARS · 48 GOOGLE REVIEWS
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {reviews.map((r) => (
              <div key={r.name} className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="font-bold text-slate-800">{r.name}</div>
                    <div className="text-slate-500 text-sm">{r.location}</div>
                  </div>
                  <div className="text-right">
                    <StarRating count={r.rating} />
                    <div className="text-slate-400 text-xs mt-1">{r.date}</div>
                  </div>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">"{r.text}"</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <CallButton size="lg" label="Join Our Happy Customers — Call Now" />
          </div>
        </div>
      </section>

      {/* ─── QUOTE FORM ─── */}
      <QuoteForm phone={PHONE} phoneDisplay={PHONE_DISPLAY} />

      {/* ─── FAQ ─── */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-sky-600 font-bold text-sm uppercase tracking-widest mb-2">Common Questions</p>
            <h2
              className="text-slate-900"
              style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2rem, 5vw, 3rem)", letterSpacing: "0.02em" }}
            >
              EXTERIOR CLEANING FAQ
            </h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section
        className="py-16 px-4 text-center relative"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(15,23,42,0.88), rgba(15,23,42,0.88)), url('/images/pool-cage-cleaning.webp')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-2xl mx-auto">
          <h2
            className="text-white mb-4"
            style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2.2rem, 6vw, 3.5rem)", letterSpacing: "0.02em" }}
          >
            READY FOR A CLEANER HOME?
          </h2>
          <p className="text-slate-300 text-lg mb-8">
            Call Tom today for a free, no-obligation quote. Same-week service available throughout Lakewood Ranch, Bradenton, and Sarasota.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CallButton size="lg" label="Call for a Free Quote" />
          </div>
          <p className="text-slate-400 text-sm mt-6">
            Mon–Sat 7am–7pm · Licensed & Insured · Sarasota & Manatee Counties
          </p>
        </div>
      </section>

      {/* ─── MINIMAL FOOTER ─── */}
      <footer className="bg-slate-950 py-6 px-4 text-center">
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} SRQ Wash · 9040 Town Center Pkwy #102, Lakewood Ranch FL 34202 ·{" "}
          <a href={`tel:${PHONE}`} className="text-sky-400 hover:text-sky-300">
            {PHONE_DISPLAY}
          </a>
        </p>
        <p className="text-slate-600 text-xs mt-1">
          <a href="/privacy-policy" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
          {" · "}
          <a href="/terms-of-service" className="hover:text-slate-400 transition-colors">Terms of Service</a>
        </p>
      </footer>

    </div>
  );
}
