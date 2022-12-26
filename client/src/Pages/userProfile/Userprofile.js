import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Footer from "../components/Footer/Footer"
import Navbar from '../components/navbar/navbar'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import avatar from '../Assets/avatar.png'
import { Link } from 'react-router-dom';
import './userprofile.css'
import useFetch from '../../hooks/useFetch';
import PropagateLoader from "react-spinners/PropagateLoader";



const Userprofile = () => {
    const [anim, setAnim] = useState("hide")
    useEffect(()=>{
        window.addEventListener('load', setAnim("show"))

    }, [])

    const userObj = JSON.parse(window.localStorage.getItem('user'))

    const [userdet, setUser] = useState({})
    const {data, loading, error} = useFetch(`/user/find/${userObj._id}`)
    useEffect(()=> {
        setUser(data)
    }, [data])
    console.log(userdet,"thid id" )    
    return (


        
        <div className={` animationset ${anim}`}>
            <Navbar  />
            {/* Header */}
            {loading?
            (
                <div className='loading-div'>
                <PropagateLoader
     
     
                    color={'#32fca7'}
                    loading={loading}
     
                    size={15}
     
                    />
              </div>
            )
        
        
        
        :
        
        <div className="mt-32 h-[60vh] flex items-center justify-center px-8">
                <div className="flex flex-col justify-center items-start md:flex-row md:justify-center md:items-center gap-[30px] md:gap-[10%] user-con">
                    <div className="w-[50%] flex justify-start md:justify-end">
                            <img src={userdet.img} className="w-[60%] md:w-[50%] max-w-[500px] rounded-full" alt="" />
                    </div>
                    <div className="w-[100%] md:w-[50%] flex flex-col gap-[10px] items-start">
                        <h2 className='text-2xl md:text-4xl'>{userdet.username}</h2>
                        <h4 className='text-lg'>{userdet.email}</h4>
                        <h4 className='text-lg'> {userdet.phone}</h4>
                        <p className='flex w-[100%] gap-[20px] '><Link className='rounded py-[3px] px-[8px] bg-evergreen' to="/user/update">Update profile</Link><Link  className='rounded py-[3px] px-[8px] bg-evergreen' to="/user/update/password">Change password</Link></p>
                    </div>
                </div>
            </div>
        
        
        }
            <Footer/>
        </div>
    );
};




export default Userprofile;