import React from 'react';

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  type?: string;
  containerClassName?: string;
  labelClassName?: string;
  /** `light`: labels and fields for cream site backgrounds */
  surface?: "dark" | "light";
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  id,
  type = "text",
  containerClassName = "",
  labelClassName = "",
  surface = "dark",
  ...props
}) => {
  const light = surface === "light";
  return (
    <div className={`mb-4 ${containerClassName}`}>
      <label
        htmlFor={id}
        className={`block text-sm font-medium mb-2 ${light ? "text-vl-ink" : "text-white"} ${labelClassName}`}
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        className={
          light
            ? "w-full rounded-lg border border-vl-brown/25 bg-white py-3 px-4 text-vl-ink transition focus:border-vl-brown/40 focus:outline-none focus:ring-2 focus:ring-vl-brown/25"
            : "w-full rounded-lg border border-gray-700 bg-[#0D1117] py-3 px-4 text-white transition focus:outline-none focus:ring-2 focus:ring-[#90BEFF]"
        }
        {...props}
      />
    </div>
  );
};

export default InputField; 