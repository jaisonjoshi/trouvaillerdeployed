import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import Sidenav from '../../components/sidenav/Sidenav';
import './hotels.scss';
import useFetch from "../../hooks/useFetch"
import { useEffect, useState } from 'react';
import HotelCard from '../../components/hotelCard/HotelCard';
import SearchIcon from '@mui/icons-material/Search'

const Hotels =() => {
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
            <Navbar />
            <Sidenav />

            <div className="hotels-body">
                    <div className="hotels-body-header">
                    <h1>Hotels</h1>
                    <div className="flex justify-center py-6">
        <div className="flex items-center w-[30%] justify-between focus:ring-0 focus:ring-offset-0 focus:border-graydust-medium outline-none shadow-sm shadow-gray-500 rounded-2xl text-xs py-2 pl-3">
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
                    <Link to="/hotels/newHotel">
                            Create a new Hotel
                        </Link>
                    </div>
                    <div className="hotel-container">
                      
                      
                        { data && data.map((hotel) => (
                            
                            <HotelCard key={hotel._id} hotel={hotel} />
                                
                        
                                
                        )
                        ) }
                        
                    </div>
            </div>



            
            
        </div>
    )
}

export default Hotels
