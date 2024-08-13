"use client"
import axiosInstance from '@/utils/axiosInstance'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { MdLocationPin } from "react-icons/md";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/autoplay";
import {  Autoplay , Navigation} from 'swiper/modules';

function PopularPlaces() {
    const [places, setPlaces] = useState<any>([])
    const [loading , setLoading] = useState<boolean>(true)
    useEffect(()=>{
        async function getPlaces() {
            setLoading(true)
            await axiosInstance.get('/popularplaces')
                .then(res => {
                    setPlaces(res.data)
                    setLoading(false)
                })
                .catch(err =>{
                    console.log(err)
                    setLoading(false)
                })
            }

            getPlaces()



    },[])
  return (
    <div className=' pb-8 opacity-0 fade-in-up-on-scroll'>
        <div className='flex items-center justify-between pr-4   mt-6'>
      <h2 className='text-lg font-bold text-[#2a2a2a] pl-4'>Popular Places</h2>
      <Link href="">
        <span className='font-bold text-[#26389d] text-sm'>See All</span>
      </Link>
      </div>
        <div className='flex popular overflow-auto mt-4'>

            {loading && 
            <div className='px-4 flex items-stretch gap-[4%] w-full'>
                <div className="skeleton  w-[48%]"></div>
                <div className='w-[48%] flex flex-col gap-4'>
                <div className="skeleton h-24 w-full"></div>
                <div className="skeleton h-24 w-full"></div>

                </div>
            </div>
            }
       {!loading && <Swiper
   spaceBetween={20}
   slidesPerView={1.2}
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
     
     {[...Array(Math.ceil(places.length/3))].map((_, index) => (
            <SwiperSlide key={index}>
                  <div key={index} className="ml-4 flex  gap-2 w-full h-[250px] items-stretch ">
                  
                  <div className='relative w-[50%] border rounded-[10px]'>
                    <img src={places[3 * index].image} className=" object-cover absolute w-full h-full top-0 rounded-[10px]" />
                    <div className='image-cover rounded-[10px]'></div>

                    <div className='absolute bottom-2 left-0 flex items-stretch'>
                    <MdLocationPin size={30} color="white"/>
                    <div className=' font-semibold text-sm '>
                        <h3 className='text-[white] capitalize text-[13px] '>  {places[3 * index].name}</h3>
                        <p className='text-[#cecece] text-[11px] -mt-[6px]'> Kerala, India</p>
                    </div>
                    </div>
                    
                  </div>
                  <div className=' w-[50%]'>
                    <div className='relative h-[48%] border rounded-[10px]'>
                    <img src={places[3 * index + 1].image} alt="" className='object-cover rounded-[10px] absolute w-full h-full top-0'/>
                    <div className='image-cover rounded-[10px]'></div>
                    <div className='absolute bottom-2 left-0 flex items-stretch'>
                    <MdLocationPin size={30} color="white"/>
                    <div className=' font-semibold text-sm '>
                        <h3 className='text-[white] capitalize text-[13px] '>  {places[3 * index + 1].name}</h3>
                        <p className='text-[#cecece] text-[11px] -mt-[6px]'> Kerala, India</p>
                    </div>
                    </div>
                    </div>
                    <div className='relative h-[48%] mt-[4%] border rounded-[10px]'>
                    <img src={places[3 * index + 2].image} alt=""  className=' rounded-[10px] object-cover absolute w-full h-full top-0'/>
                    <div className='image-cover rounded-[10px]'></div>
                    <div className='absolute bottom-2 left-0 flex items-stretch'>
                    <MdLocationPin size={30} color="white"/>
                    <div className=' font-semibold text-sm '>
                        <h3 className='text-[white] capitalize text-[13px] '>  {places[3 * index + 2].name}</h3>
                        <p className='text-[#cecece] text-[11px] -mt-[6px]'> Kerala, India</p>
                    </div>
                    </div>

                    </div>
                  </div>
                  
                  </div>
             
         </SwiperSlide>
      ))}
    
    
    
    
   
   
   
 </Swiper>}
     
        
        </div>
        
        
        
        
        </div>
  )
}

export default PopularPlaces