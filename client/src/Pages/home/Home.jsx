import LazyLoad from 'react-lazyload';
import React, { useState, useEffect } from 'react'
import DestCard from '../components/cards/trending_dest_card'
import { FaUmbrellaBeach, FaRegBuilding, FaArrowRight } from "react-icons/fa";
import { AiOutlineWhatsApp, AiOutlinePhone } from "react-icons/ai";

import Reviews from '../Reviews/Review'
import Footer from '../components/Footer/Footer'
import { Link } from "react-router-dom";
import NavbarTest from '../components/navbar/navbar'
import beach from '../Assets/beach.png'
import DestCardMob from '../components/cards/trending_dest_card_mob'
import Emi from '../components/cards/emi'
import InterestForm from '../components/cards/interestForm'
import { useNavigate } from 'react-router';
import ebook from '../Assets/ebookcover.png'
import cardavatar from '../Assets/cardavatar.webp'
import whitelogo from '../Assets/Trouvailler Green.png'
import EmiCard from '../components/cards/EmiCard';
import { Autocomplete, Avatar, TextField } from '@mui/material';
import axios from 'axios';
import popupimg from '../Assets/popup.png'
import { Helmet } from 'react-helmet';
import { AiOutlineClose } from "react-icons/ai";
import loc from '../Assets/loci.png'
import cat from '../Assets/cati.png'

const Home = ({ setlocation, popupShow, setPopupShow, setPopupEbookPage, popupEbookPage }) => {
  const [destination, setDestination] = useState("");
  const navigate = useNavigate()
  const handleSearchChange = (e, newValue) => {

    setDestination(newValue.toLowerCase());
    console.log(destination);
  };
  const handleSClick = () => {
    setlocation(destination);
    if (destination.trim() !== "") {
      navigate(`/sep/${destination}`);
    } else {
      alert("Please enter a location to search");
    }
  };
  const [anim, setAnim] = useState("hide")
  useEffect(() => {
    window.addEventListener('load', setAnim("show"))

  }, [])

  const color = "text-whiteglow"

  const handleS2submit = (value) => {
    setlocation(value);

    navigate(`/sep/${value}`);
  };
  const handleClosePopup = () => {
    setPopupShow(false)
    setPopupEbookPage(false)



  }

  const [inputValue, setInputValue] = useState("");

  const [openauto, setOpenauto] = useState(false);
  const [locationTags, setLocationTags] = useState([{
    locations: ["loading"]
  }])
  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  })
  useEffect(() => {
    if (openauto !== false) {
      axiosInstance.get('/packlocations').then(response => { setLocationTags(response.data) })

    }
  }, [openauto]);
  const openEbookPage = () => {
    setPopupShow(false)

    setPopupEbookPage(false)
    navigate('/ebook')


  }
  return (
    <div className={`animationset ${anim} `}>
      {popupEbookPage && <div id="initialpopup" className={` initialPopup ${popupShow && "visiblePopup"} transition-all	duration-300	ease-in	 fixed top-0 left-0 right-0 bottom-0 bg-[#0000008a]  z-[1000000] flex justify-center items-center `}>
        <div className='bg-[white] shadow-2xl rounded max-w-[600px] w-[85%] md:w-[70%] lg:w-[50%] relative'><span className='absolute bg-[black] text-[white] w-[30px] h-[30px] rounded-full flex justify-center items-center top-[-15px] shadow-lg right-[-15px] cursor-pointer' onClick={handleClosePopup}> <AiOutlineClose /></span><img src={popupimg} className='rounded w-[100%]' />
          <div className='px-12'><h1 className='text-[#2F7447] text-2xl roboto'>Download our free eBook on how to choose your Perfect Travel Package</h1><p></p><button onClick={openEbookPage} className='px-4 py-2 rounded text-[white] mb-8 mt-12 gradientbg'>Download Now</button></div></div>
      </div>}
      <Helmet>
        <title>Trouvailler | Personalized Trips, perfectly packaged</title>
      </Helmet>
      <NavbarTest  bg="" />
      <div className=" w-full relative h-[80vh] sm:h-[90vh] background-header home font-body">
       

        <div className=" absolute z-[100] top-0 left-0 right-0 h-[80vh] sm:h-[90vh] pb-20 w-full flex flex-col lg:flex-row justify-start  items-start ">
          <div className=' flex flex-col items-center mt-32 sm:mt-40 lg:mt-52 2xl:mt-56 w-[100%] text-center'>
            <h1 className="text-xl sm:text-2xl md:text-3xl 2xl:text-4xl text-whiteglow sm:mb-4 font-bold text-center">
              Discover Your </h1>
            <h1 className=' w-full sm:mt-1 2xl:mt-3 title-font text-2xl sm:text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl text-whiteglow font-extrabold text-center roboto'>Next  Adventure <span className='text-[#00c676]'>with Us</span>
            </h1>
            <p className="text-[13px] sm:text-base md:text-lg w-[100%] md:w-full pr-8 sm:pr-0  lg:text-xl text-[white] text-center pb-6 pt-6 sm:pt-10">
              Experience the adventure of a lifetime with our handpicked travel packages. <br />Book now and create memories that will last a lifetime!
            </p>
            <div className='flex gap-4 mt-8'>
              <Link to="/packages" className='text-[white] px-8 text-center py-2 xs:py-4 rounded-[10px] text-xs md:text-base shadow-xl flex justify-center items-center gap-4 sm:gap-2 font-bold bg-[#00A45E] hover:bg-[#222539] hover:text-[white]'><FaUmbrellaBeach className='text-[20px] text-[white]' />Holiday  <br className='xs:hidden' /> Packages</Link>
              <Link to="/hotels" className='text-[white] px-8 py-2 xs:py-4  text-center rounded-[10px] text-xs md:text-base  shadow-xl flex justify-center items-center gap-4 sm:gap-2 font-bold bg-[#00A45E] hover:bg-[#222539] hover:text-[white]'><FaRegBuilding className='text-[20px] text-[white]' />Hotels and <br className='xs:hidden' /> Home stays</Link>

            </div>



          </div>
          {/* <div className='hidden lg:flex justify-center mt-48 2xl:mt-52   w-[60%]'>
            <div className='max-w-[450px] 2xl:max-w-[550px] relative text-white pt-8 pl-8 pr-10 card-background gradientbg shadow-xl rounded-[20px] relative'>
              <img src={whitelogo} alt="" className='w-[100px] absolute top-8 right-8' />
              <span className='text-[14px] font-bold'>Get Your Stay</span><br />
              <span className='text-xl font-bold'>At Your Price</span><br /><br />
              <span className='text-4xl xl:text-3xl font-black'><span className='text-[#00c676]'>Bid For </span>Today</span>
              <div className='flex mt-4'>
                <img src={cardavatar} className='w-[40%]' alt="" />
                <div className='w-[50%] flex flex-col justify-center gap-8 px-1'><span className='font-medium '>Now book hotels at your desired place for today<br /><br />

                  Click the button below and place your bid now</span><Link className='border border-[#00c676] px-4 py-2 rounded-[15px] btn-animation font-bold shadow-lg' to="/what-is-bid"><button className='z-[110] relative'>Know More</button></Link></div>
              </div>

            </div>
          </div> */}

        </div>
        <div className='absolute bottom-28 z-[1000000000] left-[50%] translate-x-[-50%] rounded-[10px] mt-12 lg:mt-20 bg-[white] px-2 sm:py-4 flex justify-between items-center shadow-2xl w-[85%] sm:w-[80%] md:w-[60%] lg:w-[90%] xl:w-[60%]'>

          <img src={loc} className='w-[40px] mr-4 ml-4' />
          <div className='flex-1 flex flex-col justify-center mt-4'>
            <h1 className='font-bold pl-[6px]  mb-[-7.5px]'>Destinations</h1>
            <Autocomplete
              open={openauto}
              onOpen={() => {
                // only open when in focus and inputValue is not empty
                if (inputValue) {
                  setOpenauto(true);
                }
              }}
              onClose={() => setOpenauto(false)}
              inputValue={inputValue}
              onInputChange={(e, value, reason) => {
                setInputValue(value);

                // only open when inputValue is not empty after the user typed something
                if (!value) {
                  setOpenauto(false);
                }
              }}

              disablePortal
              id="combo-box-demo"
              options={locationTags[0].locations}
              onChange={handleSearchChange}

              sx={{
                width: "70%",
                // border: "1px solid blue",
                "& .MuiOutlinedInput-root": {
                  border: "none",
                  outline: "none",
                  borderRadius: "0",
                  padding: "0"
                },
                "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                  outline: "none"

                }
              }}
              renderInput={(params) => <TextField {...params} placeholder="Select a location" />}
            />

          </div>
          <img src={cat} className='w-[50px] mr-4' />
          <div className='flex-1  mt-4'>
            <h1 className='font-bold mb-[-7.5px]'>Categories</h1>
            <select name="" id="" className='border-none w-[70%] py-[7.5px] pr-[4px] bg-[transparent]'>
              <option value="">Family</option>
              <option value="">Family</option>

            </select>
          </div>



          <button onClick={handleSClick} className='font-bold text-white bg-[#00c676] text-xs md:text-base py-[0.40rem] sm:py-4 rounded-[10px] px-6 sm:px-4 mr-4 md:px-10'>Search</button>
        </div>
      </div>
      <div className="px-4 sm:px-16 md:px-20 2xl:px-40 py-8 lg:hidden">
        <div className='w-[100%] lg:max-w-[450px] 2xl:max-w-[550px] relative text-white pt-2 pl-4 sm:pl-8  sm:pr-10 card-background shadow-xl rounded-[20px] relative '>
          <img src={whitelogo} alt="" className='w-[50px] sm:w-[100px] absolute top-4 right-4' />
          <span className='text-[12px] font-bold'>Get Your Stay</span><br />
          <span className='text-base sm:text-xl font-bold'>At Your Price</span><br /><br />
          <span className='text-2xl xs:text-3xl  md:text-4xl font-black'><span className='text-[#00c676]'>Bid For </span>Today</span>
          <div className='flex mt-4'>
            <img src={cardavatar} className='w-[40%] xs:w-[30%] lg:w-[50%]' alt="" />
            <div className='w-[50%] xs:w-[70%] lg:w-[50%] flex flex-col justify-center items-start gap-2 md:pl-[10] '><span className='md:font-medium text-xs sm:text-base md:text-lg lg:text-base 2xl:text-lg'>Now book hotels at your desired place for today. Click the button below and place your bid now</span><Link className='border border-[#00c676] px-4 py-1 rounded-[10px] btn-animation font-bold shadow-lg' to="/what-is-bid"><button className='z-[110] text-xs relative'>Know More</button></Link></div>
          </div>

        </div>
      </div>
      {/* Bid section */}
      {/* <div className='flex  bg-[#effef6] flex-col pl-12 pr-12 md:flex-row md:pl-12 xl:pl-52  md:pr-12 lg:pr-20 py-8 sm:py-20'>
      <div className='w-[100%] md:w-[50%] 2xl:w-[40%] flex justify-center items-center'>
          <img src="https://res.cloudinary.com/difxlqrlc/image/upload/q_auto/f_auto/w_1000/v1684519292/site/biddingImg_ljtzjx.webp" className="w-[100%] sm:w-[50%] md:w-[100%] lg:w-[90%]" alt="" />
        </div>
        <div className='text-center items-center md:items-start md:text-left flex flex-col justify-center mt-12 md:mt-0 gap-[20px] w-[100%] md:w-[50%] 2xl:w-[60%]'>
          <h1 className='title-font font-extrabold text-3xl md:text-5xl'  >
    Bid For <span className='text-[#00c676]'>Today</span>
          </h1>
          <p className='textnormal text-sm sm:text-base md:text-[18px] leading-8 font-medium title-font md:w-[70%]'>
          Wish you could bid hotel prices for your budget and make your trip more pocket friendly?      Here's an end to your worries because we let you place your bid for today's lowest hotel prices.
          </p>
         
          <Link to="/what-is-bid"><button className='flex justify-center items-center border bg-[#00c676] rounded md:text-xl text-white font-bold shadow-md  px-8 py-2 my-5 '>
Know more
          </button></Link>
        </div>
        
      </div> */}

      {/* special offers block */}
      <div className='   sm:pb-8  rounded-t-[15px]  pt-2 xs:pt-20 mx-4 sm:mx-16 md:mx-20 2xl:mx-60 font-body'>
        <div className='text-left font-head  flex justify-between items-end'>
          <div>
            <h1 className='font-bold text-lg sm:text-3xl'>Trending Packages</h1>
            <p className='pt-2 sm:pt-4 textnormal  text-[13px] sm:text-base  md:text-lg'>Have a plan to go vacation? See trending destinations for your inspiration where to go.</p>

          </div>
          <Link to="/packages" className='text-[#03BA6D] flex gap-2 items-center justify-center'>View All Travel Packages <FaArrowRight /></Link>

        </div>
      </div>
      <div className=' hidden sm:block    mx-4  sm:mx-16 md:mx-20 2xl:mx-60  '>
        <LazyLoad offset={200}><DestCard /></LazyLoad>

      </div>
      <div className=' block sm:hidden bg-[white] sm:mx-16 md:mx-20 2xl:mx-60  '>

        <LazyLoad offset={200}><DestCardMob /></LazyLoad>

      </div>


      <div className='mt-20'>
        <LazyLoad offset={200}><Emi /></LazyLoad>
      </div>
      {/* <div className="pt-8 sm:pt-20 pb-8 px-4 sm:px-16 md:px-20 2xl:px-40 ">
        <h1 className='text-center font-bold text-blacky-dark text-2xl sm:text-4xl'>Special Offers</h1>
                  <p className='text-center textnormal py-4 text-sm  sm:text-base md:text-lg font-body'>Get ready to explore the world with our unbeatable travel deals!</p>
      </div> */}

      {/* <div className="px-4 sm:px-16 md:px-20 2xl:px-40 offer-container ">
        <LazyLoad offset={200}><Offers /></LazyLoad>
      </div> */}
      {/* <div className='px-7 text-center pb-8'>
          <Link to="/traveloffers" ><button className='font-medium border-graydust-dark border p-2 rounded-md w-full sm:w-auto px-10 hover:bg-evergreen hover:text-whiteglow hover:border-transparent hover:transition-colors hover:duration-200' >View All Offers</button></Link>
        </div> */}



      {/* <div className='px-4  sm:px-16 md:px-20 2xl:px-60 my-8 md:my-20'>
        <div className='bg-[white] gradientbg rounded-[10px] flex flex-col xs:flex-row xs:items-center shadow-con' >
          <img src={ebook} className='w-[60%] xs:w-[35%] lg:w-[25%] xl:w-[20%]' />
          <div className='flex gap-2 md:gap-4 flex-col items-start pl-4  md:pl-12   pr-4'>
            <h1 className='text-lg sm:text-2xl lg:text-3xl font-bold text-[white] poppins'>Download our free E-book</h1><p className='text-white text-sm md:text-base lg:text-base font-regular poppins'>Download our free ebook to become well informed on buying a travel package. Be well informed before making a well informed decision.</p>
            <Link className='bg-[#00c676] text-[white] px-4 text-xs md:text-base py-3 rounded-full mb-4'>Download Now</Link>
          </div>
        </div>
      </div> */}



      <div className="mt-8 sm:mt-[3rem] pt-8 py-2 rounded-[10px] text-left   sm:mb-12 sm:mb-0 mx-4 sm:mx-16 md:mx-20 2xl:mx-60 font-body ">
        <div className='flex justify-between items-end'>
          <div className="">
            <h1 className="text-lg sm:text-2xl text-left md:text-3xl font-bold font-head">
              Explore Popular Destinations
            </h1>
            <p className="text-[13px] sm:text-base  md:text-lg  pt-4 font-head text-graydust-dark">
              Discover Our Most Popular Destinations and Plan Your Next Adventure
              Today!
            </p>
          </div>


          <Link className='text-[#03BA6D] flex gap-2 items-center justify-center'>View All Destinations <FaArrowRight /></Link>


        </div>


        <div className=" py-8 pb-8 flex flex-col gap-12 text-left  text-[black] mb-4 font-bold text-xl location-container">
          <div className='flex justify-between gap-8'>





           <div className='w-[22%]'>
           <div
              className=" w-full  relative rounded-[10px] min-h-[250px] cursor-pointer"
              onClick={() => handleS2submit("goa")}
            >                            <div className="imagegradient rounded-[10px] absolute top-0  w-[100%]   bottom-0 z-[100]  "></div>

              <img src="https://res.cloudinary.com/difxlqrlc/image/upload/q_auto/w_300/v1684520904/site/goa_t0lts6.jpg" alt="" className='absolute h-full rounded-[10px] object-cover' />
              
            </div>
            <div className='  w-full '>
                <h1 className=" text-base sm:text-xl mt-4  roboto">Goa</h1>

                <p className='text-sm font-regular pt-2 font-head text-[#717171]'>Where Majestic Landscapes Meet Unparalleled Tranquility</p>
              </div>

           </div>
           <div className='w-[22%]'>
           <div
              className=" w-full  relative rounded-[10px] min-h-[250px] cursor-pointer"
              onClick={() => handleS2submit("goa")}
            >                            <div className="imagegradient rounded-[10px] absolute top-0  w-[100%]   bottom-0 z-[100]  "></div>

              <img src="https://res.cloudinary.com/difxlqrlc/image/upload/q_auto/w_300/v1684520904/site/goa_t0lts6.jpg" alt="" className='absolute h-full rounded-[10px] object-cover' />
              
            </div>
            <div className='  w-full '>
                <h1 className=" text-base sm:text-xl mt-4  roboto">Goa</h1>

                <p className='text-sm font-regular pt-2 font-head text-[#717171]'>Where Majestic Landscapes Meet Unparalleled Tranquility</p>
              </div>

           </div><div className='w-[22%]'>
           <div
              className=" w-full  relative rounded-[10px] min-h-[250px] cursor-pointer"
              onClick={() => handleS2submit("goa")}
            >                            <div className="imagegradient rounded-[10px] absolute top-0  w-[100%]   bottom-0 z-[100]  "></div>

              <img src="https://res.cloudinary.com/difxlqrlc/image/upload/q_auto/w_300/v1684520904/site/goa_t0lts6.jpg" alt="" className='absolute h-full rounded-[10px] object-cover' />
              
            </div>
            <div className='  w-full '>
                <h1 className=" text-base sm:text-xl mt-4  roboto">Goa</h1>

                <p className='text-sm font-regular pt-2 font-head text-[#717171]'>Where Majestic Landscapes Meet Unparalleled Tranquility</p>
              </div>

           </div><div className='w-[22%]'>
           <div
              className=" w-full  relative rounded-[10px] min-h-[250px] cursor-pointer"
              onClick={() => handleS2submit("goa")}
            >                            <div className="imagegradient rounded-[10px] absolute top-0  w-[100%]   bottom-0 z-[100]  "></div>

              <img src="https://res.cloudinary.com/difxlqrlc/image/upload/q_auto/w_300/v1684520904/site/goa_t0lts6.jpg" alt="" className='absolute h-full rounded-[10px] object-cover' />
              
            </div>
            <div className='  w-full '>
                <h1 className=" text-base sm:text-xl mt-4  roboto">Goa</h1>

                <p className='text-sm font-regular pt-2 font-head text-[#717171]'>Where Majestic Landscapes Meet Unparalleled Tranquility</p>
              </div>

           </div><div className='w-[22%]'>
           <div
              className=" w-full  relative rounded-[10px] min-h-[250px] cursor-pointer"
              onClick={() => handleS2submit("goa")}
            >                            <div className="imagegradient rounded-[10px] absolute top-0  w-[100%]   bottom-0 z-[100]  "></div>

              <img src="https://res.cloudinary.com/difxlqrlc/image/upload/q_auto/w_300/v1684520904/site/goa_t0lts6.jpg" alt="" className='absolute h-full rounded-[10px] object-cover' />
              
            </div>
            <div className='  w-full '>
                <h1 className=" text-base sm:text-xl mt-4  roboto">Goa</h1>

                <p className='text-sm font-regular pt-2 font-head text-[#717171]'>Where Majestic Landscapes Meet Unparalleled Tranquility</p>
              </div>

           </div><div className='w-[22%]'>
           <div
              className=" w-full  relative rounded-[10px] min-h-[250px] cursor-pointer"
              onClick={() => handleS2submit("goa")}
            >                            <div className="imagegradient rounded-[10px] absolute top-0  w-[100%]   bottom-0 z-[100]  "></div>

              <img src="https://res.cloudinary.com/difxlqrlc/image/upload/q_auto/w_300/v1684520904/site/goa_t0lts6.jpg" alt="" className='absolute h-full rounded-[10px] object-cover' />
              
            </div>
            <div className='  w-full '>
                <h1 className=" text-base sm:text-xl mt-4  roboto">Goa</h1>

                <p className='text-sm font-regular pt-2 font-head text-[#717171]'>Where Majestic Landscapes Meet Unparalleled Tranquility</p>
              </div>

           </div>




           
          </div>
        </div>
      </div>






      <div className='px-4  sm:px-16 md:px-20 2xl:px-60 my-8 md:my-16'>
        <LazyLoad offset={200}><EmiCard /></LazyLoad>
      </div>
      {/* Reviews block */}





      <div className=' pb-12 px-4  py-28   sm:px-16 md:px-20 2xl:px-72 font-body reviewbg'>
        <div className='flex w-full flex-col '>
          <div className='w-[100%] flex  '>
            <h1 className='font-[900] roboto text-[white]  w-full text-lg sm:text-[52px] text-left pt-8 xl:pt-7 mb-8 flex flex-col gap-10'><span>Unforgettable</span> <span>Travel experiences</span> </h1>

          </div>
          <div className='w-[110%] relative translate-x-[-50%] left-[50%] pb-16  pt-12'><LazyLoad offset={200}><Reviews /></LazyLoad></div>

        </div>

      </div>
      <LazyLoad offset={200}><InterestForm /></LazyLoad>

      <div className=' px-4  pb-12   sm:px-16 md:px-20 2xl:px-60 '>
        <div className='bg-[white] bid-bg text-center py-12 rounded-[15px]'>
          <h1 className='text-3xl font-bold font-head '>Ready to Craft Your Perfect Travel Package?</h1>
          <p className='w-[70%] mx-auto pt-12 text-[#464646] font-head text-lg'>We can assist you with planning your trip, including finding the best budget options and addressing other requirements. Our team will provide a callback to discuss your needs and offer guidance. Feel free to reach out, and we'll help you plan your trip with confidence.</p>
          <div className='pt-12 flex justify-center gap-6'>
            <button className='gradientbg text-[white] px-8 py-3 text-lg font-head rounded-[10px] flex items-center gap-3'><AiOutlineWhatsApp className='text-3xl' /> Chat with Us</button>
            <button className='gradientbg text-[white] px-8 py-3 text-lg font-head rounded-[10px] flex items-center gap-3'>< AiOutlinePhone className='text-3xl' />Get a Callback</button>
          </div>
        </div>
      </div>
      {/* Footer block */}

      <Footer />
    </div>
  )
}
export default Home