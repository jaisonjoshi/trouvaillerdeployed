import { Link } from "react-router-dom";

const Emi = () => {
  return (
    <div className="flex flex-col md:flex-row py-12 md:py-0 items-center">
      <div className="w-[90%] md:w-[60%] flex justify-center">
        <div className="md:w-[70%]">
          <h1 className="text-3xl md:text-5xl mb-12 text-[#363535] font-bold">
            Travel now <span className="text-[#00c676]">Pay Later</span>
          </h1>
          <h1 className="textnormal text-sm sm:text-base md:text-[18px] leading-8 font-medium title-font">
            Embark on your dream journey today and leave the worries of
            immediate payment behind with our exclusive travel now, pay later
            program. With flexible EMI options, you can indulge in unforgettable
            adventures and create priceless memories, all while comfortably
            managing your payments over time.
          </h1>
          <Link to="/emi">
            <button className="text-lg mt-8 px-4 py-2 bg-[#00c676] rounded text-white font-semibold">
              Know more
            </button>
          </Link>
        </div>
      </div>
      <div className="w-[100%] md:w-[40%]">
        <img src="https://res.cloudinary.com/difxlqrlc/image/upload/w_600/q_auto/v1684518761/site/emi_haum6t.png" alt="" />
      </div>
    </div>
  );
};

export default Emi;
