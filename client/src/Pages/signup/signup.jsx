import React from 'react'
import { Link } from "react-router-dom";
import loginwall from '../Assets/loginwall.webp'
import google from '../Assets/google.png'
import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
//import {AuthContext} from '../components/context/AuthContext'
import { AuthContext } from "../components/context/AuthContext";
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import VisibilityIcon from '@mui/icons-material/Visibility';
import logo from "../Assets/Trouvailler Green.png";

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

  const handleChangeEmail = (e) => {

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
      if (!emailError) {
        const res = await axiosInstance.post("/auth/register", credentials);
        //if(res.data.isAdmin){//check this code to control user and admin access to login
        if (res.data) {
          //dispatch({ type: "REGISTER_SUCCESS", payload: res.data.details });

          navigate("/login");
        }
        else {
          alert('Failed to create new user. Please try again')
          //dispatch({type:"REGISTER_FAILURE",payload:{message:"Invalid input for Registration!"}})
        }
      }

      else {
        // dispatch({type:"REGISTER_FAILURE",payload:{message:"Registration Unsuccessful! Please try again"}})
        alert('Kindly try again with a valid email id.')
      }
    } catch (error) {
      if (error.response) {

        if (error.response && error.response.status == 403) {

          alert('Sorry, the username already exists!');
        }
        else if (error.response && error.response.status == 405) {

          alert('Sorry, the email id alredy exists!');
        }

        else if (error.response && error.response.status == 500) {

          alert('Unable to create a new user. Kindly fill all the mandatory fields.');
        }
        else {
          alert(error.message + '. Please try again later.');
        }
      }
      else if (error.request) {
        alert('Network error! Please try again later.')
      }
      else {
        alert(error.message + '. Please try again later.');
      }
      //dispatch({ type: "REGISTER_FAILURE", payload: {message:"Registration Unsuccessful! Please try again"}});
    }
  };
  const googleSignIn = async (value) => {

    // console.log("object inside fun"+value);//value is taken as such
    // console.log(JSON.stringify(value)) ;

    //reuse login code here
    dispatch({ type: "LOGIN_START" });
    try {

      const res = await axiosInstance.post("/auth/googlelogin", value);

      if (res.data) {//check this code to control user and admin access to login



        dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
        navigate("/");

      }
      else {
        dispatch({ type: "LOGIN_FAILURE", payload: { message: "Invalid credentials" } })
      }
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE", payload: { message: " " } });
      if (error.response) {
        if (error.response && error.response.status == 405) {
          alert('The user with this mail id already exists. Please try again with a different account')
          dispatch({ type: "LOGIN_FAILURE", payload: { message: " " } });
        }
        else if (error.response && error.response.status == 403) {
          alert('Please try again with a different account');
          dispatch({ type: "LOGIN_FAILURE", payload: { message: " " } });
        }
        else {
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
      <div className=" h-screen relative w-full bg-login">
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#0000009e]">

</div>
        <div className=" bg-[white] py-4 sm:py-12 min-w-[330px] sm:min-w-[500px] lg:min-w-[600px] absolute z-[110] top-[50%] left-[50%] translate-x-[-50%] rounded-[10px] translate-y-[-50%] shadow-lg mx-auto ">
          <img src={logo} className="w-[80px] sm:w-[100px] mx-auto lg:w-[120px]" alt="" />

          <h1 className="text-center m-4 font-bold text-lg sm:text-2xl">Create an Account</h1>

          {/* <div className='mt-16'><div className="flex justify-center border border-2 rounded mx-14 gap-2 py-1 items-center "><img src={google} /><span>Sign Up with Google</span></div></div> */}
          <div className='sm:mx-14 glogin mt-4 sm:mt-12'>
            <GoogleLogin
              buttonText="Sign up with Google"
              onSuccess={credentialResponse => {
                //console.log(credentialResponse.credential);
                //console.log(credentialResponse);
                const gid = credentialResponse.clientId
                var token = credentialResponse.credential;
                //verifyGoogleToken(token);

                var decoded = jwt_decode(credentialResponse.credential);
                //console.log(decoded);
                var checkemail = decoded.email
                var google_user = {};
                google_user.username = decoded.given_name
                google_user.email = decoded.email
                var number = "add phone number"
                google_user.phone = number//
                google_user.google_id = gid
                google_user.img = decoded.picture


                googleSignIn(google_user);


                // console.log(user);
              }}
              onError={() => {
                console.log("Login failed");
              }} />
          </div>

          <p className="text-center text-blacky-light text-xs sm:text-sm my-4 sm:my-8">- OR -</p>

          <div className="flex flex-col">


            <div className="bg-[white] border border-[1px] border-[#00b07f] relative rounded mb-4 sm:mb-8 w-[90%] sm:w-[70%] mx-auto">
              <span className="absolute bg-[white] top-0 left-4 translate-y-[-50%] text-xs sm:text-sm  lg:text-base px-2 text-[grey]">UserName</span>
              <input
                type="text"
                className="  sm:p-3 outline-none text-sm sm:text-base rounded  border-transparent bg-transparent w-[100%] focus:ring-[transparent]  focus:border-[transparent] "
                id="username" required                onChange={handleChange}
              />
            </div>


            <div className="bg-[white] border border-[1px] border-[#00b07f] relative rounded mb-4 sm:mb-8 w-[90%] sm:w-[70%] mx-auto">
              <span className="absolute bg-[white] top-0 left-4 translate-y-[-50%]  text-xs sm:text-sm  lg:text-base px-2 text-[grey]">Email</span>
              <input
                type="text"
                className="  sm:p-3 outline-none text-sm sm:text-base rounded  border-transparent bg-transparent w-[100%] focus:ring-[transparent]  focus:border-[transparent] "
                id="email" required                onChange={handleChange}
              />
            </div>
            {emailError && <div className="email-err" style={{ color: "red" }}>{emailError}</div>}


            <div className="bg-[white] border border-[1px] border-[#00b07f] relative rounded mb-4 sm:mb-8 w-[90%] sm:w-[70%] mx-auto">
              <span className="absolute bg-[white] top-0 left-4 translate-y-[-50%] text-xs sm:text-sm  lg:text-base px-2 text-[grey]">Mobile Number</span>
              <input
                type="tel"
                className="  sm:p-3 outline-none text-sm sm:text-base rounded  border-transparent bg-transparent w-[100%] focus:ring-[transparent]  focus:border-[transparent] "
                id="phone" required                onChange={handleChange}
              />
            </div>

            <div className="bg-[white] relative border border-[1px] border-[#00b07f] rounded w-[90%] sm:w-[70%] mx-auto">
            <span className="absolute bg-[white] top-0 left-4 translate-y-[-50%] px-2 text-[grey] text-xs sm:text-sm  lg:text-base">Password</span>

              <input
                type="password"
                className=" sm:p-3 outline-none rounded text-sm sm:text-base  border-transparent bg-transparent w-[90%] focus:ring-[transparent]  focus:border-[transparent] "
                id="password"
                onChange={handleChange}
              ></input>
              <VisibilityIcon onClick={showPassword} className="w-[15px] text-[grey] cursor-pointer" />
            </div>


           

          </div>
          <div className="w-[90%] sm:w-[70%] mx-auto sm:my-5">
            <button className=" bg-evergreen duration-500 font-bold text-sm sm:text-base text-whiteglow w-full rounded-md p-2 my-5" disabled={loading} onClick={handleClick}>Create Account</button>
            {error && <span>{error.message}</span>}
          </div>

          <p className="text-center text-sm sm:text-base">Already have an account?
            <Link className="text-[#339633]" to="/Login">    Login</Link></p>
        </div>


      </div>




















    </div>

  )
}
export default Signup
