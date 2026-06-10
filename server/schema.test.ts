// Unit tests for JSON-LD schema builder utilities
// These run server-side via vitest (no DOM required)

import { describe, it, expect } from "vitest";

// We import the builders directly from the source file.
// Because the file lives in client/src, we use a relative path.
import {
  buildLocalBusinessSchema,
  buildServicePageSchema,
  buildServiceAreaSchema,
  buildNeighborhoodSchema,
} from "../client/src/lib/schema";

// ── buildLocalBusinessSchema ─────────────────────────────────────────────────

describe("buildLocalBusinessSchema", () => {
  it("returns a valid @context and @type", () => {
    const schema = buildLocalBusinessSchema();
    expect(schema["@context"]).toBe("https://schema.org");
    expect(schema["@type"]).toContain("LocalBusiness");
  });

  it("includes the business name", () => {
    const schema = buildLocalBusinessSchema();
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
