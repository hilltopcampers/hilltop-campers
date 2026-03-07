"use client";

import Image from "next/image";
import { Battery, Flame, Zap, Shield, MapPin, Globe, Download, Loader2, FileImage, FileType } from "lucide-react";
import { useRef, useState } from "react";
import html2canvas from "html2canvas";
import { documentToSVG, elementToSVG, inlineResources } from "dom-to-svg";

export default function BannerPage() {
  const mainBannerRef = useRef<HTMLDivElement>(null);
  const socialBannerRef = useRef<HTMLDivElement>(null);
  const leaderboardBannerRef = useRef<HTMLDivElement>(null);
  const squareBannerRef = useRef<HTMLDivElement>(null);
  const eryriFeatureBannerRef = useRef<HTMLDivElement>(null);

  const [downloading, setDownloading] = useState<string | null>(null);

  const downloadBannerPNG = async (
    ref: React.RefObject<HTMLDivElement | null>,
    filename: string,
    width: number,
    height: number
  ) => {
    if (!ref.current) return;

    setDownloading(filename + "-png");

    try {
      const currentWidth = ref.current.offsetWidth;
      const scale = Math.max(3, width / currentWidth);

      const canvas = await html2canvas(ref.current, {
        scale: scale,
        useCORS: true,
        allowTaint: true,
        backgroundColor: "#0a0b0c",
        logging: false,
        width: ref.current.offsetWidth,
        height: ref.current.offsetHeight,
      });

      const link = document.createElement("a");
      link.download = `${filename}.png`;
      link.href = canvas.toDataURL("image/png", 1.0);
      link.click();
    } catch (error) {
      console.error("Error downloading banner:", error);
      alert("Error downloading banner. Please try again.");
    } finally {
      setDownloading(null);
    }
  };

  const downloadBannerSVG = async (
    ref: React.RefObject<HTMLDivElement | null>,
    filename: string
  ) => {
    if (!ref.current) return;

    setDownloading(filename + "-svg");

    try {
      const svgDocument = elementToSVG(ref.current);
      await inlineResources(svgDocument.documentElement);

      const svgString = new XMLSerializer().serializeToString(svgDocument);
      const blob = new Blob([svgString], { type: "image/svg+xml" });
      const url = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.download = `${filename}.svg`;
      link.href = url;
      link.click();

      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading SVG:", error);
      alert("Error downloading SVG. Please try again.");
    } finally {
      setDownloading(null);
    }
  };

  const DownloadButtons = ({
    bannerRef,
    filename,
    width,
    height,
    showSVG = false,
  }: {
    bannerRef: React.RefObject<HTMLDivElement | null>;
    filename: string;
    width: number;
    height: number;
    showSVG?: boolean;
  }) => (
    <div className="flex gap-2">
      <button
        onClick={() => downloadBannerPNG(bannerRef, filename, width, height)}
        disabled={downloading !== null}
        className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-black font-semibold px-4 py-2 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {downloading === filename + "-png" ? (
          <Loader2 size={18} className="animate-spin" />
        ) : (
          <FileImage size={18} />
        )}
        {downloading === filename + "-png" ? "Generating..." : "PNG"}
      </button>
      {showSVG && (
        <button
          onClick={() => downloadBannerSVG(bannerRef, filename)}
          disabled={downloading !== null}
          className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-black font-semibold px-4 py-2 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {downloading === filename + "-svg" ? (
            <Loader2 size={18} className="animate-spin" />
          ) : (
            <FileType size={18} />
          )}
          {downloading === filename + "-svg" ? "Generating..." : "SVG"}
        </button>
      )}
    </div>
  );



  return (
    <div className="min-h-screen bg-[#0a0b0c] pt-[104px] pb-20">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-white mb-4 text-center">Marketing Banners</h1>
        <p className="text-gray-400 text-center mb-4">High-quality banners for print and digital use.</p>
        <p className="text-primary text-center mb-12 text-sm">Download as PNG (3x scale) or SVG (vector format for print)</p>

        {/* Banner Preview Container */}
        <div className="max-w-6xl mx-auto">

          {/* Main Banner - 1920x1080 aspect ratio - VECTOR VERSION (No Background Photo) */}
          <div className="mb-16">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
              <div>
                <h2 className="text-xl font-semibold text-white">Full Banner - Vector (1920 × 1080)</h2>
                <p className="text-gray-500 text-sm">Clean design without background photo - ideal for print</p>
              </div>
              <DownloadButtons
                bannerRef={mainBannerRef}
                filename="hilltop-campers-full-banner-vector-1920x1080"
                width={1920}
                height={1080}
                showSVG={true}
              />
            </div>
            <div
              ref={mainBannerRef}
              id="main-banner"
              className="relative w-full aspect-[16/9] rounded-lg overflow-hidden shadow-2xl"
              style={{
                background: 'linear-gradient(135deg, #0f1012 0%, #1a1c20 40%, #252830 70%, #1a1c20 100%)'
              }}
            >
              {/* Subtle geometric pattern overlay */}
              <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage: `radial-gradient(circle at 20% 50%, rgba(124,179,66,0.3) 0%, transparent 50%),
                                    radial-gradient(circle at 80% 30%, rgba(124,179,66,0.2) 0%, transparent 40%)`
                }}
              />

              {/* Content Layer */}
              <div className="relative z-10 h-full flex flex-col justify-between p-8 lg:p-12">

                {/* Top Section - Brand Name with Mountain Logo */}
                <div className="flex items-start justify-between">
                  <div className="flex flex-col items-start">
                    <div className="flex items-start gap-6">
                      <div className="relative w-64 h-40 lg:w-96 lg:h-60 flex-shrink-0">
                        <Image
                          src="/images/hilltop-logo.png"
                          alt="Hilltop Mountain Logo"
                          fill
                          className="object-contain object-top"
                          priority
                        />
                      </div>
                      <div className="flex flex-col items-center">
                        <span className="text-4xl lg:text-6xl font-bold tracking-wide leading-tight whitespace-nowrap">
                          <span className="text-primary">Hilltop</span> <span className="text-white">Campers</span>
                        </span>
                        <span className="text-xs lg:text-sm text-gray-400 tracking-[0.2em] mt-2 uppercase whitespace-nowrap text-center">
                          Camper van conversion specialists
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right hidden md:block">
                    <div className="flex items-center justify-end gap-2 text-white text-sm mb-1">
                      <MapPin size={14} className="text-primary" />
                      <span>North Wales, UK</span>
                    </div>
                    <div className="flex items-center justify-end gap-2 text-white text-sm mb-1">
                      <Globe size={14} className="text-primary" />
                      <span>www.hilltopcampers.co.uk</span>
                    </div>
                  </div>
                </div>

                {/* Center Section - Main Message */}
                <div className="flex-1 flex flex-col justify-center py-6">
                  <p className="text-white text-sm lg:text-base uppercase tracking-widest mb-2">
                    Campervans North Wales
                  </p>
                  <h1 className="text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-bold mb-4">
                    <span className="text-primary">NORTH WALES PREMIUM,</span>
                    <br />
                    <span className="text-white">CAMPERVAN MANUFACTURER</span>
                  </h1>
                  <p className="text-gray-300 text-lg lg:text-xl max-w-2xl mt-4">
                    Industry-leading quality campervans built in Wales. Gas-free, pop-top conversions with warranty.
                  </p>
                </div>

                {/* Bottom Section - Features and Pricing */}
                <div className="flex flex-col lg:flex-row items-end justify-between gap-6">
                  {/* Features Grid */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6">
                    <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm rounded-lg px-3 py-2 border border-primary/30">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                        <Battery className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-white text-xs lg:text-sm font-medium">Lithium Power</span>
                    </div>
                    <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm rounded-lg px-3 py-2 border border-primary/30">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                        <Flame className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-white text-xs lg:text-sm font-medium">Autoterm Heating</span>
                    </div>
                    <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm rounded-lg px-3 py-2 border border-primary/30">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                        <Zap className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-white text-xs lg:text-sm font-medium">BCA Wiring</span>
                    </div>
                    <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm rounded-lg px-3 py-2 border border-primary/30">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                        <Shield className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-white text-xs lg:text-sm font-medium">Renault Platform</span>
                    </div>
                  </div>

                  {/* Pricing Badge */}
                  <div className="bg-primary text-black px-6 py-4 rounded-lg text-center">
                    <p className="text-xs uppercase font-semibold opacity-80">Starting From</p>
                    <p className="text-3xl lg:text-4xl font-black">£20,500</p>
                    <p className="text-xs uppercase font-semibold opacity-80">Convert Your Own Van</p>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-1/3 h-1 bg-gradient-to-l from-primary to-transparent" />
              <div className="absolute bottom-0 left-0 w-full h-1 bg-primary" />
              <div className="absolute top-0 left-0 w-1 h-1/4 bg-gradient-to-b from-primary to-transparent" />
            </div>
          </div>

          {/* Social Media Banner - 1200x630 */}
          <div className="mb-16">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
              <h2 className="text-xl font-semibold text-white">Social Media Banner (1200 × 630)</h2>
              <DownloadButtons
                bannerRef={socialBannerRef}
                filename="hilltop-campers-social-banner-1200x630"
                width={1200}
                height={630}
                showSVG={false}
              />
            </div>
            <div
              ref={socialBannerRef}
              className="relative w-full max-w-4xl mx-auto aspect-[1200/630] rounded-lg overflow-hidden shadow-2xl"
              style={{
                background: 'linear-gradient(135deg, #0a0b0c 0%, #1a1c20 100%)'
              }}
            >
              {/* Background */}
              <div className="absolute inset-0">
                <Image
                  src="/images/eryri-adventurer/front-three-quarter.jpg"
                  alt="Eryri Adventurer"
                  fill
                  className="object-cover opacity-50"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-black/40" />
              </div>

              {/* Content */}
              <div className="relative z-10 h-full flex items-center p-8 lg:p-12">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="relative w-12 h-12">
                      <Image
                        src="/hilltop-campers-logo-highres.png"
                        alt="Logo"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <p className="text-white font-bold text-lg">HILLTOP CAMPERS</p>
                      <p className="text-primary text-xs uppercase tracking-wider">North Wales</p>
                    </div>
                  </div>

                  <h2 className="text-3xl lg:text-5xl font-black text-white mb-2 leading-tight">
                    <span className="text-primary">PREMIUM</span> CAMPERVAN
                    <br />MANUFACTURER
                  </h2>

                  <p className="text-gray-300 text-sm lg:text-base mb-6 max-w-md">
                    Bespoke Renault Trafic conversions built entirely in-house. Quality craftsmanship with full warranty.
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="bg-primary text-black px-4 py-2 rounded">
                      <p className="text-xs uppercase font-semibold">From</p>
                      <p className="text-2xl font-black">£20,500</p>
                    </div>
                    <div className="text-white">
                      <p className="text-sm font-semibold">www.hilltopcampers.co.uk</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Accent bar */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-primary" />
            </div>
          </div>

          {/* Horizontal Banner - 728x90 */}
          <div className="mb-16">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
              <h2 className="text-xl font-semibold text-white">Leaderboard Banner (728 × 90)</h2>
              <DownloadButtons
                bannerRef={leaderboardBannerRef}
                filename="hilltop-campers-leaderboard-728x90"
                width={728}
                height={90}
                showSVG={true}
              />
            </div>
            <div
              ref={leaderboardBannerRef}
              className="relative w-full max-w-3xl mx-auto aspect-[728/90] rounded-lg overflow-hidden shadow-2xl"
              style={{
                background: 'linear-gradient(90deg, #0a0b0c 0%, #1a1c20 100%)'
              }}
            >
              {/* Background */}
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-r from-[#0a0b0c] via-[#1a1c20] to-[#0a0b0c]" />
              </div>

              {/* Content */}
              <div className="relative z-10 h-full flex items-center justify-between px-6">
                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 flex-shrink-0">
                    <Image
                      src="/hilltop-campers-logo-highres.png"
                      alt="Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="border-l border-gray-600 pl-4">
                    <p className="text-white font-bold text-lg">HILLTOP CAMPERS</p>
                    <p className="text-gray-400 text-xs">Premium Campervan Manufacturer</p>
                  </div>
                </div>

                <div className="hidden md:flex items-center gap-6">
                  <div className="text-center">
                    <p className="text-primary font-bold text-xl">From £20,500</p>
                    <p className="text-gray-400 text-xs">Convert Your Van</p>
                  </div>
                  <div className="bg-primary text-black px-4 py-2 rounded font-bold text-sm">
                    ENQUIRE NOW
                  </div>
                </div>
              </div>

              {/* Accent */}
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary" />
            </div>
          </div>

          {/* Square Banner - 1080x1080 */}
          <div className="mb-16">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
              <h2 className="text-xl font-semibold text-white">Instagram Square (1080 × 1080)</h2>
              <DownloadButtons
                bannerRef={squareBannerRef}
                filename="hilltop-campers-instagram-1080x1080"
                width={1080}
                height={1080}
                showSVG={false}
              />
            </div>
            <div
              ref={squareBannerRef}
              className="relative w-full max-w-lg mx-auto aspect-square rounded-lg overflow-hidden shadow-2xl"
              style={{
                background: 'linear-gradient(180deg, #0a0b0c 0%, #1a1c20 100%)'
              }}
            >
              {/* Background */}
              <div className="absolute inset-0">
                <Image
                  src="/images/eryri-adventurer/poptop-raised.jpg"
                  alt="Campervan"
                  fill
                  className="object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/90" />
              </div>

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-between p-8">
                {/* Top */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12">
                      <Image
                        src="/hilltop-campers-logo-highres.png"
                        alt="Logo"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <p className="text-white font-bold">HILLTOP CAMPERS</p>
                      <p className="text-primary text-xs">North Wales</p>
                    </div>
                  </div>
                </div>

                {/* Center */}
                <div className="text-center">
                  <p className="text-primary text-sm uppercase tracking-[0.2em] mb-2">Premium Quality</p>
                  <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-4">
                    YOUR
                    <br />
                    <span className="text-primary">ADVENTURE</span>
                    <br />
                    STARTS HERE
                  </h2>
                  <p className="text-gray-300 text-sm max-w-xs mx-auto">
                    Bespoke campervan conversions built in North Wales
                  </p>
                </div>

                {/* Bottom */}
                <div className="space-y-4">
                  <div className="flex justify-center gap-6">
                    <div className="flex items-center gap-2 text-gray-300 text-xs">
                      <Battery size={14} className="text-primary" />
                      <span>Lithium</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300 text-xs">
                      <Flame size={14} className="text-primary" />
                      <span>Heating</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300 text-xs">
                      <Shield size={14} className="text-primary" />
                      <span>Warranty</span>
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-primary font-bold text-2xl">From £20,500</p>
                    <p className="text-gray-400 text-xs">www.hilltopcampers.co.uk</p>
                  </div>
                </div>
              </div>

              {/* Decorative */}
              <div className="absolute top-0 left-0 w-full h-1 bg-primary" />
              <div className="absolute bottom-0 left-0 w-full h-1 bg-primary" />
            </div>
          </div>

          {/* Eryri Adventurer Feature Banner */}
          <div className="mb-16">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
              <h2 className="text-xl font-semibold text-white">Eryri Adventurer Feature Banner</h2>
              <DownloadButtons
                bannerRef={eryriFeatureBannerRef}
                filename="hilltop-campers-eryri-feature-banner"
                width={1920}
                height={1080}
                showSVG={false}
              />
            </div>
            <div
              ref={eryriFeatureBannerRef}
              className="relative w-full aspect-[16/9] rounded-lg overflow-hidden shadow-2xl border border-primary/30"
              style={{
                background: 'linear-gradient(135deg, #0a0b0c 0%, #1a1c20 50%, #0f1012 100%)'
              }}
            >
              {/* Background */}
              <div className="absolute inset-0">
                <Image
                  src="/images/eryri-adventurer/side-three-quarter.jpg"
                  alt="Eryri Adventurer"
                  fill
                  className="object-cover opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/60" />
              </div>

              {/* Grid Pattern Overlay */}
              <div
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: `linear-gradient(rgba(200,169,92,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(200,169,92,0.3) 1px, transparent 1px)`,
                  backgroundSize: '50px 50px'
                }}
              />

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col lg:flex-row items-center p-8 lg:p-12 gap-8">
                {/* Left Side - Text */}
                <div className="flex-1">
                  <div className="inline-block bg-primary text-black px-3 py-1 text-xs font-bold uppercase rounded mb-4">
                    New Model 2025
                  </div>

                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4">
                    <span className="text-white">THE</span>
                    <br />
                    <span className="text-primary">ERYRI</span>
                    <br />
                    <span className="text-white">ADVENTURER</span>
                  </h2>

                  <p className="text-gray-300 text-sm lg:text-base mb-6 max-w-lg">
                    State of the art 4 berth campervan, built on the award-winning Renault Trafic platform. Features lithium battery power, 200W solar panel, Autoterm diesel heating, and industry-leading BCA wiring systems.
                  </p>

                  <div className="grid grid-cols-2 gap-3 mb-6 max-w-md">
                    <div className="flex items-center gap-2 text-white text-sm">
                      <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                        <Battery size={12} className="text-black" />
                      </div>
                      <span>Lithium Power System</span>
                    </div>
                    <div className="flex items-center gap-2 text-white text-sm">
                      <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                        <Flame size={12} className="text-black" />
                      </div>
                      <span>Autoterm 2KW Heater</span>
                    </div>
                    <div className="flex items-center gap-2 text-white text-sm">
                      <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                        <Zap size={12} className="text-black" />
                      </div>
                      <span>BCA Group Wiring</span>
                    </div>
                    <div className="flex items-center gap-2 text-white text-sm">
                      <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                        <Shield size={12} className="text-black" />
                      </div>
                      <span>Full Warranty</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <div>
                      <p className="text-gray-400 text-xs uppercase">Starting From</p>
                      <p className="text-primary text-3xl font-black">£49,950</p>
                      <p className="text-gray-400 text-xs">SWB Configuration</p>
                    </div>
                    <div className="w-px h-16 bg-gray-700" />
                    <div>
                      <p className="text-white text-sm font-bold">HILLTOP CAMPERS</p>
                      <p className="text-gray-400 text-xs">www.hilltopcampers.co.uk</p>
                      <p className="text-gray-400 text-xs">North Wales, UK</p>
                    </div>
                  </div>
                </div>

                {/* Right Side - Image */}
                <div className="relative w-full lg:w-1/2 aspect-[4/3] lg:aspect-auto lg:h-full">
                  <Image
                    src="/images/eryri-adventurer/front-headon.jpg"
                    alt="Eryri Adventurer Front"
                    fill
                    className="object-cover rounded-lg shadow-2xl"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-primary text-black px-4 py-2 rounded font-bold text-sm">
                    4 BERTH
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-primary to-transparent" />
              <div className="absolute bottom-0 left-0 w-full h-1 bg-primary" />
              <div className="absolute top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-primary/20" />
            </div>
          </div>

          {/* Download All Section */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold text-white mb-2">Download Tips</h3>
            <p className="text-gray-400 mb-4">PNG files are exported at 3x scale for high-resolution print quality. SVG files are true vector format.</p>
            <ul className="text-gray-500 text-sm space-y-1">
              <li>Full Banner (PNG): ~5760 × 3240 pixels</li>
              <li>Full Banner (SVG): Scalable vector - infinite resolution</li>
              <li>Social Banner: ~3600 × 1890 pixels</li>
              <li>Instagram Square: ~3240 × 3240 pixels</li>
              <li>Leaderboard: ~2184 × 270 pixels</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}
