import { type ReactNode, useState } from "react";

interface DropdownProps<T> {
  options: T[];
  value?: T | null;
  onChange?: (selected: T) => void;
  renderOption: (item: T) => ReactNode;
  getKey: (item: T) => string | number;
  placeholder?: string;
}
export const Dropdown = <T,>({
  options,
  value = null,
  onChange,
  renderOption,
  getKey,
  placeholder = "Select option",
}: DropdownProps<T>) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<T | null>(value);

  const handleSelect = (item: T) => {
    setSelected(item);
    setIsOpen(false);
    onChange?.(item);
  };

  return (
    <div className="relative w-56 max-w-[150px] mt-2">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex w-full items-center justify-between rounded-sm border p-2 bg-parchment-200 gap-1 text-sm"
      >
        <span>{isOpen ? "⨉" : "✚"}</span>
        {selected ? renderOption(selected) : placeholder}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 z-10 mt-1 w-full rounded-md border bg-parchment-50 shadow overflow-y-scroll max-h-[150px] scrollbar">
          {options.map((item) => (
            <button
              key={getKey(item)}
              type="button"
              onClick={() => handleSelect(item)}
              className="block w-full p-2 text-left md:hover:bg-ochre-100"
            >
              {renderOption(item)}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
