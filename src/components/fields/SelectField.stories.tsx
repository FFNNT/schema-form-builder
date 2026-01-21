import type { Meta, StoryObj } from "@storybook/react";
import { SelectField } from "./SelectField";

const meta: Meta<typeof SelectField> = {
  title: "Fields/SelectField",
  component: SelectField,
};

export default meta;

type Story = StoryObj<typeof SelectField>;

export const Default: Story = {
  args: {
    label: "Role",
    value: "student",
    options: [
      { label: "Student", value: "student" },
      { label: "Developer", value: "developer" },
    ],
    onChange: () => {},
  },
};

