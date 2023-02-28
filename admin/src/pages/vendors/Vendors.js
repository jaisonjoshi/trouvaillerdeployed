import Navbar from '../../components/navbar/Navbar';
import Sidenav from '../../components/sidenav/Sidenav';
import './vendorlist.scss'
import { Link, Navigate } from 'react-router-dom';
import DataTable from '../../components/dataTable/DataTable';
import { useNavigate } from 'react-router-dom';
import {useEffect, useState} from 'react'
import useFetch from '../../hooks/useFetch';


const Vendors =() => {
    const [sidenavOpen, setSideNavOpen] = useState(false)
    const handlesidenavOpen = () => {
        setSideNavOpen(!sidenavOpen);
    }

const navigate=useNavigate()

   const createVendor=()=>{
    navigate('/vendors/newVendor')
   }
   const [vendors, setVendors] = useState([]);
   const {data, loading, error} = useFetch("/user?isAdmin=false&isVendor=true")
   useEffect(()=>{
       setVendors(data)
   }, [data])
   
    
        return(
            <div className="vendorlist">
              <Navbar onclick={handlesidenavOpen}/>
            <Sidenav isOpen={sidenavOpen}/>

    
                <div className="vendorlist-body">
                   <div className='flex justify-between'>   
                   <h2>List of Vendors </h2><br />
                    <button onClick={createVendor} className="px-4 py-1 bg-[#00b771] rounded text-[white]"> Add Vendor</button>
                   </div>
                         
                         
                  {vendors != undefined && <DataTable row={vendors} usertype={"vendor"}/>}
                </div>
                
    
    
                
                
            </div>
        )
    
}

export default Vendors
