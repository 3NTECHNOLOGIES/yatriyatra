import { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
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
        source: "/api/v1/:path*",
        destination: "https://api.yatriyatra.com/api/v1/:path*",
        has: [
          {
            type: "header",
            key: "x-skip-rewrite",
            value: "(?!true)",
          },
        ],
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
            value: "*",
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, POST, PUT, DELETE, OPTIONS, HEAD, PATCH",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization, X-Request-ID",
          },
          {
            key: "Access-Control-Expose-Headers",
            value: "X-Request-ID",
          },
          {
            key: "Access-Control-Max-Age",
            value: "86400",
          },
          {
            key: "Access-Control-Allow-Credentials",
            value: "true",
          },
          {
            key: "Allow",
            value: "GET, POST, PUT, DELETE, OPTIONS, HEAD, PATCH",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
