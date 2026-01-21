interface Props {
  id: string;
  label: string;
  value: string;
  options: { label: string; value: string }[];
  error?: string;
  onChange: (v: string) => void;
}

export function SelectField({
  id,
  label,
  value,
  options,
  error,
  onChange
}: Props) {
  return (
    <label className="block mb-4">
      <span className="block mb-1">{label}</span>
      <select
        id={id}
        value={value}
        onChange={e => onChange(e.target.value)}
        className="border p-2 w-full"
      >
        <option value="">Select</option>
        {options.map(o => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
      {error && <p className="text-sm text-red-600">{error}</p>}
    </label>
  );
}
