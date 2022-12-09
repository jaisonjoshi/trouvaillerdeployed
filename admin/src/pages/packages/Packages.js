import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import Sidenav from '../../components/sidenav/Sidenav';
import './packages.scss';
import useFetch from "../../hooks/useFetch"
import { useEffect, useState } from 'react';
import PackageCard from '../../components/packageCard/PackageCard';
import SearchIcon from '@mui/icons-material/Search'

const Packages =() => {
   // const [packages, setPackages] = useState([]);
    //const {data, loading, err} = useFetch("/packages");

    const [destination,setDestination]=useState("");
   
    const url1=`/packages?location=${destination}`
    const url2=`/packages`
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
        <div className="packages">
            <Navbar />
            <Sidenav />

            <div className="packages-body">
                    <div className="packages-body-header">
                    <h1>Travel Packages and catalogue</h1>
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
                    <Link to="/packages/newpackage">
                            Create a new package
                        </Link>
                    </div>
                    <div className="package-container">
                      
                      
                        { data && data.map((pack) => (
                            
                            <PackageCard key={pack._id} pack={pack} />
                                
                        
                                
                        )
                        ) }
                        
                    </div>
            </div>



            
            
        </div>
    )
}

export default Packages
