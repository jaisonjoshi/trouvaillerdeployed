
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
import BarLoader from "react-spinners/BarLoader";



const SingleHotel = () => {
    const axiosInstance = axios.create({
        baseURL: process.env.REACT_APP_API_URL,
    })
    const [hotel, setHotel] = useState([])
    const navigate = useNavigate();
    const location = useLocation();
    const id = location.pathname.split("/")[3];
    const {data, loading, error } = useFecth(`/hotels/find/${id}`);
    useEffect(()=>{
        setHotel(data)
    },[data])
    
    const handlehotelUpdate = (id) => {
        navigate(`/vendor/hotel/${id}/update`)
    }
    const handlehotelDelete = async (id) => {
        try{
            await axiosInstance.delete(`/hotels/${id}`);
            navigate('/vendor')
        }catch(err){
            console.log(err);
        }

    }
  const [userobj, setUserobj] = useState({})

    return(

        <div className="Single-hotel">
      <Header setUserobj={setUserobj}/>

            <div className="singlehotel-container">
               {loading ?  
               
               (
                <div className='loading-div'>
                <BarLoader
     
     
                    color={'#32fca7'}
                    loading={loading}
     
                    size={15}
     
                    />
              </div>
             )
               
               
               : (
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
                                <div className='flex justify-start gap-[30px] items-center '>
                                <h1 className='p-0'>{hotel.title}</h1>
                                {hotel.type &&
                                                                <span className='px-4 py-1 rounded-full bg-evergreen'>{hotel.type}</span>
                                                            }
                                </div>
                                <div className="flex-container">
                                    <RoomOutlinedIcon /><p>{hotel.location  }</p>
                                </div>
                               
                                {
                                    hotel.offers ? 
                                    <div>
                                    <span className='p-1 bg-[#f8d2d2] text-[red]'>{hotel.offertitle}</span>
                                    <p className='mt-2'>{hotel.offerdescription}</p>
                                    <span ><strike className='text-[grey]'>{hotel.cheapestPrice} &#8377;</strike><span className='text-2xl ml-3'><b>{hotel.offerprice} &#8377;</b></span></span>
                                    </div>  
                                    :

                                    <div className="flex-container">
                                        <CurrencyRupeeOutlinedIcon /><h3>{hotel.cheapestPrice} /-</h3>

                                    </div>
                                }
                            </div>
                            <div className="singlehotel-btngrp">
                            <button className='singlehotel-btn' onClick={() => handlehotelUpdate(id)}>Update Hotel</button>
                            <button className='singlehotel-btn' onClick={() => handlehotelDelete(id)}>Delete Hotel</button>
                        </div>
                        </div>

                    </div>
                   
                    {hotel.rooms && <div>
                                    {hotel.rooms.length != 0 &&
                                    <>
                                        <h5>Available rooms</h5>
                                        <div  className='flex gap-[10px]'>
                                       { hotel.rooms.map((itm)=>(
                                            <span className='py-1 px-4 rounded-full bg-evergreen'>{itm}</span>
                                        ))}</div></>
                                    }
                                </div>}
                                {hotel.facilities && <div >
                                    {hotel.facilities.length != 0 &&
                                    <>
                                        <h5>Facilities</h5>
                                        <div  className='flex gap-[10px]'>
                                       { hotel.facilities.map((itm)=>(
                                            <span className='py-1 px-4 rounded-full bg-evergreen'>{itm}</span>
                                        ))}</div> </>
                                    }
                                </div>}
                                {hotel.features && <div>
                                    {hotel.features.length !=0  &&
                                        <>
                                        <h5>Features or attractions</h5>
                                        <div  className='flex gap-[10px]'>
                                        {hotel.features.map((itm)=>(
                                            <span className='py-1 px-4 rounded-full bg-evergreen'>{itm}</span>
                                        ))}</div></>
                                    }
                                </div>}

                               <div className="singlehotel-body-content">
                                
                                 <div> <p className='text-blacky-light'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, repellat dolor labore, voluptates earum, tenetur cum et porro est commodi aperiam minima mollitia perferendis vitae dolore quas ducimus magnam illo!</p></div>
                       
                              </div>
                       </div>
                           
               
               )}
            </div>



            <Footer />
            
        </div>
    )
}


export default SingleHotel
