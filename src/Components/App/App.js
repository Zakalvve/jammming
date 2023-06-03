import './App.css';
import React, {useState, useCallback} from 'react';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import Spotify from '../../Utilities/Spotify';

function App() {
  const [ searchResults, setSearchResults ] = useState([]);
  const [ playlistName, setPlaylistName ] = useState('');
  const [ playlist, setPlaylist ] = useState([]);

  const handleSearch = useCallback((term) => {
    Spotify.search(term).then(setSearchResults);
  }, []);

  const handlePlaylistNameChanged = useCallback((name) => {
    setPlaylistName(name);
  }, []);

  const handleAddTrack = useCallback((track) => {
    if (playlist.some(savedTrack => savedTrack.id === track.id)) return;

    setPlaylist((previousTracks) => [...previousTracks, track]);
  }, [playlist]);

  const handleRemoveTrack = useCallback((track) => {
    setPlaylist((previousTracks) => {
      return previousTracks.filter(currentTrack => currentTrack.id != track.id);
    });
  }, []);

  const handleSavePlaylist = useCallback(() => {
    const uris = playlist.map(track => track.uri);
    Spotify.savePlaylist(playlistName, uris).then(() => {
      setPlaylistName('');
      setPlaylist([]);
    });
  },[playlistName, playlist]);

  return (
      <div className="app">
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <SearchBar
          onSearch={handleSearch}
        />
        <div className="app-playlist">
          <SearchResults 
            tracks={searchResults}
            onAdd={handleAddTrack}
          />
          <Playlist
            playlistName={playlistName}
            onNameChange={handlePlaylistNameChanged}
            tracks={playlist}
            onRemove={handleRemoveTrack}
            onSavePlaylist={handleSavePlaylist}
          />
        </div>
      </div>
  );
}

export default App;

//{id: 1, name:"A Song", artist: "An Artist", album: "An Album"},{id: 2, name:"A Song", artist: "An Artist", album: "An Album"}