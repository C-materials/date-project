import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};
const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin");
const withVanillaExtract = createVanillaExtractPlugin();

module.exports = withVanillaExtract(nextConfig);

export default nextConfig;
