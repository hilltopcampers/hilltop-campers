import Link from "next/link";
import Image from "next/image";
import { Check, ArrowUpRight, Battery, Flame, Zap, Shield, Bed, Users, Ruler, Gauge, Sun, Snowflake, Utensils, Droplets, Play } from "lucide-react";

export const metadata = {
  title: "Eryri Adventurer | Hilltop Campers",
  description: "The Eryri Adventurer - State of the art 4 berth campervan built on the award-winning Renault Trafic platform. Lithium power, gas-free, premium quality.",
};

const keyFeatures = [
  {
    icon: "battery",
    title: "Lithium Power System",
    description: "Advanced lithium battery system with Victron products for reliable off-grid power",
  },
  {
    icon: "flame",
    title: "Wallis Duo Heater",
    description: "Combined Diesel Ceramic Hob and heater - completely gas free",
  },
  {
    icon: "zap",
    title: "BCA Wiring",
    description: "Bespoke wiring harness and controls by industry-leading BCA Group",
  },
  {
    icon: "shield",
    title: "Renault Platform",
    description: "Built on the award-winning Renault Trafic platform with manufacturer warranty",
  },
];

const specifications = {
  vehicle: [
    { label: "Base Vehicle", value: "Renault Trafic LWB" },
    { label: "Engine", value: "2.0 dCi 150hp" },
    { label: "Transmission", value: "6-speed Manual or EDC Auto" },
    { label: "Berths", value: "4 (2 in pop-top, 2 in rock & roll bed)" },
    { label: "Seats", value: "4 with seatbelts" },
    { label: "Length", value: "5.4m" },
    { label: "Height (roof down)", value: "1.97m" },
    { label: "Height (roof up)", value: "2.8m" },
  ],
  electrical: [
    { label: "Leisure Battery", value: "Lithium 200Ah" },
    { label: "Battery Management", value: "Victron Smart BMS" },
    { label: "Inverter", value: "Victron 1000W Pure Sine" },
    { label: "Solar Ready", value: "Yes (optional 200W panel)" },
    { label: "Shore Power", value: "230V Hook-up with charger" },
    { label: "USB Ports", value: "4x USB-A, 2x USB-C" },
    { label: "12V Sockets", value: "2" },
    { label: "LED Lighting", value: "Dimmable throughout" },
  ],
  living: [
    { label: "Heating", value: "Wallis Duo Diesel (2kW)" },
    { label: "Cooking", value: "Wallis Duo Ceramic Hob" },
    { label: "Refrigerator", value: "40L Compressor Fridge" },
    { label: "Fresh Water", value: "45L Tank" },
    { label: "Waste Water", value: "40L Tank" },
    { label: "Sink", value: "Stainless Steel with mixer tap" },
    { label: "Pop-top", value: "SCA with canvas sides" },
    { label: "Insulation", value: "Full thermal insulation" },
  ],
};

const includedFeatures = [
  "Full thermal insulation",
  "SCA pop-top roof with canvas sides",
  "Rock & roll bed with Altro vinyl flooring",
  "Custom cabinetry (CNC manufactured)",
  "40L compressor refrigerator",
  "Stainless steel sink with mixer tap",
  "45L fresh water tank",
  "40L waste water tank",
  "Wallis Duo diesel heater & ceramic hob",
  "Lithium 200Ah battery system",
  "Victron battery management & inverter",
  "BCA bespoke wiring harness",
  "Dimmable LED lighting throughout",
  "Privacy curtains",
  "4x USB-A & 2x USB-C charging ports",
  "230V shore power hook-up",
  "Swivel front seats",
  "Removable table",
];

const optionalExtras = [
  { name: "200W Rooftop Solar Panel", price: "£850" },
  { name: "Outdoor Shower", price: "£350" },
  { name: "Awning Rail", price: "£250" },
  { name: "Fiamma F45s Awning", price: "£950" },
  { name: "Reversing Camera", price: "£450" },
  { name: "Upgraded Upholstery", price: "From £500" },
  { name: "Bike Rack (2 bikes)", price: "£350" },
  { name: "Drive-away Awning", price: "£650" },
];

export default function EryriAdventurerPage() {
  return (
    <div className="pt-[104px]">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1c20] via-[#25272c] to-[#1a1c20]" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%237cb342' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-primary text-black px-4 py-1.5 text-sm font-bold uppercase rounded">
                New Model
              </span>
              <span className="text-primary text-sm font-semibold">
                State of the Art 4 Berth Campervan
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4">
              <span className="text-white">THE </span>
              <span className="text-primary">ERYRI</span>
              <span className="text-white"> ADVENTURER</span>
            </h1>

            <p className="text-xl text-primary font-semibold mb-4">
              Named after Eryri (Snowdonia) National Park - The heart of Welsh adventure
            </p>

            <p className="text-gray-300 text-lg mb-8 max-w-2xl">
              State of the art 4 berth campervan, built on the award-winning Renault Trafic platform.
              Features lithium battery power and Victron products combined with our own bespoke wiring
              harness and controls supplied by industry-leading BCA Group.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact?subject=Eryri%20Adventurer"
                className="inline-flex items-center gap-2 bg-primary text-black px-8 py-3 uppercase font-bold hover:bg-primary/90 transition-colors rounded"
              >
                Enquire Now
                <ArrowUpRight size={18} />
              </Link>
              <Link
                href="#specifications"
                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 uppercase font-bold hover:border-primary hover:text-primary transition-colors rounded"
              >
                View Specifications
                <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Green Stripe */}
      <div className="yellow-stripe" />

      {/* Video Section */}
      <section className="py-16 bg-[#25272c]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            SEE THE <span className="text-primary">ERYRI ADVENTURER</span> IN ACTION
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-video bg-black rounded-lg overflow-hidden shadow-2xl">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/K1FX-KHSO4Y"
                title="Eryri Adventurer Campervan"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>

          {/* Enquire Now CTA */}
          <div className="text-center mt-10">
            <Link
              href="/contact?subject=Eryri%20Adventurer%20Enquiry"
              className="inline-flex items-center gap-2 bg-primary text-black px-10 py-4 uppercase font-bold text-lg hover:bg-primary/90 transition-colors rounded"
            >
              Enquire Now
              <ArrowUpRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-[#1a1c20]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            <span className="text-primary">KEY</span> FEATURES
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            The Eryri Adventurer combines cutting-edge technology with premium craftsmanship
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyFeatures.map((feature, index) => (
              <div key={index} className="bg-[#25272c] rounded-lg p-6 border border-gray-700 hover:border-primary transition-colors">
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  {feature.icon === "battery" && <Battery className="w-7 h-7 text-primary" />}
                  {feature.icon === "flame" && <Flame className="w-7 h-7 text-primary" />}
                  {feature.icon === "zap" && <Zap className="w-7 h-7 text-primary" />}
                  {feature.icon === "shield" && <Shield className="w-7 h-7 text-primary" />}
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gas Free Highlight */}
      <section className="py-16 bg-gradient-to-r from-primary/20 via-[#25272c] to-primary/20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <Flame className="w-10 h-10 text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              COMPLETELY <span className="text-primary">GAS FREE</span>
            </h2>
            <Flame className="w-10 h-10 text-primary" />
          </div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            The Wallis Duo combined Diesel Ceramic Hob and heater make this a completely gas-free vehicle
            without being too hungry on off-grid power. Safer, simpler, and no gas bottle refills needed.
          </p>
        </div>
      </section>

      {/* Specifications */}
      <section id="specifications" className="py-20 bg-[#25272c] scroll-mt-32">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            FULL <span className="text-primary">SPECIFICATIONS</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Vehicle Specs */}
            <div className="bg-[#1a1c20] rounded-lg p-6 border border-gray-700">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <Gauge className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white">Vehicle</h3>
              </div>
              <ul className="space-y-3">
                {specifications.vehicle.map((spec, index) => (
                  <li key={index} className="flex justify-between text-sm border-b border-gray-700 pb-2">
                    <span className="text-gray-400">{spec.label}</span>
                    <span className="text-white font-medium">{spec.value}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Electrical Specs */}
            <div className="bg-[#1a1c20] rounded-lg p-6 border border-gray-700">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white">Electrical</h3>
              </div>
              <ul className="space-y-3">
                {specifications.electrical.map((spec, index) => (
                  <li key={index} className="flex justify-between text-sm border-b border-gray-700 pb-2">
                    <span className="text-gray-400">{spec.label}</span>
                    <span className="text-white font-medium">{spec.value}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Living Specs */}
            <div className="bg-[#1a1c20] rounded-lg p-6 border border-gray-700">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <Bed className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white">Living</h3>
              </div>
              <ul className="space-y-3">
                {specifications.living.map((spec, index) => (
                  <li key={index} className="flex justify-between text-sm border-b border-gray-700 pb-2">
                    <span className="text-gray-400">{spec.label}</span>
                    <span className="text-white font-medium">{spec.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-[#1a1c20]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            WHAT'S <span className="text-primary">INCLUDED</span>
          </h2>
          <p className="text-gray-400 text-center mb-12">
            Everything you need for your adventures, included as standard
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {includedFeatures.map((feature, index) => (
              <div key={index} className="flex items-center gap-3 bg-[#25272c] rounded-lg p-4">
                <Check className="text-primary shrink-0" size={20} />
                <span className="text-gray-300 text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Optional Extras */}
      <section className="py-20 bg-[#25272c]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            OPTIONAL <span className="text-primary">EXTRAS</span>
          </h2>
          <p className="text-gray-400 text-center mb-12">
            Personalise your Eryri Adventurer with these upgrades
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {optionalExtras.map((extra, index) => (
              <div key={index} className="bg-[#1a1c20] rounded-lg p-5 border border-gray-700 hover:border-primary transition-colors">
                <h4 className="text-white font-bold mb-2">{extra.name}</h4>
                <p className="text-primary font-semibold">{extra.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-br from-[#1a1c20] to-[#25272c]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-[#25272c] rounded-2xl p-8 md:p-12 border border-primary/30 shadow-2xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                START YOUR <span className="text-primary">ADVENTURE</span>
              </h2>
              <p className="text-gray-400">
                The Eryri Adventurer is available to order now
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="text-center p-6 bg-[#1a1c20] rounded-lg">
                <p className="text-gray-400 mb-2">Starting Price</p>
                <p className="text-4xl font-bold text-white mb-2">£51,950</p>
                <p className="text-sm text-gray-500">Standard specification</p>
              </div>
              <div className="text-center p-6 bg-[#1a1c20] rounded-lg border-2 border-primary">
                <p className="text-gray-400 mb-2">As Advertised</p>
                <p className="text-4xl font-bold text-primary mb-2">£56,950</p>
                <p className="text-sm text-gray-500">With extras included</p>
              </div>
            </div>

            <div className="text-center">
              <p className="text-gray-400 mb-6">
                Finance options available. Part exchange welcome.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact?subject=Eryri%20Adventurer%20Enquiry"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-black px-8 py-4 uppercase font-bold hover:bg-primary/90 transition-colors rounded"
                >
                  Enquire Now
                  <ArrowUpRight size={18} />
                </Link>
                <Link
                  href="tel:07869169826"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 uppercase font-bold hover:border-primary hover:text-primary transition-colors rounded"
                >
                  Call 07869 169826
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
