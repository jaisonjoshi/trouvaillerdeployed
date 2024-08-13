"use client"
import axiosInstance from "@/utils/axiosInstance"
import Link from "next/link"
import { useEffect, useState } from "react"
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoYoutube } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io5";

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
        <div className="opacity-0 fade-in-up-on-scroll bg-[black] text-[white] px-4 xs:px-8 sm:px-20 lg:px-40 pt-8 sm:pt-20 pb-4 xs:pb-8">
            <div className="flex flex-wrap">
                <div className="w-[100%] xl:w-[25%] flex items-start mb-8 xs:mb-20 xl:mb-0 justify-between  flex-col md:flex-row xl:flex-col">
                    <div>
                    <h2 className="text-lg sm:text-base font-bold">Discover Your</h2>
                    <h2 className="text-2xl sm:text-lg font-bold">Next Adventure <span className="text-[#2AF4A0]">With Us</span></h2>
                    
                    </div>
                    <img src="/images/logos/logo.png" alt="" className="w-20 xs:w-20 mt-4 xs:mt-8 md:mt-0 xl:mt-16"/>
                </div>
                <div className="w-[100%] xs:w-[40%] xl:w-[15%] roboto-regular">
                    <h2 className="text-base sm:text-[14px]  ">Site map</h2>
                    <ul className="mt-4 flex flex-col gap-2 text-[#cccccc] text-[12px]">
                        <li>Home</li>
                        <li>My bids</li>
                        <li>Bid for stay</li>
                        <li>Hotels and Home Stays</li>
                        <li>Travel Packages</li>
                    </ul>
                </div>
                <div className="w-[100%] xs:w-[60%] xl:w-[35%] mt-8 xs:mt-0 xs:pl-8">
                    <h2 className="text-base sm:text-[14px]   roboto-regular">Famous Places to Explore</h2>
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
                <div className="w-[100%] mt-8 xs:mt-20 xl:mt-0 xl:w-[25%] roboto-regular">
                    <h2 className="text-base xs:text-[14px] "> Connect Us</h2>
                    <div className="flex mt-4 gap-4 items-center">
                        <FaFacebook size={20}/>
                        <AiFillInstagram size={24}/>
                        <IoLogoYoutube size={20} />

                    </div>
                    <div className="mt-8  ">
                        <p className=" text-[#cccccc] text-sm xs:text-[12px]">Get in touch with us anytime through our official WhatsApp handle</p>
                        <button className='btn glass text-sm mt-4 text-[white] bg-[#04aa6d]'><IoLogoWhatsapp size={20}/>Chat With Us</button>
                    </div>
                </div>
            </div>
            <div className="border-t border-t-[#393939] flex justify-between py-4 mt-4 xs:mt-8 text-[#cccccc]   text-xs xs:text-xs" >
                <div className="hidden sm:block">
                    &copy; Trouvailler Enterprises pvt ltd.
                </div>
                <div >
                    <ul className="flex gap-4">
                        <Link href="/termsandconditions"><li className="hover:underline">Terms and Conditions</li></Link>
                        <Link href="/privacypolicy"><li className="hover:underline">Privacy Policy</li></Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}