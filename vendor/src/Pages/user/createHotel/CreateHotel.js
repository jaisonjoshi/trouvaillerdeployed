
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'

import './createHotel.scss';
import axios from "axios"
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import Header from '../../../components/header/Header';
import Footer from '../../../components/Footer/Footer';


const CreateHotel =() => {
    const axiosInstance = axios.create({
        baseURL: process.env.REACT_APP_API_URL,
    })
    const navigate = useNavigate();
    const [files, setFile] = useState("")

    const [info, setinfo] = useState({});

    const handleChange = (e) => {
        setinfo((prev) => ({...prev, [e.target.id] : e.target.value}))
    }
    const vendorObj = JSON.parse(window.localStorage.getItem('user'))

    const handleClick = async e => {
        e.preventDefault();
        try{
            const list = await Promise.all(
                Object.values(files).map(async (file) => {
                  const data = new FormData();
                  data.append("file", file);
                  data.append("upload_preset", "upload");
                  const uploadRes = await axiosInstance.post(
                    "https://api.cloudinary.com/v1_1/dihrq9pgs/image/upload",
                    data
                  );
        
                  const  url  = uploadRes.data.url;
                  return url;
                })
              );
              
              const newHotel = {
                ...info,
                images: list,
                vendorid: vendorObj._id
              };
              await axiosInstance.post("/hotels", newHotel);
              console.log(newHotel)
        } catch(err){
            console.log(err)
        }
        
    }

    

    return(
        <div className="new-hotel">
            <Header />

            <div className="newhotel-body-1">
                    <h1>Create a Hotel</h1>
                    <p>Here you can create a new property and publish to the public. Ensure that all the details are correct before submitting the form.</p>
                   <div className="new-hotel-box">
                    <   div className="newhotelform-container">
                            <form >
                            <div className="form-item-file">
                            <span>Upload image</span><label htmlFor='img-input'>  <DriveFolderUploadIcon className='upload-icn'/></label>
                                    <input type="file" name="" id="img-input" multiple onChange={(e) => setFile(e.target.files)}/>
                                
                                </div>
                                <div className="form-item">
                                    <label > Title</label>
                                    <input type="text" name="" id="title" onChange={handleChange}/>
                                
                                </div>
                                <div className="form-item">
                                    <label>Description</label>
                                    <textarea type="text" id="description" onChange={handleChange}/>
                                
                                </div>
                                <div className="form-item">
                                    <label>Location</label>
                                    <input type="text" id="location" onChange={handleChange}/>
                                
                                </div>
                            
                                <div className="form-item">
                                    <label>Price</label>
                                    <input type="text" id="cheapestPrice" onChange={handleChange}/>
                                
                                </div>
                                <div className="hotel-form-submit">
                                    <button onClick={handleClick}>Create Hotel</button>

                                </div>
                            </form>
                        </div>
                        <div className="form-test">
                            


                            <h3>Upload preview</h3>
                            <p>Here you can see the preview of what you are going to publish. Please verify all the fields are correct before uploading.</p>
                            <div className="img-container">
                            {files && Object.values(files).map((pic)=>(
                                    <img src={
                                        pic
                                        ? URL.createObjectURL(pic)
                                        : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                                    } alt="" />
                            ))}

                            </div>
                            <div className="package-details">
                                <h2>{info.title? info.title: "Hotel Name"}</h2>
                                <p>{info.description? info.description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}</p>
                               
                                 <p className='loc-tag'>{info.location? info.location:"Location"}</p>
                                    
                                <div className="package-details-flex-2">
                                <CurrencyRupeeIcon /><h3>{info.cheapestPrice? info.cheapestPrice: "Price"} /-</h3>
                                </div>
                            </div>
                           
                        </div>
                   </div>
            </div>



            <Footer />
            
        </div>
    )
}

export default CreateHotel