// SRQ Wash — 404 Not Found Page

import { Link } from "wouter";
import { Phone, Home, ArrowRight } from "lucide-react";
import { SITE, SERVICES } from "@/lib/siteData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <section className="flex-1 flex items-center justify-center py-20 bg-[#F1F5F9]">
        <div className="container text-center">
          <div
            className="text-[10rem] leading-none text-[#0EA5E9]/20 mb-4"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            404
          </div>
          <h1
            className="text-5xl text-[#111827] mb-4"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            Page Not Found
          </h1>
          <p
            className="text-gray-600 text-lg mb-8 max-w-md mx-auto"
            style={{ fontFamily: "'Nunito Sans', sans-serif" }}
          >
            The page you're looking for doesn't exist. Try one of our popular pages below.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/" className="btn-blue">
              <Home size={16} />
              Go to Homepage
            </Link>
            <a href={`tel:${SITE.phoneCall}`} className="btn-orange">
              <Phone size={16} />
              Call for a Free Quote
            </a>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {SERVICES.map((s) => (
              <Link
                key={s.id}
                href={s.slug}
                className="flex items-center gap-2 p-3 bg-white rounded-lg border border-gray-200 hover:border-[#0EA5E9] transition-colors text-left"
              >
                <ArrowRight size={14} className="text-[#0EA5E9]" />
                <span
                  className="text-sm font-semibold text-gray-700"
                  style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                >
                  {s.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
