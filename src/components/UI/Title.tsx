import React from "react";

interface TitleProp {
  children: string;
  className?: string;
  props?: any;
}

const Title = ({ children, className, props }: TitleProp) => {
  return (
    <h1
      {...props}
      className={`md:text-[3.2rem] font-medium text-[2rem] ${className}`}
    >
      {children}
    </h1>
  );
};

export default Title;
