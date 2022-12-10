
import './singleHotel.scss'
import { useLocation, useNavigate } from 'react-router-dom'
import useFecth from '../../../hooks/useFetch'
import axios from 'axios'
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import { useEffect, useState } from 'react'
import Header from '../../../components/header/Header';
import hotelimg from "../../../Assets/hotel.jpg"
import Footer from '../../../components/Footer/Footer';
const SingleHotel = () => {
    const axiosInstance = axios.create({
        baseURL: process.env.REACT_APP_API_URL,
    })
    const [hotel, setHotel] = useState([])
    const navigate = useNavigate();
    const location = useLocation();
    const id = location.pathname.split("/")[3];
    const {data, loading, error } = useFecth(`/hotels/${id}`);
    useEffect(()=>{
        setHotel(data)
    },[data])
    
    const handlehotelUpdate = (id) => {
        navigate(`/vendor/hotel/${id}/update`)
    }
    const handlehotelDelete = async (id) => {
        try{
            await axiosInstance.delete(`/hotels/${id}`);
            navigate('/hotels')
        }catch(err){
            console.log(err);
        }

    }
    return(

        <div className="Single-hotel">
          <Header />

            <div className="singlehotel-container">
               {loading ? ("loading ") : (
                    <div className="singlehotel">
                   
                    <div className="singlehotel-body">
                        <div className="singlehotel-body-left">
                            <img src={hotelimg   } />
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
                                <h1 className='p-0'>{hotel.title}</h1>
                                <div className="flex-container">
                                    <RoomOutlinedIcon /><h3>Munnar</h3>
                                </div>
                                <div className="flex-container">
                                <CurrencyRupeeOutlinedIcon /><h2>7000 /-</h2>

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
                            */} <h>Room types</h>
                                <div>

                               {hotel.rooms && hotel.rooms.map((room) => (<li>{room}</li>))}
                                </div>

                               <div className="singlehotel-body-content">
                                
                                 <div> <h5>Hotel details</h5><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, repellat dolor labore, voluptates earum, tenetur cum et porro est commodi aperiam minima mollitia perferendis vitae dolore quas ducimus magnam illo!</p></div>
                       
                              </div>
                       </div>
                           
               
               )}
            </div>



            <Footer />
            
        </div>
    )
}


export default SingleHotel
