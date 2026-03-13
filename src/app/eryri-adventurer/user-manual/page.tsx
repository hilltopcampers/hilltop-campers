import type { Metadata } from "next";
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
  ChevronDown,
  AlertTriangle,
  Download,
  BookOpen,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Eryri Adventurer User Manual | Hilltop Campers",
  description:
    "Complete user instruction manual for the Eryri Adventurer 4-berth campervan. Learn how to operate the pop-top roof, rock & roll bed, heating, cooking, and all systems.",
  keywords: [
    "Eryri Adventurer manual",
    "campervan user guide",
    "Renault Trafic camper instructions",
    "pop-top roof operation",
    "rock and roll bed",
    "diesel heater guide",
  ],
};

const manualSections = [
  {
    id: "poptop",
    icon: Tent,
    title: "Deluxe Pop-Top Roof",
    subtitle: "Premium Scenic Canvas for panoramic views",
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
          "Push the gas-strut assisted bed board up for standing room during the day",
          "Pull it down at night to create the upper double bed",
        ],
      },
      {
        heading: "Scenic Canvas",
        steps: [
          "Zip open the front and side canvas sections for a panoramic view",
          "Ensure all zippers are fully closed before lowering the roof",
        ],
      },
      {
        heading: "Closing the Roof",
        steps: [
          "Ensure the upper mattress is clear of all bedding",
          "Pull the roof down slowly using the handles",
          "When halfway down, check that the canvas is folding inward and not pinching in the hinges",
          "Tighten both safety straps firmly before driving to ensure a weather-tight seal",
        ],
      },
    ],
    warning:
      "Always secure both safety straps firmly before driving to ensure a weather-tight seal.",
  },
  {
    id: "bed",
    icon: Sofa,
    title: "Vulcan M1 Tested Rock & Roll Bed",
    subtitle: "Industry-leading Vulcan bed system",
    content: [
      {
        heading: "Converting to Bed",
        steps: [
          "Move the front seats forward for clearance",
          "Lift the release lever at the front base of the seat",
          "Pull the seatbelts slightly to take up tension and prevent locking",
          "Pull the seat base forward using the front lever. The seat will transition smoothly into a flat double bed",
        ],
      },
      {
        heading: "Returning to Seat",
        steps: [
          "Locate the pull-strap near the right-centre of the bed",
          "Pull the strap upward and back at a 45-degree angle",
          "The bed will smoothly transform back into the upright seating position",
          "Ensure it clicks into the locked position before travel",
        ],
      },
    ],
  },
  {
    id: "swivel",
    icon: RotateCcw,
    title: "Vulcan Swivel Seat (Passenger)",
    subtitle: "Swivel base on runners for maximum flexibility",
    content: [
      {
        heading: "To Rotate the Seat",
        steps: [
          "Ensure the vehicle is stationary and the handbrake is firmly engaged",
          "Unscrew the 5 locking bolts on the base plate",
          "Use the runners to move the seat backwards into the living space to clear the B-pillar door frame",
          "Rotate the seat anticlockwise to face the rear",
        ],
      },
      {
        heading: "For Driving",
        steps: [
          "The seat must face forward",
          "Align the plates and tighten all 5 locking bolts until the seat is rock-solid",
        ],
      },
    ],
    warning:
      "All 5 locking bolts must be fully tightened before driving. Never drive with the seat in the swivelled position.",
  },
  {
    id: "cooking",
    icon: Flame,
    title: "Cooking & Heating Systems",
    subtitle: "Standard 2-Burner Gas Hob & Wallas Duo upgrade option",
    content: [
      {
        heading: "Standard: 2-Burner Gas Hob",
        steps: [
          "Open the gas valve at the cylinder",
          "Push and turn the control knob to the 'large flame' position",
          "Press the Piezo ignition button until the burner lights",
          "Hold the knob for 5-10 seconds to allow the safety thermocouple to heat up",
        ],
      },
      {
        heading: "Upgrade: Wallas Duo (Gas-Free Option)",
        description:
          "Featured on high-spec models for an all-electric and diesel experience.",
        steps: [
          "Power the unit via the digital panel. It draws fuel from the main diesel tank",
          "Cooking: Functions as a flame-free induction-style hob",
          "Heating: Close the blower lid to circulate warm air through the cabin",
          "Shutdown: Press power once; allow the cool-down cycle to finish before isolating power",
        ],
      },
    ],
    warning:
      "Always ensure the glass lid is fully raised before lighting. Never close the lid until burners are cool to the touch.",
  },
  {
    id: "heater",
    icon: Thermometer,
    title: "Autoterm Air 2kW Diesel Heater",
    subtitle: "Reliable comfort from the Autoterm diesel heater system",
    content: [
      {
        heading: "Basic Operation",
        steps: [
          "Power On: Press the rotary knob once to wake the screen",
          "Start Heating: Enter the 'Heating' menu, select your mode, and set the duration (30 mins to continuous)",
          "Adjusting Temperature: Turn the knob to increase or decrease target temperature",
          "Stopping: Press and hold the rotary knob. The heater enters a 3-5 minute 'purge' (cool-down)",
        ],
      },
      {
        heading: "Heating Modes",
        steps: [
          "Temperature Mode: Maintains a set temperature (0°C-30°C) by reducing power",
          "Thermostat Mode: Shuts down when target is reached; restarts when temperature drops",
          "Power Mode: Constant fixed power level",
          "Heat + Ventilation: Heats to setpoint, then switches to fan-only ventilation",
        ],
      },
    ],
    warning:
      "Do not cut main power until the heater is silent and the purge cycle is complete.",
  },
  {
    id: "control-panel",
    icon: Gauge,
    title: "BCA Group Arizona Control Panel",
    subtitle: "3.1-inch touch screen hub for electrical systems",
    content: [
      {
        heading: "Interface & Features",
        steps: [
          "Navigate via the capacitive touch screen or the physical rotary dial",
          "App-compatible for iOS and Android via Bluetooth or Wi-Fi",
          "Monitors the high-performance electrical setup including Victron components and 200W solar panel",
        ],
      },
      {
        heading: "BCA Mains Consumer Unit",
        steps: [
          "Features a 25A Double Pole RCD for safety",
          "16A Double Pole MCB protects against 'reverse polarity' at campsites",
        ],
      },
    ],
  },
  {
    id: "water",
    icon: Droplets,
    title: "Water Management",
    subtitle: "High-grade stainless steel sink with mono tap",
    content: [
      {
        heading: "Fresh & Waste Water",
        steps: [
          "10L freshwater container for drinking and cooking",
          "10L wastewater container for grey water",
        ],
      },
      {
        heading: "Pump Operation",
        steps: [
          "Toggle the pump via the Arizona control panel",
          "Ensure the tank is filled and taps are closed before activation",
        ],
      },
      {
        heading: "12V Water Heater (where fitted)",
        steps: [
          "6L capacity water heater",
          "Turn the control knob clockwise to reach the desired temperature",
          "Turn anticlockwise to turn off",
        ],
      },
    ],
  },
  {
    id: "lighting",
    icon: Lightbulb,
    title: "Lighting & Power",
    subtitle: "Comprehensive LED lighting and charging solutions",
    content: [
      {
        heading: "Master Switch",
        steps: ["Ensure the Master Switch on the Arizona Panel is ON"],
      },
      {
        heading: "Charging Points",
        steps: [
          "4x USB-A ports for standard electronics",
          "2x USB-C ports for fast charging",
          "2x 12V cigarette sockets for heavy-duty appliances",
        ],
      },
      {
        heading: "Interior Lighting",
        steps: [
          "Dimmable LEDs: Press and hold the switch above the Rock & Roll bed to adjust the central bed strips",
          "Zone Lighting: 4 touch Downlighters (left roof), 2 dimmable Reading lights (with USB), and dedicated kitchen LED strip",
          "Roof Bed: Includes a touch light with integrated USB-C",
        ],
      },
      {
        heading: "Exterior Lighting",
        steps: [
          "Awning light controlled via a switch to the left of the sliding door",
          "Turn off before driving",
        ],
      },
    ],
  },
  {
    id: "fridge",
    icon: Snowflake,
    title: "Refrigeration (CR50X)",
    subtitle: "50L compressor fridge with app control",
    content: [
      {
        heading: "Activation",
        steps: ["Ensure the 'Fridge' circuit is active on the control panel"],
      },
      {
        heading: "App Control",
        steps: [
          "Download the Alpicool app to adjust temperatures via Bluetooth",
          "Switch between 'Max' (fast cooling) and 'Eco' (battery saving) modes",
        ],
      },
    ],
  },
];

export default function UserManualPage() {
  return (
    <div className="pt-[104px] min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-12 md:py-16 bg-[#1a1c20] border-b-4 border-primary">
        <div className="container mx-auto px-4 relative z-10">
          <Link
            href="/eryri-adventurer"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-primary transition-colors mb-6 text-sm"
          >
            <ArrowLeft size={16} />
            <span>Back to Eryri Adventurer</span>
          </Link>

          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-primary text-black px-3 py-1 text-xs font-bold uppercase tracking-wider">
                Owner&apos;s Manual
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-white">
              Eryri Adventurer
            </h1>
            <p className="text-primary text-lg font-medium mb-4">
              User Instruction Manual
            </p>

            <p className="text-gray-400 text-sm mb-6 max-w-2xl leading-relaxed">
              Congratulations on your purchase of the all-new Eryri Adventurer,
              a state-of-the-art 4-berth camper built on the award-winning
              Renault Trafic platform.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/brochure/eryri-adventurer"
                className="inline-flex items-center gap-2 bg-primary text-black px-5 py-2.5 text-sm font-semibold hover:bg-primary/90 transition-colors"
              >
                <Download size={16} />
                Download PDF
              </Link>
              <Link
                href="/contact?subject=Eryri%20Adventurer%20Support"
                className="inline-flex items-center gap-2 border border-gray-600 text-gray-300 px-5 py-2.5 text-sm font-semibold hover:border-primary hover:text-primary transition-colors"
              >
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-3 bg-gray-100 border-b border-gray-200 sticky top-[104px] z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-1 justify-center">
            {manualSections.map((section, index) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="flex items-center gap-1.5 px-3 py-1.5 text-gray-600 hover:text-primary hover:bg-gray-200 transition-colors text-xs font-medium"
              >
                <span className="text-gray-400">{String(index + 1).padStart(2, "0")}</span>
                <span className="hidden sm:inline">{section.title.split(" ")[0]}</span>
                <span className="sm:hidden">{section.title.split(" ")[0].slice(0, 4)}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Manual Sections */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {manualSections.map((section, index) => (
              <div
                key={section.id}
                id={section.id}
                className="scroll-mt-40 mb-10 last:mb-0"
              >
                {/* Section Header */}
                <div className="border-b-2 border-gray-200 pb-3 mb-6">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-gray-400 tracking-wider">
                      SECTION {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mt-1">
                    {section.title}
                  </h2>
                  <p className="text-gray-500 text-sm mt-1">{section.subtitle}</p>
                </div>

                {/* Section Content */}
                <div className="space-y-6">
                  {section.content.map((subsection, subIndex) => (
                    <div key={subIndex}>
                      <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wide mb-3 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {subsection.heading}
                      </h3>
                      {"description" in subsection && (
                        <p className="text-gray-600 text-sm mb-3 ml-3.5 italic">
                          {subsection.description}
                        </p>
                      )}
                      <ol className="space-y-2 ml-3.5">
                        {subsection.steps.map((step, stepIndex) => (
                          <li
                            key={stepIndex}
                            className="flex items-start gap-3 text-gray-700 text-sm"
                          >
                            <span className="w-5 h-5 rounded bg-gray-100 text-gray-500 text-xs font-semibold flex items-center justify-center flex-shrink-0 mt-0.5 border border-gray-200">
                              {stepIndex + 1}
                            </span>
                            <span className="leading-relaxed">{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  ))}

                  {/* Warning Box */}
                  {section.warning && (
                    <div className="mt-6 p-4 bg-amber-50 border-l-4 border-amber-400 flex items-start gap-3">
                      <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-amber-800 text-xs uppercase tracking-wide mb-1">Warning</p>
                        <p className="text-amber-900 text-sm leading-relaxed">
                          {section.warning}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="py-10 bg-gray-100 border-t border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-500 text-sm mb-4">
            Need assistance? Our support team is here to help.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact?subject=Eryri%20Adventurer%20Support"
              className="inline-flex items-center gap-2 bg-[#1a1c20] text-white px-5 py-2.5 text-sm font-semibold hover:bg-gray-800 transition-colors"
            >
              Contact Support
            </Link>
            <Link
              href="tel:07869169826"
              className="inline-flex items-center gap-2 text-gray-700 px-5 py-2.5 text-sm font-semibold hover:text-primary transition-colors"
            >
              Call 07869 169826
            </Link>
          </div>
          <p className="text-gray-400 text-xs mt-8">
            © {new Date().getFullYear()} Hilltop Campers. All rights reserved.
          </p>
        </div>
      </section>
    </div>
  );
}
