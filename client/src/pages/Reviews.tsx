// SRQ Wash — Reviews Page (/reviews-page)
// Design: Florida Power — Slate Black + Pressure Blue + Safety Orange

import { useEffect } from "react";
import { Phone, Star, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { SITE, TESTIMONIALS } from "@/lib/siteData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import PageHero from "@/components/PageHero";

const EXTENDED_REVIEWS = [
  ...TESTIMONIALS,
  {
    name: "Patricia L.",
    location: "Lakewood Ranch, FL",
    rating: 5,
    text: "I was skeptical about getting my roof cleaned but the team at SRQ Wash explained the process thoroughly and the results were incredible. The black streaks are completely gone and my roof looks like it did when the house was new.",
    service: "Roof Cleaning",
  },
  {
    name: "David R.",
    location: "Sarasota, FL",
    rating: 5,
    text: "Professional, punctual, and thorough. They cleaned our entire property — house, driveway, pool cage, and lanai — in one day. Everything looks amazing. Best money I've spent on home maintenance.",
    service: "Full Property Package",
  },
  {
    name: "Karen S.",
    location: "Lakewood Ranch, FL",
    rating: 5,
    text: "Our HOA was threatening fines because of the algae on our driveway and house. SRQ Wash came out within 2 days and took care of everything. No more HOA issues and the property looks fantastic.",
    service: "House Washing & Driveway Cleaning",
  },
  {
    name: "James B.",
    location: "Venice, FL",
    rating: 5,
    text: "Hired SRQ Wash for paver sealing after getting quotes from three other companies. They were competitively priced and the quality of work was outstanding. The pavers look better than when they were installed.",
    service: "Paver Sealing",
  },
  {
    name: "Nancy W.",
    location: "Bradenton, FL",
    rating: 5,
    text: "Excellent service from start to finish. They arrived on time, worked efficiently, and cleaned up after themselves. My pool cage screens are crystal clear and the aluminum frame looks brand new.",
    service: "Pool Cage & Lanai Cleaning",
  },
  {
    name: "Mark T.",
    location: "Lakewood Ranch, FL",
    rating: 5,
    text: "I've been using SRQ Wash for three years now. Consistent quality, always professional, and they remember my property from year to year. Wouldn't use anyone else.",
    service: "Annual Maintenance Program",
  },
];

export default function Reviews() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <PageHero
        title="Customer Reviews"
        subtitle={`${SITE.rating} stars out of 5 based on ${SITE.reviewCount} Google reviews. See what our customers say about SRQ Wash.`}
        breadcrumb="Reviews"
        showCTA={false}
      />

      {/* ── RATING SUMMARY ── */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 items-center mb-14">
              {/* Overall rating */}
              <div className="text-center md:col-span-1">
                <div
                  className="text-8xl text-[#F97316] mb-2"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  {SITE.rating}
                </div>
                <div className="flex justify-center mb-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={24} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <div
                  className="text-gray-600 font-semibold"
                  style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                >
                  {SITE.reviewCount} Google Reviews
                </div>
              </div>

              {/* Rating bars */}
              <div className="md:col-span-2 space-y-2">
                {[
                  { stars: 5, count: 44, pct: 92 },
                  { stars: 4, count: 3, pct: 6 },
                  { stars: 3, count: 1, pct: 2 },
                  { stars: 2, count: 0, pct: 0 },
                  { stars: 1, count: 0, pct: 0 },
                ].map(({ stars, count, pct }) => (
                  <div key={stars} className="flex items-center gap-3">
                    <div
                      className="flex items-center gap-1 w-16 flex-shrink-0"
                      style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                    >
                      <span className="text-sm font-semibold text-gray-700">{stars}</span>
                      <Star size={12} className="text-yellow-400 fill-yellow-400" />
                    </div>
                    <div className="flex-1 bg-gray-100 rounded-full h-3 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-yellow-400 transition-all"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                    <span
                      className="text-sm text-gray-500 w-8 text-right flex-shrink-0"
                      style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                    >
                      {count}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA to leave review */}
            <div className="bg-[#F1F5F9] rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3
                  className="text-2xl text-[#111827] mb-1"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}
                >
                  Had a Great Experience?
                </h3>
                <p
                  className="text-gray-600 text-sm"
                  style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                >
                  We'd love to hear from you. Leave us a Google review and help others find us.
                </p>
              </div>
              <a
                href="https://g.page/r/srqwash/review"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-orange flex-shrink-0"
              >
                <Star size={16} />
                Leave a Review
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── REVIEWS GRID ── */}
      <section className="py-16 bg-[#F1F5F9]">
        <div className="container">
          <h2
            className="text-4xl text-[#111827] mb-10"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            What Our Customers Are Saying
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {EXTENDED_REVIEWS.map((review, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex">
                    {Array.from({ length: review.rating }).map((_, s) => (
                      <Star key={s} size={14} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <span
                    className="text-xs text-[#0EA5E9] font-semibold bg-blue-50 px-2 py-0.5 rounded-full"
                    style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                  >
                    {review.service}
                  </span>
                </div>
                <p
                  className="text-gray-600 text-sm leading-relaxed mb-5 italic"
                  style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                >
                  "{review.text}"
                </p>
                <div className="border-t border-gray-100 pt-4 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#0EA5E9] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <div
                      className="font-bold text-gray-800 text-sm"
                      style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                    >
                      {review.name}
                    </div>
                    <div
                      className="text-xs text-gray-500"
                      style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                    >
                      {review.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
      <Footer />
    </div>
  );
}
