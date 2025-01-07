import React, { useState } from "react";

export const CollapsibleSection = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="mb-6">
      <button
        className="flex justify-between items-center w-full text-left text-lg font-semibold mb-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <span>{isOpen ? "-" : "+"}</span>
      </button>
      {isOpen && <div>{children}</div>}
    </div>
  );
};
