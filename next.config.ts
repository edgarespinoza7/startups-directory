import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        // pathname: "/**", // optional, allows all paths
      },
      {
        protocol: "https",
        hostname: "placehold.co",
        pathname: "/**", // optional, allows all paths
      },
    ],
  },

};

export default nextConfig;
