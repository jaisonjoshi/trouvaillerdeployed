import SendIcon from '@mui/icons-material/Send';



const InterestForm = () => {
    return(
            <div className="interest  px-4 sm:px-16 md:px-20 2xl:px-40 py-8 md:py-20">
                <h1 className="font-bold text-white text-lg md:text-2xl">Looking for a travel experience that's tailored to your interests and preferences? </h1>
                <h1 className="font-normal  my-2 text-white text-base md:text-xl">Fill out our form to get started, and we'll work with you to create the perfect itinerary.</h1>
            <div>
                <form action="" className="flex my-8 md:my-16 gap-4 md:gap-12 flex-wrap text-white font-semibold items-end">
                    <div className="flex text-sm md:text-base flex-col gap-4">
                    <label htmlFor="">Name</label>
                    <input type="text" className="rounded min-w-[200px] border-[#02c677] border-[1px]  bg-[#25252557] "/>
                    </div>
                    <div className="flex flex-col gap-4">
                    <label htmlFor="">E-mail</label>
                    <input type="email" className="rounded min-w-[200px] border-[#02c677] border-[1px]  bg-[#25252557]"/>
                    </div>
                    <div className="flex flex-col gap-4">
                    <label htmlFor="">Phone</label>
                    <input type="text" className="rounded min-w-[200px] border-[#02c677] border-[1px]  bg-[#25252557]"/>
                    </div>
                    <button className="bg-[#02c677] px-4 py-2 rounded shadow-md text-black font-normal flex gap-2 items-center">Send <SendIcon style={{fontSize:"18px"}}/></button>
                </form>
            </div>
            </div>
        )
}

export default InterestForm