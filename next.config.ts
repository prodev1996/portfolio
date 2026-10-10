import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  agentRules: false,
  outputFileTracingIncludes: {
    "/writing/*": ["./content/articles/**/*"],
    "/sitemap.xml": ["./content/articles/**/*"],
  },
};

export default nextConfig;
