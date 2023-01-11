import React from 'react'
import Navbar from '../components/navbar/navbar';
import Offer from '../offers/offer';
import Footer from '../components/Footer/Footer';

import { Link } from 'react-router-dom';


const Offers = () => {
    
    return (
        <div className="">
            
        <Navbar />
        <div className="mt-36 flex justify-center  ">
                <div className=' w-[80%] sm:w-[60%] md:w-[50%] flex justify-center font-bold rounded-[1000px] border border-[#00b771]'>
                    <div className='w-[50%] text-whiteglow flex justify-center items-center px-8 py-2 bg-[#00b771] rounded-l-[1000px]'>
                        <span>Packages</span>
                    </div>
                    <Link  className='w-[50%] flex justify-center items-center px-4 py-2 rounded-r-[1000px]' to="/offershotels">Hotels</Link>
                </div>
            </div>
        <div className="flex flex-col items-center justify-center mt-8 px-8 md:px-20 lg:px-40 gap-8 pb-8">
                <h1 style={{fontSize:"32px"}} className='text-center' >Trending Offers</h1>
                <p className='text-center text-blacky-light text-md md:text-lg'>Grab out the best Offers before the season ends! Clock's ticking, time is running and the offers are gonna leave soon..!Find the best packages of this season in the offer prices and enjoy a pocket friendly vacation.  </p>
        </div>
        <div className="grid  sm:grid-cols-2 md:grid-cols-3 gap-30 m-11">
                <Offer />
                
                
            </div>
            <Footer/>

        </div>    
    )
}
export default Offers

 
