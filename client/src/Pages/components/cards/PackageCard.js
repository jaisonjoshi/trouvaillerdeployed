import React from 'react'
import { Link } from 'react-router-dom'
import { SlLocationPin } from "react-icons/sl";
import { BiTimeFive } from "react-icons/bi";


function PackageCard({ item }) {
    const generateUrl = (url) => {
        const [baseUrl, ...rest] = url.split("/upload/");

        return `${baseUrl}/upload/c_fill,w_400/f_auto/q_auto/${rest.join("/upload/")}`;


    }
    return (
        <a href={`https://trouvailler.com/product/package/${item._id}`} target='_blank' className='flex'><div key={item._id} className="w-[100%] sm:w-[80%] relative main-shadow   sm:w-auto mx-auto sm:mx-0 package-card bg-whiteglow mb-4 sm:mb-8 ml-2 mr-4 border border-[1px] border-[#E7E6E6]  sm:mr-0 cursor-pointer rounded-[10px] pb-4 relative"  >
            <div className="relative">
                {/*                 <div className="imagegradient absolute top-0  w-[100%]   bottom-0 z-[100] rounded "></div>
 */}                {item.images.length !== 0 && <img className='w-[100%] shadow-lg mx-auto   aspect-video skeleton rounded-t-lg' src={generateUrl(item.images[0])} alt="" />
                }

            </div>

            <div className='py-2 px-3 flex flex-col  justify-between'>
                <div className=''>

                    <span className='flex gap-1 my-2 text-[#717171] items-center'>                <SlLocationPin />
                        {item.location.charAt(0).toUpperCase() + item.location.slice(1)}</span>

                    <div className='flex justify-between items-start'>
                        <h3 className='   z-[102] text-[black] bottom- mb-2 sm:mb-4  text-base lg:text-lg  card-title-font-size    font-bold'>{item.title}</h3>

                    </div>




                    {/*             <h3 className=' font-regular z-[102] text-[#313131] bottom- mb-2 sm:mb-0 mt-4 text-sm lg:text-base  card-title-font-size   '>{item.location}</h3>
 */}            <div className='text-[#03BA6D] flex gap-2 items-center mr-4'>

                    </div>




                    <p className='text-[0.75rem] sm:text-[14px] my-1 text-[#717171] pb-12 font-head '>{item.description.split('.')[0]}.</p>


                </div>

               




            </div>
            <div className='  px-3 absolute w-full bottom-4'>
                   <div className='flex justify-between items-center w-full border-t border-t-[#E7E6E6] pt-3'>
                   <span className=" text-[black]  font-head   text-[10px] md:text-[16px]  flex gap-1 items-center"><BiTimeFive />{item.duration}</span>

<p className='text-right text-[14px] text-[black] flex items-center'>From  <span className='text-base ml-2 text-[black] font-bold flex gap-1 '><span className='text-lg'>₹</span>{item.cheapestPrice && item.cheapestPrice.toString().replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}</span></p>

                   </div>
                </div>



        </div></a>
    )
}

export default PackageCard