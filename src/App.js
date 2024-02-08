import './App.css';
import React, {useState} from 'react';
import Tracklist from './components/Tracklist';
import Playlist from "./components/Playlist";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import NewPlaylist from "./components/NewPlaylist";

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

    const handleSearchTermChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchClick = () => {
        setSearchResults(tracks.filter(t => t.name === searchTerm));
    };

    const handleAddTrack = (trackId) => {
        if (!selectedTracks.find(t => t.id === trackId)) {
            setSelectedTracks([tracks.find(t => t.id === trackId), ...selectedTracks]);
        }
    };

    const handleNewPlaylistName = (event) => {
        setNewPlaylistName(event.target.value);
    }

    const handleCreateNewPlaylist = () => {
        if (newPlaylistName == "" || selectedTracks.length == 0) {
            alert("Name can't be empty OR tracks can't be empty");
        } else if (playlists.find(p => p.name === newPlaylistName)) {
            alert(`Playlist by name "${newPlaylistName}" alredy exists.. choose another name`);
        } else {
            let newPlaylist = {name: newPlaylistName, tracks: selectedTracks};
            setPlaylists([...playlists, newPlaylist]);
            setSearchTerm("");
            setSearchResults([]);
            setNewPlaylistName("");
            setSelectedTracks([]);
        }
    }

    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [playlists, setPlaylists] = useState(playlistsInitial);
    const [selectedTracks, setSelectedTracks] = useState([]);
    const [newPlaylistName, setNewPlaylistName] = useState("");

    return (
        <div className="App">
            <Tracklist tracks={tracks}/>
            <Playlist playlists={playlists}/>
            <SearchBar searchTerm={searchTerm} onChange={handleSearchTermChange} onClick={handleSearchClick}/>
            <SearchResults tracks={searchResults} handleAddTrack={handleAddTrack}/>
            <NewPlaylist tracks={selectedTracks} newPlaylistName={newPlaylistName}
                         handleNewPlaylistName={handleNewPlaylistName}
                         handleCreateNewPlaylist={handleCreateNewPlaylist}/>
        </div>
    );
}

export default App;
