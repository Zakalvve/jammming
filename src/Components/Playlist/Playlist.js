import React, { useCallback } from 'react';
import './Playlist.css';
import TrackList from '../TrackList/TrackList'
const Playlist = ({playlistName, onNameChange, tracks, onRemove, onSavePlaylist}) => {
    
    const handleNameChange = useCallback(({target}) => {
        onNameChange(target.value);
    }, [onNameChange]);

    const renderPlaylistnNameInput = (input) => {
        return input.length > 0 ?
            <input 
                type="text" 
                onChange={handleNameChange}
                value={playlistName}
            /> :
            <input 
                type="text" 
                onChange={handleNameChange}
                placeholder={'New Playlist'}
            />
    }
    return (
        <div className="playlist">
            {renderPlaylistnNameInput(playlistName)}
            <TrackList 
                tracks={tracks}
                onRemove={onRemove}
                isRemoval={true}
            />
            <button className="playlist-save" onClick={onSavePlaylist}>
                Save To Spotify
            </button>
        </div>
    );
}

export default Playlist;