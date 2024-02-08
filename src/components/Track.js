function Track({track}) {
    return (
        <li>
            <p>Name: {track.name}</p>
            <p>Artist: {track.artist}</p>
            <p>Album: {track.album}</p>
        </li>
    );
}

export default Track;