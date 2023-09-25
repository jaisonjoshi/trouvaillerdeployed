import SendIcon from "@mui/icons-material/Send";
import {useState} from 'react'
import axios from 'axios'
import ClipLoader from "react-spinners/ClipLoader";
import intrstimg from '../../Assets/interestimg.webp'
import intimg from '../../Assets/intimg.webp'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const InterestForm = () => {
  const [info,setInfo] =  useState({})
  const handleChange = (e) => {
    setInfo((prev) => ({...prev, [e.target.id] : e.target.value}))
}
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});
const [loading, setLoading] = useState(false)
const [loadingTxt, setLoadingTxt] = useState("")
const handleSubmit = async (e) => {
  setLoading(true)
  e.preventDefault();
  if(loadingTxt !== "Successfully sent"){
    try {
      setLoadingTxt("Sending")

      const newInterest = {
        ...info
      }
      await axiosInstance.post('/interests', newInterest);
      setLoading(false)
      setLoadingTxt("Successfully sent")
    } catch (error) {
      console.log(error)
      setLoading(false)
      setLoadingTxt("Sorry, something happened. Please try again!")
  
    }
  }
  setLoading(false)

}
  return (
    <div className="  bg-[#c2fbd7] gradientbg shadow-xl relative rounded-[10px] overflow-hidden  font-body mx-4  sm:mx-16 md:mx-20 2xl:mx-60 my-4 sm:my-12 md:my-36 flex flex-col xl:flex-row justify-between">
     <div className="w-[100%] xl:w-[50%] 2xl:w-[30%] ">
     <img src={intrstimg} className="w-[100%] hidden xl:block h-full w-full object-cover" alt="" />
     <img src={intimg} className="w-[100%] xl:hidden h-full w-full object-cover rounded-t-[10px]" alt="" />

     </div>
      <div className="py-12 px-4 sm:px-8 md:px-16 w-[100%] xl:w-[70%]">
      <h1 className="font-bold relative text-[white] text-base sm:text-lg sm:text-xl 2xl:text-2xl z-[100]">
        Need help in planning your dream trip?
      </h1>
      <h1 className="font-normal relative z-[100]  my-2 text-[white] text-[13px] sm:text-base 2xl:text-lg">
        Fill out our form to get started, and we'll work with you to create the
        perfect itinerary.
      </h1>
      <div className="z-[100] relative">
        <form
          action=""
        >
            <div           className="flex mt-8 mb-4 md:mt-16 gap-[3%] md:gap-[3%] flex-wrap text-sm md:text-base text-[white] font-normal w-[100%] items-end"
>
          <div className="flex text-sm md:text-base flex-col gap-4 w-[47%] sm:w-[30%]">
            <input
              type="text"
              id="name"
              onChange={handleChange}
              autoComplete="off"
              className="interestinp noautofill  bg-[transparent] rounded px-6 border-[#02c677]     focus:ring-[transparent]  "
              placeholder="Name"
            />
          </div>
          <div className="flex text-sm md:text-base flex-col gap-4 w-[47%] sm:w-[30%]">
            <input
              type="text"
              id="phone"
              autoComplete="off"
              onChange={handleChange}

              className="interestinp   border-[#02c677]  bg-[transparent] rounded px-6 border-b-[#02c677]    focus:ring-[transparent]  "
              placeholder="Phone"
            />
          </div>
          <div className="flex text-sm md:text-base flex-col gap-4 w-[47%] sm:w-[30%]">
            <input
              type="text"
              id="email"
              autoComplete="off"
              onChange={handleChange}

              className="interestinp   border-[#02c677] focus:ring-[transparent]  bg-[transparent] rounded px-6 "
              placeholder="E-mail"
            />
          </div>
          <div className="flex text-sm md:text-base flex-col w-[47%] sm:w-[40%] gap-4">
            <input
              type="text"
              id="destination"
              autoComplete="off"
              onChange={handleChange}

              className="interestinp   border-[#02c677] px-6 mt-4 rounded  bg-[transparent] focus:ring-[transparent]  "
              placeholder="Destination"
            />
          </div>
          <div className="flex text-sm md:text-base flex-col gap-4 w-[97%] mt-4 sm:w-[53%]">
            <input
              type="text"
              id="month"
              autoComplete="off"
              onChange={handleChange}

              className="interestinp   border-[#02c677] px-6 rounded  bg-[transparent] focus:ring-[transparent]  "
              placeholder="Preferred month of Travel"
            />
          </div>
          
          <div className="flex text-sm md:text-base flex-col w-[97%] sm:w-[30%] gap-4">
            <input
              type="text"
              id="noOfPeople"
              autoComplete="off"
              onChange={handleChange}

              className="interestinp   border-[#02c677] px-6  bg-[transparent] mt-4 rounded  focus:ring-[transparent]  "
              placeholder="Number of people"
            />
          </div>
          
          <div className="w-[97%] sm:w-[63%]">
            <select name="" id="travellingWith" className=" bg-[transparent] mt-4   py-2 text-[#ececec] border-[#02c677] px-6 focus:ring-[transparent]  rounded w-[100%] "               onChange={handleChange}
>
              <option disabled selected value="" >
                  Travelling with 
              </option>
              <option value="Couple">Couple</option>
              <option value="Bachelor">Bachelor</option>
              <option value="Family">Family</option>
              <option value="Group">Group</option>

            </select>
          </div>
          <div className="flex text-sm md:text-base flex-col gap-4 w-[97%] sm:w-[96%]">
            <textarea id="description"
                          autoComplete="off"
                          onChange={handleChange}

              className=" border-[#02c677] px-6   mt-4 rounded py-4  bg-[transparent] focus:ring-[transparent]  "
              placeholder="Any special or specific expectations from the trip"
            />
          </div>
        
          
          
</div>
         <div className="flex items-center flex-wrap gap-4 text-[white]">
         <button className="bg-[#02c677]  px-4 py-2 rounded shadow-md font-bold text-sm md:text-base flex gap-2 items-center" onClick={handleSubmit}>
            Send <SendIcon className="text-lg md:text-xl" />
          </button><button className="bg-[#02c677] px-4 py-2 rounded shadow-md text-sm md:text-base  font-bold flex gap-2 items-center">Chat with Us <WhatsAppIcon className="text-lg md:text-xl"/></button>
          {loading && <ClipLoader color="#00d67b"/>}
          {loadingTxt !== "" && <span className="text-black text-sm sm:text-base italic">{loadingTxt}</span>}
          
         </div>
        </form>
      </div>
      </div>
      
    </div>
  );
};

export default InterestForm;
