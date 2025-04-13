import type { Meta, StoryObj } from "@storybook/react";
import EmailPasswordForm from "./EmailPasswordForm";

const meta: Meta<typeof EmailPasswordForm> = {
  component: EmailPasswordForm,
  tags: ["autodocs"],
};

export default meta;

export const Default: StoryObj<typeof EmailPasswordForm> = {};
