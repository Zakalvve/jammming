import React from 'react';
import './SearchResults.css';
import TrackList from '../TrackList/TrackList'

const SearchResults = () => {
    return (
        <div className="search-results">
            <h3 className="title">Search Results</h3>
            <TrackList/>
        </div>
    );
}

export default SearchResults;