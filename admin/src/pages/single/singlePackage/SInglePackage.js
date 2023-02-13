import Navbar from '../../../components/navbar/Navbar'
import Sidenav from '../../../components/sidenav/Sidenav'
import './singlePackage.scss'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TourIcon from '@mui/icons-material/Tour';

import Packageimg from "../../../components/assets/package.png"
import { useLocation, useNavigate } from 'react-router-dom'
import useFetch from '../../../hooks/useFetch'
import axios from 'axios'
import Slider from "react-slick";
import '../../../../node_modules/slick-carousel/slick/slick.css'; 
import '../../../../node_modules/slick-carousel/slick/slick-theme.css'; 
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import {useState, useEffect} from 'react'
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import { Button } from '@mui/material'
import Backdrop from '@mui/material/Backdrop';
import CloseIcon from '@mui/icons-material/Close';


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
    const [pack, setPack] = useState([])
    const {data, loading, error,reFetch } = useFetch(`/packages/find/${id}`);
    useEffect(()=>{
        setPack(data)
    })
    const [open, setOpen] = useState(false);
    const hotelNavCon = document.querySelector('.hotelNavCon');

    const handleNavigate = (idval) => {
        const pos = document.getElementById(idval).offsetTop;
        window.scrollTo(0, pos -110)
    }
    const handleTabChange = () => {

        hotelNavCon.style.position = "sticky"
        hotelNavCon.style.top = 0;
       


    }
    var settings1 = {
        dots: true,
        arrows:true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed: 4000,
        
        responsive: [
            {
                breakpoint: 640,
                settings:{
                    slidesToShow:1,
                }
            }
        ]
    };
    
    //console.log(data)
    const [clear, setClear] = useState([]);
    const [updateMode,setUpdateMode]=useState(false);
    const [dayTitle, setDayTitle] = useState("");
    const [dayDescUp, setDayDescUp] = useState("");
    const schedule_update=data.shedule;
    //console.log(data.shedule);
    //console.log(schedule_update);
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
        }
            catch(error){
                if (error.response && error.response.status==400) {  
                    
                    alert('Sorry, no such review found');
                  }
                  if (error.response && error.response.status==404) {  
                    
                    alert('Sorry, no such review found');
                  }
                  else if (error.request) {  
                        alert('Network error! Please try again later');
                    }
                else{
                    alert(error.message);
                }
            }
        

    }


    const handleTitleChange = (e,i) => {
        
            //console.log("index value is "+i);
            
            
             schedule_update[i].dayTitle=e.target.value;
           
            // console.log("new title is"+schedule_update[i].dayTitle);

           
        }
    

    const handleDescChange = (e,i) => {
        //console.log("index value is "+i);
            
            
             schedule_update[i].dayDesc=e.target.value;
           
            // console.log("new desc is"+schedule_update[i].dayDesc);
    
    }
    const handleClose = () => {
        setOpen(false);
      };
      const handleToggle = () => {
        setOpen(!open);
      };
    const handleUpdateSchedule=async e=>{

        e.preventDefault();

        try{
            const updatedPackage = {
                shedule:schedule_update,
            };
            await axios.patch(`/packages/${id}`, updatedPackage);
           // console.log("package has been updated")

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
         // console.log(updatedPackage)
          await axiosInstance.patch(`/packages/${id}`, updatedPackage);
          reFetch();
          
    }
    catch(err){
        console.log(err)
    }

   }
   const text = "i would like to book for the package "

    const setLocationNull=async e=>{
        try{
            const updatedPackage = {
               
                locations:clear,
              };
             // console.log(updatedPackage)
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
                        <Backdrop 
                        sx={{ color: '#fff',opacity:0.1, zIndex: (theme) => theme.zIndex.drawer + 1 }}
                        open={open}
                        
                    >
                        <div onClick={handleClose} className='absolute rounded p-1 top-40 sm:top-20 right-4 sm:right-20 bg-[#7bbc67]'>                        <CloseIcon />
                        </div>
                        <Slider className='w-[90%] bg-[white] py-8 mx-auto md:w-[90%]' {...settings1}>
                            {pack.images && pack.images.map((img,i)=>(
                                            <div className='px-8'><img className='h-auto  w-full' src={img} key={i} alt="Car in road" /></div>

                                    ))}
                                </Slider>
                    </Backdrop>
                    <div className='mt-10'>
                 <div className='w-[100%] bg-[white] pl-4 pr-4 pt-4 pb-12 sm:rounded-[10px] sm:card-shadow flex flex-col-reverse xl:flex-row'>
                       
              
                


                <div className='hidden xl:flex w-[50%] pr-28 flex  flex-col justify-start gap-6  pt-8'>
                        <div className=' flex flex-col gap-2  items-start'>
                            <h3 className='font-bold text-evergreendark text-base  '>{pack.duration}</h3>

                            <h2 className='text-3xl font-bold '>{pack.title}</h2>
                                 <p className='text-[grey] text-lg'>{pack.location}</p>

                        </div>
                        
                        <div className='flex flex-col gap-2 items-start'>
                        <span className='px-4 py-1 bg-evergreen-tag rounded-full'>{pack.category}</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nihil eos cumque, amet doloribus, quae maiores assumenda minus eligendi quisquam distinctio ipsam, accusantium exercitationem blanditiis ea odio ab ex id!</p>
                        
                        </div>
                       <div className='flex  justify-between items-start'>
                                    {pack.offers ?
                                    
                                    (<div className=''>
                                        <span className='p-1 bg-[#f8d2d2] font-bold text-[red]'>Flat 15% off</span>
                                        <p className='mt-2'>Grab this offer soon</p>
                                        <span ><span className='text-2xl '><b>&#8377; 5000 </b></span><strike className='text-[grey]'>&#8377; {pack.cheapestPrice} </strike></span><br />
                                        <span className='text-sm text-[red]'>per night</span>
                                            
                                    </div>):
                                    (<div className=' flex flex-col'>
                                    <h2 className='font-semibold text-2xl '>&#8377; {pack.cheapestPrice}</h2>
                                    <span className='text-graydust-dark text-xs'>Per person</span>
                                
                                </div>)}
                                <div className='flex flex-col items-end gap-2'>
                                <button className='bg-[#00ffa5] px-4 py-2 rounded-[10px]' onClick={() => handlePackageUpdate(id)}>Update Package</button><button className='bg-[#00ffa5] px-4 py-2 rounded-[10px]' onClick={() => handlePackageDelete(id)}>Delete Package</button>

                                </div>

                     </div>
                        
                </div>



















                <div className='mt-8 sm:mt-12 flex xl:hidden flex-col gap-4'>
                    <div className='flex justify-between items-end sm:items-center'>
                        <div className=' flex flex-col gap-1 sm:gap-2  items-start'>
                               <div className='flex gap-2 items-center'>
                               <h3 className='font-bold text-evergreendark text-sm sm:text-base  '>{pack.duration}</h3>
                                <span className='hidden sm:block px-4 py-1 bg-evergreen-tag font-bold text-sm sm:text-base rounded-full'>{pack.category}</span>

                               </div>
                                <h2 className='text-lg sm:text-3xl font-bold '>{pack.title}</h2>
                                    <p className='text-[grey] text-sm sm:text-lg'>{pack.location}</p>

                            </div>
                            {pack.offers ? (
                                    <div className='flex w-[40%] flex-col items-end'>
                                    <span className='p-1 bg-[#f8d2d2] text-xs sm:text-base font-bold text-[red]'>Flat 15% off</span>
                                    <span ><span className='text-lg sm:text-2xl '><b>&#8377; 5000 </b></span><strike className='text-xs sm:text-base text-[grey]'>&#8377; {pack.cheapestPrice} </strike></span>
                                    <span className='text-sm text-[red]'>per night</span>
                                        
                                </div>
                                
                            ) : (
                                <div className='flex  items-start gap-6'>

                                <div className='flex  flex-col items-end sm:gap-1'>

                                    <h2 className='font-semibold text-lg sm:text-2xl '>&#8377; {pack.cheapestPrice}</h2>
                                    <span className='text-graydust-dark text-xs sm:text-sm xl:text-xs'>Per person</span>



                                </div>
                                
                                
                            </div>
                            )}
                                   
                                
                            
                    </div>
                    
                        <div className='flex flex-col gap-2 items-start'>
                        <span className='block sm:hidden px-4 py-1 bg-evergreen-tag text-sm font-bold sm:text-base rounded-full'>{pack.category}</span>

                        <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nihil eos cumque, amet doloribus, quae maiores assumenda minus eligendi quisquam distinctio ipsam, accusantium exercitationem blanditiis ea odio ab ex id!</p>
                        
                        </div>
                        <div className='flex items-end pt-4 gap-4'>
                        <button className='bg-[#00ffa5] px-4 py-2 rounded-[10px]' onClick={() => handlePackageUpdate(id)}>Update Package</button><button className='bg-[#00ffa5] px-4 py-2 rounded-[10px]' onClick={() => handlePackageDelete(id)}>Delete Package</button>

                        </div>


                </div>




                <div className='w-[100%] xl:w-[50%]'>
                    {pack.images && 
                        <div className='hidden xl:block'>
                            <img src={pack.images[0]} className='w-[60%] rounded xl:w-[100%]' alt="" />
                        </div>

                        
                    
                    }
                    <div className='flex flex-col sm:flex-row w-[100%] gap-[10px] xl:hidden justify-start'>
                        <div className='w-[100%] sm:w-[75%] bg-[green]'>
                            {pack.images && 
                           <img src={pack.images[0]} className='h-auto  w-[100%] ' alt="" srcset="" />
                                }
                        </div>
                        <div className='flex flex-row sm:flex-col gap-[3.333333%] justify-start w-[100%] sm:w-[25%] '>
                                {pack.images &&   
                                    pack.images.slice(1,4).map((itm,i)=> (
                                        <div className='h-auto sm:h-[31%] w-[31%] sm:w-full relative' ><img src={itm} className='sm:absolute top-0 left-0 w-[100%] h-[100%] object-cover' alt="" srcset="" /></div>


                                    ))
                                
                                }
                        </div>
                        
                    </div>

                </div>
                </div> 




                <div className='flex flex-col mb-12 lg:flex-row gap-[5%]'>
                        <div className='flex justify-start flex-col w-[100%]  px-8 py-4 sm:rounded-[10px] sm:card-shadow mt-4 sm:mt-20 bg-[white]'>

                            <div className='flex border-b border-b-2 gap-2 sm:gap-3 text-sm md:text-lg font-bold w-full hotelNavCon sticky top-[60px] h-[70px] bg-[white] text-graydust-dark' onClick={handleTabChange}>
                                <div className='px-1 lg:px-4 py-1 flex items-center text-sm md:text-xl nav-itm cursor-pointer desc  ' onClick={()=> handleNavigate('desc')} ><a className='no-underline nav-link '>Overview</a></div>

                                <div className='px-1 lg:px-4 py-1  flex items-center nav-itm text-sm md:text-xl cursor-pointer fac' onClick={()=> handleNavigate('fac')}><a className='no-underline nav-link'>Itinerary</a></div>

                                <div className=' px-1 lg:px-4 py-1 flex items-center nav-itm text-sm md:text-xl cursor-pointer things' onClick={()=> handleNavigate('things')}><a className='no-underline nav-link' >Things to do</a></div>
                                <div className=' px-1 lg:px-4 py-1 flex items-center nav-itm text-sm md:text-xl cursor-pointer images' onClick={()=> handleNavigate('images')}><a className='no-underline nav-link' >Images</a></div>

                                <div className='px-1 lg:px-4 py-1 hidden sm:flex items-center text-sm md:text-xl nav-itm cursor-pointer location ' onClick={()=> handleNavigate('location')}><a className='no-underline nav-link' >Location</a></div>


                            </div>



                            <div className='sm:px-4'>

                                    {pack.description &&
                                        <div className='pt-6 sm:py-6 nav-box' id="desc">
                                            <h2 className='text-lg sm:text-xl font-medium mb-2'>{pack.title}</h2>
                                            <p className='text-sm text-graydust-dark sm:text-base'>{pack.description}</p>
                                            {pack.features.length !== 0 && 
                                                <div className='pt-3'>
                                                    <h2 className='text-base sm:text-lg font-bold mb-2'>Features</h2>
                                                    <div className='px-2'>
                                                        <ul className='list-disc px-4 text-base'>
                                                        {pack.features.map((itm)=> (
                                                            <li>{itm}</li>
                                                        ))}
                                                        </ul>
                                                        
                                                    </div>

                                                </div>
                                            }

                                            </div>}
                                        {pack.shedule &&
                                            <div className=' nav-box' id="fac">
                                                {pack.shedule.length !== 0 &&
                                                <div className='pt-6 sm:py-6'>
                                                <h2 className='text-lg sm:text-xl font-bold mb-2'>Shedule</h2>
                                                <div className='flex flex-col gap-4 py-2'>
                                                {pack.shedule && pack.shedule.map((obj,i)=>(
                                                    <div className='sm:flex my-2  py-2 rounded shadow-shedule-card' key={i}>
                                                    <div className='text-base sm:text-lg w-32 p-2 text-graydust-medium flex items-center font-medium w-[100%] sm:w-[20%] xl:w-[10%]'><h3>Day {i+1}</h3></div>
                                                    <div className='sm:border-l-2 p-4 text-justify sm:border-[silver] w-[100%] sm:w-[80%] xl:w-[90%]'>
                                                        <h2 className='text-base sm:text-xl font-semibold'>{obj.dayTitle}</h2>
                                                        <p className='text-sm sm:text-base text-graydust-dark whitespace-pre-wrap	'> {obj.dayDesc}</p>
                                                    </div>
                                                </div>
                                                ))}
                                                </div> </div>}
                                            </div>



                                        }
                                        {pack.activities  && 
                                            <div className=' nav-box' id="things">
                                                {
                                                    pack.activities.length !== 0 &&
                                                    <div className='pt-6 sm:py-6'>
                                                        <h2 className='text-lg sm:text-xl font-bold mb-2'>Things to do</h2>

                                                            <div className='px-2 text-base sm:text-lg'>
                                                                    <ul className='list-none flex flex-col py-4 gap-6 px-1 sm:px-4'>
                                                                    {pack.activities.map((itm)=> (
                                                                        <li className='flex gap-3 items-center'><span><TourIcon sx={{color:"#3cb500", fontSize: 40}}/></span><span>{itm}</span></li>
                                                                    ))}
                                                                    </ul>
                                                                    
                                                                </div> 
                                                    </div>
                                                }                               </div>
                                        }



                                    {pack.location && <div className='pt-6 sm:py-6 nav-box' id="images">
                                        <div className='flex items-center justify-between pr-[3%]'>
                                            <span className='text-lg sm:text-xl font-bold'>Image Gallery</span>
                                            {pack.images.length> 1 &&
                                                <span className='text-[blue] cursor-pointer font-bold' onClick={handleToggle}>View more</span>
                                            }
                                            </div>
                                            <div className='pt-6 flex'>
                                                <div className='flex flex-wrap gap-[3%]'>
                                                    {pack.images.slice(0,6).map((itm)=>(
                                                        <div className='w-[47%] xl:w-[30%] mb-4'><img src={itm} className="w-full" alt="" /></div>
                                                    ))}
                                                </div>
                                               
                                            </div>
                                        </div>}



                                   
                                        
                                </div>
                        
                        
                        </div>
                        
              
                </div> 





              
            </div>
                   
                   
                </div>
               )}
            </div>



            
            
        </div>
    )
}


export default SinglePackage