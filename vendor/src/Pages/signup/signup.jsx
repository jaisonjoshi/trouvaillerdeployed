import React from 'react'
import { Link } from "react-router-dom";
import loginwall from '../../Assets/loginwall.webp'
import google from '../../Assets/google.png'
import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../../components/context/AuthContext';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";



const Signup = () => {
    const axiosInstance = axios.create({
        baseURL: process.env.REACT_APP_API_URL,
    })
//register code
const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
    phone: undefined,
    email: undefined,
    isVendor:true
    
  });

  const { user, loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "REGISTER_START" });
    try {
      const res = await axiosInstance.post("/auth/register", credentials);
      //if(res.data.isAdmin){//check this code to control user and admin access to login
      if(res.data){
      dispatch({ type: "REGISTER_SUCCESS", payload: res.data.details });
      
      navigate("/login"); }
      else{
        dispatch({type:"REGISTER_FAILURE",payload:{message:"Invalid input for Registration!"}})
      }
    } catch (err) {
     // dispatch({ type: "REGISTER_FAILURE", payload: {message:error}});
     dispatch({ type: "REGISTER_FAILURE", payload: {message:"Registration Unsuccessful! Please try again"}});
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
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: {message:"Invalid"} });
    }

    //
  
 
};
  console.log(user);





//
    return (

        <div className="grid grid-cols-1 lg:grid-cols-2 h-screen w-full">
            <div className="h-[100vh] lg:h-auto w-[95%] md:w-[70%] lg:w-[80%] 2xl:w-[60%] mx-auto pt-40">

                <h1 className="text-center m-4 font-bold text-2xl">Create an Account</h1>

                {/* <div className='mt-16'><div className="flex justify-center border border-2 rounded mx-14 gap-2 py-1 items-center "><img src={google} /><span>Sign Up with Google</span></div></div> */}
                <GoogleLogin onSuccess={credentialResponse=>{
        //console.log(credentialResponse.credential);
        console.log(credentialResponse);
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
        google_user.isVendor=true;

        googleSignIn(google_user);

        
        console.log(user);
      }}
      onError={()=>{
        console.log("Login failed");
      }}/>

                <p className="text-center text-blacky-light text-sm mt-8">- OR -</p>

                <div className="flex flex-col">
                     <input type="text" className="mx-14 p-3 outline-none border border-t-transparent border-l-transparent border-r-transparent focus:ring-0 focus:ring-offset-0 border-b-blacky-medium hover:border-b-evergreen duration-500" placeholder="Your Name" id="username"required onChange={handleChange}/>
                    <input type="email" className="mx-14 p-3 outline-none border border-t-transparent border-l-transparent border-r-transparent focus:ring-0 focus:ring-offset-0 border-b-blacky-medium hover:border-b-evergreen duration-500" placeholder="E-mail" id="email" required onChange={handleChange}/>
                    <input type="tel" className="mx-14 p-3 ooutline-none border border-t-transparent border-l-transparent border-r-transparent focus:ring-0 focus:ring-offset-0 border-b-blacky-medium hover:border-b-evergreen duration-500" placeholder="Mobile Number" id="phone" required onChange={handleChange}/>
                    <input type="password" className="mx-14 outline-none border border-t-transparent border-l-transparent border-r-transparent focus:ring-0 focus:ring-offset-0 border-b-blacky-medium hover:border-b-evergreen duration-500" placeholder="Create Password" id="password"  required onChange={handleChange}/>
                    
                    
                    </div>
                <div className="mx-14 my-5">
                    <button className=" hover:bg-evergreen duration-500 bg-blacky-dark text-whiteglow w-full rounded-md p-2 my-5" disabled={loading} onClick={handleClick}>Create Account</button>
                    {error && <span>{error.message}</span>}
                </div>

                <p className="mx-14">Already have an account?
                    <Link className="text-[#339633]" to="/Login">Login</Link></p>
            </div>

            <div style={{backgroundImage:`url(${loginwall})`}} className="hidden lg:flex justify-center items-center h-[100vh] bg-center bg-no-repeat bg-cover">
                
                </div>
        </div>
    )
}
export default Signup
