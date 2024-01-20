"use client"
import { useEffect, useState } from "react"
import { PackageCard } from "./cards/PackageCard"
import axiosInstance from "../../../axiosInstance"
import { Package } from "@/app/types/types"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/autoplay";
import {  Autoplay } from 'swiper/modules';




export const TrendingDestinationsCarousel = () => {

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
            <h1 className="text-lg sm:text-2xl lg:text-3xl 2xl:text-4xl font-bold mb-2 md:mb-4">Trending Packages</h1>
            <p className="text-xs xs:text-base md:text-lg lg:text-xl text-[#777777]">Have a plan to go vacation? See trending destinations for your inspiration where to go.

                </p>

               
                <div className=" mt-8">
                <Swiper
      spaceBetween={30}

      slidesPerView={1.25}
      breakpoints={{
        614:{
            slidesPerView:2.25

        },
        1025:{
            slidesPerView:3.25
        }
      }}
      
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      modules={[ Autoplay]}
      autoplay
      loop

    >
        {
            packages?.map((item,index)=>(
                <SwiperSlide key={index}>
                <div className=" ">
                        <PackageCard item={item} key={index}/>
                </div>
            </SwiperSlide>
            ))
        }
       
       
       
      
      
      
    </Swiper>


                </div>
                



        </div>
    )
}