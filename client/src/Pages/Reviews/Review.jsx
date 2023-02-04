
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import useFetch from "../../hooks/useFetch";
import BarLoader from "react-spinners/BarLoader";

const Reviews = () => {
  const { data, loading, error } = useFetch("/reviews");
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
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
          
          <Slider {...settings}>
                  {data.map((item) => (
                    <div className=" p-4 sm:p-10 h-full flex-col justify-between" key={item._id}>
                      <div className="flex justify-center">
                        <div className=" rounded-full flex justify-center w-[45%] h-[45%] md:w-[30%] md:h-[30%] xl:w-[30%] xl:h[30%] skeleton">
                          <img
                            className="w-full object-cover rounded-full w-[100%] h-[100%]"
                            src={item.image}
                          />
                        </div>
                      </div>
                     <div className="flex flex-col justify-between ">
                     <p className="text-center px-2 sm:px-8 pt-8 text-blacky-light text-sm md:text-lg">{item.reviewnote}</p>
                      <div className=" text-center pt-8">
                        <span className="font-medium">{item.author},{item.place}</span>
                        <span> {item.rating}</span>
                      </div>
                     </div>
                    </div>
                  ))}
                  {/* <div className="">1</div>
                  <div className="">2</div>
                  <div className="">3</div>
                  <div className="">4</div>
                  <div className="">6</div>
                  <div className="">5</div> */}
          </Slider>
                
        )}
      </div>
  );
};





export default Reviews;