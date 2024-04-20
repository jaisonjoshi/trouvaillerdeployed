import { ImageDarker } from "@/utils/ImageDarker"


export const TravelSubscription = () => {
    return (
        <div>
            <h2 className="text-lg sm:text-2xl lg:text-3xl 2xl:text-3xl roboto-medium mb-2 md:mb-4   ">Explore our Travel subscription plans</h2>
            <p className="text-xs xs:text-base md:text-lg lg:text-lg text-[#777777]  "> Enjoy convenient travel subscriptions with flights included for a year-long adventure at accessible monthly rates.</p>

            <div className="flex flex-col md:flex-row gap-[10%] mt-8 xs:mt-12 ">
                <div className="w-[100%] md:w-[45%] relative rounded-[10px] mb-4">
                    <div className="absolute top-0 left-0 right-0 bottom-0 rounded-[10px] overflow-hidden "><img src="/images/europe.png" className="h-full w-full object-cover object-bottom	" alt="" /></div>
                    <ImageDarker />
                    <div className="relative text-[white] pt-16 xs:pt-40 md:pt-28 px-4 xl:px-12 pb-4 lg:pb-8">
                        <h3 className="roboto-medium text-[18px] sm:text-[28px] md:text-[24 px]">Europe</h3>
                        <p className="font-medium text-[10px] xs:text-[14px] lg:text-[16px] w-[70%] ">12 / 24 Months subscriptions available</p>
                        <button className="font-extrabold text-sm lg:text-lg mt-2 md:mt-4">Know more</button>

                    </div>
                </div>
                <div className="w-[100%] md:w-[45%] relative rounded-[10px] mb-4">
                    <div className="absolute top-0 left-0 right-0 bottom-0 rounded-[10px] overflow-hidden "><img src="/images/thailand.png" className="h-full w-full object-cover object-bottom	" alt="" /></div>
                    <ImageDarker />
                    <div className="relative text-[white] pt-16 xs:pt-40 md:pt-28 px-4 xl:px-12 pb-4 lg:pb-8">
                        <h3 className="roboto-medium text-[18px] sm:text-[28px] md:text-[24px]">Thailand</h3>
                        <p className="font-medium text-[10px] xs:text-[14px] lg:text-[16px] w-[70%] ">12 / 24 Months subscriptions available</p>
                        <button className="font-extrabold text-sm lg:text-lg mt-2 md:mt-4">Know more</button>

                    </div>
                </div>
               
            </div>
        </div>
    )
}