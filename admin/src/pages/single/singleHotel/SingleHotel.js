import Navbar from '../../../components/navbar/Navbar'
import Sidenav from '../../../components/sidenav/Sidenav'
import './singleHotel.scss'
import { useLocation, useNavigate } from 'react-router-dom'
import useFecth from '../../../hooks/useFetch'
import Packageimg from '../../../components/assets/package.png'
import axios from 'axios'
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import { useEffect, useState } from 'react'
const SingleHotel = () => {
    /* const axiosInstance = axios.create({
        baseURL: process.env.REACT_APP_API_URL,
    }) */
    const [hotel, setHotel] = useState([])
    const navigate = useNavigate();
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const {data, loading, error } = useFecth(`/hotels/${id}`);
    useEffect(()=>{
        setHotel(data)
    },[data])
    
    const handlehotelUpdate = (id) => {
        navigate(`/hotels/${id}/update`)
    }
    const handlehotelDelete = async (id) => {
        try{
            await axios.delete(`/hotels/${id}`);
            navigate('/hotels')
        }catch(err){
            console.log(err);
        }

    }
    return(

        <div className="Single-hotel">
            <Navbar />
            <Sidenav />

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
                                <div className="flex-container">
                                    <RoomOutlinedIcon /><h3>{hotel.location}</h3>
                                </div>
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
                    <div className="singlehotel-body-content">
                        <p>{hotel.description}</p>
                    </div>
                </div>
               )}
            </div>



            
            
        </div>
    )
}


export default SingleHotel