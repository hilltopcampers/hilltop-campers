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

const manualPages = [
  // Page 0-1: Cover spread
  {
    type: "cover",
    leftPage: null,
    rightPage: {
      title: "ERYRI ADVENTURER",
      subtitle: "Owner's Manual",
      description: "4-Berth Campervan",
    },
  },
  // Page 2-3: Contents & Pop-Top
  {
    type: "content",
    leftPage: {
      pageNum: 2,
      title: "Contents",
      isContents: true,
      items: [
        { num: "01", title: "Pop-Top Roof", page: 3 },
        { num: "02", title: "Rock & Roll Bed", page: 5 },
        { num: "03", title: "Swivel Seat", page: 7 },
        { num: "04", title: "Cooking System", page: 9 },
        { num: "05", title: "Diesel Heater", page: 11 },
        { num: "06", title: "Control Panel", page: 13 },
        { num: "07", title: "Water System", page: 15 },
        { num: "08", title: "Lighting & Power", page: 17 },
        { num: "09", title: "Refrigeration", page: 19 },
      ],
    },
    rightPage: {
      pageNum: 3,
      icon: Tent,
      section: "01",
      title: "Pop-Top Roof",
      subtitle: "Premium Scenic Canvas",
      content: [
        { heading: "Opening", steps: ["Open door/window to equalise pressure", "Release internal safety straps", "Push roof up - gas struts assist"] },
        { heading: "Closing", steps: ["Clear mattress of bedding", "Pull down slowly using handles", "Check canvas folds inward", "Secure both safety straps"] },
      ],
      warning: "Always secure straps before driving",
    },
  },
  // Page 4-5: Continued & Rock & Roll Bed
  {
    type: "content",
    leftPage: {
      pageNum: 4,
      title: "Pop-Top Roof",
      subtitle: "Continued",
      content: [
        { heading: "Upper Bed", steps: ["Push bed board up for standing room", "Pull down at night for sleeping"] },
        { heading: "Scenic Canvas", steps: ["Zip open front/side sections for views", "Close all zippers before lowering roof"] },
      ],
    },
    rightPage: {
      pageNum: 5,
      icon: Sofa,
      section: "02",
      title: "Rock & Roll Bed",
      subtitle: "Vulcan M1 System",
      content: [
        { heading: "To Bed", steps: ["Move front seats forward", "Lift release lever at front", "Pull seatbelts to prevent lock", "Pull base forward to flatten"] },
        { heading: "To Seat", steps: ["Pull strap at right-centre", "Pull upward at 45°", "Ensure click into locked position"] },
      ],
    },
  },
  // Page 6-7: Swivel Seat
  {
    type: "content",
    leftPage: {
      pageNum: 6,
      title: "Rock & Roll Bed",
      subtitle: "Safety Notes",
      content: [
        { heading: "Important", steps: ["Always lock seat before driving", "Check mechanism monthly", "Keep runners clean and lubricated"] },
      ],
    },
    rightPage: {
      pageNum: 7,
      icon: RotateCcw,
      section: "03",
      title: "Swivel Seat",
      subtitle: "Passenger Seat",
      content: [
        { heading: "To Rotate", steps: ["Vehicle stationary, handbrake on", "Unscrew 5 locking bolts", "Slide seat back to clear B-pillar", "Rotate anticlockwise"] },
        { heading: "For Driving", steps: ["Face seat forward", "Tighten all 5 bolts firmly"] },
      ],
      warning: "All 5 bolts must be tight before driving",
    },
  },
  // Page 8-9: Cooking
  {
    type: "content",
    leftPage: {
      pageNum: 8,
      title: "Swivel Seat",
      subtitle: "Maintenance",
      content: [
        { heading: "Care", steps: ["Check bolts weekly", "Lubricate runners monthly", "Inspect base plate for wear"] },
      ],
    },
    rightPage: {
      pageNum: 9,
      icon: Flame,
      section: "04",
      title: "Cooking System",
      subtitle: "Gas Hob & Wallas",
      content: [
        { heading: "Gas Hob", steps: ["Open gas valve at cylinder", "Push & turn to 'large flame'", "Press Piezo ignition", "Hold 5-10 sec for thermocouple"] },
        { heading: "Wallas Duo", steps: ["Power via digital panel", "Uses main diesel tank", "Close blower lid for heating"] },
      ],
      warning: "Raise glass lid before lighting",
    },
  },
  // Page 10-11: Heater
  {
    type: "content",
    leftPage: {
      pageNum: 10,
      title: "Cooking System",
      subtitle: "Safety",
      content: [
        { heading: "Gas Safety", steps: ["Check connections regularly", "Turn off gas when not in use", "Ensure ventilation when cooking"] },
      ],
    },
    rightPage: {
      pageNum: 11,
      icon: Thermometer,
      section: "05",
      title: "Diesel Heater",
      subtitle: "Autoterm 2kW",
      content: [
        { heading: "Operation", steps: ["Press knob to wake screen", "Select mode & duration", "Turn knob for temperature", "Hold to stop - wait for purge"] },
        { heading: "Modes", steps: ["Temperature: Maintains set °C", "Thermostat: Auto on/off", "Power: Constant level"] },
      ],
      warning: "Don't cut power until purge complete",
    },
  },
  // Page 12-13: Control Panel
  {
    type: "content",
    leftPage: {
      pageNum: 12,
      title: "Diesel Heater",
      subtitle: "Troubleshooting",
      content: [
        { heading: "Issues", steps: ["No start: Check fuel level", "Error codes: See Autoterm manual", "Strange noise: Service required"] },
      ],
    },
    rightPage: {
      pageNum: 13,
      icon: Gauge,
      section: "06",
      title: "Control Panel",
      subtitle: "BCA Arizona",
      content: [
        { heading: "Features", steps: ["3.1\" capacitive touch screen", "iOS/Android app compatible", "Monitors Victron & 200W solar"] },
        { heading: "Safety", steps: ["25A Double Pole RCD", "16A MCB reverse polarity"] },
      ],
    },
  },
  // Page 14-15: Water
  {
    type: "content",
    leftPage: {
      pageNum: 14,
      title: "Control Panel",
      subtitle: "App Setup",
      content: [
        { heading: "Connection", steps: ["Download BCA app", "Enable Bluetooth/Wi-Fi", "Pair with Arizona panel"] },
      ],
    },
    rightPage: {
      pageNum: 15,
      icon: Droplets,
      section: "07",
      title: "Water System",
      subtitle: "Fresh & Waste",
      content: [
        { heading: "Containers", steps: ["10L freshwater tank", "10L wastewater tank"] },
        { heading: "Operation", steps: ["Toggle pump via panel", "Fill tank, close taps first", "Heater: turn clockwise for temp"] },
      ],
    },
  },
  // Page 16-17: Lighting
  {
    type: "content",
    leftPage: {
      pageNum: 16,
      title: "Water System",
      subtitle: "Maintenance",
      content: [
        { heading: "Care", steps: ["Empty waste tank regularly", "Clean freshwater tank monthly", "Check pump filter"] },
      ],
    },
    rightPage: {
      pageNum: 17,
      icon: Lightbulb,
      section: "08",
      title: "Lighting & Power",
      subtitle: "LED & Charging",
      content: [
        { heading: "Charging", steps: ["4x USB-A, 2x USB-C ports", "2x 12V cigarette sockets"] },
        { heading: "Lighting", steps: ["Dimmable LEDs - hold switch", "4 touch downlighters", "Kitchen strip + reading lights"] },
      ],
    },
  },
  // Page 18-19: Fridge
  {
    type: "content",
    leftPage: {
      pageNum: 18,
      title: "Lighting & Power",
      subtitle: "Notes",
      content: [
        { heading: "Exterior", steps: ["Awning light left of door", "Turn off before driving"] },
      ],
    },
    rightPage: {
      pageNum: 19,
      icon: Snowflake,
      section: "09",
      title: "Refrigeration",
      subtitle: "CR50X 50L",
      content: [
        { heading: "Setup", steps: ["Activate 'Fridge' on panel", "Download Alpicool app"] },
        { heading: "Modes", steps: ["Max: Fast cooling", "Eco: Battery saving"] },
      ],
    },
  },
  // Page 20: Back cover
  {
    type: "back",
    leftPage: {
      pageNum: 20,
      title: "Notes",
      isNotes: true,
    },
    rightPage: null,
  },
];

export default function UserManualPage() {
  const [currentSpread, setCurrentSpread] = useState(0);

  const totalSpreads = manualPages.length;

  const goToSpread = (spread: number) => {
    if (spread >= 0 && spread < totalSpreads) {
      setCurrentSpread(spread);
    }
  };

  const nextSpread = () => goToSpread(currentSpread + 1);
  const prevSpread = () => goToSpread(currentSpread - 1);

  const currentPages = manualPages[currentSpread];

  return (
    <div className="pt-[104px] min-h-screen bg-[#1a1a1a] flex flex-col">
      {/* Minimal Header */}
      <div className="bg-black/50 border-b border-gray-800 px-4 py-2 flex items-center justify-between">
        <Link
          href="/eryri-adventurer"
          className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors text-sm"
        >
          <ArrowLeft size={16} />
          <span className="hidden sm:inline">Back</span>
        </Link>

        <span className="text-primary font-bold text-sm">
          {currentSpread === 0 ? 'Cover' : currentSpread === totalSpreads - 1 ? 'Back' : `Pages ${currentPages.leftPage?.pageNum || ''}-${currentPages.rightPage?.pageNum || ''}`}
        </span>

        <Link
          href="/brochure/eryri-adventurer"
          className="flex items-center gap-1 text-primary hover:text-white transition-colors text-sm"
        >
          <Download size={14} />
          <span className="hidden sm:inline">PDF</span>
        </Link>
      </div>

      {/* Book Container - fills remaining height */}
      <div className="flex-1 flex items-center justify-center p-4 md:p-6">
        <div className="relative w-full h-full max-w-6xl max-h-[75vh] flex items-center justify-center">

          {/* The Open Book */}
          <div
            className="relative bg-white shadow-2xl shadow-black/50 flex"
            style={{
              aspectRatio: '1.414/1', // A4 landscape ratio
              height: '100%',
              maxHeight: '100%',
              width: 'auto',
            }}
          >
            {/* Left Page (A5) */}
            <div className="w-1/2 h-full bg-[#f8f8f8] border-r border-gray-300 relative overflow-hidden">
              {/* Page shadow effect */}
              <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-gray-200/50 to-transparent" />

              {currentPages.leftPage ? (
                <div className="h-full p-6 md:p-8 flex flex-col">
                  {/* Page Number */}
                  <div className="text-xs text-gray-400 mb-4">{currentPages.leftPage.pageNum}</div>

                  {currentPages.leftPage.isContents ? (
                    /* Contents Page */
                    <div className="flex-1">
                      <h2 className="text-2xl font-black text-gray-900 mb-6 border-b-2 border-primary pb-2">
                        {currentPages.leftPage.title}
                      </h2>
                      <div className="space-y-3">
                        {currentPages.leftPage.items?.map((item, idx) => (
                          <button
                            key={idx}
                            onClick={() => goToSpread(Math.ceil((item.page - 1) / 2))}
                            className="flex items-center gap-3 w-full text-left hover:text-primary transition-colors group"
                          >
                            <span className="text-primary font-bold text-sm">{item.num}</span>
                            <span className="text-gray-700 group-hover:text-primary text-sm">{item.title}</span>
                            <span className="flex-1 border-b border-dotted border-gray-300" />
                            <span className="text-gray-400 text-xs">{item.page}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  ) : currentPages.leftPage.isNotes ? (
                    /* Notes Page */
                    <div className="flex-1">
                      <h2 className="text-xl font-bold text-gray-900 mb-4">{currentPages.leftPage.title}</h2>
                      <div className="space-y-4">
                        {[1,2,3,4,5,6].map(i => (
                          <div key={i} className="border-b border-gray-300 h-6" />
                        ))}
                      </div>
                      <div className="mt-auto pt-8 text-center">
                        <p className="text-xs text-gray-400">Hilltop Campers</p>
                        <p className="text-xs text-gray-400">hilltopcampers.co.uk</p>
                      </div>
                    </div>
                  ) : (
                    /* Regular Content Page */
                    <div className="flex-1 flex flex-col">
                      <h3 className="text-lg font-bold text-gray-900">{currentPages.leftPage.title}</h3>
                      <p className="text-xs text-gray-500 mb-4">{currentPages.leftPage.subtitle}</p>

                      <div className="space-y-4 text-sm">
                        {currentPages.leftPage.content?.map((section, idx) => (
                          <div key={idx}>
                            <h4 className="font-bold text-gray-800 text-xs uppercase tracking-wide mb-2 flex items-center gap-2">
                              <span className="w-1.5 h-1.5 bg-primary" />
                              {section.heading}
                            </h4>
                            <ul className="space-y-1 ml-3">
                              {section.steps.map((step, sIdx) => (
                                <li key={sIdx} className="text-gray-600 text-xs flex items-start gap-2">
                                  <span className="text-primary font-bold">{sIdx + 1}.</span>
                                  {step}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                /* Empty left page (inside cover) */
                <div className="h-full bg-gray-100" />
              )}
            </div>

            {/* Right Page (A5) */}
            <div className="w-1/2 h-full bg-white relative overflow-hidden">
              {/* Page shadow effect */}
              <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-gray-100 to-transparent" />

              {currentPages.type === "cover" && currentPages.rightPage ? (
                /* Cover Page */
                <div className="h-full bg-gradient-to-br from-[#1a1c20] via-[#25272c] to-[#1a1c20] flex flex-col items-center justify-center p-8 text-center relative overflow-hidden">
                  {/* Pattern */}
                  <div className="absolute inset-0 opacity-5" style={{
                    backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(124,179,66,0.5) 20px, rgba(124,179,66,0.5) 40px)`
                  }} />

                  <div className="relative z-10">
                    <div className="bg-primary text-black px-4 py-1 text-xs font-black uppercase tracking-widest mb-6 inline-block">
                      {currentPages.rightPage.subtitle}
                    </div>
                    <h1 className="text-3xl md:text-4xl font-black text-white leading-tight mb-2">
                      ERYRI
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-black text-primary mb-6">
                      ADVENTURER
                    </h2>
                    <p className="text-gray-400 text-sm">{currentPages.rightPage.description}</p>

                    <div className="mt-8 flex items-center justify-center gap-2">
                      <div className="h-px w-8 bg-primary/50" />
                      <span className="text-gray-500 text-xs">Renault Trafic</span>
                      <div className="h-px w-8 bg-primary/50" />
                    </div>
                  </div>
                </div>
              ) : currentPages.rightPage ? (
                /* Content Page */
                <div className="h-full p-6 md:p-8 flex flex-col">
                  {/* Page Number */}
                  <div className="text-xs text-gray-400 mb-4 text-right">{currentPages.rightPage.pageNum}</div>

                  {/* Section Header */}
                  {currentPages.rightPage.section && (
                    <div className="flex items-center gap-3 mb-4 pb-3 border-b-2 border-primary">
                      {currentPages.rightPage.icon && (
                        <div className="w-10 h-10 bg-primary rounded flex items-center justify-center">
                          <currentPages.rightPage.icon className="w-5 h-5 text-black" />
                        </div>
                      )}
                      <div>
                        <span className="text-primary text-xs font-bold">{currentPages.rightPage.section}</span>
                        <h2 className="text-xl font-black text-gray-900 leading-tight">{currentPages.rightPage.title}</h2>
                      </div>
                    </div>
                  )}

                  <p className="text-xs text-gray-500 mb-4">{currentPages.rightPage.subtitle}</p>

                  {/* Content */}
                  <div className="flex-1 space-y-4 text-sm">
                    {currentPages.rightPage.content?.map((section, idx) => (
                      <div key={idx}>
                        <h4 className="font-bold text-gray-800 text-xs uppercase tracking-wide mb-2 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-primary" />
                          {section.heading}
                        </h4>
                        <ul className="space-y-1 ml-3">
                          {section.steps.map((step, sIdx) => (
                            <li key={sIdx} className="text-gray-600 text-xs flex items-start gap-2">
                              <span className="text-primary font-bold">{sIdx + 1}.</span>
                              {step}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  {/* Warning */}
                  {currentPages.rightPage.warning && (
                    <div className="mt-4 p-3 bg-amber-50 border-l-3 border-amber-500 flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                      <p className="text-amber-800 text-xs">{currentPages.rightPage.warning}</p>
                    </div>
                  )}
                </div>
              ) : (
                /* Empty right page (back cover) */
                <div className="h-full bg-gradient-to-br from-[#1a1c20] via-[#25272c] to-[#1a1c20] flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-primary font-bold text-lg">Hilltop Campers</p>
                    <p className="text-gray-500 text-sm mt-2">hilltopcampers.co.uk</p>
                    <p className="text-gray-600 text-xs mt-1">07869 169826</p>
                  </div>
                </div>
              )}
            </div>

            {/* Book Spine */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 shadow-inner" />
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSpread}
            disabled={currentSpread === 0}
            className={`absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/80 border border-primary/50 flex items-center justify-center text-primary transition-all ${
              currentSpread === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-primary hover:text-black'
            }`}
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={nextSpread}
            disabled={currentSpread === totalSpreads - 1}
            className={`absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/80 border border-primary/50 flex items-center justify-center text-primary transition-all ${
              currentSpread === totalSpreads - 1 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-primary hover:text-black'
            }`}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Page Indicators */}
      <div className="bg-black/50 px-4 py-3 flex items-center justify-center gap-2">
        {manualPages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSpread(idx)}
            className={`w-2 h-2 rounded-full transition-all ${
              idx === currentSpread ? 'bg-primary w-6' : 'bg-gray-600 hover:bg-gray-500'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
