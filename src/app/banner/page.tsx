import Image from "next/image";
import { Battery, Flame, Zap, Shield, MapPin, Phone, Mail, Globe } from "lucide-react";

export const metadata = {
  title: "Marketing Banner | Hilltop Campers",
  description: "High-quality marketing banner for Hilltop Campers",
};

export default function BannerPage() {
  return (
    <div className="min-h-screen bg-[#0a0b0c] pt-[104px] pb-20">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-white mb-8 text-center">Marketing Banner</h1>
        <p className="text-gray-400 text-center mb-12">High-quality banner for print and digital use. Right-click to save the banner image.</p>

        {/* Banner Preview Container */}
        <div className="max-w-6xl mx-auto">

          {/* Main Banner - 1920x1080 aspect ratio */}
          <div className="mb-16">
            <h2 className="text-xl font-semibold text-white mb-4">Full Banner (1920 × 1080)</h2>
            <div
              id="main-banner"
              className="relative w-full aspect-[16/9] rounded-lg overflow-hidden shadow-2xl"
              style={{
                background: 'linear-gradient(135deg, #0a0b0c 0%, #1a1c20 50%, #25272c 100%)'
              }}
            >
              {/* Background Image Layer */}
              <div className="absolute inset-0">
                <Image
                  src="/images/Camper_ai_2.jpeg"
                  alt="Hilltop Campers Background"
                  fill
                  className="object-cover opacity-40"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
              </div>

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
                  <p className="text-white text-lg lg:text-xl max-w-2xl mt-4">
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
            <h2 className="text-xl font-semibold text-white mb-4">Social Media Banner (1200 × 630)</h2>
            <div
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
            <h2 className="text-xl font-semibold text-white mb-4">Leaderboard Banner (728 × 90)</h2>
            <div
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
            <h2 className="text-xl font-semibold text-white mb-4">Instagram Square (1080 × 1080)</h2>
            <div
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
            <h2 className="text-xl font-semibold text-white mb-4">Eryri Adventurer Feature Banner</h2>
            <div
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

        </div>
      </div>
    </div>
  );
}
