import type { Meta, StoryObj } from "@storybook/react";
import AboutMe from "./AboutMe";

const meta: Meta<typeof AboutMe> = {
  component: AboutMe,
  tags: ["autodocs", "chromatic"],
  parameters: {
    chromatic: { disableSnapshot: false },
  },
};

export default meta;

export const Default: StoryObj<typeof AboutMe> = {};
