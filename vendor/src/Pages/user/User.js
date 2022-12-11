import Footer from '../../components/Footer/Footer'
import Header from '../../components/header/Header'
import './user.scss'
import profile from '../../Assets/profile.jpg'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import CreateRoundedIcon from '@mui/icons-material/CreateRounded';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { useEffect, useState } from 'react';
const User = () => {
    const navigate = useNavigate()
    const handleClick = (val) => {
        navigate(`/vendor/hotel/${val}`);
    }
    const [hotels,setHotels] = useState([])
    const vendorObj = JSON.parse(window.localStorage.getItem('user'))
    const {data, loading,error } = useFetch(`/hotels?vendorid=${vendorObj._id}`)
    console.log(data)
    useEffect(()=>{
        setHotels(data);
    },[data])
    return(
        <>
       <Header />
            <div className="profile">
                <div className="left">
                    <div className="profile-container">
                        <div className="img">
                            <img src={profile} />
                            <div className="img-data">
                            <h2>Jaison Joshi</h2>
                            <p>Owns 2 properties</p>
                            </div>
                        </div>
                       
                        <div className="profile-body">
                           
                                <div className="pd-itm">
                                    <WhatsAppIcon className='icn'/><p>9562523642</p>
                                </div>
                                <div className="pd-itm">
                                    <EmailIcon className='icn'/><p>jaisonjoshi2001@gmail.com</p>
                                </div>
                                <div className="pd-itm">
                                   <Link to="/vendor/updateprofile"> <CreateRoundedIcon className='icn'/><p>Edit Profile</p></Link>
                                </div>

                            
                        </div>
                    </div>
                    <div className="profile-container-1">
                        <p className="mb-8">See all bids that you have in your region. Make fast accept the bids inorder to have the customer</p>
                        <Link to="/">Go to Bids</Link>
                    </div>
                </div>
                <div className="right">
                    <div className="property-con">
                        
                        <div className="pc-head">
                        <h2>Your Properties</h2>
                        <p>All your properties are listed here. You can update or delete them. To create a new property please the following button </p> 
                        <Link to="/vendor/createhotel">New property</Link>
                        </div>
                        <div className="pc-body">
                            {hotels && hotels.map((hotel)=> (
                                <div className="hotel-card" key={hotel._id} onClick={() => handleClick(hotel._id)}>
                                <div className="img">
                                    <img src={hotel.images[0]} alt="" />
                                </div>
                                <div className="card-body">
                                    <h3>{hotel.title}</h3>
                                    <p>{hotel.description}</p>
                                    <div className='tags'>                                    <span className='tag'>{hotel.location}</span><span className='tag'>{hotel.cheapestPrice}</span>
                                </div>
                                </div>
                            </div>))}
                           
                        </div>
                    </div>
                </div>
            </div>
       <Footer />
       </>
    )
}

export default User