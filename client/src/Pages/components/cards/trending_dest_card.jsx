
import React from "react";
import useFetch from "../../../hooks/useFetch";
import { Link } from "react-router-dom";
import BarLoader from "react-spinners/BarLoader";
import Slider from "react-slick";


const DestCard = () => {
  const { data, loading, error } = useFetch(
    "/packages?rating=1&rating=2&rating=3&limit=12"
  );
  const generateUrl = (url)=>{
    const [baseUrl, ...rest] = url.split("/upload/");

  return `${baseUrl}/upload/c_fill,w_400/f_auto/q_auto/${rest.join("/upload/")}`;


  }

  return (
    
    <div className="sm:grid  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 auto-rows-[1fr]">
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
            {data?.map((item) => (

<Link  to={`/list/package/${item._id}`} className='flex'><div  key={item._id}  className="w-[80%] sm:w-auto mx-auto sm:mx-0 bg-whiteglow cursor-pointer card-shadow rounded pb-4 relative"  >
              <div className="relative">
              <div className="imagegradient absolute top-0 left-0 right-0 bottom-0 z-[100] rounded "></div>
              <img className='w-full aspect-video skeleton rounded-t-lg' src={generateUrl(item.images[0])} alt="" />
              <h3 className='text-lg sm:text-lg  font-bold z-[102] text-whiteglow px-3  absolute bottom-[3px] md:bottom-[10px]'>{item.title}</h3>

              </div>
           <div className='py-3 mx-3'>
              <span className="font-bold text-[#03965e]">{item.duration}</span>
               <p className='text-[0.75rem] sm:text-[0.875rem] card-text my-2 textnormal  '>{item.description}</p>    
           </div>
           
           <div className="py-2 mx-3 ">

             {item.offers ? 
            (<div className="flex flex-col items-start gap-2">
            <span className="text-sm text-white bg-[red] px-2 py-1 rounded">15% off</span>
            <div className="flex gap-2 items-center">
            <span className=" text-xl font-bold">₹ {item.offerprice && item.offerprice.toString().replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}</span><strike><span className=" text-sm text-graydust-dark font-bold">₹ {item.cheapestPrice && item.cheapestPrice.toString().replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}</span></strike> <span className="text-xs text-graydust-dark">Per person</span>
            </div>
          </div>):(  <div className="flex flex-col items-start gap-2 ">             
                      <span className="text-sm text-white bg-[red] px-2 py-1 invisible rounded">15% off</span>

          <div className="flex justify-start gap-1 items-center"><span className=" text-xl font-bold">₹ {item.cheapestPrice && item.cheapestPrice.toString().replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}</span> <span className="text-xs text-graydust-dark">Per person</span></div></div>
) 
            }
               
         
            </div>
              
           </div></Link>
            ))}
          </>
        )}
    </div>
  );
};



export default DestCard;