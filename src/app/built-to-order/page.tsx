import Link from "next/link";
import Image from "next/image";
import { Check, ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Campervan Conversions | Build Your Own Campervan | From £20,500",
  description:
    "Bespoke campervan conversions built to your specifications. Renault Trafic, Ford Transit Custom & VW Transporter. Choose finishes, features & layout. Conversions from £20,500. Quality craftsmanship in North Wales.",
  keywords: [
    "bespoke campervan conversion UK",
    "custom campervan build",
    "build your own campervan",
    "Renault Trafic conversion cost",
    "Ford Transit Custom campervan conversion",
    "VW Transporter T6 conversion",
    "campervan conversion price UK",
    "campervan conversion near me",
    "convert van to campervan UK",
    "van conversion specialist",
    "campervan builder North Wales",
    "custom campervan interior",
    "CNC campervan furniture",
    "professional van conversion",
    "campervan conversion quote",
    "how much to convert van to campervan",
  ],
  openGraph: {
    title: "Custom Campervan Conversions | Build Your Dream Campervan | Hilltop Campers",
    description:
      "Bespoke Renault Trafic, Ford Transit & VW Transporter campervan conversions from £20,500. Your specifications, our craftsmanship.",
    url: "https://hilltopcampers.co.uk/built-to-order",
    images: [
      {
        url: "https://hilltopcampers.co.uk/images/black_brand_new_trafic.webp",
        width: 1200,
        height: 630,
        alt: "Bespoke Renault Trafic Campervan Conversion - Hilltop Campers",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/built-to-order",
  },
};

const newVanFeatures = [
  "3 Year Vehicle Warranty",
  "Choice of LWB/SWB",
  "Auto or Manual",
  "Choose Your Specs & Colour",
  "Choose Your Conversion",
];

const preOwnedFeatures = [
  "Affordable Price",
  "Under 4 Years Old",
  "Under 50K Miles",
  "Choice of LWB / SWB",
  "Choose Your Conversion",
];

const ownVanFeatures = [
  "Potential Savings on Overall Build",
  "Choose Your Conversion",
];

export default function BuiltToOrderPage() {
  return (
    <div className="pt-[104px]">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/camper_1.jpeg"
            alt="Campervans Built To Order"
            fill
            className="object-cover"
            priority
          />
          <div className="hero-overlay absolute inset-0" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <p className="text-gray-300 text-sm uppercase tracking-widest mb-2">
            Campervans
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8">
            <span className="text-white">BUILT</span>{" "}
            <span className="text-primary">TO ORDER</span>
          </h1>

          <div className="flex flex-col gap-3">
            <Link
              href="#new"
              className="inline-flex items-center gap-2 text-white font-bold uppercase tracking-wide border-b-2 border-white pb-1 hover:border-primary hover:text-primary transition-colors w-fit"
            >
              On A New Van
              <ArrowUpRight size={18} />
            </Link>
            <Link
              href="#pre-owned"
              className="inline-flex items-center gap-2 text-white font-bold uppercase tracking-wide border-b-2 border-white pb-1 hover:border-primary hover:text-primary transition-colors w-fit"
            >
              On A Pre-Owned Van
              <ArrowUpRight size={18} />
            </Link>
            <Link
              href="#own"
              className="inline-flex items-center gap-2 text-white font-bold uppercase tracking-wide border-b-2 border-white pb-1 hover:border-primary hover:text-primary transition-colors w-fit"
            >
              On Your Own Van
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Green Stripe */}
      <div className="yellow-stripe" />

      {/* Intro Section */}
      <section className="py-16 bg-[#25272c]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            THERE'S NOTHING LIKE A <span className="text-primary">NEW CAMPERVAN!</span>
          </h2>
          <p className="text-gray-300 max-w-3xl">
            Create your <strong>dream with Hilltop Campers</strong>.
            Customise your van to reflect your passion and tastes, with a choice of finishes to choose from.
            Our campervans are also surprisingly affordable!
          </p>
        </div>
      </section>



      {/* New Van Section */}
      <section id="new" className="py-20 bg-[#25272c] scroll-mt-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary text-xl font-bold mb-2">FROM £49,950</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 uppercase">
                Brand New Renault Trafic Campervan Built to Order
              </h2>
              <p className="text-gray-300 mb-6">
                As a Specialist converter, we are happy to offer you the opportunity to own a brand new Renault Trafic Campervan. We also build on other platforms e,g  The Ford Transit Custom VW Transporter.
              </p>

              <ul className="space-y-3 mb-8">
                {newVanFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-300">
                    <Check className="text-[#7cb342] shrink-0" size={20} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-white font-bold uppercase tracking-wide border-b-2 border-white pb-1 hover:border-primary hover:text-primary transition-colors"
              >
                Get In Touch
                <ArrowUpRight size={18} />
              </Link>
            </div>

            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="/images/black_brand_new_trafic.webp"
                alt="Brand new Black Renault Trafic Campervan"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pre-Owned Van Section */}
      <section id="pre-owned" className="py-20 bg-[#1a1c20] scroll-mt-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="/images/black_trafic.jpg"
                alt="Pre-owned campervan conversion - Black Renault Trafic"
                fill
                className="object-cover"
              />
            </div>

            <div className="order-1 lg:order-2">
              <p className="text-primary text-xl font-bold mb-2">FROM £40,950</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 uppercase">
                Built-to-Order Campervan Conversion on a Pre-Owned Van
              </h2>
              <p className="text-gray-300 mb-6">
                We will source you an excellent used van  on which we build your campervan. This is a great option if you want to save money while still getting the same high-quality conversion.
              </p>

              <ul className="space-y-3 mb-8">
                {preOwnedFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-300">
                    <Check className="text-[#7cb342] shrink-0" size={20} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-white font-bold uppercase tracking-wide border-b-2 border-white pb-1 hover:border-primary hover:text-primary transition-colors"
              >
                Get In Touch
                <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Own Van Section */}
      <section id="own" className="py-20 bg-[#25272c] scroll-mt-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary text-xl font-bold mb-2">FROM £20,500</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 uppercase">
                Built-to-Order Campervan Conversion on Your Own Van
              </h2>
              <p className="text-gray-300 mb-6">
                Supply us a van you already own or purchase your own Pre-owned van for us to build your Dream. This option offers the greatest potential for savings.
              </p>

              <ul className="space-y-3 mb-8">
                {ownVanFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-300">
                    <Check className="text-[#7cb342] shrink-0" size={20} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-white font-bold uppercase tracking-wide border-b-2 border-white pb-1 hover:border-primary hover:text-primary transition-colors"
              >
                Get In Touch
                <ArrowUpRight size={18} />
              </Link>
            </div>

            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="/images/white_trafic_poptop.jpg"
                alt="Convert your own van - White Renault Trafic with pop-top"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
