
import React, { useState , useEffect} from 'react'
import useFetch from '../../../hooks/useFetch';
import { Link } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import { Dropdown } from 'flowbite-react/lib/cjs/components/Dropdown';
import Footer from '../Footer/Footer';
import NavbarTest from '../navbar/navbar';
import BarLoader from "react-spinners/BarLoader";
import axios from "axios";;

const List1_card = () => {
    const [anim, setAnim] = useState("hide")
    useEffect(()=>{
        window.addEventListener('load', setAnim("show"))

    }, []);

    

    const axiosInstance = axios.create({
        baseURL: process.env.REACT_APP_API_URL,
    });


    const [destination,setDestination]=useState("");
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

       const handleSClick = () => {

        reFetch();
      

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



       const handleSearchChange = (e) => {
        //console.log("input val "+e.target.value);
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
    <div className={`w-full animationset ${anim}`}>
        <NavbarTest />
    
    
       <div className="mt-36 flex justify-center  ">
                <div className=' w-[80%] sm:w-[60%] md:w-[50%] flex justify-center font-bold rounded-[1000px] border border-[#00b771]'>
                    <div className='w-[50%] text-whiteglow flex justify-center items-center px-8 py-2 bg-[#00b771] rounded-l-[1000px]'>
                        <span>Packages</span>
                    </div>
                    <Link  className='w-[50%] flex justify-center items-center px-4 py-2 rounded-r-[1000px]' to="/hotels">Hotels</Link>
                </div>
            </div>
            
           
         <hr className="w-[80%] my-5 mx-auto" />
            <div className="flex flex-col items-center justify-center px-8 md:px-20 lg:px-40 gap-8 pb-8">
                <h1 style={{fontSize:"32px"}} className='text-center'>Trending Tour Packages for you</h1>
                <p className='text-center text-blacky-light text-md md:text-lg'>Find the best options out there if you are planning for a honeymoon or a trip with your family.The most exciting offers with a bunch of various options you can choose from.Grab the best deal and add it to your mesmerising travel journey! </p>
            </div>
            <div className="flex justify-center py-6">
                    <div className="flex items-center w-[70%] md:w-[60%] lg:w-[30%] justify-between focus:ring-0 focus:ring-offset-0 focus:border-graydust-medium outline-none shadow-sm shadow-gray-500 rounded-2xl text-xs py-2 pl-3">
                        <input type="text border-none outline-none w-[80%] h-[100%] text-2xl" placeholder="Destination" id= "destination" name="destination" onChange={handleSearchChange}/><SearchIcon  className='w=[20%] mx-3 cursor-pointer' onClick={handleSClick}/>
                    </div>
                </div>
            <div className="flex flex-wrap justify-center items-center w-[90%] md:w-[80%] mx-auto gap-4 py-4">
               

                {/*Drop down of categories */}

                <Dropdown
                    label="Categories"
                    dismissOnClick={false}
                    class=" flex md:justify-center sm:justify-start items-center text-blacky-light  shadow-sm shadow-gray-500 rounded-2xl text-xs">
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
                    class=" flex md:justify-center sm:justify-start items-center text-blacky-light  shadow-sm shadow-gray-500 rounded-2xl text-xs">
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

                {/* <Dropdown
                    label="Activities"
                    dismissOnClick={false}
                    class=" w flex md:justify-center sm:justify-start items-center text-blacky-light  shadow-sm shadow-gray-500 rounded-2xl text-xs">
                    <Dropdown.Item>
                        <input type="radio" className=" accent-evergreen" id="adventure" name="activity" value="" />
                        <label for="adventure" className="pl-3 text-base text-blacky-bright">Adventure</label><br />
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <input type="radio" className=" accent-evergreen" id="nature" name="activity" value="" />
                        <label for="nature" className="pl-3 text-base text-blacky-bright"> Nature</label><br />
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <input type="radio" className=" accent-evergreen" id="hill" name="activity" value="" />
                        <label for="hill" className="pl-3 text-base text-blacky-bright"> Hill Station</label><br />
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <input type="radio" className=" accent-evergreen" id="religious" name="activity" value="" />
                        <label for="religious" className="pl-3 text-base text-blacky-bright"> Religious</label><br />
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <input type="submit" className=" rounded-md border border-blacky-bright text-blacky-light w-20 h-8 hover:bg-evergreen hover:text-blacky-dark duration-500 hover:border-none" value="Apply" />
                    </Dropdown.Item>
                </Dropdown> */}


               
            </div>
      {loading?(
          <div className='loading-div'>
          <BarLoader


              color={'#32fca7'}
              loading={loading}

              size={15}

              />
        </div>


      ):(
        <div className='px-8 lg:px-28 flex flex-wrap md:gap-[10%] lg:gap-[5%]'>
        {data.map((item)=>(

          <div  key={item._id} className="pb-16 md:w-[45%] lg:w-[30%] bg-whiteglow card-shadow rounded mb-8 pb-4">
       <div className='relative'> 
       <h3 className='text-xl md:text-2xl font-bold text-whiteglow absolute px-3 bottom-[3px] md:bottom-[15px] z-50'>{item.title}</h3>
       <div className="absolute top-0 left-0 right-0 bottom-0 z-40 rounded bg-gradient-to-b from-transparent via-transparent to-black"></div>
       <p className="text-md md:text-lg font-bold bg-[#00c676b0] absolute rounded text-whiteglow m-[5px] px-[8px] py-[3px]">{item.duration}</p>

       <img className='w-[100%] aspect-video rounded-lg skeleton' src={item.images[0]} alt="" /></div>
        <div className='py-2 mx-8'>
            <p className='text-sm md:text-[17px]  text-blacky-light card-text'>{item.description}</p>    
        </div>
        
        <div className="py-1 mx-8 flex justify-between items-center">
            <p className="text-evergreen text-xl font-bold">₹{item.cheapestPrice}</p>
            <Link  to={`/list/package/${item._id}`}>
<button className="bg-evergreen text-whiteglow font-semibold text-sm px-8 py-2 rounded-md ">View</button></Link>
   
            </div>
          
        </div>
        ))}

        </div>
      )}
       


<Footer /></div>
    

)
        }


export default List1_card
