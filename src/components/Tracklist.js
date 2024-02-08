import Track from './Track';

function Tracklist({tracks}) {
    return (
        <div>
            <label style={{color: 'red'}}>Track List</label>
            <ul>
                {tracks.map((track) => (<Track track={track}/>))}
            </ul>
        </div>
    );
}

export default Tracklist;