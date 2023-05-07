
import React from "react";
import useFetch from "../../../hooks/useFetch";
import { Link } from "react-router-dom";
import BarLoader from "react-spinners/BarLoader";
import Slider from "react-slick";
const DestCardMob = () => {
  const { data, loading, error } = useFetch(
    "/packages?rating=1&rating=2&rating=3&limit=12"
  );
  var settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 100,
    slidesToShow: 1.5,
    rows: 2,
    lazyLoad:"ondemand",
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1000,
    
  };

  return (
    <>
        {loading ? (
           <div className='loading-div'>
           <BarLoader



               color={'#32fca7'}
               loading={loading}

               size={15}

               />
         </div>
        ) : (
          <>
          <Slider  {...settings}>
            {data.map((item) => (

<Link  to={`/list/package/${item._id}`} className='flex mb-8'><div  key={item._id}  className="w-[95%] sm:w-auto mx-auto sm:mx-0 bg-whiteglow cursor-pointer card-shadow rounded pb-4 relative"  >
              <div className="relative">
              <div className="absolute top-0 left-0 right-0 bottom-0 z-40 rounded bg-gradient-to-b from-transparent via-transparent to-black"></div>
              <img className='w-full aspect-video skeleton rounded-t-lg' src={item.images[0]} alt="" />
              <h3 className='text-sm font-bold z-50 text-whiteglow px-3  absolute bottom-[3px] md:bottom-[10px]'>{item.title}</h3>
              <span className="font-bold absolute top-0 text-sm text-[white] right-0 bg-[#0000008a] px-2 py-1 rounded">{item.duration}</span>
{     item.offers &&         <span className="text-2xs text-white bg-[red] px-2 py-1 top-0 shadow-sm left-0 absolute rounded">{item.offertitle}</span>
}
              </div>
           <div className='py-1 mx-3'>

               <p className='text-[0.75rem] sm:text-[0.875rem] card-text my-2 textnormal  '>{item.description}</p>    
           </div>
           
           <div className="py-1 mx-3 ">

             {item.offers ? 
            (<div className="flex flex-col items-start gap-2">
            <div className="flex gap-2 items-end">
            <span className=" text-base font-bold">₹ {item.offerprice && item.offerprice.toString().replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}</span><strike><span className=" text-2xs text-graydust-dark font-bold">₹ {item.cheapestPrice && item.cheapestPrice.toString().replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}</span></strike> <span className="text-2xs text-graydust-dark">Per person</span>
            </div>
          </div>):(  <div className="flex flex-col items-start gap-2 ">             

          <div className="flex justify-start gap-1 items-center"><span className=" text-base font-bold">₹ {item.cheapestPrice && item.cheapestPrice.toString().replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}</span> <span className="text-xs text-graydust-dark">Per person</span></div></div>
) 
            }
               
         
            </div>
              
           </div></Link>
            ))}</Slider>
          </>
        )}
    </>
  );
};



export default DestCardMob;