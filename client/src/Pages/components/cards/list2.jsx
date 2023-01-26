import React, { useState, useEffect } from "react";
import useFetch from "../../../hooks/useFetch";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { Dropdown } from "flowbite-react/lib/cjs/components/Dropdown";

import Footer from "../Footer/Footer";
import NavbarTest from "../navbar/navbar";
import BarLoader from "react-spinners/BarLoader";

const List2_card = () => {
  const [anim, setAnim] = useState("hide")
  useEffect(()=>{
      window.addEventListener('load', setAnim("show"))

  }, [])
  const [destination, setDestination] = useState("");
  const [searchval, setSearchval] = useState("");
  // const [checked, setChecked] = useState(false);
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);
  const [mintemp, setMintemp] = useState(undefined);
    const [maxtemp, setMaxtemp] = useState(undefined);
  
  const url = `/hotels?destinations=${destination}&max=${max || 999999}&min=${
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
    <div className={`w-full animationset ${anim}`}>
      <NavbarTest color={color} />

      <div className="mt-36 flex justify-center">
        <div className=" w-[80%] sm:w-[60%] md:w-[50%] flex justify-center font-bold rounded-[1000px] border border-[#00b771]">
          <Link
            to="/packages"
            className="w-[50%] flex justify-center items-center px-4 py-2 rounded-l-[1000px]"
          >
            <span>Packages</span>
          </Link>
          <div
            className="w-[50%] text-whiteglow flex justify-center items-center px-8 py-2 bg-[#00b771] rounded-r-[1000px]"
            to="/hotels"
          >
            Hotels
          </div>
        </div>
      </div>

      <hr className="w-[80%] my-5 mx-auto" />
      <div className="flex flex-col items-center justify-center px-8 md:px-20 lg:px-40 gap-8 pb-8">
        <h1 style={{ fontSize: "32px" }} className="text-center">
          Find the best stay for you
        </h1>
        <p className="text-center text-blacky-light text-sm md:text-[18px]">
          The best hotel picks no matter where you are from or where you want to
          reach. Checkout the wide range to pick the one that best fit your need
          keeping your pockets at ease.Happy Stay!
        </p>
      </div>
      <div className="flex justify-center py-6">
        <div className="flex items-center w-[70%] md:w-[60%] lg:w-[30%] justify-between focus:ring-0 focus:ring-offset-0 focus:border-graydust-medium outline-none shadow-sm shadow-gray-500 rounded-2xl text-xs py-2 pl-3">
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
      <div className="flex flex-wrap justify-center items-center w-[90%] md:w-[80%] mx-auto gap-4 py-4">
        

        {/* <Dropdown
                  
                </Dropdown> */}

        <Dropdown
          label="Budget"
          dismissOnClick={false}
          class=" flex md:justify-center sm:justify-start items-center text-blacky-light  shadow-sm shadow-gray-500 rounded-2xl text-xs"
        >
          <Dropdown.Item>
            <input
              type="radio"
              className="accent-evergreen"
              id="default-radio-1"
              name="budget"
              value="b1"
              onChange={handlebudgetChange}
            />{" "}
            <label for="default-radio-1" className="pl-3 text-base text-blacky-bright">
              {" "}
              Less than 10,000
            </label>
            <br />
          </Dropdown.Item>
          <Dropdown.Item>
            <input
              type="radio"
              className="accent-evergreen"
              id="default-radio-2"
              name="budget"
              value="b2"
              onChange={handlebudgetChange}
            />
            <label for="default-radio-2" className="pl-3 text-base text-blacky-bright">
              {" "}
              10,000 - 20,000
            </label>
            <br />
          </Dropdown.Item>
          <Dropdown.Item>
            <input
              type="radio"
              className=" accent-evergreen"
              id="default-radio-3"
              name="budget"
              value="b3"
              onChange={handlebudgetChange}
            />
            <label for="default-radio-3" className="pl-3 text-base text-blacky-bright">
              {" "}
              20,000 - 40,000
            </label>
            <br />
          </Dropdown.Item>
          <Dropdown.Item>
            <input
              type="radio"
              className=" accent-evergreen"
              id="default-radio-4"
              name="budget"
              value="b4"
              onChange={handlebudgetChange}
            />
            <label for="default-radio-4" className="pl-3 text-base text-blacky-bright">
              {" "}
              40,000 - 50,000
            </label>
            <br />
          </Dropdown.Item>

          <div className="flex">
            <div className="flex items-center">
              <Dropdown.Item>
                <label for="min_budget" className="text-blacky-bright">
                  Min
                </label>
                <input
                  type="number"
                  placeholder="₹1000"
                  className="ml-2 pl-3 outline-none border text-graydust-medium w-24 h-10 rounded-xl"
                  id="min_budget"
                  name="min_budget"
                  onChange={handleMinValueChange}
                />
              </Dropdown.Item>
            </div>
            <div className="flex items-center">
              <Dropdown.Item>
                <label for="max_budget" className="ml-6 text-blacky-bright">
                  Max
                </label>
                <input
                  type="number"
                  placeholder="₹3000"
                  className="ml-2 pl-3 outline-none border text-graydust-medium w-24 h-10 rounded-xl"
                  id="max_budget"
                  name="max_budget"
                  onChange={handleMaxValueChange}
                />
              </Dropdown.Item>
            </div>
          </div>
          <Dropdown.Item>
            <input
              type="submit"
              className="align-middle ml-3 my-5 rounded-md border border-blacky-bright text-blacky-light w-20 h-8 hover:bg-evergreen hover:text-blacky-dark duration-500 hover:border-none"
              value="Apply"
              onClick={handleSubmitClick}
            />
          </Dropdown.Item>
        </Dropdown>

        {/* <Dropdown
                    label="Activities"
                    dismissOnClick={false}
                    class=" w flex md:justify-center sm:justify-start items-center text-blacky-light  shadow-sm shadow-gray-500 rounded-2xl text-xs">
                    <Dropdown.Item>
                        <input type="radio" className=" accent-evergreen" id="adventure" name="" value="" />
                        <label for="adventure" className="pl-3 text-base text-blacky-bright">Adventure</label><br />
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <input type="radio" className=" accent-evergreen" id="nature" name="" value="" />
                        <label for="nature" className="pl-3 text-base text-blacky-bright"> Nature</label><br />
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <input type="radio" className=" accent-evergreen" id="hill" name="" value="" />
                        <label for="hill" className="pl-3 text-base text-blacky-bright"> Hill Station</label><br />
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <input type="radio" className=" accent-evergreen" id="religious" name="" value="" />
                        <label for="religious" className="pl-3 text-base text-blacky-bright"> Religious</label><br />
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <input type="submit" className=" rounded-md border border-blacky-bright text-blacky-light w-20 h-8 hover:bg-evergreen hover:text-blacky-dark duration-500 hover:border-none" value="Apply" />
                    </Dropdown.Item>
                </Dropdown> */}
      </div>
      {loading ? (
        <div className="loading-div">
          <BarLoader color={"#32fca7"} loading={loading} size={15} />
        </div>
      ) : (
        <div className="px-8 lg:px-28 flex flex-wrap md:gap-[10%] lg:gap-[5%]">
          {data.map((item) => (
            <div key={item._id} className="pb-16 md:w-[45%] lg:w-[30%] pb-8">
              <img
                className="aspect-video rounded-lg skeleton  w-full rounded-lg"
                src={item.images[0]}
              />
              <div className="pt-5">
                <h3 className="text-xl font-bold text-blacky-medium">
                  {item.title}
                </h3>
                <p className="text-sm md:text-[17px] text-blacky-light card-text">
                  {item.description}
                </p>
              </div>
              <div className=" pb-5 flex justify-between items-center">
                <p className="text-evergreen text-xl font-bold">
                  ₹{item.cheapestPrice}
                </p>
                <Link to={`/list/hotel/${item._id}`}>
                  <button className="bg-evergreen text-whiteglow font-semibold text-sm px-8 py-2 rounded-md ">
                    View
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}

      <Footer />
    </div>
  );
};

export default List2_card;
