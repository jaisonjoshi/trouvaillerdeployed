export const EmiDetails = () => {
    return(
        <div className="flex flex-col-reverse md:flex-row items-start    py-4">
             <div className="w-[80%] sm:w-[50%] mx-auto mt-4 md:w-[30%]">
                <img src="/images/emicard.png" className="w-full " alt="" />
            </div>
            <div className="w-[100%] md:w-[65%] lg:pt-12"> 
                <h2 className="hidden md:block md:text-[26px] roboto-bold lg:text-[32px] xl:text-2xl font-bold">Now you can travel stress-free with our flexible EMI plans.</h2>
                <p className="text-xs sm:text-base   text-[#3b3b3b] roboto-regular md:mt-8">We offer flexible EMI schemes, allowing you to travel anywhere you dream, and conveniently pay month by month with flexible payment options.</p>
                <button className="bg-[#1a9c65] text-[white] text-xs sm:text-base px-6 md:px-6 py-2 xl:py-3 mt-4 sm:mt-8 xl:mt-10">Know more</button>

            </div>
           
            <h2 className="text-[16px] sm:text-[24px] md:text-[32px] md:hidden font-bold">Now you can travel stress-free with our flexible EMI plans.</h2>

        </div>
    )
}