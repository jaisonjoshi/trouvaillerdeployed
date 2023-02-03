



const SearchBar = () => {
    return(
        <div className="bg-[#008c60] flex items-center gap-12 justify-start mx-40 py-4">
                <div>
                    <h1 className="text-lg">Search for homestays<br />in your favourite locations</h1>
                </div>
                <div>
                    <input type="text" className="text border border-[2px] border-[#00c676] rounded text-[grey] w-[300px]" />
                </div>
                <div>
                    <button className="rounded-full text-lg bg-evergreen px-4 py-1">Search</button>
                </div>




        </div>
    )
}


export default SearchBar