import SendIcon from "@mui/icons-material/Send";
import {useState} from 'react'
import axios from 'axios'
import ClipLoader from "react-spinners/ClipLoader";

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
              id="name"
              onChange={handleChange}
              autoComplete="off"
              className="interestinp noautofill min-w-[200px] border-b-[#02c677] border-b-[1px] px-1  border-t-[transparent] border-l-transparent border-r-transparent  focus:ring-[transparent]  "
              placeholder="Name"
            />
          </div>
          <div className="flex text-sm md:text-base flex-col gap-4">
            <input
              type="text"
              id="phone"
              autoComplete="off"
              onChange={handleChange}

              className="interestinp min-w-[200px] border-b-[#02c677] border-b-[1px] px-1   border-t-[transparent] border-l-transparent border-r-transparent bg-[transparent] focus:ring-[transparent]  "
              placeholder="Phone"
            />
          </div>
          <div className="flex text-sm md:text-base flex-col gap-4">
            <input
              type="text"
              id="email"
              autoComplete="off"
              onChange={handleChange}

              className="interestinp min-w-[200px] border-b-[#02c677] border-b-[1px] px-1  border-t-[transparent] border-l-transparent border-r-transparent bg-[transparent] focus:ring-[transparent]  "
              placeholder="E-mail"
            />
          </div>
          <div className="flex text-sm md:text-base flex-col gap-4">
            <input
              type="text"
              id="destination"
              autoComplete="off"
              onChange={handleChange}

              className="interestinp min-w-[200px] border-b-[#02c677] border-b-[1px] px-1  border-t-[transparent] border-l-transparent border-r-transparent bg-[transparent] focus:ring-[transparent]  "
              placeholder="Destination"
            />
          </div>
          <div className="flex text-sm md:text-base flex-col gap-4">
            <input
              type="text"
              id="month"
              autoComplete="off"
              onChange={handleChange}

              className="interestinp min-w-[200px] border-b-[#02c677] border-b-[1px] px-1  border-t-[transparent] border-l-transparent border-r-transparent bg-[transparent] focus:ring-[transparent]  "
              placeholder="Preferred month of Travel"
            />
          </div>
          
          <div className="flex text-sm md:text-base flex-col gap-4">
            <input
              type="text"
              id="noOfPeople"
              autoComplete="off"
              onChange={handleChange}

              className="interestinp min-w-[200px] border-b-[#02c677] border-b-[1px] px-1  border-t-[transparent] border-l-transparent border-r-transparent bg-[transparent] focus:ring-[transparent]  "
              placeholder="Estimated number of people"
            />
          </div>
          
          <div>
            <select name="" id="travellingWith" className=" bg-transparent min-w-[200px] py-2 text-[#d9d9d9] border-b-[#02c677] focus:ring-[transparent] border-t-[transparent] border-l-transparent border-r-transparent"               onChange={handleChange}
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
          <div className="flex text-sm md:text-base flex-col gap-4">
            <textarea id="description"
                          autoComplete="off"
                          onChange={handleChange}

              className="min-w-[300px] sm:min-w-[500px] lg:min-w-[1000px] border-b-[#02c677] border-b-[1px] px-1  border-t-[transparent] border-l-transparent border-r-transparent bg-[transparent] focus:ring-[transparent]  "
              placeholder="Any special or specific expectations from the trip"
            />
          </div>
          <div>
            <select name=""               onChange={handleChange}
 id="salaried" className=" bg-transparent min-w-[300px] py-2 text-[#d9d9d9] border-b-[#02c677] focus:ring-[transparent] border-t-[transparent] border-l-transparent border-r-transparent">
              <option disabled selected value="">
              Are you a salaried employee

              </option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>

            </select>
          </div>
          <div>
            <select               onChange={handleChange}
 name="" id="itr" className=" bg-transparent min-w-[300px] sm:min-w-[400px] py-2 text-[#d9d9d9] border-b-[#02c677] focus:ring-[transparent] border-t-[transparent] border-l-transparent border-r-transparent">
              <option disabled selected value="">
              Are you a business owner who files ITR 

              </option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>

            </select>
          </div>
          
</div>
         <div className="flex items-center gap-4">
         <button className="bg-[#02c677] px-4 py-2 rounded shadow-md text-white font-normal flex gap-2 items-center" onClick={handleSubmit}>
            Send <SendIcon style={{ fontSize: "18px" }} />
          </button>
          {loading && <ClipLoader color="#00d67b"/>}
          {loadingTxt !== "" && <span className="text-white italic">{loadingTxt}</span>}
         </div>
        </form>
      </div>
    </div>
  );
};

export default InterestForm;
