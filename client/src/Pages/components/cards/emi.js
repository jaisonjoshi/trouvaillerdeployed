import { Link } from "react-router-dom";
import bidimg from '../../Assets/bidimg.webp'
import whitelogo from '../../Assets/Trouvaillerwhite.png'


const Emi = () => {
  return (
    <div className="bid-bg relative flex flex-col-reverse  md:flex-row ">
    <div className="w-[100%] md:w-[60%] lg:w-[50%] text-center my-8 md:my-12 lg:my-20 ">
      <h1 className="font-bold text-[white] text-xl lg:text-2xl">Get Your Stay</h1>
      <h1 className="font-extrabold sm:mt-2 text-[black] text-2xl lg:text-4xl">At Your Price</h1>
      <p className="text-[14px] sm:text-base lg:text-lg w-[80%]  mx-auto mt-4 sm:mt-8">Wish you could bid hotel prices for your budget and make your trip more pocket friendly?</p>
      <p className=" text-[14px] sm:text-base lg:text-lg  w-[80%] mx-auto my-4 sm:my-8">
        Here's an end to your worries because we let you place your bid for today's lowest hotel prices.
      </p>
      <Link><button className="bg-[black] rounded-full px-8 py-2 text-[#00c676] font-semibold">Place Your Bid</button></Link>
    </div>
    <div className="max-h-[250px] md:max-h-[1000px] w-[100%] md:w-[40%] lg:w-[50%] ml-auto flex justify-center items-center">
    <img src={bidimg} className="max-h-[150px] sm:max-h-[250px] md:max-h-[1000px] h-full w-full object-cover max-w-[100%] " alt="" />
  </div>
  </div>
  );
};

export default Emi;
