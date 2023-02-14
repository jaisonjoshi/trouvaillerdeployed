
import { useState , useEffect} from 'react';
import {useLocation, useNavigate} from 'react-router-dom'
import Navbar from '../../../components/navbar/Navbar';
import Sidenav from '../../../components/sidenav/Sidenav';
import '../../new/newPackage/newPackage.scss';
import axios from "axios"
import useFecth from '../../../hooks/useFetch';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import CropEasy from '../../../components/crop/CropEasy';
import Chip from '@mui/material/Chip';


const UpdatePackage =() => {
    const location = useLocation();
   
    const id = location.pathname.split("/")[2];
    const {data} = useFecth(`/packages/find/${id}`);
    //console.log(data.features);
    
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
   const [offers, setOffers] = useState(false)


   const [query, setQuery] = useState("");
   const [activity, setActivity] = useState("");
  
   const [shedule,setShedule] = useState([]);
   const [dayTitle, setDayTitle] = useState("");
   const [dayDesc, setDayDesc] = useState("");
   const [imgFiles, setImgFiles] = useState([])

   useEffect(()=>{
    if(data.length !=0){
        setActivities(data.activities)
        setFeatures(data.features)
        setLocations(data.locations)
        setOffers(data.offers)
        if(offers){
            document.getElementById('offers').checked =true;
        }
        
    }
},[data])
    

    const handleChange = (e) => {
        setinfo((prev) => ({...prev, [e.target.id] : e.target.value}))
    }

    const handleChangeLowerCase = (e) => {
        setinfo((prev) => ({...prev, [e.target.id] : e.target.value.toLowerCase()}))
       // console.log(info)
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
       // console.log(features)
        
       
        
    }
    const handleactivityNext = (e) => {
        e.preventDefault()
        
        setActivities(activities=>[...activities, activity])
        document.getElementById('activities').value = " "
        setActivity("")
      //  console.log(activities)
       
        
    }
    const handlefeaturesDelete = (e, value)=> {
        e.preventDefault();
        setFeatures(features.filter((itm)=> itm !== value))
    }
    const handlelocationsDelete = (e, value)=> {
        e.preventDefault();
        setLocations(locations.filter((itm)=> itm !== value))
    }
    const handleactivitiesDelete = (e, value)=> {
        e.preventDefault();
        setActivities(activities.filter((itm)=> itm !== value))
    }

    const handleofferChange = ()=> {
        
        setOffers(!offers)
       // console.log("offer set")
    }
    const handlelocationNext = (e) => {
        e.preventDefault()
        
        setLocations(locations=>[...locations, locationitem])
        document.getElementById('locations').value = " "
        setLocationitem("")
       // console.log(locations)
       
        
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
    const [photoURL, setPhotoURL] = useState("");
    const [openCrop, setOpenCrop] = useState(false);

    //Declare aspect ration for the cropeasy output image
    const size = 16/9;

    //calling cropeasy for croping and receiving output image
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if(file){
            setFile(file);
            setPhotoURL(URL.createObjectURL(file)); 
            setOpenCrop(true);
           // console.log(imgFiles)
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

       
       
       
        try{
            if(imgFiles != ""){
                list = await Promise.all(
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
            }  
            
              
              const updatedPackage = {
                ...info,
                images: list,
                features:features,
                activities:activities,
                locations:locations,
                shedule:shedule,offers:offers,

              };
            //  console.log(updatedPackage)
              await axiosInstance.patch(`/packages/${id}`, updatedPackage);
                navigate(`/packages/${id}`)
        } catch(error){

             if(error.response){
            if (error.response.status==400) {  
                
                alert('Sorry, no such package found.');
              }
              if (error.response.status==404) {  
                
                alert('Sorry, unable to find package!');
              }
            }
              else if (error.request) {  
                    alert('Network error! Please try again later');
                }
            else{
                alert(error.message);
            }
        }
       
        
    }


    return(
        <div className="new-package">
           <Navbar onclick={handlesidenavOpen}/>
            <Sidenav isOpen={sidenavOpen}/>

            <div className="newpackage-body">
            {openCrop &&
                <div className='crop-box-con'><CropEasy {...{ photoURL, setOpenCrop, setPhotoURL, setFile ,imgFiles,setImgFiles, size}} /></div>}
            
                    <h1>Update the Package : {data.title}({data._id})</h1>
                    <div className="new-package-box">
                    <div className="newpackageform-container">
                        <form >
                        <div className="form-item-file">
                        <span>Upload image</span><label htmlFor='img-input'>  <DriveFolderUploadIcon className='upload-icn'/></label>
                                <input type="file" name="" id="img-input" multiple onChange={handleImageChange}/>
                            
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
                                <button onClick={handlelocationNext} className="bg-[#00ff9f] px-4 py-1 rounded">Add Location tag</button>

                                </div>
                            
                            <div className="form-item">
                                    <label>Attractions and features</label>
                                    <input type="text" id="features" onChange={handleUpdateQuery}/>

                                </div>
                                
                                <div className="room-btn-box">
                                <button onClick={handleNext} className="bg-[#00ff9f] px-4 py-1 rounded">Add feature</button>

                                </div>
                                <div className="form-item">
                                    <label>Activities</label>
                                    <input type="text" id="activities" onChange={handleUpdateActivities} placeholder={"eg. Adventure,Religious,etc"}/>

                                </div>
                                
                                <div className="room-btn-box">
                                <button onClick={handleactivityNext} className="bg-[#00ff9f] px-4 py-1 rounded">Add activity</button>

                                </div>
                                <div className="form-item">
                                <label>Rating</label>
                                <input type="number" min="0" max="6" id="rating" onChange={handleChange} placeholder={"Enter a rating from 0-5 or 6"}/>
                            
                            </div> 
                            
                                <div className='shedule-input-con'>
                                    <h3>Shedule</h3>
                                    <p className='text-[red] mr-8'>Note: Inorder to make changes to the existing shedules, Please use the shedule update option in the Package details page. Here you can create only new shedules from scratch.</p>
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
                                    <div className='flex justify-end mr-8'>
                                    <button onClick={handleSave}>Add next Day</button> 

                                    </div>
                                </div>
                            <div className="flex items-center gap-[5px]">
                                <label>Offer</label>
                                <input type="checkbox" id="offers" onChange={handleofferChange}/>                                
                            </div>
                            {offers && 
                                <div className='px-3 my-4 py-4 border border-[#e8e8e8] shadow-lg rounded'>
                                    <div className="form-item">
                                        <label>Offer Title</label>
                                        <input type="text" id="offertitle" defaultValue={data.offertitle} onChange={handleChange}/>
                                    
                                    </div>
                                    <div className="form-item">
                                        <label>Offer description</label>
                                        <input type="text" id="offerdescription" defaultValue={data.offerdescription} onChange={handleChange}/>
                                    
                                    </div>
                                    <div className="form-item">
                                        <label>Offer Price</label>
                                        <input type="text" id="offerprice" defaultValue={data.offerprice} onChange={handleChange}/>
                                    
                                    </div>
                                </div>}
                            
                            
                            <div className="package-form-submit">
                                <button onClick={updatehandleClick}>Update Package</button>

                            </div>
                        </form>
                    </div>
                    <div className="form-test">
                    <h3 className='mb-4'>update preview</h3>
                        <p className='text-sm mb-4 text-blacky-bright'>The update preview of the package can be reviewed here before updating. Please keep in mind that if you want to update or add a new image, you have to upload the all images again as there is no provision provided here for adding updating or deleting a single image. For the updation of shedules also, the same follows.</p>
<hr className='mb-4'/>

                        <div className="img-container">
                           {imgFiles && Object.values(imgFiles).map((pic)=>(
                                <img src={
                                    pic
                                      ? URL.createObjectURL(pic)
                                      : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                                  } alt="" />
                           ))
                                  
                           }

                        </div>
                        <div className="package-details">
                        <h3 className='text-[#03965e] font-bold'>{info.duration ? info.duration : data.duration}</h3>
                            <h3 className='text-2xl font-medium text-[black]'>{info.title ? info.title : data.title}</h3>
                            <h3 className=''>{info.location? info.location : data.location}</h3>

                            <p>{info.description ? info.description : data.description}</p>
                            <div className="package-details-flex">
                            </div>
                            
                             <p className='px-4 py-1 rounded bg-[#00ffa5]'>{info.category ? info.category : data.category}</p>

                            {locations.length !== 0 && <div><h3>Location tags</h3>
                            <div className="package-details-flex">
                                {locations && locations.map((obj)=>(
                                                <Chip label={obj} onDelete={(e)=> {handlelocationsDelete(e,obj)}}/>
                                                ))}
                            </div>
                            </div>}

                            {features.length !== 0 && <div>
                            <h3>Features </h3>
                           
                            <div className="package-details-flex">
                                {features && features.map((obj,i)=>(
                                                <Chip label={obj} onDelete={(e)=> {handlefeaturesDelete(e,obj)}}/>
                                                ))}
                            </div></div>}
                           {activities.length !== 0 && <div>
                            <h3>Activities</h3>

                            <div className="package-details-flex">
                                {activities && activities.map((obj)=>(
                                                <Chip label={obj} onDelete={(e)=> {handleactivitiesDelete(e,obj)}}/>
                                                ))}
                            </div></div>}
                            
                            
                            {info.rating ? <h3>Rating value {info.rating}</h3>:<h3> Rating value {data.rating}</h3> }

                        </div>
                        {shedule.length !== 0 && <div className="package-shedule">
                            <h2>Shedule</h2>
                            <div className="shedule-con">
                                { shedule.map((obj, i)=> (
                                    <div className="shedule-card">
                                        <h3>Day {i+1}</h3>
                                        <h2>{obj.dayTitle}</h2>
                                        <p>{obj.dayDesc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>}

                        {offers && 
                            <div className='offer'>
                                <h3 className='text-[black]'>You are adding an offer for this hotel</h3>
                                <div className='offer-con'>
                                    <span className='offertitle'>{info.offertitle ? info.offertitle : data.offertitle}</span>
                                    <p>{info.offerdescription ? info.offerdescription : data.offerdescription}</p>
                                    <span>Price:<span><b>{info.offerprice ? info.offerprice: data.offerprice} &#8377;</b></span></span>

                                </div>
                            </div>}


                    </div>
                    </div>
            </div>



            
            
        </div>
    )
}

export default UpdatePackage