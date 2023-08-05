import Footer from "../components/Footer/Footer"
import NavbarTest from "../components/navbar/navbar"
import emipic from '../Assets/emipic.png'
import emiBody from '../Assets/emiBody.png'
import emimobile from '../Assets/emimobile.png'
import InterestForm from "../components/cards/interestForm"



const Emipage =()=> {
    const color = "text-whiteglow"

    return(
        <div>
            <div className="relative home emibg">
            <NavbarTest color={color}/>
            <div className="absolute top-0 left-0 right-0 bottom-0 emibggrad z-[56]">

            </div>
            <div className="px-4 sm:px-16 md:px-20 2xl:px-60 h-[70vh] flex items-center">
           <div className="text-[white] flex flex-col gap-8 items-start z-[57]">
           <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">TRAVEL NOW <span  className="text-[#00A45E]">PAY LATER</span></h1>

<p className="text-sm sm:text-base md:text-lg lg:text-xl">Trouvailler introduces flexible EMI schemes, allowing you to embark on your dream travels without immediate financial constraints. Now you can explore the world at your own comfort, with the freedom to pay later through convenient and adaptable installment plans.</p>
<button className="border border-[green] text-sm sm:text-base rounded-full px-4 py-2 font-semibold">Chat with Us</button>
           </div>
            </div>


            </div>
               <div className="emibggrad2 px-4 sm:px-16 md:px-20 2xl:px-60 flex flex-wrap pb-20">
                <div className="w-[100%] lg:w-[30%] flex justify-start">
                    <div className="w-[100%] max-h-[300px] hidden lg:block ">
                        <img src={emipic} className="w-full rounded "/>
                    </div>
                </div>
                <div className="w-[100%] lg:w-[70%] lg:px-16  flex flex-col gap-8 items-start text-[white]">
<h1 className="font-bold text-xl sm:text-2xl xl:text-3xl ">Explore the World with Flexible EMI Payment Options</h1>
<div>

<h1 className="font-bold text-lg sm:text-xl mb-4">How it works?</h1>
<p className="text-sm sm:text-base xl:text-lg">We understand that travel can be expensive, which is why we offer flexible payment plans to make it more accessible.Don't miss out on your dream vacation! Avail our 0% EMI option and pay for your travels in easy instalments over a period of 3 to 15 months.
Don't let financial constraints hold you back from experiencing the world - book now and start your adventure today!</p>
</div>

<button className="border border-[green] text-sm sm:text-base rounded-full px-4 py-2 font-semibold">Chat with Us</button>

                </div>
               </div>
            <div className="px-4 sm:px-16 md:px-20 2xl:px-60 pt-12 md:pt-20   md:py-20">
                <h1 className="title-font font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl ">Dream, Plan, Travel</h1>
                <div className="flex flex-row justify-between w-[100%]  rounded gap-[2%]   text-[white] my-12 sm:my-20 flex-wrap  mx-auto">
                    <div className="flex grow w-[40%] xl:w-[32%] px-1 sm:px-4 md:px-16 flex-col mb-4 gap-6 card-background  shadow-lg py-12 rounded-[10px] items-center">
                        <div className="flex justify-center items-center rounded-full w-[50px] h-[50px] md:w-[100px] md:h-[100px] bg-[#76C679]">
                            <h1 className="text-xl sm:text-4xl text-white title-font font-extrabold">1</h1>
                        </div>
                        <div>
                        <h1 className="font-bold title-font text-center text-sm sm:text-base md:text-xl border-b border-b-[#76C679] border-b-[3px] pb-2 ">SELECT YOUR TRIP</h1>

                        </div>
                        <div className="text-center font-semibold text-sm sm:text-base xl:text-lg ">
                            <p>Choose your trip in our website and complete booking.</p>
                        </div>
                    </div>
                    <div className="flex grow w-[40%] xl:w-[32%] px-1 sm:px-4 mb-4 md:px-16 flex-col card-background py-12 rounded-[10px] shadow-lg gap-6 items-center">
                        <div className="flex justify-center items-center  rounded-full w-[50px] md:w-[100px] h-[50px] md:h-[100px] bg-[#76C679]">
                            <h1 className="text-xl sm:text-4xl text-white title-font font-extrabold">2</h1>
                        </div>
                        <div>
                        <h1 className="font-bold title-font text-sm sm:text-base md:text-xl text-center border-b border-b-[#76C679] border-b-[3px] pb-2 ">BOOK @ NO COST EMI</h1>

                        </div>
                        <div className="text-center font-semibold text-sm sm:text-base xl:text-lg ">
                            <p>Book your Holidays at no cost EMI. Just enter your details and you are ready to go on that trip.</p>
                        </div>
                    </div>
                    <div className="flex grow xl:w-[32%] px-16 flex-col gap-6  md:mt-0 card-background rounded-[10px] shadow-lg py-12 items-center">
                        <div className="flex justify-center items-center rounded-full w-[50px] md:w-[100px] h-[50px] md:h-[100px] bg-[#76C679]">
                            <h1 className="text-xl sm:text-4xl text-white title-font font-extrabold">3</h1>
                        </div>
                        <div>
                        <h1 className="font-bold title-font text-center  text-sm sm:text-base md:text-xl border-b border-b-[#76C679] border-b-[3px] pb-2 ">SPLIT &amp; PAY WHENEVER</h1>

                        </div>
                        <div className="text-center font-semibold text-sm  sm:text-base xl:text-lg ">
                            <p>Pay over time ranging from 3 to 12 months.</p>
                        </div>
                    </div>
                </div>
            </div>
            <InterestForm />
            <Footer />
        </div>
    )
}

export default Emipage