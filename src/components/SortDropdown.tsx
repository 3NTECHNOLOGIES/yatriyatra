"use client";

import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const SortDropdown = () => {
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState("Most Recent");

  // Function to handle sort selection
  const handleSortSelect = (sort: string) => {
    setSelectedSort(sort);
    setIsSortOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsSortOpen(!isSortOpen)}
        className="flex items-center justify-between w-48 px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-primary transition-all duration-300"
        aria-haspopup="listbox"
        aria-expanded={isSortOpen}
        aria-label="Sort options"
      >
        <span>Sort: {selectedSort}</span>
        {isSortOpen ? (
          <FaChevronUp className="ml-2 h-4 w-4 text-gray-500" />
        ) : (
          <FaChevronDown className="ml-2 h-4 w-4 text-gray-500" />
        )}
      </button>

      {isSortOpen && (
        <div className="absolute right-0 mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-20 overflow-hidden">
          <ul role="listbox" className="py-1 max-h-60 overflow-auto">
            {["Most Recent", "Oldest", "Most Popular"].map((option) => (
              <li
                key={option}
                role="option"
                aria-selected={selectedSort === option}
                onClick={() => handleSortSelect(option)}
                className={`px-4 py-2 cursor-pointer hover:bg-blue-50 text-sm ${
                  selectedSort === option
                    ? "bg-blue-500 text-white font-medium"
                    : "text-gray-700 hover:text-primary"
                }`}
              >
                Sort: {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SortDropdown;
