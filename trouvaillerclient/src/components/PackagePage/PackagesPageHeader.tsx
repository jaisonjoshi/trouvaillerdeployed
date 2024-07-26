"use client"

import { ChangeEvent, useEffect, useRef, useState } from "react";
import { Navbar } from "../Navbar";

import useDebounce from "@/hooks/useDebounce";
import axiosInstance from "../../../axiosInstance";
import { Location, category } from "@/app/types/types";
import Link from "next/link"

export const PackagesPageHeader: React.FC<{}> = ({ }) => {
    const menuRef = useRef<HTMLDivElement>(null);
    const locationRef = useRef<HTMLDivElement>(null);


    const [search, setSearch] = useState<string | null>(null)
    const [category, setCategory] = useState<category>(null)
    const [showLocations, setShowLocations] = useState(false)
    const [locations, setLocations] = useState<Location[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [showCategory, setShowCategory] = useState<boolean>(false)
    const debouncedSearch = useDebounce(search, 500)
    const selectCategory = (cat: category) => {
        setCategory(cat);
        setShowCategory(false)
    }
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
    return (
        <div className="relative pb-16">

               
                        <div className=" h-full absolute top-0 bottom-0 left-0 right-0 ">
                            <img src="/images/packagesbg.png " className="w-full h-full object-cover" />
                        </div>
                   

            <div className="absolute  w-full z-[1000] py-4 sm:py-8">
                <Navbar />
            </div>
            <div className=" relative xs:text-center z-[20] pt-32 xs:pt-40 lg:pt-48 xl:pt-56 pb-8 xs:pb-20 px-4 sm:px-20 xl:px-60 text-white">
                <div className="flex flex-col xs:items-center">
                    <div className="   "> <h1 className="font-bold text-[18px] xs:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[28px] ">  Let Us Make Your Travel Experience<br></br>
                    <span className="font-extrabold caveat text-[40px]  xs:text-[34px] sm:ext-[36px] md:text-[40px] lg:text-[50px] xl:text-[48px] ">Truly  <span className="text-[#ffffff]"> Memorable!</span></span></h1></div>
                    <p className="text-sm leading-[22px] mt-8 xs:leading-normal roboto-medium xs:text-base md:text-base  xl:w-[80%]  my-2 xs:my-8 xl:my-8   text-[#e4e4e4]">Explore our diverse range of meticulously curated travel packages designed to cater to every wanderlust, ensuring an unforgettable journey for every traveler.</p>
                </div>



            </div>
            <div className="bg-[transparent] hidden  lg:flex justify-between items-center h-[40px] xl:h-[60px] gap-[2%] relative z-10 mx-12 xl:mx-40 2xl:mx-80    ">
                <div className="w-[60%] mx-auto flex items-center bg-[white] px-4 h-full justify-between rounded">
                <div className="flex gap-4 items-center  relative w-full">
                    <img src="/images/icons/loc.svg" alt="" className="w-6" />
                    <input type="text" placeholder="Search Destination" onChange={(e: ChangeEvent<HTMLInputElement>) => handleSetSearch(e)} onClick={(e)=>setShowLocations(true)} className="outline-none text-sm 2xl:text-lg w-full" />
                    <div className="absolute top-[110%] left-0 max-h-[200px] overflow-y-auto bg-[white] shadow-xl rounded-lg">
                        {showLocations && locations.length >0 && <div ref={locationRef} className="relative top-0 mx-8 my-2 z-[1000000]   rounded ">
                        
                        
                        <ul className="flex flex-col ">
                        
                        {locations.map((item,index)=> (
                            <Link href={`/explore/${item.location}`} key={index}>
                            <li key={index} className="px-4 py-1 cursor-pointer rounded hover:bg-[#e5e5e5] w-[100%]">
                                <div className="flex items-center gap-4 text-sm W-[100%] my-2">
                                    <img src={item.img} alt="" className="w-[10%]"/>
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
                </div>
                
                
               
                
           
            </div>

            <div>
            <div className="flex lg:hidden  relative z-10 items-center rounded mx-4 sm:mx-20 h-[40px] xs:h-[50px]  py-6 bg-[white] pl-2 sm:pl-4">
                <div className="flex gap-4 items-center justify-between  w-full relative">
                    
                    <div className="flex grow gap-2 sm:gap-4">
                    <img src="/images/icons/loc.svg" alt="" className="w-6" />
                    <input type="text" placeholder="Search destination" onChange={(e: ChangeEvent<HTMLInputElement>) => handleSetSearch(e)} onClick={(e)=>setShowLocations(true)} className="outline-none text-sm 2xl:text-lg" />
                   </div> {showLocations && locations.length >0 && <div ref={locationRef} className="absolute bottom-0 translate-y-[100%] min-w-[200px] xs:min-w-[300px] h-[200px] overflow-auto left-8 sm:left-14 bg-[white] shadow-xl rounded ">
                       
                    
                    <ul className="flex flex-col ">
                   
                    {locations.map((item,index)=> (
                        <li key={index} className="px-4 py-1 cursor-pointer hover:bg-[#e5e5e5]">{item.location.charAt(0).toUpperCase()+ item.location.slice(1)}</li>
                    ))}
                
                </ul>

                    </div>}
                </div> 
                </div>
            </div>


        </div>
    )
}