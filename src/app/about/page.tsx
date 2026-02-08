import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Check } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Hilltop Campers | Campervan Conversion Specialists | Llandudno, North Wales",
  description:
    "Hilltop Campers - premium campervan specialists in North Wales. In-house CNC furniture manufacturing & bespoke upholstery. Visit us in Llandudno.",
  keywords: [
    "about Hilltop Campers",
    "campervan manufacturer UK",
    "campervan manufacturer Wales",
    "Renault Trafic conversion specialists",
    "campervan conversion company UK",
    "Llandudno campervan dealer",
    "Snowdonia campervan manufacturer",
    "bespoke campervan builder",
    "CNC campervan furniture",
    "campervan upholstery Wales",
    "North Wales van conversion",
    "quality campervan conversion",
    "Welsh campervan company",
  ],
  openGraph: {
    title: "About Hilltop Campers | Campervan Conversion Specialists",
    description:
      "Premium campervan conversions in North Wales. In-house CNC manufacturing, bespoke upholstery, quality guaranteed. Visit us in Llandudno.",
    url: "https://hilltopcampers.co.uk/about",
    images: [
      {
        url: "https://hilltopcampers.co.uk/images/Camper_ai_2.jpeg",
        width: 1200,
        height: 630,
        alt: "Hilltop Campers Workshop - Campervan Conversion Specialists",
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
    canonical: "/about",
  },
};

const features = [
  "All furniture manufactured in-house using CNC machine",
  "Bespoke upholstery workshop",
  "Complete design flexibility",
  "Quality workmanship guaranteed",
  "Professional, personal experience",
  "Competitive pricing",
];

export default function AboutPage() {
  return (
    <div className="pt-[104px]">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="https://ext.same-assets.com/2308322781/526399883.jpeg"
            alt="About Hilltop Campers"
            fill
            className="object-cover"
            priority
          />
          <div className="hero-overlay absolute inset-0" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-primary">ABOUT</span> HILLTOP CAMPERS
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Premium campervan conversions in the heart of North Wales
          </p>
        </div>
      </section>

      {/* Green Stripe */}
      <div className="yellow-stripe" />

      {/* About Content */}
      <section className="py-20 bg-[#25272c]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-primary">ABOUT</span> US
              </h2>

              <div className="space-y-6 text-gray-300">
                <p>
                  Hilltop Campers Van Conversions is located in the heart of North Wales at the foot of Eryri (Snowdonia) National Park, conveniently just off the A55 North Wales Expressway at Llandudno
                </p>

                <p>
                  Hill Top Camper Van Conversions specialises in making your Dreams a reality. supplying camper vans, to the highest specifications with whatever you need to make your adventures happen.
                </p>

                <p>
                  All furniture is manufactured in house using our CNC machine, cut bespoke to
                  maximise the available space throughout.
                </p>

                <p>
                  We sell converted vans or are able to convert your existing van into your dream
                  camper. Part conversions are also available.
                </p>

                <p className="text-sm text-gray-400 italic">
                  *Features subject to model of van being converted
                </p>
              </div>
            </div>

            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="https://ugc.same-assets.com/En1WqgBDU9oEraWcQijEQVCOhHgAleia.jpeg"
                alt="Campervan interior"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-[#1a1c20]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="relative aspect-square rounded-lg overflow-hidden">
                  <Image
                    src="https://ugc.same-assets.com/ZS6kyt2cRq3nmcFpIjWhYRNQ4Dnvpzio.jpeg"
                    alt="Campervan furniture"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square rounded-lg overflow-hidden">
                  <Image
                    src="https://ext.same-assets.com/2308322781/1797965916.jpeg"
                    alt="Campervan interior"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                WHY CHOOSE <span className="text-primary">HILLTOP CAMPERS</span>?
              </h2>

              <ul className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-300">
                    <Check className="text-[#7cb342] shrink-0 mt-1" size={20} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-wide border-b-2 border-primary pb-1 hover:opacity-80 transition-opacity"
              >
                Get In Touch
                <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-[#25272c]">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-primary">OUR</span> LOCATION
            </h2>

            <p className="text-gray-300 mb-8">
              We're conveniently located in Llandudno , easily accessible from the A55. Just a short drive from Snowdonia and all the amazing adventures North Wales has to offer.
            </p>

            <div className="bg-[#1a1c20] rounded-lg p-8 mb-8">
              <h3 className="text-xl font-bold text-white mb-4">Hilltop Campers Ltd</h3>
              <p className="text-gray-300">
                Unit 1B, Builders Street West<br />
                Llandudno<br />
                LL30 1HH
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-white font-bold uppercase tracking-wide border-b-2 border-white pb-1 hover:border-primary hover:text-primary transition-colors"
            >
              Contact Us Today
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
