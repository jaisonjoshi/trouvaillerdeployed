import { Link } from "react-router-dom";
import bidimg from '../../Assets/bidimg.webp'
import whitelogo from '../../Assets/Trouvaillerwhite.png'


const Emi = () => {
  return (
    <div className="bg-[white] relative flex flex-col-reverse shadow-con rounded-[10px]  md:flex-row-reverse font-body">
    <div className="w-[100%] md:w-[60%] lg:w-[90%] text-left py-8 md:py-12 lg:py-8 rounded-r-[10px] bidcard-bg">
      <div className="flex w-[90%] xs:w-[80%] mx-auto justify-between flex-col-reverse lg:flex-row">
      <h1 className="font-extrabold text-[black] text-3xl mt-6 lg:mt-0 lg:text-4xl"><span className="text-[green]">Bid for</span> Today</h1>

      <div>
      <h1 className="font-bold text-[green] text-sm lg:text-sm">Get Your Stay</h1>
      <h1 className="font-extrabold text-[black] text-g lg:text-xl">At Your Price</h1>
      </div>
      
      </div>
      <p className="text-[13px] sm:text-base lg:text-lg w-[90%] xs:w-[80%] text-[#444444] font-semibold mx-auto mt-4 sm:mt-8">Wish you could bid hotel prices for your budget and make your trip more pocket friendly?</p>
      <p className=" text-[13px] sm:text-base lg:text-lg  text-[#444444] font-semibold w-[90%] xs:w-[80%] mx-auto my-2 sm:my-4 sm:my-8">
        Here's an end to your worries because we let you place your bid for today's lowest hotel prices.
      </p>
      <Link to="/what-is-bid"><button className="bg-[#222539]  mt-4 rounded-full text-[12px] md:text-[14px] ml-[5%] xs:ml-[10%] px-4 py-2 text-[white] font-semibold">Place Your Bid</button></Link>
    </div>
    <div className="max-h-[250px] md:max-h-[1000px] w-[100%] md:w-[40%] lg:w-[50%] ml-auto flex justify-center items-center">
    <img src={bidimg} className="max-h-[150px] sm:max-h-[250px] md:max-h-[1000px] rounded-tr-[15px] md:rounded-tr-[0] md:rounded-bl-[15px] rounded-tl-[15px] h-full w-full object-cover max-w-[100%] " alt="" />
  </div>
  </div>
  );
};

export default Emi;
