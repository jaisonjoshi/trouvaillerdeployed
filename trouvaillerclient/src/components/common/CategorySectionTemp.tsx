"use client"
import React, { useEffect, useState } from "react"
import { PackageCard } from "./cards/PackageCard"
import axiosInstance from "../../../axiosInstance"
import { Package } from "@/app/types/types"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/autoplay";
import {  Autoplay } from 'swiper/modules';




export const CategorySectionTemp:React.FC<{item:any}> = ({item}) => {

   

    return(

       <>
       {item &&
         <div className="roboto">
         <h1 className="text-lg sm:text-2xl lg:text-3xl 2xl:text-4xl font-bold mb-2 md:mb-4">{item.name}</h1>
         <p className="text-xs xs:text-base md:text-lg  text-[#777777]">{item.description}
             </p>
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
   slidesPerView={1.25}
   breakpoints={{
     1284:{
         slidesPerView:4
     }
   }}
   onSlideChange={() => console.log('slide change')}
   onSwiper={(swiper) => console.log(swiper)}
   modules={[ Autoplay]}
   autoplay
   loop

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