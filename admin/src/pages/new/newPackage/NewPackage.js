
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
    
    /* let dayTitle = "";
    let dayDesc = "";
    let shedule= []; */
   /*  const handleDayTitleChange = (e) => {
        dayTitle = e.target.value;
    }
    const handleDayDescChange = (e) => {
        dayDesc = e.target.value;
    }
    const handleaddshedule = (e) => {
        e.preventDefault()
        shedule = ([...shedule, {"dayTitle" : dayTitle, "dayDesc": dayDesc}]);
        console.log(shedule)
    }
     */
    const [shedule,setShedule] = useState([])
    const [dayTitle, setDayTitle] = useState("");
    const [dayDesc, setDayDesc] = useState("");
    const handleChange = (e) => {
        setinfo((prev) => ({...prev, [e.target.id] : e.target.value}))
        console.log(info)
    }
    const handleDayTitleChange = (e) => {
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
    setActivity(target.value)
  }
  const handleUpdateLocations = ({ target }) => {
    // Update query onKeyPress of input box
    setLocationitem(target.value)
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
                                <input type="text" id="location" onChange={handleChange}/>
                            
                            </div>
                            <div className="form-item">
                                <label>Duration</label>
                                <input type="text" id="duration" onChange={handleChange}/>
                            
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
                                <button onClick={handleNext} className="room-btn">Add room type</button>

                                </div>
                                <div className="form-item">
                                    <label>Activities</label>
                                    <input type="text" id="activities" onChange={handleUpdateActivities}/>

                                </div>
                                
                                <div className="room-btn-box">
                                <button onClick={handleactivityNext} className="room-btn">Add room type</button>

                                </div>
                                <div className="form-item">
                                    <label>Location tags</label>
                                    <input type="text" id="locations" onChange={handleUpdateLocations}/>

                                </div>
                                
                                <div className="room-btn-box">
                                <button onClick={handlelocationNext} className="room-btn">Add room type</button>

                                </div>
                            <div className="form-item">
                                <label>Rating</label>
                                <input type="number" min="0" max="6" id="rating" onChange={handleChange}/>
                            
                            </div>
                            <div className='shedule-input-con'>
                                <h3>Shedule</h3>
                                <div className="shedule-ip-box">
                                    <div className="form-item">
                                        <label>Title</label>
                                        <input type="text" id="sheduleTitle" onChange={handleDayTitleChange} name="dayTitle"/>
                                    </div>                                        {/*   reset button must be created */}
                                    <div className="form-item">
                                        <label>Description</label>
                                        <textarea  id="sheduleDesc" onChange={handleDayTitleChange} name="dayDesc"/>
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
                            <div className="package-details-flex">
                                {features && features.map((obj)=>(
                                    <span>n{obj}</span>
                                ))}
                            </div>
                            <h3>Activities</h3>

                            <div className="package-details-flex">
                                {activities && activities.map((obj)=>(
                                    <span>n{obj}</span>
                                ))}
                            </div>
                            <h4>Location tags</h4>
                            <div className="package-details-flex">
                                {locations && locations.map((obj)=>(
                                    <span>n{obj}</span>
                                ))}
                            </div>
                            <p>Rating value {info.rating}</p>
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