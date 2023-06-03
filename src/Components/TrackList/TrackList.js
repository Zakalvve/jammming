import React from 'react';
import './TrackList.css';
import Track from '../Track/Track';

const TrackList = ({tracks, onAdd, onRemove, isRemoval}) => {
    return (
        <div className="track-list">
            {tracks.map(track => {
                return <Track
                            track={track}
                            onAdd={onAdd}
                            onRemove={onRemove}
                            isRemoval={isRemoval}
                        />
            })}
        </div>
    );
}

export default TrackList;

//{name:"A Song", artist: "An Artist", album: "An Album"}