import React from "react";
import { Link } from "react-router-dom";
import './login.scss'
import axios from "axios";
import logo from '../../Assets/logo.png'

import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import {AuthContext} from "../../components/context/AuthContext";
import loginwall from '../../Assets/loginwall.webp';
import google from '../../Assets/google.png';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import { useEffect } from 'react';



const Login = ({setOpen}) => {
  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
})
  //start

  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const { user, loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    setOpen(true)
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axiosInstance.post("/auth/login", credentials);
      if(res.data.isVendor){
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      navigate("/");

                          }
      else{
        dispatch({type:"LOGIN_FAILURE",payload:{message:"Invalid credentials"}})
      }
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: {message:"Invalid"} });
    }
    setOpen(false)
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

      dispatch({ type: "LOGIN_FAILURE", payload: {message:"Login Unsuccessfull"} });
      if (error.response) {
        // The request was made and the server responded with a status code that falls out of the range of 2xx
       alert('Please try again')
       
      } else if (error.request) {    
          alert('Network error! Please try again later.')
      } 
        else {
            alert(error.message + '. Please try again later.');
        }


    }

    //
  
 
};

 // console.log(user);

  return (
    <div className="login-box h-[100vh] bg-[white]">
      

      
      
      <div className="login-con  ">
      <div className="login-box-content ">
      <div className="login-head">
        <img src={logo} className="w-[50%] sm:w-[30%] md:w-[50%] lg:w-[40%] mb-8 mx-auto" alt="" />
      <h3 className="font-medium">Welcome back, Login into your account</h3>
    </div>

       
      <div className=" login-input mt-8">
          <input
            type="text"
            className=" rounded "
            placeholder="Username"
            id="username"
            onChange={handleChange}
          />
          <input
            type="password"
            className="rounded"
            placeholder="Password"
            id="password"
            onChange={handleChange}
          />
        </div>

        <div className=" loginbtn flex flex-col items-center justify-center">
        {error && <p className="text-center text-[red] my-2">{error.message}</p>}

          <button
            disabled={loading}
            onClick={handleClick}
            className=" bg-[#3aac38] w-full buttongrad font-bold px-4 py-2 text-[white] rounded "
          >
            Login
          </button>

        </div>

        <div className="googlelogin">
          <p className="text-center mb-4">or</p>
        
          {/* //google login button */}
       <GoogleLogin onSuccess={credentialResponse=>{
        //console.log(credentialResponse.credential);
       // console.log(credentialResponse);
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

        
      //  console.log(user);
      }}
      onError={()=>{
        console.log("Login failed");
      }}/>
        </div>
      <div className="text-center my-8">
        <p className="">
          New here? 
          <Link className="text-[#339633] ml-1" to="/signup">
             Signup
          </Link> to create an account
        </p></div></div>
      </div>

      
    </div>
  );
};
export default Login;
