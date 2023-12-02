import { Package } from "@/app/types/types"
import { generateUrl } from "@/utils/generateUrl"
import React from "react"


export const PackageCard:React.FC<{item:Package}> = ({item}) => {
    return(
        <div className="w-full sm:w-[45%] lg:w-[32%] bg-[white] mb-8 xs:mb-20 h-auto rounded-[4px] xs:rounded flex flex-col  border-[1px] shadow-xl">
                            <div className="relative ">
                                <span className="text-[white] bg-[#000000c5] px-4 py-1 text-[10px] md:text-[16px] rounded absolute bottom-2 left-2">{item.duration}</span>

                            <img src={generateUrl(item.images[0])} alt="" className=" rounded-t-[4px] xs:rounded-t-[10px]  w-full  aspect-video skeleton" />
                            </div>
                           
                           <div className="px-2 xs:px-4 flex flex-col justify-between flex-1 ">
                          <div className="">
                         
                            <div className="mt-3 xs:mt-6">
                                <h1 className="font-medium xs:font-semibold text-[13px] xs:text-[18px] roboto whitespace-nowrap	overflow-hidden text-ellipsis	">{item.title}</h1>
                            </div>
                            <div className="flex items-end gap-1 my-2 xs:my-3">
                                <img src="/images/icons/Location.png" alt="" className="w-3 xs:w-4 "/>
                                <p className=" text-[12px] xs:text-[16px] leading-[16px] xs:leading-[20px]  whitespace-nowrap	overflow-hidden text-ellipsis	 w-[90%]">{item.location.charAt(0).toUpperCase()+ item.location.slice(1)}</p>

                            </div>
                            <div className="mt-2 ">
                                <div className=" poppins text-[black] ">
                                    <div className="flex items-start gap-1 mb-1 ">
                                        <img src="/images/icons/tick.png" alt=""  className="w-4"/>
                                        <span className="text-[10px] xs:text-[14px]  sm:mt-[-3px] whitespace-nowrap	overflow-hidden text-ellipsis">Include transfer</span>
                                    </div>
                                    <div className="flex  items-start gap-1 ">
                                        <img src="/images/icons/tick.png" alt=""  className="w-4"/>
                                        <span className="text-[10px] xs:text-[14px] sm:mt-[-3px] whitespace-nowrap	overflow-hidden text-ellipsis">Sightseeing for locations dfdsghrtc hrgrthrtht yhjtyrhr thrt</span>
                                    </div>
                                </div>
                                
                            </div>
                          </div>
                            <div className="mt-2 xs:mt-4 mb-2 xs:mb-8 flex justify-between items-end">
                                <button className="bg-[#05CAA6] text-white font-bold text-[10px] xs:text-[14px] px-6 xs:px-8 rounded-full py-2">Explore</button>
                                <div className="w-[30%] flex flex-col items-end  text-[15px] xs:text-[20px]">
                               <span className="font-extrabold roboto flex gap-1 items-center "> <span className='text-base xs:text-2xl'>₹</span><span>{item.cheapestPrice.toString().replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}</span></span>
                               <span className="text-[10px] xs:text-[14px] text-[#585858]">Per Person</span>
                                </div>

                            </div>

                           </div>
                                
                           
                        </div>
    )
}