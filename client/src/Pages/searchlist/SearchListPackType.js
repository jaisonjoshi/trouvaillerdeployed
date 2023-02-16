
import React, { useState , useEffect} from 'react'
import useFetch from '../../hooks/useFetch';
import { Link } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import { Dropdown } from 'flowbite-react/lib/cjs/components/Dropdown';
import BarLoader from "react-spinners/BarLoader";
import axios from "axios";
import NavbarTest from '../components/navbar/navbar';
import Footer from '../components/Footer/Footer';




const SearchListPackType = ({type}) => {
    
    
    
    const [anim, setAnim] = useState("hide")
    useEffect(()=>{
        window.addEventListener('load', setAnim("show"))

    }, []);


   //axios instance declaration
   const axiosInstance = axios.create({
       baseURL: process.env.REACT_APP_API_URL,
   });

  


   const [destination,setDestination]=useState("");
   const [min, setMin] = useState(undefined);
   const [max, setMax] = useState(undefined);
   const [mintemp, setMintemp] = useState(undefined);
   const [maxtemp, setMaxtemp] = useState(undefined);
   const [cat,setCat]=useState([]);
   const [cats,setCats]=useState(type);
   const [url,setUrl]=useState("");
 
 //   const url1 = `/packages?destinations=${destination}&max=${max || 999999}&min=${
 //     min || 0
 //   }`;
 //     const url2=`/packages`
 //---------original
   const url3 = `/packages?destinations=${destination}&category=${cats}&max=${max || 999999}&min=${
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
 
      const handleSearchChange = (e) => {
       let tar=e.target.value;
       //console.log("IN LOWER CASE "+tar.toLowerCase())
       //console.log(t.toLowerCase())
       setDestination(tar.toLowerCase());
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
        

      <Dropdown
    label="Categories"
    dismissOnClick={false}
    class=" flex md:justify-center bg-[white] sm:justify-start items-center text-blacky-light px-6 py-1  shadow-sm shadow-[#00b777] rounded-full text-xs">
    <Dropdown.Item>
        <input type="checkbox" className=" accent-evergreen" id="honeymoon" name="dom" value="domestic" onChange={handleCataChange}
        /><label for="honeymoon" className="pl-3 text-base text-blacky-bright"> Domestic</label><br />
    </Dropdown.Item>
    <Dropdown.Item>
        <input type="checkbox" className="accent-evergreen" id="family" name="int" value="international" onChange={handleCataChange} 
        /><label for="family" className="pl-3 text-base text-blacky-bright"> International</label><br />
    </Dropdown.Item>    
    <Dropdown.Item>
        <input type="checkbox" className="accent-evergreen" id="friends" name="hon" value="honeymoon"  onChange={handleCataChange}
        /><label for="friends" className="pl-3 text-base text-blacky-bright"> Honeymoon</label><br />
    </Dropdown.Item>
    <Dropdown.Item>
        <input type="checkbox" className="accent-evergreen" id="holiday" name="hol" value="holiday" onChange={handleCataChange}
        /><label for="holiday" className="pl-3 text-base text-blacky-bright"> Holiday</label><br />
    </Dropdown.Item>
    <Dropdown.Item>
        <input type="checkbox" className="accent-evergreen" id="holiday" name="fam" value="family" onChange={handleCataChange}
        /><label for="holiday" className="pl-3 text-base text-blacky-bright"> Family</label><br />
    </Dropdown.Item>
    <Dropdown.Item>
        <input type="checkbox" className="accent-evergreen" id="holiday" name="fri" value="friends" onChange={handleCataChange}
        /><label for="holiday" className="pl-3 text-base text-blacky-bright"> Friends</label><br />
    </Dropdown.Item>
    <Dropdown.Item>
        <input type="submit" className="ml-3 my-2 rounded-md border border-blacky-bright text-blacky-light w-20 h-8 hover:bg-evergreen hover:text-blacky-dark duration-500 hover:border-none" value="Apply" onClick={handleClick}/>
    </Dropdown.Item>
</Dropdown>

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
                <div className='flex gap-2 pt-2 text-sm sm:text-base text-graydust-medium'> <span>Home</span><span>&#47;</span><span>Packages</span><span>&#47;</span><span className='text-[black]'> {type}</span></div>
                           

                
           
             <h1 className='text-lg sm:text-2xl font-bold '>Search results for {type} packages</h1>


        </div>
        {loading ? (
        <div className="loading-div">
          <BarLoader color={"#32fca7"} loading={loading} size={15} />
        </div>
      ) : (
        <div className="px-4 py-8 sm:px-16 md:px-20 2xl:px-40 flex  flex-wrap md:gap-[10%] sm:gap-[8%] md:gap-[3%] lg:gap-[2%]">
          {data.length !== 0 ?
            (<>
                    {data.map((item) => (
              <Link to={`/list/hotel/${item._id}`} className='pb-16 w-[90%] cursor-pointer mx-auto sm:mx-0 sm:w-[45%] md:w-[31%] mb-4 card-shadow lg:w-[22%] pb-8'>
                  <div key={item._id} className=" ">
                  <div className="relative w-full">
                        <div className="absolute top-0 left-0 right-0 bottom-0 z-40 rounded bg-gradient-to-b from-transparent via-transparent to-black"></div>
                        <img className='w-[100%] aspect-video skeleton rounded-t-lg' src={item.images[0]} alt="" />

                    </div>
                    <div className="pt-2">
                        <div className='flex justify-between items-center'>
                        {item.offers ? <div className="md:py-1 mx-1  flex justify-between items-center">
                              <span className="font-bold"><span className="text-sm md:text-xl">&nbsp; {item.offerprice.toString().replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")} &#8377;</span> <span  className="text-[grey] text-xs md:text-base"><strike>{item.cheapestPrice.toString().replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")} &#8377; </strike></span></span>
                                  
                          </div>:
                                                  <span className="font-bold"><span className="text-sm md:text-xl">&nbsp;{item.cheapestPrice.toString().replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")} &#8377;</span> </span>

                          }
                              <span className='mr-1 text-sm bg-[red] text-[white] px-2 py-1 rounded'>{item.offertitle}</span>
                        </div>
                    
                    <h3 className='textbase md:text-lg font-medium z-[48] text-[black] px-2  '>{item.title}</h3>
                      <span className='mx-2 text-md font-bold text-graydust-dark'>{item.location}</span>
                      
                    </div>
                    
                  </div>

                </Link>
          ))}
            </>):(<h1>Sorry no packages found</h1>)
        
        
        }
        </div>
      )}
       
      
      
        



       




           
            
           
            
      
       
          
       


<Footer /></div>
    

)
        }


export default SearchListPackType




