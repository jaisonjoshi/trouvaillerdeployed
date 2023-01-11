import Navbar from '../../components/navbar/Navbar';
import Sidenav from '../../components/sidenav/Sidenav';
import './vendorlist.scss'
import { Link, Navigate } from 'react-router-dom';
import DataTable from '../../components/dataTable/Dtatable';
import { useNavigate } from 'react-router-dom';
import {useState} from 'react'


const Vendors =() => {
    const [sidenavOpen, setSideNavOpen] = useState(false)
    const handlesidenavOpen = () => {
        setSideNavOpen(!sidenavOpen);
    }

const navigate=useNavigate()

   const createVendor=()=>{
    navigate('/vendors/newVendor')
   }
   
  const url="/user?isAdmin=false&isVendor=true"
    
        return(
            <div className="vendorlist">
              <Navbar onclick={handlesidenavOpen}/>
            <Sidenav isOpen={sidenavOpen}/>

    
                <div className="vendorlist-body">
                   <h2>List of Vendors </h2><br />
                   <p>List of all vendors</p>
                           <button onClick={createVendor}> Add Vendor</button>
                         
                         
                   <DataTable url={url}/>
                </div>
                
    
    
                
                
            </div>
        )
    
}

export default Vendors
