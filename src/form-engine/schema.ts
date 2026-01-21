export type FieldType = "text" | "select";

export interface Condition {
  fieldId: string;
  equals: string;
}

export interface BaseField {
  id: string;
  label: string;
  required?: boolean;
  condition?: Condition;
}

export interface TextFieldSchema extends BaseField {
  type: "text";
}

export interface SelectFieldSchema extends BaseField {
  type: "select";
  options: { label: string; value: string }[];
}

export type FieldSchema = TextFieldSchema | SelectFieldSchema;

export interface FormSchema {
  id: string;
  fields: FieldSchema[];
}

export const exampleSchema: FormSchema = {
  id: "example",
  fields: [
    { id: "name", type: "text", label: "Name", required: true },
    {
      id: "role",
      type: "select",
      label: "Role",
      options: [
        { label: "Student", value: "student" },
        { label: "Developer", value: "developer" }
      ]
    },
    {
      id: "github",
      type: "text",
      label: "GitHub Username",
      condition: { fieldId: "role", equals: "developer" }
    }
  ]
};
