import React from 'react';
import './SearchBar.css';
const SearchBar = () => {
    return (
        <div className="search-bar">
            <input type="text" placeholder="Enter A Song Title"></input>
            <button className="search-button">Search</button>
        </div>
    );
}

export default SearchBar;