import React from "react";

export default function Button({ label, color, bg, height }) {
  return (
    <button
      className={`outline-none rounded-lg text-${color} bg-${bg} p-4 sm:py-4 sm:px-10 sm:text-md font-semibold`}
      style={{ height }}
    >
      {label}
    </button>
  );
}
