interface Props {
  id: string;
  label: string;
  value: string;
  required?: boolean;
  error?: string;
  loading?: boolean;
  onChange: (v: string) => void;
}

export function TextField({
  id,
  label,
  value,
  required,
  error,
  loading,
  onChange
}: Props) {
  return (
    <label className="block mb-4">
      <span className="block mb-1">{label}</span>
      <input
        id={id}
        value={value}
        required={required}
        onChange={e => onChange(e.target.value)}
        className="border p-2 w-full"
      />
      {loading && <p className="text-sm">Checking...</p>}
      {error && <p className="text-sm text-red-600">{error}</p>}
    </label>
  );
}
