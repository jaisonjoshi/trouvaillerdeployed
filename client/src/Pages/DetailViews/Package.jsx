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
        const {data,loading,error} = useFetch(`/packages/${id}`);
        useEffect(()=>{
            setPackage(data)
        },[data])
        console.log(pack)
    return (


        
        <div>
            <Navbar />
            {/* Header */}
            <div className='mt-32'>
                <div className='sm:flex'>
                    <Slider className='sm:w-1/2' {...settings}>
                        {pack.images && pack.images.map((img,i)=>(
                                <img className='h-auto object-cover' src={img} key={i} alt="Car in road" />

                        ))}
                         </Slider>
                    <div className='px-20 flex flex-col justify-center sm:w-1/2'>
                        <h1 className='text-2xl font-bold pb-5'>{pack.title}</h1>
                        <p>{pack.description}</p>
                        <h3 className='font-bold text-sm pt-4 text-xl'>{pack.duration}</h3>
                        <h1 className='font-semibold text-xl py-5'> {pack.cheapestPrice}/-<span className='text-sm line-through text-graydust-medium'>19,000/-</span></h1>
                        <button className='bg-evergreen text-blacky-dark flex justify-center gap-3 items-center font-bold p-4 w-full rounded'><WhatsAppIcon /><span>WhatsApp Us</span></button>
                    </div>
                </div>

                <div className='sm:flex mb-10 sm:mx-16 lg:mx-20 mt-12'>

                    {/* Itinerary section*/}

                    <div className='p-5 sm:w-3/4 shadow-lg shadow-graydust-normal m-3 rounded'>
                        <div className='text-xl my-5 font-bold border-b w-20 border-graydust-normal'><h1>Itinerary</h1></div>
                        {/* Repeating day details */}
                        {pack.shedule && pack.shedule.map((obj,i)=>(
                            <div className='sm:flex my-2' key={i}>
                            <div className='text-xl w-32 p-2 text-graydust-medium font-semibold '><h1>Day 1</h1></div>
                            <div className='border-l-2 p-4 text-justify border-graydust-normal'>
                                <h1 className='text-xl font-semibold'>Lorem Ipsum i</h1>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                            </div>
                        </div>
                        ))}
                        
                        
                    </div>

                    {/* Related results */}

                    <div className='sm:w-1/4 p-5 shadow-lg shadow-graydust-normal m-3 rounded '>
                        <div className='text-xl my-5 font-bold border-b w-full '><h1>Related results</h1></div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};




export default Package;