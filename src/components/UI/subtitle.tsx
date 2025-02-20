import React from "react";

interface TitleProp {
  children: string;
  className?: string;
  props?: any;
}

const Subtitle = ({ children, className, props }: TitleProp) => {
  return (
    <h1 {...props} className={`md:text-lg text-base ${className}`}>
      {children}
    </h1>
  );
};

export default Subtitle;
