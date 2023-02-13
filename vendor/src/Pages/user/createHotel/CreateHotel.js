
import {useNavigate} from 'react-router-dom'
import CropEasy from '../../../components/crop/CropEasy'
import './createHotel.scss';
import axios from "axios"
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import Header from '../../../components/header/Header';
import Footer from '../../../components/Footer/Footer';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import {useContext, useEffect, useState} from 'react'
import { AuthContext } from '../../../components/context/AuthContext';

const CreateHotel =({setOpen}) => {
    const { user, loading, error, dispatch } = useContext(AuthContext);

    const axiosInstance = axios.create({
        baseURL: process.env.REACT_APP_API_URL,
    })

    const [rooms, setRooms] = useState([])
    const [query, setQuery] = useState("")
    const [locationitem, setLocationitem] = useState("")
    const [type, setType] = useState('');

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
        //console.log(rooms)
       
        
   }
   const handleFacility = (e) => {
    e.preventDefault()
    //setSearches(searches => [...searches, query])
    setFacilities(facilities=>[...facilities, facility])
    document.getElementById('facilities').value = " "
    setFacility("")

   // console.log(rooms)
   
    
}
const handleUpdateLocations = ({ target }) => {
    // Update query onKeyPress of input box
    setLocationitem(target.value)
  }
  const handlelocationNext = (e) => {
    e.preventDefault()
    //setSearches(searches => [...searches, query])
    setLocations(locations=>[...locations, locationitem])
    document.getElementById('locations').value = " "
    setLocationitem("")
   // console.log(locations)
   
    
}
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
const handleChangeLowerCase = (e) => {
    //console.log(e.target.value.toLowerCase())
    setinfo((prev) => ({...prev, [e.target.id] : e.target.value.toLowerCase()}))
    //console.log("in lowercase"+info);
} 
const handleTypeChange = (event) => {
    setType(event.target.value);
};

   const handlefeatureNext = (e) => {
    e.preventDefault()
    //setSearches(searches => [...searches, query])
    setFeatures(features=>[...features, feature])
    document.getElementById('features').value = " "
    setFeature("")
    //console.log(features)
   
    
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
        //console.log(imgFiles)
    }
   }
    const navigate = useNavigate();
    const [files, setFile] = useState("")

    const [info, setinfo] = useState({});

    const handleChange = (e) => {
        setinfo((prev) => ({...prev, [e.target.id] : e.target.value}))
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
                ...info,rooms:rooms,images:list,facilities:facilities,features:features,locations:locations,type:type,

                vendorid: user._id
              };
              await axiosInstance.post("/hotels", newHotel);
              navigate(`/vendor`)
            } catch(error){

             if (error.response) {
                // The request was made and the server responded with a status code that falls out of the range of 2xx
                alert('Error creating new hotel. Please fill out all the necessary feilds and try again.');
               
              } else if (error.request) {    
                  alert('Network error! Please try again later.')
              } 
                else {
                    alert(error.message + '. Please try again later.');
                }
        }
        setOpen(false)

        
    }
    const size = 16/9;

    

    return(
        <div className="new-hotel">
      <Header />

            <div className="newhotel-body-1">
            {openCrop &&
            <div className='crop-box-con'><CropEasy {...{ photoURL, setOpenCrop, setPhotoURL, setFile ,imgFiles,setImgFiles, size}} /></div>}
           
                    <h1>Create a Hotel</h1>
                    <p>Here you can create a new property and publish to the public. Ensure that all the details are correct before submitting the form.</p>
                   <div className="new-hotel-box">
                    <   div className="newhotelform-container">
                    <form >
                            <div className="form-item-file">
                            <span>Upload image</span><label htmlFor='img-input'>  <DriveFolderUploadIcon className='upload-icn'/></label>
                                    <input type="file" name="" id="img-input" onChange={handleImageChange}/>
                                
                                <p>click again to upload next image</p>
                                </div>
                                <div className="form-item">
                                    <label > Title <span style={{ color: "red" }}> *</span></label>
                                    <input type="text" name="" id="title" onChange={handleChange}/>
                                
                                </div>
                                <div className="form-item">
                                    <label > Type <span style={{ color: "red" }}> *</span></label>
                                        <Select                                         
                                            value={type}
                                            onChange={handleTypeChange}
                                            className="outline-none">
                                            
                                           
                                            <MenuItem value="hotel">Hotel</MenuItem>
                                            <MenuItem value="private villa">Private Villa</MenuItem>

                                            <MenuItem value="home stay">Home Stay</MenuItem>
                                            <MenuItem value="resort">Resort</MenuItem>
                                            <MenuItem value="campsite">Campsite</MenuItem>
                                        </Select>
                            </div>
                                <div className="form-item">
                                    <label>Description <span style={{ color: "red" }}> *</span></label>
                                    <textarea type="text" id="description" onChange={handleChange}/>
                                
                                </div>
                                <div className="form-item">
                                <label>Address</label>
                                <textarea type="text" id="address"  onChange={handleChange}/>
                            
                            </div>
                                <div className="form-item">
                                    <label>Location <span style={{ color: "red" }}> *</span></label>
                                    <input type="text" id="location" onChange={handleChangeLowerCase}/>
                                
                                </div>
                                <div className="form-item">
                                    <label>Google map Location link</label>
                                    <input type="text" id="googlelocation" onChange={handleChangeLowerCase}/>
                                
                                </div>
                                <div className="form-item">
                                    <label>Room types <span style={{ color: "red" }}> *</span></label>
                                    <input type="text" id="rooms" onChange={handleUpdateQuery} placeholder={"eg.single bed,double bed"}/>

                                </div>
                                
                                <div className="room-btn-box">
                                <button onClick={handleNext} className="bg-[#00ff9f] px-4 py-1 rounded">Add room type</button>

                                </div>
                                <div className="form-item">
                                    <label>Facilities</label>
                                    <input type="text" id="facilities" onChange={handleUpdateFacility}/>

                                </div>
                                
                                <div className="room-btn-box">
                                <button onClick={handleFacility} className="bg-[#00ff9f] px-4 py-1 rounded">Add facility</button>

                                </div>
                                <div className="form-item">
                                    <label>Features or other tags u want to showcase</label>
                                    <input type="text" id="features" onChange={handleUpdateFeatures}/>

                                </div>
                                
                                <div className="room-btn-box">
                                <button onClick={handlefeatureNext} className="bg-[#00ff9f] px-4 py-1 roundedx">Add feature</button>

                                </div>
                                <div className="form-item">
                                    <label>Location tags <span style={{ color: "red" }}> *</span></label>
                                    <input type="text" id="locations" onChange={handleUpdateLocations} placeholder={"eg.Wayanad,Kerala,India"}/>

                                </div>
                                
                                <div className="room-btn-box">
                                <button onClick={handlelocationNext} className="bg-[#00ff9f] px-4 py-1 rounded">Add location tag</button>

                                </div>
                                <div className="form-item">
                                    <label>Price <span style={{ color: "red" }}> *</span></label>
                                    <input type="text" id="cheapestPrice" onChange={handleChange}/>
                                
                                </div>
                                {/* <div className="form-item">
                                <label>Rating</label>
                                <input type="number" min="0" max="6" id="rating"  onChange={handleChange} placeholder={"enter a rating from 0-5 or 6"}/>
                            
                            </div> */}
                               
                                <div className="hotel-form-submit">
                                    <button onClick={handleClick} >Create Hotel</button>

                                </div>
                            </form>
                        </div>
                        <div className="form-test">
                        <h3 className='mb-4'>Upload preview</h3>
                        <p className='text-sm mb-4 text-blacky-bright'>Here you can see the preview of what you are going to publish. Please verify all the fields are correct before uploading.</p>
<hr className='mb-4'/>

                            <div className="img-container">
                            {imgFiles && Object.values(imgFiles).map((pic)=>(
                                    <img src={
                                        pic
                                        ? URL.createObjectURL(pic)
                                        : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                                    } alt="" className='mb-4'/>
                            ))}

                            </div>
                            <div className="package-details">
                            <div className='package-details-head'>
                                <h2>{info.title}</h2>
                                {type && <span >{type}</span>}

                            </div> 

                            <p>{info.location}</p>
                            <p>{info.address}</p>

                            <p className='whitespace-pre-wrap'>{info.description}</p>

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
                               

                           


                            
                           
                       


                                    
                               { info.cheapestPrice && <div className="package-details-flex-2">
                                <h2>{info.cheapestPrice} &#8377;</h2>
                                </div>
}
                                

                            </div>
                           
                        </div>
                   </div>
            </div>



            <Footer />
            
        </div>
    )
}

export default CreateHotel