import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react';
import {useNavigate} from "react-router-dom"
import axios from "axios";
import { Navbar } from 'flowbite-react/lib/cjs/components/Navbar';
import { Button } from 'flowbite-react/lib/cjs/components/Button';
import './navbar.css';
const NavbarTest = ({color}) => {
  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
})
  //const { user } = useContext(AuthContext);

  const { user, loading, error, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  //logout code fetching
  const handleClick = async (e) => {
      e.preventDefault();
      dispatch({ type: "LOGOUT" });
      try {
        const res = await axiosInstance.get("/auth/logout");
        localStorage.removeItem("user");
        if(res){
        
        navigate("/");
  
                            }
        
      } catch (err) {
        dispatch({ type: "LOGOUT", payload: {message:"logged out"} });
      }
    };
    const [shownav, setShow] = useState("fixed opacity-100 bg-trans")
    const [lastScrollY, setLastScrollY] = useState(0);
    const [colord, setColor] = useState('text-whiteglow')
    useEffect(()=> {
      window.addEventListener('scroll', setNav)
      
      return() => {
        window.removeEventListener('scroll',setNav)
      }
    })

    const setNav=() => {
      if (window !== undefined) {
        let windowHeight = window.scrollY;
        windowHeight > 200 ? setShow('absolute opacity-0'): setShow('fixed opacity-100 bg-trans');
      if(windowHeight> 200){
        if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
          setShow('absolute'); 
        } else { // if scroll up show the navbar
          setShow('fixed bg-[white] py-[1rem] navbar-shadow');  
          setColor("text-blacky-dark")
        }
  
        // remember current page location to use in the next move
        setLastScrollY(window.scrollY);
      }
      if(windowHeight<200 && color == "text-whiteglow"){
        setColor("text-whiteglow")
      }
        
    }}
  return (
    <div>
    <Navbar className={` w-full z-50 top-0 left-0   text-whiteglow ${shownav} transition-all duration-300 ease-in-out py-12 px-8 transition-all duration-500 ease-in-out `}
fluid={true}

>
<Navbar.Brand href="https://flowbite.com/">
<img src={require('../../Assets/TrouvaillerGreen .png')}
                className="mr-3 h-6 sm:h-9 pl-10"
                alt="Trouvailler Logo"
            />

</Navbar.Brand>
<Navbar.Toggle />
<Navbar.Collapse className="flex items-center">
<div className="flex md:order-2 gap-7 ml-20 items-center">
{ user?<div><span>{user.username}</span>
        <button className="bg-whiteglow text-blacky-dark text-sm border border-none duration-500 px-4 py-2 mx-4 hover:bg-blacky-dark rounded-md hover:text-whiteglow" onClick={handleClick}>Logout</button></div>:(
        <div className="md:flex my-4">
           <button className="bg-whiteglow text-blacky-dark text-sm border border-none duration-500 px-4 py-2 mx-4 hover:bg-blacky-dark rounded-md hover:text-whiteglow">
            <Link className="" to="/login" >Login</Link>
            </button>

            <button className="bg-evergreen text-blacky-dark text-sm border border-none duration-500 px-4 py-2 mx-4 hover:bg-blacky-dark rounded-md hover:text-whiteglow">
            <Link className="" to="/signup">Signup</Link>
            </button>
          </div>)
}

</div>

<Navbar.Link href="/" 
                class={`p-3 sm:p-0 text-lg ${colord}  hover:text-evergreen duration-500`}>
                Home
            </Navbar.Link>
            <Navbar.Link href="/bid-status"
                class={`p-3 sm:p-0 text-lg ${colord}  hover:text-evergreen duration-500`}>
                My bids
            </Navbar.Link>
        {/*     <Navbar.Link href="/"
                class={`p-3 sm:p-0 text-lg text-blacky-dark hover:text-evergreen duration-500`}>
                About
            </Navbar.Link> */}
            <Navbar.Link href="/"
                class={`p-3 sm:p-0 text-lg ${colord}  hover:text-evergreen duration-500`} >
                Contact
            </Navbar.Link>
</Navbar.Collapse>
</Navbar>
    
</div>
  )
}

export default NavbarTest