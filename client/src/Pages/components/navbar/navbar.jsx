import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react';
import {useNavigate} from "react-router-dom"
import axios from "axios";
import avatar from '../../Assets/avatar.png'
import useFetch from '../../../hooks/useFetch';
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
  console.log(user)

  let url;
  if(user){
    url = `/user/find/${user._id}`
  }
  else{
    url = "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
  }
  const {data} = useFetch(url)
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
    const [shownav, setShow] = useState("absolute opacity-100 bg-trans")
    const [lastScrollY, setLastScrollY] = useState(0);
    const [colord, setColor] = useState(()=> {
      if(color == "text-whiteglow"){
        return "md:text-[white]"
      }
      else{
        return "md:text-[black]"
      }
    })
    useEffect(()=> {
      window.addEventListener('scroll', setNav)
      
      return() => {
        window.removeEventListener('scroll',setNav)
      }
    })

    const setNav=() => {
      if (window !== undefined) {
        let windowHeight = window.scrollY;
/*         windowHeight > 200 ? setShow('absolute opacity-0'): setShow('fixed opacity-100 bg-trans');
 */      if(windowHeight> 200){
            if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
              setShow('absolute'); 
              
            } else { // if scroll up show the navbar
              setShow('fixed bg-[white] py-[1rem] bar-shadow');  
              setColor("text-[black]")
            }
  
        // remember current page location to use in the next move
        setLastScrollY(window.scrollY);
      }
      else{
        setShow("absolute opacity-100 bg-trans")
        setColor(()=>{
          if(color == "text-whiteglow"){
            return "md:text-[white]"
          }
          else{
            return "md:text-[black]"
          }
        })
      }
     /*  if(windowHeight<200){
        setColor("")
      } 
      else{
        setColor("whmd:text-[white]itetext")
      } 
      */
        
    }}
  return (
    <div>
    <Navbar className={` w-full z-50 top-0 left-0 ${shownav} transition-all duration-300 ease-in-out px-8 transition-all duration-500 ease-in-out `}
fluid={true}

>
<Navbar.Brand>
  <Link to="/">
<img src={require('../../Assets/TrouvaillerGreen .png')}
                className="mr-3 h-6 sm:h-9 pl-4 md:pl-10"
                alt="Trouvailler Logo"
            />
</Link>
</Navbar.Brand>
<Navbar.Toggle className="outline-none nav-toggle-icon"/>
<Navbar.Collapse className="flex items-center">
<div className="flex md:order-2 gap-7 ml-0 md:ml-20 items-center  nav-login-box">
{ user?<div className='nav-login flex pb-3 md:pb-0 md:justify-center items-center'><Link to="/user"><span className='flex items-center gap-[10px] text-lg'><img src={data.img} className="w-[45px] h-[45px] rounded-full"/><h2 className='md:hidden'>{user.username}</h2></span></Link>
        <button className="bg-evergreen text-whiteglow text-sm border border-none duration-500 px-4 py-2 mx-4 hover:bg-evergreendark rounded-md hover:text-whiteglow" onClick={handleClick}>Logout</button></div>:(
        <div className="md:flex ">
           <button className="bg-evergreen text-whiteglow text-sm border border-none duration-500 px-4 py-2 mx-4 hover:bg-evergreendark rounded-md hover:text-whiteglow">
            <Link className="" to="/login" >Login</Link>
            </button>

            <button className="bg-evergreen text-whiteglow text-sm border border-none duration-500 px-4 py-2 mx-4 hover:bg-evergreendark rounded-md hover:text-whiteglow">
            <Link className="" to="/signup">Signup</Link>
            </button>
          </div>)
}

</div>

<Navbar.Link href="/" 
                class={`p-3 md:p-2 text-lg   ${colord} md:hover:text-evergreen duration-500`}>
                Home
            </Navbar.Link>

            { user?(<Navbar.Link href="/bid-status"
                class={`p-3 md:p-2 text-lg  ${colord}  hover:text-evergreen duration-500`}>
                My bids
            </Navbar.Link>):
            (<Navbar.Link href="/login"
                class={`p-3 md:p-2 text-lg ${colord}  hover:text-evergreen duration-500`}>
                My bids
            </Navbar.Link>)}

        {/*     <Navbar.Link href="/"
                class={`p-3 sm:p-0 text-lg text-blacky-dark hover:text-evergreen duration-500`}>
                About
            </Navbar.Link> */}
            <Navbar.Link href="/"
                class={`p-3 md:p-2 text-lg ${colord}  hover:text-evergreen duration-500`} >
                Contact
            </Navbar.Link>
</Navbar.Collapse>
</Navbar>
    
</div>
  )
}

export default NavbarTest