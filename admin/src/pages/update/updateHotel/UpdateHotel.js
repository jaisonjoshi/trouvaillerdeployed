
import { useState, useEffect } from 'react';
import {useLocation, useNavigate} from 'react-router-dom'
import Navbar from '../../../components/navbar/Navbar';
import Sidenav from '../../../components/sidenav/Sidenav';
import '../../new/newHotel/newHotel.scss';
import axios from "axios"
import useFecth from '../../../hooks/useFetch';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import Chip from '@mui/material/Chip';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import CropEasy from '../../../components/crop/CropEasy';


const UpdateHotel =() => {
    //For getting the id
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    
    //initiating react navigate
    const navigate = useNavigate();

    //fetching the hotel details
    const {data} = useFecth(`/hotels/find/${id}`);
    //console.log(data)

    //collapsible navigation bar code
    const [sidenavOpen, setSideNavOpen] = useState(false)
    const handlesidenavOpen = () => {
        setSideNavOpen(!sidenavOpen);
    }

    //axios instance initialisation
    const axiosInstance = axios.create({
        baseURL: process.env.REACT_APP_API_URL,
    })



    //initialising the images array with fetched data.
    var list = data.images

    //cropeasy states for croping images
    const [photoURL, setPhotoURL] = useState("");
    const [openCrop, setOpenCrop] = useState(false);
    const [imgFiles, setImgFiles] = useState([])
    const [filec, setFile] = useState("")

    //Declare aspect ration for the cropeasy output image
    const size = 16/9;

    //calling cropeasy for croping and receiving output image
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if(file){
            setFile(file);
            setPhotoURL(URL.createObjectURL(file)); 
            setOpenCrop(true);
            //console.log(imgFiles)
        }
    }



    // Declaring states for all hotel information
    const [info, setinfo] = useState({});
    const [offers, setOffers] = useState(false)
    const [type, setType] = useState('');
    const [rooms, setRooms] = useState([]);
    const [query, setQuery] = useState("");
    const [facility, setFacility] = useState("");
    const [facilities, setFacilities] = useState([]);
    const [feature, setFeature] = useState("");
    const [features, setFeatures] = useState([]);
    const [locationitem, setLocationitem] = useState("");
    const [locations, setLocations] = useState([]);


    //initialising some of the information with fetched data
    useEffect(()=>{
        if(data.length !=0){
            setType(data.type)
            setRooms(data.rooms)
            setFacilities(data.facilities)
            setFeatures(data.features)
            setLocations(data.locations)
            setOffers(data.offers)
            if(offers){
                document.querySelector('.offerhotelcheck').checked =true;
            }
            
        }
    },[data])


    // ----state management functions for updating hotel information----

    //Common information
    const handleChange = (e) => {
        setinfo((prev) => ({...prev, [e.target.id] : e.target.value}));
    }
    const handleChangeLowerCase = (e) => {
       // console.log(e.target.value.toLowerCase())
        setinfo((prev) => ({...prev, [e.target.id] : e.target.value.toLowerCase()}))
        //console.log("in lowercase"+info);
    }

    //hotel type
    const handleTypeChange = (event) => {
        setType(event.target.value);
    };

    //room types
    const handleUpdateQuery = ({ target }) => {
        setQuery(target.value)
    }

    const handleNext = (e) => {
        e.preventDefault()
        setRooms(rooms=>[...rooms, query])
        document.getElementById('rooms').value = " "
        setQuery("")
        //console.log(rooms) ;   
    }

    const handleroomsDelete = (e, value)=> {
        e.preventDefault();
        setRooms(rooms.filter((itm)=> itm !== value))
    }

    //location tags
    const handleUpdateLocations = ({ target }) => {
        setLocationitem(target.value.toLowerCase());
    }

    const handlelocationNext = (e) => {
        e.preventDefault()
        //setSearches(searches => [...searches, query])
        setLocations(locations=>[...locations, locationitem])
        document.getElementById('locations').value = " "
        setLocationitem("")
       // console.log(locations)  
    }

    const handleLocationDelete = (e, value)=> {
        e.preventDefault();
        setLocations(locations.filter((itm)=> itm !== value))
    }

    //features
    const handleUpdateFeatures = ({ target }) => {
        setFeature(target.value)
    }

    const handlefeatureNext = (e) => {
        e.preventDefault()
        //setSearches(searches => [...searches, query])
        setFeatures(features=>[...features, feature])
        document.getElementById('features').value = " "
        setFeature("")
       // console.log(features)
       
        
   }

    const handlefeaturesDelete = (e, value)=> {
        e.preventDefault();
        setFeatures(features.filter((itm)=> itm !== value))
    }

    //facilities
    const handleUpdateFacility = ({ target }) => {
        setFacility(target.value)
    }

    const handleFacility = (e) => {
        e.preventDefault()
        setFacilities(facilities=>[...facilities, facility])
        document.getElementById('facilities').value = " "
        setFacility("")
    }

    const handlefacilitiesDelete = (e, value)=> {
        e.preventDefault();
        setFacilities(facilities.filter((itm)=> itm !== value))
    }


    //offers
    const handleofferChange = ()=> {
        
        setOffers(!offers)
        //console.log("offer set")
    }


    //Upload function
    const updatehandleClick = async e => {
        e.preventDefault();
        try{
            //initially list is initiated with the fetched image links. 
            //imgFiles gives the new cropped or updated images.
            //if imgFiles is empty, that means if user doesn't want to update old images, this list update function will not executed. 
            //If user tries to upload some images and crop, imgFiles function will be updated and old fetched array will be updated with new data.      
            if(imgFiles != ""){
                list = await Promise.all(
                    Object.values(imgFiles).map(async (file) => {
                        const data = new FormData();
                        data.append("file", file);
                        data.append("upload_preset", "upload");
                        const uploadRes = await axiosInstance.post(
                            "https://api.cloudinary.com/v1_1/difxlqrlc/image/upload",
                            data
                        );
                        const  url  = uploadRes.data.url;
                        return url;
                    }) 
                );
            }   
            //Creating an object with all new information that has to be updated.
            const updatedHotel = {
            ...info,
            images: list,type:type,offers:offers,rooms:rooms,facilities:facilities, features:features,locations:locations
            
            };

            //patch request initialisation
            await axiosInstance.patch(`/hotels/${id}`, updatedHotel)
            navigate(`/hotels/${id}`)
           // console.log(updatedHotel)
        } catch(error){
            if(error.response){
            if (error.response.status==400) {  
                
                alert('Sorry, no such hotel found.');
              }
              if (error.response.status==404) {  
                
                alert('Sorry, unable to find hotel!');
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
        <div className="new-hotel">
            <Navbar onclick={handlesidenavOpen}/>
            <Sidenav isOpen={sidenavOpen}/>

            <div className="newhotel-body">
                {openCrop &&
                <div className='crop-box-con'><CropEasy {...{ photoURL, setOpenCrop, setPhotoURL, setFile ,imgFiles,setImgFiles, size}} /></div>}
            
                <h1>Update the Hotel : {data.title}</h1>
                <div className="new-hotel-box">
                    <div className="newhotelform-container">
                        <form >
                            <div className="form-item-file">
                                <span>Upload image</span>
                                <label htmlFor='img-input'>  <DriveFolderUploadIcon className='upload-icn'/></label>
                                <input type="file" name="" id="img-input"  onChange={handleImageChange}/>
                                <p>click again to upload next image</p>
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
                                            className="outline-none">
                                            
                                        
                                            <MenuItem value="hotel">Hotel</MenuItem>
                                            <MenuItem value="private villa">Private Villa</MenuItem>

                                            <MenuItem value="home stay">Home Stay</MenuItem>
                                            <MenuItem value="resort">Resort</MenuItem>
                                            <MenuItem value="campsite">Campsite</MenuItem>
                                        </Select>
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
                            
                            </div>
                            <div className="room-btn-box">
                                <button onClick={handlelocationNext} className="room-btn">Add location tag</button>
                            </div>




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




                            <div className="form-item">
                                <label>Features</label>
                                <input type="text" id="features" onChange={handleUpdateFeatures}/>
                            </div>
                            <div className="room-btn-box">
                                <button onClick={handlefeatureNext} className="room-btn">Add feature</button>
                            </div>
                            



                            <div className="form-item">
                                <label>Price</label>
                                <input type="text" id="cheapestPrice" defaultValue={data.cheapestPrice} onChange={handleChange}/>                            
                            </div>
                            <div className="form-item">
                                <label>Vendor ID</label>
                                <input type="text" id="vendorid" defaultValue={data.vendorid} onChange={handleChange}/>                            
                            </div>



                            {/* <div className="form-item">
                                <label>Rating</label>
                                <input type="number" min="0" max="6" id="rating" defaultValue={data.rating} onChange={handleChange}/>
                            
                            </div> */}




                            <div className="flex items-center gap-[5px]">
                                <label>Offer</label>
                                <input type="checkbox" id="offers" className='offerhotelcheck' onChange={handleofferChange}/>                                
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
                                <button  onClick={updatehandleClick}>Update Hotel</button>

                            </div>
                        </form>
                    </div>



                    <div className="form-test">
                        <h3>Upload preview</h3>
                        <p className='text-sm text-blacky-bright'>Here you can see the preview of what you are going to publish. Please verify all the fields are correct before uploading.</p>


                        <div className="img-container">
                            {imgFiles && Object.values(imgFiles).map((pic, i)=>(
                                    <img key={i} src={
                                        pic
                                        ? URL.createObjectURL(pic)
                                        : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                                    } alt="" />
                            ))}

                        </div>




                        <div className="package-details">
                            <div className='package-details-head'>
                                <h2>{info.title? info.title: data.title}</h2>
                                <span >{type}</span>

                            </div>                             
                        
                            <p>{info.location?info.location:data.location}</p>
                            <p>{info.address? info.address: data.address}</p>

                            <p>{info.description? info.description: data.description}</p>


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
                            
                

                
                                
                            <div className="package-details-flex-2">
                            <h3>{info.cheapestPrice ? info.cheapestPrice.toString().replace(/(\d)(?=(\d\d)+\d$)/g, "$1,") : data.cheapestPrice.toString().replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")} &#8377;</h3>
                            </div>

                            {/* <h3>Hotel Rating</h3>
                            <h3>{info.rating}</h3> */}


                            {offers && 
                            <div className='offer'>
                                <h4>You are adding an offer for this hotel</h4>
                                <div className='offer-con'>
                                    <span className='offertitle'>{info.offertitle ? info.offertitle : data.offertitle}</span>
                                    <p>{info.offerdescription ? info.offerdescription : data.offerdescription}</p>
                                    <span>Price:<span><b>{info.offerprice ? info.offerprice.toString().replace(/(\d)(?=(\d\d)+\d$)/g, "$1,"): data.offerprice.toString().replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")} &#8377;</b></span></span>

                                </div>
                            </div>}

                        </div>






                        
                    </div>
                </div>
            </div>



            
            
        </div>
    )
}

export default UpdateHotel