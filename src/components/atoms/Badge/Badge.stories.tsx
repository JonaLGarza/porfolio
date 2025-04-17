import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";

const meta: Meta<typeof Badge> = {
  title: "Atoms/Badge",
  component: Badge,
  tags: ["autodocs"],
  parameters: {
    chromatic: { viewports: [320, 768, 1024] },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    label: "TypeScript",
  },
};

export const CustomStyled: Story = {
  args: {
    label: "React",
    className: "bg-blue-600 text-white",
  },
};
