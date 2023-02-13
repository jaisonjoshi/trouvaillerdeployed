import './bidcard.scss'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { useState } from 'react';
import axios from "axios"
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import villa from '../../Assets/villa.jpg'
import {useContext, useEffect} from 'react'
import { AuthContext } from '../../components/context/AuthContext'
import { Select, MenuItem, FormHelperText, FormControl, InputLabel, Chip } from '@material-ui/core';
import useFetch from '../../hooks/useFetch';
const Bidcard = ({bid}) => {
    const axiosInstance = axios.create({
        baseURL: process.env.REACT_APP_API_URL,
    })
    const { user, dispatch } = useContext(AuthContext);

    const accepted = bid.accepted
    const acceptedCount = bid.acceptedCount
    const test = accepted.filter(obj=> {return obj.vendorid == user._id})
    /* if(test.length != 0){
        setStatustxt("successfuly accepted")
    } */
    const [statustxt, setStatustxt] = useState(test.length ==0 ?"Accept this bid now": "Successfully accepted")
    const [selected, setSelected] = useState([]);
    const selectionChangeHandler = (event) => {
        setSelected(event.target.value);
    };
    const updatebid = async (e) => {
        e.preventDefault();
        if(selected != 0 && statustxt !== "Successfully accepted"){
            try{
                const updatedBid = {
                    accepted :[...accepted, {vendorname:user.username, vendorid:user._id, vendoremail:user.email,vendorphone:user.phone, hotels: selected}],
                    acceptedCount: (acceptedCount+ selected.length),
                    userphone: bid.userphone
                    
                }
                console.log(updatedBid);
                await axiosInstance.patch(`/bids/${bid._id}`, updatedBid)
                console.log("bid updated")
                setStatustxt("Successfully accepted")
                document.getElementById("myBtn").disabled = true;
    
            }catch(err) {
                console.log(err)
            }
        }
        else if(selected == 0 ){
            alert("Please select any hotels before accepting the bid")
        }
        else if(statustxt ===  "Successfully accepted"){
            alert("You have already accepted this bid")
        }
    }
    const [hotels, setVendorhotels] = useState([])

    const {data, loading,error } = useFetch(`/hotels?vendorid=${user._id}`)
    useEffect(()=>{
        setVendorhotels(data)
    }, [data])
    console.log(hotels)
    return(
       <div className="bid-card mb-8">
           <div className="bid-header">
                <h3>               You have a bid request in the region<span> {bid.destination}</span></h3>
                
           </div>
           <div className="bid-calendar">
                <CalendarMonthIcon className="calendar-icon"/>
                <span>CheckIn : {bid.checkIn}</span>
                <span>CheckOut : {bid.checkOut}</span>
           </div>
           <div className="bid-facilities">
               <p>Required facilities:</p>
               <div className="facilities">
                   <span className="facilities-itm">{bid.accomodation} Guests</span><span className="facilities-itm">{bid.roomCount} Rooms</span><span className="facilities-itm">{bid.ac}</span><span className="facilities-itm">{bid.categories}</span>
               </div>
           </div>
           <div className="bid-price">
               <p>Amount for which bid is made :<br></br> <span className='bid-price-tag'>{bid.maxAmount} /-</span></p>
           </div>
           <div className="bid-footer">
               <p>You can accept this bid by clicking the Accept now button below. Once you are accepted, our agent will connect with you when the user completes the booking.</p>
               <label htmlFor="">Choose hotels</label>
               <Select
                    multiple
                    value={selected}
                    onChange={selectionChangeHandler}
                    className="min-w-[100px] mx-8"
                    renderValue={(selected) => (
                    <div>
                        {selected.map((value) => (
                        <Chip key={value} label={value} />
                        ))}
                    </div>
                    )}
                >
                    {
                        hotels && hotels.map((hotel)=> (
                            <MenuItem value={hotel._id}>{hotel.title}</MenuItem>

                        ))
                    }
                   
                </Select>
                <button id="myBtn" onClick={updatebid}>{statustxt}</button>


           </div>
       </div>
    )
}


export default Bidcard