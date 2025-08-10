import type { NextConfig } from "next";
import { RemotePattern } from "next/dist/shared/lib/image-config";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        pathname: "/**",
      },
      ...(process.env.BUCKET_URL
        ? [
            {
              protocol: "https",
              hostname: process.env.BUCKET_URL,
              pathname: "/**",
            } as RemotePattern,
          ]
        : []),
    ],
  },
};

export default nextConfig;
