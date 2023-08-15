import { Link } from 'react-router-dom';
import DataTable from '../../components/dataTable/DataTable';
import Navbar from '../../components/navbar/Navbar';
import Sidenav from '../../components/sidenav/Sidenav';
import './userlist.scss'
import {useEffect, useState} from 'react'
import useFetch from '../../hooks/useFetch';
import Footer from '../../components/footer/Footer';

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

            <div className="userlist-body mb-16">
               <h1 className='text-2xl gradientbg text-[white] px-20 py-12'>List of Users</h1>
                <div className='px-20'>
                {users != undefined && <DataTable row={users} usertype={"user"}/>}
                </div>
            </div>



            
            <Footer />
        </div>
    )
}
export default Userlist;