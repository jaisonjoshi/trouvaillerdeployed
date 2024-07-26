"use client"
import { useEffect, useRef, useState } from "react"
import { PackageCard } from "./cards/PackageCard"
import axiosInstance from "../../../axiosInstance"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/autoplay";
import {  Autoplay , Navigation} from 'swiper/modules';




export const TrendingDestinations = () => {

    const [_, setInit] = useState<boolean>();
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const [packages, setPackages] = useState<any>([])

    useEffect(()=>{
        async function getPackages() {
            await axiosInstance.get('/category/65999e37781eacb0f9723bcc')
                .then(res => {
                    setPackages(res.data)
                    console.log(res.data)
                })
                .catch(err => console.log(err))
            }

            getPackages()



    },[])

    return(

       <>
       {packages &&
         <div className="  ">
         <h2 className="text-xl sm:text-2xl lg:text-2xl  roboto-bold mb-2 ">{packages.name}</h2>
         <div className="flex justify-between items-end">
         <p className="text-xs xs:text-base md:text-base roboto-regular  text-[#777777]">{packages.description}
             </p>

             <div className=" flex gap-8 hidden md:flex">
             <button ref={prevRef}><img src="/images/icons/arrow.png" className="w-[16px]"/></button>
      <button ref={nextRef}><img src="/images/icons/right.png" className="w-[16px]"/></button>
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
   spaceBetween={20}
   slidesPerView={1.25}
   breakpoints={{
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
  /*update state on swiper initialization*/
  onInit={() => setInit(true)}
   autoplay
   loop

 >
     {
         packages.packages?.map((item: any,index: any)=>(
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