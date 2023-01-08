import Navbar from '../../../components/navbar/Navbar'
import Sidenav from '../../../components/sidenav/Sidenav'
import './singlePackage.scss'
import Packageimg from "../../../components/assets/package.png"
import { useLocation, useNavigate } from 'react-router-dom'
import useFetch from '../../../hooks/useFetch'
import axios from 'axios'
import Slider from "react-slick";
import '../../../../node_modules/slick-carousel/slick/slick.css'; 
import '../../../../node_modules/slick-carousel/slick/slick-theme.css'; 
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import {useState} from 'react'
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import { Button } from '@mui/material'



const SinglePackage = () => {
    const [sidenavOpen, setSideNavOpen] = useState(false)
    const handlesidenavOpen = () => {
        setSideNavOpen(!sidenavOpen);
    }
    const axiosInstance = axios.create({
        baseURL: process.env.REACT_APP_API_URL,
    })
    const navigate = useNavigate();
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const {data, loading, error,reFetch } = useFetch(`/packages/find/${id}`);
    console.log(data)
    const [clear, setClear] = useState([]);
    const [updateMode,setUpdateMode]=useState(false);
    const [dayTitle, setDayTitle] = useState("");
    const [dayDescUp, setDayDescUp] = useState("");
    const schedule_update=data.shedule;
    console.log(data.shedule);
    console.log(schedule_update);
    //console.log("specific schedule of first day title only "+ schedule_update[0].dayTitle);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false
      };

    const handlePackageUpdate = (id) => {
        navigate(`/packages/${id}/update`)
    }
    const handlePackageDelete = async (id) => {
        try{
            await axiosInstance.delete(`/packages/${id}`);
            navigate('/packages')
        }catch(err){
            console.log(err);
        }

    }


    const handleTitleChange = (e,i) => {
        
            console.log("index value is "+i);
            
            
             schedule_update[i].dayTitle=e.target.value;
           
             console.log("new title is"+schedule_update[i].dayTitle);

           
        }
    

    const handleDescChange = (e,i) => {
        console.log("index value is "+i);
            
            
             schedule_update[i].dayDesc=e.target.value;
           
             console.log("new desc is"+schedule_update[i].dayDesc);
    
    }

    const handleUpdateSchedule=async e=>{

        e.preventDefault();

        try{
            const updatedPackage = {
                shedule:schedule_update,
            };
            await axios.patch(`/packages/${id}`, updatedPackage);
            console.log("package has been updated")

            reFetch();
        }catch(err){
            console.log(err)
        }

        setUpdateMode(false);
    }

   const  handleDeleteSchedule=async e=>{

    try{
        const updatedPackage = {
           
            shedule:clear,
          };
          console.log(updatedPackage)
          await axiosInstance.patch(`/packages/${id}`, updatedPackage);
          reFetch();
          
    }
    catch(err){
        console.log(err)
    }

   }

    const setLocationNull=async e=>{
        try{
            const updatedPackage = {
               
                locations:clear,
              };
              console.log(updatedPackage)
              await axiosInstance.patch(`/packages/${id}`, updatedPackage);
              reFetch();
              
        }
        catch(err){
            console.log(err)
        }

    }


    const setFeaturesNull=async e=>{
        try{
            const updatedPackage = {
               
                features:clear,
              };
              console.log(updatedPackage)
              await axiosInstance.patch(`/packages/${id}`, updatedPackage);
              reFetch();
        }
        catch(err){
            console.log(err)
        }

    }
    const setActivitiesNull=async e=>{
        try{
            const updatedPackage = {
               
                activities:clear,
              };
              console.log(updatedPackage)
              await axiosInstance.patch(`/packages/${id}`, updatedPackage);
              reFetch();
        }
        catch(err){
            console.log(err)
        }

    }
    return(

        <div className="Single-package">
            <Navbar onclick={handlesidenavOpen}/>
            <Sidenav isOpen={sidenavOpen}/>

            <div className="singlepackage-container">
               {loading ? ("loading ") : (
                    <div className="singlepackage">
                  
                    <div className="singlepackage-body">

                        <div className="singlepack-left">
                            <Slider {...settings}>
                               {/*  <div className="img"><img src={Packageimg}/> </div>
                                <div className="img"><img src={Packageimg}/> </div>

                                <div className="img"><img src={Packageimg}/> </div>
 */}                            {data.images && data.images.map((pic) => (
                                        <div className='img'><img src={pic} alt="" /></div>
                                    ))}
              
                            </Slider>
                            
                        </div>
                        <div className="singlepack-right">
                        <h1>{data.title}</h1>

                            <p>{data.description}</p>
                            <h4>{data.duration}</h4>
                            <h4>{data.category}</h4>
                            <div className="single-pack-right-flex">
                                <CurrencyRupeeIcon /><h2>{data.cheapestPrice} /-</h2>
                             
                            </div>
                            <div className="single-pack-right-flex">
                                
                                <div> <RoomOutlinedIcon />{data.location && data.location.toUpperCase()}</div>
                            </div>
                            {/* <div className="flex-container">
                                   
                                    {/* <RoomOutlinedIcon /><h3>{hotel.location.toUpperCase()}</h3> */}
                               
                                <p>Hotel Rating: {data.rating}</p>
                            <div className="singlepackage-btngrp">
                            <button className='singlepackage-btn' onClick={() => handlePackageUpdate(id)}>Update Package</button>
                            <button className='singlepackage-btn' onClick={() => handlePackageDelete(id)}>Delete Package</button>
                            </div>
                        


                        </div>
                       


                      

                    </div>
                    <div className="single-package-body-2">
                            <div className="single-package-body-2-left">

                            <div>
                                <h3>Location Tags <button onClick={setLocationNull}>Clear All</button></h3>
                                
                                <div>
                                
                                {data.locations && data.locations.map((obj)=> (
                                    <li >
                                        <p>{obj}</p>
                                      
                                    </li>
                                ))}
                                </div>
                                </div>

                                <div class= 'mt-50'>
                                <h3>Features<button onClick={setFeaturesNull}>Clear All</button></h3>
                                
                                <div>
                                
                                {data.features && data.features.map((obj)=> (
                                    <li >
                                        <p>{obj}</p>
                                      
                                    </li>
                                ))}
                                </div>
                                </div>

                                <div class= 'mt-50'>
                                <h3>Activities<button onClick={setActivitiesNull}>Clear All</button></h3>
                                
                                <div>
                                
                                {data.activities && data.activities.map((obj)=> (
                                    <li >
                                        <p>{obj}</p>
                                      
                                    </li>
                                ))}
                                </div>
                                </div>
                                {/* onClick={setUpdateMode(true)} */}

                                    

                               
                                
                                {updateMode?(
                                        <div>
                                    <h2>Schedule</h2>
                                {data.shedule && data.shedule.map((obj, i)=> (
                                    <div className='shedule-day'>
                                        <div className="shedule-day-left">
                                            
                                            <h2>Day {i+1}</h2>
                                           
                                           
                                        </div>
                                        <div className="shedule-day-right">
                                            <h2 className="dayTitle">
                                            <input type="text" name="" id="s_title" defaultValue={obj.dayTitle} onChange={e=>handleTitleChange(e,i)} />
                                               </h2> 
                                                
                                                {/*  {obj.dayTitle}</h2> onChange={handleTitleChange}*/}
                                            <p>
                                            <textarea  name="" id="s_desc" defaultValue={obj.dayDesc} onChange={e=>handleDescChange(e,i)}/>
                                                
                                                {/* {obj.dayDesc} */}
                                                
                                                </p>
                                        </div>
                                    </div>
                                ))}
                                <Button onClick={handleUpdateSchedule}>Update Schedule Changes</Button>

                                </div>  ):(
                                    <div>
                                 <h2>Schedule</h2>
                                 {(data.shedule)?
                                 (<div>
                                 <button onClick={()=>setUpdateMode(true)}>EDIT</button><button onClick={handleDeleteSchedule}>DELETE</button>
                                 </div>):
                                 (<div></div>)
                                 }

                                {data.shedule && data.shedule.map((obj, i)=> (
                                    <div className='shedule-day'>
                                        <div className="shedule-day-left">
                                            
                                            <h2>Day {i+1}</h2>
                                        </div>
                                        <div className="shedule-day-right">
                                            <h2 className="dayTitle">{obj.dayTitle}</h2>
                                            <p>{obj.dayDesc}</p>
                                        </div>
                                    </div>
                                ))}
                                   </div> )}
                                   

                               

                            </div>
                            <div className="single-package-body-2-right">

                                
                            </div>

                        </div>
                </div>
               )}
            </div>



            
            
        </div>
    )
}


export default SinglePackage