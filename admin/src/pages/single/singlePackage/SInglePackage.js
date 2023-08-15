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
import { useState, useEffect } from 'react'
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import { Button } from '@mui/material'
import Backdrop from '@mui/material/Backdrop';
import CloseIcon from '@mui/icons-material/Close';
import ClipLoader from "react-spinners/ClipLoader";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import BookmarksOutlinedIcon from '@mui/icons-material/BookmarksOutlined';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import Footer from '../../../components/footer/Footer';

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
    const { data, loading, error, reFetch } = useFetch(`/packages/find/${id}`);
    useEffect(() => {
        setPack(data)
    })
    const [open, setOpen] = useState(false);
    const hotelNavCon = document.querySelector('.hotelNavCon');

    const handleNavigate = (idval) => {
        const pos = document.getElementById(idval).offsetTop;
        window.scrollTo(0, pos - 110)
    }
    const handleTabChange = () => {

        hotelNavCon.style.position = "sticky"
        hotelNavCon.style.top = "60px";



    }
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

    //console.log(data)
    const [clear, setClear] = useState([]);
    const [updateMode, setUpdateMode] = useState(false);
    const [dayTitle, setDayTitle] = useState("");
    const [dayDescUp, setDayDescUp] = useState("");
    const schedule_update = data.schedule;
    //console.log(data.schedule);
    //console.log(schedule_update);
    //console.log("specific schedule of first day title only "+ schedule_update[0].dayTitle);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    };

    const handlePackageUpdate = (id) => {
        navigate(`/packages/${id}/update`)
    }
    const handlePackageDelete = async (id) => {
        try {
            const confirmDelete = window.confirm('Are you sure you want to delete this item?');

            if (confirmDelete) {
                await axiosInstance.delete(`/packages/${id}`);
                navigate('/packages')
            }
        }
        catch (error) {
            if (error.response && error.response.status == 400) {

                alert('Sorry, no such package found');
            }
            if (error.response && error.response.status == 404) {

                alert('Sorry, no such package found');
            }
            else if (error.request) {
                alert('Network error! Please try again later');
            }
            else {
                alert(error.message);
            }
        }


    }


    const handleTitleChange = (e, i) => {

        //console.log("index value is "+i);


        schedule_update[i].dayTitle = e.target.value;

        // console.log("new title is"+schedule_update[i].dayTitle);


    }


    const handleDescChange = (e, i) => {
        //console.log("index value is "+i);


        schedule_update[i].dayDesc = e.target.value;

        // console.log("new desc is"+schedule_update[i].dayDesc);

    }
    const handleClose = () => {
        setOpen(false);
    };
    const handleToggle = () => {
        setOpen(!open);
    };
    const handleUpdateSchedule = async e => {

        e.preventDefault();

        try {
            const updatedPackage = {
                schedule: schedule_update,
            };
            await axiosInstance.patch(`/packages/${id}`, updatedPackage);
            // console.log("package has been updated")

            reFetch();
        } catch (error) {
            if (error.response) {
                if (error.response.status == 400) {

                    alert('Sorry, no such package found.');
                }
                if (error.response.status == 404) {

                    alert('Sorry, unable to find package!');
                }
            }
            else if (error.request) {
                alert('Network error! Please try again later');
            }
            else {
                alert(error.message);
            }
        }

        setUpdateMode(false);
    }

    const handleDeleteSchedule = async e => {
        const confirmed = window.confirm('Are you sure you want to delete this schedule? If you delete, all the schedule will be deleted and cannot be recovered.');

        if (!confirmed) {
            return; // User canceled the deletion
        }
        try {
            const updatedPackage = {

                schedule: clear,
            };
            // console.log(updatedPackage)
            await axiosInstance.patch(`/packages/${id}`, updatedPackage);
            reFetch();

        }
        catch (error) {
            if (error.response) {
                if (error.response.status == 400) {

                    alert('Sorry, no such package found.');
                }
                if (error.response.status == 404) {

                    alert('Sorry, unable to find package!');
                }
            }
            else if (error.request) {
                alert('Network error! Please try again later');
            }
            else {
                alert(error.message);
            }
        }

    }
    const text = "i would like to book for the package "

    const setLocationNull = async e => {
        try {
            const updatedPackage = {

                locations: clear,
            };
            // console.log(updatedPackage)
            await axiosInstance.patch(`/packages/${id}`, updatedPackage);
            reFetch();

        }
        catch (err) {
            console.log(err)
        }

    }


    const setFeaturesNull = async e => {
        try {
            const updatedPackage = {

                features: clear,
            };
            console.log(updatedPackage)
            await axiosInstance.patch(`/packages/${id}`, updatedPackage);
            reFetch();
        }
        catch (err) {
            console.log(err)
        }

    }
    const setActivitiesNull = async e => {
        try {
            const updatedPackage = {

                activities: clear,
            };
            console.log(updatedPackage)
            await axiosInstance.patch(`/packages/${id}`, updatedPackage);
            reFetch();
        }
        catch (err) {
            console.log(err)
        }

    }
    return (

        <div className="Single-package">
            <Navbar onclick={handlesidenavOpen} />
            <Sidenav isOpen={sidenavOpen} />

            <div className="singlepackage-container ">
                {loading ? (<div className='flex justify-center my-20'><ClipLoader /></div>) : (
                    <div className="singlepackage">
                        <Backdrop
                            sx={{ color: '#fff', opacity: 0.1, zIndex: (theme) => theme.zIndex.drawer + 1 }}
                            open={open}

                        >
                            <div onClick={handleClose} className='absolute rounded p-1 top-40 sm:top-20 right-4 sm:right-20 bg-[#7bbc67]'>                        <CloseIcon />
                            </div>
                            <Slider className='w-[90%] bg-[black] py-8 mx-auto md:w-[90%]' {...settings1}>
                                {pack.images && pack.images.map((img, i) => (
                                    <div className='px-8'><img className='h-auto  w-full' src={img} key={i} alt="Car in road" /></div>

                                ))}
                            </Slider>
                        </Backdrop>
                        <div className='gradientbg'>
                            <div className='px-20 pt-16 pb-8 text-[white] flex justify-between items-center'>
                                <div className='flex flex-col gap-2'>
                                    <h2 className='text-2xl font-bold text-[white]'>{pack.title}</h2>
                                    <p className=' text-base'>{pack.location}</p>
                                </div>
                                <div className='flex gap-8'>
                                    <div className='flex  justify-between items-start'>
                                        {pack.offers ?

                                            (<div className=''>
                                                <span className='p-1 bg-[#f8d2d2] font-bold text-[red]'>Flat 15% off</span>
                                                <p className='mt-2'>Grab this offer soon</p>
                                                <span ><span className='text-2xl '><b>&#8377; {pack.offerprice.toString().replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")} </b></span><strike className='text-[grey]'>&#8377; {pack.cheapestPrice && pack.cheapestPrice.toString().replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")} </strike></span><br />
                                                <span className='text-sm text-[red]'>per day</span>

                                            </div>) :
                                            (<div className=' flex flex-col'>
                                                <h2 className='font-semibold text-2xl  text-[white]'>&#8377; {pack.cheapestPrice && pack.cheapestPrice.toString().replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}</h2>
                                                <span className=' text-xs'>Per person</span>

                                            </div>)}


                                    </div>

                                    <div className='flex gap-4'>
                                        <button className='bg-[#00A45E] px-4 py-2 rounded-[10px]' onClick={() => handlePackageUpdate(id)}>Update Package</button><button className='bg-[#00A45E] px-4 py-2 rounded-[10px]' onClick={() => handlePackageDelete(id)}>Delete Package</button>

                                    </div>
                                </div>
                            </div>

                        </div>

                        {pack.images && pack.images.length > 2 &&
                            <div className='flex flex-col sm:flex-row w-[100%] gap-[10px]  justify-start px-20 py-8'>
                                <div className='w-[100%] sm:w-[60%] bg-[green]'>
                                    {pack.images &&
                                        <img src={pack.images[0]} className='h-auto  w-[100%] ' alt="" srcset="" />
                                    }
                                </div>
                                <div className='flex flex-row sm:flex-col gap-[2%] justify-start w-[100%] sm:w-[40%] '>
                                    {pack.images &&
                                        pack.images.slice(1, 3).map((itm, i) => (
                                            <div className='h-auto sm:h-[49%] w-[31%] sm:w-full relative' ><img src={itm} className='sm:absolute top-0 left-0 w-[100%] h-[100%] object-cover' alt="" srcset="" />{i == 0 && <span onClick={handleToggle} className='absolute top-2 right-1 bg-[black] text-[white] cursor-pointer px-4 py-1 rounded-[10px] flex gap-3 shadow-lg'> <PermMediaIcon sx={{ fontSize: 20 }} />More Images</span>}</div>


                                        ))

                                    }
                                </div>

                            </div>

                        }

                        {pack.images && pack.images.length == 2 &&
                            <div className='flex flex-col sm:flex-row w-[100%] gap-[10px]  justify-start px-20 py-8'>
                                <div className='w-[100%] sm:w-[50%] bg-[green]'>
                                    {pack.images &&
                                        <img src={pack.images[0]} className='h-auto  w-[100%] ' alt="" srcset="" />
                                    }
                                </div>
                                <div className='flex flex-row sm:flex-col gap-[2%] justify-start w-[100%] sm:w-[50%] '>
                                    {pack.images &&
                                        pack.images.slice(1, 2).map((itm, i) => (
                                            <div className='h-auto sm:h-[100%] w-[31%] sm:w-full relative' ><img src={itm} className='sm:absolute top-0 left-0 w-[100%] h-[100%] object-cover' alt="" srcset="" />{i == 0 && <span onClick={handleToggle} className='absolute top-2 right-1 bg-[black] text-[white] cursor-pointer px-4 py-1 rounded-[10px] flex gap-3 shadow-lg'> <PermMediaIcon sx={{ fontSize: 20 }} />More Images</span>}</div>


                                        ))

                                    }
                                </div>

                            </div>

                        }


                        <div className='px-20 py-8'>

                            <span className='text-lg font-bold'>Overview</span>


                            <div className='text-[black] flex flex-wrap text-xl w-[90%] mt-8'>
                                <span className=' flex items-center gap-2 mr-8  '><AccessTimeIcon className='text-graydust-medium' />{pack.duration}</span>
                                <span className=' flex items-center gap-2 mr-8'><LocationOnOutlinedIcon className='text-graydust-medium' />{pack.location}</span>
                                {pack.category && <span className=' flex items-center gap-2 '><BookmarksOutlinedIcon className='text-graydust-medium' />{pack.category && pack.category.charAt(0).toUpperCase() + pack.category.slice(1)}</span>}

                            </div>
                            <div>
                                <div className=''>

                                    {pack.description &&
                                        <div className='pt-6 sm:py-6 nav-box' id="desc">
                                            <p className='text-sm text-graydust-dark sm:text-base'>{pack.description}</p>
                                            {pack.features.length !== 0 &&
                                                <div className='pt-3'>
                                                    <h2 className='text-base sm:text-lg font-bold mb-2'>Inclusions</h2>
                                                    <div className='px-2'>
                                                        <ul className='list-disc px-4 text-base'>
                                                            {pack.features.map((itm) => (
                                                                <li>{itm}</li>
                                                            ))}
                                                        </ul>

                                                    </div>

                                                </div>
                                            }

                                        </div>}
















                                    {updateMode ? (
                                        <div>
                                            <h2 className='font-bold text-2xl'>Schedule</h2>
                                            {pack.schedule && pack.schedule.map((obj, i) => (
                                                <div className='schedule-day shadow-md  border px-4 py-2 my-4'>
                                                    <div className="schedule-day-left">

                                                        <h2 className='font-bold text-[grey] text-lg mb-3'>Day {i + 1}</h2>


                                                    </div>
                                                    <div className="schedule-day-right">
                                                        <h2 className="text-xl  mb-3">
                                                            <input type="text" name="" id="s_title" className='text-[#585858] px-4 py-1 outline-none w-full rounded border border-[3px]' defaultValue={obj.dayTitle} onChange={e => handleTitleChange(e, i)} />
                                                        </h2>

                                                        {/*  {obj.dayTitle}</h2> onChange={handleTitleChange}*/}
                                                        <p>
                                                            <textarea name="" id="s_desc" className='text-[#585858] px-4 py-1 outline-none w-full rounded border border-[3px] whitespace-pre-wrap' defaultValue={obj.dayDesc} onChange={e => handleDescChange(e, i)} />

                                                            {/* {obj.dayDesc} */}

                                                        </p>
                                                    </div>
                                                </div>
                                            ))}
                                            <Button className='z-[50]' onClick={handleUpdateSchedule}>Update Schedule Changes</Button>

                                        </div>) : (
                                        <div>
                                            <h2 className='font-bold text-2xl'>Schedule</h2>
                                            {(pack.schedule) ?
                                                (<div className='flex gap-4 py-4'>
                                                    <button onClick={() => setUpdateMode(true)} className='px-4 py-1 bg-[#00A45E] text-[white] rounded shadow-sm'>EDIT</button><button className='px-4 py-1 bg-[#00A45E] text-[white] rounded shadow-sm' onClick={handleDeleteSchedule}>DELETE</button>
                                                </div>) :
                                                (<div></div>)
                                            }

                                            {pack.schedule && pack.schedule.map((obj, i) => (
                                                <div className='schedule-day shadow-md  border px-4 py-2 my-4'>
                                                    <div className="schedule-day-left">

                                                        <h2 className='font-bold text-[grey] text-lg'>Day {i + 1}</h2>
                                                    </div>
                                                    <div className="schedule-day-right">
                                                        <h2 className="text-xl mb-3">{obj.dayTitle}</h2>
                                                        <p className='text-[#585858] whitespace-pre-wrap'>{obj.dayDesc}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>)}





















                                    {pack.activities &&
                                        <div className=' nav-box' id="things">
                                            {
                                                pack.activities.length !== 0 &&
                                                <div className='pt-6 sm:py-6'>
                                                    <h2 className='text-lg sm:text-xl font-bold mb-2'>Things to do</h2>

                                                    <div className='px-2 text-base sm:text-lg'>
                                                        <ul className='list-none flex flex-col py-4 gap-6 px-1 sm:px-4'>
                                                            {pack.activities.map((itm) => (
                                                                <li className='flex gap-3 items-center'><span><TourIcon sx={{ color: "#3cb500", fontSize: 40 }} /></span><span>{itm}</span></li>
                                                            ))}
                                                        </ul>

                                                    </div>
                                                </div>
                                            }                               </div>
                                    }









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


export default SinglePackage