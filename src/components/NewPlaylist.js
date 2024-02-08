function NewPlaylist({tracks, newPlaylistName}) {
    return (
        <div>
            <label style={{color: "teal"}}>New Playlist Name: </label>
            <input type="text" value={newPlaylistName}></input>
            <ul>
                {
                    tracks.map(track => (
                        <li>
                            <p>{track.name} | {track.artist} | {track.album}</p>
                            {/*<button onClick={addTrack(track.id)}/>*/}
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default NewPlaylist;