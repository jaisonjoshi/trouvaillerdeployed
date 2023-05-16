import React, {useState,useEffect} from 'react'
import DestCard from '../components/cards/trending_dest_card'
import Offers from '../components/cards/special_offers_card'
import Reviews from '../Reviews/Review'
import Footer from '../components/Footer/Footer'
import { Link } from "react-router-dom";
import NavbarTest from '../components/navbar/navbar'
import Slider from "react-slick";
import logo from '../Assets/TrouvaillerGreen .png'
import "slick-carousel/slick/slick.css";
import bidingImg from '../Assets/biddingImg.png'
import "slick-carousel/slick/slick-theme.css";
import DestCardMob from '../components/cards/trending_dest_card_mob'
import Emi from '../components/cards/emi'
import InterestForm from '../components/cards/interestForm'


const Home = () => {
  const [anim, setAnim] = useState("hide")
  useEffect(()=>{
      window.addEventListener('load', setAnim("show"))

  }, [])
  const settings = {
    className: "z-0",
    infinite: true,
   
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    autoplay:true,
    autoplaySpeed: 4000,
    
  };
  const color = "text-whiteglow"
  return (
    <div className={`animationset ${anim}`}>
      <div className=" w-full h-[100vh] background-header">
           <NavbarTest color={color}/>
             
        <div className=" absolute  top-0 h-[100vh] w-full flex justify-center items-center ">
          <div className='flex flex-col items-center mt-28'>
          <h1 className="text-xl md:text-5xl text-whiteglow font-extrabold title-font text-center">
          Discover Your Next Adventure</h1><h1 className=' w-full mt-3 title-font text-2xl md:text-5xl text-whiteglow font-extrabold text-center'> with <img className='inline w-[30%]' src={logo} alt="" />
          </h1>
          <p className="text-sm w-[70%] md:w-full  md:text-xl text-whiteglow text-center pb-6 pt-10">
          Experience the adventure of a lifetime with our handpicked travel packages. <br />Book now and create memories that will last a lifetime!
          </p>

          <Link className="" to="/packages"> <button className="flex justify-center items-center bg-[transparent] shadow-lg border border-[#00A651] rounded-full text-whiteglow w-36 font-bold p-2 my-2 hover:bg-whiteglow duration-500">
            Explore
          </button></Link>
          <div className='rounded-full mt-20 bg-[white] px-2 py-1 flex justify-between shadow-xl w-[80%] md:w-[50%]'>
          <input type="text" placeholder='Search Destinations ' className='outline-none rounded border-none text-sm md:text-base focus:ring-[transparent]  focus:border-[transparent]'/>
<button className='font-bold text-white bg-[#00c676] text-xs md:text-base py-2 rounded-full px-4 md:px-6'>Search</button>
          </div>
          </div>

        </div>
      </div>

      {/* Bid section */}
      <div className='flex  bg-[#effef6] flex-col pl-12 pr-12 md:flex-row md:pl-12 xl:pl-52  md:pr-12 lg:pr-20 py-8 sm:py-20'>
      <div className='w-[100%] md:w-[50%] 2xl:w-[40%] flex justify-center items-center'>
          <img src={bidingImg} className="w-[100%] sm:w-[50%] md:w-[100%] lg:w-[90%]" alt="" />
        </div>
        <div className='text-center items-center md:items-start md:text-left flex flex-col justify-center mt-12 md:mt-0 gap-[20px] w-[100%] md:w-[50%] 2xl:w-[60%]'>
          <h1 className='title-font font-extrabold text-3xl md:text-5xl'  >
    Bid For <span className='text-[#00c676]'>Today</span>
          </h1>
          <p className='textnormal text-sm sm:text-base md:text-[18px] leading-8 font-medium title-font md:w-[70%]'>
          Wish you could bid hotel prices for your budget and make your trip more pocket friendly?      Here's an end to your worries because we let you place your bid for today's lowest hotel prices.
          </p>
         
          <Link to="/what-is-bid"><button className='flex justify-center items-center border border-[#00c676] rounded-full md:text-xl text-[#00c676] font-bold shadow-lg  px-8 py-2 my-5 hover:bg-evergreendark duration-500'>
Know more
          </button></Link>
        </div>
        
      </div>
      
      {/* special offers block */}
      <div className=' pt-12 md:pt-4 sm:pt-28 pb-8   px-4 sm:px-16 md:px-20 2xl:px-40'>
          <div className='text-center'>
            <h1 className='font-bold text-2xl sm:text-4xl'>Trending Destinations</h1>
            <p className=' pt-4 textnormal  md:text-lg'>Have a plan to go vacation? See trending destinations for your inspiration where to go.</p>
          </div>
        </div>
        <div className=' hidden sm:grid  px-4 sm:px-16 md:px-20 2xl:px-40  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 auto-rows-[1fr] '>
          <DestCard />
          
        </div>
        <div className=' block sm:hidden   px-4 sm:px-16 md:px-20 2xl:px-40  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 auto-rows-[1fr] '>
          
          <DestCardMob />
          
        </div>
        <div className='p-7 text-center   mb-12'>
          <Link to="/packages" ><button className='font-medium border-graydust-dark border p-2 rounded-md w-full sm:w-auto px-10 hover:bg-evergreen hover:text-whiteglow hover:border-transparent hover:transition-colors hover:duration-200' >More destinations</button></Link>
        </div>

        <div className='px-4 bg-[#ECF1F0] sm:px-16 md:px-20 2xl:px-40'>
          <Emi />
        </div>
      <div className="pt-8 sm:pt-20 pb-8 px-4 sm:px-16 md:px-20 2xl:px-40 ">
        <h1 className='text-center font-bold text-blacky-dark text-2xl sm:text-4xl'>Special Offers</h1>
                  <p className='text-center textnormal py-4 text-sm  sm:text-base md:text-lg font-body'>Get ready to explore the world with our unbeatable travel deals!</p>
      </div>

      <div className="px-4 sm:px-16 md:px-20 2xl:px-40 offer-container ">
        <Offers />
      </div>
      <div className='px-7 text-center pb-8'>
          <Link to="/traveloffers" ><button className='font-medium border-graydust-dark border p-2 rounded-md w-full sm:w-auto px-10 hover:bg-evergreen hover:text-whiteglow hover:border-transparent hover:transition-colors hover:duration-200' >View All Offers</button></Link>
        </div>
      <div>

        {/* Trending destinations block */}

        
      </div >

      {/* Reviews block */}
<InterestForm />
      <div className='bg-[#ECF1F0] pb-12 pt-20'>
        <h1 className='font-bold text-2xl sm:text-4xl text-center pt-7 mb-8'>What People Say About Us</h1>
        <div className='px-4 sm:px-20'><Reviews /></div>

      </div>

      {/* Footer block */}

      <Footer />
    </div>
  )
}
export default Home