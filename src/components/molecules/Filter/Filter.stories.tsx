import type { Meta, StoryObj } from "@storybook/react";
import ProjectFilter from "./Filter";
import { useState } from "react";
import { ComponentProps, useCallback } from "react";

const meta: Meta<typeof ProjectFilter> = {
  component: ProjectFilter,
  tags: ["autodocs", "chromatic"],
  parameters: {
    chromatic: { disableSnapshot: false },
  },
};

export default meta;

const Wrapper = (args: ComponentProps<typeof ProjectFilter>) => {
  const [query, setQuery] = useState("");
  const handleQueryChange = useCallback((q: string) => setQuery(q), []);

  return (
    <div className="p-6 max-w-md mx-auto">
      <ProjectFilter {...args} query={query} onQueryChange={handleQueryChange} placeholder="Search projectsby keyword"/>
      <p className="mt-4 text-sm text-muted-foreground">
        Searching for: <strong>{query}</strong>
      </p>
    </div>
  );
};

export const Default: StoryObj<typeof ProjectFilter> = {
  render: (args) => <Wrapper {...args} />,
};