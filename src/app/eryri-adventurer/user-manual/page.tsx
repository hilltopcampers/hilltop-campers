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
    <div className="pt-[104px] min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-[#1a1c20] via-[#2a2d32] to-[#1a1c20]">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%237cb342' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <Link
            href="/eryri-adventurer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            <span className="font-semibold">Back to Eryri Adventurer</span>
          </Link>

          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="w-10 h-10 text-primary" />
              <span className="bg-primary text-black px-4 py-1.5 text-sm font-bold uppercase rounded">
                User Manual
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="text-primary">ERYRI ADVENTURER</span>
              <br />
              <span className="text-white">USER INSTRUCTION MANUAL</span>
            </h1>

            <p className="text-gray-300 text-lg mb-8 max-w-3xl">
              Congratulations on your purchase of the all-new Eryri Adventurer,
              a state-of-the-art 4-berth camper built on the award-winning
              Renault Trafic platform. Your vehicle is inspired by the rugged
              landscapes of Eryri (Snowdonia) National Park and is designed for
              those seeking high-spec, gas-free adventure.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/brochure/eryri-adventurer"
                className="inline-flex items-center gap-2 bg-primary text-black px-6 py-3 uppercase font-bold hover:bg-primary/90 transition-colors rounded shadow-lg shadow-primary/25"
              >
                <Download size={18} />
                Download Brochure
              </Link>
              <Link
                href="/contact?subject=Eryri%20Adventurer%20Support"
                className="inline-flex items-center gap-2 border-2 border-white text-white px-6 py-3 uppercase font-bold hover:border-primary hover:text-primary transition-colors rounded"
              >
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-6 bg-white border-b border-gray-200 sticky top-[104px] z-40 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {manualSections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="flex items-center gap-2 px-4 py-2.5 bg-gray-100 hover:bg-primary hover:text-black text-gray-700 rounded-full transition-all text-sm font-semibold hover:shadow-md hover:shadow-primary/20"
              >
                <section.icon size={16} />
                <span className="hidden sm:inline">{section.title.split(" ")[0]}</span>
                <span className="sm:hidden">{section.title.split(" ")[0].slice(0, 3)}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Manual Sections */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {manualSections.map((section, index) => (
              <div
                key={section.id}
                id={section.id}
                className="scroll-mt-48 bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-gray-300/50 transition-shadow"
              >
                {/* Section Header */}
                <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border-b border-gray-100 p-6 md:p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-primary shadow-lg shadow-primary/30 flex items-center justify-center flex-shrink-0">
                      <section.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <span className="bg-primary/10 text-primary px-2.5 py-0.5 rounded-full text-sm font-bold">
                          Section {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                        {section.title}
                      </h2>
                      <p className="text-gray-500 mt-1">{section.subtitle}</p>
                    </div>
                  </div>
                </div>

                {/* Section Content */}
                <div className="p-6 md:p-8 space-y-8">
                  {section.content.map((subsection, subIndex) => (
                    <div key={subIndex} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                      <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                        <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                          <ChevronDown size={18} className="text-primary" />
                        </span>
                        {subsection.heading}
                      </h3>
                      {"description" in subsection && (
                        <p className="text-gray-600 mb-4 ml-10">
                          {subsection.description}
                        </p>
                      )}
                      <ol className="space-y-3 ml-10">
                        {subsection.steps.map((step, stepIndex) => (
                          <li
                            key={stepIndex}
                            className="flex items-start gap-3 text-gray-700"
                          >
                            <span className="w-7 h-7 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                              {stepIndex + 1}
                            </span>
                            <span className="pt-0.5">{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  ))}

                  {/* Warning Box */}
                  {section.warning && (
                    <div className="mt-6 p-5 bg-gradient-to-r from-amber-50 to-yellow-50 border-2 border-amber-200 rounded-xl flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-amber-400 flex items-center justify-center flex-shrink-0">
                        <AlertTriangle className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-bold text-amber-800 mb-1">Safety Notice</p>
                        <p className="text-amber-700">
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

      {/* Footer CTA */}
      <section className="py-16 bg-gradient-to-br from-[#1a1c20] via-[#25272c] to-[#1a1c20]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Need Additional Support?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Our team is here to help you get the most out of your Eryri
            Adventurer. Contact us for any questions or support needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact?subject=Eryri%20Adventurer%20Support"
              className="inline-flex items-center gap-2 bg-primary text-black px-8 py-3 uppercase font-bold hover:bg-primary/90 transition-colors rounded shadow-lg shadow-primary/25"
            >
              Contact Support
            </Link>
            <Link
              href="tel:07869169826"
              className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 uppercase font-bold hover:border-primary hover:text-primary transition-colors rounded"
            >
              Call 07869 169826
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
