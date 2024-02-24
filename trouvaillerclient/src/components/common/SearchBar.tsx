

const SearchBar = () => {
    return(
        <div className="bg-[#174978]   px-4 sm:px-8 md:px-16 2xl:px-28 py-4">
           <div className="flex gap-12 items-center"> 
            <div className="w-[60%] lg:w-[20%]">
                <input type="text" className="bg-[#0000003D] w-full outline-none text-white rounded px-4 py-2" placeholder="Search Places" />
            </div>
            <div className="w-[20%] hidden lg:block">
                <input type="text" className="bg-[#0000003D] w-full outline-none text-white rounded px-4 py-2" placeholder="Category" />
            </div>
            <div>
                <input type="submit" className="bg-[#05CAA6] font-semibold outline-none text-white rounded-full px-8 lg:px-12 py-1 lg:py-2 cursor-pointer"  value="Search" />
            </div>
           </div>
        </div>
    )
}

export default SearchBar