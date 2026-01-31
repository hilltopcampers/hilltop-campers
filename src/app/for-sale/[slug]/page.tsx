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

  return {
    title: `${campervan.title} | Hilltop Campers`,
    description: campervan.shortDescription,
  };
}

function StatusBadge({ status }: { status: Campervan["status"] }) {
  if (status === "Currently in Build") {
    return (
      <span className="inline-block bg-amber-500 text-black px-4 py-2 text-sm font-bold uppercase rounded-lg shadow-lg animate-pulse">
        Currently in Build
      </span>
    );
  }

  return (
    <span
      className={`inline-block px-4 py-2 text-sm font-bold uppercase rounded ${
        status === "Available"
          ? "bg-primary text-black"
          : "bg-red-600 text-white"
      }`}
    >
      {status}
    </span>
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

  return (
    <div className="pt-[104px]">
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
              <StatusBadge status={campervan.status} />

              {/* Title */}
              <h1 className="text-3xl md:text-4xl font-bold text-white uppercase">
                {campervan.title}
              </h1>

              {/* Price */}
              {campervan.price && (
                <p className="text-primary text-4xl font-bold">
                  £{campervan.price}
                </p>
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
