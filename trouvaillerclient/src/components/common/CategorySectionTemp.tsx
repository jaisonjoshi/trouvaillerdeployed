"use client"
import React, { useEffect, useRef, useState } from "react"
import { PackageCard } from "./cards/PackageCard"
import axiosInstance from "../../../axiosInstance"
import { Package } from "@/app/types/types"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/autoplay";
import {  Autoplay, Navigation } from 'swiper/modules';




export const CategorySectionTemp:React.FC<{item:any}> = ({item}) => {

  const [_, setInit] = useState<boolean>();
  const prevRef = useRef(null);
  const nextRef = useRef(null);
   console.log(item)

    return(

       <>
       {item &&
         <div className="  ">
         <h2 className="text-lg sm:text-2xl lg:text-2xl roboto-bold mb-2  ">{item.name}</h2>
         <div className="flex justify-between items-end">
         <p className="text-sm xs:text-base md:text-base  text-[#777777]">{item.description}
             </p>

             <div className=" flex gap-8 ">
             <button ref={prevRef}><img src="/images/icons/arrow.png" className="w-[16px] cursor-pointer"/></button>
      <button ref={nextRef}><img src="/images/icons/right.png" className="w-[16px] cursor-pointer"/></button>
                          </div>
         </div>
{/* 
             <div className="hidden sm:flex flex-wrap gap-[10%] lg:gap-[5%] mt-12 2xl:mt-20">
                 {packages?.map((item,index)=>(
                    <div className="w-full sm:w-[45%] lg:w-[30%]" key={index}>
                      <PackageCard item={item} />
                    </div>
                 ))}
             </div> */}
             <div className=" mt-8">
             <Swiper
   spaceBetween={30}
   slidesPerView={1.5}
   breakpoints={{
    610:{
      slidesPerView:2.25

    },

    964:{
      slidesPerView:3.25
    },
     1284:{
         slidesPerView:4
     }
   }}
   onSlideChange={() => console.log('slide change')}
   onSwiper={(swiper) => console.log(swiper)}
   modules={[ Autoplay, Navigation]}
   navigation={{
    prevEl: prevRef.current,
    nextEl: nextRef.current,
  }}
  onInit={() => setInit(true)}
   autoplay

 >
     {
         item.packages?.map((item: any,index: any)=>(
             <SwiperSlide key={index}>
             
                     <PackageCard item={item} key={index}/>
             
         </SwiperSlide>
         ))
     }
    
    
    
   
   
   
 </Swiper>


             </div>
             



     </div>
       }
       </>
    )
}