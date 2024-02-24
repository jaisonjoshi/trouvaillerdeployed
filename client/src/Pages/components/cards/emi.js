import { Link } from "react-router-dom";
import bidimg from '../../Assets/bidlogo.webp'
import whitelogo from '../../Assets/Trouvaillerwhite.png'
import bidsecimg from '../../Assets/Group 11.png'
import bidheadimg from '../../Assets/bidsechead.png'


const Emi = () => {
  return (
    <div className=" px-4  sm:px-16 md:px-20 2xl:px-60 flex gradientbg justify-center relative py-16">
           <div className="w-[60%]">
           <img src={bidsecimg} alt="" className=" h-[500px] "  />

           </div>
           

      <div className="flex gap-12 flex-col justify-center w-[50%]">
        <div className="relative">
        <h1 className="text-4xl font-extrabold text-[white] relative   z-[11] leading-16">Bid Your Way to <span className="text-[#00A45E]">Budget-Friendly Stays!</span></h1>

        </div>
      <div className="flex flex-col gap-2 w-[80%] items-start text-[white]   ">
      <p className="text-lg">Say goodbye to expensive hotel bookings.</p><p  className="text-lg">

With our unique feature, you can bid for today's lowest hotel prices and make your trip easy on your pocket.</p><p className="text-lg">

Start saving now!</p>
<button className="bg-[#00A45E] text-[white] px-12 py-4 rounded-full mt-8">Bid Now</button>
      </div>
      </div>

    </div>
  );
};

export default Emi;
