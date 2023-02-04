import React, { useEffect, useState } from 'react'
import Navbar from '../components/navbar/navbar';
import Offer from './offer';
import Footer from '../components/Footer/Footer';
import useFetch from '../../hooks/useFetch';
import { Link } from 'react-router-dom';
import BarLoader from "react-spinners/BarLoader";


const Offershotels = () => {
  const [anim, setAnim] = useState("hide")
    useEffect(()=>{
        window.addEventListener('load', setAnim("show"))

    }, []);

    const [hoteloffers, sethoteloffers] = useState([])
    const { data, loading, error } = useFetch("/hotels?offers=false");

    useEffect(()=>{
        sethoteloffers(data)
    }, [data])
    return (
        <div className={`animationset ${anim}`}>
            
        <Navbar />
        <div className='flex justify-start mb-20 card-shadow  fixed z-[49] bg-[white] top-[60px] left-0 right-0'>
                    <div className=' flex gap-4 text-base   font-bold'>
                            <Link to="/traveloffers"  className='px-4 py-2 cursor-pointer  text-[#2f3560]'>Package Offers</Link>
                        <span  className="px-4 py-2  text-[#2f3560] border-b border-b-[2px] border-b-[#2f3560]   ">Hotel offers</span>
                    </div>
                </div>


                <div className="mt-[60px] pt-28 pb-16 gradient-first mb-8 px-4 sm:px-16 md:px-20 2xl:px-40">
        <h1 className=' font-bold text-blacky-dark text-2xl sm:text-4xl'>Top discounts on Homestays, hotels...</h1>
                  <p className=' textnormal py-4 text-sm  sm:text-base md:text-lg'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore iure odit nemo.</p>
      </div>


        <div className="px-4 sm:px-16 md:px-20 2xl:px-40 offer-container">
        {loading ? 
        
        (
          <div className='loading-div'>
          <BarLoader



              color={'#32fca7'}
              loading={loading}

              size={15}

              />
        </div>
       )
      
      
      
      
      
      
      
      :
      (
        <div className="flex justify-start flex-wrap  px-4  gap-[4%] sm:pb-20">
            {hoteloffers.map((itm, i)=>(
              <div key={i} className=" w-[48%] mb-10 md:w-[30%] lg:w-[22%] pb-3 card-shadow ">
              <div className="relative w-full">
                  <div className="absolute top-0 left-0 right-0 bottom-0 z-40 rounded bg-gradient-to-b from-transparent via-transparent to-black"></div>
                  <img className='w-[100%] aspect-video skeleton rounded-t-lg' src={itm.images[0]} alt="" />
                  <h3 className='text-base md:text-lg font-bold z-[41] text-whiteglow px-1 md:px-3  absolute bottom-[3px] md:bottom-[10px]'>{itm.title}</h3>
              </div>
              <div className='py-1 mx-1 md:mx-3'>

                  <h3 className='text-sm md:text-base mb-0 '><b>{itm.offertitle}</b></h3>   
                  <p className="text-[0.75rem] sm:text-[0.875rem] text-blacky-light">{itm.offerdescription}</p> 
              </div>
              <div className="md:py-2 mx-2 md:mx-3 flex justify-between items-center">
                  <span className=" font-bold"><span  className="text-[grey] text-xs md:text-base"><strike>{itm.cheapestPrice} &#8377; </strike></span><span className="text-sm md:text-lg">&nbsp;{itm.offerprice} &#8377;</span></span>
                       
              </div>

            </div>
            ))}
          </div>
      )}
        </div>

            <Footer/>

        </div>    
    )
}
export default Offershotels

 