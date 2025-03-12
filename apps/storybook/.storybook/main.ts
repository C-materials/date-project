import type { StorybookConfig } from "@storybook/react-vite";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import "@packages/ui/src/global.css";

const config: StorybookConfig = {
  stories: ["../../../packages/ui/src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  typescript: {
    reactDocgen: "react-docgen",
    skipCompiler: true,
  },
  docs: {
    autodocs: true,
  },
  async viteFinal(config) {
    config.plugins = config.plugins || [];
    config.plugins.push(
      vanillaExtractPlugin({
        identifiers: ({ hash }) => `_${hash}`,
      }),
    );
    return config;
  },
};

export default config;
