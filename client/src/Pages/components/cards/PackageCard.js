import React from 'react'
import { Link } from 'react-router-dom'

function PackageCard({ item }) {
    const generateUrl = (url) => {
        const [baseUrl, ...rest] = url.split("/upload/");

        return `${baseUrl}/upload/c_fill,w_400/f_auto/q_auto/${rest.join("/upload/")}`;


    }
    return (
        <a href={`https://trouvailler.com/product/package/${item._id}`} target='_blank' className='flex'><div key={item._id} className="w-[100%] sm:w-[80%] sm:w-auto mx-auto sm:mx-0 package-card bg-whiteglow mb-4 sm:mb-0 ml-2 mr-4  sm:mr-0 cursor-pointer card-shadow rounded pb-4 relative"  >
            <div className="relative">
                <div className="imagegradient absolute top-0  w-[95%] left-[2.5%]  bottom-0 z-[100] rounded "></div>
                {item.images.length !== 0 && <img className='w-[95%] shadow-lg mx-auto my-1 sm:my-4 aspect-video skeleton rounded-lg' src={generateUrl(item.images[0])} alt="" />
                }
                <h3 className='absolute  font-bold z-[102] text-[white] bottom-0 px-3 sm:px-4 mb-2 sm:mb-0 text-lg  card-title-font-size'>{item.title}</h3>

            </div>
            <div className='py-1 mx-3'>

                <p className='text-[0.75rem] sm:text-[0.975rem] card-text my-1 text-[#151a12]  '>{item.description}</p>
            </div>

            <div className="pt-2 sm:pt-0 sm:py-4 mx-3 flex items-center justify-between">
                <span className="font-bold text-[white] px-4 sm:px-6 shadow-lg py-1 rounded-full bg-[#626262] text-[10px] md:text-[14px] ">{item.duration}</span>
                {item.offers ?
                    (<div className="flex flex-col items-start gap-2">
                        <div className="flex gap-2 text-right items-center">
                        <span className="text-sm text-white bg-[red] px-2 py-1 rounded">15% off</span>
 <span className=" text-base sm:text-xl font-bold">₹ {item.offerprice && item.offerprice.toString().replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}</span><strike><span className=" text-sm text-graydust-dark font-bold">₹ {item.cheapestPrice && item.cheapestPrice.toString().replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}</span></strike><br /> <span className="text-[10px] md:text-xs text-graydust-dark">Per person</span>
                        </div>
                    </div>) : (<div className="flex flex-col items-start gap-2 ">

                        <div className="flex flex-col justify-start  items-end text-right"><span className=" text-base md:text-xl font-bold">₹ {item.cheapestPrice && item.cheapestPrice.toString().replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}</span> <span className="text-[10px] md:text-xs text-graydust-dark">Per person</span></div></div>
                    )
                }


            </div>

        </div></a>
    )
}

export default PackageCard