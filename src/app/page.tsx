import Link from "next/link";
import Image from "next/image";
import { Check, ArrowUpRight, Play, Battery, Flame, Zap, Shield, Download } from "lucide-react";

// Featured campervan for sale
const featuredCampervan = {
  id: 1,
  title: "2025 Eryri Adventurer Renault Trafic Extra 4 Berth Campervan",
  description: "Explore premium Renault Trafic campervans built in North Wales. Gas-free, pop-top conversions with warranty. View our range or build yours today.",
  price: "52,995",
  originalPrice: "56,995",
  saleLabel: "Winter Deal",
  status: "Available",
  image: "/images/eryri-adventurer/front-headon.jpg",
};

// Eryri Adventurer features
const eryriFeatures = [
  {
    icon: "battery",
    title: "Lithium Power",
    description: "Advanced lithium battery system with Victron products",
  },
  {
    icon: "flame",
    title: "Autoterm Heating",
    description: "Reliable Autoterm Diesel 2KW heater with Double Gas Hob",
  },
  {
    icon: "zap",
    title: "BCA Wiring",
    description: "Bespoke wiring harness and controls by industry-leading BCA Group",
  },
  {
    icon: "shield",
    title: "Renault Platform",
    description: "Built on the award-winning Renault Trafic platform",
  },
];

const testimonials = [
  {
    name: "Chris Townsend",
    time: "9 months ago",
    text: "Absolutely fantastic service from Hilltop Campers. They converted our van exactly as we wanted and the attention to detail is superb. Highly recommend!",
  },
  {
    name: "Martin Smith",
    time: "12 months ago",
    text: "Excellent conversion of my van and great service from Phil. If you're looking to modify your van or convert one, don't hesitate, they're brilliant.",
  },
  {
    name: "Steven Williams",
    time: "1 year ago",
    text: "Bought a pre-converted van from Hilltop and it's been brilliant. Any small issues were dealt with promptly. Great quality workmanship and excellent customer service.",
  },
];

export default function Home() {
  return (
    <div className="pt-[104px]">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/Camper_ai_2.jpeg"
            alt="Hilltop Campers - Renault Trafic Campervan by Welsh lake with mountains"
            fill
            className="object-cover"
            priority
            quality={100}
            sizes="100vw"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <p className="text-gray-300 text-sm uppercase tracking-widest mb-2">
            Campervans North Wales
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4">
            <span className="text-primary">north wales PREMIUM,</span>
            <br />
            <span className="text-white">CAMPERVAN MANUFACTURER</span>
          </h1>

          <div className="flex flex-wrap gap-4 mt-8">
            <Link
              href="/built-to-order"
              className="inline-flex items-center gap-2 text-white font-bold uppercase tracking-wide border-b-2 border-primary pb-1 hover:text-primary transition-colors"
            >
              Create Your Dream Camper
              <ArrowUpRight size={18} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-white font-bold uppercase tracking-wide border-b-2 border-white pb-1 hover:border-primary hover:text-primary transition-colors"
            >
              Contact Us
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Green Stripe */}
      <div className="yellow-stripe" />

      {/* About Section */}
      <section className="py-20 bg-[#25272c]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
            MANUFACTURING INDUSTRY-LEADING
            <br />
            <span className="text-primary">QUALITY CAMPERVANS</span>, BUILT IN WALES!
          </h2>

          <div className="max-w-4xl space-y-6 text-gray-300">
            <p>
              As a Premium Campervan Manufacturer in North Wales, we at Hilltop Campers pride ourselves on quality workmanship and a professional, personal experience.
            </p>
            <p>
              We can create your bespoke campervan to order, whether on a brand new or a well-maintained pre-owned base van, ensuring it fits perfectly within your budget. Alternatively, explore our new-conversion stocked campervans that are ready to hit the road!
            </p>
            <p>
              Our conversions are completed entirely in-house, including the manufacturing of cabinetry on our CNC router and the bespoke upholstering in our upholstery workshop. This gives us complete design flexibility and ensures our customer receives a bespoke, quality product within a reliable time frame.
            </p>
            <p>
              We specialise in the conversion of the Renault Trafic, Ford Transit Custom & VW Transporter T6, T6.1
            </p>
          </div>

          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-white font-bold uppercase tracking-wide border-b-2 border-white pb-1 hover:border-primary hover:text-primary transition-colors mt-8"
          >
            Meet The Team
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>

      {/* Built To Order Section */}
      <section className="py-20 bg-[#1a1c20]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            BUILT <span className="text-primary">TO ORDER</span>
          </h2>

          <p className="text-gray-300 mb-8 max-w-3xl">
            We can build your very own bespoke campervan, allowing you to choose the specifications and finishes, right down to the thread colour on the upholstery—making it completely unique and personal to you.
          </p>

          <p className="text-gray-400 mb-12">
            Choose the base van we build on – whether it's a brand-new factory ordered base van, a pre-owned van or a van supplied by you.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/built-to-order#pre-owned" className="group">
              <div className="relative aspect-video overflow-hidden rounded-lg mb-4">
                <Image
                  src="/images/black_trafic.jpg"
                  alt="Convert a pre-owned van - Black Renault Trafic"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>
              <div className="border-2 border-primary rounded-lg p-4 text-center group-hover:bg-primary/10 transition-colors h-[100px] flex flex-col justify-center">
                <p className="text-primary text-sm">FROM £40,950</p>
                <p className="text-primary text-xs">(up to 3 yrs old)</p>
                <p className="text-white font-bold uppercase">CONVERT A PRE-OWNED VAN</p>
              </div>
            </Link>

            <Link href="/built-to-order#new" className="group">
              <div className="relative aspect-video overflow-hidden rounded-lg mb-4">
                <Image
                  src="/images/black_brand_new_trafic.webp"
                  alt="Convert a new van - Black Renault Trafic"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>
              <div className="border-2 border-primary bg-primary/10 rounded-lg p-4 text-center group-hover:bg-primary/20 transition-colors h-[100px] flex flex-col justify-center">
                <p className="text-primary text-sm">FROM £49,950</p>
                <p className="text-white font-bold uppercase">CONVERT A BRAND NEW VAN</p>
              </div>
            </Link>

            <Link href="/built-to-order#own" className="group">
              <div className="relative aspect-video overflow-hidden rounded-lg mb-4">
                <Image
                  src="/images/white_trafic_poptop.jpg"
                  alt="Convert your own van - White Renault Trafic with pop-top"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>
              <div className="border-2 border-primary rounded-lg p-4 text-center group-hover:bg-primary/10 transition-colors h-[100px] flex flex-col justify-center">
                <p className="text-primary text-sm">FROM £20,500</p>
                <p className="text-white font-bold uppercase">CONVERT YOUR OWN VAN</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Pre-Built Campervans Section */}
      <section className="py-20 bg-[#25272c]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-primary">PRE-BUILT</span> CAMPERVANS
          </h2>

          <p className="text-gray-300 mb-4 max-w-3xl">
            Can't wait to get on the road? Purchase one of our completed Campervans! They're ready to go on your adventures with no waiting time.
          </p>

          <p className="text-gray-400 mb-12">
            With new conversions completed to our highest spec.
          </p>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Featured Campervan Card */}
            <div className="bg-[#1a1c20] rounded-lg overflow-hidden group">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={featuredCampervan.image}
                  alt={featuredCampervan.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-primary text-black px-3 py-1 text-sm font-bold uppercase rounded transform rotate-12">
                  {featuredCampervan.status}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-white font-bold uppercase text-lg mb-2">
                  {featuredCampervan.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{featuredCampervan.description}</p>
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded animate-pulse">
                      {featuredCampervan.saleLabel}
                    </span>
                    <span className="text-gray-400 line-through text-sm">
                      £{featuredCampervan.originalPrice}
                    </span>
                  </div>
                  <p className="text-primary text-xl font-bold">
                    £{featuredCampervan.price}
                  </p>
                </div>
                <Link
                  href="/for-sale/2025-eryri-adventurer-renault-trafic"
                  className="inline-block border border-white text-white px-6 py-2 uppercase text-sm font-bold hover:bg-white hover:text-black transition-colors"
                >
                  See Details
                </Link>
              </div>
            </div>

            {/* Eryri Adventurer Featured Section */}
            <div className="lg:col-span-2 bg-gradient-to-br from-[#1a1c20] to-[#2a2d32] rounded-lg overflow-hidden border border-primary/30">
              <div className="p-8">
                {/* Header */}
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-primary text-black px-3 py-1 text-xs font-bold uppercase rounded">
                    New Model
                  </span>
                  <span className="text-primary text-sm font-semibold">
                    State of the Art 4 Berth
                  </span>
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  THE <span className="text-primary">ERYRI</span> ADVENTURER
                </h3>
                <p className="text-primary text-sm font-semibold mb-2">
                  Named after Eryri (Snowdonia) National Park - The heart of Welsh adventure
                </p>
                <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                  State of the art 4 berth campervan, built on the award-winning Renault Trafic platform.
                  Features lithium battery power, 200W solar panel included, and Autoterm diesel heating
                  combined with our own bespoke wiring harness and controls supplied by industry-leading
                  BCA Group. Upgrade to the Wallis Duo for a completely gas-free experience.
                </p>

                {/* YouTube Video */}
                <div className="relative aspect-video bg-black rounded-lg mb-6 overflow-hidden">
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

                {/* Features Grid */}
                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  {eryriFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3 bg-[#15171a] rounded-lg p-4">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                        {feature.icon === "battery" && <Battery className="w-5 h-5 text-primary" />}
                        {feature.icon === "flame" && <Flame className="w-5 h-5 text-primary" />}
                        {feature.icon === "zap" && <Zap className="w-5 h-5 text-primary" />}
                        {feature.icon === "shield" && <Shield className="w-5 h-5 text-primary" />}
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-sm">{feature.title}</h4>
                        <p className="text-gray-400 text-xs">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pricing and CTA */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-gray-700">
                  <div>
                    <p className="text-gray-400 text-sm">Starting from</p>
                    <p className="text-2xl font-bold text-white">
                      £49,950 SWB
                    </p>
                    <p className="text-primary text-sm font-semibold">
                      As advertised: £56,950 with extras included
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                      href="/eryri-adventurer"
                      className="inline-flex items-center gap-2 border-2 border-primary text-primary px-6 py-3 uppercase font-bold hover:bg-primary hover:text-black transition-colors rounded"
                    >
                      Learn More
                      <ArrowUpRight size={18} />
                    </Link>
                    <Link
                      href="/brochure/eryri-adventurer"
                      className="inline-flex items-center gap-2 border-2 border-white text-white px-6 py-3 uppercase font-bold hover:bg-white hover:text-black transition-colors rounded"
                    >
                      <Download size={18} />
                      Brochure
                    </Link>
                    <Link
                      href="/contact?subject=Eryri%20Adventurer"
                      className="inline-flex items-center gap-2 bg-primary text-black px-6 py-3 uppercase font-bold hover:bg-primary/90 transition-colors rounded"
                    >
                      Enquire Now
                      <ArrowUpRight size={18} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/for-sale"
              className="inline-flex items-center gap-2 text-white font-bold uppercase tracking-wide border-b-2 border-white pb-1 hover:border-primary hover:text-primary transition-colors"
            >
              View All Campervans
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Banner */}
      <section className="relative py-24" style={{ backgroundImage: "url('https://ext.same-assets.com/2308322781/3538964224.jpeg')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="absolute inset-0 bg-black/60" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            OTHER <span className="text-primary">SERVICES WE OFFER</span>
          </h2>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-white font-bold uppercase tracking-wide border-b-2 border-white pb-1 hover:border-primary hover:text-primary transition-colors"
          >
            Learn More
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-[#25272c]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center">
            A FEW WORDS FROM <span className="text-primary">OUR ADVENTURERS</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-[#1a1c20] rounded-lg p-8 border border-gray-700"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xl">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-white font-bold">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.time}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-primary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
