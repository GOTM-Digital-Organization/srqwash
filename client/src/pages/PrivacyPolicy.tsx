// SRQ Wash — Privacy Policy Page (/privacy-policy)

import { useEffect } from "react";
import { SITE } from "@/lib/siteData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <PageHero
        title="Privacy Policy"
        subtitle="How SRQ Wash collects, uses, and protects your personal information."
        breadcrumb="Legal"
        showCTA={false}
      />
      <section className="py-20 bg-white">
        <div className="container max-w-4xl">
          <div
            className="prose prose-gray max-w-none"
            style={{ fontFamily: "'Nunito Sans', sans-serif" }}
          >
            <p className="text-gray-500 text-sm mb-8">Last updated: January 1, 2025</p>

            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em", fontSize: "1.75rem" }}>1. Information We Collect</h2>
            <p>When you contact SRQ Wash through our website, phone, or email, we may collect the following information: your name, email address, phone number, property address, and details about the services you are requesting. We collect this information solely to provide you with a quote and to fulfill your service requests.</p>

            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em", fontSize: "1.75rem" }}>2. How We Use Your Information</h2>
            <p>We use the information you provide to: respond to your quote requests and inquiries; schedule and perform services at your property; send you service reminders and follow-up communications; and improve our services based on customer feedback. We do not sell, rent, or share your personal information with third parties for marketing purposes.</p>

            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em", fontSize: "1.75rem" }}>3. Information Security</h2>
            <p>We take reasonable measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.</p>

            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em", fontSize: "1.75rem" }}>4. Cookies and Analytics</h2>
            <p>Our website may use cookies and analytics tools to understand how visitors use our site. This information is used in aggregate form and does not identify individual users. You can disable cookies in your browser settings, though this may affect your experience on our site.</p>

            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em", fontSize: "1.75rem" }}>5. Third-Party Links</h2>
            <p>Our website may contain links to third-party websites, including our partner site TomThePoolGuy.com. We are not responsible for the privacy practices of these sites and encourage you to review their privacy policies.</p>

            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em", fontSize: "1.75rem" }}>6. Your Rights</h2>
            <p>You have the right to request access to, correction of, or deletion of your personal information that we hold. To exercise these rights, please contact us at {SITE.email}.</p>

            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em", fontSize: "1.75rem" }}>7. Contact Us</h2>
            <p>If you have questions about this Privacy Policy, please contact us at:</p>
            <p>
              SRQ Wash<br />
              {SITE.address}<br />
              Email: {SITE.email}
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
