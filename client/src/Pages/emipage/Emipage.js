import Footer from "../components/Footer/Footer"
import NavbarTest from "../components/navbar/navbar"
import emiHeader from '../Assets/emiHeader.png'
import emiBody from '../Assets/emiBody.png'
import emimobile from '../Assets/emimobile.png'
import InterestForm from "../components/cards/interestForm"
const Emipage =()=> {
    const color = "text-whiteglow"

    return(
        <div>
           <NavbarTest color={color}/>
            <img src="https://res.cloudinary.com/difxlqrlc/image/upload/q_auto/f_auto/w_1500/v1684528067/site/emiHeader_lb4mkn.png" className="hidden w-full md:block" />
<img src="https://res.cloudinary.com/difxlqrlc/image/upload/q_auto/f_auto/w_1000/v1684528069/site/emimobile_ks92eu.png" className="md:hidden w-full"/>
            
            <div className="emi-footer">
            <div className=" px-4 sm:px-16 md:px-20 2xl:px-40 py-20">
                <h1 className="font-bold text-white text-lg md:text-4xl">Explore the World with Flexible EMI Payment Options</h1>
                <p className="text-white text-sm md:text-xl my-12 "> We understand that travel can be expensive, which is why we offer flexible payment plans to make
it more accessible.<br />
Don't miss out on your dream vacation! Avail our 0% EMI option and pay for your travels in easy instalments
over a period of 3 to 15 months.
</p><p className="text-white text-sm md:text-xl my-4">
Don't let financial constraints hold you back from experiencing the world - book now and start your adventure today!</p>
            </div>

            </div>
            <div className="px-4 sm:px-16 md:px-20 2xl:px-40 pt-12 md:pt-20 md:py-20">
                <h1 className="title-font font-bold text-2xl md:text-4xl text-center">Dream, Plan, Travel</h1>
                <div className="flex flex-row justify-between w-[100%]  my-20 flex-wrap  mx-auto">
                    <div className="flex grow w-[40%] md:w-[20%] px-4 md:px-16 flex-col gap-6 items-center">
                        <div className="flex justify-center items-center rounded-full w-[80px] h-[80px] md:w-[100px] md:h-[100px] bg-[#76C679]">
                            <h1 className="text-6xl text-white title-font font-extrabold">1</h1>
                        </div>
                        <div>
                        <h1 className="font-bold title-font text-center md:text-xl border-b border-b-[#76C679] border-b-[3px] pb-2 ">SELECT YOUR TRIP</h1>

                        </div>
                        <div className="text-center font-semibold text-[#555454] text-sm md:text-lg ">
                            <p>Choose your trip in our website and complete booking.</p>
                        </div>
                    </div>
                    <div className="flex grow w-[40%] md:w-[20%] px-4 md:px-16 flex-col gap-6 items-center">
                        <div className="flex justify-center items-center rounded-full w-[80px] md:w-[100px] h-[80px] md:h-[100px] bg-[#76C679]">
                            <h1 className="text-6xl text-white title-font font-extrabold">2</h1>
                        </div>
                        <div>
                        <h1 className="font-bold title-font md:text-xl text-center border-b border-b-[#76C679] border-b-[3px] pb-2 ">BOOK @ NO COST EMI</h1>

                        </div>
                        <div className="text-center font-semibold text-[#555454] text-sm md:text-lg ">
                            <p>Book your Holidays at no cost EMI. Just enter your details and you are ready to go on that trip.</p>
                        </div>
                    </div>
                    <div className="flex grow md:w-[20%] px-16 flex-col gap-6 mt-16 md:mt-0 items-center">
                        <div className="flex justify-center items-center rounded-full w-[80px] md:w-[100px] h-[80px] md:h-[100px] bg-[#76C679]">
                            <h1 className="text-6xl text-white title-font font-extrabold">3</h1>
                        </div>
                        <div>
                        <h1 className="font-bold title-font text-center md:text-xl border-b border-b-[#76C679] border-b-[3px] pb-2 ">SPLIT &amp; PAY WHENEVER</h1>

                        </div>
                        <div className="text-center font-semibold text-[#555454] text-sm md:text-lg ">
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