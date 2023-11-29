const Search = ({ search, setSearch }) => {

    return (

        <div className="search">

            <h2>Pesquisar:</h2>

            <input className="input_search"
            type="text" 
            value={search} 
            placeholder="Digite para pesquisar..." 
            onChange={(e) => setSearch(e.target.value)} />

        </div>
    )
}

export default Search