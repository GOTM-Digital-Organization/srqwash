// SRQ Wash TrustBar — social proof badges
// Design: Dark slate bar with icon + text trust signals

import { Shield, Star, Clock, Leaf, Award } from "lucide-react";
import { SITE } from "@/lib/siteData";

const trustItems = [
  { icon: Shield, label: "Licensed & Insured" },
  { icon: Star, label: `${SITE.rating} Star Rated (${SITE.reviewCount} Reviews)` },
  { icon: Clock, label: "Same-Week Service" },
  { icon: Leaf, label: "Eco-Friendly Solutions" },
  { icon: Award, label: "Locally Owned & Operated" },
];

export default function TrustBar() {
  return (
    <div className="bg-[#111827] border-b border-white/10">
      <div className="container">
        <div className="flex flex-wrap items-center justify-center lg:justify-between gap-x-6 gap-y-2 py-3">
          {trustItems.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2">
              <Icon size={14} className="text-[#0EA5E9] flex-shrink-0" />
              <span
                className="text-xs font-semibold text-gray-300 whitespace-nowrap"
                style={{ fontFamily: "'Nunito Sans', sans-serif" }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
