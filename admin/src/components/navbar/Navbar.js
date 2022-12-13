import './navbar.scss';
import Logo from '../assets/Green.png'
import profile from '../assets/prof.jpg'
import { Link } from 'react-router-dom';
import axios from "axios";
import { useContext,useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import {useNavigate} from "react-router-dom"
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
const Navbar = ({onclick}) => {
    const axiosInstance = axios.create({
        baseURL: process.env.REACT_APP_API_URL,
    })

    const { user, loading, error, dispatch } = useContext(AuthContext);
    const navigate = useNavigate();

    //logout code fetching
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
        <div className="navbar">
            <div className="navbar-brand">
                <MenuIcon className='navbar-brand-icon' onClick={onclick}/>
                <Link to="/">
                    <img src={Logo} alt="" className="nav-logo" /> 

                </Link>
                <h3>Dashboard</h3>
            </div>

            
                <div className='nav-prof'>
                   <div className='nav-profile'>
                       <img src={profile} alt="" className="nav-profile-icon" />
               
                    </div>
           
                       <button onClick={handleClick}>Logout</button>
                </div>

            
    
    
            
            
        </div>
    )
}


export default Navbar