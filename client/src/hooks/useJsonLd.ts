// useJsonLd — injects a <script type="application/ld+json"> tag into <head>
// Cleans up on unmount to avoid stale schema on navigation.
// Usage: useJsonLd(schemaObject)

import { useEffect } from "react";

export function useJsonLd(schema: object | object[]) {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "page-json-ld";
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      const existing = document.getElementById("page-json-ld");
      if (existing) document.head.removeChild(existing);
    };
  }, [JSON.stringify(schema)]);
}
