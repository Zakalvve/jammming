import React from 'react';
import './SearchResults.css';
import TrackList from '../TrackList/TrackList'

const SearchResults = ({tracks, onAdd}) => {

    return (
        <div className="search-results">
            <h3 className="title">Search Results</h3>
            <TrackList 
                tracks={tracks} 
                isRemoval={false}
                onAdd={onAdd}
            />
        </div>
    );
}

export default SearchResults;