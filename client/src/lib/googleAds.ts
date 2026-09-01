declare global {
  interface Window {
    gtag?: (command: string, eventName: string, parameters?: Record<string, unknown>) => void;
  }
}

export const GOOGLE_ADS_TAG_ID = "AW-10941454860";
export const GOOGLE_ANALYTICS_MEASUREMENT_ID = "G-G4RHGB5FV6";
export const LEAD_FORM_CONVERSION_LABEL = "dJqACPnlgewcEIy0peEo";
export const WEBSITE_CALL_CONVERSION_LABEL = "CqIfCPzlgewcEIy0peEo";

/**
 * Records a Google Ads conversion only after the server confirms that a quote
 * request was accepted. This avoids counting page views, button clicks, and
 * failed form submissions as leads.
 */
export function trackQuoteFormSubmission() {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;

  window.gtag("event", "conversion", {
    send_to: `${GOOGLE_ADS_TAG_ID}/${LEAD_FORM_CONVERSION_LABEL}`,
    value: 1,
    currency: "USD",
  });
}
