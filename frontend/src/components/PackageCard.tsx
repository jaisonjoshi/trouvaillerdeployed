import React from 'react'
import { FaCheck } from "react-icons/fa";

export const PackageCard:React.FC<{item:any}> = ({item}) => {
  return (
    <div className='shad rounded-[20px] border mb-4 fadein'>
        <div className='relative aspect-video'>
            <img src={item.titleImage} alt="" className='rounded-t-[20px] absolute w-full h-full object-cover' />
            <div className='image-cover'></div>
            <div className='absolute bg-[#1012471c] top-0 left-0 right-0 bottom-0 rounded-t-[20px]'>

                        </div>
        </div>
        <div className='px-4 py-4 bg-[white] rounded-[20px] relative z-100'>
        <h1 className=' font-bold'>{item.title}</h1>
        <p className='text-xs my-2 text-[#5b5b5b] leading-[16px] max-h-[48px] h-[48px] line-clamp-3'>{item.shortDescription}</p>

        <div className="mt-4 ">
                                <div className="   text-[#4a4a4a] ">
                                {item.cardTags.cardTag1 !== ""  && <div className="flex items-start gap-1 mb-1 ">
                                <FaCheck size={14} color="#26389d"/>                                        <span className="text-[12px]   whitespace-nowrap	overflow-hidden text-ellipsis">{item.cardTags.cardTag1}</span>
                                    </div>}
                                    {item.cardTags.cardTag2 !== "" && <div className="flex  items-start gap-1 ">
                                        <FaCheck size={14} color="#26389d"/>
                                        <span className="text-[12px]   whitespace-nowrap	overflow-hidden text-ellipsis">{item.cardTags.cardTag2}</span>
                                    </div>}
                                </div>
                                
                            </div>
        <div className='flex items-center justify-between mt-4'>

        <div >

        <p className='font-bold text-lg'>INR 29000</p>
        <p className='-mt-[5px] text-xs'>Per Person</p>
        </div>

        <button className='bg-[#26389d] text-white font-medium px-6 py-2 rounded-[10px] shad glass '>Explore</button>
        </div>

        </div>
    </div>
  )
}

