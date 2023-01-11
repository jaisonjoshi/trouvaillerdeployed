
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import Navbar from '../../../components/navbar/Navbar';
import Sidenav from '../../../components/sidenav/Sidenav';
import './newHotel.scss';
import axios from "axios"
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import CropEasy from '../../../components/crop/CropEasy';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';

const NewHotel =({setOpen}) => {
    const [sidenavOpen, setSideNavOpen] = useState(false)
    const handlesidenavOpen = () => {
        setSideNavOpen(!sidenavOpen);
    }
    const axiosInstance = axios.create({
        baseURL: process.env.REACT_APP_API_URL,
    })
    const navigate = useNavigate();
    const [filec, setFile] = useState("")
    const [rooms, setRooms] = useState([])
    const [info, setinfo] = useState({});
    const [query, setQuery] = useState("")
    const [feature, setFeature] = useState("")
    const [type, setType] = useState('');

    const [facility, setFacility] = useState("")
    const [facilities, setFacilities] = useState([])
    const [features, setFeatures] = useState([])
    const [locationitem, setLocationitem] = useState("")
    const [locations, setLocations] = useState([])
    const handleTypeChange = (event) => {
        setType(event.target.value);
    };
    const handleUpdateLocations = ({ target }) => {
        // Update query onKeyPress of input box
        setLocationitem(target.value.toLowerCase());
      }

      const handlelocationNext = (e) => {
        e.preventDefault()
        //setSearches(searches => [...searches, query])
        setLocations(locations=>[...locations, locationitem])
        document.getElementById('locations').value = " "
        setLocationitem("")
        console.log(locations)  
         }

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

    const handleChange = (e) => {
        setinfo((prev) => ({...prev, [e.target.id] : e.target.value}))
    }
    // const handleRoomChange = (e) => {
        const handleChangeLowerCase = (e) => {
            console.log(e.target.value.toLowerCase())
            setinfo((prev) => ({...prev, [e.target.id] : e.target.value.toLowerCase()}))
            console.log("in lowercase"+info);
        }  
    // }
    const handlefacilitiesDelete = (e, value)=> {
        e.preventDefault();
        setFacilities(facilities.filter((itm)=> itm !== value))
    }
    const handlefeaturesDelete = (e, value)=> {
        e.preventDefault();
        setFeatures(features.filter((itm)=> itm !== value))
    }
    const handleLocationDelete = (e, value)=> {
        e.preventDefault();
        setLocations(locations.filter((itm)=> itm !== value))
    }
    const handleroomsDelete = (e, value)=> {
        e.preventDefault();
        setRooms(rooms.filter((itm)=> itm !== value))
    }
    const handleNext = (e) => {
        e.preventDefault()
        //setSearches(searches => [...searches, query])
        setRooms(rooms=>[...rooms, query])
        document.getElementById('rooms').value = " "
        setQuery("")
        console.log(rooms)
       
        
   }
    // }
    const handlefeatureNext = (e) => {
        e.preventDefault()
        //setSearches(searches => [...searches, query])
        setFeatures(features=>[...features, feature])
        document.getElementById('features').value = " "
        setFeature("")
        console.log(features)   
   }

   const handleFacility = (e) => {
    e.preventDefault()
    //setSearches(searches => [...searches, query])
    setFacilities(facilities=>[...facilities, facility])
    document.getElementById('facilities').value = " "
    setFacility("")

    console.log(rooms)
   
    
}
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
                ...info,rooms:rooms,images:list,facilities:facilities,features:features,locations:locations,
        
              };
              await axiosInstance.post("/hotels", newHotel);
                navigate('/hotels')
        } catch(err){
            console.log(err)
        }
        setOpen(false)
        
    }

    const size = 16/9;
    return(
        <div className="new-hotel">
            <Navbar onclick={handlesidenavOpen}/>
            <Sidenav isOpen={sidenavOpen}/>
            <div className="newhotel-body">
            {openCrop &&
            <div className='crop-box-con'><CropEasy {...{ photoURL, setOpenCrop, setPhotoURL, setFile ,imgFiles,setImgFiles, size}} /></div>}
            
                    <h1>Create a Hotel</h1>
                   <div className="new-hotel-box">
                    <div className="newhotelform-container">
                            <form >
                            <div className="form-item-file">
                            <span>Upload image</span><label htmlFor='img-input'>  <DriveFolderUploadIcon className='upload-icn'/></label>
                                    <input type="file" name="" id="img-input" onChange={handleImageChange}/>
                                
                                <p>click again to upload next image</p>
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
                                            className="outline-none">
                                            
                                        
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
                                <label>Address</label>
                                <textarea type="text" id="address"  onChange={handleChange}/>
                            
                            </div>
                                <div className="form-item">
                                    <label>Location</label>
                                    <input type="text" id="location" onChange={handleChangeLowerCase}/>
                                
                                </div>
                                <div className="form-item">
                                    <label>Room types</label>
                                    <input type="text" id="rooms" onChange={handleUpdateQuery} placeholder={"eg.single bed,double bed"}/>

                                </div>
                                
                                <div className="room-btn-box">
                                <button onClick={handleNext} className="room-btn">Add room type</button>

                                </div>
                                <div className="form-item">
                                    <label>Facilities</label>
                                    <input type="text" id="facilities" onChange={handleUpdateFacility}/>

                                </div>
                                
                                <div className="room-btn-box">
                                <button onClick={handleFacility} className="room-btn">Add facility</button>

                                </div>
                                <div className="form-item">
                                    <label>Features or other tags u want to showcase</label>
                                    <input type="text" id="features" onChange={handleUpdateFeatures}/>

                                </div>
                                
                                <div className="room-btn-box">
                                <button onClick={handlefeatureNext} className="room-btn">Add feature</button>

                                </div>
                                <div className="form-item">
                                    <label>Location tags</label>
                                    <input type="text" id="locations" onChange={handleUpdateLocations} placeholder={"eg.Wayanad,Kerala,India"}/>

                                </div>
                                
                                <div className="room-btn-box">
                                <button onClick={handlelocationNext} className="room-btn">Add location tag</button>

                                </div>
                                <div className="form-item">
                                    <label>Price</label>
                                    <input type="text" id="cheapestPrice" onChange={handleChange}/>
                                
                                </div>
                                {/* <div className="form-item">
                                <label>Rating</label>
                                <input type="number" min="0" max="6" id="rating"  onChange={handleChange} placeholder={"enter a rating from 0-5 or 6"}/>
                            
                            </div> */}
                                <div className="form-item">
                                    <label>Vendor Id</label>
                                    <input type="text" id="vendorid" onChange={handleChange}/>
                                
                                </div>
                                <div className="hotel-form-submit">
                                    <button onClick={handleClick} >Create Hotel</button>

                                </div>
                            </form>
                        </div>
                        <div className="form-test">
                        <h3>Upload preview</h3>
                        <p className='text-sm text-blacky-bright'>Here you can see the preview of what you are going to publish. Please verify all the fields are correct before uploading.</p>


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
                            <div className='package-details-head'>
                                <h2>{info.title}</h2>
                                <span >{type}</span>

                            </div> 

                            <p>{info.location}</p>
                            <p>{info.address}</p>

                            <p>{info.description}</p>

                            {rooms.length != 0 &&
                                <div> 
                                    <label>Room Type</label>
                                    <div className='roomTypes'>
                            
                                        { rooms.map((obj, i)=> (
                                            <div >
                                                <Chip label={obj} onDelete={(e)=> {handleroomsDelete(e,obj)}}/>
                                            
                                            </div>
                                        ))}
                                    </div>                            
                            </div>}

                            {locations.length != 0 && <div >
                                <label>Location tags</label>
                                <div className='roomTypes'>
                                    
                                    { locations.map((obj, i)=> (
                                    
                                            <Chip label={obj} onDelete={(e)=> {handleLocationDelete(e,obj)}}/>
                                        
                                    
                                    ))}
                                    
                                </div>
                            </div>}
                            {features.length != 0 && <div >
                                <label>Features or other attractions</label>
                                <div className='roomTypes'>
                                    
                                    {features.map((obj, i)=> (
                                            <Chip label={obj} onDelete={(e)=> {handlefeaturesDelete(e,obj)}} />
                                        
                                    ))}
                                    
                                </div>
                            </div>}
                            {facilities && <div >
                                {facilities.length != 0 &&
                                <>
                                    <h5>Facilities</h5>
                                    <div  className='flex gap-[10px]'>
                                { facilities.map((obj)=>(
                                    <Chip label={obj} onDelete={(e)=> {handlefacilitiesDelete(e,obj)}} />
                                    ))}</div> </>
                                }
                            </div>}
                               

                                  
                                 <h3>Vendor Id {info.vendorid}</h3>


                            
                           
                       


                                    
                                <div className="package-details-flex-2">
                                <h2>{info.cheapestPrice} &#8377;</h2>
                                </div>

                                

                            </div>
                           
                        </div>
                   </div>
            </div>



            
            
        </div>
    )
}

export default NewHotel
