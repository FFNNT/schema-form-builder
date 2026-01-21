import { FormSchema } from "../form-engine/schema";
import { evaluateCondition } from "../form-engine/conditions";
import { useFormState } from "../form-engine/useFormState";
import { TextField } from "./fields/TextField";
import { SelectField } from "./fields/SelectField";

interface Props {
  schema: FormSchema;
}

export function FormRenderer({ schema }: Props) {
  const { values, errors, loading, setValue } = useFormState(schema.fields);

  return (
    <form noValidate>
      {schema.fields.map(field => {
        if (!evaluateCondition(field.condition, values)) return null;

        const commonProps = {
          key: field.id,
          id: field.id,
          label: field.label,
          value: values[field.id] ?? "",
          error: errors[field.id],
          loading: loading[field.id],
          onChange: (v: string) => setValue(field.id, v)
        };

        if (field.type === "text") {
          return <TextField {...commonProps} required={field.required} />;
        }

        if (field.type === "select") {
          return (
            <SelectField
              {...commonProps}
              options={field.options}
            />
          );
        }

        return null;
      })}
    </form>
  );
}
