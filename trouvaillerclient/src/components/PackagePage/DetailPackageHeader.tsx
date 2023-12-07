"use client"


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/autoplay";
import {  Autoplay } from 'swiper/modules';
import { FC } from 'react';


export const DetailPackageHeader:FC<{images:string[]}> = ({images}) => {
    return(
        <div className="sm:px-4 md:px-8">
              <Swiper
      spaceBetween={0}
      slidesPerView={1}
      centeredSlides={true}
      breakpoints={{
        610: {
            slidesPerView:2,
            centeredSlides:false,
            spaceBetween:30
        },
        1024:{
            slidesPerView:3,
            centeredSlides:true
        }
      }}

     
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      modules={[ Autoplay]}
      autoplay
      loop

    >
   {images?.map((item,index)=>(
   <SwiperSlide key={index}> <div className='' >
   <img src={item} alt="" className='w-full'/>

</div></SwiperSlide>
   ))}
      
    </Swiper>
            
        </div>
    )
}