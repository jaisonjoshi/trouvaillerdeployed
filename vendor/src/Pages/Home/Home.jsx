import React from "react";
import Footer from "../../components/Footer/Footer";
import Headerimg from "../../Assets/Group.jpg";
import { Link } from "react-router-dom";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import hotel from '../../Assets/hotel.jpg'
import CreateRoundedIcon from '@mui/icons-material/CreateRounded';
import "./home.scss";
import HomeBid from "../../components/homeBid/HomeBid";
import profile from "../../Assets/profile.jpg";
import { AuthContext } from "../../components/context/AuthContext";
import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../../components/header/Header";
import useFetch from "../../hooks/useFetch";
import UserCard from "../../components/userCard/UserCard";





const Home = () => {
  const { user, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
})
    
  const [hotels,setHotels] = useState([])
  const {data, loading,error } = useFetch(`/hotels?vendorid=${user._id}`)
  useEffect(()=>{
      setHotels(data);
      
     
  },[data])
  const [url ,setUrl] = useState("")
  useEffect(()=>{
    if(hotels.length != 0){
      setUrl("/bids?")
      hotels.map((hotel)=>{
        return hotel.locations.map((obj)=>{
          setUrl(url+"destination="+ obj +"&")
        })
      })
    }
    else{
      setUrl("/bids?destination=nojj")
    }
    console.log(url)
  },[hotels])
  
  //logout code fetching
  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGOUT" });
    try {
      const res = await axiosInstance.get("/auth/logout");
      localStorage.removeItem("user");
      if (res) {
        navigate("/");
      }
    } catch (err) {
      dispatch({ type: "LOGOUT", payload: { message: "logged out" } });
    }
  };
  const [userobj, setUserobj] = useState({})
 
  
  return (
    <div>
      {/* Header */}
      <Header setUserobj={setUserobj}/>
      <div className="profile">
                <div className="left">
                    <UserCard userobj={userobj}/>
                    <div className="profile-container-1">
                        <p className="mb-8">See all bids that you have in your region. Make fast accept the bids inorder to have the customer</p>
                        <Link to="/vendor">Go to Hotels</Link>
                    </div>
                </div>
                <div className="right">
                    <div className="property-con">
                        
                        <div className="pc-head">
                        <h2>Bids in your region</h2>
                         
                        </div>
                        <div className="pc-body">
                        <HomeBid url={url}/>

                            
                         
                        </div>
                    </div>
                </div>
            </div>  

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
