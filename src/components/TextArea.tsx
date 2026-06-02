interface TextAreaProps {
  name: string;
  rows: number;
  cols: number;
  label?: string;
  placeholder?: string;
}

export const TextArea = ({
  name,
  rows,
  cols,
  label,
  placeholder,
}: TextAreaProps) => {
  return (
    <div className="flex gap-1 items-start flex-1 min-w-0">
      <label className="uppercase font-heading text-sm" htmlFor={name}>
        {label}
      </label>
      <textarea
        rows={rows}
        cols={cols}
        placeholder={placeholder}
        name={name}
        className="border-2 rounded-sm flex-1 min-w-0"
      />
    </div>
  );
};
