import React from "react";
import { Link } from "react-router-dom";
import './login.scss'
import axios from "axios";

import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import {AuthContext} from "../../components/context/AuthContext";
import loginwall from '../../Assets/loginwall.webp';
import google from '../../Assets/google.png';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import { useEffect } from 'react';



const Login = () => {
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

  return (
    <div className="login-box">
      

      
      
      <div className="login-con">
      <div className="login-box-content">
      <div className="login-head">
      <h3>Login/SignUp</h3>
    </div>

       
      <div className=" login-input">
          <input
            type="text"
            className=""
            placeholder="username"
            id="username"
            onChange={handleChange}
          />
          <input
            type="password"
            className=""
            placeholder="password"
            id="password"
            onChange={handleChange}
          />
        </div>

        <div className=" loginbtn">
          <button
            disabled={loading}
            onClick={handleClick}
            className=" "
          >
            Login
          </button>
          {error && <span>{error.message}</span>}
        </div>
        <div>or
        
           {/* //google login button */}
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
        </div>
      <div>
        <p className="">
          New here?
          <Link className="text-[#339633]" to="/signup">
            Signup
          </Link>
        </p></div></div>
      </div>

      
    </div>
  );
};
export default Login;
