import React from 'react'
import { IoCall } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";

function CallBack() {
  return (
    <div className=' bg-[white]  rounded-[10px] shad overflow-hidden'>
        <div className='py-4 px-4'>
        <h2 className='font-semibold text-lg'>You want a customised travel plan?</h2>
        <p className='text-sm mt-4'>Looking for a personalized travel experience? Let us to create your customized travel plan tailored to your preferences and desires.</p>
        <div className='flex items-center gap-4 mt-4'>
            <button className='btn bg-[#26389d] glass text-[white] flex items-center'><IoCall size={20}/>Get A Callback</button>
            <button className='btn glass text-[white] bg-[#04aa6d]'><IoLogoWhatsapp size={24}/>Chat With Us</button>
        </div>
        </div>
        <img src="/images/callbackimg.png" alt="" className='-mt-[100px]' />
    </div>
  )
}

export default CallBack