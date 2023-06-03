import React, {useCallback, useState} from 'react';
import './SearchBar.css';
const SearchBar = ({onSearch}) => {
    const [searchTerm, setSearchTerm] = useState('');
    const handleChange = ({target}) => {
        setSearchTerm(target.value);
    };
    const handleSearch = useCallback((e) => {
        onSearch(searchTerm)
    },[searchTerm]);
    const renderPlaylistnNameInput = (input) => {
        return input.length > 0 ?
            <input 
                type="text" 
                onChange={handleChange}
                value={input}
            /> :
            <input 
                type="text" 
                onChange={handleChange}
                placeholder={'Enter A Song Title'}
            />
    }

    return (
        <div className="search-bar">
            {renderPlaylistnNameInput(searchTerm)}
            <button className="search-button" onClick={handleSearch}>Search</button>
        </div>
    );
}

export default SearchBar;