import { Link } from "react-router-dom";
import emitag from '../../Assets/emicardimg.webp'
import emicardbg from '../../Assets/emicardbg.webp'

const EmiCard = () => {
  return (
    <div className="gradientbg rounded-[10px] pt-4 flex justify-between text-[white]">
      <div className="w-[60%] md:w-[90%] pl-4 md:pl-8 flex flex-col gap-4 xs:justify-center">
        <h1 className="font-bold font-body text-xl lg:text-3xl">Explore Trouvailler
EMI Schemes</h1>
        <p className="text-[#dddddd] text-sm sm:hidden">Travel now hassle free with 
Trouvailler EMI Options</p>
<p className="text-[#dddddd] text-lg hidden sm:block">Trouvailler offers EMI options, making travel stress-free. You can pay for your trip conveniently over time, ensuring a hassle-free experience.</p>
        <Link><button className="bg-[#00A45E] px-4 py-1 shadow-xl rounded-full mb-4">Know more</button></Link>
      </div>
      <div className=" w-[40%] py-4 w-emi shrink-0  flex items-center justify-end">
        <img src={emicardbg} alt="" className="w-[100%] h-auto" />
      </div>
    </div>
    
  );
};

export default EmiCard;
