import Navbar from '../../components/navbar/Navbar';
import Sidenav from '../../components/sidenav/Sidenav';
import './vendorlist.scss'
import { Link, Navigate } from 'react-router-dom';
import DataTable from '../../components/dataTable/Dtatable';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const Vendors =() => {

const navigate=useNavigate()

   const createVendor=()=>{
    navigate('/vendors/newVendor')
   }
   

    
        return(
            <div className="vendorlist">
                <Navbar />
                <Sidenav />
    
                <div className="vendorlist-body">
                   <h1>List of Vendors 
                           <Button onClick={createVendor}> Add Vendor</Button>
                         </h1>
                         
                   <DataTable />
                </div>
                
    
    
                
                
            </div>
        )
    
}

export default Vendors
