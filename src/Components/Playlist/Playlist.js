import React from 'react';
import './Playlist.css';
import TrackList from '../TrackList/TrackList'
const Playlist = () => {
    return (
        <div className="playlist">
            <input type="text" defaultValue={"Default Playlist"}/>
            <TrackList />
            <button className="playlist-save">
                Save To Spotify
            </button>
        </div>
    );
}

export default Playlist;