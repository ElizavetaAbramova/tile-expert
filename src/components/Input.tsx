interface InputProps {
  type: string;
  name: string;
  label?: string;
  placeholder?: string;
}

export const Input = ({ type, name, label, placeholder }: InputProps) => {
  return (
    <div className="flex gap-1 items-end flex-1 min-w-0">
      <label className="uppercase font-heading text-sm" htmlFor={name}>
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        className="border-b-2 flex-1 min-w-0"
      />
    </div>
  );
};
