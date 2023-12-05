"use client"
import { useEffect, useState } from "react"
import { PackageCard } from "./cards/PackageCard"
import axiosInstance from "../../../axiosInstance"
import { Package } from "@/app/types/types"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/autoplay";
import {  Autoplay } from 'swiper/modules';




export const TrendingDestinations = () => {

    const [loading, setLoading] = useState(false)
    const [packages, setPackages] = useState<Package[]>([])

    useEffect(()=>{
        async function getPackages() {
            await axiosInstance.get('/packages?rating=1&rating=2&rating=3&limit=12')
                .then(res => {
                    setPackages(res.data)
                    console.log(res.data)
                })
                .catch(err => console.log(err))
            }

            getPackages()



    },[])

    return(
        <div className="poppins">
            <h1 className="text-2xl sm:text-2xl lg:text-3xl 2xl:text-4xl font-bold mb-2 md:mb-4">Trending Packages</h1>
            <p className="text-sm xs:text-base md:text-lg lg:text-xl text-[#777777]">Have a plan to go vacation? See trending destinations for your inspiration where to go.

                </p>

                <div className="hidden sm:flex flex-wrap gap-[10%] lg:gap-[5%] mt-12 2xl:mt-20">
                    {packages?.map((item,index)=>(
                        <PackageCard item={item} key={index}/>
                    ))}
                </div>
                <div className="sm:hidden mt-8">
                <Swiper
      spaceBetween={30}
      slidesPerView={1.5}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      modules={[ Autoplay]}
      autoplay
      loop

    >
        <SwiperSlide>
            <div className=" ">
                {packages.slice(0,2)?.map((item, index)=>(
                    <PackageCard item={item} key={index}/>
                ))}
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className=" ">
                {packages.slice(2,4)?.map((item, index)=>(
                    <PackageCard item={item} key={index}/>
                ))}
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className=" ">
                {packages.slice(4,6)?.map((item, index)=>(
                    <PackageCard item={item} key={index}/>
                ))}
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className=" ">
                {packages.slice(6,8)?.map((item, index)=>(
                    <PackageCard item={item} key={index}/>
                ))}
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className=" ">
                {packages.slice(8,10)?.map((item, index)=>(
                    <PackageCard item={item} key={index}/>
                ))}
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className=" ">
                {packages.slice(10,12)?.map((item, index)=>(
                    <PackageCard item={item} key={index}/>
                ))}
            </div>
        </SwiperSlide>
      
      
    </Swiper>


                </div>
                



        </div>
    )
}