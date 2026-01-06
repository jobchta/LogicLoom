/** @type {import('next').NextConfig} */
const nextConfig = {
    // Enable static export for GitHub Pages
    output: 'export',

    // Set base path for GitHub Pages (repo name) - always set for this deployment
    basePath: '/LogicLoom',

    // Asset prefix for correct CSS/JS loading
    assetPrefix: '/LogicLoom/',

    // Disable image optimization (not supported in static export)
    images: {
        unoptimized: true,
    },

    // Trailing slash for GitHub Pages compatibility
    trailingSlash: true,
};

export default nextConfig;
