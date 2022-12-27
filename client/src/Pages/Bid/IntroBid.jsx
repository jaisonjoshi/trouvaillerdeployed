

import React, {useState, useEffect} from 'react'
import FAQ from '../components/FAQ/FAQ'
import Footer from '../components/Footer/Footer'
import { Link } from "react-router-dom";
import NavbarTest from '../components/navbar/navbar';
import { AuthContext } from '../components/context/AuthContext';
import { useContext } from 'react';

const IntroBid = () => {
    const [anim, setAnim] = useState("hide")
    const { user } = useContext(AuthContext);
    useEffect(()=>{
        window.addEventListener('load', setAnim("show"))

    }, [])
    return (
        <div className={`animationset ${anim}`}>

            <NavbarTest />
            {/* Header */}
            <div className="bg-green-slop bg-no-repeat w-full bg-cover text-left relative mt-32" >
                <div className='sm:w-1/2 p-10'>
                    <h1 className='text-3xl font-bold'>What is Bid for today? </h1>
                    <p className='pt-5 text-blacky-light text-sm md:text-[17px]'>Every traveller’s dreams meets reality when you can reach your destination without letting your pockets go empty. Now place bids for hotel rates at your prices and decide to travel hazel free. To simply put it on, each day we let you  bid for  hotel rooms using our 'bid for today' feature and at the end of the day your bid status will be updated on our site, letting you know whether your bid is accepted or not. For every accepted  bid you'll get to occupy those hotel rooms at the rates you've bid for. </p>
                    {user?(
                    <button className='bg-blacky-dark text-whiteglow text-lg font-bold p-5 rounded w-full mt-4 sm:w-1/2'><Link className="" to="/bidform">Bid Now</Link></button>
                    ):(
                        <button className='bg-blacky-dark text-whiteglow text-lg font-bold p-5 rounded w-full mt-4 sm:w-1/2'><Link className="" to="/login">Bid Now</Link></button>
                    )}
                </div>
            </div>

            {/* How to get started block */}
            <div className='p-10 text-center'>
                <h1 className='pb-5 text-center font-bold text-2xl'>How to get started? </h1>
                <div className='sm:flex sm:gap-x-4'>
                    <div className='mb-5 relative px-16  bg-evergreen w-full rounded text-center grid h-36 place-items-center rounded-br-lg shadow-lg shadow-graydust-normal'>
                        <h1 className='text-lg font-semibold'>Fill out the bid form</h1>
                        <div className='bg-whiteglow text-2xl font-extrabold absolute top-0 left-0 rounded-br-lg p-5 shadow-2xl shadow-graydust-medium'>1</div>
                    </div>

                    <div className='mb-5 px-16 relative  bg-evergreen w-full rounded text-center grid h-36 place-items-center rounded-br-lg shadow-lg shadow-graydust-normal'>
                        <h1 className='text-lg font-semibold'>Check your profile for bid status</h1>
                        <div className='bg-whiteglow text-2xl font-extrabold absolute top-0 left-0 rounded-br-lg p-5 shadow-2xl shadow-graydust-medium'>2</div>
                    </div>

                    <div className='relative px-16 bg-evergreen w-full rounded text-center grid h-36 place-items-center rounded-br-lg shadow-lg shadow-graydust-normal'>
                        <h1 className='text-lg font-semibold'>Enjoy the best hotel prices</h1>
                        <div className='bg-whiteglow text-2xl font-extrabold absolute top-0 left-0 rounded-br-lg p-5 shadow-2xl shadow-graydust-medium'>3</div>
                    </div>
                </div>

            </div>

            {/* FAQ block */}
            <div className='px-10 sm:px-32 bg-graydust-extralight'>
                <h1 className='pt-6 text-center font-bold text-2xl'>Frequently asked questions</h1>
                <div className='py-6'>
                    <FAQ />
                    <FAQ />
                    <FAQ />
                    <FAQ />
                    <FAQ />
                    <FAQ />
                  
                </div>
            </div>
            <Footer/>
        </div>
    )
}
                    

  


export default IntroBid