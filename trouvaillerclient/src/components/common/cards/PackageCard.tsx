import { Package } from "@/app/types/types"
import { generateUrl } from "@/utils/generateUrl"
import Link from "next/link"
import React from "react"


export const PackageCard:React.FC<{item:Package}> = ({item}) => {
    return(
        <div className="w-full bg-[white] mb-8 xs:mb-20 h-auto rounded-[4px] xs:rounded-[10px]  flex flex-col border-[1px] shadow-md border-[#f4f4f4]">
                            <div className="relative ">
                            <h1 className="roboto-bold text-[15px] text-[white] xs:text-[14px]  bottom-3 left-2 z-[1000] align-bottom absolute   overflow-hidden whitespace-prewrap	 text-ellipsis	">{item.title}</h1>

                            <div className="image-cover">

                            </div>
                            <div className="mt-3 xs:mt-3 flex justify-between items-start absolute">
                                <span className="text-[white] bg-[#1a9c65] px-2 roboto-bold  py-[2px] text-[14px] md:text-[10px] rounded-r shadow-custom  ">{item.shortDuration}</span>

                            </div>
                            <img src={generateUrl(item.titleImage)} alt="" className=" rounded-t-[4px] xs:rounded-t-[10px]  w-full h-full object-cover  aspect-video skeleton" />
                            </div>
                           
                           <div className="px-2 xs:px-4 flex flex-col justify-between flex-1 ">
                          <div className=" mt-2">

                           
                            <div className="flex items-end gap-1 mt-2 ">
                                <p className=" text-[13px] xs:text-[11px] leading-[16px] xs:leading-[20px] roboto-medium  whitespace-nowrap text-[#4a4a4a]	overflow-hidden text-ellipsis	 w-[90%]">{item.location.charAt(0).toUpperCase()+ item.location.slice(1)}</p>

                            </div>
                            <div className="mt-2">
                                <p className="  text-[#4a4a4a] text-[12px] xs:text-[11px] roboto-regular leading-[17px] h-[51px] line-clamp-3">{item.shortDescription}</p>
                            </div>
                            <div className="mt-4 ">
                                <div className="   text-[#4a4a4a] ">
                                    <div className="flex items-start gap-1 mb-1 ">
                                        {item.cardTags.cardTag1 !== "" && <img src="/images/icons/tick.png" alt=""  className="w-4"/>}
                                        <span className="text-[11px]  sm:mt-[2px] whitespace-nowrap	overflow-hidden text-ellipsis">{item.cardTags.cardTag1}</span>
                                    </div>
                                    <div className="flex  items-start gap-1 ">
                                        {item.cardTags.cardTag2 !== "" && <img src="/images/icons/tick.png" alt=""  className="w-4"/>}
                                        <span className="text-[11px]  sm:mt-[2px] whitespace-nowrap	overflow-hidden text-ellipsis">{item.cardTags.cardTag2}</span>
                                    </div>
                                </div>
                                
                            </div>
                          </div>
                            <div className="mt-5 xs:mt-4 mb-4 xs:mb-4 flex justify-between items-end">
                                <Link href={`/travelpackage/${item._id}`}><button className="bg-[#1a9c65] text-white w-[150%] roboto-bold text-[14px] px-6 xs:px-8 rounded py-2">Explore</button></Link>
                                <div className="w-[30%] flex flex-col items-end  text-[15px]">
                               <span className="font-extrabold    flex gap-1 items-center "> <span className='text-base '>₹</span><span>{item.price.toString().replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}</span></span>
                               <span className="text-[9px]     text-[#585858]">Per Person</span>
                                </div>

                            </div>

                           </div>
                                
                           
                        </div>
    )
}