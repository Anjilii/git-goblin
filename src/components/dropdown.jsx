import React from 'react';

const Dropdown = ({ filterId, selectedFilter, options, onOptionSelect }) => {
  return (
    <details className="dropdown">
      <summary className="btn bg-gray-700 text-white px-12 py-2 hover:bg-blue-600">
        {selectedFilter || 'Select'}
      </summary>
      <ul className="menu dropdown-content bg-white border border-gray-300 rounded-md shadow-lg p-1 mt-1">
        {options.map((option, index) => (
          <li key={index}>
            <button
              onClick={() => onOptionSelect(option)}
              className="block px-8 py-2 text-gray-700 hover:bg-gray-100 w-full text-left"
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
    </details>
  );
};

export default Dropdown;
