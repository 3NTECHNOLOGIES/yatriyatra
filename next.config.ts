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
    if (process.env.NODE_ENV === "development") {
      return [
        {
          source: "/api/:path*",
          destination: "http://api.yatriyatra.com/api/:path*",
          basePath: false,
        },
      ];
    }
    return [];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "*",
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, POST, PUT, DELETE, OPTIONS",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "Content-Type, Authorization",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
