import Navbar from '../../../components/navbar/Navbar'
import Sidenav from '../../../components/sidenav/Sidenav'
import './singleHotel.scss'
import { useLocation, useNavigate } from 'react-router-dom'
import useFetch from '../../../hooks/useFetch'
import Packageimg from '../../../components/assets/package.png'
import axios from 'axios'
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import { Button } from '@mui/material'

import { useEffect, useState } from 'react'
const SingleHotel = () => {
    const [sidenavOpen, setSideNavOpen] = useState(false)
    const handlesidenavOpen = () => {
        setSideNavOpen(!sidenavOpen);
    }
    const axiosInstance = axios.create({
        baseURL: process.env.REACT_APP_API_URL,
    })
    const [hotel, setHotel] = useState([])
    const navigate = useNavigate();
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const {data, loading, error,reFetch } = useFetch(`/hotels/find/${id}`);
    const [clear, setClear] = useState([]);

    useEffect(()=>{
        setHotel(data)
    },[data])
    console.log(data)
    const handlehotelUpdate = (id) => {
        navigate(`/hotels/${id}/update`)
    }
    const handlehotelDelete = async (id) => {
        try{
            await axiosInstance.delete(`/hotels/${id}`);
            navigate('/hotels')
        }catch(err){
            console.log(err);
        }

    }

    const setFeaturesNull=async e=>{
        try{
            const updatedHotel = {
               
                features:clear,
              };
              console.log(updatedHotel)
              await axiosInstance.patch(`/hotels/${id}`, updatedHotel);
              reFetch();
        }
        catch(err){
            console.log(err)
        }

    }

    const setLocationNull=async e=>{
        try{
            const updatedHotel = {
               
                locations:clear,
              };
              console.log(updatedHotel)
              await axiosInstance.patch(`/hotels/${id}`, updatedHotel);
              reFetch();
              
        }
        catch(err){
            console.log(err)
        }

    }

    const setRoomTypesNull=async e=>{
        try{
            const updatedHotel = {
               
                rooms:clear,
              };
              console.log(updatedHotel)
              await axiosInstance.patch(`/hotels/${id}`, updatedHotel);
              reFetch();
              
        }
        catch(err){
            console.log(err)
        }

    }

    const setFacilitiesNull=async e=>{
        try{
            const updatedHotel = {
               
                facilities:clear,
              };
              console.log(updatedHotel)
              await axiosInstance.patch(`/hotels/${id}`, updatedHotel);
              reFetch();
        }
        catch(err){
            console.log(err)
        }

    }






    return(

        <div className="Single-hotel">
            <Navbar onclick={handlesidenavOpen}/>
            <Sidenav isOpen={sidenavOpen}/>
            <div className="singlehotel-container">
               {loading ? ("loading ") : (
                    <div className="singlehotel">
                   
                    <div className="singlehotel-body">
                        <div className="singlehotel-body-left">
                            <img src={hotel.images ? hotel.images[0]: "sample" } />
                            <div className="img-cards">
                                {hotel.images && hotel.images.map((pic, i)=>(
                                    
                                        
                                            <div className='img-card' key={i}><img src={pic} alt="" /></div>

                                        
                                    
                                ))}
                                

                            </div>
                        </div>
                        <div className="singlehotel-body-right">  
                            <div className="content">
                                <div className='content-head'>
                                <h2>{hotel.title}</h2>
                                <h4>{hotel.type}</h4>
                                </div>
                                
                                <div className="flex-container">
                                    <RoomOutlinedIcon /><h3>{hotel.location && hotel.location}</h3>
                                    {/* <RoomOutlinedIcon /><h3>{hotel.location.toUpperCase()}</h3> */}
                                </div>
                                <h3>Vendor id: {hotel.vendorid}</h3>
                                
{/*                                 <h3>Hotel Rating: {hotel.rating}</h3>
 */}
                                {hotel.offers ? 
                                    <div className='offers'>
                                        <span className='offertitle'>{hotel.offertitle}</span>
                                        <div className='offerblock'><span><strike><span className='cheapprice'>{hotel.cheapestPrice} &#8377;</span></strike><span className='offerprice'>{hotel.offerprice} &#8377;</span></span>
                                        </div>
                                    </div>
                                    
                                    :
                                    <div className="flex-container">
                                    <h2>{hotel.cheapestPrice} &#8377;</h2>

                                    </div>}
                            </div>
                            <div className="singlehotel-btngrp">
                            <button className='singlehotel-btn' onClick={() => handlehotelUpdate(id)}>Update Hotel</button>
                            <button className='singlehotel-btn' onClick={() => handlehotelDelete(id)}>Delete Hotel</button>
                        </div>
                        </div>
                        {/* <div><img src={item} /> </div> */}
                    </div>
                   
                       {/* <div className="singlehotel-room-det">
                           
                            <h>Room types</h><div className="room-tag">{hotel.rooms}</div>
                            */} 
                            
                            

                       <div className="singlehotel-body-content">

                            <div className='hoteldesc'>
                                <p>{hotel.description}</p>
                            </div>
                            {hotel.rooms && <div className='rooms'>
                                    {hotel.rooms.length != 0 &&
                                    <>
                                        <h4>Available rooms</h4>
                                        <div  className='flex-tags'>
                                       { hotel.rooms.map((itm)=>(
                                            <span className='tag'>{itm}</span>
                                        ))}</div></>
                                    }
                                </div>}
                                {hotel.facilities && <div >
                                    {hotel.facilities.length != 0 &&
                                    <>
                                        <h4>Facilities</h4>
                                        <div  className='flex-tags'>
                                       { hotel.facilities.map((itm)=>(
                                            <span className='tag'>{itm}</span>
                                        ))}</div> </>
                                    }
                                </div>}
                                {hotel.features && <div>
                                    {hotel.features.length !=0  &&
                                        <>
                                        <h4>Features or attractions</h4>
                                        <div  className='flex-tags'>
                                        {hotel.features.map((itm)=>(
                                            <span className='tag'>{itm}</span>
                                        ))}</div></>
                                    }
                                </div>}
                                {hotel.locations && <div>
                                    {hotel.locations.length !=0  &&
                                        <>
                                        <h4>Locations</h4>
                                        <div  className='flex-tags'>
                                        {hotel.locations.map((itm)=>(
                                            <span className='tag'>{itm}</span>
                                        ))}</div></>
                                    }
                                </div>}

                                



                       </div>
           

                               
                              

                              


                                
                       </div>
                           
               
               )}
            </div>



            
            
        </div>
    )
}


export default SingleHotel
