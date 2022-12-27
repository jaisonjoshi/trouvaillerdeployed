import React, {useState,useEffect} from 'react'
import DestCard from '../components/cards/trending_dest_card'
import Offers from '../components/cards/special_offers_card'
import Reviews from '../Reviews/Review'
import ReviewMob from '../Reviews/ReviewsMob'
import Footer from '../components/Footer/Footer'
import { Link } from "react-router-dom";
import Timer from '../components/timer/timer'
import NavbarTest from '../components/navbar/navbar'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import bidingImg from '../Assets/biding.webp'
import "slick-carousel/slick/slick-theme.css";


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
      <div className=" w-full h-screen">
           <NavbarTest color={color}/>
             <Slider {...settings}>
                <div className='pic1 w-screen h-screen'></div>
                <div className='pic2 w-screen h-screen'></div>
                <div className='pic3 w-screen h-screen'></div>

                <div className='pic4 w-screen h-screen'></div>

                <div className='pic5 w-screen h-screen'></div>


        </Slider>
        <div className=" absolute top-0 h-[100vh] flex items-center pl-12 md:pl-16 lg:pl-40 pr-8 md:pr-0">
          <div>
          <h1 className="text-5xl text-whiteglow font-bold ">
            THE BEST TOURS IN JUST 3 CLICKS
          </h1>
          <p className="text-md md:text-lg text-whiteglow py-5">
            Enter a country, a city or even just a landmark and we'll find the right tours for you
          </p>

          <Link className="" to="/packages"> <button className="flex justify-center items-center bg-evergreen text-blacky-medium w-36 font-bold rounded-md p-2 my-5 hover:bg-whiteglow duration-500">
            Explore
            <img src={require('../Assets/Arrow.png')} alt="" className="h-3 w-3 mx-4 my-2" />
          </button></Link>
          </div>

        </div>
      </div>

      {/* Bid section */}
      <div className='flex flex-col-reverse pl-12 pr-12 md:flex-row md:pl-12 xl:pl-52 bg-gradient-to-r from-[rgba(230,255,232,0.37)] to-[rgba(232,255,230,1)] md:pr-12 lg:pr-20 py-20'>
        <div className='text-center items-center md:items-start md:text-left flex flex-col justify-center gap-[20px] w-[100%] md:w-[50%] 2xl:w-[60%]'>
          <h1 style={{fontSize:"35px", fontWeight:"800"}}>
    Bid For Today
          </h1>
          <p className='textnormal text-md md:text-lg'>
          Wish you could bid hotel prices for your budget and make your trip more pocket friendly? Here's an end to your worries because we let you place your bid for today's lowest hotel prices.
          </p>
          <h3 style={{fontSize:"25px"}}>
          Interesting isn't it?
          </h3>
          <Link to="/what-is-bid"><button className='flex justify-center items-center bg-evergreen text-blacky-medium w-36 font-bold rounded-md p-2 my-5 hover:bg-whiteglow duration-500'>
Know more
          </button></Link>
        </div>
        <div className='w-[100%] md:w-[50%] 2xl:w-[40%] flex justify-center items-center'>
          <img src={bidingImg} className="w-[100%] sm:w-[50%] md:w-[100%] lg:w-[70%]" alt="" />
        </div>
      </div>
      
      {/* special offers block */}

      <div className="mt-20 mb-12">
        <h1 className='text-center mx-28 font-bold text-blacky-dark text-2xl'>Special Offers</h1>
                  <p className='text-center textnormal py-4 mx-12 text-md md:text-lg'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore iure odit nemo. Deleniti aut blanditiis sit adipisci nisi dolorem animi, quibusdam tenetur obcaecati in quaerat reiciendis, quidem vitae velit voluptates.</p>
      </div>

      <div className=" mx-8 md:mx-16 offer-container">
        <Offers />
      </div>
      <div className='p-7 text-center mb-12'>
          <Link to="/offers" ><button className='font-medium border-graydust-dark border p-2 rounded-md w-full sm:w-auto px-10 hover:bg-evergreen hover:text-whiteglow hover:border-transparent hover:transition-colors hover:duration-200' >View All Offers</button></Link>
        </div>
      <div>

        {/* Trending destinations block */}

        <div className='pt-28 pb-8 px-4'>
          <div className='text-center'>
            <h1 className='font-bold text-2xl'>Trending Destinations</h1>
            <p className=' pt-4 textnormal text-md md:text-lg'>Have a plan to go vacation? See trending destinations for your inspiration where to go.</p>
          </div>
        </div>
        <div className='grid md:mx-16 sm:grid-cols-2 sm:grid-cols-2 xl:grid-cols-3 gap-10 m-11'>
          <DestCard />
          
        </div>
        <div className='p-7 text-center mb-12'>
          <Link to="/packages" ><button className='font-medium border-graydust-dark border p-2 rounded-md w-full sm:w-auto px-10 hover:bg-evergreen hover:text-whiteglow hover:border-transparent hover:transition-colors hover:duration-200' >More destinations</button></Link>
        </div>
      </div >

      {/* Reviews block */}

      <div className='bg-graydust-light pb-12'>
        <h1 className='font-bold text-4xl text-center pt-7 mb-8'>Reviews</h1>
        <div className='px-4 sm:px-20'><Reviews /></div>

      </div>

      {/* Footer block */}

      <Footer />
    </div>
  )
}
export default Home