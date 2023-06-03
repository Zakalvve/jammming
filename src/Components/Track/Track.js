import React from 'react';
import './Track.css';
const Track = () => {
    return (
        <div className="track">
            <div className="track-information">
                <h3>Sample Track</h3>
                <p>
                    an Artist | an Album
                </p>
            </div>
            <button className="track-action">
                +
            </button>
        </div>
      );
}

export default Track;