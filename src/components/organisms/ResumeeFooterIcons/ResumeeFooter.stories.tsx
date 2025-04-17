import type { Meta, StoryObj } from "@storybook/react";
import ResumeFooterIcons from "./ResumeeFooterIcons";

const meta: Meta<typeof ResumeFooterIcons> = {
  component: ResumeFooterIcons,
  tags: ["autodocs", "chromatic"],
  parameters: {
    chromatic: { disableSnapshot: false },
  },
};

export default meta;

export const Default: StoryObj<typeof ResumeFooterIcons> = {};
