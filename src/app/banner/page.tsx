"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Download, ArrowLeft, Facebook, Instagram, Twitter, User, Edit3, Youtube } from "lucide-react";
import html2canvas from "html2canvas";

type BannerType = "facebook" | "twitter" | "instagram-post" | "instagram-story" | "youtube" | "profile";

interface BannerConfig {
  width: number;
  height: number;
  name: string;
  description: string;
}

const bannerConfigs: Record<BannerType, BannerConfig> = {
  facebook: { width: 820, height: 312, name: "Facebook Cover", description: "820 x 312 pixels" },
  twitter: { width: 1500, height: 500, name: "Twitter/X Header", description: "1500 x 500 pixels" },
  "instagram-post": { width: 1080, height: 1080, name: "Instagram Post", description: "1080 x 1080 pixels" },
  "instagram-story": { width: 1080, height: 1920, name: "Instagram Story", description: "1080 x 1920 pixels" },
  youtube: { width: 2048, height: 1152, name: "YouTube Banner", description: "2048 x 1152 pixels" },
  profile: { width: 180, height: 180, name: "Profile Picture", description: "180 x 180 pixels" },
};

const backgroundOptions = [
  { id: "van-red", src: "/images/eryri-adventurer/front-three-quarter.jpg", name: "Red Van Scenic" },
  { id: "van-front", src: "/images/eryri-adventurer/front-headon.jpg", name: "Van Front" },
  { id: "van-side", src: "/images/eryri-adventurer/side-three-quarter.jpg", name: "Van Side" },
  { id: "van-poptop", src: "/images/eryri-adventurer/poptop-raised.jpg", name: "Pop Top Raised" },
  { id: "solid-dark", src: "", name: "Solid Dark" },
];

const messagePresets = [
  { headline: "NORTH WALES PREMIUM", subheadline: "CAMPERVAN MANUFACTURER", tagline: "CAMPERVANS NORTH WALES" },
  { headline: "BUILD YOUR DREAM", subheadline: "CAMPERVAN", tagline: "CUSTOM CONVERSIONS" },
  { headline: "CAMPERVANS", subheadline: "FOR SALE", tagline: "QUALITY PRE-OWNED & NEW" },
  { headline: "ERYRI ADVENTURER", subheadline: "FROM £49,950", tagline: "OUR FLAGSHIP MODEL" },
  { headline: "BOOK A", subheadline: "VIEWING TODAY", tagline: "LLANDUDNO, NORTH WALES" },
  { headline: "FINANCE", subheadline: "AVAILABLE", tagline: "FLEXIBLE PAYMENT OPTIONS" },
];

export default function BannerPage() {
  const bannerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedType, setSelectedType] = useState<BannerType>("facebook");
  const [selectedBackground, setSelectedBackground] = useState(backgroundOptions[0]);
  const [customText, setCustomText] = useState({
    headline: "NORTH WALES PREMIUM",
    subheadline: "CAMPERVAN MANUFACTURER",
    tagline: "CAMPERVANS NORTH WALES",
  });
  const [showContact, setShowContact] = useState(true);
  const [isAllowed, setIsAllowed] = useState(false);

  const config = bannerConfigs[selectedType];

  // Only block access on production domain, allow everywhere else
  useEffect(() => {
    const hostname = window.location.hostname;
    const isProduction = hostname === "hilltopcampers.co.uk" || hostname === "www.hilltopcampers.co.uk" || hostname.endsWith(".netlify.app");

    if (isProduction) {
      router.replace("/");
    } else {
      setIsAllowed(true);
    }
  }, [router]);

  // Don't render anything until we confirm access is allowed
  if (!isAllowed) {
    return (
      <div className="min-h-screen bg-[#1a1c20] flex items-center justify-center">
        <div className="text-gray-400">Loading...</div>
      </div>
    );
  }

  const applyPreset = (preset: typeof messagePresets[0]) => {
    setCustomText(preset);
  };

  const downloadBanner = async () => {
    if (!bannerRef.current) return;

    setIsGenerating(true);

    try {
      const element = bannerRef.current;

      // Store original transform and temporarily remove it for capture
      const originalTransform = element.style.transform;
      element.style.transform = 'scale(1)';

      // Wait for the style to apply
      await new Promise(resolve => setTimeout(resolve, 100));

      const canvas = await html2canvas(element, {
        scale: 1, // Use scale 1 since we're capturing at full size
        useCORS: true,
        allowTaint: true,
        backgroundColor: "#1a1c20",
        logging: false,
        width: config.width,
        height: config.height,
      });

      // Restore original transform
      element.style.transform = originalTransform;

      const link = document.createElement("a");
      link.download = `hilltop-campers-${selectedType}-${Date.now()}.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
    } catch (error) {
      console.error("Error generating banner:", error);
      alert("Error generating banner. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  // Render different layouts based on banner type
  const renderBannerContent = () => {
    if (selectedType === "profile") {
      return (
        <div className="w-full h-full flex items-center justify-center bg-[#25272c]">
          <div className="relative">
            <Image
              src="/images/hilltop-logo.png"
              alt="Hilltop Campers Logo"
              width={140}
              height={140}
              className="object-contain"
              unoptimized
            />
          </div>
        </div>
      );
    }

    if (selectedType === "instagram-story") {
      return (
        <>
          {/* Background - CSS for html2canvas compatibility */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: selectedBackground.src ? `url(${selectedBackground.src})` : 'none',
              backgroundColor: selectedBackground.src ? undefined : '#25272c',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
          </div>

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col justify-between p-12">
            {/* Top - Logo */}
            <div className="flex items-center justify-center gap-4 pt-8">
              <Image
                src="/images/hilltop-logo.png"
                alt="Hilltop Campers Logo"
                width={80}
                height={80}
                className="object-contain"
                unoptimized
              />
              <div>
                <h2 className="text-3xl font-bold">
                  <span className="text-primary">HILLTOP</span>{" "}
                  <span className="text-white">CAMPERS</span>
                </h2>
                <p className="text-sm text-gray-300">Camper van conversion specialists</p>
              </div>
            </div>

            {/* Center - Main Text */}
            <div className="text-center flex-1 flex flex-col justify-center">
              <p className="text-primary text-xl font-semibold mb-4 tracking-wider">
                {customText.tagline}
              </p>
              <h1 className="text-6xl font-black text-white leading-tight mb-4">
                {customText.headline}
              </h1>
              <h2 className="text-5xl font-black text-primary leading-tight">
                {customText.subheadline}
              </h2>
            </div>

            {/* Bottom - Contact */}
            {showContact && (
              <div className="text-center pb-8">
                <div className="inline-block bg-black/50 backdrop-blur-sm rounded-2xl px-8 py-6">
                  <p className="text-white text-2xl font-bold mb-2">07869 169826</p>
                  <p className="text-primary text-xl">hilltopcampers.co.uk</p>
                </div>
              </div>
            )}
          </div>

          {/* Green stripe */}
          <div className="absolute bottom-0 left-0 right-0 h-2 bg-primary" />
        </>
      );
    }

    if (selectedType === "instagram-post") {
      return (
        <>
          {/* Background - CSS for html2canvas compatibility */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: selectedBackground.src ? `url(${selectedBackground.src})` : 'none',
              backgroundColor: selectedBackground.src ? undefined : '#25272c',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />
          </div>

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col justify-between p-10">
            {/* Top - Logo */}
            <div className="flex items-center gap-3">
              <Image
                src="/images/hilltop-logo.png"
                alt="Hilltop Campers Logo"
                width={60}
                height={60}
                className="object-contain"
                unoptimized
              />
              <div>
                <h2 className="text-2xl font-bold">
                  <span className="text-primary">HILLTOP</span>{" "}
                  <span className="text-white">CAMPERS</span>
                </h2>
                <p className="text-xs text-gray-300">Camper van conversion specialists</p>
              </div>
            </div>

            {/* Center - Main Text */}
            <div className="text-center">
              <p className="text-primary text-lg font-semibold mb-3 tracking-wider">
                {customText.tagline}
              </p>
              <h1 className="text-5xl font-black text-white leading-tight mb-3">
                {customText.headline}
              </h1>
              <h2 className="text-4xl font-black text-primary leading-tight">
                {customText.subheadline}
              </h2>
            </div>

            {/* Bottom - Contact */}
            {showContact && (
              <div className="flex items-center justify-center gap-6 text-white text-lg">
                <span className="font-bold">07869 169826</span>
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-primary font-bold">hilltopcampers.co.uk</span>
              </div>
            )}
          </div>

          {/* Green stripe */}
          <div className="absolute bottom-0 left-0 right-0 h-2 bg-primary" />
        </>
      );
    }

    // Facebook, Twitter, and YouTube layouts
    const isTwitter = selectedType === "twitter";
    const isFacebook = selectedType === "facebook";
    const isYoutube = selectedType === "youtube";

    return (
      <>
        {/* Background - using CSS background-image for better html2canvas compatibility */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: selectedBackground.src ? `url(${selectedBackground.src})` : 'none',
            backgroundColor: selectedBackground.src ? undefined : '#25272c',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className={`absolute inset-0 ${isYoutube ? 'bg-gradient-to-r from-black/70 via-black/40 to-black/70' : 'bg-gradient-to-r from-black/80 via-black/50 to-transparent'}`} />
        </div>

        {/* Content */}
        <div
          className={`relative z-10 h-full flex flex-col ${isYoutube ? 'items-center justify-center' : 'justify-between'}`}
          style={{
            padding: isYoutube ? "40px 60px" : isFacebook ? "18px 28px" : isTwitter ? "24px 40px" : "20px 32px"
          }}
        >
          {/* Top - Logo (not centered for YouTube) */}
          {!isYoutube && (
            <div className="flex items-center gap-2">
              <Image
                src="/images/hilltop-logo.png"
                alt="Hilltop Campers Logo"
                width={isFacebook ? 40 : isTwitter ? 56 : 48}
                height={isFacebook ? 40 : isTwitter ? 56 : 48}
                className="object-contain"
                unoptimized
              />
              <div>
                <h2 style={{ fontSize: isFacebook ? "18px" : isTwitter ? "24px" : "20px" }} className="font-bold">
                  <span className="text-primary">HILLTOP</span>{" "}
                  <span className="text-white">CAMPERS</span>
                </h2>
                <p style={{ fontSize: isFacebook ? "10px" : "12px" }} className="text-gray-300">Camper van conversion specialists</p>
              </div>
            </div>
          )}

          {/* YouTube - Horizontal layout optimized for YouTube's safe area (center strip) */}
          {isYoutube && (
            <div className="flex items-center justify-center gap-12 w-full">
              {/* Logo */}
              <Image
                src="/images/hilltop-logo.png"
                alt="Hilltop Campers Logo"
                width={100}
                height={100}
                className="object-contain"
                unoptimized
              />

              {/* Brand Name */}
              <div>
                <h2 className="text-5xl font-bold">
                  <span className="text-primary">HILLTOP</span>{" "}
                  <span className="text-white">CAMPERS</span>
                </h2>
                <p className="text-xl text-gray-300">Camper van conversion specialists</p>
              </div>

              {/* Divider */}
              <div className="w-1 h-20 bg-primary" />

              {/* Main Message */}
              <div className="text-center">
                <p className="text-primary text-lg font-semibold tracking-wider mb-1">
                  {customText.tagline}
                </p>
                <h1 className="text-4xl font-black text-white leading-tight">
                  {customText.headline}
                </h1>
                <h2 className="text-3xl font-black text-primary leading-tight">
                  {customText.subheadline}
                </h2>
              </div>

              {/* Divider */}
              <div className="w-1 h-20 bg-primary" />

              {/* Contact */}
              {showContact && (
                <div className="text-white text-lg space-y-1">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span>07869 169826</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span>hilltopcampers.co.uk</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span>Llandudno</span>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Center - Main Text (for Facebook/Twitter) */}
          {!isYoutube && (
            <div style={{ maxWidth: isFacebook ? "450px" : isTwitter ? "700px" : "450px" }}>
              <p className="text-primary font-semibold tracking-wider" style={{ fontSize: isFacebook ? "12px" : isTwitter ? "16px" : "14px", marginBottom: "2px" }}>
                {customText.tagline}
              </p>
              <h1 className="font-black text-white leading-tight" style={{ fontSize: isFacebook ? "28px" : isTwitter ? "42px" : "30px", marginBottom: "2px" }}>
                {customText.headline}
              </h1>
              <h2 className="font-black text-primary leading-tight" style={{ fontSize: isFacebook ? "24px" : isTwitter ? "38px" : "28px" }}>
                {customText.subheadline}
              </h2>
            </div>
          )}

          {/* Bottom - Contact (for Facebook/Twitter) */}
          {!isYoutube && showContact && (
            <div className="flex items-center gap-5 text-white" style={{ fontSize: isFacebook ? "12px" : isTwitter ? "16px" : "14px" }}>
              <div className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span>07869 169826</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span>hilltopcampers.co.uk</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span>Llandudno</span>
              </div>
            </div>
          )}
        </div>

        {/* Green stripe */}
        <div className="absolute bottom-0 left-0 right-0 bg-primary" style={{ height: isYoutube ? "8px" : "4px" }} />
      </>
    );
  };

  return (
    <div className="min-h-screen bg-[#1a1c20] pt-[104px]">
      {/* Controls Bar */}
      <div className="bg-[#25272c] border-b border-gray-700 px-4 py-3">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-gray-300 hover:text-primary transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </Link>
          <button
            onClick={downloadBanner}
            disabled={isGenerating}
            className="flex items-center gap-2 bg-primary text-black px-6 py-2 rounded font-bold uppercase hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Download size={20} />
            {isGenerating ? "Generating..." : `Download ${config.name}`}
          </button>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-white mb-2">
          Social Media <span className="text-primary">Kit</span>
        </h1>
        <p className="text-gray-400 mb-8">
          Create professional banners for all your social media platforms.
        </p>

        <div className="grid lg:grid-cols-[1fr,380px] gap-8">
          {/* Preview Area */}
          <div>
            {/* Banner Type Selector */}
            <div className="flex flex-wrap gap-2 mb-6">
              {(Object.keys(bannerConfigs) as BannerType[]).map((type) => {
                const icons = {
                  facebook: Facebook,
                  twitter: Twitter,
                  "instagram-post": Instagram,
                  "instagram-story": Instagram,
                  youtube: Youtube,
                  profile: User,
                };
                const Icon = icons[type];
                return (
                  <button
                    key={type}
                    onClick={() => setSelectedType(type)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                      selectedType === type
                        ? "bg-primary text-black"
                        : "bg-[#25272c] text-gray-300 hover:text-white border border-gray-700"
                    }`}
                  >
                    <Icon size={18} />
                    {bannerConfigs[type].name}
                  </button>
                );
              })}
            </div>

            {/* Banner Preview */}
            <div className="border-2 border-gray-700 rounded-lg overflow-hidden bg-[#0a0a0a]">
              <p className="bg-[#25272c] text-gray-400 text-sm px-4 py-2 border-b border-gray-700 flex justify-between">
                <span>Preview: {config.name}</span>
                <span className="text-primary">{config.description}</span>
              </p>

              <div className="p-4 overflow-x-auto flex justify-center">
                {/* Preview wrapper - scales down for display */}
                <div
                  className="shrink-0"
                  style={{
                    width: selectedType === "instagram-story" ? "270px" :
                           selectedType === "instagram-post" ? "400px" :
                           selectedType === "twitter" ? "750px" :
                           selectedType === "youtube" ? "614px" :
                           selectedType === "profile" ? "180px" :
                           "820px",
                    height: selectedType === "instagram-story" ? "480px" :
                            selectedType === "instagram-post" ? "400px" :
                            selectedType === "twitter" ? "250px" :
                            selectedType === "youtube" ? "346px" :
                            selectedType === "profile" ? "180px" :
                            "312px",
                  }}
                >
                  {/* Actual size container - this gets captured */}
                  <div
                    ref={bannerRef}
                    className="origin-top-left"
                    style={{
                      width: `${config.width}px`,
                      height: `${config.height}px`,
                      transform: selectedType === "instagram-story" ? "scale(0.25)" :
                                 selectedType === "instagram-post" ? "scale(0.37)" :
                                 selectedType === "twitter" ? "scale(0.5)" :
                                 selectedType === "youtube" ? "scale(0.3)" :
                                 selectedType === "profile" ? "scale(1)" :
                                 "scale(1)",
                      position: "relative",
                    }}
                  >
                    {renderBannerContent()}
                  </div>
                </div>
              </div>
            </div>

            {/* Actual size note for scaled previews */}
            {selectedType !== "profile" && (
              <p className="text-gray-500 text-sm mt-2 text-center">
                Preview scaled to fit. Download will be full size ({config.description}).
              </p>
            )}
          </div>

          {/* Customization Panel */}
          <div className="space-y-6">
            {/* Message Presets */}
            <div className="bg-[#25272c] rounded-lg p-4 border border-gray-700">
              <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                <Edit3 size={18} className="text-primary" />
                Quick Messages
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {messagePresets.map((preset, index) => (
                  <button
                    key={index}
                    onClick={() => applyPreset(preset)}
                    className="text-left p-3 bg-[#1a1c20] rounded-lg border border-gray-700 hover:border-primary transition-colors"
                  >
                    <p className="text-primary text-xs font-semibold truncate">{preset.tagline}</p>
                    <p className="text-white text-sm font-bold truncate">{preset.headline}</p>
                    <p className="text-gray-400 text-xs truncate">{preset.subheadline}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Text */}
            {selectedType !== "profile" && (
              <div className="bg-[#25272c] rounded-lg p-4 border border-gray-700">
                <h3 className="text-white font-bold mb-3">Custom Text</h3>
                <div className="space-y-3">
                  <div>
                    <label className="text-gray-400 text-xs uppercase tracking-wider block mb-1">Tagline</label>
                    <input
                      type="text"
                      value={customText.tagline}
                      onChange={(e) => setCustomText({ ...customText, tagline: e.target.value })}
                      className="w-full bg-[#1a1c20] border border-gray-700 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="text-gray-400 text-xs uppercase tracking-wider block mb-1">Headline</label>
                    <input
                      type="text"
                      value={customText.headline}
                      onChange={(e) => setCustomText({ ...customText, headline: e.target.value })}
                      className="w-full bg-[#1a1c20] border border-gray-700 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="text-gray-400 text-xs uppercase tracking-wider block mb-1">Subheadline</label>
                    <input
                      type="text"
                      value={customText.subheadline}
                      onChange={(e) => setCustomText({ ...customText, subheadline: e.target.value })}
                      className="w-full bg-[#1a1c20] border border-gray-700 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-primary"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Background Selection */}
            {selectedType !== "profile" && (
              <div className="bg-[#25272c] rounded-lg p-4 border border-gray-700">
                <h3 className="text-white font-bold mb-3">Background</h3>
                <div className="grid grid-cols-3 gap-2">
                  {backgroundOptions.map((bg) => (
                    <button
                      key={bg.id}
                      onClick={() => setSelectedBackground(bg)}
                      className={`relative aspect-video rounded-lg overflow-hidden border-2 transition-colors ${
                        selectedBackground.id === bg.id ? "border-primary" : "border-gray-700 hover:border-gray-500"
                      }`}
                    >
                      {bg.src ? (
                        <Image src={bg.src} alt={bg.name} fill className="object-cover" unoptimized />
                      ) : (
                        <div className="w-full h-full bg-[#1a1c20] flex items-center justify-center">
                          <span className="text-gray-500 text-xs">Solid</span>
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Show Contact Toggle */}
            {selectedType !== "profile" && (
              <div className="bg-[#25272c] rounded-lg p-4 border border-gray-700">
                <label className="flex items-center justify-between cursor-pointer">
                  <span className="text-white font-bold">Show Contact Info</span>
                  <div
                    className={`w-12 h-6 rounded-full transition-colors ${
                      showContact ? "bg-primary" : "bg-gray-600"
                    }`}
                    onClick={() => setShowContact(!showContact)}
                  >
                    <div
                      className={`w-5 h-5 rounded-full bg-white shadow-md transform transition-transform mt-0.5 ${
                        showContact ? "translate-x-6" : "translate-x-1"
                      }`}
                    />
                  </div>
                </label>
              </div>
            )}

            {/* Download Instructions */}
            <div className="bg-[#1a1c20] rounded-lg p-4 border border-gray-700">
              <h3 className="text-white font-bold mb-2 text-sm">How to use</h3>
              <ol className="text-gray-400 text-xs space-y-1 list-decimal list-inside">
                <li>Select your platform above</li>
                <li>Choose a message preset or customize text</li>
                <li>Pick a background image</li>
                <li>Click "Download" to save</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
