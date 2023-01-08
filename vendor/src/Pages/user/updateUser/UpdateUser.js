import Header from '../../../components/header/Header'
import './updateUser.scss'
import profile from '../../../Assets/profile.jpg'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import hotel from '../../../Assets/hotel.jpg'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import Footer from '../../../components/Footer/Footer';
import Link from 'react-router-dom'
import axios from 'axios';
import { useState} from 'react';
import {useNavigate} from 'react-router-dom'

import CropEasy from '../../../components/crop/CropEasy'
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';



const UpdateUser = ({setOpen}) => {
    const [userobj, setUserobj] = useState({})
    const axiosInstance = axios.create({
        baseURL: process.env.REACT_APP_API_URL,
    })
    const navigate = useNavigate()
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
            let url = userobj.img
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
            console.log(newUser, "HAI")
            await axiosInstance.patch(`/user/${userobj._id}`, newUser);
            console.log("new review has been created")

             navigate('/vendor')
        }catch(err){
            console.log(err)
        }
        setOpen(false)

        
    }




    return(
        <>
      <Header setUserobj={setUserobj}/>
      {openCrop &&
            <div className='crop-box-con'><CropEasy {...{ photoURL, setOpenCrop, setPhotoURL, setFile ,imgFiles,setImgFiles, size}} /></div>}
           
      <div className="update-profile">
      <h2 className='text-center'>Update your Profile details</h2>
      <div className='mt-20 md:mt-32 flex items-center justify-center px-8 py-8'>
      <div className="flex justify-center items-center gap-[30px] user-con">
                    <div className="w-[50%] flex justify-start ">
                    <img className='w-[60%] md:w-[70%] max-w-[500px] rounded-full' src={
                                        file
                                        ? URL.createObjectURL(file)
                                        : userobj.img
                                    } alt="" />                            
                    </div>
                    <div className='flex flex-col gap-[20px]'>
                    <label htmlFor="profilephoto">Upload image  <DriveFolderUploadIcon className='upload-icn'/></label>
                    <input type="file" id='profilephoto' className='hidden' onChange={handleImageChange}/>
                    <div className="w-[100%] md:w-[50%] flex flex-col gap-[10px] items-start">
                       <form action="" className='flex flex-col gap-[10px] items-start text-[grey]'>
                            <input className='rounded border outline-none py-1 px-2' type="text" defaultValue={userobj.username} id="username" onChange={handleChange} />
                            <input type="text" className='border py-1 px-2 rounded outline-none' defaultValue={userobj.email} id="email" onChange={handleChange}/>
                            <input type="text" className='border py-1 px-2 rounded outline-none' defaultValue={userobj.phone} id="phone" onChange={handleChange}/>
                            <div>
                            <label>Update password</label>
                            <p>Enter your new password</p>
                            <input type="password" className='border px-2 py-1  rounded outline-none'  id="password"/>

                            </div>
                            <button  className="flex justify-center items-center bg-evergreen text-blacky-medium w-36 font-bold rounded-md p-2 my-5 hover:bg-whiteglow duration-500" onClick={handleReviewClick}>Update</button>
                       </form>
                    </div>
                    </div>
                </div>
      </div>
           
       
      </div>
       <Footer />
       </>
    )
}

export default UpdateUser