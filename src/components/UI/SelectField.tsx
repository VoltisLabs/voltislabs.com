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
}

const SelectField: React.FC<SelectFieldProps> = ({
  label,
  id,
  options,
  value,
  onChange,
  name,
  placeholder = 'Select an option',
  containerClassName = '',
  labelClassName = '',
}) => {
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

  return (
    <div className={`mb-4 ${containerClassName}`}> 
      <label htmlFor={id} className={`block text-sm font-medium mb-2 text-white ${labelClassName}`}>{label}</label>
      <div ref={dropdownRef} className="relative ">
        <button
          type="button"
          id={id}
          aria-haspopup="listbox"
          aria-expanded={open}
          className="w-full bg-[#0D1117] flex justify-between text-white border border-gray-700 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#90BEFF] transition"
          onClick={() => setOpen((o) => !o)}
        >
          <span className={value ? '' : 'text-gray-400'}>
            {value || placeholder}
          </span>
          <svg className={`ml-2 h-5 w-5 text-gray-300 transition-transform ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
        </button>
        {open && (
          <ul
            tabIndex={-1}
            role="listbox"
            aria-labelledby={id}
            className="absolute z-20 mt-2 w-full bg-[#374151] rounded-xl shadow-lg border border-[#374151] py-2"
          >
            {options.map((option, idx) => (
              <li
                key={option}
                role="option"
                aria-selected={value === option}
                className={`px-4 py-4 text-white text-base cursor-pointer select-none transition
                  ${value === option ? 'bg-[#2D3748]' : ''}
                  ${highlighted === idx ? 'bg-[#2D3748]' : ''}
                  ${idx !== options.length - 1 ? 'border-b border-[#2D3748]' : ''}
                `}
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