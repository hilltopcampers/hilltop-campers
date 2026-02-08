import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Campervan Services | Pop Top Roof Fitting, Diesel Heaters, Solar Panels | North Wales",
  description:
    "Expert campervan services in North Wales: pop-top roof fitting, diesel heater installation, solar panels & lithium battery upgrades. Get a quote today.",
  keywords: [
    "campervan services UK",
    "pop top roof fitting UK",
    "campervan pop top installation",
    "diesel heater installation campervan",
    "Webasto heater fitting",
    "Autoterm heater installation",
    "campervan solar panel installation",
    "lithium leisure battery campervan",
    "campervan electrical upgrade",
    "campervan repairs North Wales",
    "campervan servicing Llandudno",
    "van conversion services Wales",
    "campervan upgrades UK",
  ],
  openGraph: {
    title: "Campervan Services | Pop Top, Diesel Heaters, Solar | Hilltop Campers",
    description:
      "Professional campervan services in North Wales: pop-top roofs, diesel heater installation, solar power systems. Expert technicians, competitive prices.",
    url: "https://hilltopcampers.co.uk/services",
    images: [
      {
        url: "https://hilltopcampers.co.uk/images/Camper_ai_2.jpeg",
        width: 1200,
        height: 630,
        alt: "Campervan Services - Pop Top Roof Fitting by Hilltop Campers",
      },
    ],
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
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
