"use client"


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/autoplay";
import {  Autoplay } from 'swiper/modules';



export const ReviewCrad = () => {
    return (
        <div className="px-8 md:px-0">
            <img src="/images/icons/quote.png" alt="" className="w-6 md:w-8  md:mb-2"/>
            <img src="/images/startset.png" alt="" className="w-16 md:w-20 mb-4 md:b-8 mx-auto " />
            <div>
                <p className="poppins text-[#868686] text-sm text-center md:text-lg italic mb-8">Celebrating diverse cultures and breathtaking landscapes, our travel packages offer an escape into adventure and relaxation. From sun-kissed beaches to historic wonders, each journey is meticulously crafted to exceed expectations. Don't just take our word for it—discover why our travellers rave about their unforgettable experiences with us.</p>
            </div>
            <div className='flex justify-center'>
            <div className="flex gap-4 items-center">
                <img src="/images/lea.png" alt="" className="w-12" />
                <div className=''>
                    <h1 className="poppins text-sm font-semibold">Lea Shaun</h1>
                    <p className="italic text-xs text-[#868686]">Thrissur,Kerala</p>
                </div>
            </div>
            </div>
        </div>
    )
}


export const Review = () => {
    return (
        <div>
            <h1 className="text-2xl sm:text-2xl lg:text-3xl 2xl:text-4xl font-bold mb-2 md:mb-4 poppins">What people says about us</h1>
            <p className="text-sm xs:text-base md:text-lg lg:text-xl text-[#777777] poppins">Unforgettable journeys, exceptional experiences - discover what our travelers have to say about our travel packages.
            </p>
            <div className="mt-8 md:mt-20">
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
            centeredSlides:false
        }
      }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      modules={[ Autoplay]}
      autoplay
      loop

    >
      <SwiperSlide><ReviewCrad /></SwiperSlide>
      <SwiperSlide><ReviewCrad /></SwiperSlide>
      <SwiperSlide><ReviewCrad /></SwiperSlide>
      <SwiperSlide><ReviewCrad /></SwiperSlide>
      
    </Swiper>
            </div>
        </div>
    )
}