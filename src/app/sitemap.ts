import type { MetadataRoute } from "next";

const siteUrl = "https://mughalhouse.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const sections = [
    { url: "",            priority: 1.0,  changeFrequency: "monthly" as const },
    { url: "#about",      priority: 0.9,  changeFrequency: "monthly" as const },
    { url: "#services",   priority: 0.9,  changeFrequency: "monthly" as const },
    { url: "#process",    priority: 0.8,  changeFrequency: "monthly" as const },
    { url: "#team",       priority: 0.7,  changeFrequency: "monthly" as const },
    { url: "#testimonials", priority: 0.6, changeFrequency: "monthly" as const },
    { url: "#contact",    priority: 0.9,  changeFrequency: "monthly" as const },
  ];

  return sections.map(({ url, priority, changeFrequency }) => ({
    url: `${siteUrl}/${url}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
