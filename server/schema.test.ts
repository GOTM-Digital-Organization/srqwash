// Unit tests for JSON-LD schema builders and sitemap generator
import { describe, it, expect } from "vitest";
import {
  buildLocalBusinessSchema,
  buildServicePageSchema,
  buildServiceAreaSchema,
  buildNeighborhoodSchema,
  buildReviewObjects,
  type TestimonialInput,
} from "../client/src/lib/schema";
import {
  buildSitemapXml,
  STATIC_PAGES,
  SERVICE_SLUGS,
  CITY_AREA_SLUGS,
  NEIGHBORHOOD_SLUGS,
} from "./sitemap";

const SAMPLE_TESTIMONIALS: TestimonialInput[] = [
  {
    name: "Jennifer M.",
    location: "Lakewood Ranch, FL",
    rating: 5,
    text: "SRQ Wash did an incredible job on our roof and driveway.",
    service: "Roof Cleaning & Driveway Cleaning",
  },
  {
    name: "Robert T.",
    location: "Sarasota, FL",
    rating: 5,
    text: "I've tried other pressure washing companies before but SRQ Wash is on another level.",
    service: "Exterior House Washing",
  },
];

// ── buildReviewObjects ────────────────────────────────────────────────────────

describe("buildReviewObjects", () => {
  it("returns an array of Review objects matching the input", () => {
    const reviews = buildReviewObjects(SAMPLE_TESTIMONIALS);
    expect(reviews).toHaveLength(2);
    expect(reviews[0]["@type"]).toBe("Review");
    expect((reviews[0].author as any).name).toBe("Jennifer M.");
    expect((reviews[0].reviewRating as any)["@type"]).toBe("Rating");
    expect((reviews[0].reviewRating as any).ratingValue).toBe("5");
    expect(reviews[0].reviewBody).toContain("incredible job");
  });

  it("includes itemReviewed pointing to the business @id", () => {
    const reviews = buildReviewObjects(SAMPLE_TESTIMONIALS);
    expect((reviews[0].itemReviewed as any)["@id"]).toBe("https://srqwash.com/#business");
  });

  it("returns empty array for empty input", () => {
    expect(buildReviewObjects([])).toEqual([]);
  });
});

// ── buildLocalBusinessSchema ──────────────────────────────────────────────────

describe("buildLocalBusinessSchema", () => {
  it("returns a valid @context and @type", () => {
    const schema = buildLocalBusinessSchema() as any;
    expect(schema["@context"]).toBe("https://schema.org");
    expect(schema["@type"]).toContain("LocalBusiness");
  });

  it("includes the business name", () => {
    const schema = buildLocalBusinessSchema() as any;
    expect(schema.name).toBe("SRQ Wash");
  });

  it("includes aggregateRating with ratingValue 5.0", () => {
    const schema = buildLocalBusinessSchema() as any;
    expect(schema.aggregateRating.ratingValue).toBe("5.0");
    expect(schema.aggregateRating.reviewCount).toBe("48");
  });

  it("includes 6 opening hours entries (Mon–Sat)", () => {
    const schema = buildLocalBusinessSchema() as any;
    expect(schema.openingHoursSpecification).toHaveLength(6);
  });

  it("includes 5 services in the offer catalog", () => {
    const schema = buildLocalBusinessSchema() as any;
    expect(schema.hasOfferCatalog.itemListElement).toHaveLength(5);
  });

  it("includes areaServed with 4 cities", () => {
    const schema = buildLocalBusinessSchema() as any;
    expect(schema.areaServed).toHaveLength(4);
  });

  it("does NOT include review array when no testimonials are passed", () => {
    const schema = buildLocalBusinessSchema() as any;
    expect(schema.review).toBeUndefined();
  });

  it("embeds Review objects when testimonials are provided", () => {
    const schema = buildLocalBusinessSchema(SAMPLE_TESTIMONIALS) as any;
    expect(Array.isArray(schema.review)).toBe(true);
    expect(schema.review).toHaveLength(2);
    expect(schema.review[0]["@type"]).toBe("Review");
  });

  it("includes sameAs social links", () => {
    const schema = buildLocalBusinessSchema() as any;
    expect(schema.sameAs).toContain("https://www.facebook.com/Srqwash");
    expect(schema.sameAs).toContain("https://www.instagram.com/srqwash/");
  });
});

// ── buildServicePageSchema ────────────────────────────────────────────────────

describe("buildServicePageSchema", () => {
  const input = {
    title: "Roof Cleaning",
    description: "Professional soft wash roof cleaning.",
    slug: "/roof-cleaning",
    image: "/manus-storage/job-roof-cleaning-1.webp",
  };

  it("returns an array of 3 schema objects", () => {
    const schemas = buildServicePageSchema(input);
    expect(schemas).toHaveLength(3);
  });

  it("first schema is a Service type", () => {
    const [service] = buildServicePageSchema(input) as any[];
    expect(service["@type"]).toBe("Service");
    expect(service.name).toBe("Roof Cleaning");
  });

  it("service URL is built from BASE_URL + slug", () => {
    const [service] = buildServicePageSchema(input) as any[];
    expect(service.url).toBe("https://srqwash.com/roof-cleaning");
  });

  it("service provider references the business @id", () => {
    const [service] = buildServicePageSchema(input) as any[];
    expect(service.provider["@id"]).toBe("https://srqwash.com/#business");
  });

  it("second schema is a LocalBusiness", () => {
    const [, business] = buildServicePageSchema(input) as any[];
    expect(business["@type"]).toContain("LocalBusiness");
  });

  it("third schema is a BreadcrumbList with 3 items", () => {
    const [, , breadcrumb] = buildServicePageSchema(input) as any[];
    expect(breadcrumb["@type"]).toBe("BreadcrumbList");
    expect(breadcrumb.itemListElement).toHaveLength(3);
  });

  it("prepends BASE_URL to relative image paths", () => {
    const [service] = buildServicePageSchema(input) as any[];
    expect(service.image).toMatch(/^https:\/\/srqwash\.com/);
  });

  it("leaves absolute image URLs unchanged", () => {
    const schemas = buildServicePageSchema({
      ...input,
      image: "https://cdn.example.com/photo.webp",
    }) as any[];
    expect(schemas[0].image).toBe("https://cdn.example.com/photo.webp");
  });
});

// ── buildServiceAreaSchema ────────────────────────────────────────────────────

describe("buildServiceAreaSchema", () => {
  const input = {
    name: "Sarasota",
    state: "FL",
    slug: "/service-area/sarasota",
    description: "Serving Sarasota, FL.",
  };

  it("returns an array of 2 schema objects", () => {
    const schemas = buildServiceAreaSchema(input);
    expect(schemas).toHaveLength(2);
  });

  it("first schema is a LocalBusiness", () => {
    const [business] = buildServiceAreaSchema(input) as any[];
    expect(business["@type"]).toContain("LocalBusiness");
  });

  it("areaServed is set to the city name", () => {
    const [business] = buildServiceAreaSchema(input) as any[];
    expect(business.areaServed.name).toBe("Sarasota");
  });

  it("second schema is a BreadcrumbList with 3 items", () => {
    const [, breadcrumb] = buildServiceAreaSchema(input) as any[];
    expect(breadcrumb["@type"]).toBe("BreadcrumbList");
    expect(breadcrumb.itemListElement).toHaveLength(3);
  });
});

// ── buildNeighborhoodSchema ───────────────────────────────────────────────────

describe("buildNeighborhoodSchema", () => {
  const input = {
    name: "Lorraine Lakes",
    parent: "Lakewood Ranch",
    state: "FL",
    slug: "/service-area/lorraine-lakes",
    intro: "Lorraine Lakes is a gated community in Lakewood Ranch.",
  };

  it("returns an array of 2 schema objects", () => {
    const schemas = buildNeighborhoodSchema(input);
    expect(schemas).toHaveLength(2);
  });

  it("first schema is a LocalBusiness", () => {
    const [business] = buildNeighborhoodSchema(input) as any[];
    expect(business["@type"]).toContain("LocalBusiness");
  });

  it("areaServed name includes neighborhood and parent city", () => {
    const [business] = buildNeighborhoodSchema(input) as any[];
    expect(business.areaServed.name).toContain("Lorraine Lakes");
    expect(business.areaServed.name).toContain("Lakewood Ranch");
  });

  it("areaServed containedInPlace is the parent city", () => {
    const [business] = buildNeighborhoodSchema(input) as any[];
    expect(business.areaServed.containedInPlace.name).toBe("Lakewood Ranch");
  });

  it("breadcrumb has 4 items (Home > Service Areas > City > Neighborhood)", () => {
    const [, breadcrumb] = buildNeighborhoodSchema(input) as any[];
    expect(breadcrumb.itemListElement).toHaveLength(4);
  });

  it("breadcrumb item 3 links to the parent city area page", () => {
    const [, breadcrumb] = buildNeighborhoodSchema(input) as any[];
    const cityItem = breadcrumb.itemListElement[2];
    expect(cityItem.item).toBe("https://srqwash.com/service-area/lakewood-ranch");
  });
});

// ── buildSitemapXml ───────────────────────────────────────────────────────────

describe("buildSitemapXml", () => {
  it("produces a valid XML declaration", () => {
    const xml = buildSitemapXml();
    expect(xml).toMatch(/^<\?xml version="1\.0" encoding="UTF-8"\?>/);
  });

  it("wraps content in a urlset element", () => {
    const xml = buildSitemapXml();
    expect(xml).toContain('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">');
    expect(xml).toContain("</urlset>");
  });

  it("includes all static pages", () => {
    const xml = buildSitemapXml();
    for (const page of STATIC_PAGES) {
      expect(xml).toContain(`https://srqwash.com${page.loc}`);
    }
  });

  it("includes all service slugs", () => {
    const xml = buildSitemapXml();
    for (const slug of SERVICE_SLUGS) {
      expect(xml).toContain(`https://srqwash.com${slug}`);
    }
  });

  it("includes all city area slugs", () => {
    const xml = buildSitemapXml();
    for (const slug of CITY_AREA_SLUGS) {
      expect(xml).toContain(`https://srqwash.com${slug}`);
    }
  });

  it("includes all neighborhood slugs", () => {
    const xml = buildSitemapXml();
    for (const slug of NEIGHBORHOOD_SLUGS) {
      expect(xml).toContain(`https://srqwash.com${slug}`);
    }
  });

  it("has at least 50 total URL entries", () => {
    const xml = buildSitemapXml();
    const count = (xml.match(/<loc>/g) || []).length;
    expect(count).toBeGreaterThanOrEqual(50);
  });

  it("includes today's date in lastmod fields", () => {
    const xml = buildSitemapXml();
    const today = new Date().toISOString().split("T")[0];
    expect(xml).toContain(`<lastmod>${today}</lastmod>`);
  });

  it("includes priority values for different page types", () => {
    const xml = buildSitemapXml();
    expect(xml).toContain("<priority>1.0</priority>");
    expect(xml).toContain("<priority>0.9</priority>");
    expect(xml).toContain("<priority>0.7</priority>");
  });

  it("homepage has priority 1.0", () => {
    const xml = buildSitemapXml();
    expect(xml).toContain(
      `<loc>https://srqwash.com/</loc>\n    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>1.0</priority>`
    );
  });
});
