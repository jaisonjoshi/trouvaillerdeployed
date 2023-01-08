
import { useState } from 'react';
import {useLocation, useNavigate} from 'react-router-dom'
import Navbar from '../../../components/navbar/Navbar';
import Sidenav from '../../../components/sidenav/Sidenav';
import '../../new/newPackage/newPackage.scss';
import axios from "axios"
import useFecth from '../../../hooks/useFetch';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';


const UpdatePackage =() => {
    const location = useLocation();
   
    const id = location.pathname.split("/")[2];
    const {data} = useFecth(`/packages/find/${id}`);
    console.log(data.features);
    var old_features=data.features;
    var old_activities=data.activities;
    var old_locations=data.locations;
    var old_schedule=data.shedule;

    const [sidenavOpen, setSideNavOpen] = useState(false)
    const handlesidenavOpen = () => {
        setSideNavOpen(!sidenavOpen);
    }
    const axiosInstance = axios.create({
        baseURL: process.env.REACT_APP_API_URL,
    })
    const navigate = useNavigate();
    const [files, setFile] = useState("");

   
    const [info, setinfo] = useState({});
    const [locationitem, setLocationitem] = useState("");
   const [locations, setLocations] = useState([]);
   const [features, setFeatures] = useState([]);
   const [activities, setActivities] = useState([]);
  

   const [query, setQuery] = useState("");
   const [activity, setActivity] = useState("");
  
   const [shedule,setShedule] = useState([]);
   const [dayTitle, setDayTitle] = useState("");
   const [dayDesc, setDayDesc] = useState("");
   

    

    const handleChange = (e) => {
        setinfo((prev) => ({...prev, [e.target.id] : e.target.value}))
    }

    const handleChangeLowerCase = (e) => {
        setinfo((prev) => ({...prev, [e.target.id] : e.target.value.toLowerCase()}))
        console.log(info)
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
        
        setActivities(activities=>[...activities, activity])
        document.getElementById('activities').value = " "
        setActivity("")
        console.log(activities)
       
        
    }
    const handlelocationNext = (e) => {
        e.preventDefault()
        
        setLocations(locations=>[...locations, locationitem])
        document.getElementById('locations').value = " "
        setLocationitem("")
        console.log(locations)
       
        
    }

   

   var list = data.images
    
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
        e.preventDefault();
        let tempobject = {}
        tempobject["dayTitle"] = dayTitle;
        tempobject["dayDesc"] = dayDesc;
        setShedule((prev)=> ([...prev, tempobject]));
        document.getElementById('sheduleTitle').value = " ";
        document.getElementById('sheduleDesc').value = " ";
        
   } 
    

    const updatehandleClick = async e => {
        e.preventDefault();

        if(features.length !== 0)
        {
            console.log("features array is not empty now");
            console.log(features);
            old_features=features;
            
        }
        if(activities.length !== 0)
        {
           
            console.log("activities array is not empty now");
            console.log(activities);
            old_activities=activities;
        }
        if(locations.length !== 0)
        {
            console.log("locations array is not empty now");
            console.log(locations);
            old_locations=locations;
        }
        if(shedule.length !== 0)
        {
            console.log("schedule array is not empty now");
            console.log(shedule);
            old_schedule=shedule;
        }
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
            
              
              const updatedPackage = {
                ...info,
                images: list,
                features:old_features,
                activities:old_activities,
                locations:old_locations,
                shedule:old_schedule,
              };
              console.log(updatedPackage)
              await axiosInstance.patch(`/packages/${id}`, updatedPackage);
                navigate(`/packages/${id}`)
        } catch(err){
            console.log(err)
        }
       
        
    }


    return(
        <div className="new-package">
           <Navbar onclick={handlesidenavOpen}/>
            <Sidenav isOpen={sidenavOpen}/>

            <div className="newpackage-body">
                    <h1>Update the Package : {data.title}({data._id})</h1>
                    <div className="new-package-box">
                    <div className="newpackageform-container">
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
                                <textarea rows={5} className="scroll" type="text" id="description" defaultValue={data.description} onChange={handleChange}/>
                            
                            </div>
                            <div className="form-item">
                                <label>Location</label>
                                <input type="text" id="location" defaultValue={data.location} onChange={handleChangeLowerCase}/>
                            
                            </div>
                            <div className="form-item">
                                <label>Duration</label>
                                <input type="text" id="duration" defaultValue={data.duration} onChange={handleChange}/>
                            
                            </div>
                            <div className="form-item">
                                <label>Price</label>
                                <input type="text" id="cheapestPrice" defaultValue={data.price} onChange={handleChange}/>
                            </div>


                            <div className="form-item">
                                <label>Category</label>
                                <textarea type="text" id="category" onChange={handleChangeLowerCase} placeholder={"eg. Family,Honeymoon,Friends,etc"}/>
                            
                            </div> 
                                <div className="form-item">
                                    <label>Location tags</label>
                                    <input type="text" id="locations" onChange={handleUpdateLocations} placeholder={"eg. Wayanad,Kerala,India"}/>

                                </div>
                                
                                <div className="room-btn-box">
                                <button onClick={handlelocationNext} className="room-btn">Add Location tag</button>

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
                                <label>Rating</label>
                                <input type="number" min="0" max="6" id="rating" onChange={handleChange} placeholder={"Enter a rating from 0-5 or 6"}/>
                            
                            </div> 
                            
                                <div className='shedule-input-con'>
                                    <h3>Shedule</h3>
                                    <div className="shedule-ip-box">
                                        <div className="form-item">
                                            <label>Title</label>
                                            <input type="text" id="sheduleTitle" onChange={handleDayTitleChange} name="dayTitle" placeholder="Enter the day title here"/>
                                        </div>                                        
                                        <div className="form-item">
                                            <label>Description</label>
                                            <textarea id="sheduleDesc" onChange={handleDayTitleChange} name="dayDesc" placeholder="Enter the day detailing here"/>
                                        </div>
                                    </div>
                                    <button onClick={handleSave}>Add next Day</button> 
                                </div>
                            
                            
                            <div className="package-form-submit">
                                <button onClick={updatehandleClick}>Update Package</button>

                            </div>
                        </form>
                    </div>
                    <div className="form-test">
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
                            <h1>{info.title}</h1>
                            <p>{info.description}</p>
                            <div className="package-details-flex">
                            <h3>{info.location}</h3><h3>{info.duration}</h3>
                            </div>
                            <div className="package-details-flex-2">
                            <CurrencyRupeeIcon /><h2>{info.cheapestPrice} /-</h2>
                            </div>

                            <h3>Category </h3> <p>{info.category}</p>

                            <h4>Location tags</h4>
                            <div className="package-details-flex">
                                {locations && locations.map((obj)=>(
                                    <span>{obj}</span>
                                ))}
                            </div>
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
                            
                            
                            <h3>Rating value {info.rating}</h3>

                        </div>
                        <div className="package-shedule">
                            <h2>Shedule</h2>
                            <div className="shedule-con">
                                {shedule && shedule.map((obj, i)=> (
                                    <div className="shedule-card">
                                        <h3>Day {i+1}</h3>
                                        <h2>{obj.dayTitle}</h2>
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

export default UpdatePackage