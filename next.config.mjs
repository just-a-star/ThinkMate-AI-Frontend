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

  // // Adjusting routes
  // async rewrites() {
  //   return [
  //     {
  //       source: "/pengajar/login",
  //       destination: "/auth/login",
  //     },
  //   ];
  // },
};

export default nextConfig;
