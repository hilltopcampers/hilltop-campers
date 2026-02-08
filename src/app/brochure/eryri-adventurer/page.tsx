"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Download, ArrowLeft, Check, Battery, Flame, Zap, Shield, Sun, Bed, Gauge, Phone, Mail, MapPin } from "lucide-react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const specifications = {
  vehicle: [
    { label: "Base Vehicle", value: "Renault Trafic SWB/LWB" },
    { label: "Engine", value: "2.0 dCi (150bhp)" },
    { label: "Transmission", value: "6-speed Manual or EDC Auto" },
    { label: "Berths", value: "4 (2 in pop-top, 2 in rock & roll bed)" },
    { label: "Seats", value: "5 Belted Seats" },
    { label: "Length", value: "5.4m" },
    { label: "Height (roof down)", value: "1.97m" },
    { label: "Height (roof up)", value: "2.8m" },
  ],
  electrical: [
    { label: "Leisure Battery", value: "Lithium 105Ah Upgradable" },
    { label: "Battery Management", value: "Victron Smart BMS" },
    { label: "Solar Panel", value: "200W Panel Included" },
    { label: "Shore Power", value: "230V Hook-up" },
    { label: "USB Ports", value: "4x USB-A, 2x USB-C" },
    { label: "LED Lighting", value: "Dimmable throughout" },
  ],
  living: [
    { label: "Heating", value: "Autoterm Diesel 2KW" },
    { label: "Cooking", value: "Double Gas Hob" },
    { label: "Refrigerator", value: "50L Compressor Fridge" },
    { label: "Fresh Water", value: "20L Container" },
    { label: "Waste Water", value: "20L Container" },
    { label: "Pop-top", value: "Deluxe Scenic Canvas" },
  ],
};

const includedFeatures = [
  "Full thermal insulation",
  "Deluxe Scenic Canvas pop-top roof",
  "Rock & roll bed with Altro flooring",
  "Custom CNC manufactured cabinetry",
  "50L compressor refrigerator",
  "Stainless steel sink with Mono Tap",
  "Autoterm Diesel 2KW heater",
  "Lithium 105Ah battery system",
  "200W rooftop solar panel",
  "Victron battery management",
  "BCA bespoke wiring harness",
  "Dimmable LED lighting",
  "Blackout Privacy curtains",
  "LED Outside Door Light",
  "230V shore power hook-up",
  "Swivel Double Seat",
  "Premium Faux Leather Upholstery",
  "Removable table",
];

const optionalUpgrades = [
  "Wallis Duo Hob & Heater (Gas Free)",
  "Vanshades Window Blind Pods",
  "Extra Battery Power",
  "Victron Inverters",
  "Premium Leather Upholstery",
  "Fiamma F45s Awning",
  "Reversing Camera",
  "Bike Rack",
];

// Gallery images - exterior and interior
const galleryImages = {
  exterior: [
    "/images/eryri-adventurer/front-headon.jpg",
    "/images/eryri-adventurer/side-three-quarter.jpg",
    "/images/eryri-adventurer/poptop-raised.jpg",
    "/images/eryri-adventurer/rear-three-quarter.jpg",
  ],
  interior: [
    "/images/campervans/van-1/image-1.jpeg",
    "/images/campervans/van-1/image-2.jpeg",
    "/images/campervans/van-1/image-3.jpeg",
  ],
};

export default function EryriAdventurerBrochure() {
  const brochureRef = useRef<HTMLDivElement>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const generatePDF = async () => {
    if (!brochureRef.current) return;

    setIsGenerating(true);

    try {
      const element = brochureRef.current;

      // Create canvas from the element
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: "#1a1c20",
        logging: false,
        windowWidth: 1200,
        windowHeight: element.scrollHeight,
      });

      const imgData = canvas.toDataURL("image/jpeg", 0.95);

      // A4 dimensions in mm
      const pdfWidth = 210;
      const pdfHeight = 297;

      // Calculate the number of pages needed
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;

      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });

      // Calculate dimensions to fit width while maintaining aspect ratio
      const contentWidth = pdfWidth;
      const contentHeight = (imgHeight * pdfWidth) / imgWidth;

      // Calculate how many pages we need
      const totalPages = Math.ceil(contentHeight / pdfHeight);

      for (let page = 0; page < totalPages; page++) {
        if (page > 0) {
          pdf.addPage();
        }

        // Calculate the y offset for this page
        const yOffset = -(page * pdfHeight);

        pdf.addImage(imgData, "JPEG", 0, yOffset, contentWidth, contentHeight);
      }

      pdf.save("Eryri-Adventurer-Brochure.pdf");
    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("Error generating PDF. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#1a1c20]">
      {/* Controls Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#25272c] border-b border-gray-700 px-4 py-3">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between">
          <Link
            href="/eryri-adventurer"
            className="flex items-center gap-2 text-gray-300 hover:text-primary transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back to Eryri Adventurer</span>
          </Link>
          <button
            onClick={generatePDF}
            disabled={isGenerating}
            className="flex items-center gap-2 bg-primary text-black px-6 py-2 rounded font-bold uppercase hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Download size={20} />
            {isGenerating ? "Generating PDF..." : "Download PDF"}
          </button>
        </div>
      </div>

      {/* Brochure Content */}
      <div className="pt-20 pb-8 px-4">
        <div
          ref={brochureRef}
          className="max-w-[1200px] mx-auto bg-[#1a1c20] text-white border-4 border-white"
        >
          {/* Page 1: Hero Cover with Full Background Image */}
          <div className="relative min-h-[800px] overflow-hidden rounded-t-2xl">
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src="/images/eryri-adventurer/front-three-quarter.jpg"
                alt="Eryri Adventurer"
                fill
                className="object-cover object-center"
                priority
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 p-10">
              {/* Logo Header */}
              <div className="flex items-center justify-between mb-16">
                <div className="flex items-center gap-3">
                  <Image
                    src="/images/hilltop-logo.png"
                    alt="Hilltop Campers Logo"
                    width={40}
                    height={40}
                    className="object-contain"
                    unoptimized
                  />
                  <div>
                    <h2 className="text-lg font-bold">
                      <span className="text-primary">HILLTOP</span> CAMPERS
                    </h2>
                    <p className="text-xs text-gray-300">Camper van conversion specialists</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-primary text-sm font-semibold">2025 MODEL BROCHURE</p>
                </div>
              </div>

              {/* Main Title */}
              <div className="mt-24 max-w-xl">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-primary text-black px-4 py-1.5 text-sm font-bold uppercase rounded">
                    Flagship Model
                  </span>
                  <span className="text-primary text-sm font-semibold">
                    State of the Art 4 Berth
                  </span>
                </div>

                <h1 className="text-5xl md:text-6xl font-black mb-2 tracking-tight leading-tight">
                  <span className="text-white">THE </span>
                  <span className="text-primary">ERYRI</span>
                  <br />
                  <span className="text-white">ADVENTURER</span>
                </h1>

                <p className="text-primary font-semibold mb-4">
                  Named after Eryri (Snowdonia) National Park
                </p>

                <p className="text-gray-200 leading-relaxed mb-8 max-w-md">
                  State of the art 4 berth campervan built on the award-winning Renault Trafic platform. Features lithium battery power, 200W solar panel, and Victron products combined with our bespoke BCA wiring harness.
                </p>

                {/* Price Badge */}
                <div className="inline-block">
                  <div className="bg-[#25272c]/90 backdrop-blur-sm border-2 border-primary rounded-xl p-5">
                    <p className="text-gray-400 text-sm mb-1">Starting From</p>
                    <p className="text-3xl font-black text-white">£49,950 <span className="text-lg font-normal text-gray-400">SWB</span></p>
                    <p className="text-primary text-sm font-semibold mt-1">Finance Available</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Features Section */}
          <div className="bg-[#1a1c20] p-10">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-black mb-2">
                <span className="text-primary">KEY</span> FEATURES
              </h2>
              <p className="text-gray-400">
                Cutting-edge technology meets premium craftsmanship
              </p>
            </div>

            <div className="grid grid-cols-4 gap-4 mb-8">
              {[
                { icon: Battery, title: "LITHIUM POWER", desc: "Advanced lithium battery system with Victron products" },
                { icon: Flame, title: "AUTOTERM HEATING", desc: "Reliable 2KW diesel heater for all conditions" },
                { icon: Zap, title: "BCA WIRING", desc: "Bespoke harness by industry-leading BCA Group" },
                { icon: Shield, title: "RENAULT PLATFORM", desc: "Built on the award-winning Trafic platform" },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-[#25272c] rounded-xl p-5 border border-gray-700 text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-[#1a1c20] border border-gray-600 flex items-center justify-center mx-auto mb-3">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-white font-bold text-sm mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-xs">{feature.desc}</p>
                </div>
              ))}
            </div>

            {/* Solar Highlight */}
            <div className="bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-xl p-6 text-center border border-primary/30">
              <div className="flex items-center justify-center gap-3 mb-2">
                <Sun className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold text-white">
                  <span className="text-primary">SOLAR POWERED</span> ADVENTURE
                </h3>
                <Sun className="w-6 h-6 text-primary" />
              </div>
              <p className="text-gray-300 text-sm max-w-2xl mx-auto">
                With 200W solar panel included as standard, combined with Autoterm diesel heating,
                enjoy true off-grid freedom. Upgrade to the Wallis Duo for a completely gas-free experience.
              </p>
            </div>
          </div>

          {/* Gallery Section */}
          <div className="bg-[#25272c] p-10">
            <h2 className="text-3xl font-black mb-6 text-center">
              <span className="text-primary">PHOTO</span> GALLERY
            </h2>

            {/* Exterior Photos */}
            <h3 className="text-lg font-bold mb-3 text-primary">Exterior Views</h3>
            <div className="grid grid-cols-4 gap-3 mb-6">
              {galleryImages.exterior.map((src, index) => (
                <div key={index} className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <Image src={src} alt={`Exterior ${index + 1}`} fill className="object-cover" unoptimized />
                </div>
              ))}
            </div>

            {/* Interior Photos */}
            <h3 className="text-lg font-bold mb-3 text-primary">Interior Views</h3>
            <div className="grid grid-cols-3 gap-3">
              {galleryImages.interior.map((src, index) => (
                <div key={index} className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <Image src={src} alt={`Interior ${index + 1}`} fill className="object-cover" unoptimized />
                </div>
              ))}
            </div>
          </div>

          {/* Specifications Section */}
          <div className="bg-[#1a1c20] p-10">
            <h2 className="text-3xl font-black mb-8 text-center">
              FULL <span className="text-primary">SPECIFICATIONS</span>
            </h2>

            <div className="grid grid-cols-3 gap-6">
              {/* Vehicle */}
              <div className="bg-[#25272c] rounded-xl p-5 border border-gray-700">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <Gauge className="w-4 h-4 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-white">Vehicle</h3>
                </div>
                <ul className="space-y-2">
                  {specifications.vehicle.map((spec, index) => (
                    <li key={index} className="flex justify-between text-xs border-b border-gray-700 pb-1">
                      <span className="text-gray-400">{spec.label}</span>
                      <span className="text-white font-medium text-right ml-2">{spec.value}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Electrical */}
              <div className="bg-[#25272c] rounded-xl p-5 border border-gray-700">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <Zap className="w-4 h-4 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-white">Electrical</h3>
                </div>
                <ul className="space-y-2">
                  {specifications.electrical.map((spec, index) => (
                    <li key={index} className="flex justify-between text-xs border-b border-gray-700 pb-1">
                      <span className="text-gray-400">{spec.label}</span>
                      <span className="text-white font-medium text-right ml-2">{spec.value}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Living */}
              <div className="bg-[#25272c] rounded-xl p-5 border border-gray-700">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <Bed className="w-4 h-4 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-white">Living</h3>
                </div>
                <ul className="space-y-2">
                  {specifications.living.map((spec, index) => (
                    <li key={index} className="flex justify-between text-xs border-b border-gray-700 pb-1">
                      <span className="text-gray-400">{spec.label}</span>
                      <span className="text-white font-medium text-right ml-2">{spec.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* What's Included Section */}
          <div className="bg-[#25272c] p-10">
            <h2 className="text-3xl font-black mb-2 text-center">
              WHAT'S <span className="text-primary">INCLUDED</span>
            </h2>
            <p className="text-gray-400 text-center mb-6 text-sm">Everything you need, included as standard</p>

            <div className="grid grid-cols-3 gap-2 mb-8">
              {includedFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 bg-[#1a1c20] rounded-lg p-3">
                  <Check className="text-primary shrink-0" size={14} />
                  <span className="text-gray-300 text-xs">{feature}</span>
                </div>
              ))}
            </div>

            {/* Optional Upgrades */}
            <div className="bg-[#1a1c20] rounded-xl p-6 border border-primary/30">
              <h3 className="text-xl font-bold mb-4 text-center">
                OPTIONAL <span className="text-primary">UPGRADES</span>
              </h3>
              <div className="grid grid-cols-4 gap-2">
                {optionalUpgrades.map((upgrade, index) => (
                  <div key={index} className="bg-[#25272c] rounded-lg p-3 text-center border border-gray-700">
                    <span className="text-white text-xs font-medium">{upgrade}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Spacer to push Start Your Adventure to page 3 */}
          <div className="bg-[#1a1c20] h-[120px]" />

          {/* Pricing & Contact Section */}
          <div className="bg-[#1a1c20] p-10 rounded-b-2xl">
            <h2 className="text-3xl font-black mb-6 text-center">
              START YOUR <span className="text-primary">ADVENTURE</span>
            </h2>

            {/* Pricing */}
            <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto mb-8">
              <div className="bg-[#25272c] rounded-xl p-6 text-center border border-gray-700">
                <p className="text-gray-400 mb-2">Starting From</p>
                <p className="text-4xl font-black text-white mb-1">£49,950</p>
                <p className="text-primary font-semibold">SWB Standard Spec</p>
              </div>
              <div className="bg-[#25272c] rounded-xl p-6 text-center border-2 border-primary">
                <p className="text-gray-400 mb-2">As Advertised</p>
                <p className="text-4xl font-black text-primary mb-1">£56,995</p>
                <p className="text-white font-semibold">With Premium Extras</p>
              </div>
            </div>

            <p className="text-gray-400 text-center mb-8">
              Finance options available. Part exchange welcome.
            </p>

            {/* Contact Info */}
            <div className="bg-[#25272c] rounded-xl p-6 border border-primary/30 max-w-3xl mx-auto mb-6">
              <h3 className="text-xl font-bold text-center mb-6">
                GET IN <span className="text-primary">TOUCH</span>
              </h3>

              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-2">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-gray-400 text-xs mb-1">Call Us</p>
                  <p className="text-white font-bold">07869 169826</p>
                </div>
                <div>
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-2">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-gray-400 text-xs mb-1">Email Us</p>
                  <p className="text-white font-bold text-sm">hilltopcampers.co.uk@gmail.com</p>
                </div>
                <div>
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-2">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-gray-400 text-xs mb-1">Visit Us</p>
                  <p className="text-white font-bold">Llandudno, North Wales</p>
                </div>
              </div>
            </div>

            {/* Footer with Logo */}
            <div className="text-center pt-4 border-t border-gray-700">
              <div className="flex items-center justify-center gap-3 mb-3">
                <Image
                  src="/images/hilltop-logo.png"
                  alt="Hilltop Campers Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                  unoptimized
                />
                <div className="text-left">
                  <h2 className="text-lg font-bold">
                    <span className="text-primary">Hilltop</span> Campers
                  </h2>
                  <p className="text-xs text-gray-400">Camper van conversion specialists</p>
                </div>
              </div>
              <p className="text-primary font-bold text-lg mb-1">www.hilltopcampers.co.uk</p>
              <p className="text-gray-400 text-sm">
                North Wales Premium Campervan Manufacturer
              </p>
              <p className="text-gray-500 text-xs mt-4">
                © 2025 Hilltop Campers. All rights reserved. Specifications subject to change.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
