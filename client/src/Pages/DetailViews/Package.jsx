import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Footer from "../components/Footer/Footer"
import Navbar from '../components/navbar/navbar'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useLocation } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { useState } from 'react';
import { useEffect } from 'react';
const Package = () => {
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

    const [pack,setPackage] =useState([])

    const location = useLocation();
        const id=location.pathname.split("/")[3];
        const {data,loading,error} = useFetch(`/packages/find/${id}`);
        useEffect(()=>{
            setPackage(data)
        },[data])
        console.log(pack)
    const text = "i would like to book for the package "
    return (


        
        <div className={` animationset ${anim}`}>
            <Navbar />
            {/* Header */}
            <div className='mt-20 md:mt-32'>
                <div className='flex flex-col md:gap-8 lg:gap-0 lg:flex-row'>
                    <Slider className='sm:w-[20%] md:w-[70%] mx-[10%] md:ml-[15%] md:mr-[15%] lg:mx-[0%] lg:w-1/2' {...settings}>
                        {pack.images && pack.images.map((img,i)=>(
                                <img className='h-auto ' src={img} key={i} alt="Car in road" />

                        ))}
                         </Slider>
                    <div className='px-[10%] md:pl-[15%] md:pr-[15%] lg:px-20 flex flex-col justify-center md:w-[100%] lg:w-1/2'>
                        <h1 className='text-2xl font-bold pb-5 mt-8'>{pack.title}</h1>
                        <p className='text-blacky-light whitespace-pre-wrap	'>{pack.description}</p>
                        <h3 className='font-bold text-sm pt-4 text-xl'>{pack.duration}</h3>
                        <h1 className='font-semibold text-xl py-5'> {pack.cheapestPrice}/-<span className='text-sm line-through text-graydust-medium'>19,000/-</span></h1>

                        <a href={"https://wa.me/919562523642?text=" + text + pack.title }><button className='bg-evergreen text-blacky-dark flex justify-center gap-3 items-center font-bold p-4 w-full rounded'><WhatsAppIcon /><span>WhatsApp Us</span></button></a>
                    </div>
                </div>
                  

                <div className='sm:flex mb-10 sm:mx-16 lg:mx-20 mt-12'>

                    {/* Itinerary section*/}

                    <div className='m-[10%] p-5  sm:w-[100%] shadow-lg shadow-graydust-normal m-3 rounded'>
                        <div className='text-xl my-5 font-bold border-b w-20 border-graydust-normal'><h1>Itinerary</h1></div>
                        {/* Repeating day details */}
                        {pack.shedule && pack.shedule.map((obj,i)=>(
                            <div className='sm:flex my-2' key={i}>
                            <div className='text-xl w-32 p-2 text-graydust-medium font-semibold w-[10%]'><h1>Day {i+1}</h1></div>
                            <div className='border-l-2 p-4 text-justify border-graydust-normal w-[90%]'>
                                <h1 className='text-xl font-semibold'>{obj.dayTitle}</h1>
                                <p className='text-blacky-light whitespace-pre-wrap	'> {obj.dayDesc}</p>
                            </div>
                        </div>
                        ))}
                        
                        
                    </div>

                    {/* Related results */}

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};




export default Package;