import type { Meta, StoryObj } from "@storybook/react";
import SkillsTimelineSection from "./SkillsTimelineSection";

const meta: Meta<typeof SkillsTimelineSection> = {
  component: SkillsTimelineSection,
  title: "Organisms/SkillsTimelineSection",
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    chromatic: { viewports: [320, 768, 1280] },
  },
};

export default meta;
type Story = StoryObj<typeof SkillsTimelineSection>;

export const Default: Story = {
  render: () => <SkillsTimelineSection />,
};