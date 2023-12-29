"use client"
import { useEffect, useState } from "react"
import axiosInstance from "../../../axiosInstance"
import { Package } from "@/app/types/types"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/autoplay";
import {  Autoplay } from 'swiper/modules';
import { PackageCard } from "../common/cards/PackageCard";




export const TrendingDestinationsSearch = () => {

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
        

                <div className="hidden sm:flex flex-wrap gap-[10%] lg:gap-[5%] mt-12 2xl:mt-20">
                    {packages?.map((item,index)=>(
                       <div className="w-full sm:w-[45%] lg:w-[30%]" key={index}>
                         <PackageCard item={item} />
                       </div>
                    ))}
                </div>
                <div className="sm:hidden mt-8">
                <Swiper
      spaceBetween={30}
      slidesPerView={1.25}
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