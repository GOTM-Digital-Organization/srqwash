// useSeoMeta — sets document.title and the meta description tag for each page
// Usage: useSeoMeta(metaTitle, metaDescription)
// Falls back gracefully if either value is undefined.

import { useEffect } from "react";

export function useSeoMeta(title?: string, description?: string) {
  useEffect(() => {
    if (title) {
      document.title = title;
    }

    if (description) {
      let metaDesc = document.querySelector<HTMLMetaElement>(
        'meta[name="description"]'
      );
      if (!metaDesc) {
        metaDesc = document.createElement("meta");
        metaDesc.name = "description";
        document.head.appendChild(metaDesc);
      }
      metaDesc.content = description;
    }

    // Cleanup: restore global defaults when component unmounts
    return () => {
      document.title =
        "SRQ Wash | Pressure Washing Lakewood Ranch & Sarasota FL";
      const metaDesc = document.querySelector<HTMLMetaElement>(
        'meta[name="description"]'
      );
      if (metaDesc) {
        metaDesc.content =
          "Professional pressure washing, soft wash roof cleaning, house washing, driveway cleaning, pool cage cleaning, and paver sealing in Lakewood Ranch, Sarasota, Bradenton, and Venice, FL.";
      }
    };
  }, [title, description]);
}
