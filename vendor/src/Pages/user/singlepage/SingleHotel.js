
import './singleHotel.scss'
import { useLocation, useNavigate } from 'react-router-dom'
import useFecth from '../../../hooks/useFetch'
import axios from 'axios'
import CloseIcon from '@mui/icons-material/Close';
import Backdrop from '@mui/material/Backdrop';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import { useEffect, useState } from 'react'
import Header from '../../../components/header/Header';
import hotelimg from "../../../Assets/hotel.jpg"
import Footer from '../../../components/Footer/Footer';
import Map from '../../../components/map/Map';



const SingleHotel = () => {
    const axiosInstance = axios.create({
        baseURL: process.env.REACT_APP_API_URL,
    })
    const [hote, setHotel] = useState([])
    const navigate = useNavigate();
    const location = useLocation();
    const id = location.pathname.split("/")[3];
    const {data, loading, error } = useFecth(`/hotels/find/${id}`);
    useEffect(()=>{
        setHotel(data)
    },[data])
    
    const handlehotelUpdate = (id) => {
        navigate(`/vendor/hotel/${id}/update`)
    }
    const handlehotelDelete = async (id) => {
        try{
            await axiosInstance.delete(`/hotels/${id}`);
            navigate('/vendor')
        }
        catch(error){
            if (error.response && error.response.status==400) {  
                
                alert('Sorry, no such hotel found');
              }
              if (error.response && error.response.status==404) {  
                
                alert('Failed to delete hotel!');
              }
              else if (error.request) {  
                    alert('Network error! Please try again later');
                }
            else{
                alert(error.message);
            }
        }

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
    const [open, setOpen] = useState(false);
    const hotelNavCon = document.querySelector('.hotelNavCon');
    const handleClose = () => {
        setOpen(false);
      };
      const handleToggle = () => {
        setOpen(!open);
      };
    
    const handleTabChange = () => {

        hotelNavCon.style.position = "sticky"
        hotelNavCon.style.top = 0;


    }
    const handleNavigate = (idval) => {
        const pos = document.getElementById(idval).offsetTop;
        window.scrollTo(0, pos -110)
    }

    return(

        <div className="Single-hotel">
      <Header />

            <div className="singlehotel-container sm:p-8">
               {loading ? ("loading ") : (
                    <div className="singlehotel">
                   
                    <div className='px-8 bg-[white] rounded-[10px] py-8 xl:flex xl:flex-row justify-start pt-12 gap-[5%]' >
                 {/* <Slider className='w-[85%] pb-8 mx-auto md:w-[40%]' {...settings}>
                 {hote.images && hote.images.map((img,i)=>(
                                 <img className='h-auto ' src={img} key={i} alt="Car in road" />
 
                         ))}
                     </Slider> */}
 
                    <div className='w-[100%]  xl:w-[65%] 2xl:w-[70%]  '>
                    <div className='flex flex-col sm:flex-row w-[100%] gap-[10px] justify-start'>
                         <div className='w-[100%] sm:w-[75%] bg-[green]'>
                             {hote.images && 
                            <img src={hote.images[0]} className='h-auto  w-[100%] ' alt="" srcset="" />
                                 }
                         </div>
                         <div className='flex flex-row sm:flex-col gap-[3.333333%] justify-start w-[100%] sm:w-[25%] '>
                                 {hote.images &&   
                                     hote.images.slice(1,4).map((itm,i)=> {
                                         if(i!=2){
                                             return(
                                                 <div className='h-auto sm:h-[31%] w-[31%] sm:w-full relative hotel-img-card' ><img src={itm} className='sm:absolute top-0 left-0 w-[100%] h-[100%] object-cover' alt="" srcset="" /></div>
 
                                             )
                                         }
                                         else{
                                             return(
                                                 <div className='h-auto sm:h-[31%] w-[31%] sm:w-full relative hotel-img-card' onClick={handleToggle}><img src={itm} className='sm:absolute top-0 left-0 w-[100%] h-[100%] object-cover' alt="" srcset="" /></div>
 
                                             )
                                         }
 
                                 })
                                 
                                 }
                         </div>
                         
                     </div>
                    </div>
                    <Backdrop 
                         sx={{ color: '#fff',opacity:0.1, zIndex: (theme) => theme.zIndex.drawer + 1 }}
                         open={open}
                         
                     >
                         <div onClick={handleClose} className='absolute rounded p-1 top-4 sm:top-20 right-4 sm:right-20 bg-[#7bbc67]'>                        <CloseIcon />
 </div>
                         <Slider className='w-[90%] bg-[white] py-8 mx-auto md:w-[90%]' {...settings1}>
                             {hote.images && hote.images.map((img,i)=>(
                                             <div className='px-8'><img className='h-auto  w-full' src={img} key={i} alt="Car in road" /></div>
 
                                     ))}
                                 </Slider>
                     </Backdrop>
                 <div className='pt-4 sm:pt-12 xl:pt-0 w-[100%] xl:w-[30%] 2xl:w-[25%]'>
                    <div className='flex flex-col sm:border sm:border-2 sm:border-[#e4e4e4] rounded-[10px]  mx-auto'>    
                     
                    
                     <div className='flex flex-col items-start gap-1  sm:px-6 py-8'>
                    
                     {hote.type &&
                                 <b><span className='px-4 mx-4 py-1 text-xs ml-[-10px] rounded-full bg-[#00ffa5] text-blacky-light'>{hote.type}</span></b>
                         }
                     <b><h1 className='text-xl sm:text-2xl'>{hote.title}</h1></b>
 
                     <p className='text-sm sm:text-lg text-graydust-medium '>{hote.location}</p>
 
                         <p className='text-blacky-light text-sm whitespace-pre-wrap	'>{hote.description}</p></div>
 
                        
                     
                 
                     {
                         hote.offers?
                         <div className='px-3 sm:px-6 '>
                             <span className='p-1 bg-[#f8d2d2] font-bold text-[red]'>{hote.offertitle}</span>
                             <p className='mt-2'>{hote.offerdescription}</p>
                             <span ><strike className='text-[grey]'>&#8377; {hote.cheapestPrice.toString().replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")} </strike><span className='text-2xl ml-3'><b>&#8377; {hote.toString().replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")} </b></span><span className='text-sm text-[red]'>per night</span></span>
                                    
                         </div>
                         :
                         <h1 className='font-semibold text-xl px-6 '><span className='text-xl '>&#8377; {hote.cheapestPrice.toString().replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")} </span><span className='text-sm font-light text-[red]'>per night</span></h1>
 
                     }
                     <hr className='hidden sm:block border-[#e4e4e4] my-4'/>
                         <div className=' sm:px-6 mt-8  my-2 flex gap-2'>
                         <button className='bg-[#00ffa5] px-4 py-2 rounded-[10px]' onClick={() => handlehotelUpdate(id)}>Update Hotel</button><button className='bg-[#00ffa5] px-4 py-2 rounded-[10px]' onClick={() => handlehotelDelete(id)}>Delete hotel</button>
 
                         </div>
 
                     </div>
                 </div>
             </div>
             <div className='flex  flex-col lg:flex-row  gap-[5%]'>
                <div className='flex justify-start flex-col w-[100%] px-8 py-8 rounded-[10px] mt-2 sm:mt-20 bg-[white]'>
                 <div className='flex border-b border-b-2 border-[#e4e4e4] gap-2 sm:gap-3 text-sm sm:text-lg font-bold w-full hotelNavCon sticky top-0 h-[70px] bg-[white] text-graydust-dark' onClick={handleTabChange}>
                         {hote.description &&                     <div className='px-1 sm:px-4 py-1 flex items-center nav-itm cursor-pointer desc ' onClick={()=> handleNavigate('desc')} ><a className='no-underline nav-link '>Description</a></div>
 }
                         <div className='px-1 sm:px-4 py-1  flex items-center nav-itm cursor-pointer fac' onClick={()=> handleNavigate('fac')}><a className='no-underline nav-link'>Amenities</a></div>
 
                         <div className=' px-1 sm:px-4 py-1 flex items-center nav-itm cursor-pointer rooms' onClick={()=> handleNavigate('rooms')}><a className='no-underline nav-link' >Rooms</a></div>
 
                         <div className='px-1 sm:px-4 py-1  flex items-center nav-itm cursor-pointer location' onClick={()=> handleNavigate('location')}><a className='no-underline nav-link' >Location</a></div>
 
 
                     </div>
 
                     <div className='px-4'>
 
                         {hote.description &&
                             <div className='py-6 nav-box' id="desc">
                                 <h2 className='text-xl font-bold mb-2'>About {hote.title}</h2>
                                 <p className='text-sm'>{hote.description}</p>
                                 {hote.features.length !== 0 && 
                                     <div className='pt-3'>
                                         <h3 className='text-base sm:text-lg font-bold mb-2'>Features</h3>
                                         <div className='px-2'>
                                             <ul className='list-disc px-4 text-sm'>
                                             {hote.features.map((itm)=> (
                                                 <li>{itm}</li>
                                             ))}
                                             </ul>
                                             
                                         </div>
 
                                     </div>
                                 }
 
                                 </div>}
                             {hote.facilities &&
                                 <div className=' nav-box' id="fac">
                                     {hote.facilities.length !== 0 &&
                                     <div className='py-6'>
                                     <h2 className='text-lg sm:text-xl font-bold mb-2'>Facilities Available</h2>
                                     <div className='flex gap-4 py-2 flex-wrap'>
                                         {hote.facilities.map((itm)=> (
                                             <span className='border-2 border-[#e4e4e4] px-4 py-1 text-sm sm:text-base text-graydust-dark rounded'>{itm}</span>
                                         ))}
                                     </div> </div>}
                                 </div>
 
 
 
                             }
                             {hote.rooms  && 
                                 <div className=' nav-box' id="rooms">
                                     {
                                         hote.rooms.length !== 0 &&
                                         <div className='py-6'>
                                             <h2 className='text-lg sm:text-xl font-bold mb-2'>Type of Rooms</h2>
 
                                                 <div className='px-2 text-sm'>
                                                         <ul className='list-none flex flex-col gap-4 px-1 sm:px-4'>
                                                         {hote.rooms.map((itm)=> (
                                                             <li>{itm}</li>
                                                         ))}
                                                         </ul>
                                                         
                                                     </div> 
                                         </div>
                                     }                               </div>
                             }
                             {hote.googlelocation && <div className='py-6 nav-box' id="location">
                                <h1 className='text-lg sm:text-xl font-bold'>Location</h1>
                                <div className='py-6 flex'>
                                    <div>
                                    <Map googlelocation={hote.googlelocation}/>
                                    </div>
                                    
                                </div>
                            </div>}
                            
                             
                     </div>
                     
                </div>
               
               
               
                
           
             </div>
                             
                             
 
                      
            
 
                                
                               
 
                               
 
 
                                 
                        </div>
                           
               
               )}
            </div>



            <Footer />
            
        </div>
    )
}


export default SingleHotel
