// SRQ Wash — Dynamic XML Sitemap Generator
// Registers a GET /sitemap.xml route on the Express app.
// All URLs are derived from the shared siteData arrays so the sitemap
// stays in sync with the actual routes automatically.

import type { Express } from "express";
import { SERVICES, SERVICE_AREAS, NEIGHBORHOOD_AREAS } from "../client/src/lib/siteData";

const BASE_URL = "https://srqwash.com";

// ── Static pages ──────────────────────────────────────────────────────────────

export const STATIC_PAGES = [
  { loc: "/",              changefreq: "weekly",  priority: "1.0" },
  { loc: "/about",         changefreq: "monthly", priority: "0.7" },
  { loc: "/service-areas", changefreq: "monthly", priority: "0.8" },
  { loc: "/reviews-page",  changefreq: "monthly", priority: "0.6" },
  { loc: "/faqs",          changefreq: "monthly", priority: "0.6" },
  { loc: "/contact-us",    changefreq: "monthly", priority: "0.7" },
  { loc: "/roof-cleaning-sarasota", changefreq: "monthly", priority: "0.8" },
];

// ── Derived URL sets (from shared siteData) ───────────────────────────────────

export const SERVICE_SLUGS = SERVICES.map((s) => s.slug);
export const CITY_AREA_SLUGS = SERVICE_AREAS.map((a) => a.slug);
export const NEIGHBORHOOD_SLUGS = NEIGHBORHOOD_AREAS.map((n) => n.slug);

// ── XML builder ───────────────────────────────────────────────────────────────

export function buildSitemapXml(): string {
  const today = new Date().toISOString().split("T")[0]; // YYYY-MM-DD

  const urlEntries: string[] = [];

  const addUrl = (loc: string, changefreq: string, priority: string) => {
    urlEntries.push(
      `  <url>\n    <loc>${BASE_URL}${loc}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`
    );
  };

  // Static pages
  for (const page of STATIC_PAGES) {
    addUrl(page.loc, page.changefreq, page.priority);
  }

  // Service pages (derived from SERVICES)
  for (const slug of SERVICE_SLUGS) {
    addUrl(slug, "monthly", "0.9");
  }

  // City area pages (derived from SERVICE_AREAS)
  for (const slug of CITY_AREA_SLUGS) {
    addUrl(slug, "monthly", "0.8");
  }

  // Neighborhood pages (derived from NEIGHBORHOOD_AREAS)
  for (const slug of NEIGHBORHOOD_SLUGS) {
    addUrl(slug, "monthly", "0.7");
  }

  return [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
    ...urlEntries,
    `</urlset>`,
  ].join("\n");
}

// ── Express route registration ────────────────────────────────────────────────

export function registerSitemapRoute(app: Express) {
  app.get("/sitemap.xml", (_req, res) => {
    res.setHeader("Content-Type", "application/xml; charset=utf-8");
    res.setHeader("Cache-Control", "public, max-age=86400"); // cache 24 hours
    res.send(buildSitemapXml());
  });
}
