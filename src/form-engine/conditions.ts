import { Condition } from "./schema";

export function evaluateCondition(
  condition: Condition | undefined,
  values: Record<string, string>
) {
  if (!condition) return true;
  return values[condition.fieldId] === condition.equals;
}
