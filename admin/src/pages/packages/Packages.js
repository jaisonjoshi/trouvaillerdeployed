import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import Sidenav from '../../components/sidenav/Sidenav';
import './packages.scss';
import useFetch from "../../hooks/useFetch"
import { useEffect, useState } from 'react';
import PackageCard from '../../components/packageCard/PackageCard';
import SearchIcon from '@mui/icons-material/Search'
import PropagateLoader from "react-spinners/PropagateLoader";

const Packages =() => {
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
