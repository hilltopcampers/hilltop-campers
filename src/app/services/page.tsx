"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Wrench, Sun, Battery, Flame, Shield, Gauge, Zap, Home, ChevronRight } from "lucide-react";

const mainServices = [
  {
    icon: Home,
    title: "Pop Top Roof Fitting",
    description: "Approved installer of Van Lidz & West Dubs roofs for Renault Trafic, VW Transporter, Ford Transit Custom, and more.",
    features: ["Professional Installation", "Multiple Van Models", "Quality Materials"],
  },
  {
    icon: Flame,
    title: "Diesel Heaters",
    description: "Approved and trained installers for Autoterm 2kw, 5kw & 8kw diesel heaters for campervans and motorhomes.",
    features: ["Autoterm Certified", "Underslung Options", "Expert Fitting"],
  },
  {
    icon: Battery,
    title: "Leisure Battery Systems",
    description: "Split charge relay systems to power all your 12v appliances for off-grid camping adventures.",
    features: ["Off-Grid Power", "12v Appliances", "Engine Charging"],
  },
  {
    icon: Sun,
    title: "Solar Power Systems",
    description: "The most effective and green way of recharging your leisure battery system without hook-up.",
    features: ["Eco-Friendly", "Touch Screen Display", "Battery Monitoring"],
  },
];

const additionalServices = [
  {
    icon: Zap,
    title: "Lithium Battery Systems",
    description: "Twice the usable power, quicker charging, and half the weight of lead acid batteries.",
  },
  {
    icon: Shield,
    title: "Annual Habitation Service",
    description: "Gas and electrical safety checks with full damp report for peace of mind.",
  },
  {
    icon: Gauge,
    title: "LPG Gas Systems",
    description: "Diagnose, repair and certify any gas or appliance faults safely.",
  },
  {
    icon: Wrench,
    title: "Fiamma Awning Fitting",
    description: "Professional fitting of Fiamma F45S and F80 awnings to your campervan.",
  },
];



export default function ServicesPage() {
  return (
    <div className="pt-[104px]">
      {/* Hero Section - Split Design */}
      <section className="relative min-h-[60vh] flex items-center bg-gradient-to-br from-[#1a1c20] via-[#25272c] to-[#1a1c20]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary font-bold uppercase tracking-widest mb-4">
                Professional Services
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                EXPERT <span className="text-primary">CAMPERVAN</span>
                <br />SERVICES
              </h1>
              <p className="text-gray-300 text-lg mb-8 max-w-xl">
                From pop-top roof fitting to solar power systems, we provide comprehensive
                services to enhance your campervan experience. All work completed to the highest standards.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="bg-primary text-black font-bold uppercase px-8 py-4 rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Get a Quote
                </Link>
                <Link
                  href="/built-to-order"
                  className="border-2 border-white text-white font-bold uppercase px-8 py-4 rounded-lg hover:bg-white hover:text-black transition-colors"
                >
                  Full Conversions
                </Link>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="relative aspect-square max-w-lg mx-auto">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl" />
                <Image
                  src="https://ext.same-assets.com/3767928042/2399292210.webp"
                  alt="Campervan Services"
                  fill
                  className="object-cover rounded-3xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services - Large Cards */}
      <section className="py-20 bg-[#1a1c20]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              OUR <span className="text-primary">CORE SERVICES</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Professional installation and fitting services for all your campervan needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-[#25272c] to-[#1a1c20] rounded-2xl p-8 border border-gray-700 hover:border-primary transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 mb-4">{service.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="bg-[#1a1c20] text-primary text-xs font-medium px-3 py-1 rounded-full border border-primary/30"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-700">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-primary font-bold uppercase text-sm hover:gap-4 transition-all"
                  >
                    Enquire Now
                    <ChevronRight size={18} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services - Grid */}
      <section className="py-20 bg-[#25272c]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              ADDITIONAL <span className="text-primary">SERVICES</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We offer a range of additional services to keep your campervan in top condition
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="group bg-[#1a1c20] rounded-xl p-6 border border-gray-700 hover:border-primary hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all">
                  <service.icon className="w-6 h-6 text-primary group-hover:text-black transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-[#1a1c20]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              HOW IT <span className="text-primary">WORKS</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Simple, straightforward process from enquiry to completion
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Enquiry", desc: "Get in touch with your requirements" },
              { step: "02", title: "Consultation", desc: "We discuss options and provide a quote" },
              { step: "03", title: "Booking", desc: "Schedule your service at a convenient time" },
              { step: "04", title: "Completion", desc: "Professional work completed to high standards" },
            ].map((item, index) => (
              <div key={index} className="relative text-center">
                <div className="text-6xl md:text-7xl font-bold text-primary/20 mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-[#5a8f2a]" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0wLThoLTJ2LTRoMnY0em0tOCA4aC0ydi00aDJ2NHptMC04aC0ydi00aDJ2NHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6">
              READY TO ENHANCE YOUR CAMPERVAN?
            </h2>
            <p className="text-black/70 text-lg mb-8">
              Contact us today to discuss your requirements. We're here to help with all your
              campervan service needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="bg-black text-white font-bold uppercase px-8 py-4 rounded-lg hover:bg-black/80 transition-colors inline-flex items-center gap-2"
              >
                Get in Touch
                <ArrowUpRight size={18} />
              </Link>
              <a
                href="tel:07869169826"
                className="bg-white/20 text-black font-bold uppercase px-8 py-4 rounded-lg hover:bg-white/30 transition-colors"
              >
                Call: 07869 169826
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
