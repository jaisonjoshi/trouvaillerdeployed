import React from 'react'
import { Link } from "react-router-dom";
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
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import ClipLoader from "react-spinners/ClipLoader";
import CryptoJS from 'crypto-js';

const Signup = () => {
  const [emailLoading , setEmailLoading] = useState(false)
  const [otpLoading, setOtpLoading] = useState(false)
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
  const [showIcon , setShowIcon] = useState(true)
  function showPassword() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
      setShowIcon(false)
    } else {
      x.type = "password";
      setShowIcon(true)
    }
  }
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const { user, loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
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
  const [hashedotp, sethashedOtp] = useState("")


  const sendEmail = async (e)=>{
    setEmailLoading(true)
    e.preventDefault()
    await axiosInstance.post('/auth/verifyemail', {email: credentials.email}).then((res)=>{
      sethashedOtp(res.data.status)
        setEmailLoading(false)
        console.log(res)
        const elem = document.getElementById("otp")
        const firstElem = document.getElementById("email-con")
        elem.classList.remove( "left-[100%]")
        elem.classList.add("animate","left-0")
        firstElem.classList.remove("left-0")
        firstElem.classList.add("animate","left-[-100%]")
    }).catch(( error)=> {
      if(error.response.status == 405){
        alert("This email is already registered")
        setEmailLoading(false)
      }
      else{
        alert(error.response.data.message); setEmailLoading(false)}

      })
   
  
  }
  const [otp,setOtp] = useState('') 
  const handleotpChange = (e) => {
   setOtp(e.target.value)
  }
  const verifyOTP =(e)=>{
    setOtpLoading(true)
    e.preventDefault()
    if(hashedotp === CryptoJS.SHA256(otp).toString()){
        const signup = document.getElementById("signup")
      const elem = document.getElementById("otp")

      signup.classList.remove( "left-[0]")
      signup.classList.add("animate","left-[-100%]")
      elem.classList.remove("left-0")
      elem.classList.add("animate","left-[-100%]")
    }
    else{
      alert("The OTP you have entered is wrong. Try again")
    }
    
    
  }
  const [confirmPassword, setConfirmPassword] = useState('');
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  }
  const formSubmit = async (e) => {
    e.preventDefault()
    if (credentials.password == '' || confirmPassword == '' || credentials.password.trim().length === 0 || confirmPassword.trim().length == 0) {
      alert("Please fill all the fields")
    }
    else if (credentials.password !== confirmPassword) {
      alert("Passwords do not match")
    }
    else if (credentials.password === confirmPassword) {
      try {
        const res = await axiosInstance.post("/auth/register", credentials);
        if (res.data) {
          navigate("/login");
        }
        else {
          alert('Failed to create new user. Please try again')
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
        
      }
    }
  }


  //
  return (
    <div>
      <div className=" h-screen relative w-full font-body">
      
        <div className=" bg-[white] overflow-hidden py-4 sm:py-12 min-w-[330px] sm:min-w-[500px] lg:min-w-[600px] absolute z-[110] top-[50%] left-[50%] translate-x-[-50%] rounded-[10px] translate-y-[-50%]  mx-auto ">

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
              shape='circle'
              size='large'
              onError={() => {
                console.log("Login failed");
              }} />
          </div>

          <p className="text-center text-blacky-light  text-xs sm:text-sm my-4 sm:my-8">- OR -</p>

           <div className='relative w-[100%] flex  '>



           <div className='flex flex-col  min-w-[100%] absolute left-0 mb-20 w-[100%] ' id="email-con">
          <div className="bg-[white] relative rounded  w-[90%] sm:w-[70%] mx-auto">
              <input
                type="email"
                placeholder='Enter email'
                className=" bg-[#E8F0FE]  sm:p-3 outline-none text-sm sm:text-base rounded  border-transparent  w-[100%] focus:ring-[transparent]  focus:border-[transparent] "
                id="email" required                onChange={handleChange}
              />           

            </div>
            {
              emailLoading ? <div className='mb-4 w-[90%] sm:w-[70%] mx-auto gradientbg  text-white rounded-full px-2 py-2 mt-8 flex justify-center'><ClipLoader color='white' size="24"/></div>:
            
            <button className='mb-4 font-medium w-[90%] sm:w-[70%] mx-auto gradientbg  text-white rounded-full px-2 py-2 mt-8' onClick={sendEmail}>Verify Email</button>}
          </div>
          <div className='flex flex-col mb-20    left-[100%]  min-w-[100%] relative ' id="otp">
           
          <div className="bg-[white]  relative rounded  w-[90%] sm:w-[70%] mx-auto ">
          <h1 className='font-bold text-[#474747] text-2xl'>Verify Email</h1>
          <p className='text-[#696969] mb-8 mt-2'> Enter 4 digit OTP received in your mail</p>
              <input
                type="text"
                placeholder='Enter OTP'
                className=" bg-[#E8F0FE]  sm:p-3 outline-none text-sm sm:text-base rounded  border-transparent  w-[100%] focus:ring-[transparent]  focus:border-[transparent] "
                id="otpnum" required                onChange={handleotpChange}
              />           

            </div>
            {
              otpLoading ?
              <div className='mb-4 w-[90%] sm:w-[70%] mx-auto gradientbg  text-white rounded-full px-2 py-2 mt-8 flex justify-center'><ClipLoader color='white' size="24"/></div>
              :
            
            <button className='mb-4 font-medium w-[90%] sm:w-[70%] mx-auto gradientbg  text-white rounded-full px-2 py-2 mt-8' onClick={verifyOTP}>Verify OTP</button>}
          </div>
          <div className='flex flex-col mb-20    left-[0]  min-w-[100%] relative ' id="signup">
           
           <div className="bg-[white] mb-4 relative rounded  w-[90%] sm:w-[70%] mx-auto ">
               <input
                 type="text"
                 placeholder='Username'
                 className=" bg-[#E8F0FE]  sm:p-3 outline-none text-sm sm:text-base rounded  border-transparent  w-[100%] focus:ring-[transparent]  focus:border-[transparent] "
                 id="username" required                onChange={handleChange}
               />           
 
             </div>
             <div className="bg-[white] mb-4  relative rounded  w-[90%] sm:w-[70%] mx-auto ">
               <input
                 type="text"
                 placeholder='Phone'
                 className=" bg-[#E8F0FE]  sm:p-3 outline-none text-sm sm:text-base rounded  border-transparent  w-[100%] focus:ring-[transparent]  focus:border-[transparent] "
                 id="phone" required                onChange={handleChange}
               />           
 
             </div>
             <div className="bg-[#E8F0FE]  relative mb-4  rounded w-[90%] sm:w-[70%] mx-auto">

              <input
                type="password"
                placeholder='Enter Password'
                className=" sm:p-3 outline-none rounded text-sm sm:text-base  border-transparent bg-transparent w-[90%] focus:ring-[transparent]  focus:border-[transparent] "
                id="password"
                onChange={handleChange}
              ></input>
              {showIcon ?<VisibilityIcon onClick={showPassword} className="w-[15px] text-[grey] cursor-pointer" />:
              <VisibilityOffIcon onClick={showPassword} className="w-[15px] text-[grey] cursor-pointer"/>}
            </div>
            <div className="bg-[#E8F0FE]  relative mb-4 sm:mb-8 rounded w-[90%] sm:w-[70%] mx-auto">

              <input
                type="password"
                placeholder='Retype Password'
                className=" sm:p-3 outline-none rounded text-sm sm:text-base  border-transparent bg-transparent w-[90%] focus:ring-[transparent]  focus:border-[transparent] "
                id="confirmpassword"
                onChange={handleConfirmPasswordChange}
              ></input>
              {showIcon ?<VisibilityIcon onClick={showPassword} className="w-[15px] text-[grey] cursor-pointer" />:
              <VisibilityOffIcon onClick={showPassword} className="w-[15px] text-[grey] cursor-pointer"/>}
            </div>
             <button className='mb-4 font-medium w-[90%] sm:w-[70%] mx-auto gradientbg  text-white rounded-full px-2 py-2 mt-8' onClick={formSubmit}>Create Account</button>
           </div>
 




           </div>
         {/*  <div className="flex flex-col items-start">


            <div className="bg-[#E8F0FE]  relative rounded mb-4 sm:mb-8 w-[90%] sm:w-[70%] mx-auto">
              <input
                type="text"
                className="  sm:p-3 outline-none text-sm sm:text-base rounded  border-transparent bg-[#E8F0FE]  w-[100%] focus:ring-[transparent]  focus:border-[transparent] "
                id="username" required        placeholder='Enter Username'        onChange={handleChange}
              />
            </div>


            <div className="bg-[white] relative rounded  w-[90%] sm:w-[70%] mx-auto">
              <input
                type="text"
                placeholder='Enter email'
                className=" bg-[#E8F0FE]  sm:p-3 outline-none text-sm sm:text-base rounded  border-transparent  w-[100%] focus:ring-[transparent]  focus:border-[transparent] "
                id="email" required                onChange={handleChange}
              />            <button className='mb-4 text-sm gradientbg  text-white rounded px-2 py-1 mt-2'>Verify Email</button>

            </div>
            {emailError && <div className="email-err" style={{ color: "red" }}>{emailError}</div>}


            <div className="bg-[white] relative rounded  w-[90%] sm:w-[70%] mx-auto">
              <input
                type="tel" placeholder='Enter WhatsApp number'
                className="  sm:p-3 outline-none text-sm sm:text-base rounded  border-transparent bg-[#E8F0FE]  w-[100%] focus:ring-[transparent]  focus:border-[transparent] "
                id="phone" required                onChange={handleChange}
              />              <button className='mb-4 text-sm gradientbg text-white rounded px-2 py-1 mt-2' >Verify number</button>

            </div>
            <div className="bg-[#E8F0FE]  relative mb-4 sm:mb-8 rounded w-[90%] sm:w-[70%] mx-auto">

              <input
                type="password"
                placeholder='Enter Password'
                className=" sm:p-3 outline-none rounded text-sm sm:text-base  border-transparent bg-transparent w-[90%] focus:ring-[transparent]  focus:border-[transparent] "
                id="password"
                onChange={handleChange}
              ></input>
              {showIcon ?<VisibilityIcon onClick={showPassword} className="w-[15px] text-[grey] cursor-pointer" />:
              <VisibilityOffIcon onClick={showPassword} className="w-[15px] text-[grey] cursor-pointer"/>}
            </div>
            <div className="bg-[#E8F0FE]  relative  rounded w-[90%] sm:w-[70%] mx-auto">

<input
  type="password"
  placeholder='Retype Password'
  className=" sm:p-3 outline-none rounded text-sm sm:text-base  border-transparent bg-transparent w-[90%] focus:ring-[transparent]  focus:border-[transparent] "
  id="password"
  onChange={handleChange}
></input>
{showIcon ?<VisibilityIcon onClick={showPassword} className="w-[15px] text-[grey] cursor-pointer" />:
<VisibilityOffIcon onClick={showPassword} className="w-[15px] text-[grey] cursor-pointer"/>}
</div>


           

          </div>
          <div className="w-[90%] sm:w-[70%] mx-auto sm:my-5">
            <button className=" gradientbg  duration-500 font-bold text-sm sm:text-base text-whiteglow w-full rounded-full py-4  my-5" disabled={loading} onClick={handleClick}>Create Account</button>
            {error && <span>{error.message}</span>}
          </div> */}

          <p className="text-center absolute bottom-8 left-[50%] translate-x-[-50%] text-sm sm:text-base">Already have an account?
            <Link className="text-[#339633]" to="/Login">    Login</Link></p>
        </div>

        <div className="absolute bottom-0 gap-4 px-4 md:gap-8 flex-wrap right-0 w-full flex  justify-center pb-8 font-body text-sm text-[grey]">
  <span>&copy; Trouvailler Enterprises Private Limited</span>
  <Link>Return to Home</Link>
  <Link>Terms and Conditions</Link>
  <Link>Privacy policy</Link>
</div>
      </div>




















    </div>

  )
}
export default Signup
