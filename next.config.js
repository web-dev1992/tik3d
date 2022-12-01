/** @type {import('next').NextConfig} */
const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["http://localhost:3000/"],
  },
  // compiler: {
  //   styledComponents: true,
  // },
};
// const myImageLoader = ({ src }) => {
//   return `${src}`;
// };
// const TypescriptConfig = {
//   typescript: {
// !! WARN !!
// Dangerously allow production builds to successfully complete even if
// your project has type errors.
// !! WARN !!
//     ignoreBuildErrors: true,
//   },
// };

module.exports = {
  // TypescriptConfig,
  nextConfig,
  i18n: {
    locales: ["fa"],
    defaultLocale: "fa",
  },
  // myImageLoader,
};

// module.exports = (phase) => {
//   if (phase === PHASE_DEVELOPMENT_SERVER) {
//     return {
//       env: {
//         // nextAuth_Secret:
//         //   "e8f904d204ade9ff64c6f662df2041149c4176d8efd3c06d93b4ca9f974d9f74",
//         domain: "http://localhost:3000/",
//       },
//       nextConfig,
//       // myImageLoader,
//     };
//   }
// };
