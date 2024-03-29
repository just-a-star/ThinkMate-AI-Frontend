/** @type {import('next').NextConfig} */
const nextConfig = {
  //   Extend webpack config on your next.config.js file using @svgr/webpack
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

export default nextConfig;
