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

export const Header: React.FC<{}> = ({ }) => {
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

            <div className="w-full  absolute top-0 bottom-0 ">
                <Swiper
                    spaceBetween={30}
                    effect={'fade'}
                    loop
                    
                    allowTouchMove={false}
                    modules={[EffectFade, Autoplay]}
                    className="mySwiper h-full"
                >
                    <SwiperSlide>
                        <div className="header-bg h-full">
                            <img src="/images/bg.jpg " className="w-full h-full object-cover" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="header-bg">
                            <img src="/images/slider/slider2.jpg" className="w-full h-full object-cover" />
                        </div>                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="header-bg">
                            <img src="/images/slider/slider3.jpg" className="w-full h-full object-cover" />
                        </div>                    </SwiperSlide>

                </Swiper>

            </div>
            <div className="absolute w-full z-20 py-4 sm:py-8">
                <Navbar />
            </div>
            <div className=" relative text-center z-[20] pt-32 xs:pt-40 lg:pt-48 xl:pt-56 pb-8 xs:pb-20 px-8 sm:px-20 xl:px-60 text-white">
                <div>
                    <div className="  playfair"> <h1 className="font-bold text-[24px] xs:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[63px] "> Discover Your</h1><h1 className="font-extrabold text-[24px] xs:text-[34px] sm:ext-[36px] md:text-[40px] lg:text-[50px] xl:text-[70px] mt-0 xl:mt-4">
                        Next Adventure <span className="text-[#42b53c]"> With Us</span></h1></div>
                    <p className="text-sm leading-[24px] xs:leading-normal xs:text-base md:text-lg lg:text-xl my-8 xl:my-8 poppins text-[#e4e4e4]">Experience the adventure of a lifetime with our hand-picked travel packages. Book now and create memories that will last a lifetime!</p>
                </div>



            </div>
            <div className="bg-[transparent] hidden  lg:flex justify-between items-center h-[40px] xl:h-[60px] gap-[2%] relative z-10 mx-12 xl:mx-40 2xl:mx-80   px-8 ">
                <div className="w-[32%] flex items-center bg-[white] px-4 h-full">
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
                <div className="w-[32%] bg-[white] h-full flex items-center px-4">
                <div className="flex gap-4 items-center relative" >
                    <img src="/images/icons/grp.svg" alt="" className="w-6" />
                    <span className="text-[#a9a9a9] text-sm 2xl:text-lg" onClick={() => setShowCategory(!showCategory)}>{category === null ? "Travelling with" : category.charAt(0).toUpperCase()+category.slice(1)}</span>
                    {showCategory && <div ref={menuRef} className="absolute bottom-0 translate-y-[100%] min-w-[300px] left-14 bg-[white] shadow-xl rounded ">
                        <ul className="flex flex-col ">
                            <li className="cursor-pointer hover:bg-[#e5e5e5] px-4 py-1" onClick={() => selectCategory(null)}>Clear selection</li>
                            <li className="cursor-pointer hover:bg-[#e5e5e5] px-4 py-1" onClick={() => selectCategory("family")}>Family</li>
                            <li className="cursor-pointer hover:bg-[#e5e5e5] px-4 py-1" onClick={() => selectCategory("honeymoon")}>Honeymoon</li>
                            <li className="cursor-pointer hover:bg-[#e5e5e5] px-4 py-1" onClick={() => selectCategory("friends")}>Friends</li>
                            <li className="cursor-pointer hover:bg-[#e5e5e5] px-4 py-1" onClick={() => selectCategory("adventure")}>Adventure</li>

                        </ul>

                    </div>}
                </div>
                </div>
                <div className="w-[32%]">
                <button className="bg-[#45b773] w-full h-[40px] xl:h-[60px] text-[white]  text-base 2xl:text-xl  font-medium">Search</button>

                </div>
               
                
           
            </div>

            <div>
            <div className="flex lg:hidden  relative z-10 items-center mx-4 sm:mx-20 h-[40px] xs:h-[50px] bg-[white] pl-2 sm:pl-4">
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
                    <button className="bg-[#45b773] px-4 sm:px-8 py-1 xs:py-2 text-sm sm:text-base rounded text-[white] mr-1">Serach</button>
                </div> 
                </div>
            </div>


        </div>
    )
}