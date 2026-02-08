import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Hilltop Campers | Campervan Enquiries & Viewings | Llandudno, North Wales",
  description:
    "Get in touch with Hilltop Campers for campervan enquiries, viewings and quotes. Call 07869 169826 or visit our Llandudno workshop near Snowdonia.",
  keywords: [
    "contact Hilltop Campers",
    "campervan enquiry UK",
    "campervan viewing appointment",
    "campervan quote",
    "North Wales campervan dealer",
    "Llandudno campervan",
    "buy campervan North Wales",
    "campervan finance UK",
    "campervan dealer Wales",
    "Snowdonia campervan",
    "Conwy campervan",
  ],
  openGraph: {
    title: "Contact Hilltop Campers | Campervan Enquiries & Viewings",
    description:
      "Get in touch for campervan enquiries, viewings, and quotes. Call 07869 169826. Llandudno, North Wales.",
    url: "https://hilltopcampers.co.uk/contact",
    images: [
      {
        url: "https://hilltopcampers.co.uk/images/Camper_ai_2.jpeg",
        width: 1200,
        height: 630,
        alt: "Contact Hilltop Campers - Campervan Specialists in North Wales",
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
    canonical: "/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
