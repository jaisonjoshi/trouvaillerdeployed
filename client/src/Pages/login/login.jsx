import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../components/context/AuthContext";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";

import logo from "../Assets/Trouvailler Green.png";

import VisibilityIcon from "@mui/icons-material/Visibility";

const Login = () => {
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
      <div className="bg-login relative h-screen w-full">
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#0000009e]">

        </div>

        <div className="googlelogin bg-[white] py-4 sm:py-12 min-w-[300px] sm:min-w-[500px] lg:min-w-[600px] absolute z-[110] top-[50%] left-[50%] translate-x-[-50%] rounded-[10px] translate-y-[-50%] shadow-lg mx-auto">
          <div className="flex flex-col mx-8 justify-center items-center gap-2 sm:gap-8  ">
            <img src={logo} className="w-[80px] sm:w-[100px] lg:w-[150px]" alt="" />
            <h3
              style={{ fontSize: "18px" }}
              className="font-bold title-font text-base sm:text-xl lg:text-2xl mb-8"
            >
              Hey, Welcome Back
            </h3>
          </div>

          <div className="mx-auto w-[90%] sm:w-[70%] pt-4 sm:pt-12 glogin">
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
              onError={() => {
                console.log("Login failed");
              }}
            />
          </div>

          <p className="text-center text-sm mt-2 sm:text-base sm:mt-8">or</p>
          <div className="flex w-[90%] sm:w-[70%] mx-auto flex-col mt-2 sm:mt-5">
            <div className="bg-[white] border border-[1px] border-[#00b07f] relative rounded mb-8">
              <span className="absolute bg-[white] top-0 left-4 translate-y-[-50%] text-sm  lg:text-base px-2 text-[grey]">Email</span>
              <input
                type="text"
                className="  sm:p-3 outline-none text-sm sm:text-base rounded  border-transparent bg-transparent w-[100%] focus:ring-[transparent]  focus:border-[transparent] "
                id="username"
                onChange={handleChange}
              />
            </div>
            <div className="bg-[white] relative border border-[1px] border-[#00b07f] rounded">
            <span className="absolute bg-[white] top-0 left-4 translate-y-[-50%] px-2 text-[grey] text-sm  lg:text-base">Password</span>

              <input
                type="password"
                className=" sm:p-3 outline-none rounded text-sm sm:text-base  border-transparent bg-transparent w-[90%] focus:ring-[transparent]  focus:border-[transparent] "
                id="password"
                onChange={handleChange}
              ></input>
              <VisibilityIcon onClick={showPassword} className="w-[15px] text-[grey] cursor-pointer" />
            </div>
          </div>

          <div className="mx-auto w-[90%] sm:w-[70%] my-2 sm:my-5">
            <button
              disabled={loading}
              onClick={handleClick}
              className=" bg-evergreen text-whiteglow font-bold w-full rounded-md p-2 my-5"
            >
              Login
            </button>
            {error && (
              <span className="text-[red] text-xs md:text-base py-1 sm:py-2">
                {error.message}Incorrect username or password. Please try again
              </span>
            )}
          </div>

          <p className="sm:mx-14 text-center text-sm  lg:text-base">
            Don't have an account?
            <Link className="text-[#339633]" to="/signup">
              {" "}
              Sign up here
            </Link>
          </p>
        </div>

       
      </div>

      
    </div>
  );
};
export default Login;
