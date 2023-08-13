

import React, {useState, useEffect} from 'react'
import FAQ from '../components/FAQ/FAQ'
import Footer from '../components/Footer/Footer'
import { Link } from "react-router-dom";
import NavbarTest from '../components/navbar/navbar';
import { AuthContext } from '../components/context/AuthContext';
import { useContext } from 'react';
import cardavatar from '../Assets/cardavatar.webp'

const IntroBid = () => {
    const [anim, setAnim] = useState("hide")
    const { user } = useContext(AuthContext);
    useEffect(()=>{
        window.addEventListener('load', setAnim("show"))

    }, [])
    const color = "text-whiteglow"

    return (
        <div className={`animationset ${anim} `}>

            <div className=" bg-no-repeat w-full bg-cover text-left gradientbg relative home font-body" >
            <NavbarTest color={color}/>

                <div className='flex flex-col-reverse md:flex-row pt-16 lg:pt-32'>
                    <div className='w-[100%] md:w-[40%] 2xl:w-[50%] flex justify-center'>
                        <div className='w-[70%] sm:w-[40%] md:w-[90%] lg:w-[80%] lg:w-[70%] xl:w-[60%] 2xl:w-[40%]'>
                        <img src={cardavatar} className='w-[100%]'/>

                        </div>
                    </div>
                    <div className='text-[white] w-[100%] md:w-[50%] flex flex-col justify-start items-start px-4 sm:px-12 2xl:pr-60 sm:pt-12 '>
                        <h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold'>Book Your Stay for </h1><h1 className='text-[green] text-2xl sm:text-3xl lg:text-4xl font-bold lg:mt-4'>Tomorrow at Your Price</h1>
                        <p className='py-4 lg:py-8 text-base sm:text-lg lg:text-xl'>Realize your travel dreams affordably by bidding for hotel rates. Experience seamless and hassle-free travel as you occupy rooms at your own budget-friendly bidding rates.</p>
                    {user?(
                   <Link className="" to="/bidform"> <button className='bg-[#00A45E] text-whiteglow text-base sm:text-lg font-bold  rounded-full  mt-4 px-8 py-2'>Place Your Bid</button></Link>
                    ):(
                        <Link className="" to="/login"> <button className='bg-[#00A45E] text-whiteglow text-base sm:text-lg font-bold  rounded-full  mt-4 px-8 py-2'>Place Your Bid</button></Link>
                    )}
                    </div>

                    
                </div>
            </div>

            <div className='px-4 sm:px-16 md:px-20 2xl:px-60 pt-12 sm:pt-20 font-body'>
                <h1 className='pb-5  font-bold text-[#222539] text-xl sm:text-3xl lg:text-4xl'>How to place your Bid </h1>
                <div className='flex md:gap-[2%] my-8 sm:my-12  flex-wrap justify-center'>
                    <div className=' bid-card  w-[100%] md:w-[48%] mb-4 xl:w-[32%]  bg-[white] border border-[2px] border-[#00A45E] w-full    rounded-[20px] shadow-lg '>
                        <div className='flex justify-start w-full items-center gap-4 my-4 sm:my-8 px-8'>
                            <h1 className="bg-[#00A45E] num rounded-full text-lg sm:text-2xl w-[40px] sm:w-[50px] h-[40px] sm:h-[50px] flex justify-center items-center text-[white] font-bold">1</h1>
                            <h1 className='text-base sm:text-lg lg:text-xl font-bold text-[#222539] text-bid w-[70%]'>Fill out the Bid form</h1>
                        </div>
                        <p className='px-8 text-sm sm:text-base lg:text-lg pb-8 text-bid'>Just fill out the bid form with your facility requirements and the price you can afford. Personalize your stay by stating your needs and your budget.</p>
                    </div>

                    <div className=' bid-card w-[100%] md:w-[48%] xl:w-[32%] mb-4  bg-[white] border border-[2px] border-[#00A45E] w-full    rounded-[20px] shadow-lg '>
                        <div className='flex justify-start w-full items-center gap-4 my-4 sm:my-8 px-8'>
                            <h1 className="bg-[#00A45E] rounded-full num text-2xl w-[40px] sm:w-[50px] h-[40px] sm:h-[50px] flex justify-center items-center text-[white] font-bold">2</h1>
                            <h1 className='text-base sm:text-lg lg:text-xl font-bold text-[#222539] text-bid w-[70%]'>Check status and wait for a callback</h1>
                        </div>
                        <p className='px-8 text-sm sm:text-base lg:text-lg pb-8 text-bid '>Once a suitable match is found, we'll notify you through your registered WhatsApp account. Stay attentive to your profile for updates.</p>
                    </div>

                    <div className=' bid-card   w-[100%] md:w-[48%] xl:w-[32%] mb-4  bg-[white] border border-[2px] border-[#00A45E] w-full    rounded-[20px] shadow-lg '>
                        <div className='flex justify-start w-full items-center gap-4 my-4 sm:my-8 px-8'>
                            <h1 className="bg-[#00A45E] rounded-full num text-2xl w-[40px] sm:w-[50px] h-[40px] sm:h-[50px] flex justify-center items-center text-[white] font-bold">3</h1>
                            <h1 className='text-base sm:text-lg lg:text-xl font-bold text-[#222539] text-bid w-[70%]'>Enjoy your stay</h1>
                        </div>
                        <p className='px-8 text-sm sm:text-base lg:text-lg pb-8 text-bid'>Complete your booking and enjoy your stay</p>
                    </div>
                </div>

            </div>

            {/* FAQ block */}
            <div className=' gradientbg font-body'>
                <div className='px-4 sm:px-16 md:px-20 2xl:px-60'>
                <h1 className='text-[white] pt-12  sm:pt-20 md::pt-40 font-bold text-xl sm:text-3xl lg:text-4xl'>Frequently asked questions</h1>
                <div className='py-6'>
                    <FAQ />
                </div>
                </div>
                <Footer bg={"bgtrans"}/>

            </div>

        </div>
    )
}
                    

  


export default IntroBid