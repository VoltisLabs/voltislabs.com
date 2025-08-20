import React from 'react';

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  type?: string;
  containerClassName?: string;
  labelClassName?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  id,
  type = 'text',
  containerClassName = '',
  labelClassName = '',
  ...props
}) => (
  <div className={`mb-4 ${containerClassName}`}>
    <label htmlFor={id} className={`block text-sm font-medium mb-2 text-white ${labelClassName}`}>
      {label}
    </label>
    <input
      id={id}
      type={type}
      className="w-full bg-[#0D1117] text-white border border-gray-700 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#90BEFF] transition"
      {...props}
    />
  </div>
);

export default InputField; 