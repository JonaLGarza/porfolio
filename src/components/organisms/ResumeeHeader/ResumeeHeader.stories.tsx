import type { Meta, StoryObj } from "@storybook/react";
import ResumeHeader from "./ResumeeHeader";

const meta: Meta<typeof ResumeHeader> = {
  component: ResumeHeader,
  tags: ["autodocs", "chromatic"],
  parameters: {
    chromatic: { disableSnapshot: false },
  },
};

export default meta;

export const Default: StoryObj<typeof ResumeHeader> = {};
