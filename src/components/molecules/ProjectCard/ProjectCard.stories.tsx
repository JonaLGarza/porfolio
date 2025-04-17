import type { Meta, StoryObj } from "@storybook/react";
import { ProjectCard } from "./ProjectCard";

const meta: Meta<typeof ProjectCard> = {
  title: "Molecules/ProjectCard",
  component: ProjectCard,
  tags: ["autodocs"],
  parameters: {
    chromatic: { viewports: [320, 768, 1024] }, // Ensures mobile and desktop snapshots
  },
};

export default meta;
type Story = StoryObj<typeof ProjectCard>;

export const Default: Story = {
  args: {
    title: "Custom Dashboard",
    description:
      "A customizable analytics dashboard built with React, Tailwind, and Chart.js for enterprise use cases.",
    badges: ["React", "Tailwind", "Chart.js", "TypeScript"],
  },
};
