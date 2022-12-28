
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

             <div  key={item._id}  className="bg-whiteglow card-shadow rounded pb-4"  >
           <img className='w-full rounded-lg' src={item.images[0]} alt="" />
           <div className='py-3 mx-8'>
               <h3 className='text-xl font-bold text-blacky-medium'>{item.title}</h3>
               <p className='text-sm card-text md:text-[17px] textnormal  '>{item.description}</p>    
           </div>
           
           <div className="py-2 mx-8 flex justify-between items-center">
               <p className="text-evergreen text-xl font-bold">₹{item.cheapestPrice}</p>
               <p className="text-lg text-blacky-light font-bold">{item.duration}</p>

                </div>
                <div className=" flex mx-8">
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