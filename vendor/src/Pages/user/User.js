import Footer from '../../components/Footer/Footer'
import Header from '../../components/header/Header'
import './user.scss'
import profile from '../../Assets/profile.jpg'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { AuthContext } from '../../components/context/AuthContext';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { useEffect, useState, useContext } from 'react';
import UserCard from '../../components/userCard/UserCard';
import SearchIcon from "@mui/icons-material/Search";
import { Dropdown } from "flowbite-react/lib/cjs/components/Dropdown";

const User = () => {
    const [destination, setDestination] = useState("");
    const [searchval, setSearchval] = useState("");
    // const [checked, setChecked] = useState(false);
    const [min, setMin] = useState(undefined);
    const [max, setMax] = useState(undefined);
    const [mintemp, setMintemp] = useState(undefined);
    const [maxtemp, setMaxtemp] = useState(undefined);
    const { user, dispatch } = useContext(AuthContext);
    const [hotels,setHotels] = useState([])

  const {data, loading,error ,reFetch} = useFetch(`/hotels?vendorid=${user._id}`)
  useEffect(()=>{
      setHotels(data);
  },[data])

    const navigate = useNavigate()
    
   
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
        //console.log(destination);
      };

      const handlebudgetChange = (e) => {
        const { value, checked } = e.target;
        //console.log(value + " state is" + checked);
    
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
    
        //console.log("min value is " + min + " max val is " + max);
      };
    
      const handleMinValueChange = (e) => {
        setMin(undefined);
       
    
        setMintemp(e.target.value);
      };
      const handleMaxValueChange = (e) => {
        
        setMax(undefined);
    
        setMaxtemp(e.target.value);
      };

      const handleSClick = () => {
        // setDestination(searchval);
      reFetch(); //handleclick const for all filters,handle chage just sets values
    };
    
   
    

    const generateUrl = (url)=>{
      const [baseUrl, ...rest] = url.split("/upload/");
  
    return `${baseUrl}/upload/c_fill,w_400/f_auto/q_auto/${rest.join("/upload/")}`;
  
  
    }
   
   
    return(
        <>
      <Header />
            <div className="profile">
                <div className="left p-4 sm:p-8">
                    <UserCard />
                    <div className="profile-container-1">
                        <p className="mb-8">See all bids that you have in your region. Make fast accept the bids inorder to have the customer</p>
                        <Link to="/">Go to Bids</Link>
                    </div>
                </div>
                <div className="right">
                    <div className="property-con">
                        
                        <div className="pc-head">
                        <h2>Your Properties</h2>
                        <p>All your properties are listed here. You can update or delete them. To create a new property please the following button </p> 
                        <Link to="/vendor/createhotel">New property</Link>
                        
                       {/*  <div className="flex justify-center py-6">
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
                          onClick={handleSClick}
                             />
                         </div>
                         </div> */}
                                    

                        <div>
                       {/*  <div className="flex flex-wrap justify-center items-center w-[90%] md:w-[80%] mx-auto gap-4 py-4">
        



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
        </div> */}
                        </div>

                        </div>
                        <div className="pc-body " >
                            {hotels && hotels.length!==0 && hotels.map((hotel)=> (
                                <Link to={`/vendor/hotel/${hotel._id}`} className='pb-16 w-[90%] cursor-pointer mx-auto sm:mx-0 sm:w-[45%] md:w-[31%] mb-4 card-shadow lg:w-[22%] pb-8' >
                                <div key={hotel._id} className="shadow-lg ">
                                <div className="relative w-full">
                                      <div className="absolute top-0 left-0 right-0 bottom-0 z-40 rounded bg-gradient-to-b from-transparent via-transparent to-black"></div>
                                      {hotel.images && hotel.images.length !== 0 && <img className='w-[100%] aspect-video skeleton rounded-t-lg' src={generateUrl(hotel.images[0])} alt="" />
              }
                                  </div>
                                  <div className="pt-2 pb-2">
                                  <h3 className='text-base md:text-base font-medium z-[48] text-[black] px-2 card-text '>{hotel.title}</h3>
                                    <span className='mx-2 font-bold text-graydust-dark text-sm'>{hotel.location}</span>
                                    
                                      <div className='flex justify-between items-center'>
                                        
                                      {hotel.offers ? <div className='flex justify-between items-center'><div className="md:py-1 mx-1  flex justify-between items-center">
                                            <span className="font-bold"><span className="text-sm md:text-lg">&nbsp;&#8377; {hotel.offerprice && hotel.offerprice.toString().replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")} </span> <span  className="text-[grey] text-xs md:text-sm"><strike>&#8377; {hotel.cheapestPrice && hotel.cheapestPrice.toString().replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}  </strike></span></span>
                                                
                                        </div>                               <span className='mr-1 text-sm bg-[red] text-[white] px-2 py-1 rounded'>{hotel.offertitle}</span></div>
              :
                                                                <span className="font-bold"><span className="text-sm md:text-xl">&nbsp;  &#8377; {hotel.cheapestPrice && hotel.cheapestPrice.toString().replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}</span> </span>
              
                                        }
                                      </div>
                                  
                                  
                                  </div>
                                  
                                </div>
              
                              </Link>))}
                              <div className='flex justify-center px-4'>
                              {hotels && hotels.length== 0 && <h3 className='text-[grey] text-center'>You have no any properites till now. Create a new property.</h3>}
                           </div>
                        </div>
                    </div>
                </div>
            </div>
       <Footer />
       </>
    )
}

export default User