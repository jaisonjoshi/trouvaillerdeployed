import { ImageDarker } from "@/utils/ImageDarker"


const num = [1,2,3,4,5,6,7,8]

export const Place = () => {
    return(
        <div className="min-h-[180px] xs:min-h-[250px] relative  flex items-end">
                    <div className="absolute top-0 left-0 bottom-0 right-0">
                    <ImageDarker />

                    <img src="/images/kashmir.png" alt="" className="w-full h-full rounded-[10px] object-cover object-bottom"/>
                    </div>
                    <div className="relative px-2 xs:px-4 mb-4 xs:mb-8 z-10">
                        <h1 className="font-bold text-[white] text-[16px] sm:text-[20px] lg:text-[24px]">Kashmir</h1>
                        <p className="font-medium text-[#d2d2d2] text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px]"> 12+ Packages</p>

                    </div>
                </div>
    )
}

export const PopularPlaces = () => {
    return(
        <div>
            <h1 className="text-2xl sm:text-2xl lg:text-3xl 2xl:text-4xl font-bold mb-2 md:mb-4 roboto">Explore Popular Destinations</h1>
            <p className="text-sm xs:text-base md:text-lg lg:text-lg text-[#777777]"> Explore popular places with our curated tours, discovering their beauty and charm firsthand.</p>
            <div className="flex justify-start flex-wrap gap-[2%] md:gap-[2.6%] mt-8 md:mt-12 ">
               {num.map((itm, i)=>(
                <div key={i} className={`w-[32%] mb-8 md:w-[23%] ${i>5 ? "hidden md:block" : ""}`}>
                    <Place />
                </div>
               ))} 
               
              

            </div>
        </div>
    )
}