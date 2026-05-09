import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow SVG as image source in next/image
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
