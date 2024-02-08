function NewPlaylist({tracks, newPlaylistName, handleNewPlaylistName, handleCreateNewPlaylist}) {
    return (
        <div>
            <label style={{color: "teal"}}>New Playlist Name: </label>
            <input type="text" value={newPlaylistName} onChange={handleNewPlaylistName}></input>
            <ul>
                {
                    tracks.map(track => (
                        <li>
                            <p>{track.name} | {track.artist} | {track.album}</p>
                        </li>
                    ))
                }
            </ul>
            <button onClick={handleCreateNewPlaylist}>Create New Playlist</button>
        </div>
    );
}

export default NewPlaylist;