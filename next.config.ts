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
    // Always use rewrites in both development and production
    return [
      {
        source: "/api/v1/:path*",
        destination: "https://api.yatriyatra.com/api/v1/:path*",
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value:
              process.env.NODE_ENV === "development"
                ? "http://localhost:3000"
                : "https://yatriyatra.com",
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, POST, PUT, DELETE, OPTIONS",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "Content-Type, Authorization, X-Requested-With",
          },
          {
            key: "Access-Control-Allow-Credentials",
            value: "true",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
