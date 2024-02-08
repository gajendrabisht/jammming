import './App.css';
import React, {useState} from 'react';
import Tracklist from './components/Tracklist';
import Playlist from "./components/Playlist";
import SearchBar from "./components/SearchBar"

function App() {
    const tracks = [
        {
            id: 1,
            name: "Right above it",
            artist: "Lil Wayne",
            album: "Ballers"
        },
        {
            id: 2,
            name: "Bad Reputation",
            artist: "Taylor Swift",
            album: "Reputation"
        },
        {
            id: 3,
            name: "Stronger",
            artist: "Kayne West",
            album: "Graduation"
        }
    ];

    const playlistsInitial = [
        {
            name: "Workout",
            tracks: [tracks[0], tracks[2]]
        },
        {
            name: "Study",
            tracks: [tracks[1]]
        }
    ];

    const handleSearchClick = (trackName) => {
        setSearchResults(tracks.filter(t => t.name === trackName));
    };

    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [playlists, setPlaylists] = useState(playlistsInitial);

    return (
        <div className="App">
            <Tracklist tracks={tracks}/>
            <Playlist playlists={playlists}/>
            <SearchBar searchTerm={searchTerm} onClick={handleSearchClick}/>
            <button>Save To Spotify</button>
            <button>Search</button>
        </div>
    );
}

export default App;
