import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "randomuser.me",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
    ],
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
  turbopack: {
    root: __dirname,
  },
  async redirects() {
    return [
      // Older bots and link unfurlers still hit /favicon.ico directly.
      // The branded icon is generated dynamically at /icon.
      { source: "/favicon.ico", destination: "/icon", permanent: true },
    ];
  },
};

export default withNextIntl(nextConfig);
