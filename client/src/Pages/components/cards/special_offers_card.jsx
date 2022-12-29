
import React from "react";
import "../../../../node_modules/slick-carousel/slick/slick.css";
import "../../../../node_modules/slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import useFetch from "../../../hooks/useFetch";
import { Link } from "react-router-dom";

const Offers = () => {
  const { data, loading, error } = useFetch("/packages?offers=true&limit=6");
  var settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2.5,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          dots:true,
        },
      },
    ],
  };
  const text = "i would like to book for the package "
  return (
    <div>
      {loading ? (
        "Loading"
      ) : (
        <>
          <Slider {...settings}>
            {data.map((item) => (
              <div key={item._id}>
                <div className=" rounded-md mx-4 md:mx-0 md:mr-8">
                  <div className="relative w-full">
                    <img src={require('../../Assets/SpecialOffer.png')} alt="" className=" rounded-md h-auto w-full " />
                    <div className="absolute bg-graydust-light opacity-90 bottom-2 w-[96%] left-[50%] translate-x-[-50%] flex rounded-lg p-2">
                      <div className="text-xs md:text-sm w-1/3"><h6 className="text-blacky-light">City</h6><p className="text-blacky-dark font-semibold">{item.location}</p></div>
                      <div className="text-xs md:text-sm w-1/3 pl-3 border-l-2 border-graydust-normal"><h6 className="text-blacky-light">Offer Month</h6><p className="text-blacky-dark font-semibold">December</p></div>
                      <div className="text-xs md:text-sm w-1/3 pl-3 border-l-2 border-graydust-normal"><h6 className="text-blacky-light">Price</h6><p className="text-blacky-dark font-semibold">₹ {item.cheapestPrice}</p></div>
                    </div>
                  </div>

                  {/*Texts*/}

                  <div className="">
                    <h3 className="text-blacky-medium font-bold text-md md:text-xl my-4">{item.title}</h3>
                    <p className="text-blacky-light text-sm md:text-md card-text">{item.description}</p>
                  </div>

                  {/*Buttons*/}
                  <div className='flex justify-between  my-4'>

                    <Link to={`/list/package/${item._id}`}>
                      <button className='py-[3px] px-[5px] md:px-6 md:py-3 border border-evergreen rounded bg-whiteglow text-evergreen font-medium text-sm hover:bg-blacky-dark hover:text-whiteglow duration-500 hover:border-transparent'>Read More</button>
                    </Link>
                   
                    <a href={"https://wa.me/919562523642?text=" + text + item.title }>
                    <button className='py-[3px] px-[5px] md:px-6 md:py-3 border border-evergreen rounded bg-evergreen text-whiteglow font-medium text-sm  hover:bg-blacky-dark hover:text-whiteglow duration-500 hover:border-transparent'>Book now</button>
                    </a>

                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </>
      )}
    </div>
  );
};

export default Offers;
    
