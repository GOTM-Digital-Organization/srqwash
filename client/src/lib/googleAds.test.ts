import { afterEach, describe, expect, it, vi } from "vitest";
import {
  GOOGLE_ADS_TAG_ID,
  LEAD_FORM_CONVERSION_LABEL,
  trackQuoteFormSubmission,
} from "./googleAds";

describe("trackQuoteFormSubmission", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("sends the verified Google Ads lead conversion after a successful quote", () => {
    const gtag = vi.fn();
    vi.stubGlobal("window", { gtag });

    trackQuoteFormSubmission();

    expect(gtag).toHaveBeenCalledWith("event", "conversion", {
      send_to: `${GOOGLE_ADS_TAG_ID}/${LEAD_FORM_CONVERSION_LABEL}`,
      value: 1,
      currency: "USD",
    });
  });

  it("does not throw when the tag has not loaded yet", () => {
    vi.stubGlobal("window", {});

    expect(trackQuoteFormSubmission).not.toThrow();
  });
});
