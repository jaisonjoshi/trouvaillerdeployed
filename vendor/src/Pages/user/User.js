import Footer from '../../components/Footer/Footer'
import Header from '../../components/header/Header'
import './user.scss'
import profile from '../../Assets/profile.jpg'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { AuthContext } from '../../components/context/AuthContext';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import BarLoader from "react-spinners/BarLoader";

import { useEffect, useState, useContext } from 'react';
import UserCard from '../../components/userCard/UserCard';
const User = () => {
    const { user, dispatch } = useContext(AuthContext);
    const [hotels,setHotels] = useState([])
  const {data, loading,error } = useFetch(`/hotels?vendorid=${user._id}`)
  console.log(loading)
  useEffect(()=>{
      setHotels(data);
  },[data])
    const [userobj, setUserobj] = useState({})

    const navigate = useNavigate()
    const handleClick = (val) => {
        navigate(`/vendor/hotel/${val}`);
    }
   
   
    return(
        <>
       <Header setUserobj={setUserobj}/>
            <div className="profile">
                <div className="left">
                    <UserCard userobj={userobj}/>
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
                            
                            
                            :<> { hotels.map((hotel)=> (
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
                            </div>))    }</>
                            
                            
                            }
                           
                        </div>
                    </div>
                </div>
            </div>
       <Footer />
       </>
    )
}

export default User