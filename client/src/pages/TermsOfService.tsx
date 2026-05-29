// SRQ Wash — Terms of Service Page (/terms-of-service)

import { useEffect } from "react";
import { SITE } from "@/lib/siteData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

export default function TermsOfService() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <PageHero
        title="Terms of Service"
        subtitle="Please read these terms carefully before using our services."
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

            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em", fontSize: "1.75rem" }}>1. Services</h2>
            <p>SRQ Wash provides professional pressure washing, soft wash roof cleaning, exterior house washing, driveway cleaning, pool cage cleaning, and paver sealing services to residential and commercial properties in Sarasota and Manatee Counties, Florida. All services are subject to availability and scheduling.</p>

            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em", fontSize: "1.75rem" }}>2. Quotes and Pricing</h2>
            <p>All quotes provided by SRQ Wash are free and non-binding. Final pricing is based on the actual scope of work observed at the property. If additional work is required beyond the original quote, we will notify you before proceeding. Prices are subject to change without notice.</p>

            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em", fontSize: "1.75rem" }}>3. Customer Responsibilities</h2>
            <p>Customers are responsible for: removing fragile items, potted plants, and outdoor furniture from the work area before service; providing access to the property and any required gate codes; ensuring that all windows and doors are closed during service; and disclosing any known issues with the property that may affect our work.</p>

            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em", fontSize: "1.75rem" }}>4. Payment</h2>
            <p>Payment is due upon completion of service unless otherwise agreed in writing. We accept cash, check, and major credit cards. Returned checks are subject to a $35 fee. For commercial accounts, net-30 terms may be available upon approval.</p>

            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em", fontSize: "1.75rem" }}>5. Satisfaction Guarantee</h2>
            <p>We stand behind our work. If you are not satisfied with the results of our service, please contact us within 48 hours of service completion and we will return to address any concerns at no additional charge. This guarantee does not apply to pre-existing damage or conditions beyond the scope of our services.</p>

            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em", fontSize: "1.75rem" }}>6. Limitation of Liability</h2>
            <p>SRQ Wash carries comprehensive general liability insurance. In the event of damage caused by our services, our liability is limited to the cost of the services performed. We are not responsible for pre-existing damage, hidden defects, or conditions that were not disclosed prior to service.</p>

            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em", fontSize: "1.75rem" }}>7. Cancellation Policy</h2>
            <p>We ask for at least 24 hours notice for cancellations or rescheduling. We reserve the right to reschedule services due to weather conditions or equipment issues. We will notify you as soon as possible if rescheduling is necessary.</p>

            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em", fontSize: "1.75rem" }}>8. Contact</h2>
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
