

export const BidCard = () => {
    return(
        <div className="relative rounded-[10px]   ">
            <div className="absolute top-0 left-0 right-0 bottom-0">
                <img src="/images/bidcardbg.png" alt=""  className="h-full w-full object-cover rounded-[10px]"/>
            </div>
            <div className="relative z-10 px-4 sm:px-12 py-4 xs:py-8 flex flex-col gap-2 items-start">
            <h2 className="text-[white] text-[16px] xs:text-[28px] md:text-[32px] lg:text-[30px] font-extrabold">Get your Stay at your Price</h2>
            <p className="text-[white]  md:font-medium sm:w-[80%] py-4 text-[11px] xs:text-[14px] md:text-[16px] lg:text-[18px]  sm:mt-4">Simply place your bid for the price you desire, and we'll ensure the finest stay and hotel accommodations are made available to you at that winning price. Exciting, isn't it?</p>
        <button className="bg-[#05CAA6] text-[white] font-bold px-4  sm:px-8 py-2 text-xs xs:text-sm md:text-base lg:py-4 xs:mt-4 rounded">Get your stay</button>
            </div>
             </div>
    )
}