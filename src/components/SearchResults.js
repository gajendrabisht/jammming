function SearchResults({tracks, handleAddTrack}) {
    return (
        <div>
            <p style={{color: "blue"}}>Search Results:</p>
            <ul>
                {
                    tracks.map( track => (
                        <li>
                            <p>{track.name} | {track.artist} | {track.album}</p>
                            <button onClick={handleAddTrack(track.id)}>Add Song To New Playlist</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default SearchResults;