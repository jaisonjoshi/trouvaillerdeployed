import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react';
import {useNavigate} from "react-router-dom"
import axios from "axios";
import MenuIcon from '@mui/icons-material/Menu';
import useFetch from '../../../hooks/useFetch';
import './navbar.css';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faYoutube , faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "80%",
  bgcolor: 'background.paper',
  border: 'none',
  borderRadius:'5px',
  boxShadow: 24,
  p: 2,
};




const NavbarTest = ({color}) => {




  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
})
  //const { user } = useContext(AuthContext);
  
  const { user, loading, error, dispatch } = useContext(AuthContext);
  
  const navigate = useNavigate();

  /* let url;
  if(user){
    url = `/user/find/${user._id}`
  }
  else{
    url = "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
  }
  const {data} = useFetch(url)
  console.log(data) */
  //logout code fetching
  const handleClick = async (e) => {
      e.preventDefault();
      dispatch({ type: "LOGOUT" });
      try {
        const res = await axiosInstance.get("/auth/logout");
        // localStorage.removeItem("user");
        sessionStorage.removeItem("user");
        if(res){
        
        navigate("/");
  
                            }
        
      } catch (err) {
        dispatch({ type: "LOGOUT", payload: {message:"logged out"} });
      }
    };
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const [bg, setbg] = useState('bg-trans')
    const [colord, setColor] = useState(()=> {
      if(color == "text-whiteglow"){
        return "md:text-[white]"
      }
      else{
        return "md:text-[#444343]"
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
      if(windowHeight> 200){
           // if scroll up show the navbar
              setColor("text-[#444343]")
              setbg('bg-[white]');

  
        // remember current page location to use in the next move
      }
      else{
        setColor(()=>{
          if(color == "text-whiteglow"){
            setbg('bg-trans');

            return "md:text-[white] "
          }
          else{
            setbg('bg-[white]');

            return "md:text-[black] "
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
    <div className={`w-full pr-4 z-[10000000000000000] top-0 left-0 navbar-shadow flex justify-between fixed right-0 ${bg}  transition-all h-[60px] py-4  duration-300 ease-in-out transition-all duration-500 ease-in-out navbar-padding`}
fluid={true} rounded={true}

>
<div>
  <Link to="/">
<img src={require('../../Assets/TrouvaillerGreen .png')}
                className="mr-3 ml-4 md:ml-12 sm:ml-12 h-6 sm:h-9 lg:ml-16 2xl:ml-36 "
                alt="Trouvailler Logo"
            />
</Link>
</div>
<NavModel open={open} setOpen={setOpen} user={user} handleClick={handleClick}/>
<MenuIcon sx={{fontSize:30, color: isScrolled ? 'black' : 'white'}} onClick={handleOpen} className='block md:hidden'/>
<div className="flex hidden md:flex md:order-2 gap-5 ml-0 lg:ml-12 items-center  nav-login-box">
{ user?<div className='nav-login flex pb-3 md:pb-0 md:justify-center items-center'><Link to="/user"><span className='flex items-center gap-[10px] text-lg'><img src= {user ? user.img : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg" } className="w-[35px] h-[35px] rounded-full"/><h2 className='md:hidden'>{user.username}</h2></span></Link>
        <button className="bg-evergreen text-whiteglow text-sm border border-none duration-500 px-4 py-2 mx-4 hover:bg-evergreendark rounded-md hover:text-whiteglow" onClick={handleClick}>Logout</button></div>:(
        <div className="md:flex ">
         
           <button className={  ` font-bold text-whiteglow ${colord} text-sm border border-[1px] border-evergreen duration-500 px-4 py-2 mx-4  rounded-full `}>
            <Link className="" to="/login" >Login/SignUp</Link>
            </button>

          
          </div>)
}

</div>
<div className='flex gap-12 hidden md:flex'>
<Link to="/" 
                class={`py-3 px-1 lg:pt-2 text-base font-bold   ${colord} md:hover:text-evergreen duration-500`}>
                Home
            </Link>

            { user?(<Link to="/bid-status"
                class={`py-3 px-1 lg:pt-2 text-base font-bold  ${colord} hidden lg:block hover:text-evergreen duration-500`}>
                My bids
            </Link>):
            (<Link to="/login"
                class={`py-3 px-1 lg:pt-2 text-base flex gap-1 font-bold ${colord}  hidden lg:block hover:text-evergreen duration-500`}>
                My bids
            </Link>)}

        {/*     <Navbar.Link href="/"
                class={`p-3 sm:p-0 text-lg text-blacky-dark hover:text-evergreen duration-500`}>
                About
            </Navbar.Link> */}
             <Link 
                class={`py-3 px-1 lg:pt-2 text-base  ${colord}  hover:text-evergreen duration-500`} >
                <Link to="/hotels" className='font-bold flex gap-1'>Hotels</Link>
            </Link>
            <Link
                class={`py-3 px-1 lg:pt-2 text-base  ${colord}  hover:text-evergreen duration-500`} >
                <Link to="/packages" className='font-bold flex gap-1'>Packages</Link>
            </Link>
</div>


            
</div>
    
</div>
  )
}




const NavModel = ({open, setOpen, user, data, handleClick}) => {
      const handleClose = () => setOpen(false);
      const handleNavClick = () => setOpen(false);

  
  return(
        <Modal
        open={open}
        onClose={handleClose}
       
      >
        <Box sx={style}>
            <div className='flex justify-end'>
              <CloseIcon sx={{fontSize:20}} onClick={handleClose} />
            </div>
            {user?<div className='shadow-md navbar-gradient my-2 px-4 py-3'>
              <div className='flex'>
                <div className='w-[30%]'>
                  <img className='flex justify-center items-center rounded-full w-[70%]' src={user ? user.img : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"} alt="" />
                </div>
                <div className='w-[70%] flex flex-col justify-center items-start'>
                  <p className='text-xs'>Logined as</p>
                  <h1 className='font-bold text-sm'>{user.username}</h1>
                </div>
              </div>
              <div className='py-2 text-xs font-bold '>
                <ul className='flex flex-col gap-4 py-2'>
                  <Link to='/user'><li className='flex gap-2 items-center text-graydust-dark'><span><PersonOutlineIcon sx={{fontSize:20}}/></span> <span>Profile</span> </li></Link>
                  <Link onClick={handleClick}><li className='flex gap-2 items-center text-graydust-dark'><span><LogoutIcon sx={{fontSize:20}}/></span> <span>Logout</span></li></Link>

                </ul>
              </div>
              </div>
            :(
        <div className="shadow-md navbar-gradient my-2 px-4 py-3">
          <p className=' text-sm'>You haven't logined yet! Login or signUp now to avail offers
          </p>
           <div className='flex gap-3 py-2 '>
           <button className="bg-evergreen text-whiteglow text-sm border border-none duration-500 px-3 py-1 hover:bg-evergreendark rounded-md hover:text-whiteglow">
            <Link className="" to="/login" >Login</Link>
            </button>

            <button className="bg-evergreen text-whiteglow text-sm border border-none duration-500 px-3 py-1 hover:bg-evergreendark rounded-md hover:text-whiteglow">
            <Link className="" to="/signup">Signup</Link>
            </button>
           </div>
          </div>)}

          <div className='py-3 text-base '>
            {/* <h1>Quick Links</h1> */}
            <ul className='px-3 text-graydust-dark'>
              <Link to='/' onClick={handleNavClick}><li className='py-1 hover:text-[#03965e] '>Home</li></Link>
              <Link to="/hotels" onClick={handleNavClick}><li className='py-1 hover:text-[#03965e]'>Hotels</li></Link>

              <Link to="/packages" onClick={handleNavClick}><li className='py-1 hover:text-[#03965e]'>Packages</li></Link>

              <Link to="/what-is-bid" onClick={handleNavClick}><li className='py-1 hover:text-[#03965e]'>Bid now</li></Link>


            </ul>
          </div>
          <hr />
          <div className='py-2 flex justify-between'>
            <div className='w-[30%] sm:w-[15%]'>
              <img className='w-[100%]' src={require('../../Assets/TrouvaillerGreen .png')} alt="" />
            </div>
            <div className='text-[#03965e] flex '>
                  <a href="https://www.facebook.com/travelwithtrouvailler/">
                    <div className=' mx-1 w-6 h-6  text-center'><FontAwesomeIcon icon={faFacebookF} /></div>
                  </a>
                  <a href="https://www.youtube.com/@travelwithtrouvailler6162">
                    <div className=' mx-1 w-6 h-6  text-center'><FontAwesomeIcon icon={faYoutube} /></div>
                  </a>
                  <a href="https://www.instagram.com/trouvailler_guides/">
                    <div className=' mx-1 w-6 h-6  text-center'><FontAwesomeIcon icon={faInstagram} /></div>
                  </a>
            </div>
          </div>
        </Box>
      </Modal>
  )
}




export default NavbarTest