"use client"


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/autoplay";
import {  Autoplay , Navigation} from 'swiper/modules';
import React, { useEffect, useRef, useState } from 'react';
import axiosInstance from '@/utils/axiosInstance';
import { IoIosArrowBack } from "react-icons/io";

import { ImQuotesLeft } from "react-icons/im";
import { IoIosArrowForward } from "react-icons/io";


export const ReviewCrad :React.FC<{review: any}>= ({review}) => {






    return (
        <div className="px-8 md:px-0">
            <ImQuotesLeft className='mb-2' color='#26389d'/>
            <div>
                <p className="  text-[#444] robotic-regular text-sm  leading-[24px]  mb-8"> {review.reviewnote}</p>
            </div>
            <div className='flex justify-start'>
            <div className="flex gap-4 items-center">
                <div className='w-12 h-12 rounded-full relative overflow-hidden'>
                <img src={review.image} alt="" className="w-full h-full absolute top-0 left-0 object-cover" />

                </div>
                <div className=''>
                    <h5 className="  text-sm font-semibold">{review.author}</h5>
                    <p className=" text-xs text-[#868686]">{review.place}</p>
                </div>
            </div>
            </div>
        </div>
    )
}


export const Review = () => {
    const [_, setInit] = useState<boolean>();
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const [reviews, setReviews] = useState<any[]>([])
    const [reviewsLoading, setReviewsLoading] = useState(true)

    useEffect(()=>{
        async function getReviews() {
            setReviewsLoading(true)
            await axiosInstance.get('/reviews')
                .then(res => {
                    setReviews(res.data)
                    setReviewsLoading(false)
                })
                .catch(err =>{

                 console.log(err)
                setReviewsLoading(false)
            })
            }

            getReviews()



    },[])





    return (
        <div className='mt-8'>
            <h2 className="text-lg  font-semibold  mb-2   ">Stories with Trouvailler</h2>
            <p className="text-sm  ">Unforgettable journeys, exceptional experiences - discover what our travelers have to say about our travel packages.
            </p>
            <div className="mt-4 md:mt-12">
           { reviewsLoading ? 
           
           
           (<div>

<div className="flex w-[80%] flex-col gap-4 py-8">
<div className="skeleton h-32 w-full"></div>
  <div className="flex items-center gap-4">
    <div className="skeleton h-16 w-16 shrink-0 rounded-full"></div>
    <div className="flex flex-col gap-4 grow">
      <div className="skeleton h-4 w-28"></div>
      <div className="skeleton h-4 w-full"></div>
    </div>
  </div>
  
</div>



           </div>) 
           
           
           :(
           <div className='relative '>
             <button ref={prevRef}><IoIosArrowBack size={20} color='#26389d' className="cursor-pointer absolute block top-[40%] left-[-1%] translate-y-[-50%]"/></button>

          <div>
          <Swiper
      spaceBetween={30}
      slidesPerView={1}
      centeredSlides={true}

      breakpoints={{
        614: {
            slidesPerView:1.5,
        },
        1284:{
            slidesPerView:3,
            centeredSlides:true,
            spaceBetween:80
        }
      }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper : any) => console.log(swiper)}
      modules={[ Autoplay, Navigation]}
      navigation={{
        prevEl: prevRef.current,
        nextEl: nextRef.current,
      }}
      onInit={() => setInit(true)}
      autoplay
      loop

    >

        {reviews && reviews?.map((item,index)=>(
 <SwiperSlide key={index}><ReviewCrad review={item} /></SwiperSlide>
        ))}
     
   
      
    </Swiper>
          </div>

                <button ref={nextRef}><IoIosArrowForward  size={20} color='#26389d' className="block absolute top-[40%] right-[-1%] translate-y-[-50%] cursor-pointer"/></button>

        </div>)}
            </div>
        </div>
    )
}