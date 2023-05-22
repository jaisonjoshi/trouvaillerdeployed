
import React, { useState , useEffect} from 'react'
import useFetch from '../../hooks/useFetch';
import { Link, useLocation } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import { Dropdown } from 'flowbite-react/lib/cjs/components/Dropdown';
import BarLoader from "react-spinners/BarLoader";
import axios from "axios";
import NavbarTest from '../components/navbar/navbar';
import Footer from '../components/Footer/Footer';




const SearchListType = () => {
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

  const [destination, setDestination] = useState("");
  const [searchval, setSearchval] = useState("");
  // const [checked, setChecked] = useState(false);
  const [min, setMin] = useState(undefined);
  const [cat,setCat]=useState([]);

  const [max, setMax] = useState(undefined);
  const [mintemp, setMintemp] = useState(undefined);
    const [maxtemp, setMaxtemp] = useState(undefined);
  
  const url = `/hotels?type=${id}&destinations=${destination}&max=${max || 999999}&min=${
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
  const handleSearchChange = (e) => {
    //console.log("input val "+e.target.value);
    let tar = e.target.value;
    //console.log("IN LOWER CASE "+tar.toLowerCase())
    //console.log(t.toLowerCase())
   // setSearchval(tar.toLowerCase());
    setDestination(tar.toLowerCase());//now set the paste this to dest array upon handle click
    console.log(destination);
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





  
   
  return (

    
    <div className={`w-full animationset ${anim}  hotelsexplore`}>
        <NavbarTest />
       
        <div className="mt-[60px] fixed top-[0] flex flex-col lg:fixed top-[60px] w-[100%] z-[49] lg:flex-row lg:gap-20 px-4 sm:px-16 md:px-20 2xl:px-40  gradient-first relative">
                

        <div className="flex justify-center lg:justify-start  w-[100%] lg:w-[30%] py-6">
        <div className="flex items-center w-[80%] md:w-[60%] lg:w-[100%] justify-between focus:ring-0 bg-[white] focus:ring-offset-0 focus:border-graydust-medium outline-none shadow-sm shadow-gray-500 rounded-2xl text-xs py-2 pl-3">
          <input
            type="text border-none outline-none w-[80%] h-[100%] text-2xl"
            placeholder="Destination"
            id="destination"
            name="destination"
            onChange={handleSearchChange}
          />
          <SearchIcon
            className="w=[20%] mx-3 cursor-pointer"
            onClick={handleClick}
          />
        </div>
      </div>
      <div className="flex flex-wrap justify-center lg:justify-start w-[100%] lg:w-[70%] items-center mx-auto gap-4 py-4">
        

        {/* <Dropdown
                  
                </Dropdown> */}



<Dropdown
    label="Budget"
    dismissOnClick={false}
    class=" flex md:justify-center bg-[white] sm:justify-start items-center text-blacky-light px-6 py-1  shadow-sm shadow-[#00b777] rounded-full text-xs">
    <Dropdown.Item>
        <input type="radio" className="accent-evergreen" id="budget1" name="budget" value="b1" onChange={handlebudgetChange}
        />   <label for="budget1" className="pl-3 text-base text-blacky-bright"> Less than 10,000</label><br />
    </Dropdown.Item>
    <Dropdown.Item>
        <input type="radio" className="accent-evergreen" id="family" name="budget" value="b2" onChange={handlebudgetChange} />
        <label for="family" className="pl-3 text-base text-blacky-bright"> 10,000 - 20,000</label><br />
    </Dropdown.Item>
    <Dropdown.Item>
        <input type="radio" className=" accent-evergreen" id="friends" name="budget" value="b3" onChange={handlebudgetChange} />
        <label for="friends" className="pl-3 text-base text-blacky-bright"> 20,000 - 40,000</label><br />
    </Dropdown.Item>
    <Dropdown.Item>
        <input type="radio" className=" accent-evergreen" id="holiday" name="budget" value="b4" onChange={handlebudgetChange} />
        <label for="holiday" className="pl-3 text-base text-blacky-bright"> 40,000 - 50,000</label><br />
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
                <div className='flex gap-2 pt-2 text-sm sm:text-base text-graydust-medium'> <span>Home</span><span>&#47;</span><span>Hotels</span><span>&#47;</span><span className='text-[black]'>{id}</span></div>
                           

                
           
             <h1 className=' text-lg sm:text-2xl font-bold '>Search results for {id}</h1>


        </div>
        {loading ? (
        <div className="loading-div">
          <BarLoader color={"#32fca7"} loading={loading} size={15} />
        </div>
      ) : (
        <div className="px-4 py-8 sm:px-16 md:px-20 2xl:px-40 flex  flex-wrap md:gap-[10%] sm:gap-[8%] md:gap-[3%] lg:gap-[2%]">
          {data.map((item) => (
              <Link to={`/list/hotel/${item._id}`} className='pb-16 w-[90%] cursor-pointer mx-auto sm:mx-0 sm:w-[45%] md:w-[31%] mb-4 card-shadow lg:w-[22%] pb-8'>
                  <div key={item._id} className=" ">
                  <div className="relative w-full">
                        <div className="absolute top-0 left-0 right-0 bottom-0 z-40 rounded bg-gradient-to-b from-transparent via-transparent to-black"></div>
                        <img className='w-[100%] aspect-video skeleton rounded-t-lg' src={generateUrl(item.images[0])} alt="" />

                    </div>
                    <h3 className='text-base md:text-lg pt-2 font-medium z-[48] text-[black] px-2  '>{item.title}</h3>
                    <p className='mx-2 font-bold text-graydust-dark text-sm'>{item.location}</p>
                    <p className='text-[0.75rem] sm:text-[0.875rem] card-text my-2 textnormal'>{item.description}</p>
                    <div className="pt-2">
                        <div className='flex justify-between items-center'>
                        {item.offers ? <div className='flex justify-between items-center'><div className="md:py-1 mx-1  flex justify-between items-center">
                              <span className="font-bold"><span className="text-base md:text-xl">&nbsp; &#8377; {item.offerprice && item.offerprice.toString().replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")} </span> <span  className="text-[grey] text-2xs md:text-base"><strike>&#8377; {item.cheapestPrice && item.cheapestPrice.toString().replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}  </strike></span></span>
                                  
                          </div>                              <span className='mr-1 text-2xs bg-[red] text-[white] px-2 py-1 rounded'>{item.offertitle}</span></div>
:
                                                  <span className="font-bold"><span className="text-base md:text-xl">&nbsp; &#8377; {item.cheapestPrice && item.cheapestPrice.toString().replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")} </span> </span>

                          }
                        </div>
                    
                      
                    </div>
                    
                  </div>

                </Link>
          ))}
        </div>
      )}
       
      
      
        



       




           
            
           
            
      
       
          
       


<Footer /></div>
    

)
        }


export default SearchListType




