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
      <div className="hidden md:grid grid-cols-1 lg:grid-cols-2 h-screen w-full">
        <div className="googlelogin h-[100vh] lg:h-auto w-[95%] md:w-[70%] lg:w-[80%] 2xl:w-[60%] mx-auto md:pt-40">
          <div className="flex mx-8 md:justify-center">
            <h3
              style={{ fontSize: "18px" }}
              className="font-medium title-font text-2xl mb-8"
            >
              Hey!<br></br>Welcome Back
            </h3>
          </div>

          <div className="mx-14 glogin">
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

          <p className="text-center mt-8">or</p>
          <div className="flex mx-14 flex-col mt-5">
            <div className="bg-[#eeeeee] rounded mb-8">
              <input
                type="text"
                className="  p-3 outline-none  rounded  border-transparent bg-transparent w-[100%] focus:ring-[transparent]  focus:border-[transparent] "
                placeholder="Username"
                id="username"
                onChange={handleChange}
              />
            </div>
            <div className="bg-[#eeeeee] rounded">
              <input
                type="password"
                className=" p-3 outline-none rounded  border-transparent bg-transparent w-[90%] focus:ring-[transparent]  focus:border-[transparent] "
                placeholder="Password"
                id="password"
                onChange={handleChange}
              ></input>
              <VisibilityIcon onClick={showPassword} className="text-[grey]" />
            </div>
          </div>

          <div className="mx-14 my-5">
            <button
              disabled={loading}
              onClick={handleClick}
              className=" bg-evergreen text-whiteglow font-bold w-full rounded-md p-2 my-5"
            >
              Login
            </button>
            {error && (
              <span className="text-[red] py-2">
                {error.message} username or password. Please try again
              </span>
            )}
          </div>

          <p className="mx-14 text-center">
            Don't have an account?
            <Link className="text-[#339633]" to="/signup">
              {" "}
              Sign up here
            </Link>
          </p>
        </div>

        <div
          style={{ backgroundImage: `url(https://res.cloudinary.com/difxlqrlc/image/upload/q_auto/f_auto/w_1000/v1684527559/site/loginwall_pfjmtp.webp)` }}
          className="hidden lg:flex justify-center items-center h-[100vh] bg-center bg-no-repeat bg-cover"
        ></div>
      </div>

      <div className=" md:hidden  h-[70vh] w-full loginbg">
        <div className="bg-white rounded-[50px] absolute left-0 bottom-0">
          <div className="googlelogin mx-auto ">
            <img src={logo} alt="" className="w-[25%] mx-auto pt-8 pb-2"/>
<h1 className="text-center text-xs text-[grey]">Personalized Trips, perfectly packaged.</h1>
           


            <div className="flex flex-col mt-10">
            <label htmlFor="" className="mx-8 mb-1 text-sm text-[grey]">Username</label>

              <div className="bg-[#eeeeee] rounded mx-8  mb-3">
                <input
                  type="text"
                  className="  px-3 outline-none  rounded  border-transparent bg-transparent w-[100%] focus:ring-[transparent]  focus:border-[transparent] "
                  placeholder=""
                  id="username"
                  onChange={handleChange}
                />
              </div>
              <label htmlFor="" className="mx-8 mb-1 text-[grey] text-sm">Password</label>

              <div className="bg-[#eeeeee] rounded mx-8 mb-6">
                <input
                  type="password"
                  className=" outline-none rounded  border-transparent bg-transparent w-[90%] focus:ring-[transparent]  focus:border-[transparent] "
                  placeholder=""
                  id="password"
                  onChange={handleChange}
                ></input>
                <VisibilityIcon
                  onClick={showPassword}
                  className="text-[grey]"
                />
              </div>
            </div>

            <div className="mx-8 flex flex-col">
              <button
                disabled={loading}
                onClick={handleClick}
                className=" bg-evergreen text-whiteglow text-sm font-bold py-2 rounded-full "
              >
                Login
              </button>
              {error && (
                <span className="text-[red] py-2">
                  {error.message} username or password. Please try again
                </span>
              )}
            </div>
            <p className=" text-center my-6">
              <Link className="text-[grey]" to="/signup">
                {" "}
I don't have an account ?              </Link>
            </p>
            <p className="text-center text-[grey] my-1 text-sm">OR</p>

            <div className="mx-14 mb-10 glogin">
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

           
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
