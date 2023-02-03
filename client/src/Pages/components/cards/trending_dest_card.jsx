
import React from "react";
import useFetch from "../../../hooks/useFetch";
import { Link } from "react-router-dom";
import PropagateLoader from "react-spinners/PropagateLoader";
const DestCard = () => {
  const { data, loading, error } = useFetch(
    "/packages?rating=1&rating=2&rating=3&limit=3"
  );

  return (
    <>
        {loading ? (
           <div className='loading-div'>
           <PropagateLoader


               color={'#32fca7'}
               loading={loading}

               size={15}

               />
         </div>
        ) : (
          <>
            {data.map((item) => (

             <div  key={item._id}  className="bg-whiteglow card-shadow rounded pb-4 relative"  >
              <div className="relative">
              <p className="text-sm  text-blacky-light font-bold absolute z-50  top-[2px] left-[2px] bg-[#00c676] rounded text-whiteglow m-[5px] px-[8px] py-[3px]">{item.duration}</p>
              <div className="absolute top-0 left-0 right-0 bottom-0 z-40 rounded bg-gradient-to-b from-transparent via-transparent to-black"></div>
              <img className='w-full aspect-video skeleton rounded-lg' src={item.images[0]} alt="" />
              <h3 className='text-xl font-bold z-50 text-whiteglow px-3  absolute bottom-[3px] md:bottom-[10px]'>{item.title}</h3>

              </div>
           <div className='py-3 mx-3'>

               <p className='text-sm card-text md:text-[17px] textnormal  '>{item.description}</p>    
           </div>
           
           <div className="py-2 mx-3 flex justify-between items-center">
               <p className="text-evergreen text-xl font-bold">₹{item.cheapestPrice}</p>
<Link  to={`/list/package/${item._id}`}>
<button className="bg-evergreen text-whiteglow font-semibold rounded-md px-8 py-2">View</button> </Link>
         
                </div>
              
           </div>
            ))}
          </>
        )}
    </>
  );
};



export default DestCard;