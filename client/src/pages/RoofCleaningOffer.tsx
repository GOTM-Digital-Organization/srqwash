// SRQ Wash — $100 Soft Wash Roof Cleaning Offer
// Public offer URL: /100-off-soft-wash-roof-cleaning

import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Home,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE } from "@/lib/siteData";
import { trpc } from "@/lib/trpc";
import { trackQuoteFormSubmission } from "@/lib/googleAds";
import { useSeoMeta } from "@/hooks/useSeoMeta";
import { useJsonLd } from "@/hooks/useJsonLd";
import { buildRoofCleaningOfferSchema } from "@/lib/schema";

const OFFER_PATH = "/100-off-soft-wash-roof-cleaning";
const OFFER_NAME = "$100 Off Soft Wash Roof Cleaning";

function OfferForm() {
  const [, navigate] = useLocation();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    message: "",
  });

  const submitContact = trpc.contact.submit.useMutation({
    onSuccess: () => {
      trackQuoteFormSubmission();
      navigate("/thank-you");
    },
    onError: () => toast.error("We couldn't send your request. Please call us for faster service."),
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    submitContact.mutate({
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      address: formData.address,
      service: OFFER_NAME,
      message: `Offer request from ${OFFER_PATH}.${formData.message ? ` ${formData.message}` : ""}`,
    });
  };

  return (
    <section id="claim-offer" className="bg-[#111827] py-16 sm:py-20">
      <div className="container">
        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="lg:pt-4">
            <p className="section-label mb-4 text-[#38BDF8]">Claim Your Offer</p>
            <h2
              className="mb-5 text-5xl leading-none text-white sm:text-6xl"
              style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.02em" }}
            >
              SAVE $100 ON YOUR ROOF CLEANING
            </h2>
            <p className="mb-7 text-lg leading-relaxed text-slate-300">
              Request a free roof-cleaning quote and let us know you want the $100 soft wash offer. We'll confirm your property's service details before scheduling.
            </p>
            <div className="space-y-3 border-t border-white/10 pt-6">
              {[
                "Low-pressure soft wash for tile, shingle, and metal roofs",
                "Algae, mold, and black-streak removal at the source",
                "Licensed, insured, and locally owner-operated",
              ].map((item) => (
                <div key={item} className="flex gap-3 text-sm text-slate-200">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#38BDF8]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-2xl bg-white p-6 shadow-2xl sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                <Sparkles className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-slate-900">Request Your $100 Offer</h3>
                <p className="text-sm text-slate-500">Free estimate. No obligation.</p>
              </div>
            </div>

            <div className="space-y-4">
              <label className="block text-sm font-bold text-slate-700">
                Name *
                <input
                  required
                  type="text"
                  value={formData.name}
                  onChange={(event) => setFormData((current) => ({ ...current, name: event.target.value }))}
                  placeholder="Your name"
                  className="mt-1.5 w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
                />
              </label>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-sm font-bold text-slate-700">
                  Phone *
                  <input
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(event) => setFormData((current) => ({ ...current, phone: event.target.value }))}
                    placeholder="(941) 555-0123"
                    className="mt-1.5 w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
                  />
                </label>
                <label className="block text-sm font-bold text-slate-700">
                  Email <span className="font-normal text-slate-400">(optional)</span>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(event) => setFormData((current) => ({ ...current, email: event.target.value }))}
                    placeholder="you@example.com"
                    className="mt-1.5 w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
                  />
                </label>
              </div>
              <label className="block text-sm font-bold text-slate-700">
                Property Address
                <input
                  type="text"
                  value={formData.address}
                  onChange={(event) => setFormData((current) => ({ ...current, address: event.target.value }))}
                  placeholder="123 Main St, Sarasota, FL"
                  className="mt-1.5 w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
                />
              </label>
              <label className="block text-sm font-bold text-slate-700">
                Anything we should know? <span className="font-normal text-slate-400">(optional)</span>
                <textarea
                  value={formData.message}
                  onChange={(event) => setFormData((current) => ({ ...current, message: event.target.value }))}
                  rows={3}
                  placeholder="Tile roof, HOA notice, preferred timing, etc."
                  className="mt-1.5 w-full resize-none rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
                />
              </label>
              <button
                type="submit"
                disabled={submitContact.isPending}
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#F97316] px-6 py-4 text-lg font-extrabold text-white shadow-lg shadow-orange-500/25 transition hover:bg-orange-600 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {submitContact.isPending ? "SENDING..." : "CLAIM MY $100 OFFER"}
                {!submitContact.isPending && <ArrowRight className="h-5 w-5" />}
              </button>
              <p className="text-center text-xs leading-relaxed text-slate-500">
                One offer per residential property. Cannot be combined with other offers. Mention this offer when booking; service availability and a property estimate apply.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default function RoofCleaningOffer() {
  useSeoMeta(
    "Save $100 on Soft Wash Roof Cleaning | SRQ Wash",
    "Save $100 on professional soft wash roof cleaning in Lakewood Ranch, Sarasota, Bradenton, and Venice. Safe for tile, shingle, and metal roofs. Request a free quote from SRQ Wash."
  );
  useJsonLd(buildRoofCleaningOfferSchema());

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
      <Navbar />

      <main>
        <section className="relative isolate overflow-hidden bg-[#111827] pt-28 sm:pt-32">
          <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_15%_20%,rgba(14,165,233,0.35),transparent_32%),radial-gradient(circle_at_90%_35%,rgba(249,115,22,0.32),transparent_28%)]" />
          <div className="absolute inset-y-0 right-0 -z-10 hidden w-1/2 bg-cover bg-center opacity-45 lg:block" style={{ backgroundImage: "url('/images/job-roof-cleaning-1.webp')" }} />
          <div className="absolute inset-y-0 right-0 -z-10 hidden w-1/2 bg-gradient-to-r from-[#111827] via-[#111827]/65 to-transparent lg:block" />

          <div className="container pb-16 sm:pb-20">
            <div className="max-w-3xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-300/30 bg-orange-400/10 px-4 py-2 text-sm font-extrabold uppercase tracking-[0.14em] text-orange-200">
                <Sparkles className="h-4 w-4" /> Limited-Time Special
              </div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-sky-300">Professional Roof Cleaning</p>
              <h1
                className="text-6xl leading-[0.9] text-white sm:text-7xl lg:text-8xl"
                style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.02em" }}
              >
                SAVE <span className="text-[#F97316]">$100</span>
                <br />
                ON SOFT WASH
                <br />
                ROOF CLEANING
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-200 sm:text-xl">
                Give your roof the safe, low-pressure clean it deserves. SRQ Wash removes algae, mold, and dark streaks without the damage risk of high-pressure washing.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href="#claim-offer" className="btn-orange px-7 py-4 text-lg">
                  Claim Your $100 Offer <ArrowRight size={19} />
                </a>
                <a href={`tel:${SITE.phoneCall}`} className="btn-outline-white px-7 py-4 text-lg">
                  <Phone size={19} /> Call {SITE.phoneDisplay}
                </a>
              </div>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-slate-200">
                <span className="flex items-center gap-2"><ShieldCheck className="h-5 w-5 text-sky-300" /> Licensed & Insured</span>
                <span className="flex items-center gap-2"><Star className="h-5 w-5 fill-amber-400 text-amber-400" /> 5.0 Stars · 48 Reviews</span>
                <span className="flex items-center gap-2"><Clock className="h-5 w-5 text-sky-300" /> Mon–Sat, 7am–7pm</span>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-orange-200 bg-orange-50 py-5">
          <div className="container flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
            <p className="text-lg font-extrabold text-slate-900">
              <span className="text-orange-600">$100 OFF</span> professional soft wash roof cleaning
            </p>
            <a href="#claim-offer" className="inline-flex items-center gap-2 font-bold text-sky-700 underline decoration-2 underline-offset-4 hover:text-sky-900">
              Get your free estimate <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="container grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="relative">
              <img
                src="/images/job-roof-before-after-2.webp"
                alt="Tile roof receiving professional soft wash cleaning in Sarasota"
                className="h-[440px] w-full rounded-2xl object-cover shadow-xl sm:h-[540px]"
              />
              <div className="absolute bottom-5 left-5 rounded-xl bg-white px-5 py-4 shadow-lg">
                <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-sky-600">Safe, Proven Process</p>
                <p className="mt-1 text-xl font-extrabold text-slate-900">Clean roof. Protected investment.</p>
              </div>
            </div>
            <div>
              <p className="section-label mb-4">A Better Way to Clean</p>
              <h2
                className="mb-6 text-5xl leading-none text-[#111827] sm:text-6xl"
                style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.02em" }}
              >
                CLEAN THE ROOF—NOT WITH HIGH PRESSURE
              </h2>
              <p className="mb-7 text-lg leading-relaxed text-slate-600">
                Florida humidity makes black algae and organic growth a recurring problem. Our soft wash approach applies the right treatment at low pressure, so your roof can be cleaned with care instead of blasted with force.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { icon: ShieldCheck, title: "Roof-Safe", detail: "Low-pressure method for tile, shingle, metal, and more." },
                  { icon: Sparkles, title: "Deep Clean", detail: "Targets algae, mold, and mildew at the source." },
                  { icon: Home, title: "Curb Appeal", detail: "Restore a brighter, more cared-for appearance." },
                  { icon: MapPin, title: "Local Service", detail: "Lakewood Ranch, Sarasota, Bradenton, and Venice." },
                ].map(({ icon: Icon, title, detail }) => (
                  <div key={title} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <Icon className="mb-3 h-6 w-6 text-sky-600" />
                    <h3 className="font-extrabold text-slate-900">{title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">{detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-16 sm:py-20">
          <div className="container">
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <p className="section-label mb-4 justify-center">How It Works</p>
              <h2
                className="text-5xl leading-none text-[#111827] sm:text-6xl"
                style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.02em" }}
              >
                THREE EASY STEPS TO SAVE $100
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                ["01", "Request Your Free Quote", "Call us or use the form below and tell us you want the $100 soft wash roof-cleaning offer."],
                ["02", "Get Your Property Estimate", "We'll review your roof, answer questions, and confirm the right cleaning approach for your home."],
                ["03", "Book & Save $100", "Schedule your service and we'll apply the offer to your qualifying roof-cleaning job."],
              ].map(([number, title, detail]) => (
                <div key={number} className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-slate-200">
                  <p className="text-5xl leading-none text-[#F97316]" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>{number}</p>
                  <h3 className="mt-5 text-xl font-extrabold text-slate-900">{title}</h3>
                  <p className="mt-3 leading-relaxed text-slate-600">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <OfferForm />

        <section className="py-16 sm:py-20">
          <div className="container grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="section-label mb-4">Offer Details</p>
              <h2 className="text-4xl text-[#111827] sm:text-5xl" style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.02em" }}>
                SIMPLE, CLEAR SAVINGS
              </h2>
              <ul className="mt-6 space-y-4 text-slate-600">
                {[
                  "$100 off a qualifying residential soft wash roof-cleaning service.",
                  "One offer per residential property; cannot be combined with other offers.",
                  "Mention the offer when requesting your quote or booking your service.",
                  "Final service scope and availability are confirmed during the property estimate.",
                ].map((detail) => (
                  <li key={detail} className="flex gap-3 leading-relaxed"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-sky-600" />{detail}</li>
                ))}
              </ul>
            </div>
            <aside className="rounded-2xl bg-sky-50 p-7 ring-1 ring-sky-100">
              <h2 className="text-3xl text-slate-900" style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.02em" }}>READY TO CLAIM IT?</h2>
              <p className="mt-3 leading-relaxed text-slate-600">Call SRQ Wash for a free, no-obligation quote or send your request online.</p>
              <a href={`tel:${SITE.phoneCall}`} className="btn-orange mt-6 w-full justify-center"><Phone size={18} /> Call {SITE.phoneDisplay}</a>
              <Link href="/roof-cleaning" className="mt-4 inline-flex items-center gap-2 font-bold text-sky-700 hover:text-sky-900">Learn about roof cleaning <ArrowRight className="h-4 w-4" /></Link>
            </aside>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
