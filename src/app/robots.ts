import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/banner", "/brochure", "/media"],
      },
    ],
    sitemap: "https://www.hilltopcampers.co.uk/sitemap.xml",
  };
}
