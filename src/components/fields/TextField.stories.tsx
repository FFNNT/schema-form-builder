import type { Meta, StoryObj } from "@storybook/react";
import { TextField } from "./TextField";

const meta: Meta<typeof TextField> = {
  title: "Fields/TextField",
  component: TextField,
};

export default meta;

type Story = StoryObj<typeof TextField>;

export const Default: Story = {
  args: {
    label: "Aditya",
    value: "9",
    onChange: () => {},
    error: "77"
  },
};

export const Filled: Story = {
  args: {
    label: "Name",
    value: "Aditya Umarani",
    onChange: () => {},
  },
};

