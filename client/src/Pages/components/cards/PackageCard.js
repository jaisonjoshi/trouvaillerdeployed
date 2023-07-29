import React from 'react'
import { Link } from 'react-router-dom'

function PackageCard({ item }) {
    const generateUrl = (url) => {
        const [baseUrl, ...rest] = url.split("/upload/");

        return `${baseUrl}/upload/c_fill,w_400/f_auto/q_auto/${rest.join("/upload/")}`;


    }
    return (
        <Link to={`/list/package/${item._id}`} className='flex'><div key={item._id} className="w-[80%] sm:w-auto mx-auto sm:mx-0 bg-whiteglow  cursor-pointer card-shadow rounded pb-4 relative"  >
            <div className="relative">
                <div className="imagegradient absolute top-0  w-[95%] left-[2.5%]  bottom-0 z-[100] rounded "></div>
                {item.images.length !== 0 && <img className='w-[95%] shadow-lg mx-auto my-4 aspect-video skeleton rounded-lg' src={generateUrl(item.images[0])} alt="" />
                }
                <h3 className='text-lg sm:text-lg absolute  font-bold z-[102] text-[white] bottom-0 px-4  '>{item.title}</h3>

            </div>
            <div className='py-1 mx-3'>

                <p className='text-[0.75rem] sm:text-[0.975rem] card-text my-1 text-[#151a12]  '>{item.description}</p>
            </div>

            <div className="py-4 mx-3 flex items-center justify-between">
                <span className="font-bold text-[white] px-6 shadow-lg py-1 rounded-full bg-[#626262] text-lg ">{item.duration}</span>
                {item.offers ?
                    (<div className="flex flex-col items-start gap-2">
                        <div className="flex gap-2 text-right items-center">
                        <span className="text-sm text-white bg-[red] px-2 py-1 rounded">15% off</span>
 <span className=" text-xl font-bold">₹ {item.offerprice && item.offerprice.toString().replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}</span><strike><span className=" text-sm text-graydust-dark font-bold">₹ {item.cheapestPrice && item.cheapestPrice.toString().replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}</span></strike><br /> <span className="text-xs text-graydust-dark">Per person</span>
                        </div>
                    </div>) : (<div className="flex flex-col items-start gap-2 ">

                        <div className="flex flex-col justify-start  items-end text-right"><span className=" text-xl font-bold">₹ {item.cheapestPrice && item.cheapestPrice.toString().replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}</span> <span className="text-xs text-graydust-dark">Per person</span></div></div>
                    )
                }


            </div>

        </div></Link>
    )
}

export default PackageCard