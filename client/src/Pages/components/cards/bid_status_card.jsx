import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import { Link } from 'react-router-dom';

const BidStatusCard = ({bid}) => {
    return (
        <div>
            <div className='shadow-md shadow-graydust-normal p-5 my-5 rounded-lg'>
                <div className='flex justify-between flex-wrap'>
                    <h1 className='text-2xl font-bold text-blacky-light'><span className='text-3xl font-light pr-2'><FontAwesomeIcon icon={solid('location-dot')} /></span>{bid.destination}</h1>
                    <div className='bg-status-150 p-2 rounded-full border-graydust-normal'><h3><span className='text-status-100'><FontAwesomeIcon icon={solid('circle-check')} /></span> Accepted by {bid.accepted.length}</h3> </div>
                    {/* Code for other status indicators */}
                </div>
                <div className='flex py-2'>
                    <FontAwesomeIcon className='text-xl text-blacky-light' icon={solid('calendar-week')} />
                    <div className='p-2'>
                        <p className='text-graydust-normal'>Check In</p>
                        <p>{bid.checkIn}</p>
                    </div>
                    <div className='border-l-2 p-2 border-graydust-normal'>
                        <p className='text-graydust-normal '>Check Out</p>
                        <p>{bid.checkOut}</p>
                    </div>
                </div>
                <div className='flex flex-wrap'>
                    <div className='border-graydust-normal border p-2 mt-2 rounded-lg mr-2 text-blacky-light'><span><FontAwesomeIcon icon={solid('user-group')} /></span> {bid.accomodation} Guests</div>
                    <div className='border-graydust-normal border p-2 mt-2 rounded-lg mr-2 text-blacky-light'><span><FontAwesomeIcon icon={solid('person-shelter')} /></span> {bid.roomCount} Room</div>
                    <div className='border-graydust-normal border p-2 mt-2 rounded-lg mr-2 text-blacky-light'>{bid.ac}</div>
                    <div className='border-graydust-normal border p-2 mt-2 rounded-lg text-blacky-light'>Max Amount you bided : {bid.maxAmount}</div>
                </div>
                <hr className='mt-5 text-graydust-medium' />
                <details>
                <summary>
                    <span className='pl-3'>
                    Your Bid is accepted by {bid.accepted.length} hotels
                    </span>
                </summary>
                <div>
                    {bid.accepted && bid.accepted.map((obj,i)=>(
                        <div className="acceptedHotel p-8 border border-grey my-2 flex justify-between">
                            <h1 className='text-2xl'>{obj.vendorname}</h1>
                            <div className='flex gap-3'><Link className="bg-evergreen border border-none px-4 py-2">View hotel</Link><Link className='bg-evergreen border border-none px-4 py-2'>Complete booking</Link></div>
                        </div>
                    ))}
                </div>
            </details>
            </div>
        </div>
    );
};



export default BidStatusCard;
