
import { useState } from 'react';
import {useLocation, useNavigate} from 'react-router-dom'
import '../createHotel/createHotel.scss';
import axios from "axios"
import useFecth from '../../../hooks/useFetch';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import Header from '../../../components/header/Header';
import Footer from '../../../components/Footer/Footer';
import Chip from '@mui/material/Chip';


const UpdateHotel =() => {
    const axiosInstance = axios.create({
        baseURL: process.env.REACT_APP_API_URL,
    })
    const navigate = useNavigate();
    const [files, setFile] = useState("")
    const location = useLocation();
    const [info, setinfo] = useState({});
    const id = location.pathname.split("/")[3];

    
    const {data} = useFecth(`/hotels/${id}`);
    var list = data.images
    const handleChange = (e) => {
        setinfo((prev) => ({...prev, [e.target.id] : e.target.value}))
    }
    const updatehandleClick = async e => {
        e.preventDefault();
        try{
            
                if(files != ""){
                    list = await Promise.all(
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

                }
                   
                  
                
              const updatedHotel = {
                ...info,
                images: list,
              };
              console.log(updatedHotel)
              await axiosInstance.patch(`/hotels/${id}`, updatedHotel);
        } catch(err){
            console.log(err)
        }
        /* try{
            const updatedHotel = {
                ...info
            };
            await axios.patch(`/hotels/${id}`, updatedHotel);
            console.log("package has been updated")

            await navigate(`/hotels/${id}`)
        }catch(err){
            console.log(err)
        } */
        
    }
  const [userobj, setUserobj] = useState({})

    

    return(
        <div className="new-hotel">
      <Header setUserobj={setUserobj}/>

            <div className="newhotel-body-1">
                    <h1>Update the Hotel : {data.title}({data._id})</h1>
                    <p>Here you can create a new property and publish to the public. Ensure that all the details are correct before submitting the form.</p>

                   <div className="new-hotel-box">
                   <div className="newhotelform-container">
                        <form >
                        <div className="form-item-file">
                            <span>Upload image</span><label htmlFor='img-input'>  <DriveFolderUploadIcon className='upload-icn'/></label>
                                    <input type="file" name="" id="img-input" multiple onChange={(e) => setFile(e.target.files)}/>
                                
                                </div>
                            <div className="form-item">
                                <label > Title</label>
                                <input type="text" name="" id="title" defaultValue={data.title} onChange={handleChange}/>
                            
                            </div>
                            <div className="form-item">
                                <label>Description</label>
                                <textarea type="text" id="description" defaultValue={data.description} onChange={handleChange}/>
                            
                            </div>
                            <div className="form-item">
                                <label>Location</label>
                                <input type="text" id="location" defaultValue={data.location} onChange={handleChange}/>
                            
                            </div>
                            
                            <div className="form-item">
                                <label>Price</label>
                                <input type="text" id="cheapestPrice" defaultValue={data.cheapestPrice} onChange={handleChange}/>
                            
                            </div>
                            <div className="hotel-form-submit">
                                <button onClick={updatehandleClick}>Update Hotel</button>

                            </div>
                        </form>
                    </div>
                    <div className="form-test">
                    <h3>Upload preview</h3>
                            <p>Here you can see the preview of what you are going to publish. Please verify all the fields are correct before uploading.</p>
                            
                            <div className="img-container">
                            {files && Object.values(files).map((pic, i)=>(
                                    <img key={i} src={
                                        pic
                                        ? URL.createObjectURL(pic)
                                        : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                                    } alt="" />
                            ))}

                            </div>
                            <div className="package-details">
                                <h2>{info.title?info.title:data.title}</h2>
                                <p>{info.description? info.description: data.description}</p>
                               
                                 <p>{info.location?info.location:data.location}</p>
                                    
                                <div className="package-details-flex-2">
                                <CurrencyRupeeIcon /><h3>{info.cheapestPrice?info.cheapestPrice:data.cheapestPrice} /-</h3>
                                </div>
                            </div>
                           
                        </div>
                   </div>
            </div>



            <Footer />
            
        </div>
    )
}

export default UpdateHotel