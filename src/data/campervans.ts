export type CampervanStatus = "Available" | "Currently in Build" | "Sold";

export interface Campervan {
  id: number;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  price: string;
  originalPrice?: string; // For showing sale/reduced prices
  saleLabel?: string; // e.g., "Winter Deal", "Sale"
  status: CampervanStatus;
  isSold?: boolean; // Show sold banner alongside other status
  mainImage: string;
  gallery: string[];
  specs: string[];
  features: {
    category: string;
    items: string[];
  }[];
  dimensions?: {
    length?: string;
    width?: string;
    height?: string;
    wheelbase?: string;
  };
  engine?: {
    type?: string;
    power?: string;
    transmission?: string;
    fuelType?: string;
  };
}

// ============================================
// IMAGE PATHS - Each van has its own folder with independent images
// To update images for a specific van, replace the files in:
// public/images/campervans/van-X/image-1.svg (etc.)
// ============================================

// --- CAMPERVAN 1 ---
export const campervan1: Campervan = {
  id: 1,
  slug: "2025-eryri-adventurer-renault-trafic",
  title: "Renault Trafic Campervan - 2025 Eryri Adventurer Extra LWB 4 Berth",
  shortDescription: "Brand New Gas Free Top Spec, Hilltop Campers Conversion, Wallis Duo, Vanshades Blinds, Premium Full Leather, Warranty, Finance Available.",
  fullDescription: `This stunning 2025 Renault Trafic Extra Long Wheel Base has been fully converted by Hilltop Campers to our flagship Eryri Adventurer specification with TOP SPEC upgrades.

This is a fully GAS FREE campervan featuring the Wallis Duo diesel-powered induction hob and heater system - no gas bottles required! Combined with Vanshades Window Blind Pods and Premium Full Leather upholstery, this is the ultimate luxury adventure vehicle.

Brand new from the factory with 0 miles, this campervan comes with full manufacturer warranty and finance options available. The conversion features our premium build quality with attention to every detail.

Perfect for couples or families looking for the ultimate adventure vehicle. The 4 berth configuration includes a comfortable rock and roll bed downstairs and a Deluxe Scenic Canvas pop-top roof with a second double bed.

Built on the award-winning Renault Trafic platform with lithium battery power, 200W solar panel, and Victron battery management combined with our own bespoke wiring harness and controls supplied by industry-leading BCA Group.

This vehicle is ready to drive away and start your adventures immediately.`,
  price: "52,995",
  originalPrice: "56,995",
  saleLabel: "Spring Offer",
  status: "Available",
  mainImage: "/images/campervans/van-1/image-2.jpeg",
  gallery: [
    "/images/campervans/van-1/image-2.jpeg",
    "/images/campervans/van-1/image-1.jpeg",
    "/images/campervans/van-1/image-3.jpeg",
    "/images/eryri-adventurer/front-headon.jpg",
    "/images/eryri-adventurer/front-three-quarter.jpg",
    "/images/eryri-adventurer/side-three-quarter.jpg",
    "/images/eryri-adventurer/poptop-raised.jpg",
    "/images/eryri-adventurer/rear-three-quarter.jpg",
  ],
  specs: ["0k Miles", "6 Speed Manual", "Euro 6", "4 Berth", "Gas Free", "Top Spec"],
  features: [
    {
      category: "Vehicle Specifications",
      items: [
        "Base Vehicle: Renault Trafic LWB",
        "Engine: 2.0 dCi (150bhp)",
        "Transmission: 6-speed Manual",
        "Berths: 4 (2 in pop-top, 2 in rock & roll bed)",
        "Seats: 5 Belted Seats",
        "Swivel Double Front Seat",
      ],
    },
    {
      category: "Electrical System",
      items: [
        "Lithium 105Ah Battery System",
        "Victron Smart BMS Battery Management",
        "200W Rooftop Solar Panel",
        "230V Shore Power Hook-up with Charger",
        "4x USB-A & 2x USB-C Charging Ports",
        "2x 12V Sockets",
        "Dimmable LED Lighting Throughout",
        "BCA Bespoke Wiring Harness",
      ],
    },
    {
      category: "Living Area",
      items: [
        "Deluxe Scenic Canvas Pop-top Roof",
        "Rock & Roll Bed with Altro Vinyl Flooring",
        "Premium Full Leather Upholstery (Upgrade)",
        "Custom CNC Manufactured Cabinetry",
        "Vanshades Window Blind Pods (Upgrade)",
        "Blackout Privacy Curtains",
        "Removable Table",
        "Full Thermal Insulation",
      ],
    },
    {
      category: "Kitchen & Utilities",
      items: [
        "Wallis Duo Diesel Heater & Induction Hob (Gas Free)",
        "50L Compressor Refrigerator",
        "Stainless Steel Sink with Mono Tap",
        "20L Fresh Water Container",
        "20L Waste Water Container",
      ],
    },
    {
      category: "Exterior Features",
      items: [
        "LED Outside Door/Awning Light",
        "Privacy Glass",
      ],
    },
  ],
  dimensions: {
    length: "5.4m",
    width: "1.96m",
    height: "1.97m (roof down) / 2.8m (roof up)",
    wheelbase: "Long Wheel Base",
  },
  engine: {
    type: "2.0 dCi",
    power: "150bhp",
    transmission: "6 Speed Manual",
    fuelType: "Diesel",
  },
};

// --- CAMPERVAN 7 (NEW - 2016 Silver Trafic Sport) ---
export const campervan7: Campervan = {
  id: 7,
  slug: "2016-renault-trafic-sport-swb",
  title: "Renault Trafic Campervan - 2016 Sport SWB",
  shortDescription: "Stunning Silver Renault Sport with Black Faux Leather Upholstery, Hacienda Black Cabinetry. Ready to view. Finance Available.",
  fullDescription: `Stunning Silver Renault Sport with Black Faux Leather Upholstery, with a light grey floor and Hacienda Black Cabinetry and black accents comes with all the usual Eryri Adventurer Specifications.

This 2016 Renault Trafic Sport Short Wheel Base has been fully converted at our North Wales workshop to our popular Eryri Adventurer specification.

Features include our premium Hacienda Black cabinetry with black accents throughout, complemented by elegant black faux leather upholstery for a sophisticated, modern look. The light grey floor provides a beautiful contrast.

With 98,000 miles and Euro 6 emissions compliance, this Sport model offers great reliability and fuel efficiency. The 6-speed manual gearbox provides smooth, responsive driving.

Contact us now to arrange a viewing of this beautiful campervan. Finance available.`,
  price: "23,950",
  originalPrice: "26,950",
  saleLabel: "SAVE £3000",
  status: "Available",
  mainImage: "/images/campervans/van-7/kitchen-hob-sink.jpg",
  gallery: [
    "/images/campervans/van-7/kitchen-hob-sink.jpg",
    "/images/campervans/van-7/interior-overview.jpg",
    "/images/campervans/van-7/poptop-raised.jpg",
    "/images/campervans/van-7/dashboard.jpg",
    "/images/campervans/van-7/front-poptop-seaside.jpg",
    "/images/campervans/van-7/rear-poptop-solar.jpg",
    "/images/campervans/van-7/front-cab-seats.jpg",
    "/images/campervans/van-7/rear-quarter-seaside.jpg",
    "/images/campervans/van-7/interior-table.jpg",
    "/images/campervans/van-7/interior-electrics-full.jpg",
    "/images/campervans/van-7/side-exterior.jpg",
    "/images/campervans/van-7/rear-three-quarter.jpg",
    "/images/campervans/van-7/rear-exterior.jpg",
    "/images/campervans/van-7/interior-wide.jpg",
    "/images/campervans/van-7/rear-seats.jpg",
    "/images/campervans/van-7/interior-seating-electrical.jpg",
    "/images/campervans/van-7/kitchen-cabinets.jpg",
    "/images/campervans/van-7/control-panel.jpg",
    "/images/campervans/van-7/power-sockets.jpg",
    "/images/campervans/van-7/under-seat-storage.jpg",
    "/images/campervans/van-7/water-system.jpg",
    "/images/campervans/van-7/sink-tap.jpg",
  ],
  specs: ["98k Miles", "6 Speed Manual", "Euro 6", "4 Berth"],
  features: [
    {
      category: "Vehicle Specifications",
      items: [
        "Base Vehicle: Renault Trafic Sport SWB",
        "Engine: 1.6 dCi",
        "Transmission: 6-speed Manual",
        "Berths: 4 (2 in pop-top, 2 in rock & roll bed)",
        "Euro 6 Emissions",
        "98,000 miles",
      ],
    },
    {
      category: "Interior Finish",
      items: [
        "Black Faux Leather Upholstery",
        "Hacienda Black Cabinetry",
        "Black Accents Throughout",
        "Light Grey Floor",
        "Custom CNC Manufactured Cabinetry",
      ],
    },
    {
      category: "Eryri Adventurer Specifications",
      items: [
        "Pop-Top Roof with bed",
        "Rock and Roll Bed",
        "Lithium Battery System",
        "LED Lighting Throughout",
        "USB Charging Points",
        "Compressor Fridge",
        "Sink with Water System",
      ],
    },
    {
      category: "Kitchen & Utilities",
      items: [
        "Autoterm Diesel Heater",
        "2 Burner Gas Hob",
        "Compliant Vented Metal Gas Locker",
        "Stainless Steel Sink",
        "Fresh & Waste Water Containers",
        "Ample Storage Solutions",
      ],
    },
  ],
  dimensions: {
    length: "4.99m",
    width: "1.96m",
    height: "1.97m (roof down)",
    wheelbase: "Short",
  },
  engine: {
    type: "1.6 dCi",
    power: "120bhp",
    transmission: "6 Speed Manual",
    fuelType: "Diesel",
  },
};

// --- CAMPERVAN 2 ---
export const campervan2: Campervan = {
  id: 2,
  slug: "2020-fiat-talento-tecna-lwb",
  title: "Fiat Talento Campervan - 2020 Tecna LWB",
  shortDescription: "Currently In Build with a black Pop top, 6 privacy windows and is Available to personalise with your choice of colours",
  fullDescription: `This 2020 Fiat Talento Tecna Long Wheel Base is currently being converted at our workshop in North Wales.

The van comes with a striking black pop-top roof and 6 privacy windows as standard. We're offering you the opportunity to personalise this build with your choice of interior colours and finishes.

With only 72,000 miles on the clock and excellent service history, this Talento is the perfect base vehicle for a reliable campervan conversion.

Contact us now to discuss your customisation options and make this van truly yours.`,
  price: "",
  status: "Currently in Build",
  isSold: true,
  mainImage: "/images/campervans/van-2/fiat-talento.webp",
  gallery: [
    "/images/campervans/van-2/fiat-talento.webp",
  ],
  specs: ["72k Miles", "6 Speed Manual", "Euro 6", "2 - 4 Berth"],
  features: [
    {
      category: "Living Area",
      items: [
        "Rock and Roll Bed",
        "Black Pop-Top Roof",
        "6 Privacy Windows",
        "LED lighting",
        "Leisure battery",
        "Customisable interior colours",
      ],
    },
    {
      category: "Kitchen",
      items: [
        "Wallis Duo Diesel induction hob/Heater",
        "Sink with pump tap",
        "Compressor fridge",
        "Storage solutions",
      ],
    },
    {
      category: "Customisation Available",
      items: [
        "Choice of upholstery colours",
        "Wood finish options",
        "Additional storage upgrades",
        "Solar panel options",
      ],
    },
  ],
  dimensions: {
    length: "5.0m",
    width: "1.96m",
    height: "1.97m (roof down)",
    wheelbase: "Long",
  },
  engine: {
    type: "1.6 MultiJet",
    power: "145bhp",
    transmission: "6 Speed Manual",
    fuelType: "Diesel",
  },
};

// --- CAMPERVAN 3 ---
export const campervan3: Campervan = {
  id: 3,
  slug: "2021-renault-trafic-sport-swb",
  title: "Renault Trafic Campervan - 2021 New Shape Sport SWB",
  shortDescription: "Stunning 2021 New Shape Renault Trafic Sport with Grey Metallic finish, Black Quilted Faux Leather Upholstery, Silver Metallic Cabinetry, Pop-Top Roof, Solar Panel, Keyless Entry. Ready to view. Finance Available.",
  fullDescription: `This stunning 2021 New Shape Renault Trafic Sport Short Wheel Base has been fully converted at our North Wales workshop to our popular Eryri Adventurer specification.

Finished in gorgeous Oyster Grey metallic paint with the new shape front grille and LED headlights, this Sport model looks absolutely stunning. Inside you'll find premium black quilted faux leather upholstery throughout, complemented by sleek silver metallic cabinetry with silver accents.

The conversion features our signature black pop-top roof providing a second double bed upstairs, 6 privacy windows with matching curtains, and all the creature comforts you need for extended adventures. The keyless card entry system adds convenience and security.

With 83,000 miles and service history, this Sport model comes with enhanced specification including upgraded alloy wheels and sports styling. The 2.0 dCi 150bhp engine provides plenty of power while remaining economical.

Features include Autoterm diesel heater, 2 burner gas hob with sink, Alpicool compressor fridge, Victron electrical system with solar panel, LED lighting throughout with control panel, rock and roll bed, and ample storage solutions.

Contact us now to arrange a viewing of this beautiful campervan. Finance available.`,
  price: "32,950",
  status: "Available",
  mainImage: "/images/campervans/van-3/exterior-front-side.jpg",
  gallery: [
    "/images/campervans/van-3/exterior-front-side.jpg",
    "/images/campervans/van-3/exterior-front-poptop.jpg",
    "/images/campervans/van-3/exterior-poptop-side.jpg",
    "/images/campervans/van-3/exterior-rear-poptop.jpg",
    "/images/campervans/van-3/exterior-rear-side.jpg",
    "/images/campervans/van-3/bonnet-decal.jpg",
    "/images/campervans/van-3/interior-overview.jpg",
    "/images/campervans/van-3/interior-kitchen-wide.jpg",
    "/images/campervans/van-3/interior-bed.jpg",
    "/images/campervans/van-3/kitchen-hob.jpg",
    "/images/campervans/van-3/fridge.jpg",
    "/images/campervans/van-3/control-panel.jpg",
    "/images/campervans/van-3/electrical-panel.jpg",
    "/images/campervans/van-3/dashboard.jpg",
    "/images/campervans/van-3/front-seats.jpg",
    "/images/campervans/van-3/rear-doors-open.jpg",
    "/images/campervans/van-3/solar-panel.jpg",
  ],
  specs: ["83k Miles", "6 Speed Manual", "Euro 6", "4 Berth", "Solar Panel", "Keyless Entry"],
  features: [
    {
      category: "Vehicle Specifications",
      items: [
        "Base Vehicle: Renault Trafic Sport SWB",
        "Engine: 2.0 dCi (150bhp)",
        "Transmission: 6-speed Manual",
        "Berths: 4 (2 in pop-top, 2 in rock & roll bed)",
        "Euro 6 Emissions",
        "83,000 miles",
        "New Shape 2021 Model",
        "Service History",
        "Keyless Card Entry",
      ],
    },
    {
      category: "Interior Finish",
      items: [
        "Black Quilted Faux Leather Upholstery",
        "Silver Metallic Cabinetry with Silver Accents",
        "Grey Vinyl Floor",
        "Custom CNC Manufactured Cabinetry",
        "6 Privacy Windows with Curtains",
      ],
    },
    {
      category: "Electrical System",
      items: [
        "Victron SmartSolar MPPT Controller",
        "Victron Orion DC-DC Charger",
        "Rooftop Solar Panel",
        "LED Lighting Throughout",
        "Digital Control Panel",
        "USB Charging Points",
        "12V Sockets",
      ],
    },
    {
      category: "Living Area",
      items: [
        "Black Pop-Top Roof with Double Bed",
        "Rock and Roll Bed",
        "LED Ambient Lighting",
        "Blackout Curtains",
        "Ample Storage Solutions",
      ],
    },
    {
      category: "Kitchen & Utilities",
      items: [
        "Autoterm Diesel Heater",
        "2 Burner Gas Hob with Glass Lids",
        "Stainless Steel Sink",
        "Alpicool Compressor Fridge",
        "Compliant Vented Gas Locker",
        "Fresh & Waste Water Containers",
      ],
    },
    {
      category: "Exterior Features",
      items: [
        "Oyster Grey Metallic Paint",
        "Sport Alloy Wheels",
        "Privacy Glass",
        "Eryri Adventurer Decals",
        "Solar Panel on Pop-Top",
      ],
    },
  ],
  dimensions: {
    length: "4.99m",
    width: "1.96m",
    height: "1.97m (roof down)",
    wheelbase: "Short",
  },
  engine: {
    type: "2.0 dCi",
    power: "150bhp",
    transmission: "6 Speed Manual",
    fuelType: "Diesel",
  },
};

// --- CAMPERVAN 4 ---
export const campervan4: Campervan = {
  id: 4,
  slug: "2019-renault-trafic-swb",
  title: "Renault Trafic Campervan - 2019 SWB",
  shortDescription: "Brand New Hilltop Campers Conversion, Low Mileage. This vehicle has now been sold.",
  fullDescription: `This 2019 Renault Trafic Short Wheel Base was fully converted by Hilltop Campers to our high specification.

With 89,000 miles and a brand new conversion, this campervan represented excellent value for money. The compact SWB design is perfect for couples who want easy manoeuvrability without compromising on comfort.

This vehicle has now been sold but we have similar vehicles available. Contact us to discuss your requirements.`,
  price: "",
  status: "Sold",
  mainImage: "/images/campervans/van-4/trafic-swb.jpg",
  gallery: [
    "/images/campervans/van-4/trafic-swb.jpg",
    "/images/campervans/van-4/interior.jpg",
    "/images/campervans/van-4/interior-window.jpg",
  ],
  specs: ["89k Miles", "6 Speed Manual", "Euro 6", "4 Berth"],
  features: [
    {
      category: "Living Area",
      items: [
        "Rock and Roll Bed",
        "Pop-Top Roof with bed",
        "LED lighting throughout",
        "USB charging points",
        "Leisure battery",
        "12v/240v electrics",
      ],
    },
    {
      category: "Kitchen",
      items: [
        "Wallis Duo Diesel induction hob/Heater",
        "Sink with running water",
        "Compressor fridge",
        "Plenty of storage",
      ],
    },
    {
      category: "Included",
      items: [
        "Gas certification",
        "Electrical certification",
        "12 month warranty on conversion",
        "Full handover",
      ],
    },
  ],
  dimensions: {
    length: "4.99m",
    width: "1.96m",
    height: "1.97m (roof down)",
    wheelbase: "Short",
  },
  engine: {
    type: "1.6 dCi",
    power: "125bhp",
    transmission: "6 Speed Manual",
    fuelType: "Diesel",
  },
};

// --- CAMPERVAN 5 ---
export const campervan5: Campervan = {
  id: 5,
  slug: "2026-renault-trafic-sport-lwb",
  title: "Renault Trafic Campervan - 2026 Sport LWB",
  shortDescription: "Currently being built to order. Pop Top, Full Hilltop Adventurer Spec.",
  fullDescription: `This 2026 Renault Trafic Sport Long Wheel Base was built to order with our full Hilltop Adventurer specification.

This vehicle has now been sold but we can build you something similar. Contact us to discuss your requirements.`,
  price: "",
  status: "Sold",
  mainImage: "/images/campervans/van-5/trafic-sport-lwb.jpg",
  gallery: [
    "/images/campervans/van-5/trafic-sport-lwb.jpg",
  ],
  specs: ["New Build", "EDC Auto", "Euro 6", "4 Berth"],
  features: [
    {
      category: "Specification",
      items: [
        "Full Hilltop Adventurer Spec",
        "Pop Top Roof",
        "4 Berth",
        "Premium finish throughout",
      ],
    },
  ],
  engine: {
    type: "2.0 dCi",
    power: "170bhp",
    transmission: "EDC Auto",
    fuelType: "Diesel",
  },
};

// --- CAMPERVAN 6 ---
export const campervan6: Campervan = {
  id: 6,
  slug: "2016-renault-trafic-120bhp",
  title: "Renault Trafic Campervan - 2016 120bhp",
  shortDescription: "New Conversion, Euro 6, Excellent Condition Throughout.",
  fullDescription: `This 2016 Renault Trafic 120bhp has received a brand new Hilltop Campers conversion and is in excellent condition throughout.

With 63,000 miles and full service history, this campervan is a fantastic entry point into campervan ownership.

This vehicle has now been sold but we have similar vehicles available. Contact us to discuss your requirements.`,
  price: "",
  status: "Sold",
  mainImage: "/images/campervans/van-6/trafic-2016.jpg",
  gallery: [
    "/images/campervans/van-6/trafic-2016.jpg",
  ],
  specs: ["63k Miles", "6 Speed", "Euro 6", "4 Berth"],
  features: [
    {
      category: "Specification",
      items: [
        "New Conversion",
        "Euro 6",
        "4 Berth",
        "Excellent condition",
      ],
    },
  ],
  engine: {
    type: "1.6 dCi",
    power: "120bhp",
    transmission: "6 Speed Manual",
    fuelType: "Diesel",
  },
};

// ============================================
// CAMPERVANS LIST
// ============================================
export const campervans: Campervan[] = [
  campervan1,
  campervan7,
  campervan2,
  campervan3,
  campervan4,
  campervan5,
  campervan6,
];

// Helper function to get a campervan by ID
export function getCampervanById(id: number): Campervan | undefined {
  return campervans.find((van) => van.id === id);
}

// Helper function to get a campervan by slug
export function getCampervanBySlug(slug: string): Campervan | undefined {
  return campervans.find((van) => van.slug === slug);
}

// Get all campervan slugs for static generation
export function getAllCampervanSlugs(): string[] {
  return campervans.map((van) => van.slug);
}
