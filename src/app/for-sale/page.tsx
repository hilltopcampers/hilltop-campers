import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { campervans } from "@/data/campervans";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Campervans For Sale UK | Renault Trafic & More | From £26,950",
  description:
    "Quality campervans for sale from £26,950. Renault Trafic, Fiat Talento campervans ready to drive away. Pop-top roofs, 4 berth, diesel heaters, lithium power. Finance available. North Wales dealer.",
  keywords: [
    "campervans for sale UK",
    "Renault Trafic campervan for sale",
    "campervan for sale near me",
    "pop top campervan for sale UK",
    "4 berth campervan for sale",
    "used campervan for sale",
    "campervan dealer UK",
    "campervan finance UK",
    "Fiat Talento campervan",
    "diesel heater campervan",
    "lithium battery campervan for sale",
    "North Wales campervan dealer",
    "buy campervan UK",
    "ready to drive campervan",
    "converted van for sale",
    "campervan with pop top roof",
  ],
  openGraph: {
    title: "Campervans For Sale UK | Ready To Drive Away | Hilltop Campers",
    description:
      "Quality campervans for sale from £26,950. Renault Trafic & more. Pop-top, 4 berth, diesel heating. Finance available. North Wales.",
    url: "https://hilltopcampers.co.uk/for-sale",
    images: [
      {
        url: "https://hilltopcampers.co.uk/images/eryri-adventurer/front-headon.jpg",
        width: 1200,
        height: 630,
        alt: "Campervans For Sale - Hilltop Campers North Wales",
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
    canonical: "/for-sale",
  },
};

// Sort campervans: Available first, Currently in Build second, Sold last
const sortedCampervans = [...campervans].sort((a, b) => {
  const getOrder = (van: typeof campervans[0]) => {
    // Sold vans go last (either status is "Sold" or isSold is true)
    if (van.status === "Sold" || van.isSold) return 3;
    // Currently in Build goes second
    if (van.status === "Currently in Build") return 2;
    // Available goes first
    return 1;
  };
  return getOrder(a) - getOrder(b);
});

// Generate JSON-LD structured data for the listing page
const baseUrl = "https://hilltopcampers.co.uk";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    // ItemList Schema for product listing
    {
      "@type": "ItemList",
      "@id": `${baseUrl}/for-sale#itemlist`,
      name: "Campervans For Sale",
      description: "Browse our selection of quality Renault Trafic campervans for sale",
      numberOfItems: sortedCampervans.length,
      itemListElement: sortedCampervans.map((van, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: van.title,
        url: `${baseUrl}/for-sale/${van.slug}`,
        image: van.mainImage.startsWith("http") ? van.mainImage : `${baseUrl}${van.mainImage}`,
      })),
    },
    // Organization Schema
    {
      "@type": "Organization",
      "@id": `${baseUrl}#organization`,
      name: "Hilltop Campers",
      url: baseUrl,
      logo: `${baseUrl}/images/hilltop-logo.png`,
      description: "Premium campervan conversions in North Wales",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Unit 1B, Builder Street West",
        addressLocality: "Llandudno",
        postalCode: "LL30 1HH",
        addressCountry: "GB",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+44-7869-169826",
        contactType: "sales",
        email: "hilltopcampers.co.uk@gmail.com",
      },
    },
    // BreadcrumbList Schema
    {
      "@type": "BreadcrumbList",
      "@id": `${baseUrl}/for-sale#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: baseUrl,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Campervans For Sale",
          item: `${baseUrl}/for-sale`,
        },
      ],
    },
  ],
};

export default function ForSalePage() {
  return (
    <div className="pt-[104px]">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero Section */}
      <section className="relative py-24 bg-[#25272c]">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-primary">PRE-BUILT</span> CAMPERVANS
          </h1>
          <p className="text-gray-300 max-w-3xl text-lg">
            Can't wait to get on the road? Purchase one of our completed Campervans!
            They're ready to go on your adventures with no waiting time.
          </p>
          <p className="text-gray-400 mt-4">
            With new conversions completed to our highest spec.
          </p>
        </div>
      </section>

      {/* Green Stripe */}
      <div className="yellow-stripe" />

      {/* Campervans Grid */}
      <section className="py-20 bg-[#1a1c20]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedCampervans.map((van) => (
              <div
                key={van.id}
                className="bg-[#25272c] rounded-lg overflow-hidden group flex flex-col"
              >
                <Link href={`/for-sale/${van.slug}`} className="block">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={van.mainImage}
                      alt={van.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      unoptimized
                    />
                    {/* Sold banner - shown when isSold is true */}
                    {van.isSold && (
                      <div className="absolute top-4 right-4 bg-red-600 text-white px-4 py-2 text-sm font-bold uppercase rounded-lg shadow-lg animate-pulse">
                        Sold
                      </div>
                    )}
                    {/* Status banner */}
                    {van.status === "Currently in Build" ? (
                      <div className={`absolute ${van.isSold ? 'top-16' : 'top-4'} right-4 bg-amber-500 text-black px-4 py-2 text-sm font-bold uppercase rounded-lg shadow-lg animate-pulse`}>
                        Currently in Build
                      </div>
                    ) : van.status === "Sold" ? (
                      !van.isSold && (
                        <div className="absolute top-4 right-4 bg-red-600 text-white px-4 py-2 text-sm font-bold uppercase rounded-lg shadow-lg animate-pulse">
                          Sold
                        </div>
                      )
                    ) : (
                      <div className={`absolute ${van.isSold ? 'top-16' : 'top-4'} right-4 px-3 py-1 text-sm font-bold uppercase rounded transform rotate-12 bg-primary text-black`}>
                        {van.status}
                      </div>
                    )}
                  </div>
                </Link>
                <div className="p-6 flex flex-col flex-grow">
                  <Link href={`/for-sale/${van.slug}`}>
                    <h3 className="text-white font-bold uppercase text-lg mb-2 line-clamp-2 hover:text-primary transition-colors">
                      {van.title}
                    </h3>
                  </Link>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {van.shortDescription}
                  </p>

                  {/* Specs */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {van.specs.map((spec, index) => (
                      <span
                        key={index}
                        className="text-xs bg-[#1a1c20] text-gray-300 px-2 py-1 rounded"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>

                  {/* Spacer to push price and button to bottom */}
                  <div className="flex-grow" />

                  {van.price ? (
                    <div className="mb-4">
                      {van.originalPrice && (
                        <div className="flex items-center gap-2 mb-1">
                          <span className="bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded animate-pulse">
                            {van.saleLabel || "SALE"}
                          </span>
                          <span className="text-gray-400 line-through text-lg">
                            £{van.originalPrice}
                          </span>
                        </div>
                      )}
                      <p className="text-primary text-2xl font-bold">
                        £{van.price}
                      </p>
                    </div>
                  ) : (
                    <p className="text-gray-500 text-2xl font-bold mb-4">
                      POA
                    </p>
                  )}

                  <Link
                    href={`/for-sale/${van.slug}`}
                    className="inline-block border border-white text-white px-6 py-2 uppercase text-sm font-bold hover:bg-white hover:text-black transition-colors w-fit"
                  >
                    See Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#25272c]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            CAN'T FIND WHAT YOU'RE LOOKING FOR?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            We can build your dream campervan to your exact specifications.
            Get in touch to discuss your requirements.
          </p>
          <Link
            href="/built-to-order"
            className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-wide border-b-2 border-primary pb-1 hover:opacity-80 transition-opacity"
          >
            View Built To Order Options
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
