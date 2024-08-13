

export const BidCard = () => {
    return(
        <div className="relative rounded-[10px]   ">
            <div className="absolute top-0 left-0 right-0 bottom-0">
                <img src="/images/bidbg.jpg" alt=""  className="h-full w-full object-cover "/>
                <div className="image-cover rounded-[10px]"></div>
            </div>
            <div className="relative z-10 px-4 sm:px-12 py-4 xs:py-8 flex flex-col gap-2 items-start">
            <h2 className="text-[white] text-[16px] xs:text-[28px] md:text-[32px] text-[#ffdfa6] lg:text-[30px] font-bold">Get your Stay at your Price</h2>
            <p className="text-[white]  roboto-regular w-[80%] py-2 text-xs ">Place your bid, and we’ll secure the best stay and hotel accommodations at your winning price</p>
        <button className="btn border border-[2px] glass text-[white] font-bold px-43  sm:px-4 py-2 text-xs xs:text-sm md:text-base roboto-medium min-h-0 h-8 xs:mt-4 rounded-full">Place a Bid</button>
            </div>
             </div>
    )
}