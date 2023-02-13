import React from "react";
import { Link } from "react-router-dom";
import Logo from '../../components/assets/Green.png'

import axios from "axios";
import './login.scss'
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
//import { AuthContext } from "../../context/AuthContext";
import {AuthContext} from "../../components/context/AuthContext"


const Login = () => {
  //start
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
      if(res.data.isAdmin){
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
 // console.log(user);

  return (
    <div className="login-box">
      
      <div className="login-con bg-[white]">
        <div className="login-box-content">
          <div className="flex justify-center mb-4">
            <img src={Logo} alt="" />
          </div>
    <div className="login-head">
      <h3 className="text-base">Login/SignUp</h3>
    </div>
        
        <div className=" login-input my-8">
          <input
            type="text"
            className="mx-14 p-3 outline-none border border-transparent border-b-blacky-medium hover:border-b-evergreen duration-500"
            placeholder="username"
            id="username"
            onChange={handleChange}
          />
          <input
            type="password"
            className="mx-14 p-3 outline-none border border-transparent border-b-blacky-medium hover:border-b-evergreen duration-500"
            placeholder="password"
            id="password"
            onChange={handleChange}
          />
        </div>

        <div className=" login-btn flex justify-center">
          <button
            disabled={loading}
            onClick={handleClick}
            className="px-4 py-1 bg-[#00b771] rounded text-[white]"
          >
            Login
          </button>
          {error && <span>{error.message}</span>}
        </div>

        </div>
      </div>
     {/*  <div className="">
        <img src={require("../../components/assets/profile.jpg")} alt="" className="" />
      </div> */}

      
    </div>
  );
};
export default Login;
