import React from "react";
import { Link } from "react-router-dom";
import './login.scss'
import axios from "axios";

import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
//import { AuthContext } from "../../context/AuthContext";
import {AuthContext} from "../../components/context/AuthContext"


const Login = () => {
  /* const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
}) */
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
      const res = await axios.post("/auth/login", credentials);
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

        <p className="">
          New here?
          <Link className="" to="/signup">
            Signup
          </Link>
        </p></div>
      </div>

      
    </div>
  );
};
export default Login;
