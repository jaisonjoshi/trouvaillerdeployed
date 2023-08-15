import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import Sidenav from '../../components/sidenav/Sidenav';
import './hotels.scss';
import useFetch from "../../hooks/useFetch"
import { useEffect, useState } from 'react';
import HotelCard from '../../components/hotelCard/HotelCard';
import SearchIcon from '@mui/icons-material/Search'
import PropagateLoader from "react-spinners/PropagateLoader";
import { Dropdown } from 'flowbite-react/lib/cjs/components/Dropdown';
import { Autocomplete, TextField } from '@mui/material';
import axios from 'axios';
import Footer from "../../components/footer/Footer";
import MoodBadIcon from '@mui/icons-material/MoodBad';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';


const Hotels = () => {
  const [anim, setAnim] = useState("")
  useEffect(() => {
    window.addEventListener('load', setAnim("show"))

  }, [])
  const [sidenavOpen, setSideNavOpen] = useState(false)
  const handlesidenavOpen = () => {
    setSideNavOpen(!sidenavOpen);
  }
  //const [hotels, setHotels] = useState([]);
  // const {data, loading, err} = useFetch("/hotels");
  {/* useEffect(()=> {
         setHotels(data);
    }, [data]);*/}

  const [destination, setDestination] = useState("");
  const [searchval, setSearchval] = useState("");

  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);
  const [mintemp, setMintemp] = useState(undefined);
  const [maxtemp, setMaxtemp] = useState(undefined);
  const [type, setType] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const limit = 10;
  const url = `/hotels?page=${currentPage}&limit=${limit}&destinations=${destination}&max=${max || 999999}&min=${min || 1}&type=${type}`;
  // let url=(destination,url1,url2)=>{

  //   if(destination){
  //     return url1
  //   }
  //   else{
  //     return url2
  //   }

  // }
  // if(destination){
  //     url=url1}
  //     else
  //     url=url2;
  const { data, loading, error, reFetch } = useFetch(url)

  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  });

  const handleClick = () => {
    reFetch();//handleclick const for all filters,handle chage just sets values
  }

  const handleSubmitClick = () => {

    const minval = parseInt(mintemp);
    setMin(minval, () => reFetch());
    const maxval = parseInt(maxtemp);
    setMax(maxval, () => reFetch());
  };


  const handleSearchChange = (e, newValue) => {
    //console.log("input val "+e.target.value);
    //console.log("IN LOWER CASE "+tar.toLowerCase())
    //console.log(t.toLowerCase())
    if(newValue){
      setDestination(newValue.toLowerCase());

    }else{
      setDestination('')
    }
  }
  const handlePrevClick = () => {
    if (currentPage > 1) {
      window.scrollTo(0, 0); // Scroll to top

      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    window.scrollTo(0, 0);
      setCurrentPage(currentPage + 1);
       // Scroll to top
    
  };
  const handlebudgetChange = (e) => {
    const { value, checked } = e.target;
    //console.log(value + " state is" + checked);

    if (checked && value == "b1") {

      setMintemp(1);
      setMaxtemp(10000);
    }

    else if (checked && value == "b2") {
      setMintemp(10000);
      setMaxtemp(20000);

    } else if (checked && value == "b3") {


      setMintemp(20000)
      setMaxtemp(40000)
      //
    } else if (checked && value == "b4") {

      setMintemp(40000);
      setMaxtemp(50000);

    } else {
      setMin(1);
      setMax(999999);

      setMintemp(1);
      setMaxtemp(999999);
    }

    //console.log("min value is " + min + " max val is " + max);
  };

  const handleMinValueChange = (e) => {
    setMin(undefined);


    setMintemp(e.target.value);
  };
  const handleMaxValueChange = (e) => {

    setMax(undefined);

    setMaxtemp(e.target.value);
  };

  const handletype = (e) => {
    setType(e.target.value);
    //console.log(e.target.value);
  }

  const [inputValue, setInputValue] = useState("");

  const [openauto, setOpenauto] = useState(false);
  const [locationTags, setLocationTags] = useState([{
    locations: ["loading"]
}])

useEffect(() => {
  if (openauto !== false) {
     axiosInstance.get('/locations').then(response=>{setLocationTags(response.data)})
    
  }
}, [openauto]);

  return (

    <div className="hotels">
      <Navbar onclick={handlesidenavOpen} />
      <Sidenav isOpen={sidenavOpen} />

      <div className={`hotels-body ${anim}`}>
        <div className='gradientbg px-20 pt-16 relative z-[100000000]'>
        <div className="flex justify-between items-center pb-8">
          <h2 className='text-[white] text-3xl'>Hotels and Properties</h2>

          <Link to="/hotels/newHotel" className='text-[white] bg-[#00A45E] px-4 py-2 rounded-[10px] hover:bg-[black] shadow-lg'>
            Create a new Hotel
          </Link>
        </div>
        <div className="flex gap-8 items-center py-8">

          <div className="bg-[white] w-[40%] border border-[1px] text-[white] border-[white] rounded-full flex justify-between items-center px-4">
          <Autocomplete
                                open={openauto}
                                onOpen={() => {
                                    // only open when in focus and inputValue is not empty
                                    if (inputValue) {
                                      setOpenauto(true);
                                    }
                                  }}
                                  onClose={() => setOpenauto(false)}
                                  inputValue={inputValue}
                                  onInputChange={(e, value, reason) => {
                                    setInputValue(value);
                              
                                    // only open when inputValue is not empty after the user typed something
                                    if (!value) {
                                      setOpenauto(false);
                                    }
                                  }}

                            disablePortal
                            id="combo-box-demo"
                            options={locationTags[0].locations}
                            onChange={handleSearchChange}

                            sx={{
                                width:"100%",
                                // border: "1px solid blue",
                                "& .MuiOutlinedInput-root": {
                                    border: "none",
                                    outline:"none",
                                    borderRadius: "0",
                                    padding: "0"
                                },
                                "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                                    border: "none",
                                    outline:"none"

                                }
                            }}
                            renderInput={(params) => <TextField {...params}  placeholder="Select a location"/>}
                            />
          </div>
          <Dropdown
            label="Budget"
            dismissOnClick={false}
            class=" flex md:justify-center text-small rounded-[5px] px-2 py-1 border border-[white] sm:justify-start items-center text-[white]  shadow-sm shadow-gray-500 rounded-2xl text-xs"
          >
            <Dropdown.Item>
              <input
                type="radio"
                className="accent-evergreen"
                id="default-radio-1"
                name="budget"
                value=""
                onChange={handlebudgetChange}
              />{" "}
              <label for="default-radio-1" className="pl-3 text-base text-blacky-bright">
                {" "}
                None
              </label>
              <br />
            </Dropdown.Item>
            <Dropdown.Item>
              <input
                type="radio"
                className="accent-evergreen"
                id="default-radio-1"
                name="budget"
                value="b1"
                onChange={handlebudgetChange}
              />{" "}
              <label for="default-radio-1" className="pl-3 text-base text-blacky-bright">
                {" "}
                Less than 10,000
              </label>
              <br />
            </Dropdown.Item>
            <Dropdown.Item>
              <input
                type="radio"
                className="accent-evergreen"
                id="default-radio-2"
                name="budget"
                value="b2"
                onChange={handlebudgetChange}
              />
              <label for="default-radio-2" className="pl-3 text-base text-blacky-bright">
                {" "}
                10,000 - 20,000
              </label>
              <br />
            </Dropdown.Item>
            <Dropdown.Item>
              <input
                type="radio"
                className=" accent-evergreen"
                id="default-radio-3"
                name="budget"
                value="b3"
                onChange={handlebudgetChange}
              />
              <label for="default-radio-3" className="pl-3 text-base text-blacky-bright">
                {" "}
                20,000 - 40,000
              </label>
              <br />
            </Dropdown.Item>
            <Dropdown.Item>
              <input
                type="radio"
                className=" accent-evergreen"
                id="default-radio-4"
                name="budget"
                value="b4"
                onChange={handlebudgetChange}
              />
              <label for="default-radio-4" className="pl-3 text-base text-blacky-bright">
                {" "}
                40,000 - 50,000
              </label>
              <br />
            </Dropdown.Item>

            <div className="flex">
              <div className="flex items-center">
                <Dropdown.Item>
                  <label for="min_budget" className="text-blacky-bright">
                    Min
                  </label>
                  <input
                    type="number"
                    placeholder="₹1000"
                    className="ml-2 pl-3 outline-none border text-graydust-medium w-24 h-10 rounded-xl"
                    id="min_budget"
                    name="min_budget"
                    onChange={handleMinValueChange}
                  />
                </Dropdown.Item>
              </div>
              <div className="flex items-center">
                <Dropdown.Item>
                  <label for="max_budget" className="ml-6 text-blacky-bright">
                    Max
                  </label>
                  <input
                    type="number"
                    placeholder="₹3000"
                    className="ml-2 pl-3 outline-none border text-graydust-medium w-24 h-10 rounded-xl"
                    id="max_budget"
                    name="max_budget"
                    onChange={handleMaxValueChange}
                  />
                </Dropdown.Item>
              </div>
            </div>
            <Dropdown.Item>
              <input
                type="submit"
                className="align-middle ml-3 my-5 rounded-md border border-blacky-bright text-blacky-light w-20 h-8 hover:bg-evergreen hover:text-blacky-dark duration-500 hover:border-none"
                value="Apply"
                onClick={handleSubmitClick}
              />
            </Dropdown.Item>
          </Dropdown>
          <Dropdown
            label="Types"
            dismissOnClick={true}
            class=" w flex md:justify-center text-small rounded-[5px] px-2 py-1 border border-[white] sm:justify-start items-center text-[white]  shadow-sm shadow-gray-500 rounded-2xl text-xs">
            <Dropdown.Item>
              <input type="radio" className=" accent-evergreen" id="type" name="t" value="" onChange={handletype} />
              <label for="adventure" className="pl-3 text-base text-blacky-bright">None</label><br />
            </Dropdown.Item>
            <Dropdown.Item>
              <input type="radio" className=" accent-evergreen" id="type" name="t" value="hotel" onChange={handletype} />
              <label for="adventure" className="pl-3 text-base text-blacky-bright">Hotels</label><br />
            </Dropdown.Item>
            <Dropdown.Item>
              <input type="radio" className=" accent-evergreen" id="type" name="t" value="private villa" onChange={handletype} />
              <label for="nature" className="pl-3 text-base text-blacky-bright"> Private Villas</label><br />
            </Dropdown.Item>
            <Dropdown.Item>
              <input type="radio" className=" accent-evergreen" id="type" name="t" value="home stay" onChange={handletype} />
              <label for="hill" className="pl-3 text-base text-blacky-bright"> Home Stays</label><br />
            </Dropdown.Item>
            <Dropdown.Item>
              <input type="radio" className=" accent-evergreen" id="type" name="t" value="resort" onChange={handletype} />
              <label for="religious" className="pl-3 text-base text-blacky-bright">Resorts</label><br />
            </Dropdown.Item>
            <Dropdown.Item>
              <input type="radio" className=" accent-evergreen" id="type" name="t" value="campsite" onChange={handletype} />
              <label for="religious" className="pl-3 text-base text-blacky-bright">Campsites</label><br />
            </Dropdown.Item>
            {/* <Dropdown.Item>
                        <input type="submit" className=" rounded-md border border-blacky-bright text-blacky-light w-20 h-8 hover:bg-evergreen hover:text-blacky-dark duration-500 hover:border-none" value="Apply" />
                    </Dropdown.Item> */}
          </Dropdown>

        </div>
        </div>
       
        

       
        <div className="px-20 py-16">


          {loading ?

            <div className='loading-div'>
              <PropagateLoader


                color={'#32fca7'}
                loading={loading}

                size={15}

              />
            </div>


            :  <div>
            <div >
            {data != undefined &&
            <div>
             {data.length == 0 ? <div className="text-[16px] flex flex-col items-center  my-12 mx-auto"><MoodBadIcon className="text-[green]"/>Sorry no packages found</div>:
             <div className="flex flex-wrap md:gap-[10%] sm:gap-[8%] md:gap-[3%] lg:gap-[2%]">
                  {data.map((hotel) =>  <div className='w-[95%] mx-auto sm:mx-0 sm:w-[49%] lg:w-[32%] 2xl:w-[23%] mb-2 sm:mb-4'>
              <HotelCard itm={hotel} k={hotel._id} />
              </div>)}
             </div>
              
             } 
              </div>
          }

          </div>
          <div className='flex justify-center py-16 gap-8'>
          {currentPage > 1 && <button onClick={handlePrevClick} className='border border-[#02c677] w-[180px] flex justify-center py-2 rounded shadow-md text-[black]  font-medium flex gap-2 items-center'><KeyboardArrowLeftIcon />  Previous Page </button>
  }
            {data.length == limit && <button onClick={handleNextClick} className='border border-[#02c677] w-[180px] flex justify-center  py-2 rounded shadow-md text-[black] font-medium flex gap-2 items-center'>Next Page <KeyboardArrowRightIcon /></button>
        }  </div>
          </div>}

        </div>
      </div>




<Footer />
    </div>
  )
}

export default Hotels
