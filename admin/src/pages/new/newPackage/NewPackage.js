
import { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom'
import Navbar from '../../../components/navbar/Navbar';
import Sidenav from '../../../components/sidenav/Sidenav';
import './newPackage.scss';
import Packageimg from '../../../components/assets/package.png'
import axios from "axios"
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import CropEasy from '../../../components/crop/CropEasy';

const NewPackage =({setOpen}) => {

    const [sidenavOpen, setSideNavOpen] = useState(false)

    const handlesidenavOpen = () => {
        setSideNavOpen(!sidenavOpen);
    }
    const axiosInstance = axios.create({
        baseURL: process.env.REACT_APP_API_URL,
    })
    const navigate = useNavigate();
    const [files, setFile] = useState("")
    const [info, setinfo] = useState({});
    
  
    const [shedule,setShedule] = useState([])
    const [dayTitle, setDayTitle] = useState("");
    const [dayDesc, setDayDesc] = useState("");

    const handleChange = (e) => {
        setinfo((prev) => ({...prev, [e.target.id] : e.target.value}))
        console.log(info)
    }
    const handleChangeLowerCase = (e) => {
        setinfo((prev) => ({...prev, [e.target.id] : e.target.value.toLowerCase()}))
        console.log(info)
    }
    const handleDayTitleChange = (e) => {
        e.preventDefault();
        const {name, value}= e.target;

        if(name === "dayTitle")(
            setDayTitle(value)
        )
        else{
            setDayDesc(value);
        }
    }
  
    const handleSave = (e) => {
        e.preventDefault()
        let tempobject = {}
        tempobject["dayTitle"] = dayTitle;
        tempobject["dayDesc"] = dayDesc;
        setShedule((prev)=> ([...prev, tempobject]));
        document.getElementById('sheduleTitle').value = " ";
        document.getElementById('sheduleDesc').value = " ";
       
        
   }
   const [query, setQuery] = useState("")
   const [activity, setActivity] = useState("")
   const [locationitem, setLocationitem] = useState("")
   const [locations, setLocations] = useState([])

   const [features, setFeatures] = useState([])
   const [activities, setActivities] = useState([])

   const [photoURL, setPhotoURL] = useState("");
   const [openCrop, setOpenCrop] = useState(false);
   const [imgFiles, setImgFiles] = useState([])
   const [feature, setFeature] = useState("")
//    const [features, setFeatures] = useState([])
   const handleImageChange = (e) => {
    const file = e.target.files[0];
    if(file){
        setFile(file);
        setPhotoURL(URL.createObjectURL(file)); 
        setOpenCrop(true);
        console.log(imgFiles)
    }
   }

   const handleUpdateQuery = ({ target }) => {
    // Update query onKeyPress of input box
    setQuery(target.value)
  }
  const handleUpdateActivities = ({ target }) => {
    // Update query onKeyPress of input box
    setActivity(target.value.toLowerCase())
  }
  const handleUpdateLocations = ({ target }) => {
    // Update query onKeyPress of input box
    setLocationitem(target.value.toLowerCase())
  }

   const handleNext = (e) => {
    e.preventDefault()
    //setSearches(searches => [...searches, query])
    setFeatures(features=>[...features, query])
    document.getElementById('features').value = " "
    setQuery("")
    console.log(features)
   
    
}
const handleactivityNext = (e) => {
    e.preventDefault()
    //setSearches(searches => [...searches, query])
    setActivities(activities=>[...activities, activity])
    document.getElementById('activities').value = " "
    setActivity("")
    console.log(activities)
   
    
}
const handlelocationNext = (e) => {
    e.preventDefault()
    //setSearches(searches => [...searches, query])
    setLocations(locations=>[...locations, locationitem])
    document.getElementById('locations').value = " "
    setLocationitem("")
    console.log(locations)
   
    
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
              
              const newPackage = {
                ...info,shedule: shedule,
                images: list,offers:true,features:features,activities:activities,locations:locations,
              };
              await axiosInstance.post("/packages", newPackage);
              console.log(newPackage)
                navigate('/packages')
        } catch(err){
            console.log(err)
        }
       
        setOpen(false)

    }

    const size = 16/9;

    return(
        <div className="new-package">
            <Navbar onclick={handlesidenavOpen}/>
            <Sidenav isOpen={sidenavOpen}/>

            <div className="newpackage-body">
            {openCrop &&
            <div className='crop-box-con'><CropEasy {...{ photoURL, setOpenCrop, setPhotoURL, setFile ,imgFiles,setImgFiles, size}} /></div>}
            <h1>Create a new Travel Package</h1>
                   <div className="new-package-box">
                   
                    <div className="newpackageform-container">
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
                                <label>Description</label>
                                <textarea type="text" id="description" onChange={handleChange}/>
                            
                            </div>
                            <div className="form-item">
                                <label>Location</label>
                                <input type="text" id="location" onChange={handleChangeLowerCase}/>
                            
                            </div>
                            <div className="form-item">
                                <label>Duration</label>
                                <input type="text" id="duration" onChange={handleChange} placeholder={"eg. 3 Days 4 Nights "}/>
                            
                            </div>
                            <div className="form-item">
                                <label>Category</label>
                                <textarea type="text" id="category" onChange={handleChangeLowerCase} placeholder={"eg. Family,Honeymoon,Friends,etc"}/>
                            
                            </div>
                            <div className="form-item">
                                <label>Price</label>
                                <input type="text" id="cheapestPrice" onChange={handleChange}/>
                            
                            </div>
                            <div className="form-item">
                                    <label>Attractions and features</label>
                                    <input type="text" id="features" onChange={handleUpdateQuery}/>

                                </div>
                                
                                <div className="room-btn-box">
                                <button onClick={handleNext} className="room-btn">Add feature</button>

                                </div>
                                <div className="form-item">
                                    <label>Activities</label>
                                    <input type="text" id="activities" onChange={handleUpdateActivities} placeholder={"eg. Adventure,Religious,etc"}/>

                                </div>
                                
                                <div className="room-btn-box">
                                <button onClick={handleactivityNext} className="room-btn">Add activity</button>

                                </div>
                                <div className="form-item">
                                    <label>Location tags</label>
                                    <input type="text" id="locations" onChange={handleUpdateLocations} placeholder={"eg. Wayanad,Kerala,India"}/>

                                </div>
                                
                                <div className="room-btn-box">
                                <button onClick={handlelocationNext} className="room-btn">Add Location tag</button>

                                </div>
                            <div className="form-item">
                                <label>Rating</label>
                                <input type="number" min="0" max="6" id="rating" onChange={handleChange} placeholder={"Enter a rating from 0-5 or 6"}/>
                            
                            </div>
                            <div className='shedule-input-con'>
                                <h3>Shedule</h3>
                                <div className="shedule-ip-box">
                                    <div className="form-item">
                                        <label>Title</label>
                                        <input type="text" id="sheduleTitle" onChange={handleDayTitleChange} name="dayTitle" placeholder="Enter the day title here"/>
                                    </div>                                        {/*   reset button must be created */}
                                    <div className="form-item">
                                        <label>Description</label>
                                        <textarea  id="sheduleDesc" onChange={handleDayTitleChange} name="dayDesc" placeholder="Enter the day detailing here"/>
                                    </div>
                                </div>
                                <button onClick={handleSave}>Add next day</button>
                            </div>
                            <div className="package-form-submit">
                                <button onClick={handleClick}>Create Package</button>

                            </div>
                        </form>
                    </div>
                    <div className="form-test">
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
                            <h1>{info.title}</h1>
                            <p>{info.description}</p>
                            <div className="package-details-flex">
                            <h4>{info.duration}</h4><h4>{info.location}</h4>
                            </div>
                            <div className="package-details-flex-2">
                            <CurrencyRupeeIcon /><h3>{info.cheapestPrice} /-</h3>
                            </div>
                            <h3>Category </h3> <p>{info.category}</p>
                            <h3>Features </h3>
                            <div className="package-details-flex">
                                {features && features.map((obj)=>(
                                    <span>{obj}</span>
                                ))}
                            </div>
                            
                            <h3>Activities</h3>

                            <div className="package-details-flex">
                                {activities && activities.map((obj)=>(
                                    <span>{obj}</span>
                                ))}
                            </div>
                            <h4>Location tags</h4>
                            <div className="package-details-flex">
                                {locations && locations.map((obj)=>(
                                    <span>{obj}</span>
                                ))}
                            </div>
                            
                            <h3>Rating value {info.rating}</h3>
                            {/* <h3>Rating type {typeof(info.rating)}</h3> */}
                        </div>
                        <div className="package-shedule">
                            <h3>Shedule</h3>
                            <div className="shedule-con">
                                {shedule.map((obj, i)=> (
                                    <div className="shedule-card" key={i}>
                                        <h4>Day {i+1}</h4>
                                        <h4>{obj.dayTitle}</h4>
                                        <p>{obj.dayDesc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                   </div>

            </div>



            
            
        </div>
    )
}

export default NewPackage