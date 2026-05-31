// SRQ Wash — Contact Us Page (/contact-us)
// Design: Florida Power — Slate Black + Pressure Blue + Safety Orange

import { useState, useEffect } from "react";
import { Phone, Mail, MapPin, Clock, CheckCircle, Send } from "lucide-react";
import { SITE } from "@/lib/siteData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    address: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const submitContact = trpc.contact.submit.useMutation({
    onSuccess: () => {
      setSubmitted(true);
    },
    onError: (err) => {
      toast.error("Failed to send your message. Please call us directly or try again.");
      console.error("Contact form error:", err);
    },
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitContact.mutate(formData);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <PageHero
        title="Contact SRQ Wash"
        subtitle="Request a free, no-obligation quote for pressure washing services in Lakewood Ranch, Sarasota, Venice, or Bradenton."
        breadcrumb="Contact"
        showCTA={false}
      />

      {/* ── CONTACT CONTENT ── */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact form */}
            <div className="lg:col-span-2">
              <p className="section-label mb-4">Get in Touch</p>
              <h2
                className="text-4xl lg:text-5xl text-[#111827] mb-6 leading-none"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                Request a Free Quote
              </h2>
              <p
                className="text-gray-600 mb-8"
                style={{ fontFamily: "'Nunito Sans', sans-serif" }}
              >
                Fill out the form below and we'll get back to you within a few hours. We typically respond the same day and can often schedule service the same week.
              </p>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                  <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
                  <h3
                    className="text-3xl text-[#111827] mb-3"
                    style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}
                  >
                    Message Received!
                  </h3>
                  <p
                    className="text-gray-600"
                    style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                  >
                    Thank you for contacting SRQ Wash. We'll review your request and get back to you within a few hours. For immediate assistance, call us directly.
                  </p>
                  <a
                    href={`tel:${SITE.phoneCall}`}
                    className="btn-orange mt-6 mx-auto"
                  >
                    <Phone size={16} />
                    Call Now for Faster Service
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        className="block text-sm font-semibold text-gray-700 mb-1.5"
                        style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Smith"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#0EA5E9] focus:ring-2 focus:ring-[#0EA5E9]/20 outline-none transition-colors text-gray-800"
                        style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                      />
                    </div>
                    <div>
                      <label
                        className="block text-sm font-semibold text-gray-700 mb-1.5"
                        style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                      >
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(941) 555-0123"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#0EA5E9] focus:ring-2 focus:ring-[#0EA5E9]/20 outline-none transition-colors text-gray-800"
                        style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      className="block text-sm font-semibold text-gray-700 mb-1.5"
                      style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#0EA5E9] focus:ring-2 focus:ring-[#0EA5E9]/20 outline-none transition-colors text-gray-800"
                      style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                    />
                  </div>

                  <div>
                    <label
                      className="block text-sm font-semibold text-gray-700 mb-1.5"
                      style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                    >
                      Property Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="123 Main St, Lakewood Ranch, FL 34202"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#0EA5E9] focus:ring-2 focus:ring-[#0EA5E9]/20 outline-none transition-colors text-gray-800"
                      style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                    />
                  </div>

                  <div>
                    <label
                      className="block text-sm font-semibold text-gray-700 mb-1.5"
                      style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                    >
                      Service Needed
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#0EA5E9] focus:ring-2 focus:ring-[#0EA5E9]/20 outline-none transition-colors text-gray-800 bg-white"
                      style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                    >
                      <option value="">Select a service...</option>
                      <option value="roof-cleaning">Roof Cleaning</option>
                      <option value="house-washing">Exterior House Washing</option>
                      <option value="driveway-cleaning">Driveway & Concrete Cleaning</option>
                      <option value="pool-cage-cleaning">Pool Cage & Lanai Cleaning</option>
                      <option value="paver-sealing">Paver Sealing</option>
                      <option value="multiple">Multiple Services / Full Property</option>
                      <option value="commercial">Commercial Property</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      className="block text-sm font-semibold text-gray-700 mb-1.5"
                      style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                    >
                      Additional Details
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Tell us more about your property and what you need cleaned..."
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#0EA5E9] focus:ring-2 focus:ring-[#0EA5E9]/20 outline-none transition-colors text-gray-800 resize-none"
                      style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitContact.isPending}
                    className="btn-orange w-full justify-center text-lg py-4 disabled:opacity-70"
                  >
                    {submitContact.isPending ? (
                      <>Sending...</>
                    ) : (
                      <>
                        <Send size={18} />
                        Request My Free Quote
                      </>
                    )}
                  </button>

                  <p
                    className="text-xs text-gray-500 text-center"
                    style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                  >
                    By submitting this form, you agree to be contacted by SRQ Wash regarding your quote request. We never share your information with third parties.
                  </p>
                </form>
              )}
            </div>

            {/* Sidebar contact info */}
            <div>
              {/* Call card */}
              <div className="bg-[#111827] rounded-xl p-6 mb-6">
                <h3
                  className="text-2xl text-white mb-2"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}
                >
                  Prefer to Call?
                </h3>
                <p
                  className="text-gray-400 text-sm mb-5"
                  style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                >
                  Call us for the fastest response. We answer calls Mon–Sat 7am–7pm.
                </p>
                <a
                  href={`tel:${SITE.phoneCall}`}
                  className="btn-orange w-full justify-center"
                >
                  <Phone size={16} />
                  Call for a Free Quote
                </a>
              </div>

              {/* Contact details */}
              <div className="bg-[#F1F5F9] rounded-xl p-6 mb-6">
                <h3
                  className="text-xl text-[#111827] mb-4"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}
                >
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin size={16} className="text-[#0EA5E9] mt-0.5 flex-shrink-0" />
                    <div>
                      <div
                        className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-0.5"
                        style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                      >
                        Address
                      </div>
                      <div
                        className="text-sm text-gray-700"
                        style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                      >
                        {SITE.address}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone size={16} className="text-[#0EA5E9] mt-0.5 flex-shrink-0" />
                    <div>
                      <div
                        className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-0.5"
                        style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                      >
                        Phone
                      </div>
                      <a
                        href={`tel:${SITE.phoneCall}`}
                        className="text-sm text-gray-700 hover:text-[#0EA5E9] transition-colors"
                        style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                      >
                        {SITE.phoneDisplay}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail size={16} className="text-[#0EA5E9] mt-0.5 flex-shrink-0" />
                    <div>
                      <div
                        className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-0.5"
                        style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                      >
                        Email
                      </div>
                      <a
                        href={`mailto:${SITE.email}`}
                        className="text-sm text-gray-700 hover:text-[#0EA5E9] transition-colors"
                        style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                      >
                        {SITE.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock size={16} className="text-[#0EA5E9] mt-0.5 flex-shrink-0" />
                    <div>
                      <div
                        className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-0.5"
                        style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                      >
                        Hours
                      </div>
                      <div
                        className="text-sm text-gray-700"
                        style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                      >
                        Mon – Sat: 7am – 7pm
                        <br />
                        Sunday: Closed
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* What to expect */}
              <div className="border border-gray-200 rounded-xl p-5">
                <h3
                  className="text-xl text-[#111827] mb-4"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}
                >
                  What to Expect
                </h3>
                <div className="space-y-3">
                  {[
                    { step: "1", text: "Submit your quote request" },
                    { step: "2", text: "We respond within a few hours" },
                    { step: "3", text: "Schedule your service" },
                    { step: "4", text: "Enjoy a cleaner property" },
                  ].map(({ step, text }) => (
                    <div key={step} className="flex items-center gap-3">
                      <div
                        className="w-7 h-7 rounded-full bg-[#0EA5E9] text-white text-xs font-bold flex items-center justify-center flex-shrink-0"
                        style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                      >
                        {step}
                      </div>
                      <span
                        className="text-sm text-gray-700"
                        style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                      >
                        {text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
