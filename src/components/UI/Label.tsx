import React from 'react';

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  htmlFor: string;
  className?: string;
  children: React.ReactNode;
  surface?: "dark" | "light";
}

const Label: React.FC<LabelProps> = ({
  htmlFor,
  className = "",
  children,
  surface = "dark",
  ...props
}) => (
  <label
    htmlFor={htmlFor}
    className={`block text-sm font-medium mb-2 ${surface === "light" ? "text-vl-ink" : "text-white"} ${className}`}
    {...props}
  >
    {children}
  </label>
);

export default Label; 