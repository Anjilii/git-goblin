// src/components/Search.jsx
import React from 'react';
import { FaSearch } from 'react-icons/fa'; 

const Search = () => {
    return (
        <div className="flex items-center bg-primary p-3 w-full max-w-md mx-auto">
            <input
                type="text"
                placeholder="Type here"
                className="w-full bg-white rounded-3xl mr-5 border-none px-6 py-3 focus:outline-none"
            />

            <button className="bg-primary text-white rounded-3xl p-4 hover:bg-second active:bg-primary transition duration-150 ease-in-out">
                <FaSearch />
            </button>
        </div>
    );
}

export default Search;
