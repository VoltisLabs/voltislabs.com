import React, { useState, useRef } from "react";

const EditableInput = ({ placeholder }: { placeholder: string }) => {
  const [text, setText] = useState("");
  const divRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative w-[477px] h-[65px]">
      {text === "" && (
        <span className="absolute px-4 py-4 text-white opacity-50 pointer-events-none font-[var(--font-comix-loud)]">
          {placeholder}
        </span>
      )}
      <div
        ref={divRef}
        contentEditable
        suppressContentEditableWarning
        onInput={(e) => setText(e.currentTarget.textContent || "")}
        className="w-full h-full px-4 py-4 text-[24px] border-4 border-white rounded-[10px] focus:outline-none editable-font"
      />
      <div className="text-[20px] mt-5 text-center text-white font-[var(--font-comix-loud)]">
        COMPLETE
      </div>
    </div>
  );
};

export default EditableInput;
