import type { Meta, StoryObj } from "@storybook/react";
import ProjectsSkillsSection from "./ProjectSkillSection";

const meta: Meta<typeof ProjectsSkillsSection> = {
  component: ProjectsSkillsSection,
  tags: ["autodocs", "chromatic"],
  parameters: {
    chromatic: { disableSnapshot: false },
  },
};

export default meta;

export const Default: StoryObj<typeof ProjectsSkillsSection> = {};
