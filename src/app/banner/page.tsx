"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Download, ArrowLeft, Facebook, Instagram, Twitter, User, Edit3, Youtube,
  AlignLeft, AlignCenter, AlignRight, Sun, ArrowUp, ArrowDown, Type, Phone,
  Globe, MapPin, Minus, Eye, Upload, Save, Trash2, FolderOpen, X, ImageIcon
} from "lucide-react";
import html2canvas from "html2canvas";

type BannerType = "facebook" | "twitter" | "instagram-post" | "instagram-story" | "youtube" | "profile";
type HorizontalAlign = "left" | "center" | "right";
type VerticalAlign = "top" | "center" | "bottom";
type BackgroundPosition = "left" | "center" | "right" | "top" | "bottom";

interface BannerConfig {
  width: number;
  height: number;
  name: string;
  description: string;
}

interface BackgroundOption {
  id: string;
  src: string;
  name: string;
  isCustom?: boolean;
}

interface SavedPreset {
  id: string;
  name: string;
  createdAt: number;
  settings: {
    customText: { headline: string; subheadline: string; tagline: string };
    contactInfo: { phone: string; website: string; location: string };
    showContact: boolean;
    showLogo: boolean;
    showBrandName: boolean;
    logoSize: number;
    headlineFontSize: number;
    subheadlineFontSize: number;
    taglineFontSize: number;
    showGreenStripe: boolean;
    stripeThickness: number;
    showTextShadow: boolean;
    horizontalAlign: HorizontalAlign;
    verticalAlign: VerticalAlign;
    imageBrightness: number;
    overlayOpacity: number;
    bgPositionX: BackgroundPosition;
    bgPositionY: BackgroundPosition;
  };
}

const bannerConfigs: Record<BannerType, BannerConfig> = {
  facebook: { width: 820, height: 312, name: "Facebook Cover", description: "820 x 312 pixels" },
  twitter: { width: 1500, height: 500, name: "Twitter/X Header", description: "1500 x 500 pixels" },
  "instagram-post": { width: 1080, height: 1080, name: "Instagram Post", description: "1080 x 1080 pixels" },
  "instagram-story": { width: 1080, height: 1920, name: "Instagram Story", description: "1080 x 1920 pixels" },
  youtube: { width: 2048, height: 1152, name: "YouTube Banner", description: "2048 x 1152 pixels" },
  profile: { width: 180, height: 180, name: "Profile Picture", description: "180 x 180 pixels" },
};

const defaultBackgroundOptions: BackgroundOption[] = [
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

const PRESETS_STORAGE_KEY = "hilltop-banner-presets";

export default function BannerPage() {
  const bannerRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedType, setSelectedType] = useState<BannerType>("facebook");
  const [backgroundOptions, setBackgroundOptions] = useState<BackgroundOption[]>(defaultBackgroundOptions);
  const [selectedBackground, setSelectedBackground] = useState<BackgroundOption>(defaultBackgroundOptions[0]);
  const [customText, setCustomText] = useState({
    headline: "NORTH WALES PREMIUM",
    subheadline: "CAMPERVAN MANUFACTURER",
    tagline: "CAMPERVANS NORTH WALES",
  });
  const [showContact, setShowContact] = useState(true);
  const [isAllowed, setIsAllowed] = useState(false);

  // Positioning and brightness controls
  const [horizontalAlign, setHorizontalAlign] = useState<HorizontalAlign>("left");
  const [verticalAlign, setVerticalAlign] = useState<VerticalAlign>("center");
  const [imageBrightness, setImageBrightness] = useState(100);
  const [overlayOpacity, setOverlayOpacity] = useState(50);

  // Logo controls
  const [showLogo, setShowLogo] = useState(true);
  const [logoSize, setLogoSize] = useState(100);

  // Font size controls
  const [headlineFontSize, setHeadlineFontSize] = useState(100);
  const [subheadlineFontSize, setSubheadlineFontSize] = useState(100);
  const [taglineFontSize, setTaglineFontSize] = useState(100);

  // Custom contact info
  const [contactInfo, setContactInfo] = useState({
    phone: "07869 169826",
    website: "hilltopcampers.co.uk",
    location: "Llandudno",
  });

  // Green stripe controls
  const [showGreenStripe, setShowGreenStripe] = useState(true);
  const [stripeThickness, setStripeThickness] = useState(4);

  // Background position
  const [bgPositionX, setBgPositionX] = useState<BackgroundPosition>("center");
  const [bgPositionY, setBgPositionY] = useState<BackgroundPosition>("center");

  // Text shadow
  const [showTextShadow, setShowTextShadow] = useState(true);

  // Brand name visibility
  const [showBrandName, setShowBrandName] = useState(true);

  // Preset management
  const [savedPresets, setSavedPresets] = useState<SavedPreset[]>([]);
  const [presetName, setPresetName] = useState("");
  const [showPresetModal, setShowPresetModal] = useState(false);

  const config = bannerConfigs[selectedType];

  // Logo as base64 data URL for html2canvas compatibility
  const [logoDataUrl, setLogoDataUrl] = useState<string>("/images/hilltop-logo.png");

  // Load saved presets from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(PRESETS_STORAGE_KEY);
      if (stored) {
        setSavedPresets(JSON.parse(stored));
      }
    } catch (error) {
      console.error("Error loading presets:", error);
    }
  }, []);

  // Convert logo to base64 on mount for reliable html2canvas capture
  useEffect(() => {
    const convertLogoToBase64 = async () => {
      try {
        const response = await fetch("/images/hilltop-logo.png");
        const blob = await response.blob();
        const reader = new FileReader();
        reader.onloadend = () => {
          const dataUrl = reader.result as string;
          setLogoDataUrl(dataUrl);
        };
        reader.readAsDataURL(blob);
      } catch (error) {
        console.error("Error converting logo to base64:", error);
        // Fallback: try with Image element
        const img = new window.Image();
        img.crossOrigin = "anonymous";
        img.onload = () => {
          const canvas = document.createElement("canvas");
          canvas.width = img.naturalWidth;
          canvas.height = img.naturalHeight;
          const ctx = canvas.getContext("2d");
          if (ctx) {
            ctx.drawImage(img, 0, 0);
            const dataUrl = canvas.toDataURL("image/png");
            setLogoDataUrl(dataUrl);
          }
        };
        img.src = "/images/hilltop-logo.png";
      }
    };
    convertLogoToBase64();
  }, []);

  // Only block access on production domain
  useEffect(() => {
    const hostname = window.location.hostname;
    const isProduction = hostname === "hilltopcampers.co.uk" || hostname === "www.hilltopcampers.co.uk" || hostname.endsWith(".netlify.app");

    if (isProduction) {
      router.replace("/");
    } else {
      setIsAllowed(true);
    }
  }, [router]);

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

  // Handle custom background image upload
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      alert('Please upload an image file');
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      alert('Image too large. Please use an image under 10MB.');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const dataUrl = e.target?.result as string;
      const newBackground: BackgroundOption = {
        id: `custom-${Date.now()}`,
        src: dataUrl,
        name: file.name.replace(/\.[^/.]+$/, "").slice(0, 20),
        isCustom: true,
      };

      setBackgroundOptions(prev => [...prev, newBackground]);
      setSelectedBackground(newBackground);
    };
    reader.readAsDataURL(file);

    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const removeCustomBackground = (id: string) => {
    setBackgroundOptions(prev => prev.filter(bg => bg.id !== id));
    if (selectedBackground.id === id) {
      setSelectedBackground(defaultBackgroundOptions[0]);
    }
  };

  const savePreset = () => {
    if (!presetName.trim()) {
      alert('Please enter a preset name');
      return;
    }

    const newPreset: SavedPreset = {
      id: `preset-${Date.now()}`,
      name: presetName.trim(),
      createdAt: Date.now(),
      settings: {
        customText,
        contactInfo,
        showContact,
        showLogo,
        showBrandName,
        logoSize,
        headlineFontSize,
        subheadlineFontSize,
        taglineFontSize,
        showGreenStripe,
        stripeThickness,
        showTextShadow,
        horizontalAlign,
        verticalAlign,
        imageBrightness,
        overlayOpacity,
        bgPositionX,
        bgPositionY,
      },
    };

    const updatedPresets = [...savedPresets, newPreset];
    setSavedPresets(updatedPresets);
    localStorage.setItem(PRESETS_STORAGE_KEY, JSON.stringify(updatedPresets));
    setPresetName("");
    setShowPresetModal(false);
  };

  const loadPreset = (preset: SavedPreset) => {
    const s = preset.settings;
    setCustomText(s.customText);
    setContactInfo(s.contactInfo);
    setShowContact(s.showContact);
    setShowLogo(s.showLogo);
    setShowBrandName(s.showBrandName);
    setLogoSize(s.logoSize);
    setHeadlineFontSize(s.headlineFontSize);
    setSubheadlineFontSize(s.subheadlineFontSize);
    setTaglineFontSize(s.taglineFontSize);
    setShowGreenStripe(s.showGreenStripe);
    setStripeThickness(s.stripeThickness);
    setShowTextShadow(s.showTextShadow);
    setHorizontalAlign(s.horizontalAlign);
    setVerticalAlign(s.verticalAlign);
    setImageBrightness(s.imageBrightness);
    setOverlayOpacity(s.overlayOpacity);
    setBgPositionX(s.bgPositionX);
    setBgPositionY(s.bgPositionY);
  };

  const deletePreset = (id: string) => {
    const updatedPresets = savedPresets.filter(p => p.id !== id);
    setSavedPresets(updatedPresets);
    localStorage.setItem(PRESETS_STORAGE_KEY, JSON.stringify(updatedPresets));
  };

  // Preload images before capture
  const preloadImages = async (): Promise<void> => {
    const imageSources: string[] = [];
    if (selectedBackground.src) {
      imageSources.push(selectedBackground.src);
    }
    imageSources.push(logoDataUrl);

    await Promise.all(
      imageSources.map(
        (src) =>
          new Promise<void>((resolve) => {
            const img = new window.Image();
            img.crossOrigin = "anonymous";
            img.onload = () => resolve();
            img.onerror = () => resolve();
            img.src = src;
          })
      )
    );
  };

  const downloadBanner = async () => {
    if (!bannerRef.current) return;

    setIsGenerating(true);

    try {
      await preloadImages();

      const element = bannerRef.current;
      const originalTransform = element.style.transform;
      element.style.transform = 'scale(1)';

      await new Promise(resolve => setTimeout(resolve, 300));

      const canvas = await html2canvas(element, {
        scale: 1,
        useCORS: true,
        allowTaint: true,
        backgroundColor: "#1a1c20",
        logging: false,
        width: config.width,
        height: config.height,
        imageTimeout: 15000,
        onclone: (clonedDoc) => {
          const images = clonedDoc.querySelectorAll('img');
          images.forEach((img) => {
            img.crossOrigin = 'anonymous';
          });
        },
      });

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

  const getContentJustify = () => {
    return { top: "flex-start", center: "center", bottom: "flex-end" }[verticalAlign];
  };

  const getContentAlign = () => {
    return { left: "flex-start", center: "center", right: "flex-end" }[horizontalAlign];
  };

  const getBackgroundPosition = () => `${bgPositionX} ${bgPositionY}`;

  const getTextShadow = () => {
    return showTextShadow ? "2px 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.5)" : "none";
  };

  const getBrightnessOverlay = () => {
    const darkenAmount = (100 - imageBrightness) / 100;
    return darkenAmount > 0 ? darkenAmount : 0;
  };

  const getFontSizes = (type: BannerType) => {
    const baseSizes = {
      facebook: { headline: 28, subheadline: 24, tagline: 12 },
      twitter: { headline: 42, subheadline: 38, tagline: 16 },
      "instagram-post": { headline: 50, subheadline: 40, tagline: 18 },
      "instagram-story": { headline: 60, subheadline: 50, tagline: 20 },
      youtube: { headline: 40, subheadline: 30, tagline: 18 },
      profile: { headline: 0, subheadline: 0, tagline: 0 },
    };

    const base = baseSizes[type];
    return {
      headline: Math.round(base.headline * (headlineFontSize / 100)),
      subheadline: Math.round(base.subheadline * (subheadlineFontSize / 100)),
      tagline: Math.round(base.tagline * (taglineFontSize / 100)),
    };
  };

  const getLogoSize = (type: BannerType, baseSize: number) => {
    return Math.round(baseSize * (logoSize / 100));
  };

  // Render banner content with native img elements for html2canvas compatibility
  const renderBannerContent = () => {
    const fontSizes = getFontSizes(selectedType);

    if (selectedType === "profile") {
      return (
        <div className="w-full h-full flex items-center justify-center bg-[#25272c]">
          <img
            src={logoDataUrl}
            alt="Hilltop Campers Logo"
            crossOrigin="anonymous"
            style={{
              width: `${getLogoSize("profile", 140)}px`,
              height: `${getLogoSize("profile", 140)}px`,
              objectFit: 'contain',
            }}
          />
        </div>
      );
    }

    const isTwitter = selectedType === "twitter";
    const isFacebook = selectedType === "facebook";
    const isYoutube = selectedType === "youtube";
    const isInstagramStory = selectedType === "instagram-story";
    const isInstagramPost = selectedType === "instagram-post";

    return (
      <>
        {/* Background Image */}
        {selectedBackground.src ? (
          <>
            <img
              src={selectedBackground.src}
              alt="Background"
              crossOrigin="anonymous"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: getBackgroundPosition(),
              }}
            />
            {imageBrightness < 100 && (
              <div style={{ position: 'absolute', inset: 0, backgroundColor: `rgba(0,0,0,${getBrightnessOverlay()})` }} />
            )}
          </>
        ) : (
          <div className="absolute inset-0 bg-[#25272c]" />
        )}

        {/* Gradient Overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: isYoutube
              ? `linear-gradient(to right, rgba(0,0,0,${overlayOpacity/100}), rgba(0,0,0,${overlayOpacity/200}), rgba(0,0,0,${overlayOpacity/100}))`
              : horizontalAlign === 'right'
                ? `linear-gradient(to left, rgba(0,0,0,${overlayOpacity/100}), rgba(0,0,0,${overlayOpacity/200}), transparent)`
                : horizontalAlign === 'center'
                  ? `linear-gradient(to bottom, rgba(0,0,0,${overlayOpacity/100}), rgba(0,0,0,${overlayOpacity/200}), rgba(0,0,0,${overlayOpacity/100}))`
                  : `linear-gradient(to right, rgba(0,0,0,${overlayOpacity/100}), rgba(0,0,0,${overlayOpacity/200}), transparent)`,
          }}
        />

        {/* Content */}
        <div
          className="relative z-10 h-full flex flex-col"
          style={{
            padding: isYoutube ? "40px 60px" : isInstagramStory ? "48px" : isInstagramPost ? "40px" : isFacebook ? "18px 28px" : isTwitter ? "24px 40px" : "20px 32px",
            justifyContent: getContentJustify(),
            alignItems: getContentAlign(),
          }}
        >
          {/* Logo and Brand */}
          {!isYoutube && (showLogo || showBrandName) && (
            <div className={`flex items-center gap-3 ${verticalAlign === 'top' ? 'mb-auto' : verticalAlign === 'bottom' ? 'mt-auto mb-4' : 'mb-4'}`}>
              {showLogo && (
                <img
                  src={logoDataUrl}
                  alt="Hilltop Campers Logo"
                  crossOrigin="anonymous"
                  style={{
                    width: `${getLogoSize(selectedType, isInstagramStory ? 80 : isInstagramPost ? 60 : isFacebook ? 40 : isTwitter ? 56 : 48)}px`,
                    height: `${getLogoSize(selectedType, isInstagramStory ? 80 : isInstagramPost ? 60 : isFacebook ? 40 : isTwitter ? 56 : 48)}px`,
                    objectFit: 'contain',
                  }}
                />
              )}
              {showBrandName && (
                <div className={horizontalAlign === 'center' ? 'text-center' : horizontalAlign === 'right' ? 'text-right' : 'text-left'}>
                  <h2 style={{ fontSize: isInstagramStory ? "30px" : isInstagramPost ? "24px" : isFacebook ? "18px" : isTwitter ? "24px" : "20px", textShadow: getTextShadow(), fontWeight: 'bold' }}>
                    <span style={{ color: '#7cb342' }}>HILLTOP</span>{" "}
                    <span style={{ color: 'white' }}>CAMPERS</span>
                  </h2>
                  <p style={{ fontSize: isInstagramStory ? "14px" : isFacebook ? "10px" : "12px", textShadow: getTextShadow(), color: '#d1d5db' }}>Camper van conversion specialists</p>
                </div>
              )}
            </div>
          )}

          {/* YouTube Layout */}
          {isYoutube && (
            <div
              className="flex items-center gap-12 w-full h-full"
              style={{
                justifyContent: horizontalAlign === 'left' ? 'flex-start' : horizontalAlign === 'right' ? 'flex-end' : 'center',
                alignItems: verticalAlign === 'top' ? 'flex-start' : verticalAlign === 'bottom' ? 'flex-end' : 'center',
              }}
            >
              {showLogo && (
                <img
                  src={logoDataUrl}
                  alt="Hilltop Campers Logo"
                  crossOrigin="anonymous"
                  style={{ width: `${getLogoSize("youtube", 100)}px`, height: `${getLogoSize("youtube", 100)}px`, objectFit: 'contain' }}
                />
              )}
              {showBrandName && (
                <div>
                  <h2 style={{ fontSize: "48px", fontWeight: 'bold', textShadow: getTextShadow() }}>
                    <span style={{ color: '#7cb342' }}>HILLTOP</span>{" "}
                    <span style={{ color: 'white' }}>CAMPERS</span>
                  </h2>
                  <p style={{ fontSize: "20px", color: '#d1d5db', textShadow: getTextShadow() }}>Camper van conversion specialists</p>
                </div>
              )}
              {(showLogo || showBrandName) && <div style={{ width: '4px', height: '80px', backgroundColor: '#7cb342' }} />}
              <div className="text-center">
                <p style={{ fontSize: `${fontSizes.tagline}px`, color: '#7cb342', fontWeight: '600', textShadow: getTextShadow(), marginBottom: '4px' }}>{customText.tagline}</p>
                <h1 style={{ fontSize: `${fontSizes.headline}px`, color: 'white', fontWeight: '900', textShadow: getTextShadow() }}>{customText.headline}</h1>
                <h2 style={{ fontSize: `${fontSizes.subheadline}px`, color: '#7cb342', fontWeight: '900', textShadow: getTextShadow() }}>{customText.subheadline}</h2>
              </div>
              {showContact && <div style={{ width: '4px', height: '80px', backgroundColor: '#7cb342' }} />}
              {showContact && (
                <div style={{ color: 'white', fontSize: '18px' }}>
                  <div className="flex items-center gap-2 mb-1">
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#7cb342' }} />
                    <span style={{ textShadow: getTextShadow() }}>{contactInfo.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 mb-1">
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#7cb342' }} />
                    <span style={{ textShadow: getTextShadow() }}>{contactInfo.website}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#7cb342' }} />
                    <span style={{ textShadow: getTextShadow() }}>{contactInfo.location}</span>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Main Text (non-YouTube) */}
          {!isYoutube && (
            <div style={{ maxWidth: isFacebook ? "450px" : isTwitter ? "700px" : "100%", textAlign: horizontalAlign }} className={verticalAlign === 'center' ? '' : 'my-4'}>
              <p style={{ fontSize: `${fontSizes.tagline}px`, color: '#7cb342', fontWeight: '600', textShadow: getTextShadow(), marginBottom: '4px', letterSpacing: '0.05em' }}>{customText.tagline}</p>
              <h1 style={{ fontSize: `${fontSizes.headline}px`, color: 'white', fontWeight: '900', lineHeight: '1.1', textShadow: getTextShadow(), marginBottom: '4px' }}>{customText.headline}</h1>
              <h2 style={{ fontSize: `${fontSizes.subheadline}px`, color: '#7cb342', fontWeight: '900', lineHeight: '1.1', textShadow: getTextShadow() }}>{customText.subheadline}</h2>
            </div>
          )}

          {/* Contact (non-YouTube) */}
          {!isYoutube && showContact && (
            <div
              className={`flex items-center gap-4 ${verticalAlign === 'bottom' ? 'mt-auto' : verticalAlign === 'top' ? 'mb-auto mt-4' : 'mt-4'}`}
              style={{ fontSize: isInstagramStory ? "24px" : isInstagramPost ? "18px" : isFacebook ? "12px" : isTwitter ? "16px" : "14px", color: 'white', justifyContent: getContentAlign() }}
            >
              {isInstagramStory ? (
                <div style={{ display: 'inline-block', backgroundColor: 'rgba(0,0,0,0.6)', borderRadius: '16px', padding: '24px 32px' }}>
                  <p style={{ fontWeight: 'bold', marginBottom: '8px' }}>{contactInfo.phone}</p>
                  <p style={{ color: '#7cb342' }}>{contactInfo.website}</p>
                </div>
              ) : (
                <>
                  <div className="flex items-center gap-1">
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#7cb342' }} />
                    <span style={{ textShadow: getTextShadow() }}>{contactInfo.phone}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#7cb342' }} />
                    <span style={{ textShadow: getTextShadow() }}>{contactInfo.website}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#7cb342' }} />
                    <span style={{ textShadow: getTextShadow() }}>{contactInfo.location}</span>
                  </div>
                </>
              )}
            </div>
          )}
        </div>

        {/* Green Stripe */}
        {showGreenStripe && (
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: `${isYoutube ? stripeThickness * 2 : stripeThickness}px`, backgroundColor: '#7cb342' }} />
        )}
      </>
    );
  };

  return (
    <div className="min-h-screen bg-[#1a1c20] pt-[104px]">
      {/* Save Preset Modal */}
      {showPresetModal && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
          <div className="bg-[#25272c] rounded-xl border border-gray-700 p-6 max-w-md w-full">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white font-bold text-lg">Save Preset</h3>
              <button onClick={() => setShowPresetModal(false)} className="text-gray-400 hover:text-white"><X size={20} /></button>
            </div>
            <p className="text-gray-400 text-sm mb-4">Save your current banner settings to quickly reuse them later.</p>
            <input
              type="text"
              value={presetName}
              onChange={(e) => setPresetName(e.target.value)}
              placeholder="Enter preset name..."
              className="w-full bg-[#1a1c20] border border-gray-700 rounded-lg px-4 py-3 text-white mb-4 focus:outline-none focus:border-primary"
              onKeyDown={(e) => e.key === 'Enter' && savePreset()}
            />
            <div className="flex gap-3">
              <button onClick={() => setShowPresetModal(false)} className="flex-1 py-2 px-4 border border-gray-700 rounded-lg text-gray-300 hover:text-white hover:border-gray-500 transition-colors">Cancel</button>
              <button onClick={savePreset} className="flex-1 py-2 px-4 bg-primary text-black rounded-lg font-bold hover:bg-primary/90 transition-colors">Save Preset</button>
            </div>
          </div>
        </div>
      )}

      {/* Controls Bar */}
      <div className="bg-[#25272c] border-b border-gray-700 px-4 py-3">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-gray-300 hover:text-primary transition-colors">
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </Link>
          <div className="flex items-center gap-3">
            <button onClick={() => setShowPresetModal(true)} className="flex items-center gap-2 bg-[#1a1c20] text-gray-300 px-4 py-2 rounded border border-gray-700 hover:border-primary hover:text-primary transition-colors">
              <Save size={18} />
              Save Preset
            </button>
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
      </div>

      <div className="max-w-[1400px] mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-white mb-2">Social Media <span className="text-primary">Kit</span></h1>
        <p className="text-gray-400 mb-8">Create professional banners for all your social media platforms.</p>

        <div className="grid lg:grid-cols-[1fr,380px] gap-8">
          {/* Preview Area */}
          <div>
            {/* Banner Type Selector */}
            <div className="flex flex-wrap gap-2 mb-6">
              {(Object.keys(bannerConfigs) as BannerType[]).map((type) => {
                const icons = { facebook: Facebook, twitter: Twitter, "instagram-post": Instagram, "instagram-story": Instagram, youtube: Youtube, profile: User };
                const Icon = icons[type];
                return (
                  <button
                    key={type}
                    onClick={() => setSelectedType(type)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${selectedType === type ? "bg-primary text-black" : "bg-[#25272c] text-gray-300 hover:text-white border border-gray-700"}`}
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
                <div
                  className="shrink-0"
                  style={{
                    width: selectedType === "instagram-story" ? "270px" : selectedType === "instagram-post" ? "400px" : selectedType === "twitter" ? "750px" : selectedType === "youtube" ? "614px" : selectedType === "profile" ? "180px" : "820px",
                    height: selectedType === "instagram-story" ? "480px" : selectedType === "instagram-post" ? "400px" : selectedType === "twitter" ? "250px" : selectedType === "youtube" ? "346px" : selectedType === "profile" ? "180px" : "312px",
                  }}
                >
                  <div
                    ref={bannerRef}
                    className="origin-top-left"
                    style={{
                      width: `${config.width}px`,
                      height: `${config.height}px`,
                      transform: selectedType === "instagram-story" ? "scale(0.25)" : selectedType === "instagram-post" ? "scale(0.37)" : selectedType === "twitter" ? "scale(0.5)" : selectedType === "youtube" ? "scale(0.3)" : "scale(1)",
                      position: "relative",
                    }}
                  >
                    {renderBannerContent()}
                  </div>
                </div>
              </div>
            </div>
            {selectedType !== "profile" && (
              <p className="text-gray-500 text-sm mt-2 text-center">Preview scaled to fit. Download will be full size ({config.description}).</p>
            )}
          </div>

          {/* Customization Panel */}
          <div className="space-y-4 max-h-[calc(100vh-200px)] overflow-y-auto pr-2">
            {/* Saved Presets */}
            {savedPresets.length > 0 && (
              <div className="bg-[#25272c] rounded-lg p-4 border border-gray-700">
                <h3 className="text-white font-bold mb-3 flex items-center gap-2"><FolderOpen size={18} className="text-primary" />Saved Presets</h3>
                <div className="space-y-2">
                  {savedPresets.map((preset) => (
                    <div key={preset.id} className="flex items-center justify-between bg-[#1a1c20] rounded-lg p-3 border border-gray-700">
                      <div className="flex-1 min-w-0">
                        <p className="text-white text-sm font-medium truncate">{preset.name}</p>
                        <p className="text-gray-500 text-xs">{new Date(preset.createdAt).toLocaleDateString()}</p>
                      </div>
                      <div className="flex items-center gap-2 ml-2">
                        <button onClick={() => loadPreset(preset)} className="p-2 text-primary hover:bg-primary/20 rounded transition-colors" title="Load preset"><FolderOpen size={16} /></button>
                        <button onClick={() => deletePreset(preset.id)} className="p-2 text-red-400 hover:bg-red-400/20 rounded transition-colors" title="Delete preset"><Trash2 size={16} /></button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Message Presets */}
            <div className="bg-[#25272c] rounded-lg p-4 border border-gray-700">
              <h3 className="text-white font-bold mb-3 flex items-center gap-2"><Edit3 size={18} className="text-primary" />Quick Messages</h3>
              <div className="grid grid-cols-2 gap-2">
                {messagePresets.map((preset, index) => (
                  <button key={index} onClick={() => applyPreset(preset)} className="text-left p-3 bg-[#1a1c20] rounded-lg border border-gray-700 hover:border-primary transition-colors">
                    <p className="text-primary text-xs font-semibold truncate">{preset.tagline}</p>
                    <p className="text-white text-sm font-bold truncate">{preset.headline}</p>
                    <p className="text-gray-400 text-xs truncate">{preset.subheadline}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Logo & Brand Controls */}
            {selectedType !== "profile" && (
              <div className="bg-[#25272c] rounded-lg p-4 border border-gray-700">
                <h3 className="text-white font-bold mb-3 flex items-center gap-2"><Eye size={18} className="text-primary" />Logo & Brand</h3>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-gray-300 text-sm">Show Logo</span>
                  <button onClick={() => setShowLogo(!showLogo)} className={`w-12 h-6 rounded-full transition-colors ${showLogo ? "bg-primary" : "bg-gray-600"}`}>
                    <div className={`w-5 h-5 rounded-full bg-white shadow-md transform transition-transform mt-0.5 ${showLogo ? "translate-x-6" : "translate-x-1"}`} />
                  </button>
                </div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-gray-300 text-sm">Show Brand Name</span>
                  <button onClick={() => setShowBrandName(!showBrandName)} className={`w-12 h-6 rounded-full transition-colors ${showBrandName ? "bg-primary" : "bg-gray-600"}`}>
                    <div className={`w-5 h-5 rounded-full bg-white shadow-md transform transition-transform mt-0.5 ${showBrandName ? "translate-x-6" : "translate-x-1"}`} />
                  </button>
                </div>
                {showLogo && (
                  <div>
                    <div className="flex items-center justify-between mb-2"><label className="text-gray-400 text-xs uppercase tracking-wider">Logo Size</label><span className="text-primary text-sm font-bold">{logoSize}%</span></div>
                    <input type="range" min="50" max="150" value={logoSize} onChange={(e) => setLogoSize(Number(e.target.value))} className="w-full h-2 bg-[#1a1c20] rounded-lg appearance-none cursor-pointer accent-primary" />
                  </div>
                )}
              </div>
            )}

            {/* Font Size Controls */}
            {selectedType !== "profile" && (
              <div className="bg-[#25272c] rounded-lg p-4 border border-gray-700">
                <h3 className="text-white font-bold mb-3 flex items-center gap-2"><Type size={18} className="text-primary" />Font Sizes</h3>
                <div className="mb-3">
                  <div className="flex items-center justify-between mb-1"><label className="text-gray-400 text-xs uppercase tracking-wider">Headline</label><span className="text-primary text-sm font-bold">{headlineFontSize}%</span></div>
                  <input type="range" min="50" max="150" value={headlineFontSize} onChange={(e) => setHeadlineFontSize(Number(e.target.value))} className="w-full h-2 bg-[#1a1c20] rounded-lg appearance-none cursor-pointer accent-primary" />
                </div>
                <div className="mb-3">
                  <div className="flex items-center justify-between mb-1"><label className="text-gray-400 text-xs uppercase tracking-wider">Subheadline</label><span className="text-primary text-sm font-bold">{subheadlineFontSize}%</span></div>
                  <input type="range" min="50" max="150" value={subheadlineFontSize} onChange={(e) => setSubheadlineFontSize(Number(e.target.value))} className="w-full h-2 bg-[#1a1c20] rounded-lg appearance-none cursor-pointer accent-primary" />
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1"><label className="text-gray-400 text-xs uppercase tracking-wider">Tagline</label><span className="text-primary text-sm font-bold">{taglineFontSize}%</span></div>
                  <input type="range" min="50" max="150" value={taglineFontSize} onChange={(e) => setTaglineFontSize(Number(e.target.value))} className="w-full h-2 bg-[#1a1c20] rounded-lg appearance-none cursor-pointer accent-primary" />
                </div>
                <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-700">
                  <span className="text-gray-300 text-sm">Text Shadow</span>
                  <button onClick={() => setShowTextShadow(!showTextShadow)} className={`w-12 h-6 rounded-full transition-colors ${showTextShadow ? "bg-primary" : "bg-gray-600"}`}>
                    <div className={`w-5 h-5 rounded-full bg-white shadow-md transform transition-transform mt-0.5 ${showTextShadow ? "translate-x-6" : "translate-x-1"}`} />
                  </button>
                </div>
              </div>
            )}

            {/* Text Position */}
            {selectedType !== "profile" && (
              <div className="bg-[#25272c] rounded-lg p-4 border border-gray-700">
                <h3 className="text-white font-bold mb-3">Text Position</h3>
                <div className="mb-4">
                  <label className="text-gray-400 text-xs uppercase tracking-wider block mb-2">Horizontal</label>
                  <div className="flex gap-2">
                    {(["left", "center", "right"] as HorizontalAlign[]).map((align) => (
                      <button key={align} onClick={() => setHorizontalAlign(align)} className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg border transition-colors ${horizontalAlign === align ? "bg-primary text-black border-primary" : "bg-[#1a1c20] text-gray-300 border-gray-700 hover:border-gray-500"}`}>
                        {align === "left" && <AlignLeft size={16} />}{align === "center" && <AlignCenter size={16} />}{align === "right" && <AlignRight size={16} />}
                        {align.charAt(0).toUpperCase() + align.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="text-gray-400 text-xs uppercase tracking-wider block mb-2">Vertical</label>
                  <div className="flex gap-2">
                    {(["top", "center", "bottom"] as VerticalAlign[]).map((align) => (
                      <button key={align} onClick={() => setVerticalAlign(align)} className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg border transition-colors ${verticalAlign === align ? "bg-primary text-black border-primary" : "bg-[#1a1c20] text-gray-300 border-gray-700 hover:border-gray-500"}`}>
                        {align === "top" && <ArrowUp size={16} />}{align === "center" && <AlignCenter size={16} />}{align === "bottom" && <ArrowDown size={16} />}
                        {align === "center" ? "Middle" : align.charAt(0).toUpperCase() + align.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Image Controls */}
            {selectedType !== "profile" && selectedBackground.src && (
              <div className="bg-[#25272c] rounded-lg p-4 border border-gray-700">
                <h3 className="text-white font-bold mb-3 flex items-center gap-2"><Sun size={18} className="text-primary" />Image Adjustments</h3>
                <div className="mb-4">
                  <label className="text-gray-400 text-xs uppercase tracking-wider block mb-2">Horizontal Position</label>
                  <div className="flex gap-2">
                    {(["left", "center", "right"] as BackgroundPosition[]).map((pos) => (
                      <button key={pos} onClick={() => setBgPositionX(pos)} className={`flex-1 py-2 rounded-lg border text-sm capitalize transition-colors ${bgPositionX === pos ? "bg-primary text-black border-primary" : "bg-[#1a1c20] text-gray-300 border-gray-700 hover:border-gray-500"}`}>{pos}</button>
                    ))}
                  </div>
                </div>
                <div className="mb-4">
                  <label className="text-gray-400 text-xs uppercase tracking-wider block mb-2">Vertical Position</label>
                  <div className="flex gap-2">
                    {(["top", "center", "bottom"] as BackgroundPosition[]).map((pos) => (
                      <button key={pos} onClick={() => setBgPositionY(pos)} className={`flex-1 py-2 rounded-lg border text-sm capitalize transition-colors ${bgPositionY === pos ? "bg-primary text-black border-primary" : "bg-[#1a1c20] text-gray-300 border-gray-700 hover:border-gray-500"}`}>{pos}</button>
                    ))}
                  </div>
                </div>
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2"><label className="text-gray-400 text-xs uppercase tracking-wider">Brightness</label><span className="text-primary text-sm font-bold">{imageBrightness}%</span></div>
                  <input type="range" min="50" max="150" value={imageBrightness} onChange={(e) => setImageBrightness(Number(e.target.value))} className="w-full h-2 bg-[#1a1c20] rounded-lg appearance-none cursor-pointer accent-primary" />
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2"><label className="text-gray-400 text-xs uppercase tracking-wider">Overlay Darkness</label><span className="text-primary text-sm font-bold">{overlayOpacity}%</span></div>
                  <input type="range" min="0" max="80" value={overlayOpacity} onChange={(e) => setOverlayOpacity(Number(e.target.value))} className="w-full h-2 bg-[#1a1c20] rounded-lg appearance-none cursor-pointer accent-primary" />
                </div>
              </div>
            )}

            {/* Green Stripe */}
            {selectedType !== "profile" && (
              <div className="bg-[#25272c] rounded-lg p-4 border border-gray-700">
                <h3 className="text-white font-bold mb-3 flex items-center gap-2"><Minus size={18} className="text-primary" />Green Stripe</h3>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-gray-300 text-sm">Show Stripe</span>
                  <button onClick={() => setShowGreenStripe(!showGreenStripe)} className={`w-12 h-6 rounded-full transition-colors ${showGreenStripe ? "bg-primary" : "bg-gray-600"}`}>
                    <div className={`w-5 h-5 rounded-full bg-white shadow-md transform transition-transform mt-0.5 ${showGreenStripe ? "translate-x-6" : "translate-x-1"}`} />
                  </button>
                </div>
                {showGreenStripe && (
                  <div>
                    <div className="flex items-center justify-between mb-2"><label className="text-gray-400 text-xs uppercase tracking-wider">Thickness</label><span className="text-primary text-sm font-bold">{stripeThickness}px</span></div>
                    <input type="range" min="2" max="12" value={stripeThickness} onChange={(e) => setStripeThickness(Number(e.target.value))} className="w-full h-2 bg-[#1a1c20] rounded-lg appearance-none cursor-pointer accent-primary" />
                  </div>
                )}
              </div>
            )}

            {/* Custom Text */}
            {selectedType !== "profile" && (
              <div className="bg-[#25272c] rounded-lg p-4 border border-gray-700">
                <h3 className="text-white font-bold mb-3">Custom Text</h3>
                <div className="space-y-3">
                  <div><label className="text-gray-400 text-xs uppercase tracking-wider block mb-1">Tagline</label><input type="text" value={customText.tagline} onChange={(e) => setCustomText({ ...customText, tagline: e.target.value })} className="w-full bg-[#1a1c20] border border-gray-700 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-primary" /></div>
                  <div><label className="text-gray-400 text-xs uppercase tracking-wider block mb-1">Headline</label><input type="text" value={customText.headline} onChange={(e) => setCustomText({ ...customText, headline: e.target.value })} className="w-full bg-[#1a1c20] border border-gray-700 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-primary" /></div>
                  <div><label className="text-gray-400 text-xs uppercase tracking-wider block mb-1">Subheadline</label><input type="text" value={customText.subheadline} onChange={(e) => setCustomText({ ...customText, subheadline: e.target.value })} className="w-full bg-[#1a1c20] border border-gray-700 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-primary" /></div>
                </div>
              </div>
            )}

            {/* Contact Info */}
            {selectedType !== "profile" && (
              <div className="bg-[#25272c] rounded-lg p-4 border border-gray-700">
                <h3 className="text-white font-bold mb-3 flex items-center gap-2"><Phone size={18} className="text-primary" />Contact Info</h3>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-gray-300 text-sm">Show Contact</span>
                  <button onClick={() => setShowContact(!showContact)} className={`w-12 h-6 rounded-full transition-colors ${showContact ? "bg-primary" : "bg-gray-600"}`}>
                    <div className={`w-5 h-5 rounded-full bg-white shadow-md transform transition-transform mt-0.5 ${showContact ? "translate-x-6" : "translate-x-1"}`} />
                  </button>
                </div>
                {showContact && (
                  <div className="space-y-3">
                    <div><label className="text-gray-400 text-xs uppercase tracking-wider flex items-center gap-1 mb-1"><Phone size={12} /> Phone</label><input type="text" value={contactInfo.phone} onChange={(e) => setContactInfo({ ...contactInfo, phone: e.target.value })} className="w-full bg-[#1a1c20] border border-gray-700 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-primary" /></div>
                    <div><label className="text-gray-400 text-xs uppercase tracking-wider flex items-center gap-1 mb-1"><Globe size={12} /> Website</label><input type="text" value={contactInfo.website} onChange={(e) => setContactInfo({ ...contactInfo, website: e.target.value })} className="w-full bg-[#1a1c20] border border-gray-700 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-primary" /></div>
                    <div><label className="text-gray-400 text-xs uppercase tracking-wider flex items-center gap-1 mb-1"><MapPin size={12} /> Location</label><input type="text" value={contactInfo.location} onChange={(e) => setContactInfo({ ...contactInfo, location: e.target.value })} className="w-full bg-[#1a1c20] border border-gray-700 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-primary" /></div>
                  </div>
                )}
              </div>
            )}

            {/* Background */}
            {selectedType !== "profile" && (
              <div className="bg-[#25272c] rounded-lg p-4 border border-gray-700">
                <h3 className="text-white font-bold mb-3 flex items-center gap-2"><ImageIcon size={18} className="text-primary" />Background</h3>
                <div className="mb-4">
                  <input ref={fileInputRef} type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
                  <button onClick={() => fileInputRef.current?.click()} className="w-full flex items-center justify-center gap-2 py-3 border-2 border-dashed border-gray-600 rounded-lg text-gray-400 hover:border-primary hover:text-primary transition-colors">
                    <Upload size={20} />Upload Custom Image
                  </button>
                  <p className="text-gray-500 text-xs mt-2 text-center">Max 10MB, JPG/PNG recommended</p>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {backgroundOptions.map((bg) => (
                    <div key={bg.id} className="relative">
                      <button onClick={() => setSelectedBackground(bg)} className={`relative aspect-video w-full rounded-lg overflow-hidden border-2 transition-colors ${selectedBackground.id === bg.id ? "border-primary" : "border-gray-700 hover:border-gray-500"}`}>
                        {bg.src ? (
                          <img src={bg.src} alt={bg.name} crossOrigin="anonymous" style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", inset: 0 }} />
                        ) : (
                          <div className="w-full h-full bg-[#1a1c20] flex items-center justify-center"><span className="text-gray-500 text-xs">Solid</span></div>
                        )}
                      </button>
                      {bg.isCustom && (
                        <button onClick={(e) => { e.stopPropagation(); removeCustomBackground(bg.id); }} className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white hover:bg-red-600 transition-colors"><X size={12} /></button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Instructions */}
            <div className="bg-[#1a1c20] rounded-lg p-4 border border-gray-700">
              <h3 className="text-white font-bold mb-2 text-sm">How to use</h3>
              <ol className="text-gray-400 text-xs space-y-1 list-decimal list-inside">
                <li>Select your platform above</li>
                <li>Choose a message preset or customize text</li>
                <li>Upload a custom background or use presets</li>
                <li>Adjust text position and image settings</li>
                <li>Save your configuration as a preset</li>
                <li>Click "Download" to save your banner</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
