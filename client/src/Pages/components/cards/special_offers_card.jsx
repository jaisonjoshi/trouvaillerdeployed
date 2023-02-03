
import React, { useEffect } from "react";
import useFetch from "../../../hooks/useFetch";
import { Link } from "react-router-dom";
import axios from "axios";
const Offers = () => {
  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
})
  const { data, loading, error } = useFetch("/packages");
    const {data:data2} = useFetch("/hotels?offers=true&limit=3")
  const text = "i would like to book for the package "
  return (
    <div>
      {loading ? (
        "Loading"
      ) : (
        <>
          <div>
            {data.map((item,i) => (
              <div key={item._id} className="w-[30%] pb-3 mb-4 card-shadow">
                  <div className="relative w-full">
                    <img src={item.images[0]} alt="" className=" rounded-md h-auto w-full " />
                    <div className="absolute bg-graydust-light opacity-90 bottom-2 w-[96%] left-[50%] translate-x-[-50%] flex flex-col rounded-lg p-2">
                        <h1 className="font-bold text-lg">For a Thrilling Escape into the wild</h1>
                        <p className="text-sm text-[red]">Grab upto 30% off on kerala tourist packages</p>
                    </div>
                  </div>

                  {/*Texts*/}

                  <div className="px-2 py-4">
                   <div className="flex items center justify-between text-sm"> <span className="w-[70%] text-blacky-medium font-bold text-lg md:text-xl ">{item.title}</span>
                    <span className="w-[30%] text-[#03965e] flex items-center text-sm  font-bold">{item.duration}</span></div>

                    <p className="text-blacky-light text-sm md:text-md card-text">{item.description}</p>
                  </div>

                  {/*Buttons*/}
                  <div className='flex justify-start items-end gap-2 px-2'>

                   <span className="font-bold text-2xl">4999 &#8377;</span><strike className='text-md text-graydust-medium'><span>5000 &#8377;</span></strike> <span className="tetx-sm text-graydust-medium">per person</span>
                   
                    

                  </div>
              </div>
            ))}
          </div>
          <div className="flex justify-start flex-wrap px-4 md:px-12 lg:px-16 gap-[4%] pb-20">
            {data2.map((itm, i)=>(
              <div key={i} className=" w-[48%] lg:w-[30%] pb-3 card-shadow ">
              <div className="relative w-full">
                  <div className="absolute top-0 left-0 right-0 bottom-0 z-40 rounded bg-gradient-to-b from-transparent via-transparent to-black"></div>
                  <img className='w-[100%] aspect-video skeleton rounded-t-lg' src={itm.images[0]} alt="" />
                  <h3 className='text-md md:text-xl font-bold z-50 text-whiteglow px-1 md:px-3  absolute bottom-[3px] md:bottom-[10px]'>{itm.title}</h3>
              </div>
              <div className='py-1 mx-1 md:mx-3'>

                  <h3 className='text-sm md:text-xl mb-0 '><b>{itm.offertitle}</b></h3>   
                  <p className="text-xs md:text-md text-blacky-light">{itm.offerdescription}</p> 
              </div>
              <div className="md:py-2 mx-2 md:mx-3 flex justify-between items-center">
                  <span className=" font-bold"><span  className="text-[grey] text-xs md:text-md"><strike>{itm.cheapestPrice} &#8377; </strike></span><span className="text-sm md:text-2xl">&nbsp;{itm.offerprice} &#8377;</span></span>
                       
              </div>

            </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Offers;
    
