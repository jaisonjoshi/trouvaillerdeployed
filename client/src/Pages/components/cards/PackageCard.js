import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineFieldTime } from "react-icons/ai";

function PackageCard({ item }) {
    const generateUrl = (url) => {
        const [baseUrl, ...rest] = url.split("/upload/");

        return `${baseUrl}/upload/c_fill,w_400/f_auto/q_auto/${rest.join("/upload/")}`;


    }
    return (
        <a href={`https://trouvailler.com/product/package/${item._id}`} target='_blank' className='flex'><div key={item._id} className="w-[100%] sm:w-[80%]   sm:w-auto mx-auto sm:mx-0 package-card bg-whiteglow mb-4 sm:mb-0 ml-2 mr-4   sm:mr-0 cursor-pointer rounded-[10px] pb-4 relative"  >
            <div className="relative">
{/*                 <div className="imagegradient absolute top-0  w-[100%]   bottom-0 z-[100] rounded "></div>
 */}                {item.images.length !== 0 && <img className='w-[100%] shadow-lg mx-auto   aspect-video skeleton rounded-lg' src={generateUrl(item.images[0])} alt="" />
                }

            </div>

            <div className='py-2  flex flex-col'>
           <div className='flex justify-between items-start'>
           <h3 className=' w-[70%] font-semibold z-[102] text-[#313131] bottom- mb-2 sm:mb-0  text-base lg:text-xl  card-title-font-size roboto'>{item.title}</h3>
            <span className="font-extrabold text-[#03BA6D]   py-1 roboto   text-[10px] md:text-[16px] ">{item.duration}</span>

           </div>
           



{/*             <h3 className=' font-regular z-[102] text-[#313131] bottom- mb-2 sm:mb-0 mt-4 text-sm lg:text-base  card-title-font-size roboto'>{item.location}</h3>
 */}            <div className='text-[#03BA6D] flex gap-2 items-center mr-4'>

                    </div>


            <div className='mt-4'>
                    

                    <p className='text-[0.75rem] sm:text-[0.975rem] card-text my-1 text-[#5e5e5e]  roboto mt-2'>{item.description}</p>
                    
                               </div>
                <div className='flex justify-between items-start mt-4'>
                
                <div className="pt-    sm:pt-0 sm:py-4 flex items-center justify-between">
                {item.offers ?
                    (<div className="flex flex-col items-start gap-2">
                        <div className="flex gap-2 text-right items-center">
                        <span className="text-sm text-white bg-[red] px-2 py-1 rounded">15% off</span>
 <span className=" text-base sm:text-xl font-bold"> {item.offerprice && item.offerprice.toString().replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")} ₹</span><strike><span className=" text-sm text-graydust-dark font-bold">₹ {item.cheapestPrice && item.cheapestPrice.toString().replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}</span></strike><br /> <span className="text-[10px] md:text-xs text-graydust-dark">Per person</span>
                        </div>
                    </div>) : (<div className="flex flex-col items-start gap-2  ">

                        <div className="flex  justify-start  items-center gap-2 text-left roboto"><span className=" text-base md:text-2xl font-extrabold     text-[#00a55e]"><span className='text-3xl'>₹</span> {item.cheapestPrice && item.cheapestPrice.toString().replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")} </span> <span className="text-[10px] md:text-xs text-graydust-dark ">Per person</span></div></div>
                    )
                }


            </div>
            
                </div>
                 
           
           
            </div>

            

        </div></a>
    )
}

export default PackageCard