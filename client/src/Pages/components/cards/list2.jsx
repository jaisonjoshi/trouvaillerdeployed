
import React, { useState } from 'react'
import useFetch from '../../../hooks/useFetch';
import { Link } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import { Dropdown } from 'flowbite-react/lib/cjs/components/Dropdown';
import Footer from '../Footer/Footer';
import NavbarTest from '../navbar/navbar';

const List2_card = () => {
  const {data,loading,error}=useFetch("/hotels")
  const [ info, setInfo] = useState({})
    const [url, setUrl] = useState("");
    const handleSearchChange = (e) => {
        setInfo((prev) => ({...prev, [e.target.name] : e.target.value}))
    }

    const handleChange = (e) =>{
        const {name,value, checked } =e.target;
        console.log(`${value} is ${checked}`)

        if(checked) {
            setInfo((prev) => ({...prev, [e.target.name] : e.target.value}))
        }
        else{
            setInfo((prev) => ({...prev, [e.target.name] :""}))
        }
        
    }
    console.log(info)
    const handleClick = () => {
        console.log("i'm going to search for", info.destination,info.checkboxValues)

    }
    const color = "text-blacky-dark"
  return (
    <div className='w-full'><NavbarTest color={color}/>
    
    <div className='mt-36 flex justify-center'>
                <div className=' w-[80%] sm:w-[60%] md:w-[50%] flex justify-center font-bold rounded-[1000px] outline outline-offset-1 outline-1 outline-[#0cffaa]'>
                    <Link to="/packages" className='w-[50%] flex justify-center items-center px-4 py-2 rounded-l-[1000px]'>
                        <span>Packages</span>
                    </Link>
                    <div  className='w-[50%] text-whiteglow flex justify-center items-center px-8 py-2 bg-[#0cffaa] rounded-r-[1000px]' to="/hotels">Hotels</div>
                </div>
            </div>
            
           
            <hr className="w-[80%] my-5 mx-auto" />
                <div className="flex flex-col items-center justify-center px-8 md:px-20 lg:px-40 gap-8 pb-8">
                <h1 style={{fontSize:"32px"}} className='text-center'>Find the best stay for you</h1>
                <p className='text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab sequi tempora dolor, praesentium atque corrupti nulla ipsum consequuntur debitis. Eius nesciunt necessitatibus unde dolores autem eum accusantium alias consectetur quisquam.</p>
            </div>
            <div className="flex justify-center py-6">
                    <div className="flex items-center w-[70%] md:w-[60%] lg:w-[30%] justify-between focus:ring-0 focus:ring-offset-0 focus:border-graydust-medium outline-none shadow-sm shadow-gray-500 rounded-2xl text-xs py-2 pl-3">
                        <input type="text border-none outline-none w-[80%] h-[100%] text-2xl" placeholder="Destination" id= "searchValue" name="destination" onChange={handleSearchChange}/><SearchIcon  className='w=[20%] mx-3 cursor-pointer' onClick={handleClick}/>
                    </div>
                </div>
            <div className="flex flex-wrap justify-center items-center w-[90%] md:w-[80%] mx-auto gap-4 py-4">
               

                {/*Drop down of categories */}

                <Dropdown
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
                </Dropdown>

                <Dropdown
                    label="Budget"
                    dismissOnClick={false}
                    class=" flex md:justify-center sm:justify-start items-center text-blacky-light  shadow-sm shadow-gray-500 rounded-2xl text-xs">
                    <Dropdown.Item>
                        <input type="checkbox" className="accent-evergreen" id="budget1" name="budget" value="below10000" onChange={handleChange} />
                        <label for="budget1" className="pl-3 text-base text-blacky-bright"> Less than 10,000</label><br />
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <input type="checkbox" className="accent-evergreen" id="family" name="" value="" />
                        <label for="family" className="pl-3 text-base text-blacky-bright"> 10,000 - 20,000</label><br />
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <input type="checkbox" className=" accent-evergreen" id="friends" name="" value="" />
                        <label for="friends" className="pl-3 text-base text-blacky-bright"> 20,000 - 40,000</label><br />
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <input type="checkbox" className=" accent-evergreen" id="holiday" name="" value="" />
                        <label for="holiday" className="pl-3 text-base text-blacky-bright"> 40,000 - 50,000</label><br />
                    </Dropdown.Item>

                    <div className="flex">
                        <div className="flex items-center">
                            <Dropdown.Item>
                                <label for="min_budget" className="text-blacky-bright">Min</label>
                                <input type="number" id="min_budget" name="min_budget" placeholder="₹1000" className="ml-2 pl-3 outline-none border text-graydust-medium w-24 h-10 rounded-xl" />
                            </Dropdown.Item>
                        </div>
                        <div className="flex items-center">
                            <Dropdown.Item>
                                <label for="max_budget" className="ml-6 text-blacky-bright">Max</label>
                                <input type="number" id="max_budget" name="max_budget" placeholder="₹3000" className="ml-2 pl-3 outline-none border text-graydust-medium w-24 h-10 rounded-xl" />
                            </Dropdown.Item>
                        </div>
                    </div>
                    <Dropdown.Item>
                        <input type="submit" className="align-middle ml-3 my-5 rounded-md border border-blacky-bright text-blacky-light w-20 h-8 hover:bg-evergreen hover:text-blacky-dark duration-500 hover:border-none" value="Apply" />
                    </Dropdown.Item>
                </Dropdown>

                <Dropdown
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
                </Dropdown>


               
            </div>
      {loading?("Loading"):(
        <div className='px-8 flex flex-wrap md:gap-[10%] lg:gap-[5%]'>
        
        {data.map((item)=>(
          <Link className="md:w-[45%] lg:w-[30%] pb-8" to={`/list/hotel/${item._id}`}>
          <div className="" key={item._id}>
        <img className=' object-cover w-full rounded-lg' src={item.images[0]} alt="" />
        <div className='pt-5'>
            <h3 className='text-xl font-bold text-blacky-medium'>{item.title}</h3>
            <p className='text-sm text-justify text-blacky-light card-text'>{item.description}</p>    
        </div>
        <div className=" pb-5 flex justify-between items-center">
            <p className="text-evergreen text-xl font-bold">₹{item.cheapestPrice}</p>
            <button className="bg-evergreen text-blacky-light font-semibold rounded-md w-32 h-10">Whats app</button>
        </div>
        </div></Link>
        ))}
        </div>
      )}
       


<Footer /></div>
    

)
}

export default List2_card