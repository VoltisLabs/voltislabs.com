import React from 'react';

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  htmlFor: string;
  className?: string;
  children: React.ReactNode;
}

const Label: React.FC<LabelProps> = ({ htmlFor, className = '', children, ...props }) => (
  <label
    htmlFor={htmlFor}
    className={`block text-sm font-medium mb-2 text-white ${className}`}
    {...props}
  >
    {children}
  </label>
);

export default Label; 