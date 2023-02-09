import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import Footer from "../components/Footer/Footer"
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useLocation } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { useState } from 'react';
import { useEffect } from 'react';
import Backdrop from '@mui/material/Backdrop';
import CloseIcon from '@mui/icons-material/Close';
import Map from '../components/map/Map';
import NavbarTest from '../components/navbar/navbar';

import h from '../Assets/h.png'




const Hotel = () => {
    const [anim, setAnim] = useState("hide")
    useEffect(()=>{
        window.addEventListener('load', setAnim("show"))

    }, [])
    const [open, setOpen] = useState(false);

    
    const handleClose = () => {
        setOpen(false);
      };
      const handleToggle = () => {
        setOpen(!open);
      };
    
    
    var settings = {
        dots: false,
        arrows:false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 768,
                settings:{
                    slidesToShow:2,
                }
            }
        ]
    };
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
    const sections = document.querySelectorAll('.nav-box');
    const navli = document.querySelectorAll('.nav-itm')
    const [lastScrollY, setLastScrollY] = useState(0);
    const hotelNavCon = document.querySelector('.hotelNavCon');
    const hotelcard = document.querySelector('.hotelcard')
        
       
      
      
    window.addEventListener('scroll', ()=>{
        let current ='';
        sections.forEach(section => {
            const sectionTop =section.offsetTop;
            const sectionHeight = section.clientHeight;
            if(window.pageYOffset >= (sectionTop -110 )){
                current = section.getAttribute('id');
            }
        })
        navli.forEach( li => {
            li.classList.remove('active');
            if(li.classList.contains(current)){
                li.classList.add('active');
            }
        })
    })

    const handleTabChange = () => {

        hotelNavCon.style.position = "sticky"
        hotelNavCon.style.top = 0;


    }
    const handleNavigate = (idval) => {
        const pos = document.getElementById(idval).offsetTop;
        window.scrollTo(0, pos -110)
    }
    const [hote,setHotel] =useState([])
    
    
    const location = useLocation();
        const id=location.pathname.split("/")[3];
        const {data,loading,error} = useFetch(`/hotels/find/${id}`);
        useEffect(()=>{
            setHotel(data)
        },[data])
        console.log(hote)
        const text = "i would like to book for the hotel "

    return (
        <div className={`animationset ${anim}`}>
            <NavbarTest />
            <div className='mt-[60px] pt-8 px-4 sm:px-16 md:px-20 2xl:px-40'>
                <div className='flex gap-2 pt-2 text-sm sm:text-base text-graydust-medium'> <span>Home</span><span>&#47;</span><span>Hotels</span><span>&#47;</span><span className='text-[black]'>{hote.title}</span></div>
                           

                
           
            </div>
            
            <div className='xl:flex xl:flex-row justify-start px-4 sm:px-16 md:px-20 2xl:px-40 pt-12 gap-[5%]' >
                

                   <div className='w-[100%] xl:w-[65%] 2xl:w-[70%]  '>
                   <div className='flex flex-col sm:flex-row w-[100%] gap-[10px] justify-start'>
                        <div className='w-[100%] sm:w-[75%] bg-[green]'>
                            {hote.images && 
                           <img src={hote.images[0]} className='h-auto  w-[100%] ' alt="" srcset="" />
                                }
                        </div>
                        <div className='flex flex-row sm:flex-col gap-[3.333333%] justify-start w-[100%] sm:w-[25%] '>
                                {hote.images &&   
                                    hote.images.slice(1,4).map((itm,i)=> {
                                        if(i<hote.images.length-2){
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
                        <div onClick={handleClose} className='absolute rounded p-1 top-20 right-20 bg-[#7bbc67]'>                        <CloseIcon />
</div>
                        <Slider className='w-[90%] bg-[white] py-8 mx-auto md:w-[90%]' {...settings1}>
                            {hote.images && hote.images.map((img,i)=>(
                                            <div className='px-8'><img className='h-auto  w-full' src={img} key={i} alt="Car in road" /></div>

                                    ))}
                                </Slider>
                    </Backdrop>
                <div className='pt-4 sm:pt-12 xl:pt-0 w-[100%] xl:w-[30%] 2xl:w-[25%]'>
                   <div className='flex flex-col sm:border sm:border-2 rounded-[10px]  mx-auto'>    
                    
                   
                    <div className='flex flex-col items-start gap-1 px-3 sm:px-6 py-8'>
                   
                    {hote.type &&
                                <b><span className='px-4 py-1 text-xs ml-[-10px] rounded-full bg-evergreen-tag text-blacky-light'>{hote.type}</span></b>
                        }
                    <b><h1 className='text-xl sm:text-2xl'>{hote.title}</h1></b>

                    <p className='text-sm sm:text-lg text-graydust-medium '><FontAwesomeIcon className='pr-1' icon={solid('location-dot')} />{hote.location}</p>

                        <p className='text-blacky-light text-sm whitespace-pre-wrap	'>{hote.description}</p></div>

                       
                    
                
                    {
                        hote.offers?
                        <div className='px-3 sm:px-6 '>
                            <span className='p-1 bg-[#f8d2d2] font-bold text-[red]'>{hote.offertitle}</span>
                            <p className='mt-2'>{hote.offerdescription}</p>
                            <span ><strike className='text-[grey]'>&#8377; {hote.cheapestPrice} </strike><span className='text-2xl ml-3'><b>&#8377; {hote.offerprice} </b></span><span className='text-sm text-[red]'>per night</span></span>
                                   
                        </div>
                        :
                        <h1 className='font-semibold text-xl px-6 '><span className='text-2xl '>&#8377; {hote.cheapestPrice} </span><span className='text-sm text-[red]'>per night</span></h1>

                    }
                    <hr className='hidden sm:block'/>
                        <div className='px-3 sm:px-6 pt-6 sm:py-4'>
                            <a href={"https://wa.me/919562523642?text=" + text + hote.title}><button className='bg-evergreen text-white flex justify-center gap-3 items-center font-bold px-4 py-2 rounded'><span>WhatsApp Us</span><WhatsAppIcon /></button></a>

                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col lg:flex-row px-4 sm:px-16 md:px-20 2xl:px-40 gap-[5%]'>
               <div className='flex justify-start flex-col w-[100%] lg:w-[70%] 2xl:w-[80%]  mt-20 bg-[white]'>
                <div className='flex border-b border-b-2 gap-2 sm:gap-3 text-sm sm:text-lg font-bold w-full hotelNavCon sticky top-[60px] h-[70px] bg-[white] text-graydust-dark' onClick={handleTabChange}>
                        {hote.description &&                     <div className='px-1 sm:px-4 py-1 flex items-center nav-itm cursor-pointer desc ' onClick={()=> handleNavigate('desc')} ><a className='no-underline nav-link '>Description</a></div>
}
                        <div className='px-1 sm:px-4 py-1  flex items-center nav-itm cursor-pointer fac' onClick={()=> handleNavigate('fac')}><a className='no-underline nav-link'>Amenities</a></div>

                        <div className=' px-1 sm:px-4 py-1 flex items-center nav-itm cursor-pointer rooms' onClick={()=> handleNavigate('rooms')}><a className='no-underline nav-link' >Rooms</a></div>

                        <div className='px-1 sm:px-4 py-1  flex items-center nav-itm cursor-pointer location' onClick={()=> handleNavigate('location')}><a className='no-underline nav-link' >Location</a></div>


                    </div>

                    <div className='px-4'>

                        {hote.description &&
                            <div className='py-6 nav-box' id="desc">
                                <h1 className='text-2xl font-bold mb-2'>About {hote.title}</h1>
                                <p className='text-sm'>{hote.description}</p>
                                {hote.features.length !== 0 && 
                                    <div className='pt-3'>
                                        <h1 className='text-base sm:text-lg font-bold mb-2'>Features</h1>
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
                                    <h1 className='text-lg sm:text-xl font-bold mb-2'>Facilities Available</h1>
                                    <div className='flex gap-4 py-2 flex-wrap'>
                                        {hote.facilities.map((itm)=> (
                                            <span className='border-2 px-4 py-1 text-sm sm:text-base text-graydust-dark rounded'>{itm}</span>
                                        ))}
                                    </div> </div>}
                                </div>



                            }
                            {hote.rooms  && 
                                <div className=' nav-box' id="rooms">
                                    {
                                        hote.rooms.length !== 0 &&
                                        <div className='py-6'>
                                            <h1 className='text-lg sm:text-xl font-bold mb-2'>Type of Rooms</h1>

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
                           {hote.location && <div className='py-6 nav-box' id="location">
                                <h1 className='text-lg sm:text-xl font-bold'>Location</h1>
                                <div className='py-6 flex'>
                                    <div>
                                    <Map />
                                    </div>
                                    <div className='px-8 py-8 hidden 2xl:block'>
                                        <p className='text-sm'>Hotel paramount is located at kadambazhipuram, on state highway side in palakkad district</p>
                                    </div>
                                </div>
                            </div>}
                            
                    </div>
                    
               </div>
                <div className='lg:w-[25%] 2xl:w-[20%] my-20 hidden lg:block'>
                <div className='h-[70px] flex items-center pt-2'>
                    <h1 className='text-lg font-bold py-2 flex items-center text-graydust-dark mb-2'>Nearby Hotels</h1>

                    </div>
                    <div className='flex flex-col gap-8 xl:gap-16'>
                        <div>
                            <img src={h} className='rounded' alt="" />
                            <div  className='flex flex-col xl:flex-row pt-2'>
                                <div className='w-[100%] xl:w-[60%]'>
                                    <h1 className='text-base xl:text-xl  font-bold'>Hotel Paramount</h1>
                                     <p className='text-graydust-dark text-sm xl:text-base'>Palakkad, Kerala</p>
                           
                                </div>
                                <div className='w-[100%] xl:w-[40%] flex flex-col xl:items-end'>
                                    <span className='text-base font-bold'>&#8377; 5000</span><span className='text-sm xl:text-right text-graydust-medium'>per room per night</span> 
                                </div>
                            </div>
                            </div>






                            <div>
                            <img src={h} className='rounded' alt="" />
                            <div  className='flex pt-2'>
                                <div className='w-[60%]'>
                                    <h1 className='text-xl  font-bold'>Hotel Paramount</h1>
                                     <p className='text-graydust-dark text-base'>Palakkad, Kerala</p>
                           
                                </div>
                                <div className='w-[40%] flex flex-col items-end'>
                                    <span className='text-lg font-bold'>&#8377; 5000</span><span className='text-sm text-graydust-medium'>per room per night</span> 
                                </div>
                            </div>
                            </div>








                            <div>
                            <img src={h} className='rounded' alt="" />
                            <div  className='flex pt-2'>
                                <div className='w-[60%]'>
                                    <h1 className='text-xl  font-bold'>Hotel Paramount</h1>
                                     <p className='text-graydust-dark text-base'>Palakkad, Kerala</p>
                           
                                </div>
                                <div className='w-[40%] flex flex-col items-end'>
                                    <span className='text-lg font-bold'>&#8377; 5000</span><span className='text-sm text-graydust-medium'>per room per night</span> 
                                </div>
                            </div>
                            </div>








                            <div>
                            <img src={h} className='rounded' alt="" />
                            <div  className='flex pt-2'>
                                <div className='w-[60%]'>
                                    <h1 className='text-xl  font-bold'>Hotel Paramount</h1>
                                     <p className='text-graydust-dark text-base'>Palakkad, Kerala</p>
                           
                                </div>
                                <div className='w-[40%] flex flex-col items-end'>
                                    <span className='text-lg font-bold'>&#8377; 5000</span><span className='text-sm text-graydust-medium'>per room per night</span> 
                                </div>
                            </div>
                            </div>





                            
                    </div>
                </div>
                <div className='block lg:hidden py-8 sm:py-0 w-[100%] px-2'>
                <h1 className='text-lg sm:text-xl font-bold'>Nearest Hotels</h1>
                        <div>
                            <Slider className='' {...settings}>
                    





                            



                            <div className='my-4 w-[85%] mr-[15%]'>
                            <img src={h} className='rounded w-full' alt="" />
                            <div  className='flex flex-col pt-2'>
                                <div className='w-[100%]'>
                                    <h1 className='text-sm sm:text-base  font-bold'>Hotel Paramount</h1>
                                     <p className='text-graydust-dark text-xs sm:text-sm'>Palakkad, Kerala</p>
                           
                                </div>
                                <div className='w-[100%] flex flex-wrap items-center gap-1 sm:gap-2 py-1'>
                                    <span className='text-sm sm:text-lg font-bold'>&#8377; 5000</span><span className='text-xs sm:text-sm text-graydust-medium'>per room per night</span> 
                                </div>
                            </div>
                            </div>


                            <div className='my-4 w-[85%] mr-[15%]'>
                            <img src={h} className='rounded w-full' alt="" />
                            <div  className='flex flex-col pt-2'>
                                <div className='w-[100%]'>
                                    <h1 className='text-sm sm:text-base  font-bold'>Hotel Paramount</h1>
                                     <p className='text-graydust-dark text-xs sm:text-sm'>Palakkad, Kerala</p>
                           
                                </div>
                                <div className='w-[100%] flex flex-wrap items-center gap-1 sm:gap-2 py-1'>
                                    <span className='text-sm sm:text-lg font-bold'>&#8377; 5000</span><span className='text-xs sm:text-sm text-graydust-medium'>per room per night</span> 
                                </div>
                            </div>
                            </div>



                            <div className='my-4 w-[85%] mr-[15%]'>
                            <img src={h} className='rounded w-full' alt="" />
                            <div  className='flex flex-col pt-2'>
                                <div className='w-[100%]'>
                                    <h1 className='text-sm sm:text-base  font-bold'>Hotel Paramount</h1>
                                     <p className='text-graydust-dark text-xs sm:text-sm'>Palakkad, Kerala</p>
                           
                                </div>
                                <div className='w-[100%] flex flex-wrap items-center gap-1 sm:gap-2 py-1'>
                                    <span className='text-sm sm:text-lg font-bold'>&#8377; 5000</span><span className='text-xs sm:text-sm text-graydust-medium'>per room per night</span> 
                                </div>
                            </div>
                            </div>


                            <div className='my-4 w-[85%] mr-[15%]'>
                            <img src={h} className='rounded w-full' alt="" />
                            <div  className='flex flex-col pt-2'>
                                <div className='w-[100%]'>
                                    <h1 className='text-sm sm:text-base  font-bold'>Hotel Paramount</h1>
                                     <p className='text-graydust-dark text-xs sm:text-sm'>Palakkad, Kerala</p>
                           
                                </div>
                                <div className='w-[100%] flex flex-wrap items-center gap-1 sm:gap-2 py-1'>
                                    <span className='text-sm sm:text-lg font-bold'>&#8377; 5000</span><span className='text-xs sm:text-sm text-graydust-medium'>per room per night</span> 
                                </div>
                            </div>
                            </div>







                        



                            







                            













                        </Slider>
                        </div>
                </div>
              
               
          
            </div>
            
           
      
           
            <Footer></Footer>
        </div>
    );
}

export default Hotel;