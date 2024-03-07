/** @type { import('@storybook/react').Preview } */
import { withRouter } from "storybook-addon-react-router-v6";

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export const decorators = [withRouter];

export default preview;
