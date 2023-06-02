import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/Footer/Footer";
import useFetch from "../../hooks/useFetch";
import { Link } from "react-router-dom";
import BarLoader from "react-spinners/BarLoader";
import { useNavigate } from 'react-router'

const Offerspage = () => {
  const generateUrl = (url)=>{
    const [baseUrl, ...rest] = url.split("/upload/");

  return `${baseUrl}/upload/c_fill,w_400/f_auto/q_auto/${rest.join("/upload/")}`;


  }
  const navigate = useNavigate();

  const [anim, setAnim] = useState("hide");
  useEffect(() => {
    window.addEventListener("load", setAnim("show"));
  }, []);

  const [packoffers, setpackoffers] = useState([]);
  const { data, loading, error } = useFetch("/packages?offers=true");

  useEffect(() => {
    setpackoffers(data);
  }, [data]);
  return (
    <div className={`animationset ${anim}`}>
      <Navbar />
      <div className="flex justify-start mb-20 card-shadow  fixed z-[49] bg-[white] top-[60px] left-0 right-0">
        <div className=" flex gap-4 text-base   font-bold">
          <span className="px-4 py-2  border-b border-b-[2px] border-b-[#2f3560] text-[#2f3560]">
            Package Offers
          </span>
          <Link
            to="/hoteloffers"
            className="px-4 py-2  text-[#2f3560] cursor-pointer  "
          >
            Hotel offers
          </Link>
        </div>
      </div>

      <div className="mt-[60px] pt-28 pb-16 gradient-first mb-8 px-4 sm:px-16 md:px-20 2xl:px-40">
        <h1 className=" font-bold text-blacky-dark text-2xl sm:text-4xl">
          Best Deals on Tour Packages{" "}
        </h1>
        <p className=" textnormal py-4 text-sm  sm:text-base md:text-lg">
          Pack your bags and save big! Unbeatable deals on the best tour
          packages. Book now and make unforgettable memories without breaking
          the bank
        </p>
      </div>

      <div className="px-4 sm:px-16 md:px-20 2xl:px-40 offer-container">
        {loading ? (
          <div className="loading-div">
            <BarLoader color={"#32fca7"} loading={loading} size={15} />
          </div>
        ) : (
          <div className="flex justify-start flex-wrap  px-4 gap-[4%] ">
            {packoffers.map((item, i) => (
              <div
                key={item._id} onClick={()=> navigate(`/list/package/${item._id}`)}
                className="w-[90%] mx-auto cursor-pointer sm:mx-0 sm:w-[48%] lg:w-[30%] pb-3 mb-10 card-shadow"
              >
                <div className="relative w-full">
                  <div className="absolute top-0 left-0 right-0 bottom-0 z-40 rounded bg-gradient-to-b from-transparent via-transparent to-black"></div>

                  {item.images && item.images.length !== 0 &&<img
                    src={generateUrl(item.images[0])}
                    alt=""
                    className="aspect-video skeleton w-full rounded-md h-auto w-full "
                  />}
                  <div className="absolute opacity-90 bottom-2 w-[96%] z-[41] left-[50%] translate-x-[-50%] flex flex-col rounded-lg p-2">
                    <h1 className="font-bold text-white text-sm md:text-base md:text-lg">
                      {item.offerdescription}
                    </h1>
                  </div>
                </div>

                {/*Texts*/}

                <div className="px-2 py-4">
                  <div className="flex items-START justify-between text-sm">
                    {" "}
                    <span className="w-[70%] text-blacky-medium font-medium text-base sm:text-lg   ">
                      {item.title}
                    </span>
                    <span className="w-[30%] text-[#03965e] flex items-start justify-end text-sm md:text-base text-right font-bold">
                      {item.duration}
                    </span>
                  </div>
                  <p className="card-text text-[gray] text-2xs my-4 sm:text-sm">
                    {item.description}
                  </p>
                  <span className="text-xs px-2 py-[4px] rounded md:text-sm mb-0 bg-[red] text-[white]">
                    <b>{item.offertitle}</b>
                  </span>
                </div>

                {/*Buttons*/}
                <div className="px-2 flex flex-col">
                  <div className="flex justify-start items-center gap-2">
                    <span className="font-bold text-xl">
                      {" "}
                      &#8377;{" "}
                      {item.offerprice &&
                        item.offerprice
                          .toString()
                          .replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}
                    </span>
                    <strike className="text-sm text-graydust-medium">
                      <span>
                        &#8377;{" "}
                        {item.cheapestPrice &&
                          item.cheapestPrice
                            .toString()
                            .replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}
                      </span>
                    </strike>
                  </div>
                  <span className="text-xs sm:text-sm text-graydust-medium">
                    per person
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};
export default Offerspage;
