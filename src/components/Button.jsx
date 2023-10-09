import React from "react";

export default function Button({ children, color }) {
  return (
    <button
      className={`pixelButton ${color}  relative mt-2 text-left p-[10px] uppercase text-2xl z-50 text-white `}
    >
      {children}
    </button>
  );
}
