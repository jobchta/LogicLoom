import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const repoName = "LogicLoom";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // Set the basePath for GitHub Pages deployment (e.g. /LogicLoom)
  // This ensures assets (CSS, JS, Images) load correctly when hosted on a subdirectory.
  // We only apply this in production builds.
  basePath: isProd ? `/${repoName}` : undefined,
};

export default nextConfig;
