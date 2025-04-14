import type { Meta, StoryObj } from "@storybook/react";
import Contact from "./Contact";

const meta: Meta<typeof Contact> = {
  component: Contact,
  title: "Organisms/Contact",
  tags: ["autodocs", "chromatic"],
  parameters: {
    chromatic: { disableSnapshot: false },
  },
};

export default meta;

export const Default: StoryObj<typeof Contact> = {};