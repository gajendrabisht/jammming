function SearchBar({searchTerm, onChange, onClick}) {
    return (
        <div>
            <p>
                <input type="text" value={searchTerm} onChange={onChange}/>
                <button onClick={onClick}>Search</button>
            </p>
        </div>
    );
}

export default SearchBar;