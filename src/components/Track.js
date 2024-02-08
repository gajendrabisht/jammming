function Track({track}) {
    return (
        <li>
            <p>Name: {track.name} | Artist: {track.artist} | Album: {track.album}</p>
        </li>
    );
}

export default Track;