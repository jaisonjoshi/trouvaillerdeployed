
import { useEffect, useState } from 'react';
import {useLocation, useNavigate} from 'react-router-dom'
import '../createHotel/createHotel.scss';
import axios from "axios"
import useFecth from '../../../hooks/useFetch';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import Header from '../../../components/header/Header';
import Footer from '../../../components/Footer/Footer';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
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
    const [type, setType] = useState('');
    const [rooms, setRooms] = useState([])
    const [query, setQuery] = useState("")
    const [locationitem, setLocationitem] = useState("")

    const [feature, setFeature] = useState("")
    const [facility, setFacility] = useState("")
    const [offers, setOffers] = useState(false)

    const [features, setFeatures] = useState([])
    const [locations, setLocations] = useState([])
    const [facilities, setFacilities] = useState([])
    const {data} = useFecth(`/hotels/find/${id}`);
    useEffect(()=>{
        if(data.length !=0){
            setType(data.type)
            setRooms(data.rooms)
            setFacilities(data.facilities)
            setFeature(data.features)
            setLocations(data.locations)
            setOffers(data.offers)
            if(offers){
                document.getElementById('offers').checked =true;
            }
            
        }
    },[data])
    const handleTypeChange = (event) => {
        setType(event.target.value);
    };
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
      const handlefeaturesDelete = (e, value)=> {
        e.preventDefault();
        setFeatures(features.filter((itm)=> itm !== value))
  }
      const handlefacilitiesDelete = (e, value)=> {
        e.preventDefault();
        setFacilities(facilities.filter((itm)=> itm !== value))
  }
  const handleroomsDelete = (e, value)=> {
    e.preventDefault();
    setRooms(rooms.filter((itm)=> itm !== value))
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
    const handleofferChange = ()=> {
        setOffers(!offers)
    }

    var list = data.images
    const handleChange = (e) => {
        setinfo((prev) => ({...prev, [e.target.id] : e.target.value}))
    }
    const handleNext = (e) => {
        e.preventDefault()
        //setSearches(searches => [...searches, query])
        setRooms(rooms=>[...rooms, query])
        document.getElementById('rooms').value = " "
        setQuery("")
        console.log(rooms)
       
        
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
                images: list, locations: locations,type: type,rooms:rooms,facilities:facilities,features:features,offers:offers
              };
              console.log(updatedHotel)
              await axiosInstance.patch(`/hotels/${id}`, updatedHotel);
              navigate("/vendor")
        } catch(err){
            console.log(err)
        }
       
        
    }
  const [userobj, setUserobj] = useState({})

    

    return(
        <div className="new-hotel">
      <Header setUserobj={setUserobj}/>

            <div className="newhotel-body-1">
                    <h1>Update the Hotel : {data.title}({data._id})</h1>
                    <p className='text-blacky-bright'>Here you can create a new property and publish to the public. Ensure that all the details are correct before submitting the form.</p>

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
                                <textarea type="text" id="description" defaultValue={data.description} onChange={handleChange}/>
                            
                            </div>
                            <div className="form-item">
                                <label>Location</label>
                                <input type="text" id="location" defaultValue={data.location} onChange={handleChange}/>
                            
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
                                <input type="text" id="cheapestPrice" defaultValue={data.cheapestPrice} onChange={handleChange}/>
                            
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
                                
                            <div className="hotel-form-submit">
                                <button onClick={updatehandleClick}>Update Hotel</button>

                            </div>
                        </form>
                    </div>
                    <div className="form-test">
                    <h3>Upload preview</h3>
                            <p className='text-sm text-blacky-bright'>Here you can see the preview of what you are going to publish. Please verify all the fields are correct before uploading.</p>
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
                            <div className='flex justify-between items-center'>
                                <h2>{info.title? info.title: data.title}</h2>
                                <span className='px-4 py-1 bg-evergreen rounded-full'>{type}</span>

                                </div>                                <p>{info.description? info.description: data.description}</p>
                               
                                 <p>{info.location?info.location:data.location}</p>
                                 
                                 
                                 
                                 {rooms.length != 0 &&
                                 <div> <label>Room Type</label>
                            <div className='roomTypes'>
                                
                                { rooms.map((obj, i)=> (
                                    <div >
                                        <Chip label={obj} onDelete={(e)=> {handleroomsDelete(e,obj)}}/>
                                      
                                    </div>
                                ))}


                                
                            </div></div>}
                            {facilities.length !=0 && 
                            <div >
                            <label>Facilities</label>
                            <div className='roomTypes'>
                                
                                {facilities.map((obj, i)=> (
                                    <div >
                                        <Chip label={obj} onDelete={(e)=> {handlefacilitiesDelete(e,obj)}}/>
                                      
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
                        
                                <div className="package-details-flex-2">
                                <h3><b>{info.cheapestPrice?info.cheapestPrice:data.cheapestPrice} &#8377;</b></h3> </div>
                                {offers && 
                                <div>
                                    <h4>You are adding an offer for this hotel</h4>
                                    <div className='m-4'>
                                        <span className='p-1 bg-[#f8d2d2] text-[red]'>{info.offertitle ? info.offertitle : data.offertitle}</span>
                                        <p>{info.offerdescription ? info.offerdescription : data.offerdescription}</p>
                                        <span>Price:<span><b>{info.offerprice ? info.offerprice: data.offerprice} &#8377;</b></span></span>

                                    </div>
                                </div>}
                               
                            </div>
                           
                        </div>
                   </div>
            </div>



            <Footer />
            
        </div>
    )
}

export default UpdateHotel