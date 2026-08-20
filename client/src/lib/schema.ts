// SRQ Wash — JSON-LD Schema Builders
// Produces valid Schema.org objects for injection via useJsonLd.
// All builders return plain objects; serialisation is handled by the hook.

const BASE_URL = "https://srqwash.com";

// ── Shared business identity ──────────────────────────────────────────────────

const BUSINESS_IDENTITY = {
  "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
  "@id": `${BASE_URL}/#business`,
  name: "SRQ Wash",
  url: BASE_URL,
  logo: `https://d2xsxph8kpxj0f.cloudfront.net/310419663028316757/S8hJyhgpkGHR2RfqK8Ywnb/srqwash-logo-mDqoa6B8FmRjZTuyKBeBmy.webp`,
  image: `${BASE_URL}/images/job-roof-cleaning-1.webp`,
  telephone: "+19412292355",
  email: "srqwash@gmail.com",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "9040 Town Center Pkwy #102",
    addressLocality: "Lakewood Ranch",
    addressRegion: "FL",
    postalCode: "34202",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 27.4467,
    longitude: -82.4318,
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "48",
    bestRating: "5",
    worstRating: "1",
  },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Monday",    opens: "07:00", closes: "19:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Tuesday",   opens: "07:00", closes: "19:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Wednesday", opens: "07:00", closes: "19:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Thursday",  opens: "07:00", closes: "19:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Friday",    opens: "07:00", closes: "19:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday",  opens: "07:00", closes: "19:00" },
  ],
  sameAs: [
    "https://www.facebook.com/Srqwash",
    "https://www.instagram.com/srqwash/",
    "https://www.youtube.com/@srqwash",
  ],
};

// ── Inline Review objects built from the TESTIMONIALS array ──────────────────
// These are embedded inside the LocalBusiness schema on the homepage.

export interface TestimonialInput {
  name: string;
  location: string;
  rating: number;
  text: string;
  service: string;
}

export function buildReviewObjects(testimonials: TestimonialInput[]) {
  return testimonials.map((t) => ({
    "@type": "Review",
    author: {
      "@type": "Person",
      name: t.name,
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: String(t.rating),
      bestRating: "5",
      worstRating: "1",
    },
    reviewBody: t.text,
    name: `${t.service} — ${t.location}`,
    itemReviewed: { "@id": `${BASE_URL}/#business` },
  }));
}

// ── Homepage / Contact — full LocalBusiness with embedded reviews ─────────────

export function buildLocalBusinessSchema(testimonials?: TestimonialInput[]) {
  const base = {
    "@context": "https://schema.org",
    ...BUSINESS_IDENTITY,
    description:
      "Professional pressure washing, soft wash roof cleaning, house washing, driveway cleaning, pool cage cleaning, and paver sealing in Lakewood Ranch, Sarasota, Bradenton, and Venice, FL.",
    areaServed: [
      { "@type": "City", name: "Lakewood Ranch", containedInPlace: { "@type": "State", name: "Florida" } },
      { "@type": "City", name: "Sarasota",       containedInPlace: { "@type": "State", name: "Florida" } },
      { "@type": "City", name: "Bradenton",      containedInPlace: { "@type": "State", name: "Florida" } },
      { "@type": "City", name: "Venice",         containedInPlace: { "@type": "State", name: "Florida" } },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Exterior Cleaning Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Roof Cleaning" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Exterior House Washing" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Driveway & Concrete Cleaning" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pool Cage & Lanai Cleaning" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Paver Sealing" } },
      ],
    },
  } as Record<string, unknown>;

  if (testimonials && testimonials.length > 0) {
    base.review = buildReviewObjects(testimonials);
  }

  return base;
}

// ── Service page — LocalBusiness + Service + Breadcrumb ───────────────────────

export function buildServicePageSchema(service: {
  title: string;
  description: string;
  slug: string;
  image: string;
}) {
  const serviceUrl = `${BASE_URL}${service.slug}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${serviceUrl}#service`,
    name: service.title,
    description: service.description,
    image: service.image.startsWith("http") ? service.image : `${BASE_URL}${service.image}`,
    url: serviceUrl,
    provider: { "@id": `${BASE_URL}/#business` },
    areaServed: [
      { "@type": "City", name: "Lakewood Ranch", containedInPlace: { "@type": "State", name: "Florida" } },
      { "@type": "City", name: "Sarasota",       containedInPlace: { "@type": "State", name: "Florida" } },
      { "@type": "City", name: "Bradenton",      containedInPlace: { "@type": "State", name: "Florida" } },
      { "@type": "City", name: "Venice",         containedInPlace: { "@type": "State", name: "Florida" } },
    ],
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: serviceUrl,
    },
  };

  const businessSchema = {
    "@context": "https://schema.org",
    ...BUSINESS_IDENTITY,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home",         item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Our Services", item: `${BASE_URL}/` },
      { "@type": "ListItem", position: 3, name: service.title,  item: serviceUrl },
    ],
  };

  return [serviceSchema, businessSchema, breadcrumbSchema];
}

// ── City service area page — LocalBusiness (areaServed=city) + Breadcrumb ─────

export function buildServiceAreaSchema(area: {
  name: string;
  state: string;
  slug: string;
  description: string;
}) {
  const areaUrl = `${BASE_URL}${area.slug}`;

  const businessSchema = {
    "@context": "https://schema.org",
    ...BUSINESS_IDENTITY,
    "@id": `${areaUrl}#business`,
    description: `Professional pressure washing, roof cleaning, house washing, driveway cleaning, pool cage cleaning, and paver sealing in ${area.name}, ${area.state}. ${area.description}`,
    areaServed: {
      "@type": "City",
      name: area.name,
      containedInPlace: { "@type": "State", name: "Florida" },
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home",          item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Service Areas", item: `${BASE_URL}/service-areas` },
      { "@type": "ListItem", position: 3, name: `${area.name}, FL`, item: areaUrl },
    ],
  };

  return [businessSchema, breadcrumbSchema];
}

// ── Neighborhood page — LocalBusiness (areaServed=neighborhood) + Breadcrumb ──

export function buildNeighborhoodSchema(area: {
  name: string;
  parent: string;
  state: string;
  slug: string;
  intro: string;
}) {
  const areaUrl = `${BASE_URL}${area.slug}`;
  const parentUrl = `${BASE_URL}/service-area/${area.parent.toLowerCase().replace(/\s+/g, "-")}`;

  const businessSchema = {
    "@context": "https://schema.org",
    ...BUSINESS_IDENTITY,
    "@id": `${areaUrl}#business`,
    description: `Professional pressure washing, roof cleaning, house washing, driveway cleaning, pool cage cleaning, and paver sealing in ${area.name}, ${area.parent}, ${area.state}. ${area.intro}`,
    areaServed: {
      "@type": "Place",
      name: `${area.name}, ${area.parent}, FL`,
      containedInPlace: {
        "@type": "City",
        name: area.parent,
        containedInPlace: { "@type": "State", name: "Florida" },
      },
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home",             item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Service Areas",    item: `${BASE_URL}/service-areas` },
      { "@type": "ListItem", position: 3, name: area.parent,        item: parentUrl },
      { "@type": "ListItem", position: 4, name: area.name,          item: areaUrl },
    ],
  };

  return [businessSchema, breadcrumbSchema];
}
