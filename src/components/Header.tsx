"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Build Your Van", href: "/built-to-order" },
  { name: "For Sale", href: "/for-sale" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact Us", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed w-full z-50">
      {/* Top Bar */}
      <div className="bg-[#1a1c20] text-sm py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a
              href="mailto:hilltopcampers.co.uk@gmail.com"
              className="flex items-center gap-2 text-gray-300 hover:text-primary transition-colors"
            >
              <Mail size={14} />
              <span className="hidden sm:inline">hilltopcampers.co.uk@gmail.com</span>
            </a>
            <a
              href="tel:07869169826"
              className="flex items-center gap-2 text-gray-300 hover:text-primary transition-colors"
            >
              <Phone size={14} />
              <span>07869 169826</span>
            </a>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-gray-400 hidden sm:inline">Follow Us:</span>
            <a
              href="https://www.facebook.com/HillTopCamperConversions/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-primary transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={18} />
            </a>
            <a
              href="https://www.instagram.com/hilltopcamperswales/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://www.youtube.com/watch?v=KVXQK_Wydg0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-primary transition-colors"
              aria-label="YouTube"
            >
              <Youtube size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-[#25272c]/95 backdrop-blur-sm">
        <div className="container mx-auto px-4 flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/hilltop-logo.png"
              alt="Hilltop Campers Logo"
              width={140}
              height={40}
              className="shrink-0"
              priority
            />
            {/* Text */}
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-wide leading-tight">
                <span className="text-[#7cb342]">Hilltop</span>{" "}
                <span className="text-white">Campers</span>
              </span>
              <span className="text-[10px] text-gray-400 tracking-wider">
                Camper van conversion specialists
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-primary transition-colors font-medium uppercase text-sm tracking-wide"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#1a1c20] border-t border-gray-700">
            <div className="container mx-auto px-4 py-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block py-3 text-gray-300 hover:text-primary transition-colors font-medium uppercase tracking-wide border-b border-gray-700 last:border-b-0"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
