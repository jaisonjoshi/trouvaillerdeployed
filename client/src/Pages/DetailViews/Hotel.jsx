import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import SellIcon from '@mui/icons-material/Sell';
import {
  solid
} from "@fortawesome/fontawesome-svg-core/import.macro";
import Footer from "../components/Footer/Footer";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useLocation } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Backdrop from "@mui/material/Backdrop";
import CloseIcon from "@mui/icons-material/Close";
import NavbarTest from "../components/navbar/navbar";
import BookmarksOutlinedIcon from '@mui/icons-material/BookmarksOutlined';

const Hotel = () => {
 
  const [anim, setAnim] = useState("hide");
  useEffect(() => {
    window.addEventListener("load", setAnim("show"));
  }, []);
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
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
        },
      },
    ],
  };
  const sections = document.querySelectorAll(".nav-box");
  const navli = document.querySelectorAll(".nav-itm");
  const hotelNavCon = document.querySelector(".hotelNavCon");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (window.pageYOffset >= sectionTop - 110) {
        current = section.getAttribute("id");
      }
    });
    navli.forEach((li) => {
      li.classList.remove("active");
      if (li.classList.contains(current)) {
        li.classList.add("active");
      }
    });
  });

  const handleTabChange = () => {
    hotelNavCon.style.position = "sticky";
    hotelNavCon.style.top = 0;
  };
  const handleNavigate = (idval) => {
    const pos = document.getElementById(idval).offsetTop;
    window.scrollTo(0, pos - 110);
  };
  const [hote, setHotel] = useState([]);

  const location = useLocation();
  const id = location.pathname.split("/")[3];
  const { data, loading, error } = useFetch(`/hotels/find/${id}`);
  
  useEffect(() => {
    setHotel(data);
  }, [data]);
  console.log(hote);
  const text = "Hi, I would like to book for the hotel ";
  const [url, seturl] = useState("");
  useEffect(() => {
    if (hote != undefined && hote.length !== 0) {
      seturl(`/hotels?destinations=${hote.location}&limit=4`);
    } else seturl(`/hotels?destinations=nolocation&limit=4`);
  }, [hote]);
  const { data: data2, loading: loadin2 } = useFetch(url);
  console.log(data2);
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
    <div className={`animationset ${anim}  font-body detailviews`}>
      <NavbarTest />
      <div       id="sticky-element"
 className={` ${isSticky ? 'add-shadow' : ''} px-4 sm:px-16 md:px-20 2xl:px-60 bg-[white] relative z-[100] py-4 sm:py-8 gradientbg sticky top-0 `}  >
                <h1 className='text-base sm:text-2xl lg:text-3xl font-bold sm:font-regular text-[white]'>{hote.title}</h1>

                <div className='flex gap-2 pt-2 text-xs sm:text-base text-[white]'> <span>Home</span><span>&#47;</span><span>Hotels</span><span>&#47;</span><span className='text-[white]'>{hote.title}</span></div>
            </div>
      

      <div className="flex flex-col lg:flex-row justify-start px-4 sm:px-16 md:px-20 2xl:px-60 pt-8 sm:pt-12 gap-[5%]">
        <div className="w-[100%] sm:w-[70%] lg:w-[50%]  ">
          <div className="flex flex-col sm:flex-row w-[100%] gap-[10px] justify-start">
            <div className="w-[100%] relative ">
              <span onClick={handleToggle} className="cursor-pointer text-sm text-white absolute top-1 right-1 bg-[#000000b0] px-3 sm:px-4 py-1 sm:py-2 rounded">More Images</span>
              {hote.images && (
                <img
                  src={hote.images[0]}
                  className="h-auto  w-[100%] rounded-[10px]"
                  alt=""
                  srcset=""
                />
              )}
            </div>
            
          </div>
        </div>
        <Backdrop
          sx={{
            color: "#fff",
            opacity: 0.1,
            zIndex: (theme) => theme.zIndex.drawer + 1,
          }}
          open={open}
        >
          <div className="w-full relative">
          <div onClick={handleClose} className='cursor-pointer absolute rounded-full p-1 z-[100] top-[-3rem] right-4 sm:right-8 lg:right-14 2xl:right-16 '>                        <CloseIcon className='text-[white] bg-[#0000008c] text-base  rounded'/>
            </div>
          <Slider
            className="w-[90%] bg-[black] py-8 mx-auto md:w-[90%]"
            {...settings1}
          >
            {hote.images &&
              hote.images.map((img, i) => (
                <div className="sm:px-8">
                  <img
                    className="h-auto  w-full"
                    src={img}
                    key={i}
                    alt="Car in road"
                  />
                </div>
              ))}
          </Slider>
          </div>
         
        </Backdrop>
        <div className="pt-12 lg:pt-0 w-[90%] lg:w-[50%]">
          <div className="flex flex-col  rounded-[10px]  mx-auto">
            <div className="flex flex-col items-start gap-3 xl:px-6 xl:pt-4">
            <p className="text-sm sm:text-lg  ">
                <FontAwesomeIcon
                  className="pr-3"
                  icon={solid("location-dot")}
                />
                {hote.location}
              </p>
            
              {hote.type && <span className=' flex items-center gap-2 text-sm sm:text-xl '><BookmarksOutlinedIcon className='text-graydust-medium  text-sm sm:text-lg' />{hote.type && hote.type.charAt(0).toUpperCase() + hote.type.slice(1)}</span>}

             

              

              <p className="text-blacky-light text-lg py-4 hidden lg:block whitespace-pre-wrap	">
                {hote.description}
              </p>
            </div>
            <div className='flex sm:py-4  xl:px-6 mt-8 lg:mt-0 justify-between items-center'>
                            <div className='flex flex-col items-start gap-2'>
                                <span className='font-bold text-[10px] sm:text-xs md:text-base text-graydust-dark'>BOOK NOW</span>
                                <a href={"https://wa.me/918129177335?text=" + text + hote.title}><button className='bg-evergreen text-white flex justify-center gap-2 items-end sm:items-center font-bold px-3 py-2 w-full text-xs md:text-[18px] rounded'><span>WhatsApp Us</span> <span className=''><WhatsAppIcon className='text-base lg:text-[24px]'/></span></button></a>

                            </div>
                            {hote.offers ?

                                (<div className='text-right'>
                                    <span className='p-1 bg-[#f8d2d2] font-bold text-[red]'>{hote.offertitle}</span>
                                    <p className='mt-2'>{hote.offerdescription}</p>
                                    <span ><span className='text-2xl '><b>&#8377; {hote.offerprice} </b></span><strike className='text-[grey]'>&#8377; {hote.cheapestPrice} </strike></span><br />
                                    <span className='text-sm text-[red]'>per night</span>

                                </div>) :
                                (<div className=' flex flex-col text-right'>
                                    <h1 className='font-semibold text-xl sm:text-2xl lg:text-3xl sm:mb-2'>&#8377; {hote.cheapestPrice && hote.cheapestPrice.toString().replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}</h1>
                                    <span className='text-graydust-dark text-[10px] sm:text-xs'>Per night</span>

                                </div>)}


                        </div>

           
          
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row px-4 sm:px-16 md:px-20 2xl:px-60 gap-[5%]">
        <div className="flex justify-start flex-col w-[100%] lg:w-[70%] 2xl:w-[80%] mt-4 lg:mt-20 bg-[white]">
        

          <div className="lg:px-4">
            {hote.description && (
              <div className="py-6 nav-box" id="desc">
                <h1 className="text-base sm:text-xl lg:text-2xl font-bold mb-2">About {hote.title}</h1>
                <p className="py-4 text-sm sm:text-lg">{hote.description}</p>
                {hote.features.length !== 0 && (
                  <div className="pt-3">
                    <h1 className="text-sm sm:text-lg font-bold mb-2">
                      Features
                    </h1>
                    <div className="pl-4">
                      <ul className="list-disc px-4 text-lg">
                        {hote.features.map((itm) => (
                          <li className="text-sm sm:text-base">{itm}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            )}
            {hote.facilities && (
              <div className=" nav-box" id="fac">
                {hote.facilities.length !== 0 && (
                  <div className="py-4 sm:py-6">
                    <h1 className="text-sm sm:text-lg sm:text-xl font-bold mb-2">
                      Facilities Available
                    </h1>
                    <div className="flex gap-4 py-4 flex-wrap">
                      {hote.facilities.map((itm) => (
                        <span className="flex gap-2 items-center  px-4 py-1 text-sm sm:text-lg text-graydust-dark rounded">
                          <SellIcon className="text-[14px] sm:text-[20px]" /> {itm}
                        </span>
                      ))}
                    </div>{" "}
                  </div>
                )}
              </div>
            )}
            {hote.rooms && (
              <div className=" nav-box" id="rooms">
                {hote.rooms.length !== 0 && (
                  <div className="sm:py-6">
                    <h1 className="text-base sm:text-lg sm:text-xl font-bold mb-2">
                      Available Rooms
                    </h1>

                    <div className="px-2 pb-12 sm:pb-0 text-sm sm:text-base">
                      <ul className="list-none flex flex-wrap items-start gap-4 px-1 py-4 sm:px-4">
                        {hote.rooms.map((itm) => (
                          <li className="border border-1 border-evergreen rounded px-6 py-2  text-sm sm:text-base font-semibold">{itm}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}{" "}
              </div>
            )}
          </div>
        </div>
        {data2 != undefined &&
              data2.length !== 0 && <div className="lg:w-[25%] 2xl:w-[20%] my-20 hidden lg:block">
          <div className="h-[70px] flex items-center pt-2">
            <h1 className="text-lg font-bold py-2 flex items-center text-graydust-dark mb-2">
              Nearby Hotels
            </h1>
          </div>
          <div className="flex flex-col gap-8 xl:gap-16">
            {data2 != undefined &&
              data2.length !== 0 &&
              data2
                .filter((item) => {
                  return item._id !== hote._id;
                })
                .map((itm) => (
                  <div className="relative">
                    {itm.offers && (
                      <span className="absolute top-2 right-2 bg-[red] rounded text-[white] px-3 py-1">
                        {itm.offertitle}
                      </span>
                    )}
                    <img src={itm.images[0]} className="rounded" alt="" />
                    <div className="flex pt-2">
                      <div className="w-[60%]">
                        <h1 className="text-base  font-bold">{itm.title}</h1>
                        <p className="text-graydust-dark text-base">
                          {itm.location}
                        </p>
                      </div>
                      <div className="w-[40%] flex flex-col items-end">
                        {itm.offers ? (
                          <div className="flex flex-col items-end">
                            <div>
                              {" "}
                              <strike className="text-[gray]">
                                <span className="text-sm text-[gray] font-bold">
                                  &#8377;{" "}
                                  {itm.cheapestPrice
                                    .toString()
                                    .replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}
                                </span>
                              </strike>
                              <span className="text-lg font-bold">
                                &#8377;{" "}
                                {itm.offerprice &&
                                  itm.offerprice
                                    .toString()
                                    .replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}
                              </span>
                            </div>
                            <span className="text-sm text-graydust-medium">
                              per room per night
                            </span>{" "}
                          </div>
                        ) : (
                          <div className="flex flex-col items-end">
                            {" "}
                            <span className="text-lg font-bold">
                              &#8377;{" "}
                              {itm.cheapestPrice &&
                                itm.cheapestPrice
                                  .toString()
                                  .replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}
                            </span>
                            <span className="text-sm text-graydust-medium">
                              per room per night
                            </span>{" "}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
          </div>
        </div>}
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Hotel;
