import React from 'react'
import Navbar from '../components/navbar/navbar';
import Offer from './offer';
import Footer from '../components/Footer/Footer';

import { Link } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';


const Offershotels = () => {

    const {data,loading, error} = useFetch("/hotels?offers=true");
    
    return (
        <div className="">
            
        <Navbar />
        <div className="mt-36 flex justify-center">
        <div className=" w-[80%] sm:w-[60%] md:w-[50%] flex justify-center font-bold rounded-[1000px] border border-[#00b771]">
          <Link
            to="/offers"
            className="w-[50%] flex justify-center items-center px-4 py-2 rounded-l-[1000px]"
          >
            <span>Packages</span>
          </Link>
          <div
            className="w-[50%] text-whiteglow flex justify-center items-center px-8 py-2 bg-[#00b771] rounded-r-[1000px]"
            to="/hotels"
          >
            Hotels
          </div>
        </div>
      </div>
        <div className="flex flex-col items-center justify-center px-8 , mt-16 md:px-20 lg:px-40 gap-8 pb-8">
                <h1 style={{fontSize:"32px"}} className='text-center' >Trending Offers</h1>
                <p className='text-center text-blacky-light text-md md:text-lg'>Grab out the best Offers before the season ends! Clock's ticking, time is running and the offers are gonna leave soon..!Find the best packages of this season in the offer prices and enjoy a pocket friendly vacation.  </p>
        </div>
       <div className='flex justify-start flex-wrap px-4 md:px-12 lg:px-16 gap-[6%] pb-20'>
            {data && data.map((itm, i)=> (
                <div key={i} className=" w-[47%] lg:w-[30%] card-shadow ">
                <div className="relative w-full">
                    <div className="absolute top-0 left-0 right-0 bottom-0 z-40 rounded bg-gradient-to-b from-transparent via-transparent to-black"></div>
                    <img className='w-[100%] aspect-video skeleton rounded-t-lg' src={itm.images[0]} alt="" />
                    <h3 className='text-md md:text-xl font-bold z-50 text-whiteglow px-1 md:px-3  absolute bottom-[3px] md:bottom-[10px]'>{itm.title}</h3>
                </div>
                <div className='py-1 mx-1 md:mx-3'>

                    <h3 className='text-sm md:text-xl mb-0 '><b>{itm.offertitle}</b></h3>   
                    <p className="text-xs md:text-md text-blacky-light">{itm.offerdescription}</p> 
                </div>
                <div className="md:py-2 mx-2 md:mx-3 flex justify-between items-center">
                    <span className=" font-bold"><span  className="text-[grey] text-xs md:text-md"><strike>{itm.cheapestPrice} &#8377; </strike></span><span className="text-sm md:text-2xl">&nbsp;{itm.offerprice} &#8377;</span></span>
                         
                </div>

              </div>
            ))}

       </div>
        
    
    
    
    
    
    
    
     <Footer/>

        </div>    
    )
}
export default Offershotels

 
