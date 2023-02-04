import React, { useState, useEffect } from "react";
import useFetch from "../../../hooks/useFetch";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { Dropdown } from "flowbite-react/lib/cjs/components/Dropdown";
import ArrowBackIosNewSharpIcon from '@mui/icons-material/ArrowBackIosNewSharp';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import international from '../../Assets/international.jpg'
import internationalm from '../../Assets/internationalmobile.jpg'

import Footer from "../Footer/Footer";
import NavbarTest from "../navbar/navbar";
import BarLoader from "react-spinners/BarLoader";
import honeymoon from '../../Assets/Honeymoon.jpg'
import adventure from '../../Assets/adventure.jpg'
import family from '../../Assets/family.jpg'
import friends from '../../Assets/friends.jpg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import kashmir from '../../Assets/kashmir.jpg'
import mysore from '../../Assets/mysore.jpg'
import wayanad from '../../Assets/wayanad.jpg'
import goa from '../../Assets/goa.jpg'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import munnar from '../../Assets/munnar.jpg';
import { useNavigate } from 'react-router'



const List2_card = ({setlocation, settype}) => {
  const slider = React.useRef(null);
  const navigate = useNavigate();

  const [anim, setAnim] = useState("hide")
  useEffect(()=>{
      window.addEventListener('load', setAnim("show"))

  }, [])
  const {data:data2} = useFetch("/packages")
  var settings1 = {
    dots: false,
    arrows:false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed: 4000,
    responsive: [
        {
            breakpoint: 1280,
            settings:{
                slidesToShow:3,
            }
        },
        {
            breakpoint: 1024,
            settings:{
                slidesToShow:2,
            }
        },
        {
          breakpoint: 768,
          settings:{
              slidesToShow:1,
          }
      },
    ]
};
var settings3 = {
  dots: true,
  arrows:false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay:true,
  autoplaySpeed: 4000,
  responsive: [
      {
          breakpoint: 1024,
          settings:{
              slidesToShow:2,
          }
      },
      {
          breakpoint: 640,
          settings:{
              slidesToShow:1,
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
  autoplay:false,
/*   autoplaySpeed: 4000,
 */  responsive: [
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
  const [mintemp, setMintemp] = useState(undefined);
  const [maxtemp, setMaxtemp] = useState(undefined);
  const [cat,setCat]=useState([]);
  const [cats,setCats]=useState("");
  const [url,setUrl]=useState("");
console.log(destination)
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

    const handleSClick = () => {

      setlocation(destination);
      if(destination.trim() !== ""){
         navigate('/sep');
      }
      else{
          alert("Please enter a location to search")
      }
  
  }
  const handleS2submit = (value) => {

    setlocation(value);
    
       navigate('/sep');

}
    const handleTypesubmit = (value) => {

      settype(value);
      
      navigate('/sept');

    }
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
    <div className={`w-full animationset ${anim} bg-[white] hotelsexplore`}>
      <NavbarTest color={color} />

      <div className='flex justify-start mb-20 md:hidden card-shadow fixed z-[49] bg-[white] top-[60px] left-0 right-0'>
                    <div className=' flex gap-4 text-base   font-bold'>
                            <span  className='px-4 py-2 border-b border-b-[2px] text-[#2f3560]  border-b-[#2f3560] ]'>Packages</span>
                        <Link to="/hotels" className="px-4 py-2 cursor-pointer cursor-pointer text-[#2f3560]">Hotels</Link>
                    </div>
                </div>

      
      
                <div className="mt-[60px] pt-24 sm:pt-28  md:pt-32 px-4 sm:px-16 md:px-20 2xl:px-40  gradient-first relative">
                




                <div className="flex flex-col items-center justify-center px-8 md:px-20 lg:px-40 gap-8 sm:pb-4">
                    <h1 className='text-center text-3xl sm:text-4xl text-[#2f3560] font-bold'>Find your next stay
</h1>
                    <p className='text-center text-blacky-light text-base md:text-lg'>Search low prices on hotels, homes and much more...

</p>
                </div>


                <div className=" flex justify-center relative bottom-[-3rem] sm:bottom-[-5rem]">
                    <div className='bg-[white] py-8 border-none rounded-[10px] w-[90%] lg:w-[60%] shadow-search '>
                                
                                <div className='flex gap-4  justify-center '>
                                       <div className='flex w-[90%] lg:w-[70%] flex-col items-start gap-4 '>
                                            <h1 className='font-bold text-graydust-dark ml-2 text-lg text-left sm:text-xl'>Ready to get started !</h1>
                                            <div className='flex flex-col items-start sm:items-center sm:flex-row w-full gap-4'>
                                            <div className="flex items-center w-[100%] sm:w-[70%] md:w-[60%] lg:w-[100%] border border-[2px] rounded-full border-[#00b777] justify-between focus:ring-0 focus:ring-offset-0 bg-[white]  outline-none py-1 sm:py-2 px-4">
                                                <input type="text" className="border-0  outline-none w-[100%] h-[100%] text-base text-graydust-medium focus:ring-0 focus:ring-offset-0" placeholder="Enter your Destination" id= "destination" name="destination" onChange={handleSearchChange}/>

                                            </div>
                                            <button  className='px-8 py-2 bg-[#2f3560] rounded-full text-white font-bold cursor-pointer' onClick={handleSClick}>Search</button>

                                            </div>
                                       </div>
                                        
                                    
                                </div>

                               





                    </div>
                    </div>



        </div>
      


      <div className="mt-[6rem] sm:mt-[11rem] flex flex-wrap gap-[4%] lg:gap-[10%] px-4 sm:px-16 md:px-20 2xl:px-40">
          <div className="relative w-[90%]  mx-auto md:mx-0 md:w-[48%] lg:w-[45%] mb-8 cursor-pointer" onClick={()=>handleTypesubmit("honeymoon")}>
            <div className="absolute top-0 left-0 right-0 bottom-0 z-40 rounded bg-[#00000085]"></div>

            <img src={honeymoon} className="w-[100%] rounded-[10px]" alt="" />
            <div className="absolute top-[50%] flex flex-col gap-1 translate-y-[-50%] left-4 lg:left-8 z-[45] w-[80%] 2xl:w-[50%]">
              <p className="text-[white] text-xs sm:text-sm xl:text-base w-[100%]">Enjoy your honeymoon with our best packages and make moments unforgettable</p>
              <span className="text-lg lg:text-2xl xl:text-3xl font-bold text-[white] ">HoneyMoon Packages</span>
          
            </div>
            </div>


            <div className="relative w-[90%] mx-auto md:mx-0 md:w-[48%] lg:w-[45%] mb-8 cursor-pointer" onClick={()=>handleTypesubmit("adventure")}>
                <div className="absolute top-0 left-0 right-0 bottom-0 z-40 rounded bg-[#00000085]"></div>

                <img src={adventure} className="w-[100%] rounded-[10px]" alt="" />
                <div className="absolute top-[50%] flex flex-col gap-1 translate-y-[-50%] left-4 lg:left-8 z-[45] w-[80%] 2xl:w-[50%]">
                  <p className="text-[white] text-xs sm:text-sm xl:text-base w-[100%]">We has put together a handy list of the best Adventure destinations, where you can finally leave everything else behind and celebrate </p>
                  <span className="text-lg lg:text-2xl xl:text-3xl font-bold text-[white] ">Adventure Travel<br className="hidden lg:block" /> Packages</span>
              
                </div>
            </div>



            <div className="relative w-[90%] mx-auto md:mx-0 md:w-[48%] lg:w-[45%] mb-8 cursor-pointer" onClick={()=>handleTypesubmit("family")}>
                <div className="absolute top-0 left-0 right-0 bottom-0 z-40 rounded bg-[#00000085]"></div>

                <img src={family} className="w-[100%] rounded-[10px]" alt="" />
                <div className="absolute top-[50%] flex flex-col gap-1 translate-y-[-50%] left-4 lg:left-8 z-[45]  w-[80%] 2xl:w-[50%]">
                  <p className="text-[white] text-xs sm:text-sm xl:text-base w-[100%]">Got your family around?<br></br>
                  Make moments wonderful with Trouvailler family travel plans </p>
                  <span className=" text-lg lg:text-2xl xl:text-3xl font-bold text-[white] ">Family Trip<br className="hidden lg:block" /> Packages</span>
              
                </div>
            </div>




            <div className="relative w-[90%] mx-auto md:mx-0 md:w-[48%] lg:w-[45%] mb-8 cursor-pointer" onClick={()=>handleTypesubmit("friends")}>
                <div className="absolute top-0 left-0 right-0 bottom-0 z-40 rounded bg-[#00000085]"></div>

                <img src={friends} className="w-[100%] rounded-[10px]" alt="" />
                <div className="absolute  flex flex-col gap-1 top-[50%] translate-y-[-50%] left-4 lg:left-8 z-[45] w-[80%] 2xl:w-[50%]">
                  <p className="text-[white] text-xs sm:text-sm xl:text-base w-[100%]">Hangout and celebrate with your gang with Trouvailler Tour packages specifically curated for your vibe </p>
                  <span className=" text-lg lg:text-2xl xl:text-3xl font-bold text-[white] ">Friends Travel<br className="hidden lg:block"/> Packages</span>
              
                </div>
            </div>





          
      </div>


<div className="bg-[#f2f2f2] py-2 pb-4 sm:pb-10">
      <div className='mt-6 sm:mt-[4rem] px-4 sm:px-8 pt-8 sm:pb-8  rounded-[10px] shadow-search mx-4 sm:mx-16 md:mx-20 2xl:mx-40 bg-[white] '>
            <div className='flex justify-between items-center'>
            <h1 className='text-xl text-2xl md:text-3xl font-bold'>Trending discounts on Tour Packages</h1>  
                <div className='flex gap-3 bg-evergreen-tag rounded-full px-4 py-1'>
                    <button onClick={() => slider?.current?.slickPrev()}><ArrowBackIosNewSharpIcon sx={{fontSize:20,color:"#03965e"}}/></button>
                    <button onClick={() => slider?.current?.slickNext()}><ArrowForwardIosSharpIcon sx={{fontSize:20, color:"#03965e"}}/></button>
                </div>
            </div>
            <p className='text-sm sm:text-base lg:text-lg py-2 '>Grab Best deals on homestays, hotels and resorts</p> 

            <div className=' pt-8 '>
            <Slider ref={slider} {...settings1} className='slick-m'>
                {data2.map((item, i)=>(

<div key={item._id} className="w-[90%] mx-auto sm:mx-0  pb-3 mb-10 card-shadow cursor-pointer" onClick={()=> navigate(`/list/package/${item._id}`)} >
                  <div className="relative w-full">
                  <div className="absolute top-0 left-0 right-0 bottom-0 z-40 rounded bg-gradient-to-b from-transparent via-transparent to-black"></div>

                    <img src={item.images[0]} alt="" className="aspect-video skeleton w-full rounded-md h-auto w-full " />
                    <div className="absolute opacity-90 bottom-2 w-[96%] z-50 left-[50%] translate-x-[-50%] flex flex-col rounded-lg p-2">
                        <h1 className="font-bold text-white  text-sm">For a Thrilling Escape into the wild</h1>
                    </div>
                  </div>

                  {/*Texts*/}

                  <div className="px-2 py-4">
                   <div className="flex items center justify-between text-sm h-[2.5rem]"> <span className="w-[70%] text-blacky-medium font-bold text-base sm:text-lg  ">{item.title}</span>
                    <span className="w-[30%] text-[#03965e] flex items-center text-sm text-right font-bold">{item.duration}</span></div>

                    <p className="text-sm text-[red] my-2 text-graydust-dark ">Grab upto 30% off on kerala tourist packages</p>
                    
                  </div>

                  {/*Buttons*/}
                  <div className="px-2 flex flex-col" >
                  <div className='flex justify-start items-center gap-2'>
                   <span className="font-bold text-2xl">4999 &#8377;</span><strike className='text-base text-graydust-medium'><span>5000 &#8377;</span></strike> 
                   </div>
                   <span className="text-xs sm:text-sm text-graydust-medium">per person</span>
                    

                  </div>
              </div>







               
                ))}
            </Slider>




             </div>                  
        </div></div>


        <div className="px-4 pt-8 sm:pt-20 pb-8 sm:px-16 md:px-20 2xl:px-40">
                  <div className="relative ">
                  <div className="absolute top-0 left-0 right-0 bottom-0 z-40 rounded-[20px] rounded bg-[#0000004a]"></div>
                  <img src={internationalm} className='block md:hidden rounded-[20px]' alt="" />

                    <img src={international} className='hidden md:block rounded-[20px]' alt="" />
                    <div className="absolute w-[80%] lg:w-[50%] z-[45] text-[white] flex flex-col items-start gap-2 lg:gap-5 left-[10%] top-[50%] translate-y-[-50%]">
                    <h1 className=" font-bold text-xl md:text-2xl lg:text-4xl">International Destinations</h1>
                    <p className="text-xs sm:text-base lg:text-lg">Trouvailler has been curated the most wonderful international trips for you. Grab the best deals on international travel packages</p>
                    <span className="flex gap-1 text-sm sm:text-md lg:text-xl items-center border border-[2px] border-[white] rounded-full px-4 py-1 cursor-pointer" onClick={()=>handleTypesubmit("international")}><span>Explore</span> <ArrowForwardIcon /></span>
                 
                    </div>
                     </div>
        </div>

        <div className="px-4 pt-8 sm:pt-20 pb-8 sm:px-16 md:px-20 2xl:px-40">
        <h1 className='text-xl sm:text-2xl md:text-3xl font-bold'>Top selling packages</h1> 
        <p className='text-sm sm:text-base lg:text-lg py-2 sm:py-4'>Explore and choose the best homestays, hotels or properties in most popular destinations</p>  
        <Slider {...settings3} className=" pt-4 sm:pt-8 pb-4 slick-m">
        {data2.map((item) => (
            <div className="px-4">
        <Link  to={`/list/package/${item._id}`}><div  key={item._id}  className="w-[100%] sm:w-[80%] sm:w-auto mx-auto sm:mx-0 bg-whiteglow cursor-pointer mb-4 card-shadow rounded pb-4 relative"  >
              <div className="relative">
              <div className="absolute top-0 left-0 right-0 bottom-0 z-40 rounded bg-gradient-to-b from-transparent via-transparent to-black"></div>
              <img className='w-full aspect-video skeleton rounded-lg' src={item.images[0]} alt="" />
              <h3 className='text-lg sm:text-xl font-bold z-50 text-whiteglow px-3  absolute bottom-[3px] md:bottom-[10px]'>{item.title}</h3>

              </div>
           <div className='py-3 mx-3'>
              <span className="font-bold text-[#03965e]">{item.duration}</span>
               <p className='text-[0.75rem] sm:text-[0.875rem] card-text my-2 textnormal  '>{item.description}</p>    
           </div>
           
           <div className="py-2 mx-3 ">
               <div className="flex justify-start gap-1 items-center"><span className=" text-xl font-bold">₹ {item.cheapestPrice}</span> <span className="text-xs text-graydust-dark">Per person</span></div>
               <div className="flex flex-col items-start gap-2">
                 <span className="text-sm text-white bg-[red] px-2 py-1 rounded">15% off</span>
                 <div className="flex gap-2 items-center">
                 <span className=" text-xl font-bold">₹ {item.cheapestPrice}</span><strike><span className=" text-sm text-graydust-dark font-bold">₹ {item.cheapestPrice}</span></strike> <span className="text-xs text-graydust-dark">Per person</span>
                 </div>
               </div>
         
            </div>
              
           </div></Link> </div>
            ))}
            
            
            
            
            </Slider>


        </div>

        <div className='mt-8 sm:mt-[2rem] py-2 sm:py-8 rounded-[10px] mb-12 sm:mb-0 mx-4 sm:mx-16 md:mx-20 2xl:mx-40 '>
            <div className='flex justify-between items-center'>
            <h1 className='text-xl sm:text-2xl md:text-3xl font-bold'>Popular Destinations</h1> 

            </div>
            <p className='text-sm sm:text-base lg:text-lg py-2 sm:py-4'>Explore and choose the best homestays, hotels or properties in most popular destinations</p>  

            <Slider {...settings2} className="lg:hidden pt-4 sm:pt-8 pb-4 text-[white] font-bold text-sm sm:text-lg md:text-xl">
            <div className='w-[100%] px-2 sm:px-4 cursor-pointer' onClick={()=> handleS2submit("kashmir")}><div className='flex flex-col gap-2 rounded-[10px] overflow-hidden relative'><img src={kashmir} alt="" /><h1 className='absolute left-3 bottom-3'>Kashmir</h1></div></div>                

                <div className='w-[100%] px-2 sm:px-4 cursor-pointer' onClick={()=> handleS2submit("goa")}><div className='flex flex-col gap-2 rounded-[10px] overflow-hidden relative'><img src={goa} alt="" /><h1 className='absolute left-3 bottom-3'>Goa</h1></div></div>                
                <div className='w-[100%] px-2 sm:px-4 cursor-pointer' onClick={()=> handleS2submit("wayanad")}><div className='flex flex-col gap-2 rounded-[10px] overflow-hidden relative'><img src={wayanad} alt="" /><h1 className='absolute left-3 bottom-3'>Wayanad</h1></div></div>                
                <div className='w-[100%] px-2 sm:px-4 cursor-pointer' onClick={()=> handleS2submit("munnar")}><div className='flex flex-col gap-2 rounded-[10px] overflow-hidden relative'><img src={munnar} alt="" /><h1 className='absolute left-3 bottom-3'>Munnar</h1></div></div>                
                <div className='w-[100%] px-2 sm:px-4 cursor-pointer' onClick={()=> handleS2submit("mysore")}><div className='flex flex-col gap-2 rounded-[10px] overflow-hidden relative'><img src={mysore} alt="" /><h1 className='absolute left-3 bottom-3'>Mysore</h1></div></div>                

            
            
            
            
            
            </Slider>
            <div className='hidden pt-8 justify-between text-[white] mb-12 font-bold text-xl lg:flex'>
            <div className='flex flex-col gap-2 w-[15%] rounded-[10px] overflow-hidden relative cursor-pointer' onClick={()=> handleS2submit("kashmir")}><img src={kashmir} alt="" /><h1 className='absolute left-3 bottom-3'>Kashmir</h1></div>

                 <div className='flex flex-col gap-2 w-[15%] rounded-[10px] overflow-hidden relative cursor-pointer' onClick={()=> handleS2submit("goa")}><img src={goa} alt="" /><h1 className='absolute left-3 bottom-3'>Goa</h1></div>
                 <div className='flex flex-col gap-2 w-[15%] rounded-[10px] overflow-hidden relative cursor-pointer' onClick={()=> handleS2submit("wayanad")}><img src={wayanad} alt="" /><h1 className='absolute left-3 bottom-3'>Wayanad</h1></div>
                 <div className='flex flex-col gap-2 w-[15%] rounded-[10px] overflow-hidden relative cursor-pointer' onClick={()=> handleS2submit("munnar")}><img src={munnar} alt="" /><h1 className='absolute left-3 bottom-3'>Munnar</h1></div>
                 <div className='flex flex-col gap-2 w-[15%] rounded-[10px] overflow-hidden relative cursor-pointer' onClick={()=> handleS2submit("mysore")}><img src={mysore} alt="" /><h1 className='absolute left-3 bottom-3'>Mysore</h1></div>   
            </div>

                           
        </div>







      <Footer />
    </div>
  );
};

export default List2_card;
