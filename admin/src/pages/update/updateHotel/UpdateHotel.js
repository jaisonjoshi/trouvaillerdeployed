
import { useState } from 'react';
import {useLocation, useNavigate} from 'react-router-dom'
import Navbar from '../../../components/navbar/Navbar';
import Sidenav from '../../../components/sidenav/Sidenav';
import '../../new/newHotel/newHotel.scss';
import axios from "axios"
import useFecth from '../../../hooks/useFetch';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
 

const UpdateHotel =() => {
    const location = useLocation();
    const id = location.pathname.split("/")[2];

    const {data} = useFecth(`/hotels/find/${id}`);

    const [sidenavOpen, setSideNavOpen] = useState(false)

    const handlesidenavOpen = () => {
        setSideNavOpen(!sidenavOpen);
    }

    const axiosInstance = axios.create({
        baseURL: process.env.REACT_APP_API_URL,
    })

    var old_features=data.features;
    var old_facilities=data.facilities;
    var old_locations=data.locations;
    var old_rooms=data.rooms;

    const navigate = useNavigate();
    const [files, setFile] = useState("");
    
    const [info, setinfo] = useState({});
   
    const [rooms, setRooms] = useState([]);
    const [query, setQuery] = useState("");
    const [facility, setFacility] = useState("");
    const [facilities, setFacilities] = useState([]);
    const [feature, setFeature] = useState("");
    const [features, setFeatures] = useState([]);
    const [locationitem, setLocationitem] = useState("");
    const [locations, setLocations] = useState([]);


    const handleUpdateQuery = ({ target }) => {
        // Update query onKeyPress of input box
        setQuery(target.value)
      }

      const handleUpdateFacility = ({ target }) => {
        // Update query onKeyPress of input box
        setFacility(target.value)
      }

      const handleNext = (e) => {
        e.preventDefault()
        //setSearches(searches => [...searches, query])
        setRooms(rooms=>[...rooms, query])
        document.getElementById('rooms').value = " "
        setQuery("")
        console.log(rooms) ;   
   }

   const handleFacility = (e) => {
    e.preventDefault()
    //setSearches(searches => [...searches, query])
    setFacilities(facilities=>[...facilities, facility])
    document.getElementById('facilities').value = " "
    setFacility("")

    //console.log(rooms);    
    }

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

         const handleUpdateFeatures = ({ target }) => {
            // Update query onKeyPress of input box
            setFeature(target.value)
          }

          const handlefeatureNext = (e) => {
            e.preventDefault()
            //setSearches(searches => [...searches, query])
            setFeatures(features=>[...features, feature])
            document.getElementById('features').value = " "
            setFeature("")
            console.log(features)
           
            
       }



    
    var list = data.images

    const handleChange = (e) => {
        
        setinfo((prev) => ({...prev, [e.target.id] : e.target.value}))
       
    }

    const handleChangeLowerCase = (e) => {
        console.log(e.target.value.toLowerCase())
        setinfo((prev) => ({...prev, [e.target.id] : e.target.value.toLowerCase()}))
        console.log("in lowercase"+info);
    }

    const updatehandleClick = async e => {
        e.preventDefault();
        if(rooms.length !== 0)
        {
            console.log("rooms array is not empty now");
            console.log(rooms);
            old_rooms=rooms;
            
        }
        if(facilities.length !== 0)
        {
            console.log("facilities array is not empty now");
            console.log(facilities);
            old_facilities=facilities;
            
        }
        if(features.length !== 0)
        {
            console.log("features array is not empty now");
            console.log(features);
            old_features=features;
            
        }
        if(locations.length !== 0)
        {
            console.log("location array is not empty now");
            console.log(locations);
            old_locations=locations;
            
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
                   
                  
                
              const updatedHotel = {
                ...info,
                images: list,
                rooms:old_rooms,
                facilities:old_facilities,
                features:old_features,
                locations:old_locations,
              };
              console.log(updatedHotel)
              await axiosInstance.patch(`/hotels/${id}`, updatedHotel)
             

                navigate(`/hotels/${id}`)
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

    

    return(
        <div className="new-hotel">
            <Navbar onclick={handlesidenavOpen}/>
            <Sidenav isOpen={sidenavOpen}/>

            <div className="newhotel-body" key={data._id}>
                    <h1>Update the Hotel : {data.title}</h1>
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
                                <label > Hotel type</label>
                                <input type="text" name="" id="type" defaultValue={data.type} onChange={handleChangeLowerCase}/>
                            
                            </div>
                            <div className="form-item">
                                <label>Description</label>
                                <textarea type="text" id="description" defaultValue={data.description} onChange={handleChange}/>
                            
                            </div>
                            <div className="form-item">
                                <label>Address</label>
                                <textarea type="text" id="address" defaultValue={data.address} onChange={handleChange}/>
                            
                            </div>

                            <div className="form-item">
                                <label>Location</label>
                                <input type="text" id="location" defaultValue={data.location} onChange={handleChangeLowerCase}/>
                            
                            </div>
                            <div className="form-item">
                                <label>Location tags</label>
                                <textarea type="text" id="locations"   onChange={handleUpdateLocations}/>
                                {/* //add loc code handlelocation */}
                            
                            </div>
                                <div className="room-btn-box">
                                <button onClick={handlelocationNext} className="room-btn">Add location tag</button>

                                </div>

                            {/* //add next location handlenext*/}

                            <div className="form-item">
                                    <label>Room types</label>
                                    <input type="text" id="rooms" onChange={handleUpdateQuery}/>

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
                            {/* //facilities */}

                            <div className="form-item">
                                    <label>Features</label>
                                    <input type="text" id="features" onChange={handleUpdateFeatures}/>
                                        {/* handlenextfeature and onclick */}
                                </div>
                                
                                <div className="room-btn-box">
                                <button onClick={handlefeatureNext} className="room-btn">Add feature</button>

                                </div>
                            
                            <div className="form-item">
                                <label>Price</label>
                                <input type="text" id="cheapestPrice" defaultValue={data.cheapestPrice} onChange={handleChange}/>
                            
                            </div>
                            <div className="form-item">
                                <label>Rating</label>
                                <input type="number" min="0" max="6" id="rating" defaultValue={data.rating} onChange={handleChange}/>
                            
                            </div>
                            <div className="hotel-form-submit">
                                <button  onClick={updatehandleClick}>Update Hotel</button>

                            </div>
                        </form>
                    </div>
                    <div className="form-test">
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
                                <h1>{info.title}</h1>
                            <div >
                               <h3>Hotel Type</h3>
                                <div className='roomTypes'>{info.type}</div>
                            </div>

                            <h3>Hotel Description</h3>
                                <p>{info.description}</p>

                                <h3>Hotel Address</h3>
                                <p>{info.address}</p>
                               
                                <h3>Hotel Location</h3>
                                 <p>{info.location}</p>

                                 <div >
                               <h3>Location Tags</h3>
                                <div className='roomTypes'>
                                
                                {locations && locations.map((obj, i)=> (
                                    <div >
                                        <p>{obj}</p>
                                      
                                    </div>
                                ))}
                                
                               </div>
                            </div>


                                 <div >
                            <h3>Room Type</h3>
                            <div className='roomTypes'>
                                
                                {rooms && rooms.map((obj, i)=> (
                                    <div >
                                        <p>{obj}</p>
                                      
                                    </div>
                                ))}
                                
                            </div>
                        </div>
                        <div >
                            <h3>Facilities</h3>
                            <div className='roomTypes'>
                                
                                {facilities.map((obj, i)=> (
                                    <div >
                                        <p>{obj}</p>
                                      
                                    </div>
                                ))}
                                
                            </div>
                        </div>

                        <div >
                               <h3>Features</h3>
                                <div className='roomTypes'>
                                
                                {features && features.map((obj, i)=> (
                                    <div >
                                        <p>{obj}</p>
                                      
                                    </div>
                                ))}
                                
                               </div>
                            </div>
                                    
                                <div className="package-details-flex-2">
                                <CurrencyRupeeIcon /><h2>{info.cheapestPrice} /-</h2>
                                </div>

                                <h3>Hotel Rating</h3>
                                <h3>{info.rating}</h3>
                            </div>
                           
                        </div>
                   </div>
            </div>



            
            
        </div>
    )
}

export default UpdateHotel