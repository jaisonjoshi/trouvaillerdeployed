export const EmiDetails = () => {
    return(
        <div className="flex flex-col-reverse md:flex-row items-start xl:mt-24  shadow-custom2 rounded-[10px] py-4 px-4 md:px-8">
            <div className="w-[100%] md:w-[65%] lg:pt-12"> 
                <h1 className="hidden md:block md:text-[26px] lg:text-[32px] xl:text-[40px] font-bold">Now you can travel stress-free with our flexible EMI plans.</h1>
                <p className="text-xs sm:text-base md:text-base lg:text-lg text-[#3b3b3b]  md:mt-8">We offer flexible EMI schemes, allowing you to travel anywhere you dream, and conveniently pay month by month with flexible payment options.</p>
                <button className="bg-[#05CAA6] text-[white] text-xs sm:text-base px-6 md:px-8 py-2 xl:py-4 mt-4 sm:mt-8 xl:mt-16">Know more</button>

            </div>
            <div className="w-[80%] sm:w-[50%] mx-auto mt-4 md:w-[30%]">
                <img src="/images/emicard.png" className="w-full " alt="" />
            </div>
            <h1 className="text-[16px] sm:text-[24px] md:text-[32px] md:hidden font-bold">Now you can travel stress-free with our flexible EMI plans.</h1>

        </div>
    )
}