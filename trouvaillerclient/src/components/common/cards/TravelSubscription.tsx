'use client'
import { ImageDarker } from "@/utils/ImageDarker"
import { Swiper, SwiperSlide } from "swiper/react";


export const TravelSubscription = () => {
    return (
        <div className="bg-[#0063b117] rounded-[5px] md:px-8 py-2 md:py-8 flex flex-col md:flex-row gap-[5%] items-stretch">
            <div className=" md:w-[30%] rounded-[15px] px-4 flex flex-col justify-end pb-8">
                <h2 className="text-lg sm:text-2xl lg:text-3xl mt-2  roboto-bold mb-2 md:mb-8    ">Explore our Travel subscription plans</h2>
                <p className="text-xs xs:text-sm   "> Enjoy convenient travel subscriptions with flights included for a year-long adventure at accessible monthly rates.</p>

            </div>

            <div className="w-[100%] md:w-[65%] flex flex-col">
                <div className="flex justify-end hidden md:flex">
                    <div className=" flex gap-8  py-6">
                        <button ><img src="/images/icons/arrow.png" className="w-[16px]" /></button>
                        <button ><img src="/images/icons/right.png" className="w-[16px]" /></button>
                    </div>                </div>


                <div className="flex flex-col hidden md:flex md:flex-row gap-[4%]  ">
                    <div className="w-[100%] md:w-[48%] relative h-full rounded-[10px] mb-4">
                        <div className="absolute top-0 left-0 right-0 bottom-0 rounded-[10px] overflow-hidden "><img src="/images/europe.png" className="h-full w-full object-cover object-bottom	" alt="" /></div>
                        <ImageDarker />
                        <div className="relative text-[white] pt-16 xs:pt-40 md:pt-28 px-4 pb-2 ">
                            <h3 className="roboto-medium text-[18px] sm:text-[28px] md:text-[22px]">Europe</h3>
                            <p className="roboto-regular text-[10px] xs:text-[13px]  w-[70%] ">12 / 24 Months subscriptions available</p>
                            <button className="roboto-medium text-sm  mt-2 md:mt-4">Know more</button>

                        </div>
                    </div>
                    <div className="w-[100%] md:w-[48%] relative rounded-[10px] h-full mb-4">
                        <div className="absolute top-0 left-0 right-0 bottom-0 rounded-[10px] overflow-hidden "><img src="/images/thailand.png" className="h-full w-full object-cover object-bottom	" alt="" /></div>
                        <ImageDarker />
                        <div className="relative text-[white] pt-16 xs:pt-40 md:pt-28 px-4 pb-2 ">
                            <h3 className="roboto-medium text-[18px] sm:text-[28px] md:text-[22px]">Thailand</h3>
                            <p className="roboto-regular text-[10px] xs:text-[13px] w-[70%] ">12 / 24 Months subscriptions available</p>
                            <button className="robotot-medium text-sm  mt-2 md:mt-4">Know more</button>

                        </div>
                    </div>

                </div>


                <div className="w-[100%] md:hidden px-4 ">
                   <div className="rounded-[10px] overflow-hidden">
                   <Swiper
                        spaceBetween={10}
                        slidesPerView={1.5}

                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper: any) => console.log(swiper)}>
                        <SwiperSlide>
                            <div className="w-[100%] md:w-[48%] relative h-full rounded-[10px] ">
                                <div className="absolute top-0 left-0 right-0 bottom-0 rounded-[10px] overflow-hidden "><img src="/images/europe.png" className="h-full w-full object-cover object-bottom	" alt="" /></div>
                                <ImageDarker />
                                <div className="relative text-[white] pt-16 xs:pt-40 md:pt-28 px-4 pb-2 ">
                                    <h3 className="roboto-medium text-[18px] sm:text-[28px] md:text-[22px]">Europe</h3>
                                    <p className="roboto-regular text-[10px] xs:text-[13px]  w-[70%] ">12 / 24 Months subscriptions available</p>
                                    <button className="roboto-medium text-sm  mt-2 md:mt-4">Know more</button>

                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="w-[100%] md:w-[48%] relative rounded-[10px] h-full ">
                                <div className="absolute top-0 left-0 right-0 bottom-0 rounded-[10px] overflow-hidden "><img src="/images/thailand.png" className="h-full w-full object-cover object-bottom	" alt="" /></div>
                                <ImageDarker />
                                <div className="relative text-[white] pt-16 xs:pt-40 md:pt-28 px-4 pb-2 ">
                                    <h3 className="roboto-medium text-[18px] sm:text-[28px] md:text-[22px]">Thailand</h3>
                                    <p className="roboto-regular text-[10px] xs:text-[13px] w-[70%] ">12 / 24 Months subscriptions available</p>
                                    <button className="robotot-medium text-sm  mt-2 md:mt-4">Know more</button>

                                </div>
                            </div>
                        </SwiperSlide>





                    </Swiper>
                   </div>
                </div>

            </div>


        </div>
    )
}