import SendIcon from "@mui/icons-material/Send";

const InterestForm = () => {
  return (
    <div className="interest interestm relative  px-4 sm:px-16 md:px-20 2xl:px-40 py-8 md:py-20">
      <div className="absolute md:hidden  top-0 left-0 right-0 bottom-0 bg-[#0000009e] z-[10]"></div>
      <h1 className="font-bold relative text-[white] text-lg md:text-2xl z-[100]">
        Looking for a travel experience that's tailored to your interests and
        preferences?{" "}
      </h1>
      <h1 className="font-normal relative z-[100]  my-2 text-white text-base md:text-xl">
        Fill out our form to get started, and we'll work with you to create the
        perfect itinerary.
      </h1>
      <div className="z-[100] relative">
        <form
          action=""
        >
            <div           className="flex my-8 md:my-16 gap-4 md:gap-12 flex-wrap text-white text-sm md:text-base font-normal w-[70%] items-end"
>
          <div className="flex text-sm md:text-base flex-col gap-4">
            <input
              type="text"
              className=" min-w-[200px] border-b-[#02c677] border-b-[1px] px-1  border-t-[transparent] border-l-transparent border-r-transparent bg-[transparent] focus:ring-[transparent]  "
              placeholder="Name"
            />
          </div>
          <div className="flex text-sm md:text-base flex-col gap-4">
            <input
              type="text"
              className=" min-w-[200px] border-b-[#02c677] border-b-[1px] px-1   border-t-[transparent] border-l-transparent border-r-transparent bg-[transparent] focus:ring-[transparent]  "
              placeholder="Phone"
            />
          </div>
          <div className="flex text-sm md:text-base flex-col gap-4">
            <input
              type="text"
              className=" min-w-[200px] border-b-[#02c677] border-b-[1px] px-1  border-t-[transparent] border-l-transparent border-r-transparent bg-[transparent] focus:ring-[transparent]  "
              placeholder="E-mail"
            />
          </div>
          <div className="flex text-sm md:text-base flex-col gap-4">
            <input
              type="text"
              className=" min-w-[200px] border-b-[#02c677] border-b-[1px] px-1  border-t-[transparent] border-l-transparent border-r-transparent bg-[transparent] focus:ring-[transparent]  "
              placeholder="Destination"
            />
          </div>
          <div className="flex text-sm md:text-base flex-col gap-4">
            <input
              type="text"
              className=" min-w-[200px] border-b-[#02c677] border-b-[1px] px-1  border-t-[transparent] border-l-transparent border-r-transparent bg-[transparent] focus:ring-[transparent]  "
              placeholder="Preferred month of Travel"
            />
          </div>
          
          <div className="flex text-sm md:text-base flex-col gap-4">
            <input
              type="text"
              className=" min-w-[200px] border-b-[#02c677] border-b-[1px] px-1  border-t-[transparent] border-l-transparent border-r-transparent bg-[transparent] focus:ring-[transparent]  "
              placeholder="Estimated number of people"
            />
          </div>
          
          <div>
            <select name="" id="" className=" bg-transparent min-w-[200px] py-2 text-[#d9d9d9] border-b-[#02c677] focus:ring-[transparent] border-t-[transparent] border-l-transparent border-r-transparent">
              <option disabled selected value="" >
                  Travelling with 
              </option>
              <option value="option1">Couple</option>
              <option value="option2">Bachelor</option>
              <option value="option3">Family</option>
              <option value="option3">Group</option>

            </select>
          </div>
          <div className="flex text-sm md:text-base flex-col gap-4">
            <textarea
              className="min-w-[300px] sm:min-w-[1000px] border-b-[#02c677] border-b-[1px] px-1  border-t-[transparent] border-l-transparent border-r-transparent bg-[transparent] focus:ring-[transparent]  "
              placeholder="Any special or specific expectations from the trip"
            />
          </div>
          <div>
            <select name="" id="" className=" bg-transparent min-w-[300px] py-2 text-[#d9d9d9] border-b-[#02c677] focus:ring-[transparent] border-t-[transparent] border-l-transparent border-r-transparent">
              <option disabled selected value="">
              Are you a salaried employee

              </option>
              <option value="option1">Yes</option>
              <option value="option3">No</option>

            </select>
          </div>
          <div>
            <select name="" id="" className=" bg-transparent min-w-[300px] sm:min-w-[400px] py-2 text-[#d9d9d9] border-b-[#02c677] focus:ring-[transparent] border-t-[transparent] border-l-transparent border-r-transparent">
              <option disabled selected value="">
              Are you a business owner who files ITR 

              </option>
              <option value="option1">Yes</option>
              <option value="option3">No</option>

            </select>
          </div>
          
</div>
          <button className="bg-[#02c677] px-4 py-2 rounded shadow-md text-white font-normal flex gap-2 items-center">
            Send <SendIcon style={{ fontSize: "18px" }} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default InterestForm;
