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
    const [sidenavOpen, setSideNavOpen] = useState(true)
    const handlesidenavOpen = () => {
        setSideNavOpen(!sidenavOpen);
    }
    const checkboxclosed =  document.querySelector('#closed');
    
   const navigate = useNavigate();
   const [bid, setbid] = useState({})
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const {data, loading, error } = useFetch(`/bids/${id}`)
    useEffect(()=>{
        setbid(data)
    },[data])
    useEffect(()=>{
        if(bid.closed){
            checkboxclosed.checked = true;
        }
    }, [bid])
    
    //axios instance initialisation
    const axiosInstance = axios.create({
        baseURL: process.env.REACT_APP_API_URL,
    })

    const handleclosedchange = async () => {
        try{
        if(checkboxclosed.checked == true){
            const updatebid = {
                closed :true
            }
            await axiosInstance.patch(`/bids/${bid._id}`, updatebid)
            


        }
        else{
            const updatebid = {
                closed :false
            }
            await axiosInstance.patch(`/bids/${bid._id}`, updatebid)
        }
    }
    catch(error){
        if(error.response){
            if (error.response.status==400) {  
                
                alert('Sorry, no such hotel found.');
              }
              if (error.response.status==404) {  
                
                alert('Sorry, unable to find hotel!');
              }
            }
              else if (error.request) {  
                    alert('Network error! Please try again later');
                }
            else{
                alert(error.message);
            }

    }

       
    }
   
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
                        <div className="head"><LocationOnOutlinedIcon className='icon'/> <h3>{bid.destination}</h3></div>
                    </div>
                   
                </div>
                <div className="bid-body">
                    <div className="date-con">
                        <div className="icon">
                            <DateRangeOutlinedIcon />
                        </div>
                        <div className="checkin">
                            <p>Check In</p>
                            <h4>{bid.checkIn}</h4>
                        </div>
                        <div className="checkout">
                        <p>Check Out</p>
                            <h4>{bid.checkOut}</h4>
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
                   <h3>Maximum price quoted : {<CurrencyRupeeIcon className='icn'  style={{ height: 19, width: 25, }}/>}<span>{bid.maxAmount}/- </span> </h3>
                   
                </div>
                </div>
                <div className="bid-card-right">
                    <h3>User Details</h3>
                    <div className="user-details">
                           
                                   <table >
                                   <tr>
                                       <td>
                                           <p>User Name</p>
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
           
                    <h3>Currently Accepted by {bid.accepted ? bid.accepted.length : "0"} vendors</h3>
                    {
                        bid.accepted && bid.accepted.map((itm, i)=> (
                            <div className="hotel-bid-card" key={i}>
                                <div className="hotel-card-left">
                                    <h3>{itm.vendorname}</h3><br></br>
                                    <p>{itm.vendorid}</p>
                                </div>
                                <div className="hotel-card-right">
                                    <p>{itm.vendoremail}</p><br></br>
                                    <p>{itm.vendorphone}</p>
                                </div>
                            </div>
                        ))
                    }
                   
               
                    </div>

                    <div className='my-2 border rounded-[10px] px-4 py-2'>
                        <h3>Status of the bid</h3>
                        <div className='flex gap-2 items-center'>
                            <label> Mark this bid as closed</label>
                            <input type="checkbox" id="closed" onChange={ handleclosedchange}/>
                        </div>
                    </div>
                </div>

               </div>
            </div>



            
            
      
    )
}


export default SingleBid