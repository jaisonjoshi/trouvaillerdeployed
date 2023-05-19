import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import Sidenav from '../../components/sidenav/Sidenav';
import './hotels.scss';
import useFetch from "../../hooks/useFetch"
import { useEffect, useState } from 'react';
import HotelCard from '../../components/hotelCard/HotelCard';
import SearchIcon from '@mui/icons-material/Search'
import PropagateLoader from "react-spinners/PropagateLoader";
import { Dropdown } from 'flowbite-react/lib/cjs/components/Dropdown';
const Hotels =() => {
  const [anim, setAnim] = useState("")
  useEffect(()=>{
      window.addEventListener('load', setAnim("show"))

  }, [])
  const [sidenavOpen, setSideNavOpen] = useState(false)
    const handlesidenavOpen = () => {
        setSideNavOpen(!sidenavOpen);
    }
    //const [hotels, setHotels] = useState([]);
   // const {data, loading, err} = useFetch("/hotels");
   {/* useEffect(()=> {
         setHotels(data);
    }, [data]);*/}

    const [destination,setDestination]=useState("");
    const [searchval, setSearchval] = useState("");

    const [min, setMin] = useState(undefined);
    const [max, setMax] = useState(undefined);
    const [mintemp, setMintemp] = useState(undefined);
    const [maxtemp, setMaxtemp] = useState(undefined);
    const [type,setType] = useState(""); 


      const url = `/hotels?destinations=${destination}&max=${max || 999999}&min=${
        min || 1}&type=${type}`;
    // let url=(destination,url1,url2)=>{
      
    //   if(destination){
    //     return url1
    //   }
    //   else{
    //     return url2
    //   }
      
    // }
    // if(destination){
    //     url=url1}
    //     else
    //     url=url2;
      const {data,loading,error,reFetch}=useFetch(url)



    const handleClick = () => {
        reFetch();//handleclick const for all filters,handle chage just sets values
       }

       const handleSubmitClick = () => {
   
        const minval = parseInt(mintemp);
         setMin(minval, ()=>reFetch());
         const maxval = parseInt(maxtemp);
        setMax(maxval, ()=>reFetch());
      };


       const handleSearchChange = (e) => {
        //console.log("input val "+e.target.value);
        let tar=e.target.value;
        //console.log("IN LOWER CASE "+tar.toLowerCase())
        //console.log(t.toLowerCase())
        setDestination(tar.toLowerCase());
    //console.log(destination);
}

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

const handletype = (e) => {
  setType(e.target.value);
  //console.log(e.target.value);
}
    return(
      
        <div className="hotels">
            <Navbar onclick={handlesidenavOpen}/>
            <Sidenav isOpen={sidenavOpen}/>

            <div className={`hotels-body ${anim}`}>
                    <div className="hotels-body-header">
                    <h2>Properties</h2>
                   
                    <Link to="/hotels/newHotel">
                            Create a new Hotel
                        </Link>
                    </div>
                    <p>Browse your Villas,Resorts,Hotels,etc here</p>
                    <div className="package-search">
                      
                      <div className="search-box">
                        <input
                          type="text border-none outline-none"
                          placeholder="Destination"
                          id="destination"
                          name="destination"
                          onChange={handleSearchChange}
                        />
                        <SearchIcon
                          className="search-icon"
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
              value=""
              onChange={handlebudgetChange}
            />{" "}
            <label for="default-radio-1" className="pl-3 text-base text-blacky-bright">
              {" "}
              None
            </label>
            <br />
          </Dropdown.Item>
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

        <Dropdown
                    label="Types"
                    dismissOnClick={true}
                    class=" w flex md:justify-center sm:justify-start items-center text-blacky-light  shadow-sm shadow-gray-500 rounded-2xl text-xs">
                    <Dropdown.Item>
                        <input type="radio" className=" accent-evergreen" id="type" name="t" value="" onChange={handletype}/>
                        <label for="adventure" className="pl-3 text-base text-blacky-bright">None</label><br />
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <input type="radio" className=" accent-evergreen" id="type" name="t" value="hotel" onChange={handletype}/>
                        <label for="adventure" className="pl-3 text-base text-blacky-bright">Hotels</label><br />
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <input type="radio" className=" accent-evergreen" id="type" name="t" value="private villa" onChange={handletype}/>
                        <label for="nature" className="pl-3 text-base text-blacky-bright"> Private Villas</label><br />
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <input type="radio" className=" accent-evergreen" id="type" name="t" value="home stay" onChange={handletype}/>
                        <label for="hill" className="pl-3 text-base text-blacky-bright"> Home Stays</label><br />
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <input type="radio" className=" accent-evergreen" id="type" name="t" value="resort" onChange={handletype}/>
                        <label for="religious" className="pl-3 text-base text-blacky-bright">Resorts</label><br />
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <input type="radio" className=" accent-evergreen" id="type" name="t" value="campsite" onChange={handletype}/>
                        <label for="religious" className="pl-3 text-base text-blacky-bright">Campsites</label><br />
                    </Dropdown.Item>
                    {/* <Dropdown.Item>
                        <input type="submit" className=" rounded-md border border-blacky-bright text-blacky-light w-20 h-8 hover:bg-evergreen hover:text-blacky-dark duration-500 hover:border-none" value="Apply" />
                    </Dropdown.Item> */}
                </Dropdown>
      </div>
                    <div className="hotel-container">
                      
                      
                      { loading ?  
                      
                      <div className='loading-div'>
                        <PropagateLoader


                            color={'#32fca7'}
                            loading={loading}

                            size={15}

                            />
                      </div>
                      
                      
                      : data.map((hotel) => (
                            
                            <HotelCard key={hotel._id} hotel={hotel} />
                                
                        
                                
                        )
                        ) }
                        
                    </div>
            </div>



            
            
        </div>
    )
}

export default Hotels
