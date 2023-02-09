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

const Header = ({setUserobj}) => {

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
      let url;
        if(user){
            url = `/user/find/${user._id}`
        }
        else{
            url = "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
        }
        const {data} = useFetch(url)
        useEffect(()=>{
            setUserobj(data)

        },[data])

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
        //
    return(
        <div className="header">
             <Slider {...settings}>
             <div className='pic4 w-screen h-[50vh]'></div>

                <div className='pic1 w-screen h-[50vh]'></div>
                <div className='pic2 w-screen h-[50vh]'></div>
                <div className='pic3 w-screen h-[50vh]'></div>




            </Slider>
            <div className="header-content">
                <div className="header-nav">
                    <div className="prof">
                        <img src={data.img} />
                        <button className='mr-4' onClick={handleClick}>Logout</button>
                        {/* <p className='mr-4'>{data.username}</p> */}
                    </div>
                    <div className="nav-items">
                    <Link to="/"><a href="www.trouvailler.com">Home</a></Link>

                    <span className='header-txt'>Explore <a href="www.trouvailler.com">trouvailler.com</a></span>
                   <a href='https://www.facebook.com/travelwithtrouvailler/'><FacebookIcon className='nav-icon'/></a> <a href="https://wa.me/918129177335"><WhatsAppIcon className='nav-icon'/></a><a href="https://www.instagram.com/trouvailler_guides/"><InstagramIcon  className='nav-icon'/></a>
                    </div>
                </div>
                <div className='header-logo'>
                    <img src={logo} />
                    <p>
Travel takes us out of our comfort zones and inspires us to see, taste and try new things</p>
                </div>
            </div>
        </div>
    )
}


export default Header