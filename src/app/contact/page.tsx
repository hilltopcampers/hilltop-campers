"use client";

import { useState } from "react";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, ArrowUpRight, Loader2 } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    topic: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Send via our API route
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          topic: formData.topic,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        const data = await response.json();
        throw new Error(data.error || "Failed to send message");
      }
    } catch (err) {
      console.error("Form submission error:", err);
      setError("There was an error sending your message. Please try calling us directly at 07869 169826 or email hello@hilltopcampers.co.uk");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="pt-[104px]">
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="https://ext.same-assets.com/3767928042/3124488566.webp"
            alt="Contact Hilltop Campers"
            fill
            className="object-cover"
            priority
          />
          <div className="hero-overlay absolute inset-0" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            CONTACT <span className="text-primary">US</span>
          </h1>

          <div className="flex flex-col sm:flex-row gap-6 mt-8">
            <a
              href="tel:07869169826"
              className="flex items-center gap-3 text-white hover:text-primary transition-colors"
            >
              <Phone className="text-primary" size={24} />
              <div>
                <p className="text-sm text-gray-400 uppercase">Phone</p>
                <p className="font-bold">07869 169826</p>
              </div>
            </a>

            <a
              href="mailto:hello@hilltopcampers.co.uk"
              className="flex items-center gap-3 text-white hover:text-primary transition-colors"
            >
              <Mail className="text-primary" size={24} />
              <div>
                <p className="text-sm text-gray-400 uppercase">Email</p>
                <p className="font-bold">hello@hilltopcampers.co.uk</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Green Stripe */}
      <div className="yellow-stripe" />

      {/* Contact Section */}
      <section className="py-16 bg-[#25272c]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            ARRANGE A <span className="text-primary">VIEWING</span>
          </h2>

          <p className="text-gray-300 mb-8 max-w-3xl">
            We'd love to hear from you! Please contact us if you need anything from a little more
            information, a one-on-one chat about your options, you are interested in our Built to
            Order Campervan conversions or anything else we can help with.
          </p>

          {submitted ? (
            <div className="max-w-4xl bg-primary/20 border border-primary rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-primary mb-4">Thank You!</h3>
              <p className="text-gray-300 text-lg">
                Your message has been sent successfully. We'll get back to you as soon as possible.
              </p>
              <p className="text-gray-400 mt-4">
                You can also reach us directly at{" "}
                <a href="tel:07869169826" className="text-primary hover:underline">
                  07869 169826
                </a>
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="max-w-4xl"
            >
              {error && (
                <div className="mb-6 bg-red-500/20 border border-red-500 rounded-lg p-4 text-red-300">
                  {error}
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-bold uppercase tracking-wider text-gray-300 mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Full Name"
                    className="w-full bg-[#1a1c20] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                    required
                    disabled={loading}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-bold uppercase tracking-wider text-gray-300 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email Address"
                    className="w-full bg-[#1a1c20] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                    required
                    disabled={loading}
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-bold uppercase tracking-wider text-gray-300 mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Contact Number"
                    className="w-full bg-[#1a1c20] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                    disabled={loading}
                  />
                </div>

                <div>
                  <label
                    htmlFor="topic"
                    className="block text-sm font-bold uppercase tracking-wider text-gray-300 mb-2"
                  >
                    Choose Topic
                  </label>
                  <select
                    id="topic"
                    name="topic"
                    value={formData.topic}
                    onChange={handleChange}
                    className="w-full bg-[#1a1c20] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                    disabled={loading}
                  >
                    <option value="">Select from list</option>
                    <option value="Built To Order Campervan">Built To Order Campervan</option>
                    <option value="Campervans For Sale">Campervans For Sale</option>
                    <option value="Services Enquiry">Services Enquiry</option>
                    <option value="General Enquiry">General Enquiry</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-bold uppercase tracking-wider text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows={6}
                  className="w-full bg-[#1a1c20] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors resize-none"
                  required
                  disabled={loading}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="bg-[#1a1c20] border-2 border-gray-600 text-white px-12 py-4 uppercase font-bold tracking-wider hover:bg-primary hover:border-primary hover:text-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-3"
              >
                {loading ? (
                  <>
                    <Loader2 className="animate-spin" size={20} />
                    Sending...
                  </>
                ) : (
                  "Submit"
                )}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-[#1a1c20]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Address */}
            <div className="bg-[#25272c] rounded-lg p-8 text-center">
              <MapPin className="text-primary mx-auto mb-4" size={40} />
              <h3 className="text-xl font-bold text-white mb-4">Our Location</h3>
              <p className="text-gray-300">
                Unit 1B, Builder Street West<br />
                Llandudno<br />
                LL30 1HH
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Unit+1B+Builder+Street+West+Llandudno+LL30+1HH"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary font-bold uppercase text-sm mt-4 hover:opacity-80 transition-opacity"
              >
                Get Directions
                <ArrowUpRight size={16} />
              </a>
            </div>

            {/* Phone */}
            <div className="bg-[#25272c] rounded-lg p-8 text-center">
              <Phone className="text-primary mx-auto mb-4" size={40} />
              <h3 className="text-xl font-bold text-white mb-4">Call Us</h3>
              <p className="text-gray-300 mb-2">
                <a href="tel:07869169826" className="hover:text-primary transition-colors">
                  07869 169826
                </a>
              </p>
              <p className="text-gray-400 text-sm">
                We're happy to answer any questions
              </p>
            </div>

            {/* Hours */}
            <div className="bg-[#25272c] rounded-lg p-8 text-center">
              <Clock className="text-primary mx-auto mb-4" size={40} />
              <h3 className="text-xl font-bold text-white mb-4">Opening Hours</h3>
              <div className="text-gray-300 space-y-1">
                <p><strong>Mon-Fri:</strong> 9:00am - 5:00pm</p>
                <p><strong>Sat & Sun:</strong> Closed</p>
              </div>
              <p className="text-primary text-sm mt-4 font-bold">
                Please book an appointment before visiting
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] bg-[#25272c]">
        <iframe
          src="https://www.openstreetmap.org/export/embed.html?bbox=-3.8367%2C53.3132%2C-3.8267%2C53.3192&layer=mapnik&marker=53.31622%2C-3.831697"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="Hilltop Campers Location - Unit 1B Builder Street West, Llandudno LL30 1HH"
        />
      </section>
    </div>
  );
}
