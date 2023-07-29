
import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import useFetch from "../../hooks/useFetch";
import BarLoader from "react-spinners/BarLoader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";




const Reviews = () => {
  const sliderRef = useRef(null)
  const generateUrl = (url)=>{
    const [baseUrl, ...rest] = url.split("/upload/");

  return `${baseUrl}/upload/c_fill,h_200,w_200/f_auto/q_auto/${rest.join("/upload/")}`;


  }

  
  const { data, loading, error } = useFetch("/reviews");
  var settings = {
    dots: false,
    arrows:false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, 
   
       responsive: [
      {
        breakpoint: 1024,
        settings:{
          slidesToShow:1,
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
              <button className="button absolute top-[30%] bg-[#a8ffb2] rounded-[15px] w-[25px] h-[25px] md:w-[40px] md:h-[40px]  flex justify-center items-center font-bold text-lg md:text-2xl  z-[120] left-0" onClick={()=> sliderRef.current.slickPrev()}>
            &lt;
          </button>
          <button className="button absolute top-[30%] bg-[#a8ffb2] rounded-[15px] w-[25px] h-[25px] md:w-[40px] md:h-[40px] flex justify-center items-center font-bold text-lg md:text-2xl z-[120] right-0" onClick={()=> sliderRef.current.slickNext()}>
          &gt;       </button>
          
            <Slider {...settings} ref={sliderRef}>
                  {data.map((item) => (
                     <div className=" p-4 sm:p-10 h-full w-[80%] md: w-full mx-auto flex-col justify-between" key={item._id}>
                     <div className="flex justify-left">
                       <div className=" rounded-[10px]  flex justify-left w-[45%] h-[45%] md:w-[30%] md:h-[30%] xl:w-[30%] xl:h[30%] skeleton">
                         {item.image && <img
                           className="w-full object-cover  rounded-[10px] w-[100%] h-[100%]"
                           src={generateUrl(item.image)}
                         />}
                       </div>
                     </div>
                    <div className="flex flex-col justify-between ">
                    <p className="text-sm md:text-[1rem] xl:text-[1.1rem] leading-6 my-2 mt-8  title-font text-left leading-8"> {item.reviewnote}</p>
                     <div className=" text-left text-base md:text-lg  pt-8">
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