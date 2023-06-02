import React, { useState, useEffect } from "react";
import useFetch from "../../../hooks/useFetch";
import { Link } from "react-router-dom";
import ArrowBackIosNewSharpIcon from "@mui/icons-material/ArrowBackIosNewSharp";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";

import Footer from "../Footer/Footer";
import NavbarTest from "../navbar/navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router";
import InterestForm from "./interestForm";
import LazyLoad from "react-lazyload";

const List2_card = ({ setlocation, settype }) => {
  const slider = React.useRef(null);
  const navigate = useNavigate();

  const [anim, setAnim] = useState("hide");
  useEffect(() => {
    window.addEventListener("load", setAnim("show"));
  }, []);
  const { data: data2 } = useFetch("/packages?offers=true");
  var settings1 = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: false,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.5,
        },
      },
    ],
  };
  var settings3 = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3.5,
    rows: 2,

    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.5,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1.5,
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
  console.log(destination);
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
  const { data, loading, error, reFetch } = useFetch(
    "/packages?rating=1&rating=2&rating=3"
  );

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

  const handleSClick = () => {
    setlocation(destination);
    if (destination.trim() !== "") {
      navigate(`/sep/${destination}`);
    } else {
      alert("Please enter a location to search");
    }
  };
  const handleS2submit = (value) => {
    setlocation(value);

    navigate(`/sep/${value}`);
  };
  const handleTypesubmit = (value) => {
    settype(value);

    navigate(`/sept/${value}`);
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
  const generateUrl = (url)=>{
    const [baseUrl, ...rest] = url.split("/upload/");

  return `${baseUrl}/upload/c_fill,w_400/f_auto/q_auto/${rest.join("/upload/")}`;


  }
  const [startX, setStartX] = useState(0);

  const handleMouseDown = (e) => {
    setStartX(e.clientX);
  };

  const handleMouseUp = (e,id) => {
    const endX = e.clientX;
    const distance = Math.abs(startX - endX);

    if (distance < 5) {
      // Perform navigation
      // Your navigation logic goes here
      navigate(`/list/package/${id}`  )
  };
}
  return (
    <div className={`w-full animationset ${anim} bg-[white] hotelsexplore`}>
      <NavbarTest color={color} />

      <div className="flex justify-start mb-20 md:hidden card-shadow fixed z-[49] bg-[white] top-[60px] left-0 right-0">
        <div className=" flex gap-4 text-base   font-bold">
          <span className="px-4 py-2 border-b border-b-[2px] text-[#2f3560]  border-b-[#2f3560] ]">
            Packages
          </span>
          <Link
            to="/hotels"
            className="px-4 py-2 cursor-pointer cursor-pointer text-[#2f3560]"
          >
            Hotels
          </Link>
        </div>
      </div>

      <div className="mt-[60px] pt-24 sm:pt-28  md:pt-32 px-4 sm:px-16 md:px-20 2xl:px-40  bg-package relative">
        <div className="flex flex-col items-center justify-center px-8 md:px-20 lg:px-40 gap-8 sm:pb-4">
          <h1 className="text-center text-3xl sm:text-4xl text-[#00ff98] font-bold">
            {" "}
            Discover Your Dream Destination with Us
          </h1>
          <p className="text-center text-[white] text-base md:text-lg">
            Find and Book Your Dream Tour Package Now!
          </p>
        </div>

        <div className=" flex justify-center relative bottom-[-3rem] sm:bottom-[-5rem]">
          <div className="bg-[white] py-8 border-none rounded-[10px] w-[90%] lg:w-[60%] shadow-search card-shadow-1 ">
            <div className="flex gap-4  justify-center ">
              <div className="flex w-[90%] lg:w-[70%] flex-col items-start gap-4 ">
                <h1 className="font-bold text-graydust-dark ml-2 text-lg text-left sm:text-xl">
                  Ready to get started !
                </h1>
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
                    className="px-8 py-2 bg-[#2f3560] rounded-full text-white font-bold cursor-pointer"
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
      <div className=" mt-[6rem] sm:mt-[11rem] pb-8 px-4 sm:px-16 md:px-20 2xl:px-40">
        <h1 className="text-lg sm:text-2xl md:text-3xl font-medium sm:font-bold">
          Top selling packages
        </h1>
        <p className="text-sm sm:text-base text-graydust-dark lg:text-lg py-2 sm:py-4">
          Join the Many Happy Travelers Who Have Experienced Our Top-Selling
          Tour Packages - Book Yours Now!
        </p>
        <Slider {...settings3} className="hello-slick pt-4 sm:pt-8 pb-4">
          {data.map((item) => (
            <div className="px-4" onMouseDown={handleMouseDown} onMouseUp={(e)=>handleMouseUp(e, item._id)}>
              {/*               <Link to={`/list/package/${item._id}`}>
               */}{" "}
              <div
                key={item._id}
                className="w-[100%] sm:w-[80%] sm:w-auto mx-auto sm:mx-0 bg-whiteglow cursor-pointer mb-4 card-shadow rounded pb-4 relative"
              >
                <div className="relative">
                  {/*                     <div className="absolute top-0 left-0 right-0 bottom-0 z-40 rounded bg-gradient-to-b from-transparent via-transparent to-black"></div>
                   */}{" "}
                  {item.images && item.images.length !== 0 &&<img
                    className="w-full aspect-video skeleton rounded-lg"
                    src={generateUrl(item.images[0])}
                    alt=""
                  />}
                  {item.offers && (
                    <span className="text-sm font-bold absolute top-[10px] right-[10px] text-white bg-[red] px-2 py-1 rounded">
                      {item.offertitle}
                    </span>
                  )}
                </div>
                <div className="py-3 mx-3">
                  <h3 className="text-sm sm:text-xl font-medium sm:font-bold z-50 text-black  card-text-heading">
                    {item.title}
                  </h3>
                  <span className="font-bold text-sm md:text-base text-[#03965e]">
                    {item.duration}
                  </span>

                  <p className="text-[0.75rem] sm:text-[0.875rem] card-text my-2 textnormal ">
                    {item.description}
                  </p>
                </div>

                <div className="md:py-2 mx-3 ">
                  {item.offers ? (
                    <div className="flex flex-col items-start gap-2">
                      <div className="flex gap-2 items-center">
                        <span className="text-sm md:text-lg font-bold sm:font-bold">
                          ₹{" "}
                          {item.offerprice &&
                            item.offerprice
                              .toString()
                              .replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}
                        </span>
                        <strike>
                          <span className=" text-xs text-graydust-dark sm:font-bold">
                            ₹{" "}
                            {item.cheapestPrice
                              .toString()
                              .replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}
                          </span>
                        </strike>
                        <span className="text-xs text-graydust-dark">
                          Per person
                        </span>
                      </div>{" "}
                    </div>
                  ) : (
                    <div className="flex justify-start gap-1 items-center">
                      <span className=" text-sm md:text-lg font-bold">
                        ₹{" "}
                        {item.cheapestPrice &&
                          item.cheapestPrice
                            .toString()
                            .replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}
                      </span>{" "}
                      <span className="text-xs text-graydust-dark">
                        Per person
                      </span>
                    </div>
                  )}
                </div>
              </div>
              {/*               </Link>{" "}
               */}{" "}
            </div>
          ))}
        </Slider>
      </div>

      <div className=" flex flex-wrap gap-[4%] lg:gap-[10%] px-4 sm:px-16 md:px-20 2xl:px-40">
        <div
          className="relative w-[90%]  mx-auto md:mx-0 md:w-[48%] lg:w-[45%] mb-8 cursor-pointer"
          onClick={() => handleTypesubmit("honeymoon")}
        >
          <div className="absolute top-0 left-0 right-0 bottom-0 z-40 rounded bg-[#00000085]"></div>

          <img src="https://res.cloudinary.com/difxlqrlc/image/upload/q_auto/f_auto/w_1000/v1684520311/site/Honeymoon_iogbop.jpg" className="w-[100%] rounded-[10px]" alt="" />
          <div className="absolute top-[50%] flex flex-col gap-1 translate-y-[-50%] left-4 lg:left-8 z-[45] w-[80%] 2xl:w-[50%]">
            <p className="text-[white] text-xs sm:text-sm xl:text-base w-[100%]">
              Create unforgettable honeymoon memories with our curated packages.
            </p>
            <span className="text-lg lg:text-2xl xl:text-3xl font-bold text-[white] ">
              HoneyMoon Packages
            </span>
          </div>
        </div>

        <div
          className="relative w-[90%] mx-auto md:mx-0 md:w-[48%] lg:w-[45%] mb-8 cursor-pointer"
          onClick={() => handleTypesubmit("adventure")}
        >
          <div className="absolute top-0 left-0 right-0 bottom-0 z-40 rounded bg-[#00000085]"></div>

          <img src="https://res.cloudinary.com/difxlqrlc/image/upload/q_auto/f_auto/w_1000/v1684520331/site/adventure_r19fpm.jpg" className="w-[100%] rounded-[10px]" alt="" />
          <div className="absolute top-[50%] flex flex-col gap-1 translate-y-[-50%] left-4 lg:left-8 z-[45] w-[80%] 2xl:w-[50%]">
            <p className="text-[white] text-xs sm:text-sm xl:text-base w-[100%]">
              Discover premier adventure destinations and break free to
              celebrate.
            </p>
            <span className="text-lg lg:text-2xl xl:text-3xl font-bold text-[white] ">
              Adventure Travel
              <br className="hidden lg:block" /> Packages
            </span>
          </div>
        </div>

        <div
          className="relative w-[90%] mx-auto md:mx-0 md:w-[48%] lg:w-[45%] mb-8 cursor-pointer"
          onClick={() => handleTypesubmit("family")}
        >
          <div className="absolute top-0 left-0 right-0 bottom-0 z-40 rounded bg-[#00000085]"></div>

          <img src="https://res.cloudinary.com/difxlqrlc/image/upload/q_auto/f_auto/w_1000/v1684520351/site/family_qstl2o.jpg" className="w-[100%] rounded-[10px]" alt="" />
          <div className="absolute top-[50%] flex flex-col gap-1 translate-y-[-50%] left-4 lg:left-8 z-[45]  w-[80%] 2xl:w-[50%]">
            <p className="text-[white] text-xs sm:text-sm xl:text-base w-[100%]">
              Experience unforgettable moments with Trouvailler's family travel
              packages.{" "}
            </p>
            <span className=" text-lg lg:text-2xl xl:text-3xl font-bold text-[white] ">
              Family Trip
              <br className="hidden lg:block" /> Packages
            </span>
          </div>
        </div>

        <div
          className="relative w-[90%] mx-auto md:mx-0 md:w-[48%] lg:w-[45%] mb-8 cursor-pointer"
          onClick={() => handleTypesubmit("friends")}
        >
          <div className="absolute top-0 left-0 right-0 bottom-0 z-40 rounded bg-[#00000085]"></div>

          <img src="https://res.cloudinary.com/difxlqrlc/image/upload/q_auto/f_auto/w_1000/v1684520357/site/friends_lpwyuz.jpg" className="w-[100%] rounded-[10px]" alt="" />
          <div className="absolute  flex flex-col gap-1 top-[50%] translate-y-[-50%] left-4 lg:left-8 z-[45] w-[80%] 2xl:w-[50%]">
            <p className="text-[white] text-xs sm:text-sm xl:text-base w-[100%]">
              Celebrate in style with Trouvailler's tailored tour packages for
              your group.
            </p>
            <span className=" text-lg lg:text-2xl xl:text-3xl font-bold text-[white] ">
              Friends Travel
              <br className="hidden lg:block" /> Packages
            </span>
          </div>
        </div>
      </div>

      <div className="bg-[#f2f2f2] py-2 pb-4 sm:pb-10">
        <div className="mt-6 sm:mt-[4rem] px-4 sm:px-8 pt-8 sm:pb-8  sm:rounded-[10px] shadow-search sm:mx-4 sm:mx-16 md:mx-20 2xl:mx-40 bg-[white] ">
          <div className="flex justify-between items-center">
            <h1 className="text-md sm:text-2xl md:text-3xl font-medium sm:font-bold">
              Trending discounts on Tour Packages
            </h1>
            <div className="flex gap-3 border border-[2px] rounded-full px-2 py-[1px]">
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
          <p className="text-sm sm:text-base text-graydust-dark lg:text-lg py-2 ">
            Hurry! Grab the Best Deals on Trending Tour Packages - Book Now and
            Save Big!
          </p>

          <div className=" pt-8 ">
            <Slider ref={slider} {...settings1} className="slick-m offerpacks ">
              {data2.map((item, i) => (
                <div
                  key={item._id}
                  className=" w-[91%] ml-3  pb-3 mb-10 card-shadow-1 rounded-md cursor-pointer"
                  onClick={() => navigate(`/list/package/${item._id}`)}
                >
                  <div className="relative w-full">
                    <div className="absolute top-0 left-0 right-0 bottom-0 z-40 rounded bg-gradient-to-b from-transparent via-transparent to-black"></div>

                    {item.images && item.images.length !== 0 &&<img
                      src={generateUrl(item.images[0])}
                      alt=""
                      className="aspect-video skeleton w-full rounded-md h-auto w-full "
                    />}
                    <div className="absolute opacity-90 bottom-2 w-[96%] z-50 left-[50%] translate-x-[-50%] flex flex-col rounded-lg p-2">
                      <h1 className="font-bold text-white  text-sm sm:text-base">
                        {item.offerdescription}
                      </h1>
                    </div>
                  </div>

                  <div className="px-2 py-4 flex flex-col items-start">
                    <div className="flex items-start justify-between w-full ">
                      {" "}
                      <span className="w-[70%] text-blacky-medium font-semibold sm:font-bold text-sm md:text-[1rem] card-text-heading ">
                        {item.title}
                      </span>
                      <span className="w-[30%] text-[#03965e] flex items-center justify-end  text-right font-bold text-xs">
                        {item.duration}
                      </span>
                    </div>
                    <p className="text-[0.75rem] sm:text-[0.875rem] card-text my-2 textnormal">
                      {item.description}
                    </p>
                    <h3 className="text-2xs px-2 py-[4px] rounded md:text-base mb-0 bg-[red] text-[white]">
                      <b>{item.offertitle}</b>
                    </h3>
                  </div>

                  <div className="px-2 flex flex-col">
                    <div className="flex justify-start items-center gap-2">
                      <span className="font-bold text-lg sm:text-2xl">
                        {item.offerprice &&
                          item.offerprice
                            .toString()
                            .replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}{" "}
                        &#8377;
                      </span>
                      <strike className="text-xs sm:text-base text-graydust-medium">
                        <span>5,000 &#8377;</span>
                      </strike>
                    </div>
                    <span className="text-xs sm:text-sm text-graydust-medium">
                      per person
                    </span>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>

      <div className="px-4 pt-8 sm:pt-20 pb-8 sm:px-16 md:px-20 2xl:px-40">
        <div className="relative ">
          <div className="absolute top-0 left-0 right-0 bottom-0 z-40 rounded-[20px] rounded bg-[#0000004a]"></div>
          <img
            src="https://res.cloudinary.com/difxlqrlc/image/upload/q_auto/f_auto/v1684523704/site/internationalmobile_lbdpxh.jpg"
            className="block md:hidden rounded-[20px]"
            alt=""
          />

          <img
            src="https://res.cloudinary.com/difxlqrlc/image/upload/q_auto/f_auto/v1684523647/site/international_intqgj.jpg"
            className="hidden md:block rounded-[20px] w-full"
            alt=""
          />
          <div className="absolute w-[80%] lg:w-[50%] z-[45] text-[white] flex flex-col items-start gap-2 lg:gap-5 left-[10%] top-[50%] translate-y-[-50%]">
            <h1 className="font-medium sm:font-bold text-lg md:text-2xl lg:text-4xl">
              International Destinations
            </h1>
            <p className="text-xs sm:text-base lg:text-lg">
              Trouvailler has been curated the most wonderful international
              trips for you. Grab the best deals on international travel
              packages
            </p>
            <span
              className="flex gap-1 text-sm sm:text-md lg:text-xl items-center border border-[2px] border-[white] my-2 rounded-full px-2 sm:px-4 sm:py-1 cursor-pointer"
              onClick={() => handleTypesubmit("international")}
            >
              <span>Explore</span> <ArrowForwardIcon sx={{ fontSize: 15 }} />
            </span>
          </div>
        </div>
      </div>

      <div className="mt-8 sm:mt-[2rem] py-2 sm:py-8 rounded-[10px] mb-12 sm:mb-0 mx-4 sm:mx-16 md:mx-20 2xl:mx-40 ">
        <div className="flex justify-between items-center">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">
            Popular Destinations
          </h1>
        </div>
        <p className="text-sm sm:text-base lg:text-lg py-2 sm:py-4 text-graydust-dark">
          Discover Our Most Popular Destinations and Plan Your Next Adventure
          Today!
        </p>

        
        <div className=" pt-8 justify-between text-[white] mb-12 font-bold text-xl flex gap-[2%] location-container">
          <div
            className="flex flex-col gap-2 w-[15%] min-w-[200px] rounded-[10px] overflow-hidden relative cursor-pointer"
            onClick={() => handleS2submit("kashmir")}
          >
            <img src="https://res.cloudinary.com/difxlqrlc/image/upload/q_auto/w_300/v1684520897/site/kashmir_d4vjg6.jpg" alt="" />
            <h1 className="absolute left-3 bottom-3">Kashmir</h1>
          </div>

          <div
            className="flex flex-col gap-2 w-[15%] min-w-[200px] rounded-[10px] overflow-hidden relative cursor-pointer"
            onClick={() => handleS2submit("goa")}
          >
            <img src="https://res.cloudinary.com/difxlqrlc/image/upload/q_auto/w_300/v1684520904/site/goa_t0lts6.jpg" alt="" />
            <h1 className="absolute left-3 bottom-3">Goa</h1>
          </div>
          <div
            className="flex flex-col gap-2 w-[15%] min-w-[200px] rounded-[10px] overflow-hidden relative cursor-pointer"
            onClick={() => handleS2submit("wayanad")}
          >
            <img src="https://res.cloudinary.com/difxlqrlc/image/upload/q_auto/w_300/v1684520883/site/wayanad_fh4ade.jpg" alt="" />
            <h1 className="absolute left-3 bottom-3">Wayanad</h1>
          </div>
          <div
            className="flex flex-col gap-2 w-[15%] min-w-[200px] rounded-[10px] overflow-hidden relative cursor-pointer"
            onClick={() => handleS2submit("munnar")}
          >
            <img src="https://res.cloudinary.com/difxlqrlc/image/upload/q_auto/w_300/v1684520889/site/munnar_rasb7w.jpg" alt="" />
            <h1 className="absolute left-3 bottom-3">Munnar</h1>
          </div>
          <div
            className="flex flex-col gap-2 w-[15%] min-w-[200px] rounded-[10px] overflow-hidden relative cursor-pointer"
            onClick={() => handleS2submit("mysore")}
          >
            <img src="https://res.cloudinary.com/difxlqrlc/image/upload/q_auto/w_300/v1684520888/site/mysore_r7wqlx.jpg" alt="" />
            <h1 className="absolute left-3 bottom-3">Mysore</h1>
          </div>
        </div>
      </div>
      <LazyLoad offset={200}><InterestForm /></LazyLoad>

      <Footer />
    </div>
  );
};

export default List2_card;
