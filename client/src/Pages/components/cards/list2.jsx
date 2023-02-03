import React, { useState, useEffect } from "react";
import useFetch from "../../../hooks/useFetch";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { Dropdown } from "flowbite-react/lib/cjs/components/Dropdown";

import Footer from "../Footer/Footer";
import NavbarTest from "../navbar/navbar";
import BarLoader from "react-spinners/BarLoader";

const List2_card = ({setlocation, settype}) => {
  const [anim, setAnim] = useState("hide")
  useEffect(()=>{
      window.addEventListener('load', setAnim("show"))

  }, [])
  const [destination, setDestination] = useState("");
  const [searchval, setSearchval] = useState("");
  // const [checked, setChecked] = useState(false);
  const [min, setMin] = useState(undefined);
  const [cat,setCat]=useState([]);

  const [max, setMax] = useState(undefined);
  //const [ info, setInfo] = useState({})
  // const {data,loading,error}=useFetch("/packages")
  const url1 = `/hotels?destinations=${destination}&max=${max || 999999}&min=${
    min || 0
  }`;
  const url2 = `/hotels`;
  let url = (destination, url1, url2) => {
    if (destination) {
      return url1;
    } else {
      return url2;
    }
  };
  if (destination) {
    url = url1;
  } else url = url2;

  //useeffect
  const { data, loading, error, reFetch } = useFetch(url);

  const handleClick = () => {
      // setDestination(searchval);
    reFetch(); //handleclick const for all filters,handle chage just sets values
  };
  const handleSubmitClick = () => {
    console.log(min);
    const minval = parseInt(min);
    setMin(minval);
    console.log(typeof minval);
    console.log(max);
    const maxval = parseInt(max);
    setMax(maxval);
    reFetch();
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

        setMax(10000)
     
         setMin(0);
        // if(max==999999)
        // {setMax(10000)}
     }
    
    else if (checked && value == "b2") {
        setMin(10000);
        setMax(20000);
      //test code
    //   if (min == 0 && max == 999999) {
    //     setMin(10000);
    //     setMax(20000);
    //   } else {
    //     if (max != 999999) {
    //       if (max < 20000) {
    //         setMax(20000);
    //       }
    //     }

    //     if (min != 0) {
    //       if (min > 10000) {
    //         setMin(10000);
    //       }
    //     }
    //   }

      //test code

      // if(max!=999999)
      //          {if(max<20000)
      //             {
      //                 setMax(20000);
      //             }
      //         }
      // // else{
      // //     setMin(10000);
      // //     setMax(20000);
      // // }
      // if(min!=0){
      //         if(min>10000){
      //             setMin(10000);
      //         }
      //     }
      // else{
      //     setMin(10000);
      //     setMax(20000);
      // }
    } else if (checked && value == "b3") {

        //start
        // if (min == 0 && max == 999999) {
        //     setMin(20000);
        //     setMax(40000);
        //   } else {
        //     if (max != 999999) {
        //       if (max < 40000) {
        //         setMax(40000);
        //       }
        //     }
    
        //     if (min != 0) {
        //       if (min > 20000) {
        //         setMin(20000);
        //       }
        //     }
        //   }
        //end
        //
      setMin(20000);
       setMax(40000);
      //
    } else if (checked && value == "b4") {
        // if (min == 0 && max == 999999) {
        //     setMin(40000);
        //     setMax(50000);
        //   } else {
        //     if (max != 999999) {
        //       if (max < 50000) {
        //         setMax(50000);
        //       }
        //     }
    
        //     if (min != 0) {
        //       if (min > 50000) {
        //         setMin(50000);
        //       }
        //     }
        //   }

       setMin(40000);
      setMax(50000);
    } else {
      setMin(0);
      setMax(999999);
    }

    console.log("min value is " + min + " max val is " + max);
  };
  const handleSClick = () => {

    setlocation(destination);

}
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
    setMin(e.target.value);
  };
  const handleMaxValueChange = (e) => {
    setMax(e.target.value);
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
    <div className={`w-full animationset ${anim} bg-[#f2f2f2] hotelsexplore`}>
      <NavbarTest color={color} />

      <div className='flex justify-start mb-20 md:hidden fixed z-[49] bg-[white] top-[60px] left-0 right-0'>
                    <div className=' flex gap-4 text-md   font-bold'>
                            <span  className='px-4 py-2 border-b border-b-[2px] text-[#2f3560]  border-b-[#2f3560] ]'>Packages</span>
                        <Link to="/hotels" className="px-4 py-2 cursor-pointer cursor-pointer text-[#2f3560]">Hotels</Link>
                    </div>
                </div>

      
      
                <div className="mt-[60px] pt-24 sm:pt-28  md:pt-32 px-4 sm:px-16 md:px-20 2xl:px-40  gradient-first relative">
                




                <div className="flex flex-col items-center justify-center px-8 md:px-20 lg:px-40 gap-8 sm:pb-4">
                    <h1 className='text-center text-3xl sm:text-4xl text-[#2f3560] font-bold'>Find your next stay
</h1>
                    <p className='text-center text-blacky-light text-md md:text-lg'>Search low prices on hotels, homes and much more...

</p>
                </div>


                <div className=" flex justify-center relative bottom-[-3rem] sm:bottom-[-5rem]">
                    <div className='bg-[white] py-8 border-none rounded-[10px] w-[90%] lg:w-[60%] shadow-search '>
                                
                                <div className='flex gap-4  justify-center '>
                                       <div className='flex w-[90%] lg:w-[70%] flex-col items-start gap-4 '>
                                            <h1 className='font-bold text-graydust-dark ml-2 text-lg text-left sm:text-xl'>Ready to get started !</h1>
                                            <div className='flex flex-col items-start sm:flex-row w-full gap-4'>
                                            <div className="flex items-center w-[100%] sm:w-[70%] md:w-[60%] lg:w-[100%] border border-[2px] rounded-full border-[#00b777] justify-between focus:ring-0 focus:ring-offset-0 bg-[white]  outline-none py-1 sm:py-2 px-4">
                                                <input type="text" className="border-0  outline-none w-[100%] h-[100%] text-md text-graydust-medium focus:ring-0 focus:ring-offset-0" placeholder="Enter your Destination" id= "destination" name="destination" onChange={handleSearchChange}/>

                                            </div>
                                            <Link to="/se"><button  className='px-8 py-2 bg-[#2f3560] rounded-full text-white font-bold cursor-pointer' onClick={handleSClick}>Search</button></Link>

                                            </div>
                                       </div>
                                        
                                    
                                </div>

                               





                    </div>
                    </div>



        </div>
      

      <Footer />
    </div>
  );
};

export default List2_card;
