import React, { useState, useEffect } from "react";
import useFetch from "../../../hooks/useFetch";
import { Link } from "react-router-dom";

import Footer from "../Footer/Footer";
import NavbarTest from "../navbar/navbar";
import axios from "axios";
import ArrowBackIosNewSharpIcon from "@mui/icons-material/ArrowBackIosNewSharp";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useNavigate } from "react-router";

import InterestForm from "./interestForm";
import LazyLoad from "react-lazyload";

const List1_card = ({ setlocation, settype }) => {
  const slider = React.useRef(null);
  const navigate = useNavigate();

  const [anim, setAnim] = useState("hide");
  useEffect(() => {
    window.addEventListener("load", setAnim("show"));
  }, []);

  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  });

  const { data: data2 } = useFetch("/hotels?offers=true&limit=6");

  var settings_1 = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };
  var settings2 = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  const [destination, setDestination] = useState("");
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);
  const [mintemp, setMintemp] = useState(undefined);
  const [maxtemp, setMaxtemp] = useState(undefined);
  const [cat, setCat] = useState([]);
  const [cats, setCats] = useState("");
  const [url, setUrl] = useState("");
  const generateUrl = (url)=>{
    const [baseUrl, ...rest] = url.split("/upload/");

  return `${baseUrl}/upload/c_fill,w_400/f_auto/q_auto/${rest.join("/upload/")}`;


  }
  //   const url1 = `/packages?destinations=${destination}&max=${max || 999999}&min=${
  //     min || 0
  //   }`;
  //     const url2=`/packages`
  //---------original
  const url3 = `/packages?destinations=${destination}&category=${cats}&max=${
    max || 999999
  }&min=${min || 1}`;

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
  const { data, loading, error, reFetch } = useFetch(url3);

  //use effect
  //      const url1="/packages"
  //      setUrl(url1)
  //     const url3="/packages?destinations=${destination}&category=${cat}&max=${max || 999999}&min=${min || 0 }"

  //         const {data,loading,error,reFetch}=useFetch(url);

  //         useEffect(()=>{
  //             setUrl(url3);
  //  },[destination]);

  const handleClick = () => {
    //for category change

    // const [cats,setCats]=useState("");
    // const [cat,setCat]=useState([]);

    const catstr = cat.toString();
    console.log("array to string " + catstr);
    setCats(catstr);
    console.log(cats);

    // reFetch();//handleclick const for all filters,handle chage just sets values
  };
  const handleTypesubmit = (value) => {
    settype(value);

    navigate(`/set/${value}`);
  };
  const handleS2submit = (value) => {
    setlocation(value);

    navigate(`/se/${value}`);
  };

  const handleSClick = () => {
    setlocation(destination);
    if (destination.trim() !== "") {
      navigate(`/se/${destination}`);
    } else {
      alert("Please enter a location to search");
    }
  };

  const handleSubmitClick = () => {
    const minval = parseInt(mintemp);
    // setMin(minval);
    //console.log(typeof minval);
    //console.log(maxtemp);
    //setMax(maxval);
    //console.log("min value is " + min + " max val is " + max);
    //console.log("type of min"+ typeof(min)+"type of max"+typeof(max))
    setMin(minval, () => reFetch());
    const maxval = parseInt(maxtemp);
    setMax(maxval, () => reFetch());
    // reFetch();
  };

  const handleSearchChange = (e) => {
    let tar = e.target.value;
    //console.log("IN LOWER CASE "+tar.toLowerCase())
    //console.log(t.toLowerCase())
    setDestination(tar.toLowerCase());
    console.log(destination);
  };

  // const handleCatChange=(e)=>{
  //     const { value, checked } = e.target;

  //     if(checked){setCat(value)}
  //     console.log(cat);
  // }

  const handleCataChange = (e) => {
    const { value, checked } = e.target;

    const i = cat.indexOf(e.target.value);
    //  console.log("index "+i);

    if (checked) {
      setCat((cat) => [...cat, value]);
    } else {
      //get the target name-search arr for i-pop i val
      {
        cat.splice(i, 1);
      }
    }
    console.log(cat);
  };

  const handlebudgetChange = (e) => {
    const { value, checked } = e.target;
    console.log(value + " state is" + checked);

    if (checked && value == "b1") {
      setMintemp(1);
      setMaxtemp(10000);
    } else if (checked && value == "b2") {
      setMintemp(10000);
      setMaxtemp(20000);
    } else if (checked && value == "b3") {
      setMintemp(20000);
      setMaxtemp(40000);
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
  }; //check the datatype;int or string
  const handleMaxValueChange = (e) => {
    setMax(undefined);

    setMaxtemp(e.target.value);
  };

  const color = "text-blacky-dark";

  return (
    <div className={`w-full animationset ${anim}  hotelsexplore`}>
      <NavbarTest color={color} />
      <div className="flex justify-start md:hidden border-t border-t-[#eaeaea] card-shadow sticky z-[49] bg-[white] top-0 left-0 right-0">
      <div className=" sm:px-12  flex gap-4 text-base   font-bold">
          <Link
            to="/packages"
            className="px-4 py-2 cursor-pointer text-[#2f3560]"
          >
            Packages
          </Link>
          <span className="px-4 py-2 cursor-pointer border-b border-b-[2px] text-[#2f3560]  border-b-[#2f3560]">
            Hotels
          </span>
        </div>
      </div>
      <div className="md:mt-4 pt-12 md:pt-24 sm:pt-28  md:pt-32 px-4 sm:px-16 md:px-20 2xl:px-40  bg-package relative">
      <div className="flex flex-col items-center justify-center px-8 md:px-20 lg:px-40 gap-8 sm:pb-4">
          <h1 className="text-center text-xl md:text-3xl sm:text-4xl text-[#00ff98] font-bold">
          Discover your ideal tourist stay          </h1>
          <p className="text-center text-[white] md:text-lg">
          Embark on a memorable tourist stay with our curated accommodations and unforgettable experiences
          </p>
        </div>
        <div className=" flex justify-center relative bottom-[-3rem] sm:bottom-[-5rem]">
          <div className="bg-[white] py-4 sm:py-8 border-none rounded-[10px] w-[100%] lg:w-[60%] shadow-search card-shadow-1 ">
            <div className="flex gap-4  justify-center ">
              <div className="flex w-[90%] lg:w-[70%] flex-col items-start gap-2 sm:gap-4 ">
                <h1 className="font-bold text-graydust-dark  sm:text-lg text-left sm:text-xl">
                  Ready to get started !
                </h1>
                <p className="text-sm sm:text-base">Find the best hotels and resorts for your destination</p>

                <div className="flex flex-col items-start sm:items-center sm:flex-row w-full gap-4">
                  <div className="flex items-center w-[100%] sm:w-[70%] md:w-[60%] lg:w-[100%] border border-[2px] rounded-full border-[#00b777] justify-between focus:ring-0 focus:ring-offset-0 bg-[white]  outline-none py-1 sm:py-2 px-4">
                    <input
                      type="text"
                      className="border-0  outline-none w-[100%] h-[100%] text-sm text-graydust-medium focus:ring-0 focus:ring-offset-0"
                      placeholder="Enter your Destination"
                      id="destination"
                      name="destination"
                      onChange={handleSearchChange}
                    />
                  </div>
                  <button
                    className="px-8 py-2 bg-[#2f3560] text-sm sm:text-base rounded-full text-white font-bold cursor-pointer"
                    onClick={handleSClick}
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="mt-[4rem] sm:mt-[11rem] px-4 sm:px-8 py-8 sm:rounded-[10px] shadow-search sm:mx-4 sm:mx-16 md:mx-20 2xl:mx-40 bg-[white] ">
        <div className="flex justify-between items-center">
          <h1 className="text-lg sm:text-2xl md:text-3xl font-medium sm:font-bold">
            Best Deals on Hotels
          </h1>
          <div className="flex gap-3  border border-[2px] rounded-full px-2 py-[1px]">
            <button onClick={() => slider?.current?.slickPrev()}>
              <ArrowBackIosNewSharpIcon
                sx={{ fontSize: 15, color: "#03965e" }}
              />
            </button>
            <button onClick={() => slider?.current?.slickNext()}>
              <ArrowForwardIosSharpIcon
                sx={{ fontSize: 15, color: "#03965e" }}
              />
            </button>
          </div>
        </div>
        <p className="text-sm sm:text-base lg:text-lg py-2 text-graydust-dark">
          Score Big Savings on Your Next Stay - Check Out Our Best Hotel Deals
          Now!
        </p>

        <div className=" pt-8 ">
          <Slider
            ref={slider}
            className="slick-m "
            initialSlide={0}
            {...settings_1}
          >
            {data2.map((itm, i) => (
              <div key={i} className="px-1 pr-2 sm:px-2 sm:px-4  ">
                <div
                  className="mb-4 h-[100%] pb-3 card-shadow-1 rounded-t-lg  cursor-pointer"
                  onClick={() => navigate(`/list/hotel/${itm._id}`)}
                >
                  <div className="relative w-full">
                    <div className="absolute top-0 left-0 right-0 bottom-0 z-40 rounded bg-gradient-to-b from-transparent via-transparent to-black"></div>
                    {itm.images && itm.images.length !== 0 && <img
                      className="w-[100%] aspect-video skeleton rounded-lg"
                      src={generateUrl(itm.images[0])}
                      alt=""
                    />}
                    <h3 className="hidden sm:block sm:text-base md:text-base sm:font-bold z-50 text-whiteglow px-1 md:px-3  absolute bottom-[3px] md:bottom-[10px]">
                      {itm.title}
                    </h3>
                  </div>

                  <h3 className="text-xs z-50 py-1 mx-1 md:mx-3 text-[black] font-semibold sm:hidden  card-text-heading ">
                    {itm.title}
                  </h3>

                  <div className="py-1 sm:py-3 mx-1 md:mx-3 flex flex-col gap-1 items-start">
                    <h3 className="text-2xs px-1 py-[1px] rounded md:text-base mb-0 bg-[red] text-[white]">
                      <b>{itm.offertitle}</b>
                    </h3>
                    <p className="text-2xs sm:text-xs md:text-base text-graydust-medium">
                      {itm.offerdescription}
                    </p>
                    <p className="text-[0.75rem] sm:text-[0.875rem] card-text my-2 textnormal">
                      {itm.description}
                    </p>
                  </div>
                  <div className=" md:py-2 mx-2 md:mx-3 flex justify-between items-center">
                    <span className=" ">
                      <span className="text-sm font-bold md:text-2xl pr-1">
                        &nbsp;&#8377;{" "}
                        {itm.offerprice &&
                          itm.offerprice
                            .toString()
                            .replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}{" "}
                      </span>
                      <span className="text-[grey] font-bold text-xs md:text-base">
                        <strike>
                          &#8377;{" "}
                          {itm.cheapestPrice &&
                            itm.cheapestPrice
                              .toString()
                              .replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}{" "}
                        </strike>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div> */}

      <div className="mt-[3rem] sm:mt-[6rem] lg:mt-[10rem] py-8 rounded-[10px]  mx-4 sm:mx-16 md:mx-20 2xl:mx-40 ">
        <div className="flex justify-between items-center">
          <h1 className="text-lg sm:text-2xl md:text-3xl font-medium sm:font-bold">
            Browse by Types
          </h1>
        </div>

        <div className=" pt-8 justify-between text-[white] font-bold text-base md:text-xl gap-4 flex overflow-auto location-container	">
          <div
            className="type-card type-card-1 px-10 md:w-[19%] py-2 md:py-8 rounded-[10px] flex justify-center items-center text-center cursor-pointer"
            onClick={() => handleTypesubmit("hotel")}
          >
            <span className="z-10">Hotels</span>
          </div>
          <div
            className="type-card type-card-2 px-10 md:w-[19%] py-2 md:py-8 rounded-[10px] flex justify-center items-center text-center cursor-pointer"
            onClick={() => handleTypesubmit("private villa")}
          >
            <span className="z-10">private villas</span>
          </div>
          <div
            className="type-card type-card-3 px-10 md:w-[19%] py-2 md:py-8 rounded-[10px] flex justify-center items-center text-center cursor-pointer"
            onClick={() => handleTypesubmit("resort")}
          >
            <span className="z-10">Resorts</span>
          </div>
          <div
            className="type-card type-card-4 px-10 md:w-[19%] py-2 md:py-8 rounded-[10px] flex justify-center items-center text-center cursor-pointer"
            onClick={() => handleTypesubmit("home stay")}
          >
            <span className="z-10">Homestays</span>
          </div>
          <div
            className="type-card type-card-5 px-10 md:w-[19%] py-2 md:py-8 rounded-[10px] flex justify-center items-center text-center cursor-pointer"
            onClick={() => handleTypesubmit("campsite")}
          >
            <span className="z-10">campsites</span>
          </div>
        </div>
      </div>

      <div className="mt-4 sm:mt-8 sm:mt-[2rem] py-2 sm:py-8 rounded-[10px] sm:mb-12 sm:mb-0 mx-4 sm:mx-16 md:mx-20 2xl:mx-40 ">
        <div className="flex justify-between items-center">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">
            Popular Destinations
          </h1>
        </div>
        <p className="text-[14px] sm:text-base lg:text-lg py-2 sm:py-4 text-graydust-dark">
          Discover Our Most Popular Destinations and Plan Your Next Adventure
          Today!
        </p>

        
        <div className=" pt-4 sm:pt-8 justify-between  text-[white] mb-12 font-bold text-xl flex gap-[2%] location-container">
          <div
            className="flex flex-col gap-2 w-[15%] min-w-[120px] sm:min-w-[200px] rounded-[10px] overflow-hidden relative cursor-pointer"
            onClick={() => handleS2submit("kashmir")}
          >
                            <div className="imagegradient absolute top-0  w-[100%]   bottom-0 z-[100] rounded "></div>

            <img src="https://res.cloudinary.com/difxlqrlc/image/upload/q_auto/w_300/v1684520897/site/kashmir_d4vjg6.jpg" className='w-[100%] h-full object-cover' alt="" />
            <h1 className="absolute text-base sm:text-xl left-3 bottom-3 z-[101]">Kashmir</h1>
          </div>

          <div
            className="flex flex-col gap-2 w-[15%] min-w-[120px] sm:min-w-[200px] rounded-[10px] overflow-hidden relative cursor-pointer"
            onClick={() => handleS2submit("goa")}
          >                            <div className="imagegradient absolute top-0  w-[100%]   bottom-0 z-[100] rounded "></div>

            <img src="https://res.cloudinary.com/difxlqrlc/image/upload/q_auto/w_300/v1684520904/site/goa_t0lts6.jpg" alt="" />
            <h1 className="absolute left-3 bottom-3 text-base sm:text-xl z-[101]">Goa</h1>
          </div>
          <div
            className="flex flex-col gap-2 w-[15%] min-w-[120px] sm:min-w-[200px] rounded-[10px] overflow-hidden relative cursor-pointer"
            onClick={() => handleS2submit("wayanad")}
          >                            <div className="imagegradient absolute top-0  w-[100%]   bottom-0 z-[100] rounded "></div>

            <img src="https://res.cloudinary.com/difxlqrlc/image/upload/q_auto/w_300/v1684520883/site/wayanad_fh4ade.jpg" alt="" />
            <h1 className="absolute left-3 bottom-3 text-base sm:text-xl z-[101]">Wayanad</h1>
          </div>
          <div
            className="flex flex-col gap-2 w-[15%] min-w-[120px] sm:min-w-[200px] rounded-[10px] overflow-hidden relative cursor-pointer"
            onClick={() => handleS2submit("munnar")}
          >                            <div className="imagegradient absolute top-0  w-[100%]   bottom-0 z-[100] rounded "></div>

            <img src="https://res.cloudinary.com/difxlqrlc/image/upload/q_auto/w_300/v1684520889/site/munnar_rasb7w.jpg" alt="" />
            <h1 className="absolute left-3 bottom-3 text-base sm:text-xl z-[101]">Munnar</h1>
          </div>
          <div
            className="flex flex-col gap-2 w-[15%] min-w-[120px] sm:min-w-[200px] rounded-[10px] overflow-hidden relative cursor-pointer"
            onClick={() => handleS2submit("mysore")}
          >                            <div className="imagegradient absolute top-0  w-[100%]   bottom-0 z-[100] rounded "></div>

            <img src="https://res.cloudinary.com/difxlqrlc/image/upload/q_auto/w_300/v1684520888/site/mysore_r7wqlx.jpg" alt="" />
            <h1 className="absolute left-3 text-base sm:text-xl bottom-3 z-[101]">Mysore</h1>
          </div>
        </div>
      </div>
      

      <LazyLoad offset={200}><InterestForm /></LazyLoad>

      <Footer />
    </div>
  );
};

export default List1_card;
