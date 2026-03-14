"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Tent,
  Sofa,
  RotateCcw,
  Flame,
  Thermometer,
  Gauge,
  Droplets,
  Lightbulb,
  Snowflake,
  ChevronLeft,
  ChevronRight,
  AlertTriangle,
  Download,
} from "lucide-react";

const manualSections = [
  {
    id: "poptop",
    icon: Tent,
    title: "Pop-Top Roof",
    subtitle: "Premium Scenic Canvas",
    content: [
      {
        heading: "Opening the Roof",
        steps: [
          "Open a vehicle door or window to equalise air pressure",
          "Release the internal safety straps",
          "Push the roof up; the gas struts will assist the lift",
        ],
      },
      {
        heading: "Upper Bed",
        steps: [
          "Push the gas-strut assisted bed board up for standing room",
          "Pull it down at night to create the upper double bed",
        ],
      },
      {
        heading: "Closing the Roof",
        steps: [
          "Ensure the upper mattress is clear of all bedding",
          "Pull the roof down slowly using the handles",
          "Check canvas is folding inward, not pinching",
          "Tighten both safety straps firmly before driving",
        ],
      },
    ],
    warning: "Always secure both safety straps firmly before driving.",
  },
  {
    id: "bed",
    icon: Sofa,
    title: "Rock & Roll Bed",
    subtitle: "Vulcan M1 System",
    content: [
      {
        heading: "Converting to Bed",
        steps: [
          "Move the front seats forward for clearance",
          "Lift the release lever at the front base",
          "Pull seatbelts slightly to prevent locking",
          "Pull seat base forward - it transitions to a flat bed",
        ],
      },
      {
        heading: "Returning to Seat",
        steps: [
          "Locate the pull-strap near the right-centre",
          "Pull the strap upward at a 45-degree angle",
          "Ensure it clicks into locked position before travel",
        ],
      },
    ],
  },
  {
    id: "swivel",
    icon: RotateCcw,
    title: "Swivel Seat",
    subtitle: "Passenger Seat System",
    content: [
      {
        heading: "To Rotate",
        steps: [
          "Ensure vehicle is stationary, handbrake engaged",
          "Unscrew the 5 locking bolts on base plate",
          "Move seat backwards to clear the B-pillar",
          "Rotate anticlockwise to face the rear",
        ],
      },
      {
        heading: "For Driving",
        steps: [
          "Seat must face forward",
          "Tighten all 5 locking bolts until rock-solid",
        ],
      },
    ],
    warning: "All 5 bolts must be fully tightened before driving.",
  },
  {
    id: "cooking",
    icon: Flame,
    title: "Cooking System",
    subtitle: "Gas Hob & Wallas Duo",
    content: [
      {
        heading: "2-Burner Gas Hob",
        steps: [
          "Open the gas valve at the cylinder",
          "Push and turn knob to 'large flame' position",
          "Press Piezo ignition until burner lights",
          "Hold knob 5-10 seconds for thermocouple",
        ],
      },
      {
        heading: "Wallas Duo (Upgrade)",
        steps: [
          "Power unit via digital panel - uses diesel tank",
          "Functions as flame-free induction-style hob",
          "Close blower lid for cabin heating",
        ],
      },
    ],
    warning: "Ensure glass lid is raised before lighting.",
  },
  {
    id: "heater",
    icon: Thermometer,
    title: "Diesel Heater",
    subtitle: "Autoterm 2kW System",
    content: [
      {
        heading: "Operation",
        steps: [
          "Press rotary knob once to wake screen",
          "Enter 'Heating' menu, select mode and duration",
          "Turn knob to adjust target temperature",
          "Press and hold to stop - wait for purge cycle",
        ],
      },
      {
        heading: "Modes",
        steps: [
          "Temperature: Maintains set temp (0-30°C)",
          "Thermostat: Auto on/off at target",
          "Power: Constant fixed level",
        ],
      },
    ],
    warning: "Don't cut power until purge cycle is complete.",
  },
  {
    id: "panel",
    icon: Gauge,
    title: "Control Panel",
    subtitle: "BCA Arizona System",
    content: [
      {
        heading: "Features",
        steps: [
          "3.1-inch capacitive touch screen",
          "iOS/Android app via Bluetooth or Wi-Fi",
          "Monitors Victron components & 200W solar",
        ],
      },
      {
        heading: "Safety",
        steps: [
          "25A Double Pole RCD protection",
          "16A MCB for reverse polarity protection",
        ],
      },
    ],
  },
  {
    id: "water",
    icon: Droplets,
    title: "Water System",
    subtitle: "Fresh & Waste Management",
    content: [
      {
        heading: "Containers",
        steps: [
          "10L freshwater for drinking/cooking",
          "10L wastewater container",
        ],
      },
      {
        heading: "Operation",
        steps: [
          "Toggle pump via Arizona control panel",
          "Ensure tank filled and taps closed first",
          "Water heater: turn clockwise for temp",
        ],
      },
    ],
  },
  {
    id: "power",
    icon: Lightbulb,
    title: "Lighting & Power",
    subtitle: "LED & Charging",
    content: [
      {
        heading: "Charging",
        steps: [
          "4x USB-A + 2x USB-C ports",
          "2x 12V cigarette sockets",
        ],
      },
      {
        heading: "Lighting",
        steps: [
          "Dimmable LEDs - press and hold switch",
          "4 touch downlighters on left roof",
          "Kitchen LED strip + reading lights",
          "Awning light - turn off before driving",
        ],
      },
    ],
  },
  {
    id: "fridge",
    icon: Snowflake,
    title: "Refrigeration",
    subtitle: "CR50X 50L Fridge",
    content: [
      {
        heading: "Setup",
        steps: [
          "Activate 'Fridge' circuit on control panel",
          "Download Alpicool app for Bluetooth control",
        ],
      },
      {
        heading: "Modes",
        steps: [
          "Max: Fast cooling",
          "Eco: Battery saving mode",
        ],
      },
    ],
  },
];

export default function UserManualPage() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const totalPages = manualSections.length + 1;

  const goToPage = (page: number) => {
    if (page >= 0 && page < totalPages && !isAnimating && page !== currentPage) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentPage(page);
        setTimeout(() => setIsAnimating(false), 100);
      }, 150);
    }
  };

  const nextPage = () => goToPage(currentPage + 1);
  const prevPage = () => goToPage(currentPage - 1);

  return (
    <div className="pt-[104px] min-h-screen bg-black overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Header Bar */}
      <div className="fixed top-[104px] left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-primary/20">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link
            href="/eryri-adventurer"
            className="flex items-center gap-2 text-white/60 hover:text-primary transition-colors"
          >
            <ArrowLeft size={20} />
            <span className="hidden sm:inline font-medium">Back</span>
          </Link>

          <div className="flex items-center gap-4">
            <span className="text-primary font-black text-xl tracking-wider">
              {currentPage === 0 ? 'COVER' : `${String(currentPage).padStart(2, '0')} / ${String(totalPages - 1).padStart(2, '0')}`}
            </span>
          </div>

          <Link
            href="/brochure/eryri-adventurer"
            className="flex items-center gap-2 bg-primary text-black px-4 py-2 font-bold hover:bg-white transition-colors"
          >
            <Download size={18} />
            <span className="hidden sm:inline">PDF</span>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 pt-20 pb-8 px-4 min-h-[calc(100vh-104px)] flex flex-col items-center justify-center">

        {/* Booklet */}
        <div className="relative w-full max-w-5xl mx-auto">

          {/* Glow Effect */}
          <div className="absolute -inset-8 bg-gradient-to-r from-primary/20 via-primary/5 to-primary/20 rounded-3xl blur-3xl opacity-50" />

          {/* Book Container */}
          <div
            className={`relative bg-gradient-to-br from-[#111] via-[#0a0a0a] to-[#111] rounded-2xl border-2 border-primary/30 shadow-[0_0_80px_rgba(124,179,66,0.15)] overflow-hidden transition-all duration-300 ${
              isAnimating ? 'scale-[0.98] opacity-80' : 'scale-100 opacity-100'
            }`}
          >
            {/* Top Accent Bar */}
            <div className="h-2 bg-gradient-to-r from-transparent via-primary to-transparent" />

            {currentPage === 0 ? (
              /* ========== COVER PAGE ========== */
              <div className="p-8 md:p-16 min-h-[65vh] flex flex-col justify-center items-center text-center relative">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5" style={{
                  backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(124,179,66,0.5) 35px, rgba(124,179,66,0.5) 70px)`
                }} />

                <div className="relative z-10">
                  <div className="mb-8">
                    <span className="inline-block bg-primary text-black px-8 py-3 text-sm font-black uppercase tracking-[0.3em] transform -skew-x-6">
                      Owner&apos;s Manual
                    </span>
                  </div>

                  <h1 className="text-7xl md:text-9xl font-black leading-none mb-4 tracking-tighter">
                    <span className="text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]">ERYRI</span>
                  </h1>
                  <h2 className="text-5xl md:text-7xl font-black text-primary leading-none mb-12 tracking-tight drop-shadow-[0_0_40px_rgba(124,179,66,0.5)]">
                    ADVENTURER
                  </h2>

                  <div className="flex items-center justify-center gap-4 mb-12">
                    <div className="h-1 w-16 bg-gradient-to-r from-transparent to-primary" />
                    <span className="text-white/40 text-sm font-medium tracking-widest">4-BERTH CAMPERVAN</span>
                    <div className="h-1 w-16 bg-gradient-to-l from-transparent to-primary" />
                  </div>

                  <button
                    onClick={nextPage}
                    className="group relative inline-flex items-center gap-4 bg-primary text-black px-12 py-5 font-black text-xl uppercase tracking-wider hover:bg-white transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_40px_rgba(124,179,66,0.5)]"
                  >
                    <span>Open Manual</span>
                    <ChevronRight size={28} className="group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>
              </div>
            ) : (
              /* ========== CONTENT PAGES ========== */
              <div className="min-h-[65vh]">
                {(() => {
                  const section = manualSections[currentPage - 1];
                  const SectionIcon = section.icon;
                  return (
                    <div className="flex flex-col md:flex-row min-h-[65vh]">
                      {/* Left Side - Section Info */}
                      <div className="md:w-2/5 bg-gradient-to-br from-primary via-primary to-[#5a8f30] p-8 md:p-10 flex flex-col justify-center relative overflow-hidden">
                        {/* Pattern Overlay */}
                        <div className="absolute inset-0 opacity-10" style={{
                          backgroundImage: `radial-gradient(circle at 2px 2px, black 1px, transparent 0)`,
                          backgroundSize: '20px 20px'
                        }} />

                        <div className="relative z-10">
                          <div className="w-20 h-20 bg-black/20 rounded-2xl flex items-center justify-center mb-6">
                            <SectionIcon className="w-10 h-10 text-white" />
                          </div>

                          <span className="text-black/50 text-8xl font-black absolute top-4 right-4 leading-none">
                            {String(currentPage).padStart(2, '0')}
                          </span>

                          <h2 className="text-4xl md:text-5xl font-black text-black leading-tight mb-3">
                            {section.title}
                          </h2>
                          <p className="text-black/70 text-lg font-medium">
                            {section.subtitle}
                          </p>
                        </div>
                      </div>

                      {/* Right Side - Content */}
                      <div className="md:w-3/5 p-8 md:p-10 overflow-y-auto max-h-[65vh]">
                        <div className="space-y-8">
                          {section.content.map((subsection, idx) => (
                            <div key={idx}>
                              <h3 className="flex items-center gap-3 text-xl font-black text-white mb-4">
                                <span className="w-3 h-3 bg-primary transform rotate-45" />
                                {subsection.heading}
                              </h3>
                              <div className="space-y-3 ml-6">
                                {subsection.steps.map((step, stepIdx) => (
                                  <div key={stepIdx} className="flex items-start gap-4 group">
                                    <span className="w-8 h-8 bg-primary/20 border-2 border-primary text-primary text-sm font-black flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-black transition-colors">
                                      {stepIdx + 1}
                                    </span>
                                    <span className="text-white/80 pt-1 leading-relaxed group-hover:text-white transition-colors">
                                      {step}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}

                          {section.warning && (
                            <div className="mt-8 p-5 bg-gradient-to-r from-amber-500/20 to-red-500/10 border-l-4 border-amber-500 rounded-r-lg">
                              <div className="flex items-start gap-4">
                                <AlertTriangle className="w-6 h-6 text-amber-500 flex-shrink-0" />
                                <div>
                                  <p className="font-black text-amber-400 text-sm uppercase tracking-wider mb-1">Warning</p>
                                  <p className="text-amber-200/90">{section.warning}</p>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </div>
            )}

            {/* Bottom Accent Bar */}
            <div className="h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevPage}
            disabled={currentPage === 0 || isAnimating}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-6 w-14 h-14 md:w-16 md:h-16 bg-black border-2 border-primary/50 flex items-center justify-center text-primary transition-all duration-300 ${
              currentPage === 0
                ? 'opacity-20 cursor-not-allowed'
                : 'hover:bg-primary hover:text-black hover:scale-110 hover:shadow-[0_0_30px_rgba(124,179,66,0.5)]'
            }`}
          >
            <ChevronLeft size={28} />
          </button>

          <button
            onClick={nextPage}
            disabled={currentPage === totalPages - 1 || isAnimating}
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-6 w-14 h-14 md:w-16 md:h-16 bg-black border-2 border-primary/50 flex items-center justify-center text-primary transition-all duration-300 ${
              currentPage === totalPages - 1
                ? 'opacity-20 cursor-not-allowed'
                : 'hover:bg-primary hover:text-black hover:scale-110 hover:shadow-[0_0_30px_rgba(124,179,66,0.5)]'
            }`}
          >
            <ChevronRight size={28} />
          </button>
        </div>

        {/* Page Indicators */}
        <div className="mt-10 flex items-center gap-3">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToPage(idx)}
              className={`transition-all duration-300 ${
                idx === currentPage
                  ? 'w-12 h-3 bg-primary shadow-[0_0_20px_rgba(124,179,66,0.5)]'
                  : 'w-3 h-3 bg-white/20 hover:bg-primary/50'
              }`}
            />
          ))}
        </div>

        {/* Quick Jump Section Names */}
        <div className="mt-6 flex flex-wrap justify-center gap-2 max-w-4xl">
          {manualSections.map((section, idx) => (
            <button
              key={section.id}
              onClick={() => goToPage(idx + 1)}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                currentPage === idx + 1
                  ? 'bg-primary text-black'
                  : 'bg-white/5 text-white/40 hover:bg-primary/20 hover:text-primary border border-white/10 hover:border-primary/50'
              }`}
            >
              {section.title.split(' ')[0]}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
