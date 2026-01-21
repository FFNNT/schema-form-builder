import { FieldSchema } from "./schema";

export type ValidationErrors = Record<string, string>;

export async function validateField(
  field: FieldSchema,
  value: string
): Promise<string | null> {
  // Required check (SYNC)
  if (field.required && !value.trim()) {
    return "This field is required";
  }

  // Async validation example (GitHub username)
  if (field.id === "github" && value) {
    const isAvailable = await fakeGithubCheck(value);
    if (!isAvailable) {
      return "GitHub username already taken";
    }
  }

  return null;
}

// Fake async API (simulates server check)
function fakeGithubCheck(username: string): Promise<boolean> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(username.toLowerCase() !== "admin");
    }, 800);
  });
}

