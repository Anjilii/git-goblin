// src/components/Filters.jsx
import React, { useState } from 'react';
import Dropdown from './dropdown'; 

const filters = [
  { id: 'stars', title: 'Stars', options: ['1 star', '2 stars', '3 stars', '4 stars', '5 stars', '10 stars', '50 stars'] },
  { id: 'forks', title: 'Forks', options: ['0 forks', '10 forks', '50 forks', '100 forks', '500 forks', '1000 forks'] },
  { id: 'language', title: 'Language', options: ['JavaScript', 'Python', 'Java', 'C++', 'Ruby', 'Go', 'TypeScript', 'PHP'] },
  { id: 'date', title: 'Date', options: [] }, 
  { id: 'license', title: 'License', options: ['MIT', 'GPL', 'Apache', 'BSD', 'Creative Commons', 'Unlicense', 'Mozilla Public License', 'Eclipse Public License'] },
];

const Filters = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedFilters, setSelectedFilters] = useState({
    stars: null,
    forks: null,
    language: null,
    date: null,
    license: null
  });

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
    setSelectedFilters(prev => ({ ...prev, date: event.target.value }));
  };

  const handleFilterChange = (filterId, value) => {
    setSelectedFilters(prev => ({ ...prev, [filterId]: value }));
  };

  const handleClearAll = () => {
    setSelectedDate('');
    setSelectedFilters({
      stars: null,
      forks: null,
      language: null,
      date: null,
      license: null
    });
  };

  return (
    <div className="bg-primary p-6">
      <div className="container mx-auto">
        <div className="flex justify-around flex-wrap">
          {filters.map(filter => (
            <div key={filter.id} className="filter-item flex flex-col items-center mb-6 relative">
              <h3 className="text-lg font-semibold mb-2 text-white">{filter.title}</h3>

              {filter.id === 'date' ? (
                <input
                  type="date"
                  value={selectedDate}
                  onChange={handleDateChange}
                  className="bg-white border border-gray-300 rounded-md px-4 py-2 w-full max-w-xs"
                />
              ) : (
                <Dropdown
                  filterId={filter.id}
                  selectedFilter={selectedFilters[filter.id]}
                  options={filter.options}
                  onOptionSelect={(option) => handleFilterChange(filter.id, option)}
                />
              )}
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <button
            onClick={handleClearAll}
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none"
          >
            Clear All
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filters;
