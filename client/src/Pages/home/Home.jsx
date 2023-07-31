import LazyLoad from 'react-lazyload';
import React, {useState,useEffect} from 'react'
import DestCard from '../components/cards/trending_dest_card'
import Offers from '../components/cards/special_offers_card'
import Reviews from '../Reviews/Review'
import Footer from '../components/Footer/Footer'
import { Link } from "react-router-dom";
import NavbarTest from '../components/navbar/navbar'
import logo from '../Assets/Trouvailler Green.png'
import DestCardMob from '../components/cards/trending_dest_card_mob'
import Emi from '../components/cards/emi'
import InterestForm from '../components/cards/interestForm'
import { useNavigate } from 'react-router';
import card from '../Assets/cardbg.png'
import cardavatar from '../Assets/cardavatar.png'
import whitelogo from '../Assets/Trouvaillerwhite.png'
import EmiCard from '../components/cards/EmiCard';

const Home = ({setlocation}) => {
  const [destination, setDestination] = useState("");
const navigate = useNavigate()
  const handleSearchChange = (e) => {
    let tar = e.target.value;
  
    setDestination(tar.toLowerCase());
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
  useEffect(()=>{
      window.addEventListener('load', setAnim("show"))  

  }, [])
  
  const color = "text-whiteglow"

  const handleS2submit = (value) => {
    setlocation(value);

    navigate(`/sep/${value}`);
  };



  return (
    <div className={`animationset ${anim}`}>
      <div className=" w-full relative h-[80vh] sm:h-[90vh] background-header">
           <NavbarTest color={color}/>
             
        <div className=" absolute z-[100] top-0 left-0 right-0 h-[80vh] sm:h-[90vh] pb-20 w-full flex flex-col lg:flex-row justify-start pl-4  sm:pl-12 lg:pl-16 2xl:pl-36 items-start ">
          <div className='flex flex-col items-start mt-32 sm:mt-40 lg:mt-52 2xl:mt-56 w-[100%] lg:w-[60%] 2xl:w-[50%]'>
          <h1 className="text-xl sm:text-2xl md:text-3xl 2xl:text-4xl text-whiteglow sm:mb-4 font-bold text-left">
          Discover Your </h1><h1 className=' w-full sm:mt-1 2xl:mt-3 title-font text-2xl sm:text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl text-whiteglow font-extrabold text-left'>Next Adventure <span className='text-[#00c676]'>with Us</span>
          </h1>
          <p className="text-[14px] sm:text-base md:text-lg w-[100%] lg:w-[70%] w-[90%] md:w-full  lg:text-xl text-whiteglow text-left pb-6 pt-6 sm:pt-10">
          Experience the adventure of a lifetime with our handpicked travel packages. <br />Book now and create memories that will last a lifetime!
          </p>

          <Link className="" to="/packages"> <button className="flex btn-animation justify-center items-center bg-[transparent] shadow-lg border border-[#00A651] rounded-full text-whiteglow w-28 sm:w-36 font-bold p-2 sm:my-2 hover:bg-[#00A651] duration-500">
            <span className='relative z-[110] text-sm sm:text-base'>Explore</span>
          </button></Link>
          <div className='rounded-full mt-12 lg:mt-20 bg-[white] px-2 sm:py-1 flex justify-between items-center shadow-xl w-[85%] sm:w-[80%] md:w-[60%] lg:w-[90%] xl:w-[80%]'>
          <input onChange={handleSearchChange} type="text" placeholder='Search places ' className='outline-none rounded-full sm:rounded border-none w-[70%] text-sm md:text-base focus:ring-[transparent]  focus:border-[transparent]'/>
<button onClick={handleSClick} className='font-bold text-white bg-[#00c676] text-xs md:text-base py-[0.40rem] sm:py-2 rounded-full px-6 sm:px-4 md:px-6'>Search</button>
          </div>
          </div>
          <div className='hidden lg:flex justify-center mt-48 2xl:mt-40   w-[60%]'>
            <div className='max-w-[450px] 2xl:max-w-[550px] relative text-white pt-8 pl-8 pr-10 card-background shadow-xl rounded-[20px] relative'>
             <img src={whitelogo} alt="" className='w-[100px] absolute top-8 right-8' />
              <span className='text-base font-bold'>Get Your Stay</span><br/>
              <span className='text-2xl font-bold'>At Your Price</span><br/><br />
              <span className='text-4xl xl:text-5xl font-black'><span className='text-[#00c676]'>Bid For </span>Today</span>
              <div className='flex mt-4'>
                  <img src={cardavatar} className='w-[50%]' alt="" />
                <div className='w-[50%] flex flex-col justify-center gap-8 px-1'><span className='font-medium 2xl:text-lg'>Now book hotels at your desired place for today<br /><br />
 
 Click the button below and place your bid now</span><Link className='border border-[#00c676] px-4 py-2 rounded-[10px] btn-animation font-bold shadow-lg'><button className='z-[110] relative'>Know More</button></Link></div>
              </div>
              
            </div>
          </div>

        </div>
      </div>
     <div className="px-4 sm:px-16 md:px-20 2xl:px-40 py-12 lg:hidden">
     <div className='w-[100%] lg:max-w-[450px] 2xl:max-w-[550px] relative text-white pt-8 pl-4 sm:pl-8 pr-4 sm:pr-10 card-background shadow-xl rounded-[20px] relative '>
             <img src={whitelogo} alt="" className='w-[80px] sm:w-[100px] absolute top-8 right-8' />
              <span className='text-base font-bold'>Get Your Stay</span><br/>
              <span className='text-xl sm:text-2xl font-bold'>At Your Price</span><br/><br />
              <span className='text-3xl xs:text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-black'><span className='text-[#00c676]'>Bid For </span>Today</span>
              <div className='flex mt-4'>
                  <img src={cardavatar} className='w-[50%] xs:w-[30%] lg:w-[50%]' alt="" />
                <div className='w-[50%] xs:w-[70%] lg:w-[50%] flex flex-col justify-center items-start gap-8 md:pl-[10%] px-1 '><span className='md:font-medium text-sm sm:text-base md:text-lg lg:text-base 2xl:text-lg'>Now book hotels at your desired place for today<br className='hidden lg:block'/><br />
 
 Click the button below and place your bid now</span><Link className='border border-[#00c676] px-4 py-2 rounded-[10px] btn-animation font-bold shadow-lg'><button className='z-[110] relative'>Know More</button></Link></div>
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
      <div className=' pt-6 sm:pt-12 md:pt-16 sm:pt-28 sm:pb-8  bg-[#e2e2e2] sm:bg-[white] px-4 sm:px-16 md:px-20 2xl:px-40'>
          <div className='text-left'>
            <h1 className='font-bold text-xl sm:text-2xl sm:text-4xl'>Trending Destinations</h1>
            <p className='pt-2 sm:pt-4 textnormal pb-8 text-[14px] sm:text-base  md:text-lg'>Have a plan to go vacation? See trending destinations for your inspiration where to go.</p>
          </div>
        </div>
        <div className=' hidden sm:block   px-4  sm:px-16 md:px-20 2xl:px-40  '>
          <LazyLoad offset={200}><DestCard /></LazyLoad>
          
        </div>
        <div className=' block sm:hidden bg-[#e2e2e2]  sm:px-16 md:px-20 2xl:px-40 '>
          
          <LazyLoad offset={200}><DestCardMob /></LazyLoad>
          
        </div>
        <div className='p-7 text-center bg-[#e2e2e2]  sm:bg-[white] mb-12'>
          <Link to="/packages" ><button className='font-medium btn-animation bg-[white]  border-[#00c676] border p-2 rounded-[10px] w-full sm:w-auto px-10 ' ><span className='relative z-[110]'>More destinations</span></button></Link>
        </div>

        <div className='px-4  sm:px-16 md:px-20 2xl:px-72'>
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







<div className="mt-8 sm:mt-[2rem] py-2 sm:py-8 rounded-[10px] sm:mb-12 sm:mb-0 mx-4 sm:mx-16 md:mx-20 2xl:mx-40 ">
        <div className="flex justify-between items-center">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">
            Popular Destinations
          </h1>
        </div>
        <p className="text-[14px] sm:text-base lg:text-lg py-2 sm:py-4 text-graydust-dark">
          Discover Our Most Popular Destinations and Plan Your Next Adventure
          Today!
        </p>

        
        <div className=" pt-8 justify-between  text-[white] mb-12 font-bold text-xl flex gap-[2%] location-container">
          <div
            className="flex flex-col gap-2 w-[15%] min-w-[120px] sm:min-w-[200px] rounded-[10px] overflow-hidden relative cursor-pointer"
            onClick={() => handleS2submit("kashmir")}
          >
                            <div className="imagegradient absolute top-0  w-[100%]   bottom-0 z-[100] rounded "></div>

            <img src="https://res.cloudinary.com/difxlqrlc/image/upload/q_auto/w_300/v1684520897/site/kashmir_d4vjg6.jpg" className='w-[100%] h-full object-cover' alt="" />
            <h1 className="absolute text-base sm:text-xl left-3 bottom-3 z-[101]">Kashmir</h1>
          </div>

          <div
            className="flex flex-col gap-2 w-[15%] min-w-[120px] sm:min-w-[200px] rounded-[10px] overflow-hidden relative cursor-pointer"
            onClick={() => handleS2submit("goa")}
          >                            <div className="imagegradient absolute top-0  w-[100%]   bottom-0 z-[100] rounded "></div>

            <img src="https://res.cloudinary.com/difxlqrlc/image/upload/q_auto/w_300/v1684520904/site/goa_t0lts6.jpg" alt="" />
            <h1 className="absolute left-3 bottom-3 text-base sm:text-xl z-[101]">Goa</h1>
          </div>
          <div
            className="flex flex-col gap-2 w-[15%] min-w-[120px] sm:min-w-[200px] rounded-[10px] overflow-hidden relative cursor-pointer"
            onClick={() => handleS2submit("wayanad")}
          >                            <div className="imagegradient absolute top-0  w-[100%]   bottom-0 z-[100] rounded "></div>

            <img src="https://res.cloudinary.com/difxlqrlc/image/upload/q_auto/w_300/v1684520883/site/wayanad_fh4ade.jpg" alt="" />
            <h1 className="absolute left-3 bottom-3 text-base sm:text-xl z-[101]">Wayanad</h1>
          </div>
          <div
            className="flex flex-col gap-2 w-[15%] min-w-[120px] sm:min-w-[200px] rounded-[10px] overflow-hidden relative cursor-pointer"
            onClick={() => handleS2submit("munnar")}
          >                            <div className="imagegradient absolute top-0  w-[100%]   bottom-0 z-[100] rounded "></div>

            <img src="https://res.cloudinary.com/difxlqrlc/image/upload/q_auto/w_300/v1684520889/site/munnar_rasb7w.jpg" alt="" />
            <h1 className="absolute left-3 bottom-3 text-base sm:text-xl z-[101]">Munnar</h1>
          </div>
          <div
            className="flex flex-col gap-2 w-[15%] min-w-[120px] sm:min-w-[200px] rounded-[10px] overflow-hidden relative cursor-pointer"
            onClick={() => handleS2submit("mysore")}
          >                            <div className="imagegradient absolute top-0  w-[100%]   bottom-0 z-[100] rounded "></div>

            <img src="https://res.cloudinary.com/difxlqrlc/image/upload/q_auto/w_300/v1684520888/site/mysore_r7wqlx.jpg" alt="" />
            <h1 className="absolute left-3 text-base sm:text-xl bottom-3 z-[101]">Mysore</h1>
          </div>
        </div>
      </div>


      <div className='px-4  sm:px-16 md:px-20 2xl:px-40'>
          <LazyLoad offset={200}><EmiCard /></LazyLoad>
        </div>




      {/* Reviews block */}
        <LazyLoad offset={200}><InterestForm /></LazyLoad>





      <div className=' pb-12 sm:pt-20 px-4  sm:px-16 md:px-20 2xl:px-40'>
        <div className='flex w-full flex-col xl:flex-row'>
          <div className='w-[100%] xl:w-[30%] flex  items-center xl:bg-[#93FFD1] rounded-[10px] justify-center'>
          <h1 className='font-bold text-xl sm:text-2xl w-full sm:text-3xl text-left xl:text-center xl:pt-7 mb-8'>What People<br className='hidden xl:block'/> Say About Us </h1>

          </div>
        <div className='w-[100%] xl:w-[70%] pt-4'><LazyLoad offset={200}><Reviews /></LazyLoad></div>

        </div>
       
      </div>

      {/* Footer block */}

      <Footer />
    </div>
  )
}
export default Home