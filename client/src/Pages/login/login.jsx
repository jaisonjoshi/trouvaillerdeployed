import React from 'react'
import { Link } from "react-router-dom";
import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import {AuthContext} from '../components/context/AuthContext'
import loginwall from '../Assets/loginwall.webp'
import google from '../Assets/google.png'


const Login = () => {
  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
})

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
      };
      console.log(user);

    return (

        <div className="grid grid-cols-1 lg:grid-cols-2 h-screen w-full">
            <div className="h-[100vh] lg:h-auto w-[95%] md:w-[70%] lg:w-[80%] 2xl:w-[60%] mx-auto pt-40">


                
            <div className='flex justify-center'><p style={{fontSize:"18px"}} className="text-[grey]">Welcome to Trouvailler.com</p></div>
            <div className='mt-16'><div className="flex justify-center border border-2 rounded mx-14 gap-2 py-1 items-center "><img src={google} /><span>Login with Google</span></div></div>
            <p className='text-center mt-8'>or</p>
                <div className="flex flex-col mt-5">
                <input
            type="text"
            className="mx-14 p-3 outline-none border border-transparent focus:border-transparent focus:ring-0 border-b-blacky-medium focus:border-b-evergreen duration-500"
            placeholder="username"
            id="username"
            onChange={handleChange}
          />
          <input
            type="password"
            className="mx-14 p-3 outline-none border border-transparent focus:border-transparent focus:ring-0 border-b-blacky-medium focus:border-b-evergreen duration-500"
            placeholder="password"
            id="password"
            onChange={handleChange}
          />
          </div>

                <div className="mx-14 my-5">
                <button
            disabled={loading}
            onClick={handleClick}
            className=" hover:bg-evergreen duration-500 bg-blacky-dark text-whiteglow w-full rounded-md p-2 my-5"
          >Login</button>
          <p>Forgot password</p>
                {error && <span className='text-[red]'>{error.message} username or password. Please try again</span>}        
                </div>

                <p className="mx-14 text-center">Don't have an account? 
                    <Link className="text-[#339633]" to="/signup">   Sign up here</Link></p>
            </div>

            <div style={{backgroundImage:`url(${loginwall})`}} className="hidden lg:flex justify-center items-center h-[100vh] bg-center bg-no-repeat bg-cover">
                
            </div>
        </div>
    )
}
export default Login