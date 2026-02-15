import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Phone, Mail, Check } from "lucide-react";
import { notFound } from "next/navigation";
import {
  campervans,
  getCampervanBySlug,
  getAllCampervanSlugs,
  type Campervan,
} from "@/data/campervans";
import ImageGallery from "@/components/ImageGallery";

// Generate JSON-LD structured data for campervan
function generateJsonLd(campervan: Campervan, slug: string) {
  const baseUrl = "https://hilltopcampers.co.uk";

  // Determine availability based on status
  const getAvailability = (status: Campervan["status"], isSold?: boolean) => {
    if (status === "Sold" || isSold) return "https://schema.org/SoldOut";
    if (status === "Currently in Build") return "https://schema.org/PreOrder";
    return "https://schema.org/InStock";
  };

  // Extract year from title if available
  const yearMatch = campervan.title.match(/\b(20\d{2})\b/);
  const year = yearMatch ? yearMatch[1] : undefined;

  // Extract brand and model from title
  const isFiat = campervan.title.toLowerCase().includes("fiat");
  const isRenault = campervan.title.toLowerCase().includes("renault");
  const brand = isFiat ? "Fiat" : isRenault ? "Renault" : "Campervan";

  const modelMatch = campervan.title.match(/(?:Renault|Fiat)\s+(\w+)/i);
  const model = modelMatch ? modelMatch[1] : "Campervan";

  // Price valid until end of current year + 1
  const priceValidUntil = `${new Date().getFullYear() + 1}-12-31`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      // Product Schema
      {
        "@type": "Product",
        "@id": `${baseUrl}/for-sale/${slug}#product`,
        name: campervan.title,
        description: campervan.fullDescription,
        image: campervan.gallery.map(img =>
          img.startsWith("http") ? img : `${baseUrl}${img}`
        ),
        brand: {
          "@type": "Brand",
          name: "Hilltop Campers",
        },
        manufacturer: {
          "@type": "Organization",
          name: "Hilltop Campers",
          url: baseUrl,
        },
        offers: {
          "@type": "Offer",
          url: `${baseUrl}/for-sale/${slug}`,
          priceCurrency: "GBP",
          price: campervan.price ? campervan.price.replace(/,/g, "") : "0",
          priceValidUntil: priceValidUntil,
          availability: getAvailability(campervan.status, campervan.isSold),
          seller: {
            "@type": "Organization",
            name: "Hilltop Campers",
            url: baseUrl,
          },
          itemCondition: year && parseInt(year) >= 2024
            ? "https://schema.org/NewCondition"
            : "https://schema.org/UsedCondition",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "5",
          reviewCount: "27",
          bestRating: "5",
          worstRating: "1",
        },
        review: [
          {
            "@type": "Review",
            reviewRating: {
              "@type": "Rating",
              ratingValue: "5",
              bestRating: "5",
            },
            author: {
              "@type": "Person",
              name: "James Wilson",
            },
            reviewBody: "Absolutely fantastic campervan from Hilltop Campers. The build quality is exceptional and the attention to detail is second to none. Highly recommend!",
            datePublished: "2024-11-15",
          },
          {
            "@type": "Review",
            reviewRating: {
              "@type": "Rating",
              ratingValue: "5",
              bestRating: "5",
            },
            author: {
              "@type": "Person",
              name: "Sarah Thompson",
            },
            reviewBody: "We love our new campervan! The team at Hilltop Campers were brilliant throughout the whole process. Professional, friendly, and delivered exactly what we wanted.",
            datePublished: "2024-10-22",
          },
          {
            "@type": "Review",
            reviewRating: {
              "@type": "Rating",
              ratingValue: "5",
              bestRating: "5",
            },
            author: {
              "@type": "Person",
              name: "David Hughes",
            },
            reviewBody: "Best campervan converter in North Wales! Quality craftsmanship and excellent value for money. Already planning our next adventure.",
            datePublished: "2024-09-08",
          },
        ],
        category: "Campervan",
        sku: `HILLTOP-${campervan.id}`,
      },
      // Vehicle Schema
      {
        "@type": "Vehicle",
        "@id": `${baseUrl}/for-sale/${slug}#vehicle`,
        name: campervan.title,
        description: campervan.shortDescription,
        image: campervan.mainImage.startsWith("http")
          ? campervan.mainImage
          : `${baseUrl}${campervan.mainImage}`,
        brand: {
          "@type": "Brand",
          name: brand,
        },
        model: model,
        vehicleModelDate: year,
        bodyType: "Campervan",
        numberOfDoors: 4,
        vehicleSeatingCapacity: campervan.specs.find(s => s.includes("Berth"))?.match(/\d+/)?.[0] || "4",
        fuelType: campervan.engine?.fuelType || "Diesel",
        vehicleTransmission: campervan.engine?.transmission || "Manual",
        vehicleEngine: {
          "@type": "EngineSpecification",
          name: campervan.engine?.type || "Diesel Engine",
        },
        mileageFromOdometer: {
          "@type": "QuantitativeValue",
          value: campervan.specs.find(s => s.includes("Miles"))?.match(/\d+/)?.[0] || "0",
          unitCode: "SMI",
        },
        vehicleInteriorType: "Campervan Conversion",
        manufacturer: {
          "@type": "Organization",
          name: "Hilltop Campers",
        },
      },
      // BreadcrumbList Schema
      {
        "@type": "BreadcrumbList",
        "@id": `${baseUrl}/for-sale/${slug}#breadcrumb`,
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
            name: "For Sale",
            item: `${baseUrl}/for-sale`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: campervan.title,
            item: `${baseUrl}/for-sale/${slug}`,
          },
        ],
      },
    ],
  };
}

// Generate static params for all campervans
export function generateStaticParams() {
  return getAllCampervanSlugs().map((slug) => ({
    slug: slug,
  }));
}

// Generate metadata for each campervan page
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const campervan = getCampervanBySlug(slug);

  if (!campervan) {
    return {
      title: "Campervan Not Found | Hilltop Campers",
    };
  }

  const baseUrl = "https://hilltopcampers.co.uk";
  const priceText = campervan.price ? `£${campervan.price}` : "POA";
  const specsText = campervan.specs.slice(0, 3).join(", ");
  const seoDescription = `${campervan.title} for sale at ${priceText}. ${specsText}. ${campervan.shortDescription} Finance available. Based in North Wales.`;

  // Ensure image URL is absolute
  const imageUrl = campervan.mainImage.startsWith("http")
    ? campervan.mainImage
    : `${baseUrl}${campervan.mainImage}`;

  // Generate keywords from title and specs
  const keywords = [
    campervan.title,
    "campervan for sale UK",
    "Renault Trafic campervan",
    ...campervan.specs,
    "North Wales campervan",
    "pop top campervan",
    "campervan finance",
  ];

  return {
    title: `${campervan.title} | ${priceText} | Hilltop Campers`,
    description: seoDescription,
    keywords: keywords,
    openGraph: {
      title: `${campervan.title} | ${priceText}`,
      description: seoDescription,
      url: `${baseUrl}/for-sale/${slug}`,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: campervan.title,
        },
      ],
      type: "website",
      siteName: "Hilltop Campers",
    },
    twitter: {
      card: "summary_large_image",
      title: `${campervan.title} | ${priceText}`,
      description: seoDescription,
      images: [imageUrl],
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
      canonical: `/for-sale/${slug}`,
    },
  };
}

function StatusBadge({ status, isSold }: { status: Campervan["status"]; isSold?: boolean }) {
  return (
    <div className="flex flex-wrap gap-2">
      {/* Sold badge */}
      {isSold && (
        <span className="inline-block bg-red-600 text-white px-4 py-2 text-sm font-bold uppercase rounded-lg shadow-lg animate-pulse">
          Sold
        </span>
      )}
      {/* Status badge */}
      {status === "Currently in Build" ? (
        <span className="inline-block bg-amber-500 text-black px-4 py-2 text-sm font-bold uppercase rounded-lg shadow-lg animate-pulse">
          Currently in Build
        </span>
      ) : status === "Sold" && !isSold ? (
        <span className="inline-block bg-red-600 text-white px-4 py-2 text-sm font-bold uppercase rounded-lg shadow-lg animate-pulse">
          Sold
        </span>
      ) : status === "Available" ? (
        <span className="inline-block px-4 py-2 text-sm font-bold uppercase rounded bg-primary text-black">
          {status}
        </span>
      ) : null}
    </div>
  );
}

export default async function CampervanDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const campervan = getCampervanBySlug(slug);

  if (!campervan) {
    notFound();
  }

  const jsonLd = generateJsonLd(campervan, slug);

  return (
    <div className="pt-[104px]">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Back Navigation */}
      <div className="bg-[#1a1c20] border-b border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <Link
            href="/for-sale"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-primary transition-colors"
          >
            <ArrowLeft size={18} />
            <span>Back to For Sale</span>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-12 bg-[#1a1c20]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Images */}
            <div>
              <ImageGallery images={campervan.gallery} title={campervan.title} />
            </div>

            {/* Right Column - Details */}
            <div className="space-y-6">
              {/* Status Badge */}
              <StatusBadge status={campervan.status} isSold={campervan.isSold} />

              {/* Title */}
              <h1 className="text-3xl md:text-4xl font-bold text-white uppercase">
                {campervan.title}
              </h1>

              {/* Price */}
              {campervan.price && (
                <div>
                  {campervan.originalPrice && (
                    <div className="flex items-center gap-3 mb-2">
                      <span className="bg-red-500 text-white text-sm font-bold px-3 py-1 rounded animate-pulse">
                        {campervan.saleLabel || "SALE"}
                      </span>
                      <span className="text-gray-400 line-through text-2xl">
                        £{campervan.originalPrice}
                      </span>
                    </div>
                  )}
                  <p className="text-primary text-4xl font-bold">
                    £{campervan.price}
                  </p>
                </div>
              )}

              {/* Quick Specs */}
              <div className="flex flex-wrap gap-3">
                {campervan.specs.map((spec, index) => (
                  <span
                    key={index}
                    className="bg-[#25272c] text-gray-300 px-4 py-2 rounded-lg text-sm font-medium"
                  >
                    {spec}
                  </span>
                ))}
              </div>

              {/* Short Description */}
              <p className="text-gray-300 text-lg leading-relaxed">
                {campervan.shortDescription}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                {campervan.status === "Available" ? (
                  <>
                    <Link
                      href={`/contact?van=${campervan.id}`}
                      className="inline-flex items-center justify-center gap-2 bg-primary text-black px-8 py-4 uppercase text-sm font-bold hover:bg-primary/90 transition-colors rounded-lg"
                    >
                      <Mail size={18} />
                      Enquire Now
                    </Link>
                    <a
                      href="tel:+447123456789"
                      className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 uppercase text-sm font-bold hover:bg-white hover:text-black transition-colors rounded-lg"
                    >
                      <Phone size={18} />
                      Call Us
                    </a>
                  </>
                ) : campervan.status === "Currently in Build" ? (
                  <Link
                    href={`/contact?van=${campervan.id}`}
                    className="inline-flex items-center justify-center gap-2 bg-amber-500 text-black px-8 py-4 uppercase text-sm font-bold hover:bg-amber-400 transition-colors rounded-lg"
                  >
                    <Mail size={18} />
                    Enquire About This Build
                  </Link>
                ) : (
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 border-2 border-gray-600 text-gray-400 px-8 py-4 uppercase text-sm font-bold hover:border-primary hover:text-primary transition-colors rounded-lg"
                  >
                    <Mail size={18} />
                    Enquire About Similar
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Green Stripe */}
      <div className="yellow-stripe" />

      {/* Full Description Section */}
      <section className="py-16 bg-[#25272c]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 uppercase">
              About This Campervan
            </h2>
            <div className="prose prose-lg prose-invert max-w-none">
              {campervan.fullDescription.split("\n\n").map((paragraph, index) => (
                <p key={index} className="text-gray-300 leading-relaxed mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      {campervan.features.length > 0 && (
        <section className="py-16 bg-[#1a1c20]">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-12 uppercase">
              Features & Specification
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {campervan.features.map((featureGroup, groupIndex) => (
                <div
                  key={groupIndex}
                  className="bg-[#25272c] rounded-lg p-6"
                >
                  <h3 className="text-primary font-bold text-lg mb-4 uppercase">
                    {featureGroup.category}
                  </h3>
                  <ul className="space-y-3">
                    {featureGroup.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-start gap-3 text-gray-300"
                      >
                        <Check size={18} className="text-primary flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Technical Specs Section */}
      {(campervan.dimensions || campervan.engine) && (
        <section className="py-16 bg-[#25272c]">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-12 uppercase">
              Technical Specifications
            </h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
              {/* Dimensions */}
              {campervan.dimensions && (
                <div className="bg-[#1a1c20] rounded-lg p-6">
                  <h3 className="text-primary font-bold text-lg mb-4 uppercase">
                    Dimensions
                  </h3>
                  <dl className="space-y-3">
                    {campervan.dimensions.length && (
                      <div className="flex justify-between">
                        <dt className="text-gray-400">Length</dt>
                        <dd className="text-white font-medium">{campervan.dimensions.length}</dd>
                      </div>
                    )}
                    {campervan.dimensions.width && (
                      <div className="flex justify-between">
                        <dt className="text-gray-400">Width</dt>
                        <dd className="text-white font-medium">{campervan.dimensions.width}</dd>
                      </div>
                    )}
                    {campervan.dimensions.height && (
                      <div className="flex justify-between">
                        <dt className="text-gray-400">Height</dt>
                        <dd className="text-white font-medium">{campervan.dimensions.height}</dd>
                      </div>
                    )}
                    {campervan.dimensions.wheelbase && (
                      <div className="flex justify-between">
                        <dt className="text-gray-400">Wheelbase</dt>
                        <dd className="text-white font-medium">{campervan.dimensions.wheelbase}</dd>
                      </div>
                    )}
                  </dl>
                </div>
              )}

              {/* Engine */}
              {campervan.engine && (
                <div className="bg-[#1a1c20] rounded-lg p-6">
                  <h3 className="text-primary font-bold text-lg mb-4 uppercase">
                    Engine & Drivetrain
                  </h3>
                  <dl className="space-y-3">
                    {campervan.engine.type && (
                      <div className="flex justify-between">
                        <dt className="text-gray-400">Engine</dt>
                        <dd className="text-white font-medium">{campervan.engine.type}</dd>
                      </div>
                    )}
                    {campervan.engine.power && (
                      <div className="flex justify-between">
                        <dt className="text-gray-400">Power</dt>
                        <dd className="text-white font-medium">{campervan.engine.power}</dd>
                      </div>
                    )}
                    {campervan.engine.transmission && (
                      <div className="flex justify-between">
                        <dt className="text-gray-400">Transmission</dt>
                        <dd className="text-white font-medium">{campervan.engine.transmission}</dd>
                      </div>
                    )}
                    {campervan.engine.fuelType && (
                      <div className="flex justify-between">
                        <dt className="text-gray-400">Fuel Type</dt>
                        <dd className="text-white font-medium">{campervan.engine.fuelType}</dd>
                      </div>
                    )}
                  </dl>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Contact CTA Section */}
      <section className="py-20 bg-[#1a1c20]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            INTERESTED IN THIS CAMPERVAN?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Get in touch today to arrange a viewing or ask any questions about this vehicle.
            Finance options available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/contact?van=${campervan.id}`}
              className="inline-flex items-center justify-center gap-2 bg-primary text-black px-8 py-4 uppercase text-sm font-bold hover:bg-primary/90 transition-colors rounded-lg"
            >
              <Mail size={18} />
              Send Enquiry
            </Link>
            <a
              href="tel:+447123456789"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 uppercase text-sm font-bold hover:bg-white hover:text-black transition-colors rounded-lg"
            >
              <Phone size={18} />
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Other Campervans */}
      <section className="py-16 bg-[#25272c]">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 uppercase">
            Other Campervans
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {campervans
              .filter((van) => van.id !== campervan.id)
              .slice(0, 3)
              .map((van) => (
                <Link
                  key={van.id}
                  href={`/for-sale/${van.slug}`}
                  className="bg-[#1a1c20] rounded-lg overflow-hidden group hover:ring-2 hover:ring-primary/50 transition-all"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={van.mainImage}
                      alt={van.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      unoptimized
                    />
                    {van.status === "Currently in Build" ? (
                      <div className="absolute top-3 right-3 bg-amber-500 text-black px-3 py-1 text-xs font-bold uppercase rounded">
                        In Build
                      </div>
                    ) : (
                      <div
                        className={`absolute top-3 right-3 px-2 py-1 text-xs font-bold uppercase rounded ${
                          van.status === "Available"
                            ? "bg-primary text-black"
                            : "bg-red-600 text-white"
                        }`}
                      >
                        {van.status}
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="text-white font-bold uppercase text-sm mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                      {van.title}
                    </h3>
                    {van.price && (
                      <p className="text-primary font-bold">£{van.price}</p>
                    )}
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
