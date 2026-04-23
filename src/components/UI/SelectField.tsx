import React, { useState, useRef, useEffect } from 'react';

interface SelectFieldProps {
  label: string;
  id: string;
  options: string[];
  value: string;
  onChange: (e: { target: { name: string; value: string } }) => void;
  name: string;
  placeholder?: string;
  containerClassName?: string;
  labelClassName?: string;
  surface?: "dark" | "light";
}

const SelectField: React.FC<SelectFieldProps> = ({
  label,
  id,
  options,
  value,
  onChange,
  name,
  placeholder = "Select an option",
  containerClassName = "",
  labelClassName = "",
  surface = "dark",
}) => {
  const light = surface === "light";
  const [open, setOpen] = useState(false);
  const [highlighted, setHighlighted] = useState<number>(-1);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    if (open) document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [open]);

  // Keyboard navigation
  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        setHighlighted((h) => (h < options.length - 1 ? h + 1 : 0));
        e.preventDefault();
      } else if (e.key === 'ArrowUp') {
        setHighlighted((h) => (h > 0 ? h - 1 : options.length - 1));
        e.preventDefault();
      } else if (e.key === 'Enter' && highlighted >= 0) {
        onChange({ target: { name, value: options[highlighted] } });
        setOpen(false);
        setHighlighted(-1);
        e.preventDefault();
      } else if (e.key === 'Escape') {
        setOpen(false);
        setHighlighted(-1);
        e.preventDefault();
      }
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [open, highlighted, options, onChange, name]);

  const handleSelect = (option: string) => {
    onChange({ target: { name, value: option } });
    setOpen(false);
    setHighlighted(-1);
  };

  const btnClass = light
    ? "flex w-full justify-between rounded-lg border border-vl-brown/25 bg-white py-3 px-4 text-vl-ink transition focus:outline-none focus:ring-2 focus:ring-vl-brown/25"
    : "flex w-full justify-between rounded-lg border border-gray-700 bg-[#0D1117] py-3 px-4 text-white transition focus:outline-none focus:ring-2 focus:ring-[#90BEFF]";

  const listClass = light
    ? "absolute left-0 top-full z-50 mt-2 max-h-60 w-full overflow-y-auto rounded-xl border border-vl-brown/20 bg-vl-cream-deep py-2 shadow-lg"
    : "absolute left-0 top-full z-50 mt-2 max-h-60 w-full overflow-y-auto rounded-xl border border-[#374151] bg-[#374151] py-2 shadow-lg";

  const itemClass = (idx: number, option: string) => {
    const selected = value === option;
    const hi = highlighted === idx;
    if (light) {
      return `cursor-pointer select-none px-4 py-4 text-base text-vl-ink transition ${selected || hi ? "bg-vl-cream-muted/90" : ""} ${idx !== options.length - 1 ? "border-b border-vl-brown/15" : ""}`;
    }
    return `cursor-pointer select-none px-4 py-4 text-base text-white transition ${selected || hi ? "bg-[#2D3748]" : ""} ${idx !== options.length - 1 ? "border-b border-[#2D3748]" : ""}`;
  };

  return (
    <div className={`mb-4 ${containerClassName}`}>
      <label
        htmlFor={id}
        className={`mb-2 block text-sm font-medium ${light ? "text-vl-ink" : "text-white"} ${labelClassName}`}
      >
        {label}
      </label>
      <div ref={dropdownRef} className="relative ">
        <button
          type="button"
          id={id}
          aria-haspopup="listbox"
          aria-expanded={open}
          className={btnClass}
          onClick={() => setOpen((o) => !o)}
        >
          <span className={value ? "" : light ? "text-vl-ink-muted" : "text-gray-400"}>
            {value || placeholder}
          </span>
          <svg
            className={`ml-2 h-5 w-5 transition-transform ${light ? "text-vl-ink-muted" : "text-gray-300"} ${open ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {open && (
          <ul tabIndex={-1} role="listbox" aria-labelledby={id} className={listClass}>
            {options.map((option, idx) => (
              <li
                key={option}
                role="option"
                aria-selected={value === option}
                className={itemClass(idx, option)}
                onClick={() => handleSelect(option)}
                onMouseEnter={() => setHighlighted(idx)}
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SelectField; 