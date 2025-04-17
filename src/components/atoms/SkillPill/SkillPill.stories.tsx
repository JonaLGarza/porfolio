// src/components/atoms/SkillPill/SkillPill.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { SkillPill } from "./SkillPill";

const meta: Meta<typeof SkillPill> = {
  component: SkillPill,
  tags: ["autodocs"],
  parameters: {
    chromatic: { viewports: [320, 768, 1024] },
  },
};

export default meta;
type Story = StoryObj<typeof SkillPill>;

export const Default: Story = {
  args: {
    label: "NestJS",
  },
};

export const CustomClass: Story = {
  args: {
    label: "Docker",
    className: "bg-secondary text-secondary-foreground",
  },
};
