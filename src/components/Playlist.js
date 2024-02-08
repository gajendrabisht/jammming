import TrackList from './Tracklist';

function Playlist({playlists}) {
    return (
        <div>
            {
                playlists.map((playlist) => {
                    return (
                        <div>
                            <p style={{color: 'green'}}>Playlist: {playlist.name}</p>
                            <TrackList tracks={playlist.tracks}/>
                        </div>
                    )
                })
            }

        </div>
    );
}

export default Playlist;