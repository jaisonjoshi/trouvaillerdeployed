
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
  const { data, loading, error } = useFetch("/packages?offers=true&limit=4");
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
        <div className="   sm:py-8">
        <h1 className=" pb-8 font-medium sm:font-bold text-base text-center  sm:text-left  sm:text-2xl">Offers on Trending Travel Destinations and packages</h1>
          <div className="flex justify-start flex-wrap   gap-[2%] ">
          {data.map((item, i)=>(

          <div key={item._id} className=" mx-auto bg-[white] sm:mx-0 w-[48%] lg:w-[23%] pb-3 mb-10 card-shadow-1 rounded-md cursor-pointer" onClick={()=> navigate(`/list/package/${item._id}`)} >
                  <div className="relative w-full">
                  <div className="absolute top-0 left-0 right-0 bottom-0 z-40 rounded bg-gradient-to-b from-transparent via-transparent to-black"></div>

                    <img src={item.images[0]} alt="" className="aspect-video skeleton w-full rounded-md h-auto w-full " />
                    <div className="absolute opacity-90 bottom-2 w-[96%] z-50 left-[50%] translate-x-[-50%] flex flex-col rounded-lg p-2">
                        <h1 className="font-bold text-white  text-sm sm:text-base">{item.offerdescription}</h1>
                    </div>
                  </div>

                  {/*Texts*/}

                  <div className="px-2 py-4 flex flex-col items-start">
                   <div className="flex items-start justify-between w-full text-sm sm:text-lg"> <span className="w-[70%] text-blacky-medium font-semibold sm:font-bold  sm:text-lg card-text ">{item.title}</span>
                    <span className="w-[30%] text-[#03965e] flex items-center justify-end text-sm text-right font-bold">{item.duration}</span></div>
                    <p className="text-[0.90rem] sm:text-[0.90rem] card-text text-graydust-medium my-2">{item.description}</p>
                    <h3 className='text-xs px-2 py-[4px] rounded md:text-base mb-0 bg-[red] text-[white]'><b>{item.offertitle}</b></h3>   

                    
                  </div>

                  {/*Buttons*/}
                  <div className="px-2 flex flex-col" >
                  <div className='flex justify-start items-center gap-2'>
                   <span className="font-bold text-lg sm:text-2xl">&#8377; {item.offerprice && item.offerprice.toString().replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}</span><strike className='text-xs sm:text-base text-graydust-medium'><span>&#8377; {item.cheapestPrice && item.cheapestPrice.toString().replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")} </span></strike> 
                   </div>
                   <span className="text-xs sm:text-sm text-graydust-medium">per person</span>
                    

                  </div>
              </div>







               
                ))}
          </div>
        </div>
        <div className="  py-4 sm:py-8">
          <h1 className=" pb-8 font-bold text-lg text-center sm:text-left sm:text-2xl">Offers on Hotels, Homestays and properties</h1>

          <div className="flex justify-start flex-wrap   gap-[4%] sm:pb-20">
          {data2.map((itm, i)=>(
                    <div key={i} className="  w-[48%] mb-10 md:w-[30%] lg:w-[22%] md:pr-2 sm:px-2 sm:px-4  ">
                        <div className='mb-4 h-[100%] pb-3 card-shadow-1 bg-[white] rounded-lg  cursor-pointer' onClick={()=> navigate(`/list/hotel/${itm._id}`)} >
                            <div className="relative w-full">
                                <div className="absolute top-0 left-0 right-0 bottom-0 z-40 rounded bg-gradient-to-b from-transparent via-transparent to-black"></div>
                                <img className='w-[100%] aspect-video skeleton rounded-t-lg' src={itm.images[0]} alt="" />
                                <h3 className='hidden sm:block sm:text-base md:text-lg sm:font-bold z-50 text-whiteglow px-1 md:px-3  absolute bottom-[3px] md:bottom-[10px]'>{itm.title}</h3>
                            </div>
                            
                            <h3 className='text-xs z-50 py-1 pt-4 mx-1 md:mx-3 text-[black] font-semibold sm:hidden  card-text '>{itm.title}</h3>

                            <div className='py-1 sm:py-3 mx-1 md:mx-3 flex flex-col gap-1 items-start'>

                                <h3 className='text-2xs px-2 py-[2px] rounded md:text-sm mb-0 bg-[red] text-[white]'><b>{itm.offertitle}</b></h3>   
                                <p className="text-2xs sm:text-xs my-2 md:text-base text-graydust-medium">{itm.offerdescription}</p> 
                                <p className="text-[0.90rem] sm:text-[0.90rem] card-text text-graydust-medium my-2">
                    {itm.description}
                  </p>

                            </div>
                            <div className=" md:py-2 mx-1 md:mx-2 flex justify-between items-center">
                                <span className=" "><span className="text-sm font-bold md:text-xl pr-1">&nbsp; &#8377;{itm.offerprice && itm.offerprice.toString().replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")} </span><span  className="text-[grey] font-bold text-xs md:text-sm"><strike>&#8377; {itm.cheapestPrice && itm.cheapestPrice.toString().replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}  </strike></span></span>
                                
                            </div>
                            


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
    
