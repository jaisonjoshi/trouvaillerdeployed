"use client"


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/autoplay";
import {  Autoplay , Navigation} from 'swiper/modules';
import React, { useEffect, useRef, useState } from 'react';
import axiosInstance from '../../../axiosInstance';



export const ReviewCrad :React.FC<{review: any}>= ({review}) => {






    return (
        <div className="px-8 md:px-0">
            <img src="/images/icons/quote.png" alt="" className="w-6 md:w-8  md:mb-4"/>
            <div>
                <p className="  text-[#444] robotic-regular text-sm  leading-[24px]  mb-8"> {review.reviewnote}</p>
            </div>
            <div className='flex justify-start'>
            <div className="flex gap-4 items-center">
                <div className='w-16 h-16 rounded-full relative overflow-hidden'>
                <img src={review.image} alt="" className="w-full h-full absolute top-0 left-0 object-cover" />

                </div>
                <div className=''>
                    <h5 className="  text-base font-semibold">{review.author}</h5>
                    <p className="italic text-sm text-[#868686]">{review.place}</p>
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
    const [reviewsLoading, setReviewsLoading] = useState(false)

    useEffect(()=>{
        async function getReviews() {
            setReviewsLoading(true)
            await axiosInstance.get('/reviews')
                .then(res => {
                    setReviews(res.data)
                    console.log(res.data)
                })
                .catch(err => console.log(err))
            }

            getReviews()
            setReviewsLoading(false)



    },[])





    return (
        <div>
            <h2 className="text-lg sm:text-2xl lg:text-2xl  roboto-bold mb-2   ">What people says about us</h2>
            <p className="text-xs xs:text-base md:text-base roboto-regular text-[#777777]  ">Unforgettable journeys, exceptional experiences - discover what our travelers have to say about our travel packages.
            </p>
            <div className="mt-8 md:mt-12">
           { reviewsLoading ?  (<div><span>Loading</span></div>)   :(
           <div className='relative '>
             <button ref={prevRef}><img src="/images/icons/arrow.png" className="w-[22px] cursor-pointer absolute top-[50%] left-[-6%] translate-y-[-50%]"/></button>

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
      onSwiper={(swiper) => console.log(swiper)}
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

                <button ref={nextRef}><img src="/images/icons/right.png" className="w-[22px] absolute top-[50%] right-[-6%] translate-y-[-50%] cursor-pointer"/></button>

        </div>)}
            </div>
        </div>
    )
}