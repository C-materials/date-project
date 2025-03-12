import type { Preview } from "@storybook/react";
import "../../../packages/ui/src/globalStyle/global.css"; // alias 설정해도 안됨

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
