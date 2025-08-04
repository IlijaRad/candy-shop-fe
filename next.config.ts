import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "candy-shop-srb.laravel.cloud",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
