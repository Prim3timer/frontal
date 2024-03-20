let SearchItem = ({search, setSearch})=> {
    return (
        <form className="searchForm" onSubmit={(e)=> e.preventDefault()}>
            <input
            id="search"
            type="text"
            role="searchbox" 
            placeholder="Search Logs"
            value={search}
            onChange={(e)=> setSearch(e.target.value)}
            
            />
            
        </form>
    )
}

export default SearchItem