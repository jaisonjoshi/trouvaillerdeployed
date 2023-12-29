'use client'
import { useEffect, useState } from "react";


export const Filters = () => {
    const [stickyElementVisible, setStickyElementVisible] = useState(false)
    const handleScroll = () => {
        const container = document.getElementById('stickyElement') as HTMLElement | null;
        const stickyOffset = container?.offsetTop || 0;
    
        if (window.scrollY >= stickyOffset) {
          setStickyElementVisible(true)
        } else {
          setStickyElementVisible(false)
        }
      };
    
      useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    
        // Clean up the event listener on unmount
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    return (
        <div id="stickyElement" className=" sticky top-0 z-[100] ">
        <div className={`relative text-[white] overflow-hidden ${stickyElementVisible ? "max-h-[300px]" : "h-[0px]"} transition-all duration-1000`}>
        <div className="absolute top-0 left-0 right-0 bottom-0">
        <img src="/images/loc.jpg" alt="" className="object-cover  object-top w-full h-full" />
    </div>
    <div className="absolute top-0 left-0 right-0 bottom-0 gradient">

    </div>
       <div className="relative z-[100] px-4 py-2">
       <h1 className="text-3xl font-bold poppins">Munnar</h1>
        <h1 className="">12 Packages</h1>
       </div>
        </div>

        <div className="px-4 flex gap-4 py-2  border-b-2 bg-[white]">

            <button className="flex items-center gap-2 text-xs border-2 rounded px-2 py-1"><span>Category</span><img src="/images/icons/arrowdown.png" alt="" className="w-6"/></button>
            <button className="flex items-center gap-2 text-xs border-2 rounded px-2 py-1"><span>Budget</span><img src="/images/icons/arrowdown.png" alt="" className="w-6"/></button>



        </div>




    </div>
    )
}