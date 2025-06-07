import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["images.unsplash.com", "localhost", "api.yatriyatra.com"],
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://api.yatriyatra.com/api/:path*",
      },
    ];
  },
};

export default nextConfig;
