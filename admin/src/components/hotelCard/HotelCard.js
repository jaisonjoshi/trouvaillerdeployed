import React from 'react'
import { useNavigate } from 'react-router';







function HotelCard({itm, k}) {


    const generateUrl = (url)=>{
        const [baseUrl, ...rest] = url.split("/upload/");
    
      return `${baseUrl}/upload/c_fill,w_400/f_auto/q_auto/${rest.join("/upload/")}`;
    
    
      }
      const navigate = useNavigate();
  return (
    <div
      className="mb-4 w-full h-[100%] pb-3  rounded-lg  cursor-pointer shadow-lg"
      onClick={() => navigate(`/hotels/${itm._id}`)}
    >
      <div className="relative w-full">
      <div className="imagegradient absolute hidden sm:block top-0  w-[100%] bottom-0 z-[100] rounded "></div>
        {itm.images && itm.images.length !== 0 && <img
          className="w-[100%] aspect-video skeleton rounded-t-lg "
          src={generateUrl(itm.images[0])}
          alt=""
        />}
        <h3 className="hidden sm:block  sm:text-base md:text-xl sm:font-bold z-[101] text-[white] px-1 md:px-3  absolute bottom-[3px] md:bottom-[10px]">
          {itm.title}
        </h3>
      </div>

      <h3 className="text-base z-50 pt-5  mx-2 md:mx-3 text-[white] font-semibold sm:hidden  card-text-heading ">
        {itm.title}
      </h3>

      <div className="py-1 sm:py-3 mx-2 md:mx-3 flex flex-col gap-1 items-start">
      { itm.offer && <div>
       <h3 className="text-2xs px-1 py-[1px] rounded md:text-base mb-0 bg-[red] text-[white]">
          <b>{itm.offertitle}</b>
        </h3>
        <p className="text-2xs sm:text-xs md:text-base text-graydust-medium">
          {itm.offerdescription}
        </p>
       </div>}
       <div className='py-1 '>

<p className='text-[0.85rem] sm:text-[0.975rem] card-text-hotel  my-1 text-[#151a12]  '>{itm.description}</p>
</div>

      </div>
      {itm.offers ?
                    (<div className="flex flex-col items-start gap-2 mx-2 md:mx-3 ">
                        <div className="flex gap-2 text-right itmes-center">
                        <span className="text-sm text-white bg-[red] px-2 py-1 rounded">15% off</span>
 <span className=" text-base sm:text-xl font-bold">₹ {itm.offerprice && itm.offerprice.toString().replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}</span><strike><span className=" text-sm text-graydust-dark font-bold">₹ {itm.cheapestPrice && itm.cheapestPrice.toString().replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}</span></strike><br /> <span className="text-[10px] md:text-xs text-graydust-dark">Per person</span>
                        </div>
                    </div>) : (<div className="flex flex-col itms-start gap-2 mx-2 md:mx-3 ">

                        <div className="flex flex-col justify-start  items-start text-left"><span className=" text-lg md:text-xl font-bold">₹ {itm.cheapestPrice && itm.cheapestPrice.toString().replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}</span> <span className="text-[10px] md:text-xs text-graydust-dark">Per night</span></div></div>
                    )
                }
    </div>
  )
}

export default HotelCard