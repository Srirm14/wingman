"use client";

import { useFilterStore } from "@stores/FilterStore.ts";
import React, { useState } from "react";

interface FilterOption {
  label: string;
  value: string;
}

const Filter: React.FC = () => {
  const options: FilterOption[] = [
    { label: "Today", value: "today" },
    { label: "7 Days", value: "7days" },
    { label: "30 Days", value: "30days" },
  ];

  // Use the filter store
  const { selectedOption, setSelectedOption, toggleOption } = useFilterStore();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const handleOptionSelect = (value: string) => {
    setSelectedOption(value);
    setIsDropdownOpen(false); // Close the dropdown after selecting
  };

  return (
    <div className="relative w-fit">
      {/* Dropdown Toggle Button */}
      <button
        className="bg-white border border-[#DCDFE4] rounded-[8px] h-[36px] w-fit flex items-center justify-between px-3 text-sm hover:shadow focus:outline-none"
        onClick={handleDropdownToggle}
      >
        {selectedOption
          ? options.find((option) => option.value === selectedOption)?.label
          : "7 Days"}
        <span className="ml-2 text-gray-500">&#9662;</span>
      </button>

      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <div className="absolute z-10 bg-white border border-[#DCDFE4] rounded-[8px] mt-2 w-full shadow-md">
          {options.map((option) => (
            <button
              key={option.value}
              className={`w-full text-left px-3 py-2 text-sm hover:bg-gray-100 ${
                selectedOption === option.value ? "bg-gray-200" : "bg-white"
              }`}
              onClick={() => handleOptionSelect(option.value)}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Filter;
