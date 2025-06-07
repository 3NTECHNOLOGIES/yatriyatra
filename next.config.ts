import { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "api.yatriyatra.com",
        port: "",
        pathname: "/api/v1/images/**",
      },
      {
        protocol: "https",
        hostname: "api.yatriyatra.com",
        port: "",
        pathname: "/api/v1/images/**",
      },
    ],
    minimumCacheTTL: 60,
    unoptimized: true,
    domains: ["api.yatriyatra.com"],
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://api.yatriyatra.com/api/:path*",
        basePath: false,
      },
    ];
  },
};

export default nextConfig;
