
import React, { useState , useEffect} from 'react'
import useFetch from '../../hooks/useFetch';
import { Link, useLocation } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import { Dropdown } from 'flowbite-react/lib/cjs/components/Dropdown';
import BarLoader from "react-spinners/BarLoader";
import axios from "axios";
import NavbarTest from '../components/navbar/navbar';
import Footer from '../components/Footer/Footer';
import HotelCard from '../components/cards/HotelCard';
import { Autocomplete, TextField } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';




const SearchList = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
    
  
  const generateUrl = (url)=>{
    const [baseUrl, ...rest] = url.split("/upload/");

  return `${baseUrl}/upload/c_fill,w_400/f_auto/q_auto/${rest.join("/upload/")}`;


  }
    
    
    const [anim, setAnim] = useState("hide")
    useEffect(()=>{
        window.addEventListener('load', setAnim("show"))

    }, []);


   //axios instance declaration
   const axiosInstance = axios.create({
       baseURL: process.env.REACT_APP_API_URL,
   });

  const [destination, setDestination] = useState(id);
  const [searchval, setSearchval] = useState("");
  // const [checked, setChecked] = useState(false);
  const [min, setMin] = useState(undefined);
  const [cat,setCat]=useState([]);

  const [max, setMax] = useState(undefined);
  const [mintemp, setMintemp] = useState(undefined);
    const [maxtemp, setMaxtemp] = useState(undefined);
    const [currentPage, setCurrentPage] = useState(1);

  const url = `/hotels?page=${currentPage}&destinations=${destination}&max=${max || 999999}&min=${
    min || 1
  }`;
  // const url2 = `/hotels`;
  // let url = (destination, url1, url2) => {
  //   if (destination) {
  //     return url1;
  //   } else {
  //     return url2;
  //   }
  // };
  // if (destination) {
  //   url = url1;
  // } else url = url2;

  //useeffect
  const { data, loading, error, reFetch } = useFetch(url);

  const handleClick = () => {
      // setDestination(searchval);
    reFetch(); //handleclick const for all filters,handle chage just sets values
  };
  const handleSubmitClick = () => {
   
    const minval = parseInt(mintemp);
     setMin(minval, ()=>reFetch());
     const maxval = parseInt(maxtemp);
    setMax(maxval, ()=>reFetch());
  };
  const handleSearchChange = (e, newValue) => {
    //console.log("input val "+e.target.value);
    //console.log("IN LOWER CASE "+tar.toLowerCase())
    //console.log(t.toLowerCase())
   // setSearchval(tar.toLowerCase());
    setDestination(newValue.toLowerCase());//now set the paste this to dest array upon handle click
    console.log(destination);
  };
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
  //add each element to array,upon submit,sort arr,setmin and max as first and last val with type conv
  const handlebudgetChange = (e) => {
    const { value, checked } = e.target;
    console.log(value + " state is" + checked);

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

    console.log("min value is " + min + " max val is " + max);
  };
  
  const  handleCataChange=(e)=>{
    const { value, checked } = e.target;
   
    const i=cat.indexOf(e.target.value);
  //  console.log("index "+i);
    
    
    if(checked)
    {setCat(cat=>[...cat,value])
    }

    else{//get the target name-search arr for i-pop i val
        {

            cat.splice(i, 1)
        }  
    }
    console.log(cat);
}
  const handleMinValueChange = (e) => {
    setMin(undefined);
   

    setMintemp(e.target.value);
  };
  const handleMaxValueChange = (e) => {
    
    setMax(undefined);

    setMaxtemp(e.target.value);
  };

  // const handlemid3Change=(e)=>{}//try one handle change and use if for val

  //const {data,loading,error}=useFetch("/hotels")
  //const [ info, setInfo] = useState({})
  //  const [url, setUrl] = useState("");
  // const handleSearchChange = (e) => {
  //     setInfo((prev) => ({...prev, [e.target.name] : e.target.value}))
  // }

  // const handleChange = (e) =>{
  //     const {name,value, checked } =e.target;
  //     console.log(`${value} is ${checked}`)

  //     if(checked) {
  //         setInfo((prev) => ({...prev, [e.target.name] : e.target.value}))
  //     }
  //     else{
  //         setInfo((prev) => ({...prev, [e.target.name] :""}))
  //     }

  // }
  //console.log(info)
  // const handleClick = () => {
  //     console.log("i'm going to search for", info.destination,info.checkboxValues)

  // }
  const color = "text-blacky-dark";



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

    
    <div className={`w-full animationset ${anim}  hotelsexplore`}>
        <NavbarTest /> 
       
        <div className=" sm:mt-2  top-[0] flex flex-col shadow-lg sticky z-[103] w-[100%] z-[49] sm:flex-row lg:gap-20 px-4 sm:px-16 md:px-20 2xl:px-40  gradientbg relative">
                

                <div className="flex justify-start  w-[100%] lg:w-[30%] py-3 lg:py-6">
                <div className="flex items-center w-[100%] sm:w-[90%] lg:w-[60%] lg:w-[100%] justify-between focus:ring-0 bg-[white] focus:ring-offset-0 focus:border-graydust-medium outline-none shadow-sm shadow-gray-500 rounded-2xl text-xs py-2 pl-3">
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
              </div>
              <div className="flex flex-wrap justify-start w-[100%] lg:w-[70%] items-center mx-auto gap-4 sm:pt-2 pb-2 lg:py-4">
        

        {/* <Dropdown
                  
                </Dropdown> */}



<Dropdown
    label="Budget"
    dismissOnClick={false}
    class=" flex md:justify-center bg-[white] sm:justify-start items-center text-blacky-light md:px-6 sm:py-1  shadow-sm shadow-[#00b777] rounded-full text-small">
    <Dropdown.Item>
        <input type="radio" className="accent-evergreen" id="budget1" name="budget" value="b1" onChange={handlebudgetChange}
        />   <label for="budget1" className="pl-3  text-blacky-bright"> Less than 10,000</label><br />
    </Dropdown.Item>
    <Dropdown.Item>
        <input type="radio" className="accent-evergreen" id="family" name="budget" value="b2" onChange={handlebudgetChange} />
        <label for="family" className="pl-3  text-blacky-bright"> 10,000 - 20,000</label><br />
    </Dropdown.Item>
    <Dropdown.Item>
        <input type="radio" className=" accent-evergreen" id="friends" name="budget" value="b3" onChange={handlebudgetChange} />
        <label for="friends" className="pl-3  text-blacky-bright"> 20,000 - 40,000</label><br />
    </Dropdown.Item>
    <Dropdown.Item>
        <input type="radio" className=" accent-evergreen" id="holiday" name="budget" value="b4" onChange={handlebudgetChange} />
        <label for="holiday" className="pl-3  text-blacky-bright"> 40,000 - 50,000</label><br />
    </Dropdown.Item>

    <div className="flex">
        <div className="flex items-center">
            <Dropdown.Item>
                <label for="min_budget" className="text-blacky-bright">Min</label>
                <input type="number" id="min_budget" name="min_budget" placeholder="₹1000" className="ml-2 pl-3 outline-none border text-graydust-medium w-24 h-10 rounded-xl" onChange={handleMinValueChange}/>
            </Dropdown.Item>
        </div>
        <div className="flex items-center">
            <Dropdown.Item>
                <label for="max_budget" className="ml-6 text-blacky-bright">Max</label>
                <input type="number" id="max_budget" name="max_budget" placeholder="₹3000" className="ml-2 pl-3 outline-none border text-graydust-medium w-24 h-10 rounded-xl"  onChange={handleMaxValueChange}/>
            </Dropdown.Item>
        </div>
    </div>
    <Dropdown.Item>
        <input type="submit" className="align-middle ml-3 my-5 rounded-md border border-blacky-bright text-blacky-light w-20 h-8 hover:bg-evergreen hover:text-blacky-dark duration-500 hover:border-none" value="Apply" onClick={handleSubmitClick} />
    </Dropdown.Item>
</Dropdown>

      
      </div>


                


              



        </div>


        <div className=' px-4 sm:pb-4 pt-8 sm:pt-12 sm:px-16 md:px-20 2xl:px-40 flex flex-col gap-4'>
{/*                 <div className='flex gap-2 pt-2 text-sm sm:text-base text-graydust-medium'> <span>Home</span><span>&#47;</span><span>Hotels</span><span>&#47;</span><span className='text-[black]'>Hotels in {destination}</span></div>
 */}                           

                
           
             <h1 className='text-lg sm:text-2xl font-bold '>Search results for Hotels in {destination}</h1>


        </div>
        {loading ? (
        <div className="loading-div">
          <BarLoader color={"#32fca7"} loading={loading} size={15} />
        </div>
      ) : (
       <div>
         <div className="px-4 py-8 sm:px-16 md:px-20 2xl:px-40 flex  flex-wrap md:gap-[10%] sm:gap-[8%] md:gap-[3%] lg:gap-[2%]">
          {data.map((itm, i) => (
              <div className='w-[95%] mx-auto sm:mx-0 sm:w-[49%] lg:w-[32%] 2xl:w-[23%] mb-2 sm:mb-4'>
              <HotelCard itm={itm} k={i} />
              </div>
          ))}
        </div>
        <div className='flex justify-center py-16 gap-8'>
        {currentPage > 1 && <button onClick={handlePrevClick} className='border border-[#02c677] w-[180px] flex justify-center py-2 rounded shadow-md text-[black]  font-medium flex gap-2 items-center'><KeyboardArrowLeftIcon />  Previous Page </button>
}
          {data.length == 10 && <button onClick={handleNextClick} className='border border-[#02c677] w-[180px] flex justify-center  py-2 rounded shadow-md text-[black] font-medium flex gap-2 items-center'>Next Page <KeyboardArrowRightIcon /></button>
      }  </div>
       </div>
      )}
       
      
      
        



       




           
            
           
            
      
       
          
       


<Footer /></div>
    

)
        }


export default SearchList




