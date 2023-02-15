import Header from '../../../components/header/Header'
import './updateUser.scss'
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';

import {useNavigate} from 'react-router-dom'
import useFetch from '../../../hooks/useFetch'
import profile from '../../../Assets/profile.jpg'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import hotel from '../../../Assets/hotel.jpg'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import Footer from '../../../components/Footer/Footer';
import Link from 'react-router-dom'
import CropEasy from '../../../components/crop/CropEasy';
import { useState } from 'react';
import axios from 'axios';
import {useContext, useEffect} from 'react'
import { AuthContext } from '../../../components/context/AuthContext';

const UpdateUser = ({setOpen}) => {

    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
   
    const { user, dispatch } = useContext(AuthContext);

    const axiosInstance = axios.create({
        baseURL: process.env.REACT_APP_API_URL,
    })
    const navigate = useNavigate();

    const {data, loading, error} = useFetch(`/user/find/${user._id}`)
    //console.log(data)
    const [info, setinfo] = useState({});

    const size = 1;
    const handleChangeEmail = (e) =>{

        setEmail(e.target.value);
        if (!emailRegex.test(e.target.value)) {
          setEmailError('Invalid email address');
         // setEmailerr(true);
        } else {
            
          setEmailError('');
          setinfo((prev) => ({...prev, [e.target.id] : e.target.value}))
    
        }
      }

    const handleChange = (e) => {
        setinfo((prev) => ({...prev, [e.target.id] : e.target.value}))
       // console.log(info)
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
           // console.log(imgFiles)
        }
       }

       const handleReviewClick = async e => {

        e.preventDefault();
        setOpen(true)

        try{

            if(!emailError)
            {
            let url = data.img
            if(file != ""){
                const data = new FormData();
                data.append("file", file);
                data.append("upload_preset", "upload");
                const uploadRes = await axiosInstance.post(
                "https://api.cloudinary.com/v1_1/dihrq9pgs/image/upload",
                data
              );

              url  = uploadRes.data.url;
            }
            localStorage.setItem('user.img', url)
                
            const newUser = {
                ...info,img:url,
            };
          //  console.log(newUser, "HAI")
            await axiosInstance.patch(`/user/${user._id}`, newUser);
            //after updating user automatically loggs out and then goes to login page
            alert('Please Sign In again with your google account')
             navigate('/login')}
             else{
                alert('Kindly try again with a valid email id.')
            }

        }catch(error){
            if(error.response){
                if (error.response.status==403) {  
                
                    alert('Sorry, the username already exists!');
                  }
                  else if (error.response.status==405) {  
                    
                    alert('Sorry, the email id alredy exists!');
                  }
                else if (error.response.status==400) {  
                    
                    alert('Error! User not found.');
                  }
                else{
                    alert(error.message+' Please try again.');
                }
                  
                }
                  else if (error.request) {  
                        alert('Network error! Please try again later.');
                    }
                else{
                    alert(error.message);
                }
        }
        setOpen(false)

        
    }
    return(
        <>
       <Header />
      <div className="update-profile">
      <h2 className='text-center'>Update your Profile details</h2>
      {openCrop &&
            <div className='crop-box-con'><CropEasy {...{ photoURL, setOpenCrop, setPhotoURL, setFile ,imgFiles,setImgFiles, size}} /></div>}
            
            <div className="mt-8 flex items-center justify-center px-8 py-8">
                <div className="flex  bg-[#ceffee] px-12 py-20 shadow-lg rounded justify-center items-start  gap-[30px] user-con">
                    <div className="w-[50%] flex justify-start ">
                    <img className='w-[60%] md:w-[70%] max-w-[300px] rounded-full' src={
                                        file
                                        ? URL.createObjectURL(file)
                                        : data.img
                                    } alt="" />                            
                    </div>
                    <div>
                    <label htmlFor="profilephoto">Upload image  <DriveFolderUploadIcon className='upload-icn'/></label>
                    <input type="file" id='profilephoto' className='hidden' onChange={handleImageChange}/>
                    <div className="w-[100%] md:w-[50%] mt-4 flex flex-col gap-[10px] items-start">
                       <form action="" className='flex flex-col gap-[10px] items-start text-[grey]'>
                           <label htmlFor="">User Name </label> <input className='border-none px-4 py-1 rounded outline-none' type="text" defaultValue={data.username} id="username" onChange={handleChange} />

                           { user.google_id?<div></div>:<><label htmlFor="">Email </label><input type="text" className='border-none px-4 py-1 rounded outline-none' defaultValue={data.email} id="email" onChange={handleChangeEmail}/></>}
                            { emailError && <div className="email-err" style={{ color: "red" }}>{emailError}</div>}
                           <label htmlFor="">Phone </label> <input type="text" className='border-none px-4 py-1 rounded outline-none' defaultValue={data.phone} id="phone" onChange={handleChange}/>
                            {user.google_id?<div></div>:<><label htmlFor="">Password </label><input type="password" className='border-none px-4 py-1 rounded outline-none'  id="password" onChange={handleChange} placeholder="Enter new password"/></>}

                            <button  className="flex justify-center items-center bg-evergreen text-blacky-medium w-36 font-bold rounded-md p-2 my-5 hover:bg-whiteglow duration-500" onClick={handleReviewClick}>Update</button>
                       </form>
                       
                    </div>
                    </div>
                    
                </div>
            </div>
       <div className="p-box">
           
       </div>
      </div>
       <Footer />
       </>
    )
}

export default UpdateUser