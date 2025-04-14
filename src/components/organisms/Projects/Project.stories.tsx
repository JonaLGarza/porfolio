import type { Meta, StoryObj } from "@storybook/react";
import Projects from "./Projects";

const meta: Meta<typeof Projects> = {
  component: Projects,
  tags: ["autodocs"],
};

export default meta;

export const Default: StoryObj<typeof Projects> = {};
