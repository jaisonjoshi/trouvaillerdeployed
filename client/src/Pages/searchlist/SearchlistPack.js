
import React, { useState , useEffect} from 'react'
import useFetch from '../../hooks/useFetch';
import { Link, useLocation } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import { Dropdown } from 'flowbite-react/lib/cjs/components/Dropdown';
import BarLoader from "react-spinners/BarLoader";
import axios from "axios";
import NavbarTest from '../components/navbar/navbar';
import Footer from '../components/Footer/Footer';
import PackageCard from '../components/cards/PackageCard';
import { Autocomplete, TextField } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';



const SearchListPack = () => {
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

  


   const [destination,setDestination]=useState(id);
   const [min, setMin] = useState(undefined);
   const [max, setMax] = useState(undefined);
   const [mintemp, setMintemp] = useState(undefined);
   const [maxtemp, setMaxtemp] = useState(undefined);
   const [cat,setCat]=useState([]);
   const [cats,setCats]=useState("");
   const [url,setUrl]=useState("");
 
 //   const url1 = `/packages?destinations=${destination}&max=${max || 999999}&min=${
 //     min || 0
 //   }`;
 //     const url2=`/packages`
 //---------original
 const [currentPage, setCurrentPage] = useState(1);
 const limit =2;

   const url3 = `/packages?page=${currentPage}&limit=${limit}&destinations=${destination}&category=${cats}&max=${max || 999999}&min=${
       min || 1
     }`;
 
    // add url conditional code to submit button even  handler for fetching through less freq
   // let url=(destination,url1,url2,url3)=>{
     
   //   if(destination){
   //     if(cat){return url3}
   //     return url1
   //   }
   //   else{
   //     return url2
   //   }
     
   // }
   // if(destination){
   //     if(cat){url=url3}
   //     else{
   //     url=url1}}
   //     else
   //     url=url2;
 
 
      //original line/
          const {data,loading,error,reFetch}=useFetch(url3)
 
       //use effect
   //      const url1="/packages"
   //      setUrl(url1)
   //     const url3="/packages?destinations=${destination}&category=${cat}&max=${max || 999999}&min=${min || 0 }"
 
   //         const {data,loading,error,reFetch}=useFetch(url);
 
   //         useEffect(()=>{
   //             setUrl(url3);
   //  },[destination]);
 
   
      
 
     
    
 
     const handleClick = () => {//for category change
 
      // const [cats,setCats]=useState("");    
      // const [cat,setCat]=useState([]);
 
 
       const catstr=cat.toString();
       console.log("array to string "+catstr);
      setCats(catstr);
      console.log(cats);
      
 
      // reFetch();//handleclick const for all filters,handle chage just sets values
      }
 
      
 
 
      const handleSubmitClick = () => {
      
       const minval = parseInt(mintemp);
      // setMin(minval);
       //console.log(typeof minval);
       //console.log(maxtemp);    
       //setMax(maxval);
       //console.log("min value is " + min + " max val is " + max);
      //console.log("type of min"+ typeof(min)+"type of max"+typeof(max))
       setMin(minval, ()=>reFetch());
       const maxval = parseInt(maxtemp);
      setMax(maxval, ()=>reFetch());
     // reFetch();
     };
 
    /*  const handleSClick = () => {
 
       setlocation(destination);
   
   } */
 
      const handleSearchChange = (e,newValue) => {
       //console.log("IN LOWER CASE "+tar.toLowerCase())
       //console.log(t.toLowerCase())
       setDestination(newValue.toLowerCase());
        console.log(destination);
                                       }
 
   // const handleCatChange=(e)=>{
   //     const { value, checked } = e.target;
       
   //     if(checked){setCat(value)}
   //     console.log(cat);
   // }
   
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
   } else if (checked && value == "b4") {
 
     setMintemp(40000);
     setMaxtemp(50000);
   } else {
 
 
     setMin(1);
     setMax(999999);
 
     setMintemp(1);
     setMaxtemp(999999);
   }
 
  // console.log("mint value is " + mintemp + " maxt val is " + maxtemp);
   //console.log("type of mintmp"+ typeof(mintemp)+"type of maxtmp"+typeof(maxtemp))
 };
 
 const handleMinValueChange = (e) => {
  // setMin(e.target.value);
  setMin(undefined);
   setMintemp(e.target.value);
 
 };//check the datatype;int or string
 const handleMaxValueChange = (e) => {
  
   setMax(undefined);
 
   setMaxtemp(e.target.value);
 };
 
 
 const color = "text-blacky-dark";


 const [inputValue, setInputValue] = useState("");

 const [openauto, setOpenauto] = useState(false);
     const [locationTags, setLocationTags] = useState([{
       locations: ["loading"]
   }])
   useEffect(() => {
    if (openauto !== false) {
       axiosInstance.get('/packlocations').then(response=>{setLocationTags(response.data)})
      
    }
  }, [openauto]);

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
  
   
  return (

    
    <div className={`w-full animationset ${anim} font-body hotelsexplore`}>
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
        

      <Dropdown
    label="Categories"
    dismissOnClick={false}
    class=" flex md:justify-center bg-[white] sm:justify-start items-center text-blacky-light md:px-6 sm:py-1  shadow-sm shadow-[#00b777] rounded-full text-small">
    <Dropdown.Item>
        <input type="checkbox" className=" accent-evergreen" id="honeymoon" name="dom" value="domestic" onChange={handleCataChange}
        /><label for="honeymoon" className="pl-3 text-blacky-bright"> Domestic</label><br />
    </Dropdown.Item>
    <Dropdown.Item>
        <input type="checkbox" className="accent-evergreen" id="family" name="int" value="international" onChange={handleCataChange} 
        /><label for="family" className="pl-3  text-blacky-bright"> International</label><br />
    </Dropdown.Item>    
    <Dropdown.Item>
        <input type="checkbox" className="accent-evergreen" id="friends" name="hon" value="honeymoon"  onChange={handleCataChange}
        /><label for="friends" className="pl-3  text-blacky-bright"> Honeymoon</label><br />
    </Dropdown.Item>
    <Dropdown.Item>
        <input type="checkbox" className="accent-evergreen" id="holiday" name="hol" value="holiday" onChange={handleCataChange}
        /><label for="holiday" className="pl-3 text-blacky-bright"> Holiday</label><br />
    </Dropdown.Item>
    <Dropdown.Item>
        <input type="checkbox" className="accent-evergreen" id="holiday" name="fam" value="family" onChange={handleCataChange}
        /><label for="holiday" className="pl-3 text-blacky-bright"> Family</label><br />
    </Dropdown.Item>
    <Dropdown.Item>
        <input type="checkbox" className="accent-evergreen" id="holiday" name="fri" value="friends" onChange={handleCataChange}
        /><label for="holiday" className="pl-3  text-blacky-bright"> Friends</label><br />
    </Dropdown.Item>
    <Dropdown.Item>
        <input type="submit" className="ml-3 my-2 rounded-md border border-blacky-bright text-blacky-light w-20 h-8 hover:bg-evergreen hover:text-blacky-dark duration-500 hover:border-none" value="Apply" onClick={handleClick}/>
    </Dropdown.Item>
</Dropdown>

<Dropdown
    label="Budget"
    dismissOnClick={false}
    class=" flex md:justify-center bg-[white] sm:justify-start items-center text-blacky-light md:px-6 sm:py-1  shadow-sm shadow-[#00b777] rounded-full text-small ">
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


        <div className='lg:pt-48 px-4 pb-4 pt-12 sm:px-16 md:px-20 2xl:px-40 flex flex-col gap-4'>
{/*                 <div className='flex gap-2 pt-2 text-sm sm:text-base text-graydust-medium'> <span>Home</span><span>&#47;</span><span>Packages</span><span>&#47;</span><span className='text-[black]'> {destination}</span></div>
 */}                           

                
           
             <h1 className='text-lg md:text-2xl font-bold '>Search results for {destination}</h1>


        </div>
        {loading ? (
        <div className="loading-div">
          <BarLoader color={"#32fca7"} loading={loading} size={15} />
        </div>
      ) : (<div>
        <div className="px-4 py-8 sm:px-16 md:px-20 2xl:px-40 flex  flex-wrap md:gap-[10%] sm:gap-[8%] md:gap-[3%] lg:gap-[2%]">
          {data.map((item) => (
              <div className='w-[100%] sm:w-[49%] lg:w-[32%] 2xl:w-[23%] mb-2 sm:mb-4'>
              <PackageCard item={item} />
            </div>
          ))}
</div>
<div className='flex justify-center py-16 gap-8'>
        {currentPage > 1 && <button onClick={handlePrevClick} className='border border-[#02c677] w-[180px] flex justify-center py-2 rounded shadow-md text-[black]  font-medium flex gap-2 items-center'><KeyboardArrowLeftIcon />  Previous Page </button>
}
          {data.length == limit && <button onClick={handleNextClick} className='border border-[#02c677] w-[180px] flex justify-center  py-2 rounded shadow-md text-[black] font-medium flex gap-2 items-center'>Next Page <KeyboardArrowRightIcon /></button>
      }  </div>
        </div>
      )}
       
      
      
        



       




           
            
           
            
      
       
          
       


<Footer /></div>
    

)
        }


export default SearchListPack




