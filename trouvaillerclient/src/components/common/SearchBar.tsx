"use client"

import { useEffect, useRef, useState, ChangeEvent } from "react"
import Link from "next/link"
import axiosInstance from "../../../axiosInstance"
import useDebounce from "@/hooks/useDebounce"
import { category } from "@/app/types/types"


const SearchBar = () => {
    const [search, setSearch] = useState<string | null>(null)
    const menuRef = useRef<HTMLDivElement>(null);
    const [category, setCategory] = useState<category>(null)
    const [showCategory, setShowCategory] = useState<boolean>(false)

    const [showLocations, setShowLocations] = useState(false)
    const [locations, setLocations] = useState<Location[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const debouncedSearch = useDebounce(search, 500)
    const locationRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        async function fetchData() {
            setLoading(true)
            const data = await axiosInstance.get(`/packagelocations?location=${debouncedSearch}`)
                .then(res => {setLocations(res.data)
                    setLoading(false)})
                .catch(err=> {console.log(err)
                    setLoading(false)})

            
        }
        if (debouncedSearch) fetchData()

    },[debouncedSearch])

    const handleSetSearch = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.value === '') {
            setLocations([])
            setShowLocations(false);
          } else {
            setShowLocations(true);
          }
        setSearch(e.target.value);
      };
      

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
          if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
            // Click occurred outside the menu, hide the menu
            setShowCategory(false);
          }
          if (locationRef.current && !locationRef.current.contains(event.target as Node)) {
            // Click occurred outside the menu, hide the menu
            setShowLocations(false);
           
           
          }
        };
    
        document.addEventListener('mousedown', handleOutsideClick);
    
        return () => {
          document.removeEventListener('mousedown', handleOutsideClick);
        };
      }, []);
    
    return(
        <div className=" bg-[#011d45]  px-4 sm:px-8 md:px-16 lg:px-40 py-4 ">
           <div className="flex gap-12 items-center"> 
            <div className="w-[60%] lg:w-[20%] relative">
                <input type="text"  onChange={(e: ChangeEvent<HTMLInputElement>) => handleSetSearch(e)} onClick={(e)=>setShowLocations(true)} className="bg-[#ffffff2b] w-full outline-none text-white roboto-regular text-[13px] rounded px-4 py-2" placeholder="Search Places" />
                <div className="absolute top-[110%] z-[100000] left-0 max-h-[200px] overflow-y-auto bg-[white] shadow-xl rounded-lg">
                        {showLocations && locations.length >0 && <div ref={locationRef} className="relative top-0 mx-2   my-2 z-[1000000]   rounded ">
                        
                        
                        <ul className="flex flex-col ">
                        
                        {locations.map((item : any,index)=> (
                            <Link href={`/explore/${item.location}`} key={index}>
                            <li key={index} className="px-4 py-1 cursor-pointer rounded hover:bg-[#e5e5e5] w-[100%]">
                                <div className="flex items-center gap-4 text-sm W-[100%] my-2">
                                    <img src={item.img} alt="" className="w-[25%]"/>
                                <span>
                                {item.location.charAt(0).toUpperCase()+ item.location.slice(1)}
                                    </span>

                                </div>
                                
                                
                                </li>
                            
                            </Link>
                        ))}
                    
                    </ul>
    
                        </div>}

                        </div>  
            </div>
            <div className="w-[20%] hidden lg:block">
                <input type="text" className="bg-[#ffffff2b] w-full outline-none text-white roboto-regular text-[13px] rounded px-4 py-2" placeholder="Category" />
            </div>
            <div>
                <input type="submit" className="bg-[#1a9c65] roboto-regular text-sm outline-none text-white rounded-full px-8 lg:px-12 py-1 lg:py-2 cursor-pointer"  value="Search" />
            </div>
           </div>
        </div>
    )
}

export default SearchBar