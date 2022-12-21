
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import useFetch from "../../hooks/useFetch";

const Reviews = () => {
  const { data, loading, error } = useFetch("/reviews");
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
      <div>
        {loading ? (
          "Loading"
        ) : (
          
          <Slider {...settings}>
                  {data.map((item) => (
                    <div className="p-10" key={item._id}>
                      <div className="flex justify-center">
                        <div className=" rounded-full flex justify-center w-[60%] md:w-[30%] xl:w-[10%]">
                          <img
                            className="w-full object-cover rounded-full w-[100%]"
                            src={item.image}
                            alt="Avatar"
                          />
                        </div>
                      </div>
                      <p className="text-center pt-10 px-4 sm:px-20 lg:px-52">{item.reviewnote}</p>
                      <div className="pt-4 text-center">
                        <span className="font-medium">{item.author},{item.place}</span>
                        <span> {item.rating}</span>
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