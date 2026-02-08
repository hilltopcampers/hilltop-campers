import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react";

const menuLinks = [
  { name: "Campervan Conversions", href: "/built-to-order" },
  { name: "For Sale", href: "/for-sale" },
  { name: "Services", href: "/services" },
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1a1c20]">
      {/* Green Stripe */}
      <div className="yellow-stripe" />

      {/* CTA Section */}
      <div className="bg-[#25272c] py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-[#FFFFFF]">
            ON THE ROAD TO ADVENTURE LET Hilltop campers BE YOUR TRUSTED COMPANION
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-primary text-xl font-bold hover:opacity-80 transition-opacity border-b-2 border-primary pb-1"
          >
            TAKE THE FIRST STEP
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 17L17 7M17 7H7M17 7v10"
              />
            </svg>
          </Link>
        </div>
      </div>

      {/* Green Stripe */}
      <div className="yellow-stripe" />

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Logo and Tagline */}
        <div className="text-center mb-12">
          <Link href="/" className="inline-flex items-center gap-3 mb-4 justify-center">
            <Image
              src="/images/hilltop-logo.png"
              alt="Hilltop Campers Logo"
              width={160}
              height={45}
              className="shrink-0"
            />
            {/* Text */}
            <div className="flex flex-col text-left">
              <span className="text-2xl font-bold tracking-wide leading-tight">
                <span className="text-[#7cb342]">Hilltop</span>{" "}
                <span className="text-white">Campers</span>
              </span>
              <span className="text-xs text-gray-400 tracking-wider">
                Camper van conversion specialists
              </span>
            </div>
          </Link>
          <p className="text-gray-400 max-w-xl mx-auto">
            At Hilltop Campers we manufacture Premium Campervans using industry
            leading <em>materials</em> & processes – at affordable prices!
          </p>
        </div>

        {/* Footer Columns */}
        <div className="grid md:grid-cols-3 gap-12">
          {/* Get In Touch */}
          <div>
            <h3 className="text-lg font-bold uppercase tracking-wider mb-6 text-white">
              Get In Touch
            </h3>
            <div className="space-y-4">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Unit+1B+Builder+Street+West+Llandudno+LL30+1HH"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-gray-400 hover:text-primary transition-colors"
              >
                <MapPin size={20} className="text-primary shrink-0 mt-1" />
                <span>
                  Unit 1B, Builder Street West
                  <br />
                  Llandudno
                  <br />
                  LL30 1HH
                </span>
              </a>
              <a
                href="tel:07869169826"
                className="flex items-center gap-3 text-gray-400 hover:text-primary transition-colors"
              >
                <Phone size={20} className="text-primary" />
                <span>07869 169826</span>
              </a>
              <a
                href="mailto:hilltopcampers.co.uk@gmail.com"
                className="flex items-center gap-3 text-gray-400 hover:text-primary transition-colors"
              >
                <Mail size={20} className="text-primary" />
                <span>hilltopcampers.co.uk@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Menu */}
          <div>
            <h3 className="text-lg font-bold uppercase tracking-wider mb-6 text-white">
              Menu
            </h3>
            <ul className="space-y-3">
              {menuLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Hours */}
          <div>
            <h3 className="text-lg font-bold uppercase tracking-wider mb-6 text-white">
              Our Hours
            </h3>
            <p className="text-gray-400 mb-4">
              <strong className="text-white">
                Please make an appointment before visiting!
              </strong>
            </p>
            <div className="space-y-2 text-gray-400">
              <p>
                <strong className="text-white">Mon-Fri:</strong>
                <br />
                9:00am - 5:00pm
              </p>
              <p>
                <strong className="text-white">Sat & Sun:</strong>
                <br />
                Closed
              </p>
            </div>
          </div>
        </div>

        {/* Social Share */}
        <div className="flex justify-center items-center gap-4 mt-12 pt-8 border-t border-gray-700">
          <span className="text-gray-400 uppercase tracking-wider font-bold">
            Share:
          </span>
          <a
            href="https://www.facebook.com/HillTopCamperConversions/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-[#7cb342] flex items-center justify-center text-white hover:opacity-80 transition-opacity"
            aria-label="Facebook"
          >
            <Facebook size={20} />
          </a>
          <a
            href="https://www.instagram.com/hilltopcamperswales/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-[#7cb342] flex items-center justify-center text-white hover:opacity-80 transition-opacity"
            aria-label="Instagram"
          >
            <Instagram size={20} />
          </a>
          <a
            href="https://www.youtube.com/watch?v=KVXQK_Wydg0"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-[#7cb342] flex items-center justify-center text-white hover:opacity-80 transition-opacity"
            aria-label="YouTube"
          >
            <Youtube size={20} />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-[#15171a] py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-500 text-sm">
            &copy;2026 – HILLTOP CAMPERS
          </p>
          <div className="flex justify-center gap-4 mt-2 text-sm">
            <Link
              href="/terms"
              className="text-gray-500 hover:text-primary transition-colors"
            >
              Terms & Conditions
            </Link>
            <span className="text-gray-600">•</span>
            <Link
              href="/privacy"
              className="text-gray-500 hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
