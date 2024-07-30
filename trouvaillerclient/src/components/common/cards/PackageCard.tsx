import { Package } from "@/app/types/types"
import { generateUrl } from "@/utils/generateUrl"
import Link from "next/link"
import React from "react"


export const PackageCard:React.FC<{item:Package}> = ({item}) => {
    return(
        <div className="w-full bg-[white] mb-8 xs:mb-20 h-auto rounded-[15px] xs:rounded-[4px]  flex flex-col  shadow-md ">
                            <div className="relative ">

                            {/* <div className="image-cover">

                            </div> */}
                            <div className="mt-3 xs:mt-1 flex justify-between items-start absolute">
                                <span className="text-[white]  px-2 roboto-bold  py-[2px] text-[14px] md:text-[12px] rounded-r bg-[#00000082]  ">{item.shortDuration}</span>

                            </div>
                            <img src={generateUrl(item.titleImage)} alt="" className=" rounded-t-[15px] xs:rounded-t-[4px]  w-full h-full object-cover  aspect-video skeleton" />
                            </div>
                           
                           <div className="px-2 xs:px-2 flex flex-col justify-between flex-1 ">
                          <div className=" mt-2">

                           
                            <div className=" mt-2 ">
                            <h1 className="open-sans-700 mb-1 text-[15px] text-[black] xs:text-[15px]  bottom-3 left-2 z-[1000] align-bottom    overflow-hidden whitespace-nowrap		 text-ellipsis	">{item.title}</h1>

                                <p className=" text-[13px] xs:text-[12px] leading-[16px] xs:leading-[20px] open-sans-500 whitespace-nowrap text-[#4a4a4a]	overflow-hidden text-ellipsis	 w-[90%]">{item.location.charAt(0).toUpperCase()+ item.location.slice(1)}</p>

                            </div>
                            <div className="mt-2">

                                <p className="   text-[12px] xs:text-[11px] open-sans400 leading-[17px] h-[51px] line-clamp-3">{item.shortDescription}</p>
                            </div>
                            <div className="mt-4 ">
                                <div className="   text-[#4a4a4a] ">
                                    <div className="flex items-start gap-1 mb-1 ">
                                        {item.cardTags.cardTag1 !== "" && <img src="/images/icons/tick.png" alt=""  className="w-4"/>}
                                        <span className="text-[11px]   whitespace-nowrap	overflow-hidden text-ellipsis">{item.cardTags.cardTag1}</span>
                                    </div>
                                    <div className="flex  items-start gap-1 ">
                                        {item.cardTags.cardTag2 !== "" && <img src="/images/icons/tick.png" alt=""  className="w-4"/>}
                                        <span className="text-[11px]   whitespace-nowrap	overflow-hidden text-ellipsis">{item.cardTags.cardTag2}</span>
                                    </div>
                                </div>
                                
                            </div>
                          </div>
                            <div className="mt-5 xs:mt-4 mb-4 xs:mb-4 flex justify-between items-end">
                            <div className="w-[30%] flex flex-col items-start  text-[16px]">
                               <span className="open-sans-700    flex gap-1 items-center "> <span className='text-base '>INR</span><span>{item.price.toString().replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}</span></span>
                               <span className="text-[10px]     text-[#585858]">Per Person</span>
                                </div>

                                
                                <Link className="w-[70%]  flex justify-end" href={`/travelpackage/${item._id}`}><button className="bg-[#6c6c6c]  open-sans-500 text-white  text-[11px] px-6 xs:px-6 rounded-[10px] py-2">Explore</button></Link>
                                

                            </div>

                           </div>
                                
                           
                        </div>
    )
}