
import React, { useEffect } from "react";
import useFetch from "../../../hooks/useFetch";
import BarLoader from "react-spinners/BarLoader";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router'



import axios from "axios";
const Offers = () => {
  const navigate = useNavigate();

  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
})
  const { data, loading, error } = useFetch("/packages?offers=true&limit=3");
    const {data:data2} = useFetch("/hotels?offers=true&limit=4")
  const text = "i would like to book for the package "
  return (
    <div>
      {loading ? (
           <div className='loading-div'>
           <BarLoader



               color={'#32fca7'}
               loading={loading}

               size={15}

               />
         </div>
        ): (
        <>
        <div className="bg-[white]  lg:px-10 sm:py-8">
        <h1 className=" pb-8 font-bold text-lg text-center sm:text-left sm:text-2xl">Offers on Trending Travel Destinations and packages</h1>
          <div className="flex justify-start flex-wrap  px-4 gap-[4%] ">
            {data.map((item,i) => (
              <div key={item._id} className="w-[90%] mx-auto sm:mx-0 sm:w-[48%] lg:w-[30%] pb-3 mb-10 card-shadow cursor-pointer" onClick={()=> navigate(`/list/package/${item._id}`)}>
                  <div className="relative w-full">
                  <div className="absolute top-0 left-0 right-0 bottom-0 z-40 rounded bg-gradient-to-b from-transparent via-transparent to-black"></div>

                    <img src={item.images[0]} alt="" className="aspect-video skeleton w-full rounded-md h-auto w-full " />
                    <div className="absolute opacity-90 bottom-2 w-[96%] z-50 left-[50%] translate-x-[-50%] flex flex-col rounded-lg p-2">
                        <h1 className="font-bold text-white  text-sm">{item.offertitle}</h1>
                    </div>
                  </div>

                  {/*Texts*/}

                  <div className="px-2 py-4">
                   <div className="flex items center justify-between text-sm"> <span className="w-[70%] text-blacky-medium font-bold text-lg sm:text-lg  ">{item.title}</span>
                    <span className="w-[30%] text-[#03965e] flex items-center text-sm text-right font-bold">{item.duration}</span></div>

                    <p className="text-sm text-[red] my-2 text-graydust-dark ">{item.offerdescription}</p>
                    
                  </div>

                  {/*Buttons*/}
                  <div className="px-2 flex flex-col" >
                  <div className='flex justify-start items-center gap-2'>
                   <span className="font-bold text-2xl">{item.offerprice} &#8377;</span><strike className='text-base text-graydust-medium'><span>{item.cheapestPrice} &#8377;</span></strike> 
                   </div>
                   <span className="text-xs sm:text-sm text-graydust-medium">per person</span>
                    

                  </div>
              </div>
            ))}
          </div>
        </div>
        <div className=" lg:px-10 py-4 sm:py-8">
          <h1 className=" pb-8 font-bold text-lg text-center sm:text-left sm:text-2xl">Offers on Hotels, Homestays and properties</h1>

          <div className="flex justify-start flex-wrap  px-4  gap-[4%] sm:pb-20">
            {data2.map((itm, i)=>(
              <div key={i} className=" w-[48%] mb-10 md:w-[30%] lg:w-[22%] pb-3 card-shadow cursor-pointer" onClick={()=> navigate(`/list/hotel/${itm._id}`)}>
              <div className="relative w-full">
                  <div className="absolute top-0 left-0 right-0 bottom-0 z-40 rounded bg-gradient-to-b from-transparent via-transparent to-black"></div>
                  <img className='w-[100%] aspect-video skeleton rounded-t-lg' src={itm.images[0]} alt="" />
                  <h3 className='text-base md:text-lg font-bold z-50 text-whiteglow px-1 md:px-3  absolute bottom-[3px] md:bottom-[10px]'>{itm.title}</h3>
              </div>
              <div className='py-1 mx-1 md:mx-3'>

                  <h3 className='text-sm md:text-base mb-0 '><b>{itm.offertitle}</b></h3>   
                  <p className="text-[0.75rem] sm:text-[0.875rem] text-blacky-light">{itm.offerdescription}</p> 
              </div>
              <div className="md:py-2 mx-2 md:mx-3 flex justify-between items-center">
                  <span className=" font-bold"><span  className="text-[grey] text-xs md:text-base"><strike>{itm.cheapestPrice} &#8377; </strike></span><span className="text-sm md:text-lg">&nbsp;{itm.offerprice} &#8377;</span></span>
                       
              </div>

            </div>
            ))}
          </div></div>
        </>
      )}
    </div>
  );
};

export default Offers;
    
