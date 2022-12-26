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
        slidesToScroll: 1
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
                <div className='px-10 md:px-20 sm:w-1/2 flex flex-col justify-center'>
                    <h1 className='text-2xl font-bold pb-5'>{hote.title}</h1>
                    <p className='text-md text-graydust-medium'><FontAwesomeIcon className='pr-1' icon={solid('location-dot')} />{hote.location}</p>
                    <h1 className='font-semibold text-xl py-5'> 17,500/-<span className='text-sm line-through text-graydust-medium'>{hote.cheapestPrice}/-</span></h1>
                    <a href={"https://wa.me/919562523642?text=" + text + hote.title}><button className='bg-evergreen text-blacky-dark flex justify-center gap-3 items-center font-bold p-4 w-full rounded'><WhatsAppIcon /><span>WhatsApp Us</span></button></a>
                    {/* Space for map */}
                    {/* <div className='w-full border mt-5'>
                        <h1>Space for map</h1>
                    </div> */}
                </div>
            </div>

            {/* options */}
            <div className='mt-20 px-10 ' >
                <div className='flex flex-wrap sm:mx-32 '>
                    {hote.features && hote.features.map((facility, i) => {
                        <div className='text-graydust-medium mr-2 p-2 text-center border border-graydust-medium rounded' key={i}>
                        <h2>{facility}</h2>
                    </div>
                    })



                    }
                    

                    
                </div>
                <div className='flex flex-wrap sm:mx-32 '>
                    <h2>Available Rooms</h2>
                    {hote.rooms && hote.rooms.map((room, i) => {
                        <div className='text-graydust-medium mr-2 p-2 text-center border border-graydust-medium rounded' key={i}>
                        <h2>{room}</h2>
                    </div>
                    })



                    }
                    

                    
                </div>

                {/* details */}
                <div className='py-10 sm:mx-32 pb-20'>
                    <p className='text-blacky-light'>{hote.description}</p>
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