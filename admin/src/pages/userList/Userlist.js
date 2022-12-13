import { Link } from 'react-router-dom';
import DataTable from '../../components/dataTable/Dtatable';
import Navbar from '../../components/navbar/Navbar';
import Sidenav from '../../components/sidenav/Sidenav';
import './userlist.scss'
import {useState} from 'react'
import useFetch from '../../hooks/useFetch';

const Userlist =() => {
    const [sidenavOpen, setSideNavOpen] = useState(false)
    const handlesidenavOpen = () => {
        setSideNavOpen(!sidenavOpen);
    }
    
    return(
        <div className="userlist">
            <Navbar onclick={handlesidenavOpen}/>
            <Sidenav isOpen={sidenavOpen}/>

            <div className="userlist-body">
               <h1>List of Users</h1>
                <DataTable />
            </div>



            
            
        </div>
    )
}
export default Userlist;