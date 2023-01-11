import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import Footer from "../components/Footer/Footer"
import Navbar from '../components/navbar/navbar'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useLocation } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { useState } from 'react';
import { useEffect } from 'react';

const Hotel = () => {
    const [anim, setAnim] = useState("hide")
    useEffect(()=>{
        window.addEventListener('load', setAnim("show"))

    }, [])
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed: 4000,
    };
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
            <Navbar></Navbar>
            {/* header */}
            <div className='sm:flex mt-20 md:mt-32 justify-center' >
                <Slider className='w-[85%] pb-8 mx-auto md:w-[50%]' {...settings}>
                {hote.images && hote.images.map((img,i)=>(
                                <img className='h-auto ' src={img} key={i} alt="Car in road" />

                        ))}
                    </Slider>
                <div className='px-10 md:px-20 sm:w-1/2 flex gap-[15px] flex-col justify-center'>
                <div className='flex justify-start gap-[30px] items-center '>
                    <b><h1 className='p-0 text-3xl'>{hote.title}</h1></b>
                    {hote.type &&
                            <span className='px-4 py-1 rounded-full bg-evergreen text-white'>{hote.type}</span>
                    }
                </div><div>
                    <p className='text-xl text-graydust-medium py-2'><FontAwesomeIcon className='pr-1' icon={solid('location-dot')} />{hote.location}</p>
                    <p className='text-blacky-light whitespace-pre-wrap	'>{hote.description}</p></div>
                    {hote.rooms && <div>
                                    {hote.rooms.length != 0 &&
                                    <>
                                        <div  className='flex items-center gap-[10px]'>
                                        <h5>Available rooms</h5>

                                       { hote.rooms.map((itm)=>(
                                            <span className='py-1 px-4 rounded-full bg-evergreen text-white'>{itm}</span>
                                        ))}</div></>
                                    }
                                </div>}
                                {hote.facilities && <div >
                                    {hote.facilities.length != 0 &&
                                    <>
                                        
                                        <div  className='flex items-center gap-[10px]'>
                                        <h5>Facilities</h5>
                                       { hote.facilities.map((itm)=>(
                                            <span className='py-1 px-4 rounded-full bg-evergreen text-white'>{itm}</span>
                                        ))}</div> </>
                                    }
                                </div>}
                                {hote.features && <div>
                                    {hote.features.length !=0  &&
                                        <>
                                        <h5>Features or attractions</h5>
                                        <div  className='flex gap-[10px]'>
                                        {hote.features.map((itm)=>(
                                            <span className='py-1 px-4 rounded-full bg-evergreen'>{itm}</span>
                                        ))}</div></>
                                    }
                                </div>}
                    
                
                    {
                        hote.offers?
                        <div className='my-6'>
                            <span className='p-1 bg-[#f8d2d2] text-[red]'>{hote.offertitle}</span>
                            <p className='mt-2'>{hote.offerdescription}</p>
                            <span ><strike className='text-[grey]'>{hote.cheapestPrice} &#8377;</strike><span className='text-2xl ml-3'><b>{hote.offerprice} &#8377;</b></span></span>
                                   
                        </div>
                        :
                        <h1 className='font-semibold text-xl py-5'><span className='text-2xl '>{hote.cheapestPrice} &#8377;</span></h1>

                    }
                    <a href={"https://wa.me/919562523642?text=" + text + hote.title}><button className='bg-evergreen text-white flex justify-center gap-3 items-center font-bold p-4 rounded'><WhatsAppIcon /><span>WhatsApp Us</span></button></a>
                    {/* Space for map */}
                    {/* <div className='w-full border mt-5'>
                        <h1>Space for map</h1>
                    </div> */}
                </div>
            </div>

            {/* options */}
            <div className='mt-20 px-10 ' >
                
               

                {/* details */}
                <div className='py-10 sm:mx-32 pb-20'>
                    {/* <h1 className='text-xl font-semibold pt-10'>Facilities of Neque porro quisquam est</h1>
                    <div className='flex flex-wrap'>
                        <p className='text-graydust-medium mr-5'><span className='text-evergreen pr-2'><FontAwesomeIcon icon={solid('fan')} /></span>Air Conditioning</p>
                        <p className='text-graydust-medium mr-5'><span className='text-evergreen pr-2'><FontAwesomeIcon icon={solid('cloud-sun')} /></span>24-hour front desk</p>
                        <p className='text-graydust-medium mr-5'><span className='text-evergreen pr-2'><FontAwesomeIcon icon={solid('bowl-food')} /></span>Food</p>
                    </div>

                    <div className='flex flex-wrap gap-8 text-sm'>
                        <div className='pt-5'>
                            <h1 className='text-lg font-semibold'><span className='pr-1'><FontAwesomeIcon icon={solid('wifi')} /></span>Internet</h1>
                            <p>No internet access available.</p>
                        </div>

                        <div className='pt-5'>
                            <h1 className='text-lg font-semibold'><span className='pr-1'><FontAwesomeIcon icon={solid('circle-exclamation')} /></span>General</h1>
                            <p><span><FontAwesomeIcon icon={solid('check')} /></span>Air conditioning</p>
                        </div>

                        <div className='pt-5'>
                            <h1 className='text-lg font-semibold'><span className='pr-1'><FontAwesomeIcon icon={solid('bell')} /></span>Services</h1>
                            <p><span><FontAwesomeIcon icon={solid('check')} /></span>24-hour front desk</p>
                            <p><span><FontAwesomeIcon icon={solid('check')} /></span>Room service</p>
                        </div>

                        <div className='pt-5'>
                            <h1 className='text-lg font-semibold'><span className='pr-1'><FontAwesomeIcon icon={solid('car')} /></span>parking</h1>
                            <p>No parking available.</p>
                        </div>
                    </div> */}
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Hotel;