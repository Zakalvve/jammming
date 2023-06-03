import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

function App() {
  return (
      <div className="app">
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <SearchBar/>
        <div className="app-playlist">
          <SearchResults/>
          <Playlist/>
        </div>
      </div>
  );
}

export default App;
