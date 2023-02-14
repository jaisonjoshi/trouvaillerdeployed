import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router';

const BidStatusCard = ({bid}) => {
    const axiosInstance = axios.create({
        baseURL: process.env.REACT_APP_API_URL,
    })
    const navigate = useNavigate();

    const handlewithdraw = async (id) => {
        try{
            await axiosInstance.delete(`/bids/${id}`);
            navigate('/')
            
        }catch(err){
            console.log(err);
        }
    }
    
    return (
        <div>
            <div className='shadow-md shadow-gra2remydust-normal p-5 pb-8 my-5 rounded-lg'>
                <div className='flex justify-between flex-wrap'>
                    <h1 className='text-xl font-bold text-blacky-light mr-[50px] md:mr-[0] flex items-center pb-4 md:pb-0'><span className='text-3xl font-light pr-2'><FontAwesomeIcon icon={solid('location-dot')} /></span>{bid.destination}</h1>
                    <div className='bg-status-150 p-2 rounded-full border-graydust-normal'><h3><span className='text-status-100'><FontAwesomeIcon icon={solid('circle-check')} /></span> Accepted by {bid.acceptedCount}</h3> </div>
                    {/* Code for other status indicators */}
                </div>
                <div className='flex items-center py-2'>
                    <FontAwesomeIcon className='text-xl text-blacky-light' icon={solid('calendar-week')} />
                    <div className='p-2'>
                        <p className='text-graydust-normal'>Check In</p>
                        <p className='text-blacky-light'>{bid.checkIn}</p>
                    </div>
                    <div className='border-l-2 p-2 border-graydust-normal'>
                        <p className='text-graydust-normal '>Check Out</p>
                        <p className='text-blacky-light'>{bid.checkOut}</p>
                    </div>
                </div>
                <div className='flex flex-wrap'>
                    <div className='border-graydust-normal border p-2 mt-2 rounded-lg mr-2 text-blacky-light text-sm md:text-base'><span ><FontAwesomeIcon icon={solid('user-group')} /></span> {bid.accomodation} Guests</div>
                    <div className='border-graydust-normal border p-2 mt-2 rounded-lg mr-2 text-blacky-light text-sm md:text-base'><span  ><FontAwesomeIcon icon={solid('person-shelter')} /></span> {bid.roomCount} Room</div>
                    <div className='border-graydust-normal border p-2 mt-2 rounded-lg mr-2 text-blacky-light text-sm md:text-base'>{bid.ac}</div>
                    <div className='border-graydust-normal border p-2 mt-2 rounded-lg text-blacky-light '>Max Amount you bided : {bid.maxAmount}</div>
                </div>
                <div className='flex justify-end '>
                    {bid.acceptedCount === 0 &&                     <button className='px-4 py-1 bg-evergreen rounded text-[white]' onClick={()=> handlewithdraw(bid._id)}>Withdraw your bid</button>
}
                </div>
                <hr className='mt-5 text-graydust-medium' />
                <details>
                <summary>
                    <span className='pl-3 text-blacky-light text-sm md:text-base'>
                    Your Bid is accepted by {bid.acceptedCount} hotels 
                    </span>
                </summary>
                <div>
                    {bid.accepted && bid.accepted.map((obj)=>{
                        
                        return obj.hotels && obj.hotels.map((o, i)=> (

                            <div className="acceptedHotel p-4 md:p-8 border border-grey my-2 flex-row justify-between">
                                <div>
                                <h2 className='text-lg text-[black] md:text-2xl'><b> Hotel Id: {o}</b></h2>
                                <p className='text-blacky-light'>Click the view hotel button to explore this hotel and its features</p>
                                
                                </div>
                                <div className='flex pt-4 gap-3'><Link to={`/list/hotel/${o}`} className="bg-evergreen border rounded border-none px-4 py-2">View hotel</Link><a href={"https://wa.me/918129177335?text=" + "Hi, My bid in the region "+ bid.destination + " has been accepted by the hotel " +  o + " and i wish to confirm the booking for the same."} className='bg-evergreen rounded border border-none px-4 py-2'>Complete booking</a></div>
                             </div>

                        ))

                    })}
                </div>
            </details>
            </div>
        </div>
    );
};



export default BidStatusCard;
