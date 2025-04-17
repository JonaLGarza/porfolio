import type { Meta, StoryObj } from "@storybook/react";
import TimelineSection from "./TimeLineSection";

const meta: Meta<typeof TimelineSection> = {
  component: TimelineSection,
  tags: ["autodocs", "chromatic"],
  parameters: {
    chromatic: { disableSnapshot: false },
  },
};

export default meta;

export const Default: StoryObj<typeof TimelineSection> = {};
