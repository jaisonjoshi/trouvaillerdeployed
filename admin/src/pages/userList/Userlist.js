import { Link } from 'react-router-dom';
import DataTable from '../../components/dataTable/DataTable';
import Navbar from '../../components/navbar/Navbar';
import Sidenav from '../../components/sidenav/Sidenav';
import './userlist.scss'
import {useEffect, useState} from 'react'
import useFetch from '../../hooks/useFetch';

const Userlist =() => {
    const [sidenavOpen, setSideNavOpen] = useState(false)
    const handlesidenavOpen = () => {
        setSideNavOpen(!sidenavOpen);
    }
    const [users, setUsers] = useState([]);
    const {data, loading, error} = useFetch("/user?isAdmin=false&isVendor=false")
    useEffect(()=>{
        setUsers(data)
    }, [data])
    return(
        <div className="userlist">
            <Navbar onclick={handlesidenavOpen}/>
            <Sidenav isOpen={sidenavOpen}/>

            <div className="userlist-body">
               <h1>List of Users</h1>
                {users != undefined && <DataTable row={users}/>}
            </div>



            
            
        </div>
    )
}
export default Userlist;