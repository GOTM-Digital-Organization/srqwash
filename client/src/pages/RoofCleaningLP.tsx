/**
 * SRQ Wash — Sarasota Roof Cleaning Google Ads Landing Page
 * Slug: /sarasota-roof-cleaning-lp
 * Design: Florida Power — Slate Black + Pressure Blue + Safety Orange
 * Purpose: Maximum conversion for Google Search Ads targeting Sarasota & Lakewood Ranch roof cleaning
 * NO site navigation — single-purpose conversion page
 * All CTAs dial tel:+19412292355
 */

import { useEffect, useState } from "react";
import { Phone, CheckCircle2, Star, Shield, Clock, Award, ChevronDown, MapPin, AlertTriangle } from "lucide-react";

const PHONE = "+19412292355";
const PHONE_DISPLAY = "(941) 229-2355";

const roofPhotos = [
  "/manus-storage/job-roof-cleaning-1_d8225cb6.webp",
  "/manus-storage/job-roof-cleaning-2_60119e61.webp",
  "/manus-storage/job-roof-before-after-1_03c581b1.webp",
  "/manus-storage/job-roof-after-1_924d4337.webp",
];

const reviews = [
  {
    name: "Patricia M.",
    location: "Lakewood Ranch, FL",
    rating: 5,
    text: "My roof was covered in black streaks and algae. SRQ Wash came out and it looks brand new. Tom was professional, on time, and the price was fair. Highly recommend!",
    date: "3 weeks ago",
  },
  {
    name: "Robert K.",
    location: "Sarasota, FL",
    rating: 5,
    text: "I was worried about high pressure damaging my tile roof. Tom explained the soft wash process and it was perfect — no damage, completely clean. Will use again.",
    date: "1 month ago",
  },
  {
    name: "Linda S.",
    location: "Bradenton, FL",
    rating: 5,
    text: "Called on Monday, Tom was here Wednesday. The roof looks incredible and he even cleaned up the driveway where the runoff went. Above and beyond service.",
    date: "2 months ago",
  },
  {
    name: "James T.",
    location: "Venice, FL",
    rating: 5,
    text: "Our HOA was threatening fines over the algae on our roof. SRQ Wash took care of it in one visit. Passed inspection immediately. Worth every penny.",
    date: "2 months ago",
  },
];

const faqs = [
  {
    q: "Is soft washing safe for my tile or shingle roof?",
    a: "Yes — soft washing is actually the manufacturer-recommended method for cleaning tile and shingle roofs. High-pressure washing can crack tiles, strip shingle granules, and void your warranty. Our low-pressure soft wash uses biodegradable solutions to kill algae and mold at the root without any physical damage.",
  },
  {
    q: "How long does a roof cleaning take?",
    a: "Most residential roofs in Sarasota and Lakewood Ranch take 2–4 hours depending on size and the level of organic growth. We handle everything from setup to cleanup — you don't need to be home.",
  },
  {
    q: "How long will the results last?",
    a: "Our soft wash treatment kills algae, mold, and lichen at the cellular level. Results typically last 2–4 years in Florida's climate, significantly longer than pressure washing alone.",
  },
  {
    q: "Do I need to be home during the service?",
    a: "No. As long as we have access to an outdoor water spigot and can reach the roof, you don't need to be present. We'll send before and after photos when the job is complete.",
  },
  {
    q: "Will the cleaning chemicals harm my landscaping?",
    a: "We pre-wet all surrounding plants and landscaping before applying any solutions, and rinse thoroughly after. Our biodegradable cleaning solutions are safe for your lawn, plants, and pets when applied correctly.",
  },
  {
    q: "Do you serve all of Sarasota County?",
    a: "Yes — we serve all of Sarasota, Lakewood Ranch, Bradenton, Venice, and surrounding communities in Sarasota and Manatee Counties.",
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

export default function RoofCleaningLP() {
  // Sticky mobile call bar visibility
  const [showStickyBar, setShowStickyBar] = useState(false);

  useEffect(() => {
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
              src="/manus-storage/srqwash-logo_original.png"
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
              <div className="text-slate-400 text-xs">Licensed & Insured · Sarasota County</div>
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
          backgroundImage: `linear-gradient(to right, rgba(15,23,42,0.92) 0%, rgba(15,23,42,0.75) 50%, rgba(15,23,42,0.4) 100%), url('/manus-storage/truck-trailer-1_6eb38711.webp')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-5xl mx-auto px-4 py-16 w-full">
          <div className="max-w-2xl">
            {/* Trust badges */}
            <div className="flex flex-wrap gap-2 mb-6">
              {["Licensed & Insured", "4.90 ★ Google Rating", "Same-Week Service"].map((badge) => (
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
              style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2.8rem, 7vw, 5rem)", letterSpacing: "0.02em" }}
            >
              SARASOTA &{" "}
              <span className="text-orange-400">LAKEWOOD RANCH</span>
              <br />
              ROOF CLEANING
            </h1>

            <p className="text-slate-200 text-lg mb-8 leading-relaxed max-w-xl">
              Safe soft wash roof cleaning that removes black streaks, algae, and mold — without damaging your tiles or voiding your warranty. Serving Sarasota County since 2019.
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
              <span className="text-white font-semibold">4.90</span>
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
              Those dark streaks on your roof are alive — and they're shortening your roof's lifespan.
            </p>
            <p className="text-amber-800 text-sm mt-0.5">
              Gloeocapsa magma algae eats away at roofing materials. Florida homeowners who wait lose years of roof life. Most HOAs require annual cleaning.
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
            { icon: Award, label: "ARMA Certified", sub: "Soft wash method" },
            { icon: Star, label: "4.90 Stars", sub: "48 Google Reviews" },
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

      {/* ─── PHOTO GALLERY ─── */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-sky-600 font-bold text-sm uppercase tracking-widest mb-2">Real Results</p>
            <h2
              className="text-slate-900"
              style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2rem, 5vw, 3rem)", letterSpacing: "0.02em" }}
            >
              SARASOTA ROOFS WE'VE CLEANED
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {roofPhotos.map((src, i) => (
              <div key={i} className="aspect-square rounded-xl overflow-hidden shadow-md group">
                <img
                  src={src}
                  alt={`Roof cleaning job ${i + 1} in Sarasota FL`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <CallButton size="lg" label="Get Your Free Roof Cleaning Quote" />
          </div>
        </div>
      </section>

      {/* ─── WHY SOFT WASH ─── */}
      <section className="py-14 px-4 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sky-600 font-bold text-sm uppercase tracking-widest mb-2">Why It Matters</p>
              <h2
                className="text-slate-900 mb-6"
                style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", letterSpacing: "0.02em" }}
              >
                WHY SOFT WASH IS THE RIGHT CHOICE FOR YOUR FLORIDA ROOF
              </h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Manufacturer Approved",
                    body: "ARMA (Asphalt Roofing Manufacturers Association) specifically recommends low-pressure soft washing. High-pressure washing voids most tile and shingle warranties.",
                  },
                  {
                    title: "Kills Growth at the Root",
                    body: "Our biodegradable SH-based solution kills algae, mold, and lichen at the cellular level. Results last 2–4 years vs. 6–12 months from pressure washing.",
                  },
                  {
                    title: "No Tile Cracking Risk",
                    body: "Florida tile roofs are brittle. Walking on them incorrectly or using high pressure causes micro-fractures that lead to leaks. Our soft wash requires minimal foot traffic.",
                  },
                  {
                    title: "HOA & Insurance Compliant",
                    body: "Many Sarasota and Lakewood Ranch HOAs require annual roof cleaning. Some insurance companies now require clean roofs for renewal. We document everything.",
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
                src="/manus-storage/job-roof-before-after-1_03c581b1.webp"
                alt="Before and after soft wash roof cleaning Sarasota FL"
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
            SERVING ALL OF SARASOTA & MANATEE COUNTIES
          </h2>
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {[
              "Sarasota", "Lakewood Ranch", "Bradenton", "Venice", "Siesta Key",
              "Palmer Ranch", "Nokomis", "Osprey", "North Port", "Englewood",
              "University Park", "Parrish", "Ellenton", "Palmetto",
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
                    src="/manus-storage/owner-photo_63d586ce.webp"
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
                I'm Tom, owner and sole operator of SRQ Wash. When you call, you get me — not a call center. When we show up, it's me doing the work — not a subcontractor. I've been cleaning roofs and exteriors in Sarasota and Lakewood Ranch since 2019, and I take pride in every single job.
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
              4.90 STARS · 48 GOOGLE REVIEWS
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
      <section id="quote-form" className="py-14 px-4 bg-slate-900">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-sky-400 font-bold text-sm uppercase tracking-widest mb-2">Free Estimate</p>
            <h2
              className="text-white"
              style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2rem, 5vw, 3rem)", letterSpacing: "0.02em" }}
            >
              GET YOUR FREE ROOF CLEANING QUOTE
            </h2>
            <p className="text-slate-400 mt-2">
              Most quotes are provided same-day. No obligation, no pressure.
            </p>
          </div>
          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href = `tel:${PHONE}`;
            }}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-slate-300 text-sm font-semibold mb-1.5">First Name *</label>
                <input
                  type="text"
                  required
                  placeholder="John"
                  className="w-full bg-slate-800 border border-slate-700 text-white placeholder-slate-500 rounded-lg px-4 py-3 focus:outline-none focus:border-sky-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-slate-300 text-sm font-semibold mb-1.5">Last Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Smith"
                  className="w-full bg-slate-800 border border-slate-700 text-white placeholder-slate-500 rounded-lg px-4 py-3 focus:outline-none focus:border-sky-500 transition-colors"
                />
              </div>
            </div>
            <div>
              <label className="block text-slate-300 text-sm font-semibold mb-1.5">Phone Number *</label>
              <input
                type="tel"
                required
                placeholder="(941) 555-0123"
                className="w-full bg-slate-800 border border-slate-700 text-white placeholder-slate-500 rounded-lg px-4 py-3 focus:outline-none focus:border-sky-500 transition-colors"
              />
            </div>
            <div>
              <label className="block text-slate-300 text-sm font-semibold mb-1.5">Property Address *</label>
              <input
                type="text"
                required
                placeholder="123 Main St, Sarasota, FL"
                className="w-full bg-slate-800 border border-slate-700 text-white placeholder-slate-500 rounded-lg px-4 py-3 focus:outline-none focus:border-sky-500 transition-colors"
              />
            </div>
            <div>
              <label className="block text-slate-300 text-sm font-semibold mb-1.5">Roof Type</label>
              <select className="w-full bg-slate-800 border border-slate-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-sky-500 transition-colors">
                <option value="">Select roof type</option>
                <option value="tile">Tile (Barrel / Flat)</option>
                <option value="shingle">Asphalt Shingle</option>
                <option value="metal">Metal</option>
                <option value="flat">Flat / TPO</option>
                <option value="other">Other / Not Sure</option>
              </select>
            </div>
            <div>
              <label className="block text-slate-300 text-sm font-semibold mb-1.5">Message (Optional)</label>
              <textarea
                rows={3}
                placeholder="Describe the issue — black streaks, green algae, HOA notice, etc."
                className="w-full bg-slate-800 border border-slate-700 text-white placeholder-slate-500 rounded-lg px-4 py-3 focus:outline-none focus:border-sky-500 transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 active:scale-[0.99] text-white font-bold py-4 rounded-lg text-xl transition-all duration-150 shadow-lg shadow-orange-500/30"
              style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}
            >
              SEND MY FREE QUOTE REQUEST
            </button>
            <p className="text-center text-slate-500 text-xs">
              Or call us directly:{" "}
              <a href={`tel:${PHONE}`} className="text-sky-400 font-semibold hover:text-sky-300">
                {PHONE_DISPLAY}
              </a>
            </p>
          </form>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-sky-600 font-bold text-sm uppercase tracking-widest mb-2">Common Questions</p>
            <h2
              className="text-slate-900"
              style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2rem, 5vw, 3rem)", letterSpacing: "0.02em" }}
            >
              ROOF CLEANING FAQ
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
          backgroundImage: `linear-gradient(to bottom, rgba(15,23,42,0.88), rgba(15,23,42,0.88)), url('/manus-storage/job-roof-cleaning-2_60119e61.webp')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-2xl mx-auto">
          <h2
            className="text-white mb-4"
            style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2.2rem, 6vw, 3.5rem)", letterSpacing: "0.02em" }}
          >
            READY FOR A CLEAN ROOF?
          </h2>
          <p className="text-slate-300 text-lg mb-8">
            Call Tom today for a free, no-obligation quote. Same-week service available throughout Sarasota and Lakewood Ranch.
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
