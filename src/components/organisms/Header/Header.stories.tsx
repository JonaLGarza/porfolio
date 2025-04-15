import type { Meta, StoryObj } from "@storybook/react";
import Header from "./Header";
import { MemoryRouter } from "react-router-dom";
import { useState } from "react";

const meta: Meta<typeof Header> = {
  component: Header,
  parameters: {
    layout: "fullscreen",
    chromatic: { viewports: [320, 768] },
  },
  tags: ["autodocs", "chromatic"],
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/projects"]}>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Header>;

const Wrapper = () => {
  const [menuOpen, setMenuOpen] = useState(true);

  return (
      <Header
        menuOpen={menuOpen}
        toggleMenu={() => setMenuOpen((prev) => !prev)}
        closeMenu={() => setMenuOpen(false)}
      />
  );
};

export const Default: Story = {
  render: () => <Wrapper />,
};