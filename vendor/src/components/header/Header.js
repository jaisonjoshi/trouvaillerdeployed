import './header.scss'
import {useContext, useEffect, useState} from 'react'
import { AuthContext } from '../context/AuthContext';
import logo from '../../Assets/logo.png'
import Slider from "react-slick";
import profile from "../../Assets/profile.jpg";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import "slick-carousel/slick/slick.css";
import InstagramIcon from '@mui/icons-material/Instagram';
import "slick-carousel/slick/slick-theme.css";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { Link } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import {useNavigate} from "react-router-dom"
import axios from "axios";

const Header = () => {

    const axiosInstance = axios.create({
        baseURL: process.env.REACT_APP_API_URL,
    })
    const navigate = useNavigate();
    const settings = {
        infinite: true,
       
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        autoplay:true,
        autoplaySpeed: 4000,
        
      };

      const { user, loading, error, dispatch } = useContext(AuthContext);
       const {data} = useFetch(`/user/find/${user._id}`)
        //logout
        const handleClick = async (e) => {
            e.preventDefault();
            dispatch({ type: "LOGOUT" });
            try {
              const res = await axiosInstance.get("/auth/logout");
              localStorage.removeItem("user");
              if(res){
              
              navigate("/login");
        
                                  }
              
            } catch (err) {
              dispatch({ type: "LOGOUT", payload: {message:"logged out"} });
            }
          };
    return(
        <div className="header">
             <div className='pic1 w-full h-[50vh]'></div>

               




            <div className="header-content">
                <div className="header-nav">
                    <div className="prof">
                        <img className='w-[20px] h-[20px] sm:w-[30px] rounded-full sm:h-[30px] ' src={data != undefined && data.img} />
                        <button className='mr-4 text-xs sm:text-base' onClick={handleClick}>Logout</button>
                        {/* <p className='mr-4'>{data.username}</p> */}
                    </div>
                    <div className="nav-items">
                    <Link to="/"><a href="www.trouvailler.com" className='text-xs sm:text-base'>Home</a></Link>

                    <span className='header-txt'>Explore <a href="www.trouvailler.com">trouvailler.com</a></span>
                   <a href='https://www.facebook.com/travelwithtrouvailler/'><FacebookIcon className='nav-icon' sx={{fontSize:18}}/></a> <a href="https://wa.me/918129177335"><WhatsAppIcon sx={{fontSize:18}} className='nav-icon'/></a><a href="https://www.instagram.com/trouvailler_guides/"><InstagramIcon sx={{fontSize:18}} className='nav-icon'/></a>
                    </div>
                </div>
                <div className='header-logo'>
                    <img src={logo} />
                    <p className='text-sm sm:text-base'>
Travel takes us out of our comfort zones and inspires us to see, taste and try new things</p>
                </div>
            </div>
        </div>
    )
}


export default Header