
import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import useFetch from "../../hooks/useFetch";
import BarLoader from "react-spinners/BarLoader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";




const Reviews = () => {
  const sliderRef = useRef(null)
  

  
  const { data, loading, error } = useFetch("/reviews");
  var settings = {
    dots: false,
    arrows:false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, 
   
       responsive: [
      {
        breakpoint: 1024,
        settings:{
          slidesToShow:2,
        }
      },
      {
        breakpoint: 764 ,
        settings:{
          slidesToShow: 1,
        }
      }
    ]
  };
  return (
      <div className="reviews">
        {loading ? (
           <div className='loading-div'>
           <BarLoader



               color={'#32fca7'}
               loading={loading}

               size={15}

               />
         </div>
        ) : (
          
          <div className="md:w-[90%] mx-auto relative">
              <button className="button absolute top-[30%] bg-[#a8ffb2] rounded w-[25px] h-[25px] md:w-[40px] md:h-[40px]  flex justify-center items-center font-bold text-lg md:text-2xl  z-[1000000000] left-0" onClick={()=> sliderRef.current.slickPrev()}>
            &lt;
          </button>
          <button className="button absolute top-[30%] bg-[#a8ffb2] rounded w-[25px] h-[25px] md:w-[40px] md:h-[40px] flex justify-center items-center font-bold text-lg md:text-2xl z-[1000000000] right-0" onClick={()=> sliderRef.current.slickNext()}>
          &gt;       </button>
          
            <Slider {...settings} ref={sliderRef}>
                  {data.map((item) => (
                     <div className=" p-4 sm:p-10 h-full w-[80%] md: w-full mx-auto flex-col justify-between" key={item._id}>
                     <div className="flex justify-center">
                       <div className=" rounded-full flex justify-center w-[45%] h-[45%] md:w-[30%] md:h-[30%] xl:w-[30%] xl:h[30%] skeleton">
                         <img
                           className="w-full object-cover rounded-full w-[100%] h-[100%]"
                           src={item.image}
                         />
                       </div>
                     </div>
                    <div className="flex flex-col justify-between ">
                    <p className="text-left px-2 sm:px-8 pt-8 text-[gray]  font-normal text-sm md:text-lg"> {item.reviewnote}</p>
                     <div className=" text-left px-2 sm:px-8 pt-8">
                       <span className="font-normal">{item.author},{item.place}</span>
                       <span> {item.rating}</span>
                     </div>
                    </div>
                   </div>
                  ))}
                  
          </Slider>
          </div>
                
        )}
      </div>
  );
};





export default Reviews;