import React from 'react'
import Navbar from '../components/navbar/navbar';
import Offer from '../offers/offer';
import Footer from '../components/Footer/Footer';




const Offers = () => {
    
    return (
        <div className="">
            
        <Navbar />
        <div className="flex flex-col items-center justify-center px-8 md:px-20 lg:px-40 gap-8 pb-8">
                <h1 style={{fontSize:"32px"}} className='text-center mt-[14%]' >Trending Offers</h1>
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

 
