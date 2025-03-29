import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input(props: InputProps) {
  return (
    <input
      className="border border-gray-300 rounded-lg px-3 py-2"
      {...props}
    />
  );
}
