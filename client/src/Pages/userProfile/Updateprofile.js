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
import {useNavigate} from 'react-router-dom'

import axios from "axios"
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';

import avatar from '../Assets/avatar.png'
import { Link } from 'react-router-dom';
import './userprofile.css'
import CropEasy from '../../Pages/components/crop/CropEasy'
const Updateuser = ({setOpen}) => {
    
    // const userObj = JSON.parse(window.localStorage.getItem('user'))
    const userObj = JSON.parse(window.sessionStorage.getItem('user'))
    const axiosInstance = axios.create({
        baseURL: process.env.REACT_APP_API_URL,
    })
    const navigate = useNavigate();

    const {data, loading, error} = useFetch(`/user/find/${userObj._id}`)
    console.log(data)
    const [info, setinfo] = useState({});

    const size = 1;

    const handleChange = (e) => {
        setinfo((prev) => ({...prev, [e.target.id] : e.target.value}))
        console.log(info)
    }
    const [file, setFile] = useState("")

    const [photoURL, setPhotoURL] = useState("");
    const [openCrop, setOpenCrop] = useState(false);
    const [imgFiles, setImgFiles] = useState([])
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if(file){
            setFile(file);
            setPhotoURL(URL.createObjectURL(file)); 
            setOpenCrop(true);
            console.log(imgFiles)
        }
       }
    
       const handleReviewClick = async e => {

        e.preventDefault();
        setOpen(true)

        try{
            let url = data.img
            if(file != ""){
                const data = new FormData();
                data.append("file", file);
                data.append("upload_preset", "upload");
                const uploadRes = await axiosInstance.post(
                    "https://api.cloudinary.com/v1_1/difxlqrlc/image/upload",
                data
              );

              url  = uploadRes.data.url;
            }
            // localStorage.setItem('user.img', url)
            sessionStorage.setItem('user.img', url)
                
            const newUser = {
                ...info,img:url,
            };
            console.log(newUser, "HAI")
            await axiosInstance.patch(`/user/${userObj._id}`, newUser);
            console.log("new review has been created")

             navigate('/user')
        }catch(err){
            console.log(err)
        }
        setOpen(false)

        
    }




    return (


        
        <div>
            <Navbar  />
            {/* Header */}
            {openCrop &&
            <div className='crop-box-con'><CropEasy {...{ photoURL, setOpenCrop, setPhotoURL, setFile ,imgFiles,setImgFiles, size}} /></div>}
            
            <div className="mt-20 md:mt-32 flex items-center justify-center px-8 py-8">
                <div className="flex flex-col justify-center items-start  gap-[30px] user-con">
                    <div className="w-[50%] flex justify-start ">
                    <img className='w-[60%] md:w-[70%] max-w-[500px] rounded-full' src={
                                        file
                                        ? URL.createObjectURL(file)
                                        : data.img
                                    } alt="" />                            
                    </div>
                    <label htmlFor="profilephoto">Upload image  <DriveFolderUploadIcon className='upload-icn'/></label>
                    <input type="file" id='profilephoto' className='hidden' onChange={handleImageChange}/>
                    <div className="w-[100%] md:w-[50%] flex flex-col gap-[10px] items-start">
                       <form action="" className='flex flex-col gap-[10px] items-start text-[grey]'>
                            <input className='border-none rounded outline-none' type="text" defaultValue={data.username} id="username" onChange={handleChange} />
                           {data.google_id?<div></div>: <input type="text" className='border-none rounded outline-none' defaultValue={data.email} id="email" onChange={handleChange}/>}
                            <input type="text" className='border-none rounded outline-none' defaultValue={data.phone} id="phone" onChange={handleChange}/>
                            <button  className="flex justify-center items-center bg-evergreen text-blacky-medium w-36 font-bold rounded-md p-2 my-5 hover:bg-whiteglow duration-500" onClick={handleReviewClick}>Update</button>
                       </form>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};




export default Updateuser;