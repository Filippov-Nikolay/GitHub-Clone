import React from 'react';
import './searchBar.css';

const SearchBar = ({ searchTerm, handleSearchChange }) => {
    return (
        <input
            type="text"
            className="search-bar_input"
            placeholder="Find a repository..."
            value={searchTerm}
            onChange={handleSearchChange}
        />
    );
};

export default SearchBar;
