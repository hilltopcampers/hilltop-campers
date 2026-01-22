import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { campervans } from "@/data/campervans";

export default function ForSalePage() {
  return (
    <div className="pt-[104px]">
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
            {campervans.map((van) => (
              <div
                key={van.id}
                className="bg-[#25272c] rounded-lg overflow-hidden group"
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
                    {van.status === "Currently in Build" ? (
                      <div className="absolute top-4 right-4 bg-amber-500 text-black px-4 py-2 text-sm font-bold uppercase rounded-lg shadow-lg animate-pulse">
                        Currently in Build
                      </div>
                    ) : (
                      <div
                        className={`absolute top-4 right-4 px-3 py-1 text-sm font-bold uppercase rounded transform rotate-12 ${
                          van.status === "Available"
                            ? "bg-primary text-black"
                            : "bg-red-600 text-white"
                        }`}
                      >
                        {van.status}
                      </div>
                    )}
                  </div>
                </Link>
                <div className="p-6">
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

                  {van.price && (
                    <p className="text-primary text-2xl font-bold mb-4">
                      £{van.price}
                    </p>
                  )}

                  {van.status === "Available" ? (
                    <Link
                      href={`/for-sale/${van.slug}`}
                      className="inline-block border border-white text-white px-6 py-2 uppercase text-sm font-bold hover:bg-white hover:text-black transition-colors"
                    >
                      See Details
                    </Link>
                  ) : van.status === "Currently in Build" ? (
                    <Link
                      href={`/for-sale/${van.slug}`}
                      className="inline-block bg-amber-500 text-black px-6 py-2 uppercase text-sm font-bold hover:bg-amber-400 transition-colors rounded"
                    >
                      View Details
                    </Link>
                  ) : (
                    <Link
                      href={`/for-sale/${van.slug}`}
                      className="inline-block border border-gray-600 text-gray-400 px-6 py-2 uppercase text-sm font-bold hover:border-gray-500 hover:text-gray-300 transition-colors"
                    >
                      View Details
                    </Link>
                  )}
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
