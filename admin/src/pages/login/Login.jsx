import React from "react";
import { Link } from "react-router-dom";
import Logo from '../../components/assets/Green.png'

import axios from "axios";
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
    <div className="w-full h-[100vh] relative">
      
      <div className=" bg-[white] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] shadow-lg rounded-[10px] border py-8 px-8">
        <div className="">
          <div className="flex justify-center mb-4">
            <img src={Logo} alt="" />
          </div>
    <div className="">
      <h3 className="text-2xl font-medium text-center">Login as Admin</h3>
    </div>
        
        <div className=" my-8 flex flex-col gap-8 ">
          <input
            type="text"
            className="mx-14 p-3 outline-none border border-b-blacky-medium hover:border-b-evergreen rounded-[5px] focus:ring-0 duration-500"
            placeholder="username"
            id="username"
            onChange={handleChange}
          />
          <input
            type="password"
            className="mx-14 p-3 outline-none border  border-b-blacky-medium hover:border-b-evergreen rounded-[5px] focus:ring-0 duration-500"
            placeholder="password"
            id="password"
            onChange={handleChange}
          />
        </div>

        <div className=" flex flex-col  ">
          <button
            disabled={loading}
            onClick={handleClick}
            className=" mx-14 py-2 bg-[#00b771]  rounded text-[white]"
          >
            Login
          </button>
          <p className="mx-14 py-2 text-xs text-[red]">{error && <span>{error.message}</span>}</p>
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
