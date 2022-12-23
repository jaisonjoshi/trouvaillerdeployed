import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Footer from "../components/Footer/Footer"
import Navbar from '../components/navbar/navbar'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useLocation } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { useState } from 'react';
import { useEffect } from 'react';
import avatar from '../Assets/avatar.png'
import { Link } from 'react-router-dom';
import './userprofile.css'
const Updatepassword = () => {
    

    
    return (


        
        <div>
            <Navbar  />
            {/* Header */}
            <div className="mt-32 flex items-center justify-center px-8 py-8">
                <div className="flex flex-col justify-center items-start  gap-[30px] user-con">
                    
                    <div className="w-[100%] flex flex-col gap-[10px] items-start">
                        <h2 className='text-xl pb-12'>Update Password</h2>
                       <form action="" className='flex flex-col gap-[10px] items-start'>
                           <label>Type your new password</label>
                            <input className='border-none rounded outline-none' type="password" placeholder='New Password' />
                            <button  className="flex justify-center items-center bg-evergreen text-blacky-medium w-36 font-bold rounded-md p-2 my-5 hover:bg-whiteglow duration-500">Update</button>
                       </form>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};




export default Updatepassword;