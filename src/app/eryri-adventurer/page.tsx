"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import YouTubeFacade from "@/components/YouTubeFacade";
import {
  Check,
  ArrowUpRight,
  Battery,
  Flame,
  Zap,
  Shield,
  Bed,
  Users,
  Ruler,
  Gauge,
  Sun,
  Snowflake,
  Utensils,
  Droplets,
  Play,
  X,
  ChevronLeft,
  ChevronRight,
  Camera,
  Download,
} from "lucide-react";


// Gallery images for the Eryri Adventurer
const galleryImages = [
  {
    src: "/images/eryri-adventurer/front-headon.jpg",
    alt: "Eryri Adventurer Renault Trafic Campervan – Front head‑on view",
    caption: "Front Head‑on",
  },
  {
    src: "/images/eryri-adventurer/front-three-quarter.jpg",
    alt: "Eryri Adventurer Renault Trafic Campervan – Front three‑quarter view",
    caption: "Front Three‑quarter",
  },
  {
    src: "/images/eryri-adventurer/side-three-quarter.jpg",
    alt: "Eryri Adventurer Renault Trafic Campervan – Side view",
    caption: "Side View",
  },
  {
    src: "/images/eryri-adventurer/poptop-raised.jpg",
    alt: "Eryri Adventurer Renault Trafic Campervan – Pop‑top roof raised",
    caption: "Pop‑top Raised",
  },
  {
    src: "/images/eryri-adventurer/rear-three-quarter.jpg",
    alt: "Eryri Adventurer Renault Trafic Campervan – Rear three‑quarter view",
    caption: "Rear Three‑quarter",
  },
];

// Note: Metadata is handled via generateMetadata in a separate file or layout

const keyFeatures = [
  {
    icon: "battery",
    title: "Lithium Power System",
    description:
      "Advanced lithium battery system with Victron products for reliable off-grid power",
  },
  {
    icon: "flame",
    title: "Autoterm Heating",
    description: "Reliable Autoterm Diesel 2KW heater with Double Gas Hob for cooking",
  },
  {
    icon: "zap",
    title: "BCA Wiring",
    description:
      "Bespoke wiring harness and controls by industry-leading BCA Group",
  },
  {
    icon: "shield",
    title: "Renault Platform",
    description:
      "Built on the award-winning Renault Trafic platform with manufacturer warranty",
  },
];

const specifications = {
  vehicle: [
    { label: "Base Vehicle", value: "Renault Trafic SWB/LWB" },
    { label: "Engine", value: "2.0 dCi (170bhp Auto)" },
    { label: "Transmission", value: "6-speed Manual or EDC Auto" },
    { label: "Berths", value: "4 (2 in pop-top, 2 in rock & roll bed)" },
    { label: "Seats", value: "4 with seatbelts" },
    { label: "Length", value: "5.4m" },
    { label: "Height (roof down)", value: "1.97m" },
    { label: "Height (roof up)", value: "2.8m" },
  ],
  electrical: [
    { label: "Leisure Battery", value: "Lithium 105Ah Upgradable" },
    { label: "Battery Management", value: "Victron Smart BMS" },
    { label: "Inverter", value: "Non Standard Upgradable" },
    { label: "Solar Panel", value: "200W Panel Included" },
    { label: "Shore Power", value: "230V Hook-up with charger" },
    { label: "USB Ports", value: "4x USB-A, 2x USB-C" },
    { label: "12V Sockets", value: "2" },
    { label: "LED Lighting", value: "Dimmable throughout" },
  ],
  living: [
    { label: "Heating", value: "Autoterm Diesel 2KW" },
    { label: "Cooking", value: "Double Gas Hob" },
    { label: "Refrigerator", value: "50L Compressor Fridge" },
    { label: "Fresh Water", value: "20L Container" },
    { label: "Waste Water", value: "20L Container" },
    { label: "Sink", value: "Stainless Steel with Mono Tap" },
    { label: "Pop-top", value: "Deluxe Scenic Canvas" },
    { label: "Insulation", value: "Full thermal insulation" },
  ],
};

const includedFeatures = [
  "Full thermal insulation",
  "Deluxe Scenic Canvas pop-top roof",
  "Rock & roll bed with Altro vinyl flooring",
  "Custom cabinetry (CNC manufactured)",
  "50L compressor refrigerator",
  "Stainless steel sink with Mono Tap",
  "20L fresh water container",
  "20L waste water container",
  "Autoterm Diesel 2KW heater & Double Gas Hob",
  "Lithium 105Ah battery system (Upgradable)",
  "200W rooftop solar panel",
  "Victron battery management",
  "BCA bespoke wiring harness",
  "Dimmable LED lighting throughout",
  "Blackout Privacy curtains",
  "LED Outside Door/Awning Light",
  "4x USB-A & 2x USB-C charging ports",
  "230V shore power hook-up",
  "Swivel Double Seat",
  "Removable table",
  "Premium Faux Leather Upholstery",
];

const optionalExtras = [
  { name: "Wallis Duo Hob & Heater Upgrade" },
  { name: "Vanshades™ Window Blind Pods" },
  { name: "Extra Battery Power" },
  { name: "Victron Inverters" },
  { name: "Underslung Water Tank" },
  { name: "Premium Roof Canvas" },
  { name: "Premium Leather Upholstery" },
  { name: "Outdoor Shower" },
  { name: "Awning Rail" },
  { name: "Fiamma F45s Awning" },
  { name: "Reversing Camera" },
  { name: "Bike Rack (2 bikes)" },
  { name: "Drive-away Awning" },
];

export default function EryriAdventurerPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length
    );
  };

  return (
    <div className="pt-[104px]">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1c20] via-[#25272c] to-[#1a1c20]" />
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%237cb342' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-primary text-black px-4 py-1.5 text-sm font-bold uppercase rounded">
                New Model
              </span>
              <span className="text-primary text-sm font-semibold">
                State of the Art 4 Berth Campervan
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4">
              <span className="text-primary">RENAULT TRAFIC CAMPERVAN</span>
              <br />
              <span className="text-white">THE </span>
              <span className="text-primary">ERYRI</span>
              <span className="text-white"> ADVENTURER</span>
            </h1>

            <p className="text-xl text-primary font-semibold mb-4">
              Named after Eryri (Snowdonia) National Park - The heart of Welsh adventure
            </p>

            <p className="text-gray-300 text-lg mb-8 max-w-2xl">
              State of the art 4 berth Renault Trafic Campervan, built on the award-winning Renault Trafic platform.
              Features lithium battery power and Victron products combined with our own bespoke wiring
              harness and controls supplied by industry-leading BCA Group.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact?subject=Eryri%20Adventurer"
                className="inline-flex items-center gap-2 bg-primary text-black px-8 py-3 uppercase font-bold hover:bg-primary/90 transition-colors rounded"
              >
                Enquire Now
                <ArrowUpRight size={18} />
              </Link>
              <Link
                href="tel:07869169826"
                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 uppercase font-bold hover:border-primary hover:text-primary transition-colors rounded"
              >
                Call 07869 169826
              </Link>
              <Link
                href="/brochure/eryri-adventurer"
                className="inline-flex items-center gap-2 border-2 border-primary text-primary px-8 py-3 uppercase font-bold hover:bg-primary hover:text-black transition-colors rounded"
              >
                <Download size={18} />
                Conversion Brochure
              </Link>
              <Link
                href="https://cdn.group.renault.com/ren/gb/transversal-assets/brochures/van-ebrochures/TRAFIC-eBrochure.pdf.asset.pdf/2dcca0a7a9.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 uppercase font-bold hover:border-primary hover:text-primary transition-colors rounded"
              >
                <Download size={18} />
                New Renault Trafic Brochure
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Green Stripe */}
      <div className="yellow-stripe" />

      {/* Image Gallery Section */}
      <section className="py-16 bg-[#1a1c20]">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Camera className="w-8 h-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold text-center">
              <span className="text-primary">GALLERY</span>
            </h2>
          </div>
          <p className="text-gray-400 text-center mb-10 max-w-2xl mx-auto">
            Explore the Eryri Adventurer from every angle - photographed in the stunning landscapes of Snowdonia
          </p>

          {/* Main Gallery Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {galleryImages.map((image, index) => (
              <button
                key={index}
                onClick={() => openLightbox(index)}
                className="group relative aspect-[4/3] overflow-hidden rounded-lg border-2 border-transparent hover:border-primary transition-all duration-300"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 25vw"
                  unoptimized
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 rounded-full bg-primary/90 flex items-center justify-center">
                      <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                </div>
                {/* Caption badge removed */}
              </button>
            ))}
          </div>

          <p className="text-center text-gray-400 text-sm mt-6">
            Click any image to view full size
          </p>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-primary transition-colors z-10"
          >
            <X size={32} />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-primary transition-colors z-10 p-2"
          >
            <ChevronLeft size={48} />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-primary transition-colors z-10 p-2"
          >
            <ChevronRight size={48} />
          </button>

          <div className="relative w-full h-full max-w-5xl max-h-[80vh] mx-4">
            <Image
              src={galleryImages[currentImageIndex].src}
              alt={galleryImages[currentImageIndex].alt}
              fill
              className="object-contain"
              sizes="100vw"
              unoptimized
            />
          </div>

          <div className="absolute bottom-8 left-0 right-0 text-center">
            <p className="text-gray-400 text-sm">
              {currentImageIndex + 1} / {galleryImages.length}
            </p>
          </div>
        </div>
      )}

      {/* Video Section */}
      <section className="py-16 bg-[#25272c]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            SEE THE <span className="text-primary">ERYRI ADVENTURER</span> IN ACTION
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-video bg-black rounded-lg overflow-hidden shadow-2xl">
              <YouTubeFacade
                videoId="K1FX-KHSO4Y"
                title="Eryri Adventurer Campervan"
              />
            </div>
          </div>

          {/* Enquire Now CTA */}
          <div className="text-center mt-10">
            <Link
              href="/contact?subject=Eryri%20Adventurer%20Enquiry"
              className="inline-flex items-center gap-2 bg-primary text-black px-10 py-4 uppercase font-bold text-lg hover:bg-primary/90 transition-colors rounded"
            >
              Enquire Now
              <ArrowUpRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-[#1a1c20]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            <span className="text-primary">KEY</span> FEATURES
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            The Eryri Adventurer combines cutting-edge technology with premium craftsmanship
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-[#25272c] rounded-lg p-6 border border-gray-700 hover:border-primary transition-colors"
              >
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  {feature.icon === "battery" && (
                    <Battery className="w-7 h-7 text-primary" />
                  )}
                  {feature.icon === "flame" && (
                    <Flame className="w-7 h-7 text-primary" />
                  )}
                  {feature.icon === "zap" && (
                    <Zap className="w-7 h-7 text-primary" />
                  )}
                  {feature.icon === "shield" && (
                    <Shield className="w-7 h-7 text-primary" />
                  )}
                </div>
                <h3 className="text-white font-bold text-lg mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gas Free Highlight */}
      <section className="py-16 bg-gradient-to-r from-primary/20 via-[#25272c] to-primary/20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <Sun className="w-10 h-10 text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              <span className="text-primary">SOLAR POWERED</span> ADVENTURE
            </h2>
            <Sun className="w-10 h-10 text-primary" />
          </div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            With 200W solar panel included as standard, combined with Autoterm diesel heating,
            you can enjoy off-grid adventures with reliable power. Upgrade to the Wallis Duo
            for a completely gas-free experience.
          </p>
        </div>
      </section>

      {/* Specifications */}
      <section id="specifications" className="py-20 bg-[#25272c] scroll-mt-32">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            FULL <span className="text-primary">SPECIFICATIONS</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Vehicle Specs */}
            <div className="bg-[#1a1c20] rounded-lg p-6 border border-gray-700">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <Gauge className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white">Vehicle</h3>
              </div>
              <ul className="space-y-3">
                {specifications.vehicle.map((spec, index) => (
                  <li
                    key={index}
                    className="flex justify-between text-sm border-b border-gray-700 pb-2"
                  >
                    <span className="text-gray-400">{spec.label}</span>
                    <span className="text-white font-medium">{spec.value}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Electrical Specs */}
            <div className="bg-[#1a1c20] rounded-lg p-6 border border-gray-700">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white">Electrical</h3>
              </div>
              <ul className="space-y-3">
                {specifications.electrical.map((spec, index) => (
                  <li
                    key={index}
                    className="flex justify-between text-sm border-b border-gray-700 pb-2"
                  >
                    <span className="text-gray-400">{spec.label}</span>
                    <span className="text-white font-medium">{spec.value}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Living Specs */}
            <div className="bg-[#1a1c20] rounded-lg p-6 border border-gray-700">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <Bed className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white">Living</h3>
              </div>
              <ul className="space-y-3">
                {specifications.living.map((spec, index) => (
                  <li
                    key={index}
                    className="flex justify-between text-sm border-b border-gray-700 pb-2"
                  >
                    <span className="text-gray-400">{spec.label}</span>
                    <span className="text-white font-medium">{spec.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-[#1a1c20]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            WHAT'S <span className="text-primary">INCLUDED</span>
          </h2>
          <p className="text-gray-400 text-center mb-12">
            Everything you need for your adventures, included as standard
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {includedFeatures.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-[#25272c] rounded-lg p-4"
              >
                <Check className="text-primary shrink-0" size={20} />
                <span className="text-gray-300 text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Optional Extras */}
      <section className="py-20 bg-[#25272c]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            OPTIONAL <span className="text-primary">EXTRAS</span>
          </h2>
          <p className="text-gray-400 text-center mb-12">
            Personalise your Eryri Adventurer with these upgrades
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {optionalExtras.map((extra, index) => (
              <div
                key={index}
                className="bg-[#1a1c20] rounded-lg p-5 border border-gray-700 hover:border-primary transition-colors flex items-center justify-center text-center"
              >
                <p className="text-white font-bold">{extra.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-br from-[#1a1c20] to-[#25272c]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-[#25272c] rounded-2xl p-8 md:p-12 border border-primary/30 shadow-2xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                START YOUR <span className="text-primary">ADVENTURE</span>
              </h2>
              <p className="text-gray-400">
                The Eryri Adventurer is available to order now
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="text-center p-6 bg-[#1a1c20] rounded-lg">
                <p className="text-gray-400 mb-2">Starting Price</p>
                <p className="text-4xl font-bold text-white mb-2">£49,950 SWB</p>
                <p className="text-sm text-gray-400">Standard specification</p>
              </div>
              <div className="text-center p-6 bg-[#1a1c20] rounded-lg border-2 border-primary">
                <p className="text-gray-400 mb-2">As Advertised</p>
                <p className="text-4xl font-bold text-primary mb-2">£56,950</p>
                <p className="text-sm text-gray-400">With extras included</p>
              </div>
            </div>

            <div className="text-center">
              <p className="text-gray-400 mb-6">
                Finance options available. Part exchange welcome.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact?subject=Eryri%20Adventurer%20Enquiry"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-black px-8 py-4 uppercase font-bold hover:bg-primary/90 transition-colors rounded"
                >
                  Enquire Now
                  <ArrowUpRight size={18} />
                </Link>
                <Link
                  href="tel:07869169826"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 uppercase font-bold hover:border-primary hover:text-primary transition-colors rounded"
                >
                  Call 07869 169826
                </Link>
              </div>
              <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/brochure/eryri-adventurer"
                  className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-8 py-4 uppercase font-bold hover:bg-primary hover:text-black transition-colors rounded"
                >
                  <Download size={18} />
                  Conversion Brochure
                </Link>
                <Link
                  href="https://cdn.group.renault.com/ren/gb/transversal-assets/brochures/van-ebrochures/TRAFIC-eBrochure.pdf.asset.pdf/2dcca0a7a9.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 uppercase font-bold hover:border-primary hover:text-primary transition-colors rounded"
                >
                  <Download size={18} />
                  New Renault Trafic Brochure
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
