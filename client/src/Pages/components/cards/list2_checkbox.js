import React, { useState } from "react";
import useFetch from "../../../hooks/useFetch";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { Dropdown } from "flowbite-react/lib/cjs/components/Dropdown";

import Footer from "../Footer/Footer";
import NavbarTest from "../navbar/navbar";
import PropagateLoader from "react-spinners/PropagateLoader";

const List2_card = () => {
   //Page loading animation
   const [anim, setAnim] = useState("hide")
   useEffect(()=>{
       window.addEventListener('load', setAnim("show"))

   }, []);


   //axios instance declaration
   const axiosInstance = axios.create({
       baseURL: process.env.REACT_APP_API_URL,
   });




   const {data:data2} = useFetch(`/hotels?location=${location}`)

  
   const [destination,setDestination]=useState(location);
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

       reFetch();
       // if(cat.length)
       // {

       // }

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
    <div className="w-full">
      <NavbarTest color={color} />

      <div className="mt-36 flex justify-center">
        <div className=" w-[80%] sm:w-[60%] md:w-[50%] flex justify-center font-bold rounded-[1000px] outline outline-offset-1 outline-1 outline-[#0cffaa]">
          <Link
            to="/packages"
            className="w-[50%] flex justify-center items-center px-4 py-2 rounded-l-[1000px]"
          >
            <span>Packages</span>
          </Link>
          <div
            className="w-[50%] text-whiteglow flex justify-center items-center px-8 py-2 bg-[#0cffaa] rounded-r-[1000px]"
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
        <p className="text-center">
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
        {/*Drop down of categories */}

        {/* <Dropdown
                    label="Categories"
                    dismissOnClick={false}
                    class=" flex md:justify-center sm:justify-start items-center text-blacky-light  shadow-sm shadow-gray-500 rounded-2xl text-xs">
                    <Dropdown.Item>
                        <input type="radio" className=" accent-evergreen" id="honeymoon" name="category" value="honeymoon" onChange={handleChange}/>
                        <label for="honeymoon" className="pl-3 text-base text-blacky-bright"> Honeymoon</label><br />
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <input type="radio" className="accent-evergreen" id="family" name="category" value="family" onChange={handleChange} />
                        <label for="family" className="pl-3 text-base text-blacky-bright"> Family</label><br />
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <input type="radio" className="accent-evergreen" id="friends" name="category" value="friends"  onChange={handleChange}/>
                        <label for="friends" className="pl-3 text-base text-blacky-bright"> Friends</label><br />
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <input type="radio" className="accent-evergreen" id="holiday" name="category" value="holiday" onChange={handleChange}/>
                        <label for="holiday" className="pl-3 text-base text-blacky-bright"> Holiday</label><br />
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <input type="submit" className="ml-3 my-2 rounded-md border border-blacky-bright text-blacky-light w-20 h-8 hover:bg-evergreen hover:text-blacky-dark duration-500 hover:border-none" value="Apply" />
                    </Dropdown.Item>
                </Dropdown> */}

        <Dropdown
          label="Budget"
          dismissOnClick={false}
          class=" flex md:justify-center sm:justify-start items-center text-blacky-light  shadow-sm shadow-gray-500 rounded-2xl text-xs"
        >
          <Dropdown.Item>
            <input
              type="checkbox"
              className="accent-evergreen"
              id="budget1"
              name="budget"
              value="b1"
              onChange={handlebudgetChange}
            />{" "}
            <label for="budget1" className="pl-3 text-base text-blacky-bright">
              {" "}
              Less than 10,000
            </label>
            <br />
          </Dropdown.Item>
          <Dropdown.Item>
            <input
              type="checkbox"
              className="accent-evergreen"
              id="family"
              name=""
              value="b2"
              onChange={handlebudgetChange}
            />
            <label for="family" className="pl-3 text-base text-blacky-bright">
              {" "}
              10,000 - 20,000
            </label>
            <br />
          </Dropdown.Item>
          <Dropdown.Item>
            <input
              type="checkbox"
              className=" accent-evergreen"
              id="friends"
              name=""
              value="b3"
              onChange={handlebudgetChange}
            />
            <label for="friends" className="pl-3 text-base text-blacky-bright">
              {" "}
              20,000 - 40,000
            </label>
            <br />
          </Dropdown.Item>
          <Dropdown.Item>
            <input
              type="checkbox"
              className=" accent-evergreen"
              id="holiday"
              name=""
              value="b4"
              onChange={handlebudgetChange}
            />
            <label for="holiday" className="pl-3 text-base text-blacky-bright">
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
                        <input type="checkbox" className=" accent-evergreen" id="adventure" name="" value="" />
                        <label for="adventure" className="pl-3 text-base text-blacky-bright">Adventure</label><br />
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <input type="checkbox" className=" accent-evergreen" id="nature" name="" value="" />
                        <label for="nature" className="pl-3 text-base text-blacky-bright"> Nature</label><br />
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <input type="checkbox" className=" accent-evergreen" id="hill" name="" value="" />
                        <label for="hill" className="pl-3 text-base text-blacky-bright"> Hill Station</label><br />
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <input type="checkbox" className=" accent-evergreen" id="religious" name="" value="" />
                        <label for="religious" className="pl-3 text-base text-blacky-bright"> Religious</label><br />
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <input type="submit" className=" rounded-md border border-blacky-bright text-blacky-light w-20 h-8 hover:bg-evergreen hover:text-blacky-dark duration-500 hover:border-none" value="Apply" />
                    </Dropdown.Item>
                </Dropdown> */}
      </div>
      {loading ? (
        <div className="loading-div">
          <PropagateLoader color={"#32fca7"} loading={loading} size={15} />
        </div>
      ) : (
        <div className="px-8 flex flex-wrap md:gap-[10%] lg:gap-[5%]">
          {data.map((item) => (
            <div key={item._id} className="md:w-[45%] lg:w-[30%] pb-8">
              <img
                className=" object-cover w-full rounded-lg"
                src={item.images[0]}
                alt=""
              />
              <div className="pt-5">
                <h3 className="text-xl font-bold text-blacky-medium">
                  {item.title}
                </h3>
                <p className="text-sm text-justify text-blacky-light card-text">
                  {item.description}
                </p>
              </div>
              <div className=" pb-5 flex justify-between items-center">
                <p className="text-evergreen text-xl font-bold">
                  ₹{item.cheapestPrice && item.cheapestPrice.toString().replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}
                </p>
                <Link to={`/list/hotel/${item._id}`}>
                  <button className="bg-evergreen text-blacky-light font-semibold rounded-md w-32 h-10">
                    Whats app
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
