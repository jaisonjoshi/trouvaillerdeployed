import './bidcard.scss'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { useState } from 'react';
import axios from "axios"
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import villa from '../../Assets/villa.jpg'
const Bidcard = ({bid}) => {
    const axiosInstance = axios.create({
        baseURL: process.env.REACT_APP_API_URL,
    })
    const vendorObj = JSON.parse(window.localStorage.getItem('user'))
    const accepted = bid.accepted
    const test = accepted.filter(obj=> {return obj.vendorid == vendorObj._id})
    /* if(test.length != 0){
        setStatustxt("successfuly accepted")
    } */
    const [statustxt, setStatustxt] = useState(test.length ==0 ?"Accept this bid now": "successfully accepted")

    const updatebid = async (e) => {
        e.preventDefault();
        try{
            const updatedBid = {
                accepted :[...accepted, {vendorname:vendorObj.username, vendorid:vendorObj._id, vendoremail:vendorObj.email,vendorphone:vendorObj.phone}]
                
            }
            console.log(updatedBid);
            await axiosInstance.patch(`/bids/${bid._id}`, updatedBid)
            console.log("bid updated")
            setStatustxt("Successfully accepted")
        }catch(err) {
            console.log(err)
        }
    }
    return(
       <div className="bid-card">
           <div className="bid-header">
                <h2>               You have a bid request in the region<span> {bid.destination}</span></h2>
                <div className='bid-tag'>
                    <img src={villa} /> <h4>Villa</h4>
                </div>
           </div>
           <div className="bid-calendar">
                <CalendarMonthIcon className="calendar-icon"/>
                <span>CheckIn : {bid.checkIn}</span>
                <span>CheckOut : {bid.checkOut}</span>
           </div>
           <div className="bid-facilities">
               <h2>Required facilities:</h2>
               <div className="facilities">
                   <span className="facilities-itm">{bid.accomodation} Guests</span><span className="facilities-itm">{bid.roomCount} Rooms</span><span className="facilities-itm">{bid.ac}</span><span className="facilities-itm">{bid.categories}</span>
               </div>
           </div>
           <div className="bid-price">
               <h2>Amount for which bid is made :<br></br> <span className='bid-price-tag'>{bid.maxAmount} /-</span></h2>
           </div>
           <div className="bid-footer">
               <h2>You can accept this bid by clicking the Accept now button below. Once you are accepted, our agent will connect with you when the user completes the booking.</h2><button onClick={updatebid}>{statustxt}</button>
           </div>
       </div>
    )
}


export default Bidcard