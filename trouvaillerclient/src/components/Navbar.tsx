"use client"
import Link from "next/link";
import React, { useEffect, useState } from "react";



export const Navbar: React.FC<{darkMode? : boolean}> = ({darkMode}) => {

    const [openNavbar, setOpenNavbar] = useState(false)
    const [bodyHeight, setBodyHeight] = useState<Number>()
    useEffect(()=>{
        const objg = document.getElementById('bodycon');


        setBodyHeight(document.documentElement.clientHeight)
        console.log("hello")


    },[])

    const handleOPenNav = () => {
        const objg = document.getElementById('bodycon');

        setOpenNavbar(true)
        if( objg !== null){

            objg.style.maxHeight = bodyHeight+'px'
            objg.style.overflow = 'hidden'
            objg.style.height=bodyHeight+'px'

        }
       


    }
   
    const handleCloseNav = () => 
    {
        const objg = document.getElementById('bodycon');

        setOpenNavbar(false)
        if( objg !== null){
            objg.style.maxHeight = 'auto'
            objg.style.overflow = 'auto'
            objg.style.height="auto"

        }
 
    }
    
    return(
        <div className=" flex justify-between relative z-[1000] items-center text-[white] px-4 sm:px-8 md:px-16 2xl:px-28 ">
            <div className="flex items-center gap-12 2xl:gap-20">
            <div className="flex items-center gap-2 sm:gap-4"> 
                <img  src="/images/logos/icon.png" alt=""  className="w-8 sm:w-12 "/>
                <img src={`/images/logos/${darkMode? "logodark.png" : "logowhite.png"}`} alt="" className="w-[70px] sm:w-[90px] xl:w-[110px]"/>
            </div>
            
            <div className="hidden lg:block">
               <ul className={`flex items-center gap-12 2xl:gap-16 ${darkMode ? "text-black" : ""}`}>
                <Link href="/packages">
                <li className="flex items-center gap-2">
                    <img src="/images/icons/beach.png" className="w-8"/>
                    <div className="flex flex-col mt-1">
                        <span className="text-xs">Tour</span>
                        <span className="font-medium text-sm ">Packages</span>
                    </div>
                    </li></Link>


                    <Link href="/">
                <li className="flex items-center gap-2">
                    <img src="/images/icons/hotels.png" className="w-8"/>
                    <div className="flex flex-col mt-1">
                        <span className="text-xs">Hotels</span>
                        <span className="font-medium text-sm">Home stays</span>
                    </div>
                    </li></Link>


                    <Link href="/">
                <li className="flex items-center gap-2">
                    <img src="/images/icons/bid.png"  className="w-6"/>
                    <div className="flex flex-col mt-1">
                        <span className="text-xs">Bid</span>
                        <span className="font-medium text-sm">your stay!</span>
                    </div>
                    </li></Link>
               </ul>
            </div>
            </div>


            <div className="flex items-center gap-4">
                <img src={`/images/icons/${darkMode?"avatardark":"avatar"}.png`} alt="" className="w-12 hidden md:block"/>
                <div className="hidden md:flex flex-col">
                        <span className={`text-xs ${darkMode? "text-black" : "text-white"}`}>Login</span>
                      
                       <span className="flex text-sm font-medium text-[green]">Sign Up <img src="/images/icons/arrowdown.png" className="w-6"/></span>
                       
                    </div>
                    <div className="lg:hidden">
{             !openNavbar &&    <img src={`/images/icons/${darkMode? "menudark" : "menu"}.png`} alt="" className="w-6 mt-2 sm:w-10 ml-8 rounded" onClick={handleOPenNav}/>
}             {  openNavbar && <img src={`/images/icons/${darkMode? "Close" : "Close"}.png`} alt="" className="w-6 mt-2 sm:w-10 ml-8 rounded" onClick={handleCloseNav}/>
}
            </div>
            </div>








            <div className={`fixed top-0 overflow-auto ${openNavbar? "left-[0%]" : "left-[-70%]"} shadow-custom transition-all duration-300 right-0 flex flex-col justify-between  w-[70%] overflow-scroll bottom-0 bg-white `}>
               <div className="">
                
               <div className=" relative">
                <div className="absolute top-0 bottom-0 left-0 right-0">
                    <img src="/images/slider/slider1.jpg" alt="" className="object-cover w-full h-full"/>
                </div>
                <div className="absolute top-0 left-0 right-0 bottom-0 gradient">

                </div>
                <div className="relative flex justify-center py-8">
                    <img src="/images/logos/logo.png" alt="" className="w-20" />
                </div>
                
               </div>



                <div className="flex mx-4 items-center gap-3 mt-8  pb-4">
                    <img src="/images/icons/avatardark.png" alt="" className="w-8" />
                    <div className="flex flex-col">
                        <span className="text-[10px] text-black" >Login</span>
                      
                       <span className="flex text-[12px] font-medium text-[green]">Sign Up </span>
                       
                    </div>
                </div>
                <div className="text-black px-4 mt-8">
                    <ul className="flex flex-col gap-4">
                    <Link href="/packages">
                <li className="flex items-center gap-2">
                    <img src="/images/icons/beach.png" className="w-8"/>
                    <div className="flex flex-col mt-1">
                        <span className="text-[10px]">Tour</span>
                        <span className="font-medium text-[12px] ">Packages</span>
                    </div>
                    </li></Link>


                    <Link href="/">
                <li className="flex items-center gap-2">
                    <img src="/images/icons/hotels.png" className="w-8"/>
                    <div className="flex flex-col mt-1">
                        <span className="text-[10px]">Hotels</span>
                        <span className="font-medium text-[12px]">Home stays</span>
                    </div>
                    </li></Link>


                    <Link href="/">
                <li className="flex items-center gap-2">
                    <div className="w-8 flex justify-center">
                    <img src="/images/icons/bid.png"  className="w-6"/>
                    </div>
                    <div className="flex flex-col mt-1">
                        <span className="text-[10px]">Bid</span>
                        <span className="font-medium text-[12px]">your stay!</span>
                    </div>
                    </li></Link>

                    </ul>
                </div>

                <div className="text-black px-4 mt-8 flex flex-col gap-3 items-start">
                    <h1 className="text-xs font-bold">Connect with Us</h1>
                    <button className="flex gap-2 items-center bg-[#1bbc9b] px-4 text-xs py-1 rounded text-white font-semibold"><img src="/images/icons/wa.png" className="w-5" alt="" /> <span className="mt-[2px]">WhatsApp</span></button>
                </div>
                </div>
                <div className=" mx-4 text-[#504f4f] mb-4 text-xs flex gap-2 flex-col">
                    <div className="flex gap-2 items-center mb-2">
                        <img src="/images/icons/fab.png" alt="" className="w-6"/>
                        <img src="/images/icons/instab.png" alt="" className="w-6"/>
                        <img src="/images/icons/ytb.png" alt="" className="w-6"/>
                        </div>                   
                    <h1>Terms and Conditinos</h1>
                    <h1>Privacy Policy</h1>

                </div>
            </div>
          
        </div>
    )
}