
import React from "react";
import useFetch from "../../../hooks/useFetch";
import { Link } from "react-router-dom";
import BarLoader from "react-spinners/BarLoader";
import Slider from "react-slick";
import PackageCard from "./PackageCard";
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
          <Slider  {...settings} >
            {data.map((item) => (

              <PackageCard item={item} />
            ))}</Slider>
          </>
        )}
    </>
  );
};



export default DestCardMob;