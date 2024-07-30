"use client"

import { ChangeEvent, useContext, useEffect, useRef, useState } from "react";
import { Navbar } from "../Navbar";
import { Swiper, SwiperSlide } from 'swiper/react';
import axios from "axios";
import 'swiper/css';
import 'swiper/css/effect-fade';
import "swiper/css/autoplay";
import Link from "next/link"

import { EffectFade, Autoplay } from 'swiper/modules';
import useDebounce from "@/hooks/useDebounce";
import axiosInstance from "../../../axiosInstance";
import { Location, category } from "@/app/types/types";
import { MobileSearchComponent } from "./MobileSearchComponent";
import SearchTabDesktop from "./SearchTabDesktop";
import { myContext, MyContext } from "../context/Context";

export const Header: React.FC<{}> = ({ }) => {
    const menuRef = useRef<HTMLDivElement>(null);
    const locationRef = useRef<HTMLDivElement>(null);
    const {openSearchDesk, setOpenSearch} = useContext(MyContext) as myContext;


    const [search, setSearch] = useState<string | null>(null)
    const [category, setCategory] = useState<category>(null)
    const [openSearchComponentMobile, setOpenSearchComponentMobile] = useState(false);
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
        <div className="relative pb-16 greenbggrad">
             {openSearchComponentMobile && 
            
                
                <MobileSearchComponent setOpenSearchComponentMobile={setOpenSearchComponentMobile}/>

             }

             <SearchTabDesktop />

            
           
            <div className="absolute  w-full z-[1000] py-4 sm:py-8">
                <Navbar darkMode={true}/>
            </div>
            <div className=" relative  flex flex-col-reverse md:flex-row items-center sm:gap-10 z-[20] pt-28 xs:pt-40 lg:pt-48 xl:pt-56 pb-8 xs:pb-20 px-4 sm:px-20 xl:px-40 text-black">
                <div>
                    <div className="    "> <h1 className="hidden md:block font-medium text-[24px] xs:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[36px] lato "> Discover Your<br></br><span className="font-[600] text-[24px] xs:text-[34px] sm:ext-[36px] md:text-[40px] lg:text-[50px] xl:text-[40px] mt-0 xl:mt-2">
                        Next Adventure <span className="text-[#42b53c]"> With Us</span></span></h1>
                        
                        
                        <h1 className="block md:hidden font-medium text-[30px] xs:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[36px] caveat"> Discover Your<br></br><span className="font-[600] text-[24px] xs:text-[34px] sm:ext-[36px] md:text-[40px] lg:text-[50px] xl:text-[40px] mt-0 xl:mt-2">
                        Next Adventure <span className="text-[#42b53c]"> With Us</span></span></h1>
                        
                        </div>
                    <p className="text-sm leading-[22px] xs:leading-normal xs:text-base md:text-lg lg:text-base my-4 xl:my-8    text-[black]">Experience the adventure of a lifetime with our hand-picked travel packages. Book now and create memories that will last a lifetime!</p>
                    
                    
                    
{/*                     
                    <div className="bg-[transparent] hidden py-6 px-4 lg:flex justify-between items-center h-[40px] mt-20 xl:h-[60px] gap-[2%] relative z-10 bg-white  rounded-full shadow-custom-4   ">
                <div className="w-[100%] flex items-center  bg-[white] px-4 h-full">
                <div className="flex gap-4 items-center w-[100%]  relative">
                    <img src="/images/icons/loc.svg" alt="" className="w-6" />
                    <input type="text" placeholder="Search destination" onChange={(e: ChangeEvent<HTMLInputElement>) => handleSetSearch(e)} onClick={(e)=>setShowLocations(true)} className="outline-none text-sm 2xl:text-lg flex-grow" />

                   
                    
                </div>
                </div>
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
                
               
               
                
           
            </div> */}








<div className="bg-[transparent] hidden py-6 px-4 lg:flex justify-between items-center h-[40px] mt-20 xl:h-[60px] gap-[2%] relative z-10 bg-white  rounded-full shadow-custom-4   ">
                <div className="w-[100%] flex items-center  bg-[white] px-4 h-full">
                <div className="flex gap-4 items-center w-[100%]  relative">
                    <img src="/images/icons/loc.svg" alt="" className="w-6" />
                    <input type="text" placeholder="Search destination"  onClick={(e)=>setOpenSearch(true)} className="outline-none text-sm 2xl:text-lg flex-grow" />

                   
                    
                </div>
                </div>
                  
                
               
               
                
           
            </div>



















                </div>
                <div>
                    <img src="/images/travelimg.png" alt="" className="w-[80%] mx-auto md:w-full block"/>
                </div>



            </div>
           

            <div>
            <div className="flex lg:hidden  relative z-10 items-center mx-4 sm:mx-20 h-[40px] xs:h-[50px] shadow-custom-4 rounded-full bg-[white] py-8 pl-4 sm:pl-4">
                <div className="flex gap-4 items-center justify-between  w-full relative">
                    
                    <div className="flex grow gap-2 sm:gap-4">
                    <img src="/images/icons/loc.svg" alt="" className="w-6" />
                    <div onClick={(e)=>setOpenSearchComponentMobile(true)} className="grow">
                        <p className="text-[#969696]">Search Destinations</p>
                    </div>
                    {/* <input type="text" placeholder="Search destination" onChange={(e: ChangeEvent<HTMLInputElement>) => handleSetSearch(e)}  className="outline-none text-sm 2xl:text-lg" /> */}
                   </div> 
                    {/* <button className="bg-[#45b773] px-4 sm:px-8 py-1 xs:py-2 text-sm sm:text-base rounded text-[white] mr-1">Serach</button> */}
                </div> 
                </div>
            </div>


        </div>
    )
}


