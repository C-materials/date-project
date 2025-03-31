import type { StorybookConfig } from "@storybook/react-vite";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import svgr from "vite-plugin-svgr";

const config: StorybookConfig = {
  stories: [
    "../../../packages/ui/src/**/*.stories.@(js|jsx|ts|tsx)",
    "../../../packages/ui/src/**/*.mdx", // 문서화용 MDX 파일 추가
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-docs", // 문서화 애드온
    "@storybook/blocks",
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
    config.plugins = [
      ...(config.plugins || []),
      svgr({
        svgrOptions: { icon: true },
        include: "**/*.svg",
      }),
    ];
    config.plugins.push(
      vanillaExtractPlugin({
        identifiers: ({ hash }) => `_${hash}`,
      }),
    );
    return config;
  },
};

export default config;
