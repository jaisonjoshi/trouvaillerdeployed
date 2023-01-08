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
                                {/* <div className='img-card'><img src={data.images[1]} alt="" /></div>
                                <div className='img-card'><img src={data.images[2]} alt="" /></div>
                                <div className='img-card'><img src={data.images[3]} alt="" /></div>
                                <div className='img-card'><img src={data.images[4]} alt="" />
                                </div> */}

                            </div>
                        </div>
                        <div className="singlehotel-body-right">  
                            <div className="content">
                                <h1>{hotel.title}</h1>
                                <h3>{hotel.type && hotel.type.toUpperCase()}</h3>
                                {/* <h3>{hotel.type.toUpperCase()}</h3> */}
                                
                                <div className="flex-container">
                                    <RoomOutlinedIcon /><h3>{hotel.location && hotel.location.toUpperCase()}</h3>
                                    {/* <RoomOutlinedIcon /><h3>{hotel.location.toUpperCase()}</h3> */}
                                </div>
                                
                                <h3>Hotel Rating: {hotel.rating}</h3>

                                <div className="flex-container">
                                <CurrencyRupeeOutlinedIcon /><h2>{hotel.cheapestPrice} /-</h2>

                                </div>
                            </div>
                            <div className="singlehotel-btngrp">
                            <button className='singlehotel-btn' onClick={() => handlehotelUpdate(id)}>Update Hotel</button>
                            <button className='singlehotel-btn' onClick={() => handlehotelDelete(id)}>Delete Hotel</button>
                        </div>
                        </div>

                    </div>
                   
                       {/* <div className="singlehotel-room-det">
                           
                            <h>Room types</h><div className="room-tag">{hotel.rooms}</div>
                            */} 
                            
                            <div>
                                <h3>Hotel Location Tags<button onClick={setLocationNull}>Clear All</button></h3>
                                
                                <div>
                                
                                {hotel.locations && hotel.locations.map((obj)=> (
                                    <li >
                                        <p>{obj}</p>
                                      
                                    </li>
                                ))}
                                </div>
                                </div>

                                    <div class="singlehotel-body-content">
                               <div> <h3>Hotel Address</h3>
                                <p>{hotel.address}</p>
                                </div>
                                    </div>
                            <h3>Room types<button onClick={setRoomTypesNull}>Clear All</button></h3>
                                <div>

                               {hotel.rooms && hotel.rooms.map((room) => (<li>{room}</li>))}
                                </div>

                               <div className="singlehotel-body-content">
                                
                                 <div> <h3>Hotel details</h3><p>{hotel.description}</p></div>
                       
                              </div>

                              

                              {/* <div className="content"> */}
                                <h3>Facilities<button onClick={setFacilitiesNull}>Clear All</button></h3>
                                
                                <div>
                                
                                {hotel.facilities && hotel.facilities.map((obj)=> (
                                    <div >
                                        <p>{obj}</p>
                                      
                                    </div>
                                ))}
                                </div>
                                {/* </div> */}

                                <div class= 'mt-50'>
                                <h3>Features<button onClick={setFeaturesNull}>Clear All</button></h3>
                                
                                <div>
                                
                                {hotel.features && hotel.features.map((obj)=> (
                                    <li >
                                        <p>{obj}</p>
                                      
                                    </li>
                                ))}
                                </div>
                                </div>


                                
                       </div>
                           
               
               )}
            </div>



            
            
        </div>
    )
}


export default SingleHotel
