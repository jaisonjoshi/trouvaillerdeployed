

export const International = () => {
    return(
        <div className="">
        <div className="relative ">
          <div className="absolute top-0 left-0 right-0 bottom-0 z-40 rounded-[5px] md:rounded-[20px] rounded bg-[#0000004a]"></div>
          <img
            src="https://res.cloudinary.com/difxlqrlc/image/upload/q_auto/f_auto/v1684523704/site/internationalmobile_lbdpxh.jpg"
            className="block md:hidden rounded-[5px] md:rounded-[20px]"
            alt=""
          />

          <div className="hidden md:block rounded-[20px] w-full max-h-[200px] overflow-hidden">
          <img
            src="https://res.cloudinary.com/difxlqrlc/image/upload/q_auto/f_auto/v1684523647/site/international_intqgj.jpg"
            className=" rounded-[20px] w-full object-cover object-center "
            alt=""
          />
          </div>
          <div className="absolute w-[80%] lg:w-[50%] z-[45] text-[white] flex flex-col items-start gap-2 lg:gap-5 left-[5%] top-[50%] translate-y-[-50%]">
            <h1 className="roboto-bold text-lg md:text-2xl mt-4">
              <span className="caveat text-[24px] whitespace-pre">International  Destinations</span> 
            </h1>
            <p className="text-sm  roboto-medium ">
              Trouvailler has been curated the most wonderful international
              trips for you. Grab the best deals on international travel
              packages
            </p>
            <span
              className="flex gap-1 text-xs  items-center border border-[2px] border-[white] my-2 rounded-full px-2 sm:px-4 sm:py-1 cursor-pointer"
              
            >
              <span className="px-4 py-1">Explore</span> 
            </span>
          </div>
        </div>
      </div>
    )
}