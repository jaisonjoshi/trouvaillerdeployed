"use client"
import Link from "next/link"
import { useEffect, useState } from "react"
import axiosInstance from "../../../axiosInstance"

export const Footer = () => {
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
        <div className="bg-[black] text-[white] px-4 xs:px-8 sm:px-20 pt-8 sm:pt-20 pb-4 xs:pb-8">
            <div className="flex flex-wrap">
                <div className="w-[100%] xl:w-[25%] flex items-start mb-8 xs:mb-20 xl:mb-0 justify-between  flex-col md:flex-row xl:flex-col">
                    <div>
                    <h2 className="text-lg sm:text-2xl xl:text-xl font-bold">Discover Your</h2>
                    <h2 className="text-2xl sm:text-3xl xl:text-2xl font-bold">Next Adventure <span className="text-[#2AF4A0]">With Us</span></h2>
                    
                    </div>
                    <img src="/images/logos/logo.png" alt="" className="w-20 xs:w-24 sm:w-auto mt-4 xs:mt-8 md:mt-0 xl:mt-16"/>
                </div>
                <div className="w-[100%] xs:w-[40%] xl:w-[15%]">
                    <h2 className="text-base sm:text-lg xl:text-xl   font-semibold">Site map</h2>
                    <ul className="mt-4 xs:mt-8 flex flex-col gap-2 text-[#cccccc] text-sm">
                        <li>Home</li>
                        <li>My bids</li>
                        <li>Bid for stay</li>
                        <li>Hotels and Home Stays</li>
                        <li>Travel Packages</li>
                    </ul>
                </div>
                <div className="w-[100%] xs:w-[60%] xl:w-[35%] mt-8 xs:mt-0 xs:pl-8">
                    <h2 className="text-base sm:text-lg xl:text-xl   font-semibold">Famous Places to Explore</h2>
                   <div className="flex flex-wrap gap-[%] mt-4 xs:mt-8">
                    <div className="flex gap-[2%]"> 
                   {
                    places && places.slice(0,3).map((itm:any,index:any)=>(
                            <div key={index} className="w-[30%] md:w-[15%] xl:w-[20%] mb-4">
                                <img src={itm.image} alt="" className="w-full"/>
                            </div>
                    ))
                   }
                   
                   
                    
                    </div>
                   <div className="flex gap-[2%]">


                   {
                    places && places.slice(3,6).map((itm:any,index:any)=>(
                            <div key={index} className="w-[30%] md:w-[15%] xl:w-[20%] mb-4">
                                <img src={itm.image} alt="" className="w-full"/>
                            </div>
                    ))
                   }
                   </div>
                   
                   </div>
                </div>
                <div className="w-[100%] mt-8 xs:mt-20 xl:mt-0 xl:w-[25%]">
                    <h2 className="text-base xs:text-lg sm:text-xl   font-semibold"> Connect Us</h2>
                    <div className="flex mt-8 gap-4">
                        <img src="/images/icons/fb.png" alt="" className="w-8"/>
                        <img src="/images/icons/insta.png" alt="" className="w-8"/>
                        <img src="/images/icons/yt.png" alt="" className="w-8"/>

                    </div>
                    <div className="mt-8  ">
                        <p className=" text-[#cccccc] text-sm xs:text-base">Get in touch with us anytime through our official WhatsApp handle</p>
                        <button className="flex   items-center gap-2 xs:gap-4 bg-[#05CAA6] px-4 py-2 rounded text-sm xs:text-base mt-4 font-bold"><img src="/images/icons/wa.png" className="w-6 xs:w-8" alt="" /> <span>WhatsApp</span></button>
                    </div>
                </div>
            </div>
            <div className="border-t border-t-[#393939] flex justify-between py-4 mt-4 xs:mt-12 text-[#cccccc]   text-xs xs:text-sm" >
                <div className="hidden sm:block">
                    &copy; Trouvailler Enterprises pvt ltd.
                </div>
                <div >
                    <ul className="flex gap-4">
                        <Link href="/termsandconditions"><li>Terms and Conditions</li></Link>
                        <Link href="/privacypolicy"><li>Privacy Policy</li></Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}