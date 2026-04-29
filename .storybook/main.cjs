const path = require("node:path");
const { mergeConfig } = require("vite");

/** @type {import('@storybook/react-vite').StorybookConfig} */
module.exports = {
  stories: ["../packages/ui/**/*.stories.tsx"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  async viteFinal(userConfig) {
    const { default: tailwindcss } = await import("@tailwindcss/vite");
    const repoRoot = path.resolve(__dirname, "..");
    return mergeConfig(userConfig, {
      plugins: [tailwindcss()],
      server: {
        fs: {
          allow: [repoRoot],
        },
      },
    });
  },
};
