"use client"
import axiosInstance from '@/utils/axiosInstance'
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/autoplay";
import {  Autoplay , Navigation} from 'swiper/modules';
import { PackageCard } from './PackageCard';
import Link from 'next/link';
export const TrendingDestinations =() => {

  const [packages, setPackages] = useState<any>([])
  const [loading, setLoading] = useState<boolean>(true)
    useEffect(()=>{
        async function getPackages() {
          setLoading(true)
            await axiosInstance.get('/category/65999e37781eacb0f9723bcc')
                .then((res:any) => {
                    setPackages(res.data)
                    setLoading(false)

                })
                .catch((err:any) => {
                  console.log(err)
                  setLoading(false)
                })
            }

            getPackages()


    },[])

    console.log(packages)
  return (
    <div className=' bg-[#f1f1f1]'>
      <div className='flex items-center justify-between pr-4  mt-6'>
      <h2 className='text-lg font-bold text-[#2a2a2a] pl-4'>Trending Packages</h2>
      <Link href="">
        <span className='font-bold text-[#26389d] text-sm'>See All</span>
      </Link>
      </div>
      <div className='flex gap-[1rem] overflow-auto mt-4  '>






{
  loading &&

  <div className='px-4 w-full flex gap-4 overflow-hidden '>
    <div className="flex min-w-[70%] w-[70%] flex-col gap-4 fadein">
  <div className="skeleton h-32 w-full"></div>
  <div className="skeleton h-4 w-28"></div>
  <div className="skeleton h-4 w-full"></div>
  <div className="skeleton h-4 w-full"></div>
</div>

<div className="flex w-[70%] flex-col gap-4 fadein">
  <div className="skeleton h-32 w-full"></div>
  <div className="skeleton h-4 w-28"></div>
  <div className="skeleton h-4 w-full"></div>
  <div className="skeleton h-4 w-full"></div>
</div>
  </div>
}
      

{!loading &&
      <Swiper
   spaceBetween={20}
   slidesPerView={1.35}
   breakpoints={{
     1284:{
         slidesPerView:4
     }
   }}
   
   onSlideChange={() => console.log('slide change')}
   onSwiper={(swiper:any) => console.log(swiper)}
   modules={[ Autoplay, Navigation]}
  //  navigation={{
  //   prevEl: prevRef.current,
  //   nextEl: nextRef.current,
  // }}
  /*update state on swiper initialization*/
  // onInit={() => setInit(true)}
   loop

 >
     {
         packages.packages?.map((item: any,index: any)=>(
             <SwiperSlide key={index}>
                  <div key={index} className="ml-4">
                  <PackageCard item={item} />

                  </div>
             
         </SwiperSlide>
         ))
     }
    
    
    
   
   
   
 </Swiper>}
     

    







      </div>
    </div>
  )
}

