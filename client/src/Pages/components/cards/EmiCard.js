import { Link } from "react-router-dom";
import emitag from '../../Assets/emicardimg.webp'
import emicardbg from '../../Assets/emicardimg.jpg'

const EmiCard = () => {
  return (
    <div className=" flex rounded-[15px]">
       <div className="emihomecard w-[40%] rounded-l-[15px]">

</div>
      <div className="w-[60%] rounded-r-[15px] gradientbg text-center flex flex-col gap-2 py-12 items-center">
        <h2 className="text-[#F1ECEC] text-lg font-medium   ">Explore Trouvailler EMI Schemes</h2>
        <h1 className="text-[white] text-3xl font-bold mt-4">TRAVEL NOW, <span className="text-[#03BA6D]">PAY LATER</span>  </h1>
        <p className="text-[#F1ECEC] w-[70%] font-[400] mt-8">Trouvailler offers EMI options, making travel stress-free. You can pay for your trip conveniently over time, ensuring a hassle-free experience.</p>
        <button className="bg-[#00A45E] text-[white] px-4 py-2 rounded-full mt-4">Know More</button>
      </div>
     
    </div>
    
  );
};

export default EmiCard;
