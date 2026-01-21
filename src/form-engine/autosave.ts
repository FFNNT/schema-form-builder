const STORAGE_KEY = "form-autosave";

export function loadSavedValues(): Record<string, string> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function saveValues(values: Record<string, string>) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(values));
}

