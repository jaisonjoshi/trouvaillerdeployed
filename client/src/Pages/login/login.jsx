import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../components/context/AuthContext";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import CloseIcon from '@mui/icons-material/Close';
import logo from "../Assets/Trouvailler Green.png";

import VisibilityIcon from "@mui/icons-material/Visibility";

const Login = () => {
  const [open, setOpen] = useState(false)
  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  });

  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const { user, loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  //       const GOOGLE_CLIENT_ID = process.env.CLIENT_ID;
  //       const client = new OAuth2Client(GOOGLE_CLIENT_ID);

  //       const verifyGoogleToken=async(token) => {

  //   try {
  //     const ticket = await client.verifyIdToken({
  //       idToken: token,
  //       audience: GOOGLE_CLIENT_ID,
  //     });
  //     return { payload: ticket.getPayload() };
  //   } catch (error) {
  //     return { error: "Invalid user detected. Please try again" };
  //   }
  // }

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axiosInstance.post("/auth/login", credentials);

      if (res.data) {
        //check this code to control user and admin access to login

        dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });

        navigate("/");
      } else {
        dispatch({
          type: "LOGIN_FAILURE",
          payload: { message: "Invalid credentials" },
        });
      }
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: { message: " " } });
      if (error.response) {
        alert("Please try again!");
        dispatch({ type: "LOGIN_FAILURE", payload: { message: " " } });
      } else if (error.request) {
        alert("Network error! Please try again later.");
        dispatch({ type: "LOGIN_FAILURE", payload: { message: " " } });
      } else {
        alert(error.message + ". Please try again");
        dispatch({ type: "LOGIN_FAILURE", payload: { message: " " } });
      }
    }
  };

  // const googlelogin = async (req,res,next) => {
  // const verifyGoogleToken=async(token)=>{
  //   const res = await axiosInstance.post("/auth/verify", token);
  //   console.log(res.body);

  // };

  const googleSignIn = async (value) => {
    // console.log("object inside fun"+value);//value is taken as such
    // console.log(JSON.stringify(value)) ;

    //reuse login code here
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axiosInstance.post("/auth/googlelogin", value);

      if (res.data) {
        //check this code to control user and admin access to login

        dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
        navigate("/");
      } else {
        dispatch({
          type: "LOGIN_FAILURE",
          payload: { message: "Invalid credentials" },
        });
      }
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE", payload: { message: " " } });
      if (error.response) {
        if (error.response && error.response.status == 405) {
          alert(
            "The user with this mail id already exists. Please try again with a different account"
          );
          dispatch({ type: "LOGIN_FAILURE", payload: { message: " " } });
        } else if (error.response && error.response.status == 403) {
          alert("Please try again with a different account");
          dispatch({ type: "LOGIN_FAILURE", payload: { message: " " } });
        }

        // The request was made and the server responded with a status code that falls out of the range of 2xx
        else {
          alert("Please try again with a different account!");
        }
      } else if (error.request) {
        alert("Network error! Please try again later.");
      } else {
        alert(error.message + ". Please try again later.");
      }
    }

    //
  };
const [email, setEmail] = useState("") 
const handleChangeForgotPassword = (e)=> {
  setEmail(e.target.value)
}
  const handleForgotPassword = async (e) => {
    e.preventDefault();
    axiosInstance.post('/auth/forgotPassword',{email}).then((res)=>console.log(res.data.status))
    

  }
  //
  function showPassword() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
  
  return (
    <div>
      {open && 
      <div className="absolute top-0 left-0 w-full h-full bg-[#0000009c] z-[1000000000]">
        <div className="relative top-[50%] w-[40%] rounded shadow-lg px-20 py-8 left-[50%] translate-x-[-50%] bg-[white] translate-y-[-50%] z-[100000000000000000000000]">
        <div className="flex justify-between">
        <h1 className="font-medium text-xl">Forgot password</h1>
        <button onClick={()=>setOpen(false)}><CloseIcon /></button>
        </div>
        <p className="font-body my-8">Enter the email address associated with your account and we'll send you a link to reset your password</p>
        <form action="" onSubmit={handleForgotPassword}>
          <input type="email" className="w-full rounded focus:ring-[transparent]  focus:border-[grey]" onChange={handleChangeForgotPassword}/>
          <input type="submit" value="Send link" className="gradientbg text-white px-4 py-2 rounded mt-6 cursor-pointer"/>
        </form>
        <p className="font-body mt-12">Don't have an account? <Link className="text-[blue]">Sign Up</Link></p>
      </div>
        </div>}
      <div className="relative h-screen w-full">
      <div className="flex justify-between px-4 lg:px-20 pt-6 lg:pt-20">
          <img src={logo} className="w-[80px] sm:w-[100px] lg:w-[100px] mb-6" alt="" />
<Link to="/">    <CloseIcon className="cursor-pointer"/></Link>
          </div>

        <div className=" bg-[white] py-4 w-[350px] lg:w-[500px] absolute z-[110] top-[50%] left-[50%] translate-x-[-50%] rounded-[10px] translate-y-[-50%]  mx-auto">
          
          <div className="flex flex-col mx-8 justify-center items-center   ">
            <h3
              style={{ fontSize: "18px" }}
              className="font-bold title-font text-lg sm:text-xl lg:text-3xl mb-2 lg:mb-4"
            >
              Welcome Back
            </h3>
            <p className="font-body mb-4 text-center text-sm lg:text-base">Enter your details to get sign in to your account</p>
          </div>

         
          <div className="flex w-[90%] sm:w-[70%] mx-auto flex-col mt-2 sm:mt-5">
            <div className="bg-[white]  relative rounded mb-4">
              <input
                type="text"
                className="   sm:p-3 outline-none text-sm sm:text-base rounded  border-transparent bg-[#E8F0FE] w-[100%] focus:ring-[transparent]  focus:border-[transparent] "
                id="username"
                placeholder="Enter Email"
                onChange={handleChange}
              />
            </div>
            <div className="bg-[#E8F0FE] relative  rounded mb-4">

              <input
                type="password"
                className=" sm:p-3 outline-none rounded text-sm sm:text-base  border-transparent bg-transparent w-[90%] focus:ring-[transparent]  focus:border-[transparent] "
                id="password"
                placeholder="Enter Password"
                onChange={handleChange}
              ></input>
              <VisibilityIcon onClick={showPassword} className="w-[15px] text-[grey] cursor-pointer" />
            </div>
            <button className=" text-[11px]  text-left pl-2" onClick={()=> setOpen(true)} >Forgot password?</button>
          </div>


         

          <div className="mx-auto w-[90%] sm:w-[70%] ">
            <button
              disabled={loading}
              onClick={handleClick}
              className=" gradientbg text-whiteglow font-semibold w-full rounded-full py-2 mt-4"
            >
              Login
            </button>
            {error && (
              <span className="text-[red] text-xs text-center md:text-base sm:py-2">
                {error.message}
              </span>
            )}
          </div>
          <p className="text-center text-sm   mt-8 ">- or sign in with -</p>


<div className="mx-auto w-[100%] sm:w-[70%] my-4 glogin">
  <GoogleLogin
    onSuccess={(credentialResponse) => {
      //console.log(credentialResponse.credential);
      console.log(credentialResponse);
      const gid = credentialResponse.clientId;
      var token = credentialResponse.credential;
      //verifyGoogleToken(token);

      var decoded = jwt_decode(credentialResponse.credential);
      //console.log(decoded);
      var checkemail = decoded.email;
      var google_user = {};
      google_user.username = decoded.given_name;
      google_user.email = decoded.email;
      var number = "add phone number";
      google_user.phone = number; //
      google_user.google_id = gid;
      google_user.img = decoded.picture;

      googleSignIn(google_user);

      console.log(user);
    }}
    shape="circle"
    size="large"
    onError={() => {
      console.log("Login failed");
    }}
    width="100%"
    useOneTap
  />
</div>
          <p className="sm:mx-14 text-center text-sm  mt-8">
            Don't have an account?
            <Link className="text-[blue]" to="/signup">
              {" "}
              Sign up here
            </Link>
          </p>
        </div>

<div className="absolute bottom-0 right-0 w-full flex gap-8 justify-center pb-8 font-body text-sm text-[grey]">
  <span>&copy; Trouvailler Enterprises Private Limited</span>
  <Link>Return to Home</Link>
  <Link>Terms and Conditions</Link>
  <Link>Privacy policy</Link>
</div>
      </div>


    </div>
  );
};
export default Login;
