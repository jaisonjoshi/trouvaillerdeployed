
import React from "react";
import useFetch from "../../../hooks/useFetch";
import { Link } from "react-router-dom";
import BarLoader from "react-spinners/BarLoader";
import Slider from "react-slick";
import PackageCard from "./PackageCard";


const DestCard = () => {
  const { data, loading, error } = useFetch(
    "/packages?rating=1&rating=2&rating=3&limit=12"
  );
 

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
              <PackageCard item={item} />

            ))}
          </>
        )}
    </div>
  );
};



export default DestCard;