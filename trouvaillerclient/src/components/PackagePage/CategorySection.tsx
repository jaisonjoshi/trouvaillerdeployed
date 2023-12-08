


export const CategorySection = () => {
    return(
        <div className=" flex flex-wrap sm:gap-[4%] lg:gap-[10%] ">
        <div
          className="relative w-[100%]  mx-auto md:mx-0 md:w-[48%] lg:w-[45%] mb-4 sm:mb-8 cursor-pointer"
          
        >
          <div className="absolute top-0 left-0 right-0 bottom-0 z-40 rounded bg-[#00000085]"></div>

          <img src="https://res.cloudinary.com/difxlqrlc/image/upload/q_auto/f_auto/w_1000/v1684520311/site/Honeymoon_iogbop.jpg" className="w-[100%] rounded-[10px]" alt="" />
          <div className="absolute top-[50%] flex flex-col gap-1 translate-y-[-50%] left-4 lg:left-8 z-[45] w-[80%] 2xl:w-[50%]">
            <p className="text-[white] text-xs sm:text-sm xl:text-base w-[100%]">
              Create unforgettable honeymoon memories with our curated packages.
            </p>
            <span className="text-lg lg:text-2xl xl:text-3xl font-bold text-[white] ">
              HoneyMoon Packages
            </span>
          </div>
        </div>

        <div
          className="relative w-[100%] mx-auto md:mx-0 md:w-[48%] lg:w-[45%] mb-4 sm:mb-8 cursor-pointer"
          
        >
          <div className="absolute top-0 left-0 right-0 bottom-0 z-40 rounded bg-[#00000085]"></div>

          <img src="https://res.cloudinary.com/difxlqrlc/image/upload/q_auto/f_auto/w_1000/v1684520331/site/adventure_r19fpm.jpg" className="w-[100%] rounded-[10px]" alt="" />
          <div className="absolute top-[50%] flex flex-col gap-1 translate-y-[-50%] left-4 lg:left-8 z-[45] w-[80%] 2xl:w-[50%]">
            <p className="text-[white] text-xs sm:text-sm xl:text-base w-[100%]">
              Discover premier adventure destinations and break free to
              celebrate.
            </p>
            <span className="text-lg lg:text-2xl xl:text-3xl font-bold text-[white] ">
              Adventure Travel
              <br className="hidden lg:block" /> Packages
            </span>
          </div>
        </div>

        <div
          className="relative w-[100%] mx-auto md:mx-0 md:w-[48%] lg:w-[45%] mb-4 sm:mb-8 cursor-pointer"
          
        >
          <div className="absolute top-0 left-0 right-0 bottom-0 z-40 rounded bg-[#00000085]"></div>

          <img src="https://res.cloudinary.com/difxlqrlc/image/upload/q_auto/f_auto/w_1000/v1684520351/site/family_qstl2o.jpg" className="w-[100%] rounded-[10px]" alt="" />
          <div className="absolute top-[50%] flex flex-col gap-1 translate-y-[-50%] left-4 lg:left-8 z-[45]  w-[80%] 2xl:w-[50%]">
            <p className="text-[white] text-xs sm:text-sm xl:text-base w-[100%]">
              Experience unforgettable moments with Trouvailler's family travel
              packages.{" "}
            </p>
            <span className=" text-lg lg:text-2xl xl:text-3xl font-bold text-[white] ">
              Family Trip
              <br className="hidden lg:block" /> Packages
            </span>
          </div>
        </div>

        <div
          className="relative w-[100%] mx-auto md:mx-0 md:w-[48%] lg:w-[45%] mb-4 sm:mb-8 cursor-pointer"
         
        >
          <div className="absolute top-0 left-0 right-0 bottom-0 z-40 rounded bg-[#00000085]"></div>

          <img src="https://res.cloudinary.com/difxlqrlc/image/upload/q_auto/f_auto/w_1000/v1684520357/site/friends_lpwyuz.jpg" className="w-[100%] rounded-[10px]" alt="" />
          <div className="absolute  flex flex-col gap-1 top-[50%] translate-y-[-50%] left-4 lg:left-8 z-[45] w-[80%] 2xl:w-[50%]">
            <p className="text-[white] text-xs sm:text-sm xl:text-base w-[100%]">
              Celebrate in style with Trouvailler's tailored tour packages for
              your group.
            </p>
            <span className=" text-lg lg:text-2xl xl:text-3xl font-bold text-[white] ">
              Friends Travel
              <br className="hidden lg:block" /> Packages
            </span>
          </div>
        </div>
      </div>
    )
}