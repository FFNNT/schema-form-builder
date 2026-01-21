import type { Meta, StoryObj } from "@storybook/react";
import { FormRenderer } from "../FormRenderer";
import { exampleSchema } from "../../form-engine/schema";



const meta: Meta<typeof FormRenderer> = {
  title: "Form/FormRenderer",
  component: FormRenderer,
};

export default meta;

type Story = StoryObj<typeof FormRenderer>;

export const DefaultForm: Story = {
  args: {
    schema: exampleSchema,
  },
};


