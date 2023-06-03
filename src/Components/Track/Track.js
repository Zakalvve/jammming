import React, { useCallback } from 'react';
import './Track.css';
const Track = ({track, onAdd, onRemove, isRemoval}) => {
    const handleAdd = useCallback(({target}) => {
        onAdd(track)
    },[track, onAdd]);

    const handleRemove = useCallback(({target}) => {
        onRemove(track);
    },[track, onRemove]);

    return (
        <div className="track">
            <div className="track-information">
                <h3>{track.name}</h3>
                <p>
                    {track.artist} | {track.album}
                </p>
            </div>
            
            {isRemoval ? 
            <button className="track-action" onClick={handleRemove}>
                -
            </button> : 
            <button className="track-action" onClick={handleAdd}>
                +
            </button>}  
        </div>
      );
}

export default Track;