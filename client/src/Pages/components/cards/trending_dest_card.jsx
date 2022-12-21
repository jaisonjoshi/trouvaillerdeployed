
import React from "react";
import useFetch from "../../../hooks/useFetch";
import { Link } from "react-router-dom";

const DestCard = () => {
  const { data, loading, error } = useFetch(
    "/packages?rating=3&rating=4&rating=5&limit=6"
  );

  return (
    <>
        {loading ? (
          "Loading"
        ) : (
          <>
            {data.map((item) => (
             <Link className="w-[100%] " to={`/list/package/${item._id}`}>

             <div  key={item._id} >
           <img className='h-60 sm:h-72 object-cover w-full rounded-lg' src={item.images[0]} alt="" />
           <div className='py-5'>
               <h3 className='text-xl font-bold text-blacky-medium'>{item.title}</h3>
               <p className='text-sm text-justify text-blacky-light card-text'>{item.description}</p>    
           </div>
           <div className=" flex">
               <p className="text-lg text-blacky-light font-bold">{item.duration}</p>
               <img src={require('../../Assets/People.png')} alt="" className="pl-5 h-6" />
               <img src={require('../../Assets/People.png')} alt="" className="h-6" />
           </div>
           <div className="py-5 flex justify-between items-center">
               <p className="text-evergreen text-xl font-bold">₹{item.cheapestPrice}</p>
               <button className="bg-evergreen text-blacky-light font-semibold rounded-md w-32 h-10">Whats app</button>
           </div>
           </div></Link>
            ))}
          </>
        )}
    </>
  );
};



export default DestCard;