import { Link } from "react-router-dom";
import emitag from '../../Assets/emitag.png'

const EmiCard = () => {
  return (
    <div className="emi-bg relative flex rounded-[10px] font-body ">
      <img src={emitag} className="w-[100px] md:w-[120px] lg:w-[150px] absolute top-8 left-4 sm:left-8 md:left-20 z-[110]" alt="" />
      <div className="absolute bg-[#00000057] top-0 left-0 right-0 bottom-0 rounded-[10px]"></div>
     <div className="px-4 sm:px-8 md:px-20 py-16 relative z-[110]">
      <h1 className="text-xl md:text-2xl lg:text-3xl font-extrabold my-4 text-[#26E293]">TRAVEL NOW <span className="text-[white] px-2">PAY LATER</span></h1>
      <p className="text-[white] text-sm md:text-base lg:text-lg 2xl:text-xl w-[100%] lg:w-[60%]">Embark on your dream journey today and leave the worries of immediate payment behind with our exclusive travel now, pay later program. </p>
     <Link to="/emi"><button className="text-[white] border border-[2px] border-[#00A45E] mt-4 rounded-full text-sm md:text-base lg:text-lg px-6 2xl:px-8 py-1 2xl:py-2 btn-animation font-bold"><span className="relative z-[110]">Know more</span></button></Link>
     </div>
     
    </div>
  );
};

export default EmiCard;
