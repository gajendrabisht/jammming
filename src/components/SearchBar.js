function SearchBar({searchTerm, onClick}) {
    return (
        <div>
            <p>
                <input type='text' value={searchTerm}/>
                <button onClick={onClick}>Search</button>
            </p>
        </div>
    );
}

export default SearchBar;