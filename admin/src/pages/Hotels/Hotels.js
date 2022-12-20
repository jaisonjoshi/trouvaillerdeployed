import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import Sidenav from '../../components/sidenav/Sidenav';
import './hotels.scss';
import useFetch from "../../hooks/useFetch"
import { useEffect, useState } from 'react';
import HotelCard from '../../components/hotelCard/HotelCard';
import SearchIcon from '@mui/icons-material/Search'
import PropagateLoader from "react-spinners/PropagateLoader";

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
   
    const url1=`/hotels?location=${destination}`
    const url2=`/hotels`
    let url=(destination,url1,url2)=>{
      
      if(destination){
        return url1
      }
      else{
        return url2
      }
      
    }
    if(destination){
        url=url1}
        else
        url=url2;
      const {data,loading,error,reFetch}=useFetch(url)



    const handleClick = () => {
        reFetch();//handleclick const for all filters,handle chage just sets values
       }
       const handleSearchChange = (e) => {
        //console.log("input val "+e.target.value);
        let tar=e.target.value;
        //console.log("IN LOWER CASE "+tar.toLowerCase())
        //console.log(t.toLowerCase())
        setDestination(tar.toLowerCase());
    console.log(destination);
}
    return(
      
        <div className="hotels">
            <Navbar onclick={handlesidenavOpen}/>
            <Sidenav isOpen={sidenavOpen}/>

            <div className={`hotels-body ${anim}`}>
                    <div className="hotels-body-header">
                    <h2>Hotels</h2>
                    
                    <Link to="/hotels/newHotel">
                            Create a new Hotel
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
