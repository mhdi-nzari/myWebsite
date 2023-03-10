import React from "react";

const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
    <div
      className={`flex flex-col gap-y-1  ${
        isDanger ? "text-red-500" : ""
      }}`}
    >
      <p className="font-bold text-4xl text-headingColor">{value}</p>
      <p className="font-semibold text-2xl text-disableUnique">{type}</p>
    </div>
  );
};

export default DateTimeDisplay;
