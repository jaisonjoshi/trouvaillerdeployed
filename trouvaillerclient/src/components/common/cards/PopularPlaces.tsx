"use client"
import { ImageDarker } from "@/utils/ImageDarker"
import { useEffect, useState } from "react"
import axiosInstance from "../../../../axiosInstance"
import Link from "next/link"



export const Place:React.FC<{itm:any}> = ({itm}) => {
    return(
        <div className="min-h-[180px] xs:min-h-[250px] relative  flex items-end">
                    <div className="absolute top-0 left-0 bottom-0 right-0">
                    <ImageDarker />

                    <img src={itm.image} alt="" className="w-full h-full rounded-[10px] object-cover object-bottom"/>
                    </div>
                    <div className="relative px-2 xs:px-4 mb-4 xs:mb-8 z-10">
                        <h1 className="font-bold text-[white] text-[16px] sm:text-[20px] lg:text-[24px]">{itm.name.charAt(0).toUpperCase() + itm.name.slice(1)}</h1>
                        {/* <p className="font-medium text-[#d2d2d2] text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px]"> 12+ Packages</p> */}

                    </div>
                </div>
    )
}

export const PopularPlaces = () => {


    const [places, setPlaces] = useState<any>([])

    useEffect(()=>{
        async function getPlaces() {
            await axiosInstance.get('/popularplaces')
                .then(res => {
                    setPlaces(res.data)
                    console.log(res.data)
                })
                .catch(err => console.log(err))
            }

            getPlaces()



    },[])



    return(
        <div>
            <h1 className="text-lg sm:text-2xl lg:text-3xl 2xl:text-3xl roboto-medium mb-2 md:mb-4   ">Explore Popular Destinations</h1>
            <p className="text-xs xs:text-base md:text-lg lg:text-lg text-[#777777]"> Explore popular places with our curated tours, discovering their beauty and charm firsthand.</p>
            <div className="flex justify-start flex-wrap gap-[2%] md:gap-[2.6%] mt-8 md:mt-12 ">
               {places && places.map((itm :any, i:any)=>(
                <Link key={i} href={`/explore/${itm.name}`} className={`w-[32%] mb-8 md:w-[23%] ${i>5 ? "hidden md:block" : ""}`}> 
                <div  >
                    <Place itm={itm} />
                </div></Link>
               ))} 
               
              

            </div>
        </div>
    )
}