import { Link } from "react-router-dom";
import emitag from '../../Assets/emicardimg.webp'

const EmiCard = () => {
  return (
    <div className=" emibg md:gradientbg relative justify-between flex rounded-[10px] font-body shadow-xl">
     <div className="px-4 sm:px-8 md:px-8 py-4 relative w-[80%] md:w-[100%] z-[110] ">
      <h1 className="text-[12px] md:text-2xl lg:text-2xl font-extrabold md:my-4 text-[#fff]">Travel now hassle free with
Trouvailler EMI options</h1>
      <p className="text-[#D9D9D9] text-[10px] w-[100%] lg:w-[100%] hidden md:block">Embark on your dream journey today and leave the worries of immediate payment behind with our exclusive travel now, pay later program. </p>
     <Link to="/emi"><button className="text-[white] md:border md:border-[1px] md:border-[white] md:mt-4 rounded-full text-sm md:text-base lg:text-base md:px-4 md:px-6 2xl:px-8  md:py-1 2xl:py-2  font-normal"><span className="relative text-[12px] md:text-base z-[110]">Know more</span></button></Link>
     </div>
     <div className="hidden md:block md:w-[30%] ">
      <img src={emitag} className=" md:h-[100%] rounded-tr-[10px] rounded-br-[10px] object-cover"  />
     </div>
    </div>
  );
};

export default EmiCard;
