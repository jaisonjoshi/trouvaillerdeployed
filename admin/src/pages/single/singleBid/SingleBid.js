import Navbar from '../../../components/navbar/Navbar'
import Sidenav from '../../../components/sidenav/Sidenav'
import './singleBid.scss'
import { useLocation, useNavigate } from 'react-router-dom'
import useFetch from '../../../hooks/useFetch'
import axios from 'axios'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';

import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { useEffect, useState } from 'react'
import { Table } from '@mui/material'
const SingleBid = () => {
    const [sidenavOpen, setSideNavOpen] = useState(false)
    const handlesidenavOpen = () => {
        setSideNavOpen(!sidenavOpen);
    }
    
   const navigate = useNavigate();
   const [bid, setbid] = useState({})
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const {data, loading, error } = useFetch(`/bids/${id}`)
    useEffect(()=>{
        setbid(data)
    })
   console.log(bid)
   
    return(

        <div className="Single-package">
            <Navbar onclick={handlesidenavOpen}/>
            <Sidenav isOpen={sidenavOpen}/>

            <div className="singleBid-container">
               <h1>Bid Request from {bid.user} ID: {bid._id}</h1>
                <div className="bid-card">
                <div className="bid-card-con">
                <div className="bid-card-left">
                <div className="bid-header">
                    <div className="bid-header-left">
                        <div className="head"><LocationOnOutlinedIcon className='icon'/> <h2>{bid.destination}</h2></div>
                    </div>
                   
                </div>
                <div className="bid-body">
                    <div className="date-con">
                        <div className="icon">
                            <DateRangeOutlinedIcon />
                        </div>
                        <div className="checkin">
                            <p>Check In</p>
                            <h3>{bid.checkIn}</h3>
                        </div>
                        <div className="checkout">
                        <p>Check Out</p>
                            <h3>{bid.checkOut}</h3>
                        </div>
                    </div>
                </div>
                <div className="bid-footer">
                    <span className="footer-card">
                        {bid.accomodation} guests
                    </span>
                    <span className="footer-card">
                       {bid.roomCount} rooms
                    </span>
                    <span className="footer-card">
                       {bid.categories}
                    </span>
                   
                </div>
                <div className="bid-footer-2">
                   <h2>Maximum price quoted : {<CurrencyRupeeIcon className='icn'/>} {bid.maxAmount} /-</h2>
                   
                </div>
                </div>
                <div className="bid-card-right">
                    <h2>User Details</h2>
                    <div className="user-details">
                           
                                   <table >
                                   <tr>
                                       <td>
                                           User Name
                                       </td>
                                       <td>
                                           : {bid.username} 
                                       </td>
                                   </tr>
                                   <tr>
                                       <td>User id</td>
                                       <td>: {bid.userid}</td>
                                   </tr>
                                   <tr>
                                       <td>
                                           User Email
                                       </td>
                                       <td>
                                           : {bid.useremail}
                                       </td>
                                   </tr>
                                   <tr>
                                       <td>
                                           Phone 
                                       </td>
                                       <td>
                                           : {bid.userphone}
                                       </td>
                                   </tr>
                              </table>
                      
                    </div>
                </div>
                
                
            </div>
            <div className="bid-card-footer">
           
                    <h3>Cuuurently Accepted by {bid.accepted ? bid.accepted.length : "0"} vendors</h3>
                    {
                        bid.accepted && bid.accepted.map((itm, i)=> (
                            <div className="hotel-bid-card" key={i}>
                                <div className="hotel-card-left">
                                    <h3>{itm.vendorname}</h3><br></br>
                                    <h4>{itm.vendorid}</h4>
                                </div>
                                <div className="hotel-card-right">
                                    <h4>{itm.vendoremail}</h4><br></br>
                                    <h4>{itm.vendorphone}</h4>
                                </div>
                            </div>
                        ))
                    }
                   
               
                    </div>
                </div>

               </div>
            </div>



            
            
      
    )
}


export default SingleBid