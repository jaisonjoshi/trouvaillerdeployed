import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import useFetch from '../../hooks/useFetch';
import BidStatusCard from '../components/cards/bid_status_card';
import Footer from '../components/Footer/Footer'

import Navbar from '../components/navbar/navbar'
const BidStatus = () => {
    
    const [anim, setAnim] = useState("hide")
    useEffect(()=>{
        window.addEventListener('load', setAnim("show"))

    }, [])
    const userobj = JSON.parse(window.localStorage.getItem('user'))
    const userid = userobj._id;
    const [bid,setbid] = useState([])
    const {data, loading, error} = useFetch(`/bids?userid=${userid}`);
    useEffect(()=>{
        setbid(data);
    },[data])
    console.log(data)
    return (
        <div className={` animationset ${anim}`}>
            <Navbar />
            <div className='mx-8 md:mx-16  lg:mx-28  xl:mx-40 pb-16 mt-20 md:mt-32'>
                <h1 className='text-2xl font-bold text-blacky-bright py-7'>Bid Status</h1>
                {bid && bid.map((obj,i)=>(
                    <BidStatusCard key={i} bid={obj}/>
                ))}
                
            </div>
            <Footer></Footer>
            
        </div>
    );
};

export default BidStatus;