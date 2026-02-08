import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/banner", "/brochure"],
      },
    ],
    sitemap: "https://hilltopcampers.co.uk/sitemap.xml",
  };
}
