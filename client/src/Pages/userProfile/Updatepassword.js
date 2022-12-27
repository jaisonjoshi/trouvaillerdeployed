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
import {useNavigate} from 'react-router-dom';
//import bcrypt from 'bcryptjs'
//const bcrypt = require("bcryptjs");
import axios from "axios";
import './userprofile.css'

const Updatepassword = () => {
    const userObj = JSON.parse(window.localStorage.getItem('user'))
    const axiosInstance = axios.create({
        baseURL: process.env.REACT_APP_API_URL,
    })
    const navigate = useNavigate();

    const {data, loading, error} = useFetch(`/user/find/${userObj._id}`)
    console.log(data)
    const [password_cred, setPassword_cred] = useState({
        password:undefined
    });
    //const [password_real,setPassword_real]=useState('');
      const handleChange = (e) => {

        setPassword_cred((prev)=>({...prev,[e.target.id]:e.target.value}));
        console.log("entered password"+password_cred);
        
      }

      const handleClick = async (e) => {
        e.preventDefault();
        // const salt = bcrypt.genSaltSync(10);
        // const hash = bcrypt.hashSync(password_real, salt);
        // console.log("the hash value"+hash);
        // setPassword=hash;
        // console.log("the hashed password"+password);
        const res=await axiosInstance.patch(`/user/${userObj._id}`, password_cred);
        console.log(res)
        if(res.data){
            
            navigate("/login");
        }
        else{
            res.status(404).json({ error: "Error" })
        }
      }
    
    return (


        
        <div>
            <Navbar  />
            {/* Header */}
            <div className="mt-20 md:mt-32 flex items-center justify-center px-8 py-8">
                <div className="flex flex-col justify-center items-start  gap-[30px] user-con">
                    
                    <div className="w-[100%] flex flex-col gap-[10px] items-start">
                        <h2 className='text-xl pb-12'>Update Password</h2>
                       <form action="" className='flex flex-col gap-[10px] items-start text-sm'>
                           <label>Type your new password</label>
                            <input className='border-none rounded outline-none' type="password" placeholder='New Password' id="password" onChange={handleChange} />
                            <button  className="flex justify-center items-center bg-evergreen text-blacky-medium w-36  rounded-md p-2 my-5 hover:bg-whiteglow duration-500" onClick={handleClick}>Update</button>
                       </form>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};




export default Updatepassword;