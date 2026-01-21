import { useEffect, useState } from "react";
import { loadSavedValues, saveValues } from "./autosave";
import { FieldSchema } from "./schema";
import { validateField, ValidationErrors } from "./validator";

export function useFormState(fields: FieldSchema[]) {
  const [values, setValues] = useState<Record<string, string>>(
    () => loadSavedValues()
  );
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [loading, setLoading] = useState<Record<string, boolean>>({});

  async function setValue(id: string, value: string) {
    setValues(prev => ({ ...prev, [id]: value }));

    const field = fields.find(f => f.id === id);
    if (!field) return;

    setLoading(prev => ({ ...prev, [id]: true }));
    const error = await validateField(field, value);
    setLoading(prev => ({ ...prev, [id]: false }));

    setErrors(prev => ({
      ...prev,
      [id]: error ?? ""
    }));
  }

  useEffect(() => {
    saveValues(values);
  }, [values]);

  return { values, errors, loading, setValue };
}
