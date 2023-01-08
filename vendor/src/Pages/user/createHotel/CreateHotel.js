
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';

import './createHotel.scss';
import axios from "axios"
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import Header from '../../../components/header/Header';
import Footer from '../../../components/Footer/Footer';
import CropEasy from '../../../components/crop/CropEasy';

const CreateHotel =({setOpen}) => {
    const [userobj, setUserobj] = useState({})

    const axiosInstance = axios.create({
        baseURL: process.env.REACT_APP_API_URL,
    })

    const [rooms, setRooms] = useState([])
    const [query, setQuery] = useState("")
    const [locationitem, setLocationitem] = useState("")

    const [feature, setFeature] = useState("")
    const [facility, setFacility] = useState("")

    const [features, setFeatures] = useState([])
    const [locations, setLocations] = useState([])
    const [facilities, setFacilities] = useState([])
    const handleUpdateQuery = ({ target }) => {
        // Update query onKeyPress of input box
        setQuery(target.value)
      }
      const handleUpdateFacility = ({ target }) => {
        // Update query onKeyPress of input box
        setFacility(target.value)
      }
      const handleUpdateFeatures = ({ target }) => {
        // Update query onKeyPress of input box
        setFeature(target.value)
      }

      const handleNext = (e) => {
        e.preventDefault()
        //setSearches(searches => [...searches, query])
        setRooms(rooms=>[...rooms, query])
        document.getElementById('rooms').value = " "
        setQuery("")
        console.log(rooms)
       
        
   }
   const handleFacility = (e) => {
    e.preventDefault()
    //setSearches(searches => [...searches, query])
    setFacilities(facilities=>[...facilities, facility])
    document.getElementById('facilities').value = " "
    setFacility("")

    console.log(rooms)
   
    
}
const handleUpdateLocations = ({ target }) => {
    // Update query onKeyPress of input box
    setLocationitem(target.value)
  }
  const handleLocationDelete = (e, value)=> {
        e.preventDefault();
        setLocations(locations.filter((itm)=> itm !== value))
  }
  const handlelocationNext = (e) => {
    e.preventDefault()
    //setSearches(searches => [...searches, query])
    setLocations(locations=>[...locations, locationitem])
    document.getElementById('locations').value = " "
    setLocationitem("")
    console.log(locations)
   
    
}
   const handlefeatureNext = (e) => {
    e.preventDefault()
    //setSearches(searches => [...searches, query])
    setFeatures(features=>[...features, feature])
    document.getElementById('features').value = " "
    setFeature("")
    console.log(features)
   
    


}
    const handleDelete = () => {
        console.info('You clicked the delete icon.');
    };
    const [type, setType] = useState('');

    const handleTypeChange = (event) => {
        setType(event.target.value);
    };


    const navigate = useNavigate();
    const [files, setFile] = useState("")

    const [info, setinfo] = useState({});

    const handleChange = (e) => {
        setinfo((prev) => ({...prev, [e.target.id] : e.target.value}))
    }
    const vendorObj = JSON.parse(window.localStorage.getItem('user'))
    const size = 16/9;

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
    const handleClick = async e => {
        setOpen(true)
        e.preventDefault();
        try{
            const list = await Promise.all(
                Object.values(imgFiles).map(async (file) => {
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
                vendorid: vendorObj._id, locations: locations,type: type,rooms:rooms,facilities:facilities,features:features,
              };
              await axiosInstance.post("/hotels", newHotel);
              navigate('/vendor')
        } catch(err){
            console.log(err)
        }
        setOpen(false)
        
    }
    
    

    return(
        <div className="new-hotel">
      <Header setUserobj={setUserobj}/>
      {openCrop &&
            <div className='crop-box-con'><CropEasy {...{ photoURL, setOpenCrop, setPhotoURL, setFile ,imgFiles,setImgFiles, size}} /></div>}
            
            <div className="newhotel-body-1">
                    <h1>Create a Hotel</h1>
                    <p>Here you can create a new property and publish to the public. Ensure that all the details are correct before submitting the form.</p>
                   <div className="new-hotel-box">
                    <   div className="newhotelform-container">
                            <form >
                            <div className="form-item-file">
                            <span>Upload image</span><label htmlFor='img-input'>  <DriveFolderUploadIcon className='upload-icn'/></label>
                                    <input type="file" name="" id="img-input" onChange={handleImageChange}/><p className='text-[grey]'>You can upload multiple images one at a time</p>
                                
                                </div>
                                <div className="form-item">
                                    <label > Title</label>
                                    <input type="text" name="" id="title" onChange={handleChange}/>
                                
                                </div>
                                <div className="form-item">
                                    <label > Type</label>
                                        <Select
                                        
                                        
                                            value={type}
                                            onChange={handleTypeChange}
                                            className="outline-none"
                                            
                                        >
                                            <MenuItem value="Villa">Villa</MenuItem>
                                            <MenuItem value="Hotel">Hotel</MenuItem>
                                            <MenuItem value="Apartment">Apartment</MenuItem>
                                        </Select>
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
                                    <label>Room types</label>
                                    <input type="text" id="rooms" onChange={handleUpdateQuery}/>

                                </div>
                                
                                <div className="room-btn-box flex justify-end">
                                <button onClick={handleNext} className="room-btn bg-evergreen px-4 py-1 rounded">Add room type</button>

                                </div>
                                <div className="form-item">
                                    <label>Facilities</label>
                                    <input type="text" id="facilities" onChange={handleUpdateFacility}/>

                                </div>
                                
                                <div className="room-btn-box flex justify-end">
                                <button onClick={handleFacility} className="room-btn bg-evergreen px-4 py-1 rounded">Add facility</button>

                                </div>
                                <div className="form-item">
                                    <label>Features or other tags u want to showcase</label>
                                    <input type="text" id="features" onChange={handleUpdateFeatures}/>

                                </div>
                                
                                <div className="room-btn-box flex justify-end">
                                <button onClick={handlefeatureNext} className="room-btn bg-evergreen px-4 py-1 rounded">Add features</button>

                                </div>
                                <div className="form-item">
                                    <label>Location tags</label>
                                    <input type="text" id="locations" onChange={handleUpdateLocations}/>

                                </div>
                                
                                <div className="room-btn-box flex justify-end">
                                <button onClick={handlelocationNext} className="room-btn bg-evergreen px-4 py-1 rounded">Add locations</button>

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
                            <hr className='bg-[grey]'></hr>
                            <div className="img-container">
                            {imgFiles && Object.values(imgFiles).map((pic)=>(
                                    <img src={
                                        pic
                                        ? URL.createObjectURL(pic)
                                        : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                                    } alt="" />
                            ))}

                            </div>
                            <div className="package-details">
                                <div className='flex justify-between items-center'>
                                <h2>{info.title? info.title: "Hotel Name"}</h2>
                                <span className='px-4 py-1 bg-evergreen rounded-full'>{type}</span>

                                </div>
                                <p>{info.description? info.description: "This is the decscription of your hotel"}</p>
                               
                                 <p className='loc-tag'>{info.location? info.location:"Location"}</p>
                               <div> <label>Room Type</label>
                            <div className='roomTypes'>
                                
                                {rooms && rooms.map((obj, i)=> (
                                    <div >
                                        <span className='px-2 py-1 rounded-full bg-evergreen'>{obj}</span>
                                      
                                    </div>
                                ))}
                                
                            </div></div>
                            <div >
                            <label>Facilities</label>
                            <div className='roomTypes'>
                                
                                {facilities.map((obj, i)=> (
                                    <div >
                                        <span className='px-2 py-1 rounded-full bg-evergreen'>{obj}</span>
                                      
                                    </div>
                                ))}
                                
                            </div>
                        </div><div >
                            <label>Location tags</label>
                            <div className='roomTypes'>
                                
                                {locations && locations.map((obj, i)=> (
                                   
                                        <Chip label={obj} onDelete={(e)=> {handleLocationDelete(e,obj)}}/>
                                      
                                 
                                ))}
                                
                            </div>
                        </div><div >
                            <label>Features or other attractions</label>
                            <div className='roomTypes'>
                                
                                {features.map((obj, i)=> (
                                        <Chip label={obj} onDelete={handleDelete}/>
                                      
                                ))}
                                
                            </div>
                        </div>
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