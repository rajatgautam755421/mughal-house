import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Mughal House Manpower Consultancy (MH Recruiter)",
    short_name: "MH Recruiter",
    description:
      "Government-licensed overseas recruitment agency placing skilled Indian workers across Malaysia. Established 2023.",
    start_url: "/",
    display: "standalone",
    background_color: "#faf8f3",
    theme_color: "#1e4f9c",
    icons: [
      { src: "/logo.svg", sizes: "any",   type: "image/svg+xml", purpose: "any" },
      { src: "/favicon.ico", sizes: "any", type: "image/x-icon"               },
    ],
    categories: ["business", "employment", "recruitment"],
    lang: "en-IN",
    dir: "ltr",
  };
}
