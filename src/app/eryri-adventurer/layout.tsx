import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Eryri Adventurer | Premium 4 Berth Renault Trafic Campervan | From £49,950",
  description:
    "The Eryri Adventurer - our flagship Renault Trafic campervan. 4 berth, pop-top roof, 200W solar, lithium power, Autoterm diesel heating. Gas-free option available. From £49,950. Finance available.",
  keywords: [
    "Eryri Adventurer campervan",
    "Renault Trafic 4 berth campervan",
    "premium campervan UK",
    "pop top campervan for sale",
    "lithium battery campervan UK",
    "gas free campervan",
    "Autoterm diesel heater campervan",
    "200W solar campervan",
    "luxury campervan conversion",
    "Snowdonia campervan",
    "Welsh campervan manufacturer",
    "family campervan UK",
    "Renault Trafic pop top",
  ],
  openGraph: {
    title: "Eryri Adventurer | Premium 4 Berth Campervan | Hilltop Campers",
    description:
      "Our flagship Renault Trafic 4 berth campervan. Pop-top, lithium power, diesel heating. From £49,950. Built in North Wales.",
    url: "https://hilltopcampers.co.uk/eryri-adventurer",
    images: [
      {
        url: "https://hilltopcampers.co.uk/images/eryri-adventurer/front-headon.jpg",
        width: 1200,
        height: 630,
        alt: "Eryri Adventurer - Premium 4 Berth Renault Trafic Campervan by Hilltop Campers",
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
    canonical: "/eryri-adventurer",
  },
};

export default function EryriAdventurerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
