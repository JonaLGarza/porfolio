import type { Meta, StoryObj } from "@storybook/react";
import MobileMenu from "./MobileMenu";
import { useRef, useState } from "react";
import { MemoryRouter } from "react-router-dom";

const meta: Meta<typeof MobileMenu> = {
  component: MobileMenu,
  parameters: {
    layout: "fullscreen",
    chromatic: { viewports: [320, 768] },
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/"]}>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof MobileMenu>;

const Wrapper = () => {
  const menuRef = useRef<HTMLDivElement | null>(null);
  const [menuOpen, setMenuOpen] = useState(true);

  return (
    <div style={{ height: "100vh", padding: "1rem", background: "#f8f9fa" }}>
      <button
        onClick={() => setMenuOpen(true)}
        style={{
          padding: "8px 12px",
          backgroundColor: "#0f172a",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          marginBottom: "1rem",
          cursor: "pointer",
        }}
      >
        Open Mobile Menu
      </button>
      <MobileMenu
        menuOpen={menuOpen}
        menuRef={menuRef}
        closeMenu={() => setMenuOpen(false)}
      />
    </div>
  );
};

export const Default: Story = {
  render: () => <Wrapper />,
};
