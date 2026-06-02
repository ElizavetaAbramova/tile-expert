interface RadioInputProps {
  value: string;
  name: string;
  label?: string;
  onSelect?: () => void;
  checked?: boolean;
}

export const RadioInput = ({
  value,
  name,
  label,
  onSelect,
  checked,
}: RadioInputProps) => {
  const id = `${name}-${value}`;
  return (
    <div className="flex gap-1" onClick={onSelect}>
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        id={id}
        onChange={onSelect}
      />
      <label htmlFor={name} id={id}>
        {label}
      </label>
    </div>
  );
};
