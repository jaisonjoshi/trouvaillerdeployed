"use client"

import { ChangeEvent, useEffect, useRef, useState } from "react";
import { Navbar } from "../Navbar";
import { Swiper, SwiperSlide } from 'swiper/react';
import axios from "axios";
import 'swiper/css';
import 'swiper/css/effect-fade';
import "swiper/css/autoplay";

import { EffectFade, Autoplay } from 'swiper/modules';
import useDebounce from "@/hooks/useDebounce";
import axiosInstance from "../../../axiosInstance";
import { Location, category } from "@/app/types/types";
import { MobileSearchComponent } from "./MobileSearchComponent";

export const Header: React.FC<{}> = ({ }) => {
    const menuRef = useRef<HTMLDivElement>(null);
    const locationRef = useRef<HTMLDivElement>(null);


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
        <div className="relative pb-16 h-[100vh] md:h-auto greenbggrad">
             {openSearchComponentMobile && 
            
                
                <MobileSearchComponent setOpenSearchComponentMobile={setOpenSearchComponentMobile}/>

             }

            
           
            <div className="absolute  w-full z-[1000] py-4 sm:py-8">
                <Navbar darkMode={true}/>
            </div>
            <div className=" relative flex items-center gap-10 z-[20] pt-48 xs:pt-40 lg:pt-48 xl:pt-56 pb-8 xs:pb-20 px-8 sm:px-20 xl:px-60 text-black">
                <div>
                    <div className="    "> <h1 className="font-medium text-[24px] xs:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[36px] lato "> Discover Your<br></br><span className="font-[600] text-[24px] xs:text-[34px] sm:ext-[36px] md:text-[40px] lg:text-[50px] xl:text-[40px] mt-0 xl:mt-2">
                        Next Adventure <span className="text-[#42b53c]"> With Us</span></span></h1></div>
                    <p className="text-sm leading-[24px] xs:leading-normal xs:text-base md:text-lg lg:text-base my-8 xl:my-8    text-[black]">Experience the adventure of a lifetime with our hand-picked travel packages. Book now and create memories that will last a lifetime!</p>
                    
                    
                    
                    
                    <div className="bg-[transparent] hidden py-10 px-4 lg:flex justify-between items-center h-[40px] mt-20 xl:h-[60px] gap-[2%] relative z-10 bg-white overflow-hidden rounded shadow-custom-4   ">
                <div className="w-[32%] flex items-center  bg-[white] px-4 h-full">
                <div className="flex gap-4 items-center  relative">
                    <img src="/images/icons/loc.svg" alt="" className="w-6" />
                    <input type="text" placeholder="Search destination" onChange={(e: ChangeEvent<HTMLInputElement>) => handleSetSearch(e)} onClick={(e)=>setShowLocations(true)} className="outline-none text-sm 2xl:text-lg" />
                    {showLocations && locations.length >0 && <div ref={locationRef} className="absolute bottom-0 translate-y-[100%] min-w-[300px] h-[200px] overflow-auto left-14 bg-[white] shadow-xl rounded ">
                       
                    
                    <ul className="flex flex-col ">
                   
                    {locations.map((item,index)=> (
                        <li key={index} className="px-4 py-1 cursor-pointer hover:bg-[#e5e5e5]">{item.location.charAt(0).toUpperCase()+ item.location.slice(1)}</li>
                    ))}
                
                </ul>

                    </div>}
                </div>
                </div>
                
                <div className="w-[32%] ">
                <button className="bg-[#45b773] w-full h-[40px] xl:h-[60px] text-[white] rounded text-base 2xl:text-base  font-bold">Search</button>

                </div>
               
                
           
            </div>
                </div>
                <div>
                    <img src="/images/travelimg.png" alt="" />
                </div>



            </div>
           

            <div>
            <div className="flex lg:hidden  relative z-10 items-center mx-4 sm:mx-20 h-[40px] xs:h-[50px] rounded bg-[white] py-6 pl-2 sm:pl-4">
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