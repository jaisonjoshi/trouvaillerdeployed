import {useState, useEffect} from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidenav from '../../components/sidenav/Sidenav'
import './vendorlist.scss'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useNavigate ,useLocation} from "react-router-dom";
import useFetch from '../../hooks/useFetch'

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
    const [hotels, setHotels] = useState([])
    const {data : data2 } = useFetch(`/hotels?vendorid=${id}`)
    useEffect(()=> {
        setHotels(data2)
    }, [data2])
    console.log(hotels)
    useEffect(()=>{
        setVendor(data)
    },[data])
    const vendorDelete = async (id) => {
    
        if(window.confirm("Delete this user ?") == true) {
          await axiosInstance.delete(`/user/${id}`);
          navigate('/')
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


                    </div>
                </div>
                <div>
                    <h1 className='text-3xl'>Properties</h1>
                    <div className=" py-8 flex  flex-wrap md:gap-[10%] sm:gap-[8%] md:gap-[3%] lg:gap-[2%]">
          {data2 && data2.map((item) => (
              <Link to={`/hotels/${item._id}`} className='pb-16 w-[90%] cursor-pointer mx-auto sm:mx-0 sm:w-[45%] md:w-[31%] mb-4 shadow-lg lg:w-[22%] pb-8'>
                  <div key={item._id} className=" ">
                  <div className="relative w-full">
                        <div className="absolute top-0 left-0 right-0 bottom-0 z-40 rounded bg-gradient-to-b from-transparent via-transparent to-black"></div>
                        <img className='w-[100%] aspect-video skeleton rounded-t-lg' src={item.images[0]} alt="" />

                    </div>
                    <h3 className='text-base md:text-lg pt-2 font-medium z-[48] text-[black] px-2  '>{item.title}</h3>
                    <p className='mx-2 font-bold text-graydust-dark text-sm'>{item.location}</p>
                    <p className='mx-2 text-[gray] text-xs sm:text-sm card-text'>{item.description}</p>
                    <div className="pt-2">
                        <div className='flex justify-between items-center'>
                        {item.offers ? <div className='flex justify-between items-center'><div className="md:py-1 mx-1  flex justify-between items-center">
                              <span className="font-bold"><span className="text-base md:text-xl">&nbsp; &#8377; {item.offerprice && item.offerprice.toString().replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")} </span> <span  className="text-[grey] text-2xs md:text-base"><strike>&#8377; {item.cheapestPrice && item.cheapestPrice.toString().replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}  </strike></span></span>
                                  
                          </div>                              <span className='mr-1 text-2xs bg-[red] text-[white] px-2 py-1 rounded'>{item.offertitle}</span></div>
:
                                                  <span className="font-bold"><span className="text-base md:text-xl">&nbsp; &#8377; {item.cheapestPrice && item.cheapestPrice.toString().replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")} </span> </span>

                          }
                        </div>
                    
                      
                    </div>
                    
                  </div>

                </Link>
          ))}
        </div>

                </div>
            </div>



        </div>
    )
}

export default VendorDetails