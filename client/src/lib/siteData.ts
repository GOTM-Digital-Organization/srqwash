// SRQ Wash — Site-wide constants and data
// Design: Florida Power — Slate Black + Pressure Blue + Safety Orange

export const SITE = {
  name: "SRQ Wash",
  tagline: "Lakewood Ranch's Premier Pressure Washing Company",
  description:
    "Professional pressure washing, soft wash roof cleaning, house washing, driveway cleaning, pool cage cleaning, and paver sealing in Lakewood Ranch, Sarasota, Bradenton, and Venice, FL.",
  address: "9040 Town Center Pkwy #102, Lakewood Ranch FL 34202",
  email: "srqwash@gmail.com",
  // Display phone (from site)
  phoneDisplay: "(941) 299-6338",
  // Call button phone (hidden from display, used for tel: links only)
  phoneCall: "9412292355",
  rating: "4.90",
  reviewCount: "48",
  hours: [
    { day: "Monday", hours: "7am – 7pm" },
    { day: "Tuesday", hours: "7am – 7pm" },
    { day: "Wednesday", hours: "7am – 7pm" },
    { day: "Thursday", hours: "7am – 7pm" },
    { day: "Friday", hours: "7am – 7pm" },
    { day: "Saturday", hours: "7am – 7pm" },
    { day: "Sunday", hours: "Closed" },
  ],
  social: {
    facebook: "https://www.facebook.com/Srqwash",
    instagram: "https://www.instagram.com/srqwash/",
    youtube: "https://www.youtube.com/@srqwash",
  },
  partnerSite: {
    name: "TomThePoolGuy.com",
    url: "https://tomthepoolguy.com",
  },
};

export const SERVICES = [
  {
    id: "roof-cleaning",
    slug: "/roof-cleaning",
    title: "Roof Cleaning",
    shortTitle: "Roof Cleaning",
    subtitle: "Safe Soft Wash Roof Cleaning in Lakewood Ranch & Sarasota",
    description:
      "Your roof requires specialized care to maintain its appearance and functionality. Our professional roof cleaning service uses safe soft washing methods to eliminate algae, moss, and organic growth without the risk of damage associated with high-pressure washing. We exclusively use techniques recommended by major roofing manufacturers to protect your investment.",
    longDescription: `Florida's humid climate creates the perfect environment for algae, mold, and lichen to colonize your roof. Those dark streaks you see are not just cosmetic — they are living organisms that shorten the lifespan of your roofing materials. Our professional soft wash roof cleaning service uses low-pressure application combined with biodegradable cleaning solutions to kill organic growth at the cellular level, providing results that last 2–4 times longer than pressure washing alone.

We follow ARMA (Asphalt Roofing Manufacturers Association) guidelines and use only manufacturer-approved cleaning methods. This means your roof warranty remains intact and your investment is protected. Our process is safe for all roof types including tile, shingle, metal, and flat roofs.`,
    benefits: [
      "Extends roof lifespan by removing damaging organic growth",
      "Manufacturer-approved soft wash methods — warranty safe",
      "Results last 2–4x longer than pressure washing",
      "Eliminates algae, mold, lichen, and moss at the root",
      "Protects your home's curb appeal and resale value",
    ],
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310419663028316757/S8hJyhgpkGHR2RfqK8Ywnb/roof-cleaning-E5hFHyHQFJNnrFAnkehfGE.webp",
    metaTitle:
      "Roof Cleaning Lakewood Ranch & Sarasota | Safe Soft Wash | SRQ Wash",
    metaDescription:
      "Professional soft wash roof cleaning in Lakewood Ranch, Sarasota, and Bradenton. Safe, manufacturer-approved methods that eliminate algae, mold, and streaks without damage. Free quotes.",
  },
  {
    id: "house-washing",
    slug: "/house-washing",
    title: "Exterior House Washing",
    shortTitle: "House Washing",
    subtitle: "Professional Exterior House Washing in Lakewood Ranch",
    description:
      "Our professional house washing service in Lakewood Ranch uses a combination of soft washing and pressure washing techniques to safely and effectively clean all types of exterior surfaces. We begin every project with a thorough inspection to determine the most appropriate cleaning method for your specific siding, stucco, or trim materials.",
    longDescription: `Your home's exterior is constantly exposed to Florida's harsh elements — UV radiation, humidity, salt air, and biological growth. Over time, this leads to unsightly staining, mold growth, and surface degradation that can affect your property value and HOA compliance. Our professional exterior house washing service restores your home's original beauty and protects your investment.

We use a tailored approach for every home. Stucco and painted surfaces receive our gentle soft wash treatment, while harder surfaces like brick and concrete may benefit from controlled pressure washing. Our eco-friendly cleaning solutions are safe for your landscaping, family, and pets.`,
    benefits: [
      "Removes mold, mildew, algae, and environmental staining",
      "Safe for all exterior surfaces — stucco, siding, brick, wood",
      "Eco-friendly solutions safe for plants, pets, and family",
      "Improves curb appeal and maintains property value",
      "Helps maintain HOA compliance",
    ],
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310419663028316757/S8hJyhgpkGHR2RfqK8Ywnb/house-washing-d8iTwVpg2DNLBPa4TF6qYx.webp",
    metaTitle:
      "House Washing Lakewood Ranch & Sarasota | Exterior Cleaning | SRQ Wash",
    metaDescription:
      "Professional exterior house washing in Lakewood Ranch, Sarasota, and Bradenton. Safe soft wash and pressure wash for stucco, siding, and brick. Free quotes.",
  },
  {
    id: "driveway-cleaning",
    slug: "/driveway-cleaning",
    title: "Driveway & Concrete Cleaning",
    shortTitle: "Driveway Cleaning",
    subtitle: "Professional Driveway & Concrete Cleaning in Lakewood Ranch",
    description:
      "Your driveway and concrete surfaces are among the first things visitors notice when they arrive at your Lakewood Ranch property. Our professional driveway cleaning and concrete restoration service removes oil stains, tire marks, organic growth, and general discoloration using professional-grade surface cleaners that provide even, consistent results across large areas.",
    longDescription: `Concrete driveways, walkways, and pool decks are porous surfaces that absorb oil, grease, rust, and organic matter over time. Standard garden hoses and consumer pressure washers simply cannot generate the pressure or apply the right cleaning chemistry to restore concrete to its original appearance. Our professional surface cleaning equipment uses rotating nozzles that clean evenly without leaving streaks or lines.

We pre-treat oil stains and heavy organic growth with specialized degreasers and biocides before applying high-pressure cleaning. Post-treatment with a surface sealer is available to protect your investment and make future cleaning easier.`,
    benefits: [
      "Removes oil stains, tire marks, rust, and organic growth",
      "Professional surface cleaners for streak-free, even results",
      "Pre-treatment for stubborn stains",
      "Optional sealing to protect and extend clean appearance",
      "Improves safety by removing slippery algae and mold",
    ],
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310419663028316757/S8hJyhgpkGHR2RfqK8Ywnb/driveway-cleaning-2i5rnpKXs2obVPyB7Mi9Xv.webp",
    metaTitle:
      "Driveway Cleaning Lakewood Ranch & Sarasota | Concrete Cleaning | SRQ Wash",
    metaDescription:
      "Professional driveway and concrete cleaning in Lakewood Ranch, Sarasota, and Bradenton. Remove oil stains, tire marks, and organic growth. Free quotes.",
  },
  {
    id: "pool-cage-cleaning",
    slug: "/pool-cage-cleaning",
    title: "Pool Cage & Lanai Cleaning",
    shortTitle: "Pool Cage Cleaning",
    subtitle: "Pool Cage, Lanai & Patio Cleaning in Lakewood Ranch",
    description:
      "Pool areas present unique cleaning challenges that require specialized attention. Our pool area cleaning service addresses all aspects of pool deck and surrounding area maintenance, removing algae and organic growth while restoring proper slip resistance for safety.",
    longDescription: `Florida's pool cages and screen enclosures are constantly exposed to humidity, rain, pollen, and organic growth. Algae, mold, and oxidation build up on aluminum frames and screen panels, reducing visibility and creating an unsightly appearance. Our specialized pool cage cleaning service uses the right pressure and chemistry to clean screens without tearing them and restore aluminum frames to their original luster.

We also clean pool decks, lanai pavers, and surrounding concrete areas. Our process removes algae and mold that create dangerous slip hazards, restoring safe, clean surfaces for your family to enjoy.`,
    benefits: [
      "Cleans aluminum frames and screen panels safely",
      "Removes algae, mold, and oxidation from enclosures",
      "Restores slip resistance to pool decks and lanais",
      "Improves visibility through clean screen panels",
      "Extends the life of your screen enclosure",
    ],
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310419663028316757/S8hJyhgpkGHR2RfqK8Ywnb/pool-cage-cleaning-FPWrGmUw9QQXQ2dHyeNXot.webp",
    metaTitle:
      "Pool Cage Cleaning Lakewood Ranch & Sarasota | Lanai Cleaning | SRQ Wash",
    metaDescription:
      "Professional pool cage, lanai, and patio cleaning in Lakewood Ranch, Sarasota, and Bradenton. Safe screen cleaning, algae removal, and deck restoration. Free quotes.",
  },
  {
    id: "paver-sealing",
    slug: "/paver-sealing",
    title: "Paver Sealing",
    shortTitle: "Paver Sealing",
    subtitle:
      "Protect & Beautify Your Pavers in Lakewood Ranch, Sarasota & Bradenton",
    description:
      "Over time, Florida's harsh sun, rain, and humidity can cause brick pavers to fade, shift, and grow algae or mold. Our professional paver sealing service in Lakewood Ranch, Sarasota, and Bradenton helps restore the natural color of your pavers, lock in joint sand, and create a long-lasting barrier against the elements.",
    longDescription: `Brick and concrete pavers are a significant investment in your property's curb appeal and functionality. Without proper sealing, Florida's intense UV radiation causes colors to fade, joint sand washes away allowing pavers to shift, and porous surfaces absorb stains and harbor organic growth. Our professional paver sealing service addresses all of these issues in a single comprehensive treatment.

Our process begins with a thorough cleaning to remove all dirt, stains, and organic growth. We then re-sand joints with polymeric sand to stabilize the paver field and prevent weed growth. Finally, we apply a premium penetrating or film-forming sealer that enhances color, repels stains, and protects against UV fading. The result is a surface that looks better and stays cleaner longer.`,
    benefits: [
      "Restores and enhances natural paver color",
      "Locks in joint sand to prevent shifting and weed growth",
      "Creates a protective barrier against stains and UV fading",
      "Available in wet-look or natural finish sealers",
      "Extends paver lifespan and protects your investment",
    ],
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    metaTitle:
      "Paver Sealing Lakewood Ranch & Sarasota | Brick Paver Sealing | SRQ Wash",
    metaDescription:
      "Professional paver sealing in Lakewood Ranch, Sarasota, and Bradenton. Restore color, lock joint sand, and protect pavers from Florida's harsh climate. Free quotes.",
  },
];

export const SERVICE_AREAS = [
  {
    id: "lakewood-ranch",
    slug: "/service-area/lakewood-ranch",
    name: "Lakewood Ranch",
    state: "FL",
    description:
      "Serving all neighborhoods in Lakewood Ranch, FL with professional pressure washing, roof cleaning, house washing, and paver sealing.",
    metaTitle:
      "Pressure Washing Lakewood Ranch FL | SRQ Wash | Licensed & Insured",
    metaDescription:
      "Professional pressure washing in Lakewood Ranch, FL. House washing, roof cleaning, driveway cleaning, pool cage cleaning, and paver sealing. Licensed, insured, 5-star rated.",
  },
  {
    id: "sarasota",
    slug: "/service-area/sarasota",
    name: "Sarasota",
    state: "FL",
    description:
      "Serving Sarasota, FL with professional pressure washing, soft wash roof cleaning, exterior house washing, and commercial cleaning services.",
    metaTitle:
      "Pressure Washing Sarasota FL | SRQ Wash | Licensed & Insured",
    metaDescription:
      "Professional pressure washing in Sarasota, FL. House washing, roof cleaning, driveway cleaning, pool cage cleaning, and paver sealing. Licensed, insured, 5-star rated.",
  },
  {
    id: "venice",
    slug: "/service-area/venice",
    name: "Venice",
    state: "FL",
    description:
      "Serving Venice, FL with professional pressure washing, roof cleaning, house washing, and exterior cleaning services.",
    metaTitle:
      "Pressure Washing Venice FL | SRQ Wash | Licensed & Insured",
    metaDescription:
      "Professional pressure washing in Venice, FL. House washing, roof cleaning, driveway cleaning, pool cage cleaning, and paver sealing. Licensed, insured, 5-star rated.",
  },
  {
    id: "bradenton",
    slug: "/service-area/bradenton",
    name: "Bradenton",
    state: "FL",
    description:
      "Serving Bradenton, FL with professional pressure washing, soft wash roof cleaning, exterior house washing, and commercial cleaning services.",
    metaTitle:
      "Pressure Washing Bradenton FL | SRQ Wash | Licensed & Insured",
    metaDescription:
      "Professional pressure washing in Bradenton, FL. House washing, roof cleaning, driveway cleaning, pool cage cleaning, and paver sealing. Licensed, insured, 5-star rated.",
  },
];

export const NEIGHBORHOODS = [
  "Amber Creek",
  "Aurora",
  "Avalon Woods",
  "Azario – Esplanade",
  "Azario – Townhomes",
  "Calusa Country Club",
  "Cresswind (55+)",
  "Del Webb Catalina",
  "Lorraine Lakes",
  "Monarch Acres",
  "Monterey",
  "Palm Grove",
  "Sapphire Point",
  "Solera",
  "Star Farms",
  "Sweetwater",
  "The Isles at Lakewood Ranch",
  "Waterbury Park",
  "Waterside – Bungalow Walk",
  "Waterside – Emerald Landing",
  "Waterside – Kingfisher Estates",
  "Waterside – Lakehouse Cove",
  "Waterside – Shellstone",
  "Waterside – The Alcove",
  "Waterside – Wild Blue",
  "Windward",
];

export const TESTIMONIALS = [
  {
    name: "Jennifer M.",
    location: "Lakewood Ranch, FL",
    rating: 5,
    text: "SRQ Wash did an incredible job on our roof and driveway. The crew was professional, on time, and the results were amazing. Our home looks brand new. Highly recommend!",
    service: "Roof Cleaning & Driveway Cleaning",
  },
  {
    name: "Robert T.",
    location: "Sarasota, FL",
    rating: 5,
    text: "I've tried other pressure washing companies before but SRQ Wash is on another level. They took the time to explain what they were doing and why. The house looks fantastic.",
    service: "Exterior House Washing",
  },
  {
    name: "Sarah K.",
    location: "Lakewood Ranch, FL",
    rating: 5,
    text: "Our pool cage was covered in green algae and the screens were almost opaque. After SRQ Wash came through, it looks like a brand new enclosure. Worth every penny.",
    service: "Pool Cage & Lanai Cleaning",
  },
  {
    name: "Michael D.",
    location: "Venice, FL",
    rating: 5,
    text: "Had my pavers sealed and they look absolutely stunning. The color is so vibrant and they told me the seal will protect them for years. Great work and great price.",
    service: "Paver Sealing",
  },
  {
    name: "Linda H.",
    location: "Bradenton, FL",
    rating: 5,
    text: "Called on a Tuesday, they were here by Thursday. Fast, efficient, and professional. The driveway went from embarrassingly dirty to spotless. Will definitely use again.",
    service: "Driveway Cleaning",
  },
  {
    name: "Tom W.",
    location: "Lakewood Ranch, FL",
    rating: 5,
    text: "SRQ Wash has been cleaning our home for two years now. Consistent quality, always on time, and they treat our property with care. Best pressure washing company in the area.",
    service: "Exterior House Washing",
  },
];

export const FAQS = [
  {
    question: "What is the difference between pressure washing and soft washing?",
    answer:
      "Pressure washing uses high-pressure water (1,300–4,000 PSI) to mechanically remove dirt from hard surfaces like concrete and brick. Soft washing uses low pressure (150–300 PSI) combined with specialized biodegradable cleaning solutions to kill and remove organic growth like algae, mold, and mildew at the cellular level. Soft washing results last 2–4 times longer because it eliminates the root cause of contamination rather than just the surface appearance.",
  },
  {
    question: "How often should I have my property pressure washed?",
    answer:
      "In Florida's humid climate, most properties benefit from professional cleaning more frequently than in other regions. For house washing and roof cleaning, we recommend every 1–3 years depending on tree coverage and environmental conditions. Driveways and concrete typically need cleaning annually. Pool cages and lanais may need cleaning every 6–12 months due to constant exposure to humidity and organic growth.",
  },
  {
    question: "How often should I have my house pressure washed in Lakewood Ranch?",
    answer:
      "Due to Florida's humid climate, we recommend annual house washing for most properties in Lakewood Ranch. Properties with significant tree coverage, north-facing walls, or those near water may benefit from cleaning every 6–12 months. Annual cleaning prevents organic growth from becoming established and damaging your exterior surfaces.",
  },
  {
    question: "What surfaces can be pressure washed?",
    answer:
      "We can clean a wide range of surfaces including driveways, sidewalks, patios, pool decks, fences, home exteriors (stucco, siding, brick), roofs, pool cages, screen enclosures, and commercial buildings. We assess each surface and use the appropriate method — pressure washing for hard surfaces and soft washing for delicate surfaces — to ensure safe, effective cleaning.",
  },
  {
    question: "Will pressure washing damage my landscaping?",
    answer:
      "We take extensive precautions to protect your landscaping. Before cleaning, we pre-wet all plants and shrubs adjacent to the work area. We use plant-safe, biodegradable cleaning solutions, and we rinse all vegetation thoroughly after completing the work. In over a decade of service, we have never had a landscaping damage claim.",
  },
  {
    question: "Do I need to prepare my property before the pressure washing service?",
    answer:
      "We ask that you remove fragile items, potted plants, and outdoor furniture from the immediate work area. Please close all windows and doors, and let us know about any gate codes or access requirements. Our team handles everything else — we bring all equipment, water, and cleaning solutions needed for the job.",
  },
  {
    question: "Is soft washing safe for my roof?",
    answer:
      "Yes — soft washing is actually the manufacturer-recommended method for cleaning most roofs. High-pressure washing can crack tiles, damage shingles, and void your roof warranty. Our soft wash process uses low pressure (similar to a garden hose) combined with professional-grade cleaning solutions that kill algae, mold, and lichen without any physical damage to your roofing materials.",
  },
  {
    question: "How long does a typical pressure washing job take?",
    answer:
      "Job duration varies by scope. A standard house washing takes 2–4 hours. Driveway and concrete cleaning typically takes 1–2 hours. Roof cleaning takes 2–3 hours. Pool cage cleaning takes 2–4 hours. Full-property packages including multiple services may take a full day. We provide a time estimate with every quote.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Yes. SRQ Wash is fully licensed and carries comprehensive general liability insurance and workers' compensation coverage. We are happy to provide proof of insurance upon request. Hiring an uninsured contractor puts your property and finances at risk — always verify insurance before allowing anyone to work on your property.",
  },
  {
    question: "Do you offer free estimates?",
    answer:
      "Absolutely. We provide free, no-obligation quotes for all residential and commercial services. You can request a quote by calling us, filling out our online contact form, or sending us a message. We typically respond within a few hours and can often schedule an estimate the same or next day.",
  },
];
