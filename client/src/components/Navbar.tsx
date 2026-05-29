// SRQ Wash Navbar
// Design: Florida Power — sticky, transparent-to-slate transition on scroll
// Mobile: hamburger menu with full-screen overlay

import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { SITE, SERVICES } from "@/lib/siteData";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "#",
    children: SERVICES.map((s) => ({ label: s.shortTitle, href: s.slug })),
  },
  { label: "Service Areas", href: "/service-areas" },
  { label: "Reviews", href: "/reviews-page" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact", href: "/contact-us" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [location]);

  const isActive = (href: string) => {
    if (href === "/") return location === "/";
    return location.startsWith(href);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || mobileOpen
            ? "bg-[#111827] shadow-lg shadow-black/30"
            : "bg-gradient-to-b from-black/60 to-transparent"
        }`}
      >
        <div className="container">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center flex-shrink-0">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028316757/S8hJyhgpkGHR2RfqK8Ywnb/srqwash-logo-mDqoa6B8FmRjZTuyKBeBmy.webp"
                alt="SRQ Wash Pressure Washing"
                className="h-12 lg:h-14 w-auto object-contain"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.label} className="relative group">
                    <button
                      className={`flex items-center gap-1 px-3 py-2 text-sm font-semibold rounded transition-colors ${
                        isActive("/roof-cleaning") ||
                        isActive("/house-washing") ||
                        isActive("/driveway-cleaning") ||
                        isActive("/pool-cage-cleaning") ||
                        isActive("/paver-sealing")
                          ? "text-[#0EA5E9]"
                          : "text-white hover:text-[#0EA5E9]"
                      }`}
                      style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                    >
                      {link.label}
                      <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
                    </button>
                    <div className="absolute top-full left-0 mt-1 w-52 bg-[#111827] border border-white/10 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors first:rounded-t-lg last:rounded-b-lg"
                          style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3 py-2 text-sm font-semibold rounded transition-colors ${
                      isActive(link.href)
                        ? "text-[#0EA5E9]"
                        : "text-white hover:text-[#0EA5E9]"
                    }`}
                    style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={`tel:${SITE.phoneCall}`}
                className="btn-orange text-sm"
              >
                <Phone size={15} />
                Free Quote
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden text-white p-2 rounded"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-[#111827] border-t border-white/10">
            <div className="container py-4 flex flex-col gap-1">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.label}>
                    <button
                      className="flex items-center justify-between w-full px-3 py-3 text-white font-semibold text-base rounded hover:bg-white/5 transition-colors"
                      style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                      onClick={() => setServicesOpen(!servicesOpen)}
                    >
                      {link.label}
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    {servicesOpen && (
                      <div className="pl-4 flex flex-col gap-1">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-3 py-2.5 text-gray-300 hover:text-white text-sm rounded hover:bg-white/5 transition-colors"
                            style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block px-3 py-3 font-semibold text-base rounded transition-colors ${
                      isActive(link.href)
                        ? "text-[#0EA5E9] bg-white/5"
                        : "text-white hover:bg-white/5"
                    }`}
                    style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                  >
                    {link.label}
                  </Link>
                )
              )}
              <div className="pt-3 border-t border-white/10">
                <a
                  href={`tel:${SITE.phoneCall}`}
                  className="btn-orange w-full justify-center text-base"
                >
                  <Phone size={16} />
                  Call for a Free Quote
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Floating mobile call button */}
      <a
        href={`tel:${SITE.phoneCall}`}
        className="fixed bottom-6 right-6 z-50 lg:hidden flex items-center justify-center w-14 h-14 rounded-full shadow-lg shadow-orange-500/40 transition-transform active:scale-95"
        style={{ backgroundColor: "oklch(0.72 0.19 45)" }}
        aria-label="Call SRQ Wash"
      >
        <Phone size={22} className="text-white" />
      </a>
    </>
  );
}
