

export const InterestForm = () => {
    return(
        <div>
              <h1 className="text-2xl sm:text-2xl lg:text-3xl 2xl:text-4xl font-bold mb-2 md:mb-4 poppins">You want a customised travel plan?</h1>
            <p className="text-sm xs:text-base md:text-lg lg:text-xl text-[#777777] poppins">Looking for a personalized travel experience? Fill out the form below to create your customized travel plan tailored to your preferences and desires.</p>
            <div className="flex justify-between flex-col md:flex-row items-start mt-8 md:mt-20">
            <div className="w-[100%] md:w-[30%] min-h-[200px] sm:min-h-[250px] md:min-h-[100px] md:self-stretch	 relative">
                    <img src="/images/interestform.png" className="w-full h-full absolute object-cover object-top" alt="" />
                </div>
                <div className="w-full md:w-[70%] md:pl-12 pt-8 md:pt-0 lg:pt-8 text-sm md:text-base lg:text-lg ">
                    <form action="" className="">
                        <div className="flex flex-wrap justify-start sm:justify-between gap-[10%] sm:gap-0 mb-8 md:mb-12 lg:mb-16">
                        <input type="text" placeholder="Name" className=" border-b-[#05CAA6] border-b-[2px] w-[45%] mb-8 sm:mb-0 sm:w-[30%] outline-none"/>
                        <input type="text" placeholder="Phone" className=" border-b-[#05CAA6] border-b-[2px] w-[45%]  mb-8 sm:mb-0  sm:w-[30%] outline-none"/>
                        <input type="text" placeholder="E-mail" className=" border-b-[#05CAA6] border-b-[2px] w-full sm:w-[30%] outline-none"/>

                        </div>
                        <div className="flex flex-wrap justify-start sm:justify-between  gap-[10%] sm:gap-0 mb-8 md:mb-12 lg:mb-16">
                        <input type="text" placeholder="Destination" className=" border-b-[#05CAA6] border-b-[2px] w-[45%] mb-8 sm:mb-0 sm:w-[30%] outline-none"/>
                        <input type="text" placeholder="Travelling with" className=" border-b-[#05CAA6] border-b-[2px] w-[45%] mb-8 sm:mb-0 sm:w-[30%] outline-none"/>
                        <input type="text" placeholder="Month of travel" className=" border-b-[#05CAA6] w-full sm:w-[30%] border-b-[2px] outline-none"/>

                        </div>
                        <div className="mb-8 sm:mb-12">
                        <textarea name="" id="" placeholder="Any expectation from the trip" className=" border-b-[2px] border-b-[#05CAA6] w-full outline-none"></textarea>

                        </div>
                        <input type="submit" className="bg-[#05CAA6] text-[white] rounded px-8 py-2"/>
                    </form>
                </div>
               
            </div>
        </div>
    )
}