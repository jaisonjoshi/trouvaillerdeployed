import {useState, useEffect} from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidenav from '../../components/sidenav/Sidenav'
import './vendorlist.scss'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useNavigate ,useLocation} from "react-router-dom";
import useFetch from '../../hooks/useFetch'
import HotelCard from '../../components/hotelCard/HotelCard'

const VendorDetails = () => {
    const [anim, setAnim] = useState("")
  useEffect(()=>{
      window.addEventListener('load', setAnim("show"))

  }, [])
  const navigate = useNavigate();

  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  })
  const [sidenavOpen, setSideNavOpen] = useState(false)
    const handlesidenavOpen = () => {
        setSideNavOpen(!sidenavOpen);
    }
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const [vendor, setVendor] = useState({})
    const {data, loading, error } = useFetch(`/user/find/${id}`)
    const [hotels, setHotels] = useState(null)
    const {data : data2 } = useFetch(`/hotels?vendorid=${id}`)
    useEffect(()=> {
        setHotels(data2)
        console.log(hotels)
    }, [data2])
    console.log(hotels)
    useEffect(()=>{
        setVendor(data)
    },[data])
    const vendorDelete = async (id) => {
        if(hotels !== null){
            if(hotels.length == 0){
                if(window.confirm("Delete this user ?") == true) {
                    await axiosInstance.delete(`/user/${id}`);
                    navigate('/')
                  }
                  
            }
            else{
                window.alert("Please note that vendor removal is only possible if the vendor does not own any properties. In order to proceed with vendor deletion, all properties associated with this vendor must either be deleted or transferred to a different vendor account.")
              }
            
        }
        
      }

    return(
        <div>
            <Navbar onclick={handlesidenavOpen}/>
            <Sidenav isOpen={sidenavOpen}/>
            <div className={`vendorlist-body ${anim}`}>
                <div className='flex justify-between items-center'>
                    <span className='text-4xl'>Vendor Details</span>
                    <button className='bg-[#00ffa5] px-4 py-1 rounded' onClick={()=>vendorDelete(id)}>Delete vendor</button>
                </div>
                <div className='my-20 flex gap-20'>
                    <div>
                        {vendor.img ? <img  className='rounded-[10px] h-[200px] w-[200px]' src={vendor.img} alt="" /> : <span className='h-[200px] w-[200px] flex justify-center items-center text-center rounded-full bg-[#f0f0f0]'>No profile photo</span> }
                    </div>
                    <div className='flex flex-col gap-4 justify-center'>
                        <span className='text-2xl'>{vendor.username}</span>
                        <span className='text-lg'>E-mail : {vendor.email}</span>
                        <span className='text-lg'>Phone : {vendor.phone}</span>
                        <span className='text-lg'>Vendor ID : {vendor._id}</span>


                    </div>
                </div>
                <div>
                    <h1 className='text-3xl'>Properties</h1>
                    <div className=" py-8 flex  flex-wrap gap-[3%]">
          {data2 && data2.map((item) => (
             <div className='w-[30%]'>
                <HotelCard itm={item} k={item._id}/>
             </div>
          ))}
        </div>

                </div>
            </div>



        </div>
    )
}

export default VendorDetails