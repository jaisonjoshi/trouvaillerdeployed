
import React, { useState , useEffect} from 'react'
import useFetch from '../../../hooks/useFetch';
import { Link } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import { Dropdown } from 'flowbite-react/lib/cjs/components/Dropdown';
import Footer from '../Footer/Footer';
import NavbarTest from '../navbar/navbar';
import BarLoader from "react-spinners/BarLoader";
import axios from "axios";
import munnar from '../../Assets/munnar.jpg';
import ArrowBackIosNewSharpIcon from '@mui/icons-material/ArrowBackIosNewSharp';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const List1_card = ({setlocation, settype}) => {
    const slider = React.useRef(null);

    const [anim, setAnim] = useState("hide")
    useEffect(()=>{
        window.addEventListener('load', setAnim("show"))

    }, []);

    const axiosInstance = axios.create({
        baseURL: process.env.REACT_APP_API_URL,
    });

    const {data:data2} = useFetch("/hotels?offers=true&limit=3")

    var settings = {
        dots: true,
        arrows:false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 768,
                settings:{
                    slidesToShow:3,
                }
            }
        ]
    };
    var settings1 = {
        dots: false,
        arrows:false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 1024,
                settings:{
                    slidesToShow:3,
                }
            },
            {
                breakpoint: 768,
                settings:{
                    slidesToShow:2,
                }
            },
        ]
    };
    var settings2 = {
        dots: true,
        arrows:false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 768,
                settings:{
                    slidesToShow:3,
                }
            },
            {
                breakpoint: 640,
                settings:{
                    slidesToShow:2,
                }
            }
        ]
    };
    const [destination,setDestination]=useState("");
    const [min, setMin] = useState(undefined);
    const [max, setMax] = useState(undefined);
    const [cat,setCat]=useState([]);
    const [cats,setCats]=useState("");
    const [url,setUrl]=useState("");

//   const url1 = `/packages?destinations=${destination}&max=${max || 999999}&min=${
//     min || 0
//   }`;
//     const url2=`/packages`
//---------original
    const url3 = `/packages?destinations=${destination}&category=${cats}&max=${max || 999999}&min=${
        min || 0
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

            setlocation(destination);

       }


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
        let tar=e.target.value;
        //console.log("IN LOWER CASE "+tar.toLowerCase())
        //console.log(t.toLowerCase())
        setDestination(tar.toLowerCase());
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

        setMax(10000)
     
         setMin(0);
       
     }
    
    else if (checked && value == "b2") {
        setMin(10000);
        setMax(20000);
    
    } else if (checked && value == "b3") {

      
      setMin(20000);
       setMax(40000);
      //
    } else if (checked && value == "b4") {
      

       setMin(40000);
      setMax(50000);
    } else {
      setMin(0);
      setMax(999999);
    }

    console.log("min value is " + min + " max val is " + max);
  };

  const handleMinValueChange = (e) => {
    setMin(e.target.value);
  };//check the datatype;int or string
  const handleMaxValueChange = (e) => {
    setMax(e.target.value);
  };
  const color = "text-blacky-dark"; 
  
   
  return (

    
    <div className={`w-full animationset ${anim} bg-[#f2f2f2] hotelsexplore`}>
      <NavbarTest color={color} />
        <div className='flex justify-start mb-20 md:hidden fixed z-[49] bg-[white] top-[60px] left-0 right-0'>
                    <div className=' flex gap-4 text-md   font-bold'>
                            <Link to="/packages" className='px-4 py-2 cursor-pointer text-[#2f3560]'>Packages</Link>
                        <span  className="px-4 py-2 cursor-pointer border-b border-b-[2px] text-[#2f3560]  border-b-[#2f3560]">Hotels</span>
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
        <div className='mt-[4rem] sm:mt-[11rem] py-8 rounded-[10px]  mx-4 sm:mx-16 md:mx-20 2xl:mx-40 '>
            <div className='flex justify-between items-center'>
            <h1 className='text-xl sm:text-2xl md:text-3xl font-bold'>Browse by Types</h1>   

            </div>
            <Slider {...settings} className="lg:hidden pt-8 pb-4 text-[white] font-bold text-sm sm:text-lg md:text-xl">
                <Link to="/set">                 <div className='w-[100%] px-2 sm:px-4' onClick={()=> settype("international")}><div className='type-card py-4 sm:py-6 md:py-8 rounded-[10px] flex justify-center '><span className='z-10'>International</span></div></div></Link>
                 <div className='w-[100%] px-2 sm:px-4'><div className='type-card py-4 sm:py-6 md:py-8 rounded-[10px] flex justify-center '><span className='z-10'>Hotel</span></div></div>                 
                 <div className='w-[100%] px-2  sm:px-4'><div className='type-card  py-4 sm:py-6 md:py-8 rounded-[10px] flex justify-center '><span className='z-10'>Resort</span></div></div>                
                 <div className='w-[100%] px-2  sm:px-4'><div className='type-card  py-4 sm:py-6 md:py-8 rounded-[10px] flex justify-center '><span className='z-10'>Apartment</span></div></div>             
                 <div className='w-[100%] px-2  sm:px-4'><div className='type-card  py-4 sm:py-6 md:py-8 rounded-[10px] flex justify-center '><span className='z-10'>Villa</span></div></div>                 

            </Slider>
            <div className='hidden pt-8 justify-between text-[white] font-bold text-xl lg:flex'>
                 <div className='type-card w-[19%] py-8 rounded-[10px] flex justify-center '><span className='z-10'>International</span></div>
                 <div className='type-card w-[19%] py-8 rounded-[10px] flex justify-center '><span className='z-10'>International</span></div>
                 <div className='type-card w-[19%] py-8 rounded-[10px] flex justify-center '><span className='z-10'>International</span></div>
                 <div className='type-card w-[19%] py-8 rounded-[10px] flex justify-center '><span className='z-10'>International</span></div>
                 <div className='type-card w-[19%] py-8 rounded-[10px] flex justify-center '><span className='z-10'>International</span></div>   
            </div>

                           
        </div>
        <div className='mt-8 sm:mt-[4rem] px-4 sm:px-8 py-8 rounded-[10px] shadow-search mx-4 sm:mx-16 md:mx-20 2xl:mx-40 bg-[white] '>
            <div className='flex justify-between items-center'>
            <h1 className='text-xl text-2xl md:text-3xl font-bold'>Best Deals on Hotels</h1>   
                <div className='flex gap-3 bg-evergreen-tag rounded-full px-4 py-1'>
                    <button onClick={() => slider?.current?.slickPrev()}><ArrowBackIosNewSharpIcon sx={{fontSize:20,color:"#03965e"}}/></button>
                    <button onClick={() => slider?.current?.slickNext()}><ArrowForwardIosSharpIcon sx={{fontSize:20, color:"#03965e"}}/></button>
                </div>
            </div>

            <div className=' pt-8 '>
            <Slider ref={slider} {...settings1}>
                {data2.map((itm, i)=>(
                <div key={i} className="pr-4 sm:pr-8  ">
                    <div className='mb-4  pb-3 card-shadow'>
                        <div className="relative w-full">
                            <div className="absolute top-0 left-0 right-0 bottom-0 z-40 rounded bg-gradient-to-b from-transparent via-transparent to-black"></div>
                            <img className='w-[100%] aspect-video skeleton rounded-t-lg' src={itm.images[0]} alt="" />
                            <h3 className='text-md md:text-xl font-bold z-50 text-whiteglow px-1 md:px-3  absolute bottom-[3px] md:bottom-[10px]'>{itm.title}</h3>
                        </div>
                        <div className='py-1 mx-1 md:mx-3'>

                            <h3 className='text-sm md:text-xl mb-0 '><b>{itm.offertitle}</b></h3>   
                            <p className="text-xs md:text-md text-blacky-light">{itm.offerdescription}</p> 
                        </div>
                        <div className="md:py-2 mx-2 md:mx-3 flex justify-between items-center">
                            <span className=" font-bold"><span  className="text-[grey] text-xs md:text-md"><strike>{itm.cheapestPrice} &#8377; </strike></span><span className="text-sm md:text-2xl">&nbsp;{itm.offerprice} &#8377;</span></span>
                                
                        </div>

                    </div>
                </div>
                ))}
            </Slider>




             </div>                  
        </div>
       
        <div className='mt-8 sm:mt-[4rem] py-2 sm:py-8 rounded-[10px]  mx-4 sm:mx-16 md:mx-20 2xl:mx-40 '>
            <div className='flex justify-between items-center'>
            <h1 className='text-xl sm:text-2xl md:text-3xl font-bold'>Browse by Types</h1>   

            </div>
            <Slider {...settings2} className="lg:hidden pt-8 pb-4 text-[white] font-bold text-sm sm:text-lg md:text-xl">
            
                <div className='w-[100%] px-2 sm:px-4'><div className='flex flex-col gap-2 rounded-[10px] overflow-hidden relative'><img src={munnar} alt="" /><h1 className='absolute left-3 bottom-3'>Munnar</h1></div></div>                
                <div className='w-[100%] px-2 sm:px-4'><div className='flex flex-col gap-2 rounded-[10px] overflow-hidden relative'><img src={munnar} alt="" /><h1 className='absolute left-3 bottom-3'>Munnar</h1></div></div>                
                <div className='w-[100%] px-2 sm:px-4'><div className='flex flex-col gap-2 rounded-[10px] overflow-hidden relative'><img src={munnar} alt="" /><h1 className='absolute left-3 bottom-3'>Munnar</h1></div></div>                
                <div className='w-[100%] px-2 sm:px-4'><div className='flex flex-col gap-2 rounded-[10px] overflow-hidden relative'><img src={munnar} alt="" /><h1 className='absolute left-3 bottom-3'>Munnar</h1></div></div>                
                <div className='w-[100%] px-2 sm:px-4'><div className='flex flex-col gap-2 rounded-[10px] overflow-hidden relative'><img src={munnar} alt="" /><h1 className='absolute left-3 bottom-3'>Munnar</h1></div></div>                

            
            
            
            
            
            </Slider>
            <div className='hidden pt-8 justify-between text-[white] font-bold text-xl lg:flex'>
                 <div className='flex flex-col gap-2 w-[15%] rounded-[10px] overflow-hidden relative'><img src={munnar} alt="" /><h1 className='absolute left-3 bottom-3'>Munnar</h1></div>
                 <div className='flex flex-col gap-2 w-[15%] rounded-[10px] overflow-hidden relative'><img src={munnar} alt="" /><h1 className='absolute left-3 bottom-3'>Munnar</h1></div>
                 <div className='flex flex-col gap-2 w-[15%] rounded-[10px] overflow-hidden relative'><img src={munnar} alt="" /><h1 className='absolute left-3 bottom-3'>Munnar</h1></div>
                 <div className='flex flex-col gap-2 w-[15%] rounded-[10px] overflow-hidden relative'><img src={munnar} alt="" /><h1 className='absolute left-3 bottom-3'>Munnar</h1></div>
                 <div className='flex flex-col gap-2 w-[15%] rounded-[10px] overflow-hidden relative'><img src={munnar} alt="" /><h1 className='absolute left-3 bottom-3'>Munnar</h1></div>   
            </div>

                           
        </div>
        <div className='my-[4rem] px-8 py-8 rounded-[10px] shadow-search mx-4 sm:mx-16 md:mx-20 2xl:mx-40 bg-[white] '>
            <div className='flex justify-between items-center'>
            <h1 className='text-3xl font-bold'>Why book with Trouvailler block</h1>   

            </div>

                           
        </div>
        
        



       




           
            
           
            
      
       
          
       


<Footer /></div>
    

)
        }


export default List1_card




