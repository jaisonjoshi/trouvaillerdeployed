import Link from "next/link";
import React from "react";



export const Navbar: React.FC<{}> = ({}) => {
    
    return(
        <div className=" flex justify-between relative items-center text-[white] px-4 sm:px-8 md:px-16 2xl:px-28 py-4 sm:py-8">
            <div className="flex items-center gap-12 2xl:gap-20">
            <div className="flex items-center gap-2 sm:gap-4"> 
                <img  src="/images/logos/icon.png" alt=""  className="w-8 sm:w-12 "/>
                <img src="/images/logos/logowhite.png" alt="" className="w-[80px] sm:w-[90px] xl:w-[110px]"/>
            </div>
            
            <div className="hidden lg:block">
               <ul className="flex items-center gap-12 2xl:gap-16">
                <Link href="/">
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
                <img src="/images/icons/avatar.png" alt="" className="w-12 hidden md:block"/>
                <div className="hidden md:flex flex-col">
                        <span className="text-xs">Login</span>
                      
                       <span className="flex text-sm font-medium text-[green]">Sign Up <img src="/images/icons/arrowdown.png" className="w-6"/></span>
                       
                    </div>
                    <div className="lg:hidden">
                <img src="/images/icons/menu.png" alt="" className="w-6 mt-2 sm:w-10 ml-8 rounded"/>
            </div>
            </div>

            
          
        </div>
    )
}