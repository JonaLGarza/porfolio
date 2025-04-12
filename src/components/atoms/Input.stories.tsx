import type { Meta, StoryObj } from "@storybook/react";
import Input from "./Input";

const meta: Meta<typeof Input> = {
  component: Input,
  tags: ["autodocs"],
};

export default meta;

export const Basic: StoryObj<typeof Input> = {
  args: {
    label: "Your name",
    placeholder: "Enter your name",
  },
};

export const WithError: StoryObj<typeof Input> = {
  args: {
    label: "Your email",
    placeholder: "Enter your email",
    error: "This field is required.",
  },
};
