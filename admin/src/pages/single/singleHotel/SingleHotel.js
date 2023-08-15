import Navbar from '../../../components/navbar/Navbar'
import Sidenav from '../../../components/sidenav/Sidenav'
import './singleHotel.scss'
import h from '../../../components/assets/h.png'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useLocation, useNavigate } from 'react-router-dom'
import useFetch from '../../../hooks/useFetch'
import Packageimg from '../../../components/assets/package.png'
import axios from 'axios'
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import { Button } from '@mui/material'
import Backdrop from '@mui/material/Backdrop';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect, useState } from 'react'
import ClipLoader from 'react-spinners/ClipLoader';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import BookmarksOutlinedIcon from '@mui/icons-material/BookmarksOutlined';
import Footer from '../../../components/footer/Footer';
import TourIcon from '@mui/icons-material/Tour';
import SellIcon from '@mui/icons-material/Sell';
const SingleHotel = () => {
    const [sidenavOpen, setSideNavOpen] = useState(false)
    const handlesidenavOpen = () => {
        setSideNavOpen(!sidenavOpen);
    }
    const axiosInstance = axios.create({
        baseURL: process.env.REACT_APP_API_URL,
    })

    const [open, setOpen] = useState(false);
    const hotelNavCon = document.querySelector('.hotelNavCon');
    const [vendor, setVendor] = useState(null)


    const handleClose = () => {
        setOpen(false);
    };
    const handleToggle = () => {
        setOpen(!open);
    };

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
        dots: true,
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
    const [hote, setHotel] = useState([])
    const navigate = useNavigate();
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const { data, loading, error, reFetch } = useFetch(`/hotels/find/${id}`)
    const [clear, setClear] = useState([]);
    useEffect(() => {
        if(data.length !== 0){
            setHotel(data)
            axiosInstance.get(`/user/find/${data.vendorid}`).then(response=> {setVendor(response.data);console.log(vendor)}).catch(error=>console.log("vendor fetching failed"))
        }
        
    }, [data])
    //console.log(data)
    const handlehotelUpdate = (id) => {
        navigate(`/hotels/${id}/update`)
    }
    const handlehotelDelete = async (id) => {
        try {
            const confirmDelete = window.confirm('Are you sure you want to delete this item?');

            if(confirmDelete){
                await axiosInstance.delete(`/hotels/${id}`);
            navigate('/hotels')
            }
        }
        catch (error) {
            if (error.response && error.response.status == 400) {

                alert('Sorry, no such hotel found');
            }
            if (error.response && error.response.status == 404) {

                alert('Failed to delete hotel!');
            }
            else if (error.request) {
                alert('Network error! Please try again later');
            }
            else {
                alert(error.message);
            }
        }


    }
    const handleNavigate = (idval) => {
        const pos = document.getElementById(idval).offsetTop;
        window.scrollTo(0, pos - 110)
    }

    const setFeaturesNull = async e => {
        try {
            const updatedHotel = {

                features: clear,
            };
            //console.log(updatedHotel)
            await axiosInstance.patch(`/hotels/${id}`, updatedHotel);
            reFetch();
        }
        catch (err) {
            console.log(err)
        }

    }
    const handleTabChange = () => {

        hotelNavCon.style.position = "sticky"
        hotelNavCon.style.top = 0;


    }

    const setLocationNull = async e => {
        try {
            const updatedHotel = {

                locations: clear,
            };
            //console.log(updatedHotel)
            await axiosInstance.patch(`/hotels/${id}`, updatedHotel);
            reFetch();

        }
        catch (err) {
            console.log(err)
        }

    }

    const setRoomTypesNull = async e => {
        try {
            const updatedHotel = {

                rooms: clear,
            };
            // console.log(updatedHotel)
            await axiosInstance.patch(`/hotels/${id}`, updatedHotel);
            reFetch();

        }
        catch (err) {
            console.log(err)
        }

    }

    const setFacilitiesNull = async e => {
        try {
            const updatedHotel = {

                facilities: clear,
            };
            // console.log(updatedHotel)
            await axiosInstance.patch(`/hotels/${id}`, updatedHotel);
            reFetch();
        }
        catch (err) {
            console.log(err)
        }

    }






    return (

        <div className="Single-hotel">
            <Navbar onclick={handlesidenavOpen} />
            <Sidenav isOpen={sidenavOpen} />
            <div className='singlehotel-container'>
            {loading ? (<div className='flex justify-center my-20'><ClipLoader /></div>) : (

                <div>
                     <Backdrop
                            sx={{ color: '#fff', opacity: 0.1, zIndex: (theme) => theme.zIndex.drawer + 1 }}
                            open={open}

                        >
                            <div onClick={handleClose} className='absolute rounded p-1 top-40 sm:top-20 right-4 sm:right-20 bg-[#7bbc67]'>                        <CloseIcon />
                            </div>
                            <Slider className='w-[90%] bg-[black] py-8 mx-auto md:w-[90%]' {...settings1}>
                                {hote.images && hote.images.map((img, i) => (
                                    <div className='px-8'><img className='h-auto  w-full' src={img} key={i} alt="Car in road" /></div>

                                ))}
                            </Slider>
                        </Backdrop>
 <div className='gradientbg pt-8 pb-8'>
                <div className='px-20 pt-16 pb-8 text-[white] flex justify-between items-center'>
                                <div className='flex flex-col gap-2'>
                                    <div className='flex items-start gap-4'>
                                    <h2 className='text-2xl font-bold text-[white]'>{hote.title}</h2>
                                    <span className='text-[white] rounded-full bg-[#00A45E] px-4 py-1'>{hote.type && hote.type.charAt(0).toUpperCase() + hote.type.slice(1)}</span>
                                    </div>
                                    <p className=' text-base'>{hote.location}</p>
                                </div>
                                <div className='flex gap-8'>
                                    <div className='flex  justify-between items-start'>
                                        {hote.offers ?

                                            (<div className=''>
                                                <span className='p-1 bg-[#f8d2d2] font-bold text-[red]'>Flat 15% off</span>
                                                <p className='mt-2'>Grab this offer soon</p>
                                                <span ><span className='text-2xl '><b>&#8377; {hote.offerprice.toString().replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")} </b></span><strike className='text-[grey]'>&#8377; {hote.cheapestPrice && hote.cheapestPrice.toString().replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")} </strike></span><br />
                                                <span className='text-sm text-[red]'>per day</span>

                                            </div>) :
                                            (<div className=' flex flex-col'>
                                                <h2 className='font-semibold text-2xl  text-[white]'>&#8377; {hote.cheapestPrice && hote.cheapestPrice.toString().replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}</h2>
                                                <span className=' text-xs'>Per person</span>

                                            </div>)}


                                    </div>

                                    <div className='flex gap-4'>
                                        <button className='bg-[#00A45E] px-4 py-2 rounded-[10px]' onClick={() => handlehotelUpdate(id)}>Update Property</button><button className='bg-[#00A45E] px-4 py-2 rounded-[10px]' onClick={() => handlehotelDelete(id)}>Delete Property</button>

                                    </div>
                                </div>
                            </div>
               </div>
               {hote.images && hote.images.length > 2 &&
                            <div className='flex flex-col sm:flex-row w-[100%] gap-[10px]  justify-start px-20 py-8'>
                                <div className='w-[100%] sm:w-[60%] bg-[green]'>
                                    {hote.images &&
                                        <img src={hote.images[0]} className='h-auto  w-[100%] ' alt="" srcset="" />
                                    }
                                </div>
                                <div className='flex flex-row sm:flex-col gap-[2%] justify-start w-[100%] sm:w-[40%] '>
                                    {hote.images &&
                                        hote.images.slice(1, 3).map((itm, i) => (
                                            <div className='h-auto sm:h-[49%] w-[31%] sm:w-full relative' ><img src={itm} className='sm:absolute top-0 left-0 w-[100%] h-[100%] object-cover' alt="" srcset="" />{i == 0 && <span onClick={handleToggle} className='absolute top-2 right-1 bg-[black] text-[white] cursor-pointer px-4 py-1 rounded-[10px] flex gap-3 shadow-lg'> <PermMediaIcon sx={{ fontSize: 20 }} />More Images</span>}</div>


                                        ))

                                    }
                                </div>

                            </div>

                        }

                        {hote.images && hote.images.length == 2 &&
                            <div className='flex flex-col sm:flex-row w-[100%] gap-[10px]  justify-start px-20 py-8'>
                                <div className='w-[100%] sm:w-[50%] bg-[green]'>
                                    {hote.images &&
                                        <img src={hote.images[0]} className='h-auto  w-[100%] ' alt="" srcset="" />
                                    }
                                </div>
                                <div className='flex flex-row sm:flex-col gap-[2%] justify-start w-[100%] sm:w-[50%] '>
                                    {hote.images &&
                                        hote.images.slice(1, 2).map((itm, i) => (
                                            <div className='h-auto sm:h-[100%] w-[31%] sm:w-full relative' ><img src={itm} className='sm:absolute top-0 left-0 w-[100%] h-[100%] object-cover' alt="" srcset="" />{i == 0 && <span onClick={handleToggle} className='absolute top-2 right-1 bg-[black] text-[white] cursor-pointer px-4 py-1 rounded-[10px] flex gap-3 shadow-lg'> <PermMediaIcon sx={{ fontSize: 20 }} />More Images</span>}</div>


                                        ))

                                    }
                                </div>

                            </div>

                        }





                        <div className='px-20 flex mb-20'>
                           <div className='w-[50%]'>
                           
                            <p className='pt-8 text-lg'>Description</p>
                            <p className='pt-2 pb-8 text-base'>{hote.description}</p>
                            {hote.rooms && hote.rooms.length !== 0 &&
                                <div>
                                    <h1 className='text-lg'>Available Rooms</h1>
                                    <div className='my-6 flex flex-wrap gap-4'> 
                                        {hote.rooms?.map((itm)=>(
                                            <span className='border border-[#00A45E] font-bold text-sm px-4 py-2 rounded'>{itm}</span>
                                        ))}
                                    </div>
                                </div>
                            }
                            {hote.features && hote.features.length !== 0 &&
                                <div>
                                    <h1 className='text-lg'>Features</h1>
                                    <div className='my-6 '> 
                                        <ul className='flex flex-col gap-2'>
                                        {hote.features?.map((itm)=>(
                                            <li className=' text-sm flex gap-2'><TourIcon />{itm}</li>
                                        ))}
                                        </ul>
                                    </div>
                                </div>
                            }
                            {hote.facilities && hote.facilities.length !== 0 &&
                                <div>
                                    <h1 className='text-lg'>Facilities</h1>
                                    <div className='my-6 flex flex-wrap gap-4'> 
                                        {hote.facilities?.map((itm)=>(
                                            <span className='border border-[#00A45E]  text-sm px-4 py-2 rounded flex gap-2'><SellIcon />{itm}</span>
                                        ))}
                                    </div>
                                </div>
                            }
                           </div>
                           <div className='w-[50%]'>
                            {hote.locations && hote.locations.length !== 0 && <div className='border     rounded px-4 py-8'>
                            <h1 className='text-lg font-medium'>Location Tags you have added</h1>
                                <div className='py-4 flex flex-wrap'>
                                    {hote.locations?.map((itm)=> (
                                        <span className='flex gap-1 items-center  px-4 py-1 rounded text-[white] bg-[#00A45E]'><LocationOnOutlinedIcon sx={{fontSize:18}} className='mb-[2px]'/>{itm.charAt(0).toUpperCase() + itm.slice(1)}</span>
                                    ))}
                                </div>
                            </div>}

                            {vendor !== null && <div className='border  mt-8   rounded px-4 py-8'>
                            <h1 className='text-lg font-semibold'>Vendor Details</h1>
                                <div className='flex my-8 gap-12'>
                                    <div className='w-[10%]'>
                                        <img src={vendor.img} className='w-full rounded-full' alt="" />
                                    </div>
                                    <div className='flex gap-2 flex-col'>
                                        <h1 className='font-bold'>{vendor.username}</h1>
                                        <h1 className='flex gap-2'><EmailIcon sx={{fontSize:20}}/>{vendor.email}</h1>

                                        <h1 className='flex gap-2'><WhatsAppIcon sx={{fontSize:20}}/>{vendor.phone}</h1>

                                    </div>
                                    <div>
                                        <button className='bg-[#00A45E] px-4 py-1 rounded text-[white]' onClick={()=>navigate(`/vendors/${vendor._id}`)}>View Details</button>
                                    </div>

                                </div>
                            </div>}
                               
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
