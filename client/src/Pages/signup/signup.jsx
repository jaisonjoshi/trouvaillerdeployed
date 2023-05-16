import React from 'react'
import { Link } from "react-router-dom";
import loginwall from '../Assets/loginwall.webp'
import google from '../Assets/google.png'
import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
//import {AuthContext} from '../components/context/AuthContext'
import {AuthContext} from "../components/context/AuthContext";
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import VisibilityIcon from '@mui/icons-material/Visibility';

const Signup = () => {
    const axiosInstance = axios.create({
        baseURL: process.env.REACT_APP_API_URL,
    })
//register code
const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
    phone: undefined,
    email: undefined
    
  });
  function showPassword() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const { user, loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleChangeEmail = (e) =>{

    setEmail(e.target.value);
    if (!emailRegex.test(e.target.value)) {
      setEmailError('Invalid email address');
     // setEmailerr(true);
    } else {
        
      setEmailError('');
      setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));

    }
  }

  const handleClick = async (e) => {
    e.preventDefault();
    //dispatch({ type: "REGISTER_START" });
    try {
      if(!emailError)
      {
      const res = await axiosInstance.post("/auth/register", credentials);
      //if(res.data.isAdmin){//check this code to control user and admin access to login
      if(res.data){
      //dispatch({ type: "REGISTER_SUCCESS", payload: res.data.details });
      
      navigate("/login"); }
      else{
        alert('Failed to create new user. Please try again')
        //dispatch({type:"REGISTER_FAILURE",payload:{message:"Invalid input for Registration!"}})
      }
    }
  
  else{     
   // dispatch({type:"REGISTER_FAILURE",payload:{message:"Registration Unsuccessful! Please try again"}})
    alert('Kindly try again with a valid email id.')
    }} catch (error) {
      if(error.response){
    
        if (error.response && error.response.status==403) {  
            
            alert('Sorry, the username already exists!');
          }
          else if (error.response && error.response.status==405) {  
            
            alert('Sorry, the email id alredy exists!');
          }
         
          else if (error.response && error.response.status==500) {  
            
            alert('Unable to create a new user. Kindly fill all the mandatory fields.');
          }
          else{
            alert(error.message + '. Please try again later.');
        }
        }
        else if (error.request) {    
          alert('Network error! Please try again later.')
        } 
        else{
            alert(error.message + '. Please try again later.');}
      //dispatch({ type: "REGISTER_FAILURE", payload: {message:"Registration Unsuccessful! Please try again"}});
    }
  };
  const googleSignIn=async(value) => {
        
    // console.log("object inside fun"+value);//value is taken as such
    // console.log(JSON.stringify(value)) ;
    
    //reuse login code here
    dispatch({ type: "LOGIN_START" });
    try {
      
      const res = await axiosInstance.post("/auth/googlelogin", value);

      if(res.data){//check this code to control user and admin access to login
      
       
        
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      navigate("/");

                          }
      else{
        dispatch({type:"LOGIN_FAILURE",payload:{message:"Invalid credentials"}})
      }
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE", payload: {message:" "} });
      if(error.response){
         if (error.response && error.response.status==405){
      alert('The user with this mail id already exists. Please try again with a different account')
      dispatch({ type: "LOGIN_FAILURE", payload: {message:" "} });}
         else if (error.response && error.response.status==403){
        alert('Please try again with a different account');
        dispatch({ type: "LOGIN_FAILURE", payload: {message:" "} });}
        else{
          alert('Please try again with a different account!');
          } 
      }
      else if (error.request) {    
        alert('Network error! Please try again later.')
    } 
    else {
      alert(error.message + '. Please try again later.');
  }
    }
  }

  //console.log(user);





//
    return (
<div>
<div className="hidden md:grid grid-cols-1 lg:grid-cols-2 h-screen w-full">
            <div className="h-[100vh] lg:h-auto w-[100%] md:w-[70%] lg:w-[80%] 2xl:w-[60%] mx-auto pt-40">

                <h1 className="text-center m-4 font-bold text-2xl">Create an Account</h1>

                {/* <div className='mt-16'><div className="flex justify-center border border-2 rounded mx-14 gap-2 py-1 items-center "><img src={google} /><span>Sign Up with Google</span></div></div> */}
                <div className='mx-14 glogin'>
                <GoogleLogin 
                 buttonText="Sign up with Google"
                 onSuccess={credentialResponse=>{
        //console.log(credentialResponse.credential);
        //console.log(credentialResponse);
        const gid=credentialResponse.clientId
        var token=credentialResponse.credential;
        //verifyGoogleToken(token);

        var decoded = jwt_decode(credentialResponse.credential);
        //console.log(decoded);
        var checkemail=decoded.email
        var google_user={};
        google_user.username=decoded.given_name
        google_user.email=decoded.email
        var number="add phone number"
        google_user.phone=number//
        google_user.google_id=gid
        google_user.img=decoded.picture
        

        googleSignIn(google_user);

        
       // console.log(user);
      }}
      onError={()=>{
        console.log("Login failed");
      }}/>
                </div>

                <p className="text-center text-blacky-light text-sm mt-8">- OR -</p>

                <div className="flex flex-col">
                     <input type="text" className="mx-8 md:mx-14 p-3 outline-none border-none rounded mb-4 bg-[#eeeeee] focus:ring-[transparent]  focus:border-[transparent]" placeholder="Username" id="username"required onChange={handleChange}/>
                    <input type="email" className="mx-8 md:mx-14 p-3 outline-none border-none rounded mb-4 bg-[#eeeeee] focus:ring-[transparent]  focus:border-[transparent]" placeholder="E-mail" id="email" required onChange={handleChangeEmail}/>
                    { emailError && <div className="email-err" style={{ color: "red" }}>{emailError}</div>}
                    <input type="tel" className="mx-8 md:mx-14 p-3 outline-none border-none rounded mb-4 bg-[#eeeeee] focus:ring-[transparent]  focus:border-[transparent]" placeholder="Mobile Number" id="phone" required onChange={handleChange}/>
<div className='bg-[#eeeeee] mx-8 md:mx-14 rounded'>
<input type="password" className=" w-[90%] outline-none border-none focus:ring-[transparent]  focus:border-[transparent] bg-transparent" placeholder="Create Password" id="password" required onChange={handleChange}/>
<VisibilityIcon onClick={showPassword} className="text-[grey]"/>

</div>                    
                    
                    </div>
                <div className="mx-14 my-5">
                    <button className=" bg-evergreen duration-500 font-bold text-whiteglow w-full rounded-md p-2 my-5" disabled={loading} onClick={handleClick}>Create Account</button>
                    {error && <span>{error.message}</span>}
                </div>

                <p className="mx-14">Already have an account?
                    <Link className="text-[#339633]" to="/Login">    Login</Link></p>
            </div>

            <div style={{backgroundImage:`url(${loginwall})`}} className="hidden lg:flex justify-center items-center h-[100vh] bg-center bg-no-repeat bg-cover">
                
                </div>
        </div>



















        <div className="md:hidden loginbg h-[60vh] w-full">
            <div className=" bg-white absolute top-0 left-0 bottom-0 w-full  mx-auto">

                <h1 className="text-left mx-8 mb-8 mt-8 font-medium text-xl">Create an Account</h1>

                {/* <div className='mt-16'><div className="flex justify-center border border-2 rounded mx-14 gap-2 py-1 items-center "><img src={google} /><span>Sign Up with Google</span></div></div> */}
                

                <div className="flex flex-col">
                  <label htmlFor="" className='text-sm mx-8 text-[grey]'>User Name</label>
                     <input type="text" className="mx-8 md:mx-14 px-3 py-2 outline-none border-none rounded mb-4 bg-[#eeeeee] focus:ring-[transparent]  focus:border-[transparent]" placeholder="" id="username"required onChange={handleChange}/>
                    <label htmlFor=""  className='text-sm mx-8 text-[grey]'>E-mail</label>
                    <input type="email" className="mx-8 md:mx-14 px-3 py-2 outline-none border-none rounded mb-4 bg-[#eeeeee] focus:ring-[transparent]  focus:border-[transparent]" placeholder="" id="email" required onChange={handleChangeEmail}/>
                    { emailError && <div className="email-err" style={{ color: "red" }}>{emailError}</div>}
                   <label  className='text-sm mx-8 text-[grey]'>Mobile Number</label>
                    <input type="tel" className="mx-8 md:mx-14 px-3 py-2 outline-none border-none rounded mb-4 bg-[#eeeeee] focus:ring-[transparent]  focus:border-[transparent]" placeholder="" id="phone" required onChange={handleChange}/>
                    <label htmlFor=""  className='text-sm mx-8 text-[grey]'>Create Password</label>

<div className='bg-[#eeeeee] mx-8 md:mx-14 rounded'>
<input type="password" className=" w-[90%] outline-none border-none focus:ring-[transparent]  focus:border-[transparent] bg-transparent" placeholder="" id="password" required onChange={handleChange}/>
<VisibilityIcon onClick={showPassword} className="text-[grey]"/>

</div>                    
                    
                    </div>
                <div className="mx-8 ">
                    <button className=" bg-evergreen duration-500 font-bold text-whiteglow w-full rounded-full p-2 my-5" disabled={loading} onClick={handleClick}>Create Account</button>
                    {error && <span>{error.message}</span>}
                </div>

                <p className="mx-14 text-center">
                    <Link className="text-[grey] text-base" to="/Login">    Already have an account?</Link></p>
                    <p className="text-center text-blacky-light text-sm mt-4">- OR -</p>

                    <div className='mx-14 mb-8 glogin'>
                <GoogleLogin 
                 buttonText="Sign up with Google"
                 onSuccess={credentialResponse=>{
        //console.log(credentialResponse.credential);
        //console.log(credentialResponse);
        const gid=credentialResponse.clientId
        var token=credentialResponse.credential;
        //verifyGoogleToken(token);

        var decoded = jwt_decode(credentialResponse.credential);
        //console.log(decoded);
        var checkemail=decoded.email
        var google_user={};
        google_user.username=decoded.given_name
        google_user.email=decoded.email
        var number="add phone number"
        google_user.phone=number//
        google_user.google_id=gid
        google_user.img=decoded.picture
        

        googleSignIn(google_user);

        
       // console.log(user);
      }}
      onError={()=>{
        console.log("Login failed");
      }}/>
                </div>

            </div>

           
        </div>
</div>
        
    )
}
export default Signup
