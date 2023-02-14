import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import Sidenav from '../../components/sidenav/Sidenav';
import './packages.scss';
import useFetch from "../../hooks/useFetch"
import React from "react";
import { useEffect, useState } from 'react';
import PackageCard from '../../components/packageCard/PackageCard';
import SearchIcon from '@mui/icons-material/Search'
import PropagateLoader from "react-spinners/PropagateLoader";
import { Dropdown } from "flowbite-react/lib/cjs/components/Dropdown";

const Packages =() => {


  const [destination,setDestination]=useState("");
  
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);
  const [cat,setCat]=useState([]);
  const [cats,setCats]=useState("");

  
  
  const [anim, setAnim] = useState("")
  useEffect(()=>{
      window.addEventListener('load', setAnim("show"))

  }, [])
  const [sidenavOpen, setSideNavOpen] = useState(false)
    const handlesidenavOpen = () => {
        setSideNavOpen(!sidenavOpen);
    }
   // const [packages, setPackages] = useState([]);
    //const {data, loading, err} = useFetch("/packages");

   // const [destination,setDestination]=useState("");
   
    // const url1=`/packages?location=${destination}`
    // const url2=`/packages`
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
    const url= `/packages?destinations=${destination}&category=${cats}&max=${max || 999999}&min=${
      min || 0
    }`;
      const {data,loading,error,reFetch}=useFetch(url)

      const handleClick = () => {//for category change

        // const [cats,setCats]=useState("");    
        // const [cat,setCat]=useState([]);
  
  
         const catstr=cat.toString();
         //console.log("array to string "+catstr);
         setCats(catstr);
        // console.log(cats);
        
  
        // reFetch();//handleclick const for all filters,handle chage just sets values
        }

        const handleSClick = () => {

          reFetch();
   
         }

         const handleSubmitClick = () => {
          //console.log(min);
          const minval = parseInt(min);
          setMin(minval);
          //console.log(typeof minval);
          //console.log(max);
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
          //console.log(destination);
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
          //console.log(cat);
            }

            const handlebudgetChange = (e) => {
              const { value, checked } = e.target;
              //console.log(value + " state is" + checked);
           
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
           
              //console.log("min value is " + min + " max val is " + max);
            };
           
            const handleMinValueChange = (e) => {
              setMin(e.target.value);
            };//check the datatype;int or string
            const handleMaxValueChange = (e) => {
              setMax(e.target.value);
            };





   
    return(
        <div className="packages">
            <Navbar onclick={handlesidenavOpen}/>
            <Sidenav isOpen={sidenavOpen}/>

            <div className={`packages-body ${anim}`}>
                    <div className="packages-body-header">
                    <h2>Travel Packages and catalogue</h2>
                    <p>Create a new package by clicking the below button</p>
                    <Link to="/packages/newpackage">
                            Create Package
                        </Link>
                    </div>
                    <div className="package-search">
                      
                        <div className="search-box">
                          <input
                            type="text"
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
                       <input type="radio" className="accent-evergreen" id="default-radio-1" name="budget" value="" onChange={handlebudgetChange}
                    />{" "}
                   <label for="default-radio-1" className="pl-3 text-base text-blacky-bright">
                   {" "}
                   None
                   </label>
                   <br />
                    </Dropdown.Item>
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
                      </div>
                    <div className="package-container">
                      
                      
                        {loading ? 
                        
                        
                        <div className='loading-div'>
                        <PropagateLoader


                            color={'#32fca7'}
                            loading={loading}

                            size={15}

                            />
                      </div>
                        
                        
                        :
                        
                        
                        
                        
                        
                        data && data.map((pack) => (
                            
                            <PackageCard key={pack._id} pack={pack} />
                                
                        
                                
                        )
                        ) }
                        
                    </div>
            </div>



            
            
        </div>
    )
}

export default Packages
