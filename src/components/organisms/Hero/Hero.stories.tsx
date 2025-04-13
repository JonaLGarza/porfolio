import type { Meta, StoryObj } from "@storybook/react";
import Hero from "./Hero";
import { MemoryRouter } from "react-router-dom";

const meta: Meta<typeof Hero> = {
  component: Hero,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export default meta;
export const Default: StoryObj<typeof Hero> = {};
