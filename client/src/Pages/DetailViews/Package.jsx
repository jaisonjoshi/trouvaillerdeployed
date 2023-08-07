import React, { useRef } from 'react';
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
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Backdrop from '@mui/material/Backdrop';
import CloseIcon from '@mui/icons-material/Close';
import TourIcon from '@mui/icons-material/Tour';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import BookmarksOutlinedIcon from '@mui/icons-material/BookmarksOutlined';

const Package = () => {
    const [anim, setAnim] = useState("hide")
    useEffect(() => {
        window.addEventListener('load', setAnim("show"))

    }, [])
    const hotelNavCon = document.querySelector('.hotelNavCon');

    const handleTabChange = () => {

        hotelNavCon.style.position = "sticky"
        hotelNavCon.style.top = 0;



    }
    const [open, setOpen] = useState(false);


    const handleClose = () => {
        setOpen(false);
    };
    const handleToggle = () => {
        setOpen(!open);
    };

    const sections = document.querySelectorAll('.nav-box');

    const navli = document.querySelectorAll('.nav-itm')

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= (sectionTop - 110)) {
                current = section.getAttribute('id');
            }
        })
        navli.forEach(li => {
            li.classList.remove('active');
            if (li.classList.contains(current)) {
                li.classList.add('active');
            }
        })
    })

    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    };
    var settings1 = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,

        responsive: [
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };
    const handleNavigate = (idval) => {
        const pos = document.getElementById(idval).offsetTop;
        window.scrollTo(0, pos - 110)
    }

    const [pack, setPackage] = useState([])

    const location = useLocation();
    const id = location.pathname.split("/")[3];
    const { data, loading, error } = useFetch(`/packages/find/${id}`);
    useEffect(() => {
        setPackage(data)
    }, [data])
    console.log(pack)
    const text = "Hi, I would like to book for the package "

    const [url, seturl] = useState("")
    useEffect(() => {
        if (pack != undefined && pack.length !== 0) {
            seturl(`/packages?destinations=${pack.location}&limit=4`)
        }
        else (
            seturl(`/packages?destinations=nolocation&limit=0`)
        )
    }, [pack])
    const { data: data2, loading: loadin2 } = useFetch(url)
    console.log(data2)

    const [isSticky, setIsSticky] = useState(false);
  
    const handleScroll = () => {
        const stickyElement = document.getElementById('sticky-element');
        if (stickyElement) {
          const rect = stickyElement.getBoundingClientRect();
          setIsSticky(rect.top <= 0);
        }
      };
    
      useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    return (



        <div className={` animationset ${anim} bg-[white] detailviews`}>
            <Navbar />
            
            <Backdrop
                sx={{ color: '#fff', opacity: 0.1, zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}

            >
                <div className='w-full relative'>
                <div onClick={handleClose} className='cursor-pointer absolute rounded-full p-1 z-[100] top-[-3rem] right-4 sm:right-8 lg:right-14 2xl:right-16 '>                        <CloseIcon className='text-[white] bg-[#0000008c] text-base  rounded'/>
            </div>
                <Slider className='w-[90%] bg-[black] py-8 mx-auto md:w-[90%]' {...settings1}>
                    {pack.images && pack.images.map((img, i) => (
                        <div className='sm:px-8'><img className='h-auto  w-full' src={img} key={i} alt="Car in road" /></div>

                    ))}
                </Slider>
                </div>
            </Backdrop>
            <div       id="sticky-element"
 className={`gradientbg ${isSticky ? 'add-shadow' : ''} px-4 sm:px-16 md:px-20 2xl:px-60 bg-[white] relative z-[100] py-4 sm:py-8 sticky top-0 `}  >
                <h1 className='text-base sm:text-2xl lg:text-2xl  font-medium sm:font-regular text-[white]'>{pack.title}</h1>

                <div className='flex gap-2 pt-2 text-xs sm:text-base text-[white]'> <span>Home</span><span>&#47;</span><span>Tour Packages</span><span>&#47;</span><span className='text-[white]'>{pack.title}</span></div>
            </div>



            <div className='px-0 sm:px-16 md:px-20 2xl:px-60 mt-6 sm:mt-10 '>
                <div className='w-[100%]   sm:pr-4 sm:pt-4 sm:pb-12 sm:rounded-[10px]  sm:card-shadow flex flex-col xl:flex-row justify-between'>


                <div className='w-[100%] xl:w-[50%]'>
                        {pack.images &&
                            <div className='hidden xl:block relative'>
                                                                <span className='absolute text-base text-white top-1 px-2 py-1 rounded right-1 bg-[#000000b0] cursor-pointer' onClick={handleToggle}>View more images</span>

                                <img src={pack.images[0]} className='w-[60%] rounded xl:w-[100%]' alt="" />
                            </div>



                        }
                        <div className='flex flex-col sm:flex-row w-[100%] px-4 sm:px-0 gap-[10px] xl:hidden justify-start'>
                            <div className='w-[100%] sm:w-[75%]  '>
                                {pack.images &&
                                    <img src={pack.images[0]} className='h-auto rounded sm:rounded-0  w-[100%] ' alt="" srcset="" />
                                }
                            </div>
                            <div className='flex flex-row sm:flex-col gap-[3.333333%] justify-start w-[100%] sm:w-[25%] '>
                                {pack.images &&
                                    pack.images.slice(1, 4).map((itm, i) => (
                                        i!=2 ?
                                        <div className='h-auto sm:h-[31%] w-[31%] sm:w-full relative' ><img src={itm} className='sm:absolute rounded sm:rounded-0 top-0 left-0 w-[100%] h-[100%] object-cover' alt="" srcset="" /></div>
                                        :                                        <div className='h-auto sm:h-[31%] w-[31%] sm:w-full relative' onClick={handleToggle}><div className='absolute top-0 left-0 right-0 bottom-0 rounded bg-[#00000075] flex justify-center items-center'> <span className='text-white text-xs text-center'>More<br /> Images</span></div><img src={itm} className='sm:absolute rounded sm:rounded-0 top-0 left-0 w-[100%] h-[100%] object-cover' alt="" srcset="" /></div>


                                    ))

                                }
                            </div>

                        </div>

                    </div>


                    <div className='hidden xl:flex w-[45%] bg-[white] flex  ml-4 px-8 rounded  flex-col justify-start gap-6  pt-4'>
                        <div className=' flex flex-col gap-3  items-start'>

                            <div className='text-[black] flex flex-wrap text-xl w-[90%]'>
                                <span className=' flex items-center gap-2 mr-8  '><AccessTimeIcon className='text-graydust-medium' />{pack.duration}</span>
                                <span className=' flex items-center gap-2 mr-8'><LocationOnOutlinedIcon className='text-graydust-medium' />{pack.location}</span>

                            </div>
                            {pack.category && <span className=' flex items-center gap-2 '><BookmarksOutlinedIcon className='text-graydust-medium' />{pack.category && pack.category.charAt(0).toUpperCase() + pack.category.slice(1)}</span>}



                        </div>

                        <p className='text-[17px] open-sans'>{pack.description && pack.description.split('.').slice(0, 2).join('. ') + '.'}</p>
                        <div className='flex pt-4  justify-between items-center'>
                            <div className='flex flex-col items-start gap-2'>
                                <span className='font-bold text-base text-graydust-dark'>BOOK NOW</span>
                                <a href={"https://wa.me/918129177335?text=" + text + pack.title}><button className='bg-evergreen text-white flex justify-center gap-2 items-center font-bold px-3 py-2 w-full text-base rounded'><span>WhatsApp Us</span> <span className=''><WhatsAppIcon /></span></button></a>

                            </div>
                            {pack.offers ?

                                (<div className='text-right'>
                                    <span className='p-1 bg-[#f8d2d2] font-bold text-[red]'>{pack.offertitle}</span>
                                    <p className='mt-2'>{pack.offerdescription}</p>
                                    <span ><span className='text-2xl '><b>&#8377; {pack.offerprice} </b></span><strike className='text-[grey]'>&#8377; {pack.cheapestPrice} </strike></span><br />
                                    <span className='text-sm text-[red]'>per person</span>

                                </div>) :
                                (<div className=' flex flex-col text-right'>
                                    <h1 className='font-semibold text-3xl open-sans'>&#8377; {pack.cheapestPrice && pack.cheapestPrice.toString().replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}</h1>
                                    <span className='text-graydust-dark text-xs'>Per person</span>

                                </div>)}


                        </div>

                    </div>



















                   



                   
                </div>

</div>





<div className=' px-4 sm:px-16 md:px-20 2xl:px-60 open-sans'>


                <div className='flex flex-col  gap-[5%] '>
                    <div className='flex justify-start flex-col w-[100%]   py-4 sm:rounded-[10px] sm:card-shadow bg-[white]'>

                        



                        <div className='xl:px-4'>

                            {pack.description &&
                                <div className=' xl:py-6 nav-box' id="desc">
                                    <h1 className='text-xl font-bold mb-4 hidden xl:block'>Overview</h1>
                                    <div className=' flex xl:hidden py-4 sm:py-8 flex-col gap-3  items-start'>

                            <div className='text-[black] flex flex-wrap text-sm lg:text-xl w-[90%]'>
                                <span className=' flex items-center gap-2 mr-8  '><AccessTimeIcon className='text-graydust-medium text-base lg:text-xl' />{pack.duration}</span>
                                <span className=' flex items-center gap-2 mr-8'><LocationOnOutlinedIcon className='text-graydust-medium text-base lg:text-xl' />{pack.location}</span>

                            </div>
                            {pack.category && <span className=' flex items-center gap-2 text-sm lg:text-xl'><BookmarksOutlinedIcon className='text-base lg:text-xl text-graydust-medium' />{pack.category && pack.category.charAt(0).toUpperCase() + pack.category.slice(1)}</span>}



                        </div>
                        <div className='flex sm:py-4 xl:hidden justify-between items-center'>
                            <div className='flex flex-col items-start gap-2'>
                                <span className='font-bold text-[10px] sm:text-xs md:text-base text-graydust-dark'>BOOK NOW</span>
                                <a href={"https://wa.me/918129177335?text=" + text + pack.title}><button className='bg-evergreen text-white flex justify-center gap-2 items-end sm:items-center font-bold px-3 py-2 w-full text-xs md:text-[18px] rounded'><span>WhatsApp Us</span> <span className=''><WhatsAppIcon className='text-base lg:text-[24px]'/></span></button></a>

                            </div>
                            {pack.offers ?

                                (<div className='text-right'>
                                    <span className='p-1 bg-[#f8d2d2] font-bold text-[red]'>{pack.offertitle}</span>
                                    <p className='mt-2'>{pack.offerdescription}</p>
                                    <span ><span className='text-2xl '><b>&#8377; {pack.offerprice} </b></span><strike className='text-[grey]'>&#8377; {pack.cheapestPrice} </strike></span><br />
                                    <span className='text-sm text-[red]'>per person</span>

                                </div>) :
                                (<div className=' flex flex-col text-right'>
                                    <h1 className='font-semibold text-xl sm:text-2xl lg:text-3xl open-sans sm:mb-2'>&#8377; {pack.cheapestPrice && pack.cheapestPrice.toString().replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}</h1>
                                    <span className='text-graydust-dark text-[10px] sm:text-xs'>Per person</span>

                                </div>)}


                        </div>
                        <p className=' text-[black] text-sm sm:text-base pt-6 sm:pt-0 md:text-lg xl:px-4 '>{pack.description}</p>

                                    {pack.features.length !== 0 &&
                                        <div className='pt-3'>
                                            <h1 className='text-[14px] sm:text-xl font-bold mb-2'>Inclusions</h1>
                                            <div className='pl-4'>
                                                <ul className='list-disc px-4 text-sm sm:text-base'>
                                                    {pack.features.map((itm) => (
                                                        <li>{itm}</li>
                                                    ))}
                                                </ul>

                                            </div>

                                        </div>
                                    }

                                </div>}
                            {pack.schedule &&
                                <div className=' nav-box' id="fac">
                                    {pack.schedule.length !== 0 &&
                                        <div className='pt-6 sm:py-6'>
                                            <h1 className='text-lg sm:text-xl font-bold mb-16'>Trip Plan</h1>
                                            <div className='flex flex-col px-4'>
                                                {pack.schedule && pack.schedule.map((obj, i) => (
                                                    <div className='flex flex-col  relative border-l border-l-[#03BA6D] border-l-[2px]  items-start ' key={i}>

                                                       <p className='py-8 sm:py-12 pl-8 sm:pl-12 text-sm sm:text-base whitespace-pre-wrap'>{obj.dayDesc.trim()[0].toUpperCase() + obj.dayDesc.trim().slice(1)}</p>
                                                       <div className='absolute w-[25px] sm:w-[30px] h-[25px] sm:h-[30px] rounded-full bg-[#03BA6D] translate-y-[-50%] translate-x-[-50%]'></div>
                                                       <h1 className='absolute top-0 left-8 translate-y-[-50%] text-sm sm:text-base font-semibold'>Day {i+1} - {obj.dayTitle}</h1>
                                                        {/* <div className=' text-[white]  font-semibold px-4 py-2 bg-evergreen rounded-tr-lg'><h1>Day {i + 1} </h1></div>
                                                        <div className='py-4 px-2 text-base bg-[white] border border-[#bfbfbfa6]  w-[100%]'>
                                                            <h1 className='text-xl font-bold mb-4'>{obj.dayTitle}</h1>
                                                            <p className=' text-[#313131] whitespace-pre-wrap text-lg	'> {obj.dayDesc}</p>
                                                        </div> */}
                                                    </div>
                                                ))}
                                            </div> </div>}
                                </div>



                            }
                            {pack.activities &&
                                <div className=' nav-box' id="things">
                                    {
                                        pack.activities.length !== 0 &&
                                        <div className='pt-6 sm:py-6'>
                                            <h1 className='text-base sm:text-xl  font-bold mb-2'>Things to do</h1>

                                            <div className='px-2 text-base sm:text-lg'>
                                                <ul className='list-none flex flex-wrap items-start py-4 gap-6 px-1 sm:px-4'>
                                                    {pack.activities.map((itm) => (
                                                        <li className='flex gap-3 items-center border border-evergreen rounded-[5px] font-medium text-sm sm:text-base open-sans px-4 py-1 sm:py-2'><span><TourIcon className='text-[25px] sm:text-[30px]' sx={{ color: "#3cb500" }} /></span><span>{itm.trim()[0].toUpperCase() + itm.trim().slice(1)}</span></li>
                                                    ))}
                                                </ul>

                                            </div>
                                        </div>
                                    }                               </div>
                            }



                            {pack.location && <div className='pt-6 sm:py-6 nav-box' id="images">
                                <div className='flex items-center justify-between pr-[3%]'>
                                    <span className='text-base sm:text-xl font-bold'>Image Gallery</span>
                                    {pack.images.length > 1 &&
                                        <span className='text-[blue] cursor-pointer text-sm sm:text-base font-bold' onClick={handleToggle}>View more</span>
                                    }
                                </div>
                                <div className='pt-6 flex'>
                                    <div className='flex flex-wrap gap-[3%]'>
                                        {pack.images.slice(0, 6).map((itm) => (
                                            <div className='w-[47%] xl:w-[30%] mb-4'><img src={itm} className="w-full" alt="" /></div>
                                        ))}
                                    </div>

                                </div>
                            </div>}





                        </div>


                    </div>
                   {data2 != undefined && data2.length !== 0 &&  <div className='w-[100%] my-20 rounded-[10px]  hidden lg:block bg-[white] '>
                        <div className='h-[70px] flex items-center pt-2'>
                            <h1 className='text-lg font-bold py-2 open-sans flex items-center text-[black] mb-2'>Similar Packages</h1>

                        </div>
                        <div className='flex flex-col gap-8 xl:gap-16'>





                            {data2 != undefined && data2.length !== 0 && data2.filter((item) => { return item._id !== pack._id }).map((itm) => (


                                <div className='relative'>
                                    {itm.offers &&
                                        <span className='absolute top-2 right-2 bg-[red] rounded text-[white] px-3 py-1'>{itm.offertitle}</span>
                                    }
                                    <img src={itm.images[0]} className='rounded' alt="" />
                                    <div className='flex pt-2'>
                                        <div className='w-[60%]'>
                                            <h1 className='text-base  font-bold'>{itm.title}</h1>
                                            <p className='text-graydust-dark  text-base'>{itm.location}</p>

                                        </div>
                                        <div className='w-[40%] flex flex-col items-end'>

                                            {itm.offers ?
                                                <div className='flex flex-col items-end'><div> <strike className='text-[gray]'><span className='text-sm text-[gray] font-bold'>&#8377; {itm.cheapestPrice && itm.cheapestPrice.toString().replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}</span></strike><span className='text-lg font-bold'>&#8377; {itm.offerprice && itm.offerprice.toString().replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}</span></div><span className='text-sm text-graydust-medium'>per person</span> </div>
                                                : <div className='flex flex-col items-end'>   <span className='text-lg font-bold'>&#8377; {itm.cheapestPrice && itm.cheapestPrice.toString().replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}</span><span className='text-sm text-graydust-medium'>per person</span> </div>

                                            }
                                        </div>
                                    </div>
                                </div>



                            ))






                            }



















                        </div>
                    </div>}

                </div>






            </div>
            <Footer></Footer>
        </div>
    );
};




export default Package;