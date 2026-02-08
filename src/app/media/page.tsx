import Link from "next/link";
import Image from "next/image";
import { Download, ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Media & Press Kit | Hilltop Campers Logo Downloads",
  description:
    "Download official Hilltop Campers logos and brand assets. High-resolution PNG files for press, media, and promotional use. Brand guidelines included.",
  keywords: [
    "Hilltop Campers logo",
    "Hilltop Campers brand",
    "campervan logo download",
    "press kit",
    "media resources",
    "brand assets download",
  ],
  openGraph: {
    title: "Media & Press Kit | Hilltop Campers",
    description:
      "Download official Hilltop Campers logos and brand assets for press and media use.",
    url: "https://hilltopcampers.co.uk/media",
    images: [
      {
        url: "https://hilltopcampers.co.uk/images/hilltop-logo.png",
        width: 1653,
        height: 734,
        alt: "Hilltop Campers Logo",
      },
    ],
  },
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "/media",
  },
};

const logoDownloads = [
  {
    name: "Full Logo (Transparent Background)",
    description: "High-resolution PNG with transparent background. Perfect for signs, banners, and print materials.",
    filename: "hilltop-campers-logo-highres.png",
    dimensions: "5000 x 1271 px",
    format: "PNG",
    size: "0.19 MB",
    preview: "/hilltop-campers-logo-preview-dark.png",
  },
  {
    name: "Mountain Logo Only",
    description: "Just the mountain icon from the Hilltop Campers logo.",
    filename: "hilltop-logo.png",
    dimensions: "1653 x 734 px",
    format: "PNG",
    size: "0.1 MB",
    preview: "/images/hilltop-logo.png",
  },
];

const decalDownloads = [
  {
    name: "Eryri Adventurer Decal",
    variants: [
      { color: "White", svg: "/media/eryri-adventurer-decal-white.svg", png: "/media/eryri-adventurer-decal-white-large.png" },
      { color: "Black", svg: "/media/eryri-adventurer-decal-black.svg", png: "/media/eryri-adventurer-decal-black-large.png" },
      { color: "Green", svg: "/media/eryri-adventurer-decal-green.svg", png: "/media/eryri-adventurer-decal-green-large.png" },
      { color: "Silver", svg: "/media/eryri-adventurer-decal-silver.svg", png: "/media/eryri-adventurer-decal-silver-large.png" },
    ],
  },
  {
    name: "Eryri Adventurer V2 Decal",
    variants: [
      { color: "White", svg: "/media/eryri-adventurer-decal-white-v2.svg", png: "/media/eryri-adventurer-decal-white-v2-large.png" },
      { color: "Black", svg: "/media/eryri-adventurer-decal-black-v2.svg", png: "/media/eryri-adventurer-decal-black-v2-large.png" },
      { color: "Green", svg: "/media/eryri-adventurer-decal-green-v2.svg", png: "/media/eryri-adventurer-decal-green-v2-large.png" },
      { color: "Silver", svg: "/media/eryri-adventurer-decal-silver-v2.svg", png: "/media/eryri-adventurer-decal-silver-v2-large.png" },
    ],
  },
  {
    name: "Eryri Adventurer V3 Outline Decal",
    variants: [
      { color: "White", svg: "/media/eryri-adventurer-decal-white-v3-outline.svg", png: "/media/eryri-adventurer-decal-white-v3-outline-large.png" },
      { color: "Black", svg: "/media/eryri-adventurer-decal-black-v3-outline.svg", png: "/media/eryri-adventurer-decal-black-v3-outline-large.png" },
      { color: "Green", svg: "/media/eryri-adventurer-decal-green-v3-outline.svg", png: "/media/eryri-adventurer-decal-green-v3-outline-large.png" },
      { color: "Silver", svg: "/media/eryri-adventurer-decal-silver-v3-outline.svg", png: "/media/eryri-adventurer-decal-silver-v3-outline-large.png" },
    ],
  },
  {
    name: "Eryri Nomad V3 Decal",
    variants: [
      { color: "White", svg: "/media/eryri-nomad-decal-white-v3.svg", png: "/media/eryri-nomad-decal-white-v3-large.png" },
      { color: "Black", svg: "/media/eryri-nomad-decal-black-v3.svg", png: "/media/eryri-nomad-decal-black-v3-large.png" },
      { color: "Green", svg: "/media/eryri-nomad-decal-green-v3.svg", png: "/media/eryri-nomad-decal-green-v3-large.png" },
      { color: "Silver", svg: "/media/eryri-nomad-decal-silver-v3.svg", png: "/media/eryri-nomad-decal-silver-v3-large.png" },
    ],
  },
  {
    name: "Eryri Explorer V4 Decal",
    variants: [
      { color: "White", svg: "/media/eryri-explorer-decal-white-v4.svg", png: "/media/eryri-explorer-decal-white-v4-large.png" },
      { color: "Black", svg: "/media/eryri-explorer-decal-black-v4.svg", png: "/media/eryri-explorer-decal-black-v4-large.png" },
      { color: "Green", svg: "/media/eryri-explorer-decal-green-v4.svg", png: "/media/eryri-explorer-decal-green-v4-large.png" },
      { color: "Silver", svg: "/media/eryri-explorer-decal-silver-v4.svg", png: "/media/eryri-explorer-decal-silver-v4-large.png" },
    ],
  },
];

const brandColors = [
  { name: "Hilltop Green", hex: "#7CB518", textColor: "white" },
  { name: "Dark Background", hex: "#1a1c20", textColor: "white" },
  { name: "Card Background", hex: "#25272c", textColor: "white" },
  { name: "Text Gray", hex: "#9ca3af", textColor: "black" },
];

export default function MediaPage() {
  return (
    <div className="pt-[104px]">
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center bg-[#1a1c20]">
        <div className="container mx-auto px-4 relative z-10 py-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-primary">MEDIA</span> & DOWNLOADS
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Download official Hilltop Campers logos and brand assets for press and media use.
          </p>
        </div>
      </section>

      {/* Green Stripe */}
      <div className="yellow-stripe" />

      {/* Logo Downloads Section */}
      <section className="py-20 bg-[#25272c]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">LOGO</span> DOWNLOADS
          </h2>
          <p className="text-gray-400 mb-12 max-w-2xl">
            Our official logos are available for download below. Please use these assets responsibly and in accordance with our brand guidelines.
          </p>

          <div className="grid lg:grid-cols-2 gap-8">
            {logoDownloads.map((logo, index) => (
              <div
                key={index}
                className="bg-[#1a1c20] rounded-lg overflow-hidden border border-gray-700"
              >
                {/* Preview */}
                <div className="relative aspect-[3/1] bg-[#2d2f33] flex items-center justify-center p-8">
                  <Image
                    src={logo.preview}
                    alt={logo.name}
                    fill
                    className="object-contain p-4"
                  />
                </div>

                {/* Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{logo.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{logo.description}</p>

                  <div className="flex flex-wrap gap-4 mb-6 text-sm">
                    <span className="bg-[#25272c] px-3 py-1 rounded text-gray-300">
                      {logo.format}
                    </span>
                    <span className="bg-[#25272c] px-3 py-1 rounded text-gray-300">
                      {logo.dimensions}
                    </span>
                    <span className="bg-[#25272c] px-3 py-1 rounded text-gray-300">
                      {logo.size}
                    </span>
                  </div>

                  <a
                    href={`/${logo.filename}`}
                    download={logo.filename}
                    className="inline-flex items-center gap-2 bg-primary text-white font-bold px-6 py-3 rounded hover:bg-primary/90 transition-colors"
                  >
                    <Download size={18} />
                    Download
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Decal Downloads Section */}
      <section className="py-20 bg-[#1a1c20]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">DECAL</span> DOWNLOADS
          </h2>
          <p className="text-gray-400 mb-12 max-w-2xl">
            Van side decals for the Eryri range. Available in SVG (scalable) and PNG formats.
          </p>

          <div className="space-y-12">
            {decalDownloads.map((decal, index) => (
              <div key={index} className="bg-[#25272c] rounded-lg p-6 border border-gray-700">
                <h3 className="text-xl font-bold text-white mb-6">{decal.name}</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {decal.variants.map((variant, vIndex) => (
                    <div key={vIndex} className="bg-[#1a1c20] rounded-lg p-4">
                      <div className="relative aspect-[3/1] mb-4 flex items-center justify-center rounded overflow-hidden" style={{ backgroundColor: variant.color === "White" || variant.color === "Silver" ? "#333" : "#f5f5f5" }}>
                        <Image
                          src={variant.png}
                          alt={`${decal.name} - ${variant.color}`}
                          fill
                          className="object-contain p-2"
                        />
                      </div>
                      <p className="text-white font-medium mb-3">{variant.color}</p>
                      <div className="flex gap-2">
                        <a
                          href={variant.svg}
                          download
                          className="flex-1 text-center text-xs bg-primary text-black font-bold px-3 py-2 rounded hover:bg-primary/90 transition-colors"
                        >
                          SVG
                        </a>
                        <a
                          href={variant.png}
                          download
                          className="flex-1 text-center text-xs bg-gray-600 text-white font-bold px-3 py-2 rounded hover:bg-gray-500 transition-colors"
                        >
                          PNG
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Colors Section */}
      <section className="py-20 bg-[#25272c]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">BRAND</span> COLORS
          </h2>
          <p className="text-gray-400 mb-12 max-w-2xl">
            Our official brand color palette for consistent visual identity.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {brandColors.map((color, index) => (
              <div
                key={index}
                className="rounded-lg overflow-hidden border border-gray-700"
              >
                <div
                  className="h-24 flex items-end p-4"
                  style={{ backgroundColor: color.hex }}
                >
                  <span
                    className="font-bold text-sm"
                    style={{ color: color.textColor }}
                  >
                    {color.name}
                  </span>
                </div>
                <div className="bg-[#25272c] p-4">
                  <p className="text-gray-300 font-mono text-sm">{color.hex}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Usage Guidelines */}
      <section className="py-20 bg-[#25272c]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-primary">USAGE</span> GUIDELINES
            </h2>

            <div className="text-gray-300 space-y-4 text-left bg-[#1a1c20] p-8 rounded-lg">
              <p>
                <strong className="text-white">Do:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
                <li>Use the logo with adequate clear space around it</li>
                <li>Maintain the original proportions when resizing</li>
                <li>Use the transparent background version on dark backgrounds</li>
              </ul>

              <p>
                <strong className="text-white">Don't:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Distort, rotate, or alter the logo colors</li>
                <li>Add effects like shadows or outlines</li>
                <li>Use the logo in a way that implies endorsement without permission</li>
              </ul>
            </div>

            <div className="mt-12">
              <p className="text-gray-400 mb-6">
                For press inquiries or additional brand assets, please contact us.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-wide border-b-2 border-primary pb-1 hover:opacity-80 transition-opacity"
              >
                Contact Us
                <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
