// SRQ Wash — FAQs Page (/faqs)
// Design: Florida Power — Slate Black + Pressure Blue + Safety Orange

import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Phone, ChevronDown, ArrowRight } from "lucide-react";
import { SITE, FAQS, SERVICES } from "@/lib/siteData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import PageHero from "@/components/PageHero";

const ADDITIONAL_FAQS = [
  {
    question: "Do you offer commercial pressure washing services?",
    answer:
      "Yes. We provide professional pressure washing services for commercial properties including office buildings, retail centers, restaurants, warehouses, and multi-family properties throughout Sarasota and Manatee Counties. Commercial clients receive the same quality service and attention to detail as our residential customers.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "SRQ Wash serves residential and commercial properties throughout Sarasota and Manatee Counties, including Lakewood Ranch, Sarasota, Venice, Bradenton, and surrounding communities. We also serve all neighborhoods within Lakewood Ranch's master-planned community, including Waterside, Lorraine Lakes, Star Farms, and many others.",
  },
  {
    question: "How do I know if my roof needs cleaning?",
    answer:
      "The most common sign that your roof needs cleaning is the appearance of dark streaks or black staining on the shingles or tiles. These streaks are caused by Gloeocapsa Magma, a type of algae that feeds on the limestone filler in asphalt shingles. You may also notice green moss or lichen growth, especially on north-facing slopes. If you can see discoloration from the ground, it's time for a professional cleaning.",
  },
  {
    question: "Can pressure washing damage my property?",
    answer:
      "When performed by an untrained operator with improper equipment or technique, pressure washing can absolutely cause damage — including cracked tiles, damaged siding, stripped paint, and forced water infiltration. SRQ Wash's trained professionals use the appropriate pressure and technique for each surface type. We use soft washing for delicate surfaces like roofs, siding, and painted surfaces, and reserve high-pressure washing for appropriate hard surfaces like concrete and brick.",
  },
  {
    question: "Do you offer recurring maintenance programs?",
    answer:
      "Yes. Many of our customers choose to schedule regular maintenance cleanings to keep their property looking its best year-round. We offer annual and semi-annual programs for house washing, driveway cleaning, and pool cage cleaning. Regular maintenance customers receive priority scheduling and preferred pricing.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept cash, check, and all major credit cards. Payment is due upon completion of service. For larger commercial projects, we can arrange invoicing with net-30 terms.",
  },
];

const ALL_FAQS = [...FAQS, ...ADDITIONAL_FAQS];

const CATEGORIES = [
  { label: "All Questions", filter: null },
  { label: "Roof Cleaning", filter: "roof" },
  { label: "Pressure Washing", filter: "pressure" },
  { label: "Service & Process", filter: "service" },
];

export default function FAQsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filtered = activeCategory
    ? ALL_FAQS.filter(
        (f) =>
          f.question.toLowerCase().includes(activeCategory) ||
          f.answer.toLowerCase().includes(activeCategory)
      )
    : ALL_FAQS;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <PageHero
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about professional pressure washing, roof cleaning, and exterior cleaning services in Lakewood Ranch and Sarasota."
        breadcrumb="FAQs"
        showCTA={false}
      />

      {/* ── FAQ CONTENT ── */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main FAQ list */}
            <div className="lg:col-span-2">
              <p className="section-label mb-4">Common Questions</p>
              <h2
                className="text-4xl lg:text-5xl text-[#111827] mb-8 leading-none"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                Everything You Need to Know
              </h2>

              {/* Category filters */}
              <div className="flex flex-wrap gap-2 mb-8">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.label}
                    onClick={() => {
                      setActiveCategory(cat.filter);
                      setOpenFaq(null);
                    }}
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                      activeCategory === cat.filter
                        ? "bg-[#0EA5E9] text-white"
                        : "bg-[#F1F5F9] text-gray-700 hover:bg-gray-200"
                    }`}
                    style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              <div className="space-y-3">
                {filtered.map((faq, i) => (
                  <div
                    key={i}
                    className="border border-gray-200 rounded-xl overflow-hidden"
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
                      <div className="px-5 pb-5 border-t border-gray-100">
                        <p
                          className="text-gray-600 text-sm leading-relaxed pt-4"
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

            {/* Sidebar */}
            <div>
              {/* CTA card */}
              <div className="bg-[#111827] rounded-xl p-6 mb-6">
                <h3
                  className="text-2xl text-white mb-2"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}
                >
                  Still Have Questions?
                </h3>
                <p
                  className="text-gray-400 text-sm mb-5"
                  style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                >
                  Our team is happy to answer any questions about our services, pricing, or process.
                </p>
                <a
                  href={`tel:${SITE.phoneCall}`}
                  className="btn-orange w-full justify-center mb-3"
                >
                  <Phone size={16} />
                  Call Us Now
                </a>
                <Link
                  href="/contact-us"
                  className="btn-outline-white w-full justify-center"
                >
                  Send a Message
                  <ArrowRight size={16} />
                </Link>
              </div>

              {/* Services quick links */}
              <div className="bg-[#F1F5F9] rounded-xl p-5">
                <h3
                  className="text-xl text-[#111827] mb-4"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}
                >
                  Our Services
                </h3>
                <div className="space-y-2">
                  {SERVICES.map((s) => (
                    <Link
                      key={s.id}
                      href={s.slug}
                      className="flex items-center gap-2 py-2 text-sm text-gray-700 hover:text-[#0EA5E9] transition-colors font-semibold"
                      style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                    >
                      <ArrowRight size={12} className="text-[#0EA5E9]" />
                      {s.title}
                    </Link>
                  ))}
                </div>
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
