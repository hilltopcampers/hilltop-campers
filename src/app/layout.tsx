import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

export const metadata: Metadata = {
  title: {
    default: "Hilltop Campers | Renault Trafic Campervan Conversions | North Wales",
    template: "%s | Hilltop Campers",
  },
  description:
    "Premium Renault Trafic, Ford Transit & VW campervan conversions in North Wales. Luxury campervans built in Llandudno, near Snowdonia National Park.",
  keywords: [
    "Renault Trafic campervan",
    "Renault Trafic conversion",
    "Renault Trafic camper",
    "Trafic campervan for sale",
    "Renault Trafic campervan conversion",
    "campervan conversions North Wales",
    "campervan conversions UK",
    "campervan manufacturer Wales",
    "Ford Transit Custom campervan",
    "VW Transporter campervan",
    "pop top campervan",
    "4 berth campervan",
    "campervan for sale UK",
    "Hilltop Campers",
    "Llandudno campervan",
    "Snowdonia campervan",
    "Eryri campervan",
    "Welsh campervan manufacturer",
    "bespoke campervan conversion",
    "luxury campervan UK",
    "campervan with pop top roof",
    "Renault Trafic SWB camper",
    "Renault Trafic LWB camper",
    "diesel heater campervan",
    "lithium battery campervan",
  ],
  authors: [{ name: "Hilltop Campers" }],
  creator: "Hilltop Campers",
  publisher: "Hilltop Campers",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.hilltopcampers.co.uk"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Hilltop Campers | Premium Campervan Conversions | North Wales UK",
    description:
      "Premium campervan conversions in North Wales. Renault Trafic, Ford Transit Custom & VW Transporter specialists. Campervans for sale from £26,950. Bespoke conversions from £20,500.",
    url: "https://www.hilltopcampers.co.uk",
    siteName: "Hilltop Campers",
    images: [
      {
        url: "https://www.hilltopcampers.co.uk/images/Camper_ai_2.jpeg",
        width: 1200,
        height: 630,
        alt: "Hilltop Campers - Premium Campervan Conversions in Snowdonia, North Wales",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hilltop Campers | Renault Trafic Campervan Conversions",
    description:
      "Premium Renault Trafic campervan conversions in North Wales. Bespoke designs, quality craftsmanship.",
    images: ["/images/Camper_ai_2.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "d1f582ce659b08e2",
  },
  category: "Automotive",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon-512x512.png", sizes: "512x512", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

// JSON-LD Structured Data for Local Business and FAQ
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["AutoDealer", "LocalBusiness", "Store"],
      "@id": "https://www.hilltopcampers.co.uk/#organization",
      name: "Hilltop Campers",
      alternateName: "Hilltop Campers Ltd",
      legalName: "Hilltop Campers Ltd",
      description: "Premium Renault Trafic campervan conversions in North Wales. Specialists in converting Renault Trafic, Ford Transit Custom & VW Transporter vans into luxury campervans.",
      url: "https://www.hilltopcampers.co.uk",
      telephone: "+44 7869 169826",
      email: "hilltopcampers.co.uk@gmail.com",
      logo: {
        "@type": "ImageObject",
        url: "https://www.hilltopcampers.co.uk/images/hilltop-logo.png",
        width: 1653,
        height: 734,
      },
      image: [
        "https://www.hilltopcampers.co.uk/images/Camper_ai_2.jpeg",
        "https://www.hilltopcampers.co.uk/images/hilltop-logo.png",
        "https://www.hilltopcampers.co.uk/images/eryri-adventurer/front-headon.jpg",
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: "Unit 1B, Builder Street West",
        addressLocality: "Llandudno",
        addressRegion: "Conwy",
        postalCode: "LL30 1HH",
        addressCountry: "GB",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 53.3241,
        longitude: -3.8276,
      },
      hasMap: "https://www.google.com/maps/search/?api=1&query=Unit+1B+Builder+Street+West+Llandudno+LL30+1HH",
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "17:00",
        },
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+44 7869 169826",
          contactType: "sales",
          email: "hilltopcampers.co.uk@gmail.com",
          availableLanguage: ["English", "Welsh"],
          areaServed: "GB",
        },
        {
          "@type": "ContactPoint",
          telephone: "+44 7869 169826",
          contactType: "customer service",
          email: "hilltopcampers.co.uk@gmail.com",
          availableLanguage: ["English", "Welsh"],
        },
      ],
      sameAs: [
        "https://www.facebook.com/HillTopCamperConversions/",
        "https://www.instagram.com/hilltopcamperswales/",
        "https://www.youtube.com/watch?v=KVXQK_Wydg0",
      ],
      priceRange: "££-£££",
      currenciesAccepted: "GBP",
      paymentAccepted: "Cash, Credit Card, Debit Card, Bank Transfer, Finance",
      slogan: "Campervan Conversion Specialists",
      knowsAbout: [
        "Campervan conversions",
        "Renault Trafic",
        "Ford Transit Custom",
        "VW Transporter",
        "Pop-top roof installation",
        "Diesel heater installation",
        "Lithium battery systems",
        "Solar panel installation",
      ],
      makesOffer: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Campervan Conversion",
            description: "Full bespoke campervan conversion service",
          },
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "GBP",
            minPrice: "20500",
          },
        },
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5",
        bestRating: "5",
        worstRating: "1",
        ratingCount: "25",
        reviewCount: "25",
      },
      review: [
        {
          "@type": "Review",
          author: {
            "@type": "Person",
            name: "Chris Townsend",
          },
          datePublished: "2025-05-01",
          reviewBody: "Absolutely fantastic service from Hilltop Campers. They converted our van exactly as we wanted and the attention to detail is superb. Highly recommend!",
          reviewRating: {
            "@type": "Rating",
            ratingValue: "5",
            bestRating: "5",
          },
        },
        {
          "@type": "Review",
          author: {
            "@type": "Person",
            name: "Martin Smith",
          },
          datePublished: "2025-02-01",
          reviewBody: "Excellent conversion of my van and great service from Phil. If you're looking to modify your van or convert one, don't hesitate, they're brilliant.",
          reviewRating: {
            "@type": "Rating",
            ratingValue: "5",
            bestRating: "5",
          },
        },
        {
          "@type": "Review",
          author: {
            "@type": "Person",
            name: "Steven Williams",
          },
          datePublished: "2025-01-01",
          reviewBody: "Bought a pre-converted van from Hilltop and it's been brilliant. Any small issues were dealt with promptly. Great quality workmanship and excellent customer service.",
          reviewRating: {
            "@type": "Rating",
            ratingValue: "5",
            bestRating: "5",
          },
        },
      ],
      areaServed: [
        {
          "@type": "Country",
          name: "United Kingdom",
        },
        {
          "@type": "AdministrativeArea",
          name: "Wales",
        },
        {
          "@type": "AdministrativeArea",
          name: "North Wales",
        },
        {
          "@type": "AdministrativeArea",
          name: "Snowdonia",
        },
        {
          "@type": "AdministrativeArea",
          name: "England",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.hilltopcampers.co.uk/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much does a Renault Trafic campervan conversion cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Our Renault Trafic campervan conversions start from £20,500 if you supply your own van, £40,950 on a pre-owned van, or £49,950 on a brand new van. Pre-built campervans are available from £26,950.",
          },
        },
        {
          "@type": "Question",
          name: "Where is Hilltop Campers located?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Hilltop Campers is located in Llandudno, North Wales, just off the A55 North Wales Expressway, at the foot of Eryri (Snowdonia) National Park. Address: Unit 1B, Builder Street West, Llandudno, LL30 1HH.",
          },
        },
        {
          "@type": "Question",
          name: "What van types do you convert into campervans?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We specialise in Renault Trafic conversions but also convert Ford Transit Custom and VW Transporter T6/T6.1 vans into bespoke campervans.",
          },
        },
        {
          "@type": "Question",
          name: "Do you offer finance for campervan purchases?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, we offer finance options on our campervans. Contact us to discuss your requirements and we can provide details on available finance packages.",
          },
        },
        {
          "@type": "Question",
          name: "How long does a campervan conversion take?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A full campervan conversion typically takes 8-12 weeks depending on the specification and complexity. We also have pre-built campervans available for immediate purchase with no waiting time.",
          },
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.hilltopcampers.co.uk/#website",
      url: "https://www.hilltopcampers.co.uk",
      name: "Hilltop Campers",
      description: "Premium campervan conversions in North Wales",
      publisher: {
        "@id": "https://www.hilltopcampers.co.uk/#organization",
      },
      potentialAction: {
        "@type": "SearchAction",
        target: "https://www.hilltopcampers.co.uk/for-sale?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <head>
        {/* Preconnect to external domains for faster loading */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://i.ytimg.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://i.ytimg.com" />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-N81PCVZF0D"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-N81PCVZF0D');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${bebasNeue.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
