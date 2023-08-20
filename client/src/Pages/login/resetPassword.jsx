import { Link, useLocation } from "react-router-dom";
import logo from "../Assets/Trouvailler Green.png";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useState } from "react";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";


const ResetPassword = () => {
  const [loading,setLoading] = useState(true)
  const location = useLocation()
  const id = location.pathname.split('/')[2];
  const token = location.pathname.split('/')[3]
  console.log(id, token)
  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  });
  const [msg, setmsg] = useState('')
  axiosInstance.get(`/auth/resetpassword/${id}/${token}`).then(res => { if (res.data == "verified") { setLoading(false); setmsg("verified") }else{setLoading(false); setmsg(res.data)} }).catch(err=>{setLoading(false)})

  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const handleNewPasswordChange = (event) => {
    setNewPassword(event.target.value);
    // Check if passwords match whenever new password changes
    setPasswordsMatch(event.target.value === confirmPassword);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
    // Check if passwords match whenever confirm password changes
    setPasswordsMatch(newPassword === event.target.value);
  };
  function showPassword() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
  function showConfirmPassword() {
    var x = document.getElementById("confirmpassword");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
  const formSubmit = async (e) => {
    e.preventDefault();
    if (newPassword == '' || confirmPassword == '' || newPassword.trim().length === 0 || confirmPassword.trim().length == 0) {
      alert("Please fill all the fields")
    }
    else if (newPassword !== confirmPassword) {
      alert("Passwords do not match")
    }
    else if (newPassword === confirmPassword) {
      axiosInstance.post(`/auth/resetpassword/${id}/${token}`, { newPassword }).then((res) => { console.log(res.data) })
    }
  }
  return (
    <div className=" h-full w-full font-body">
      {loading ?
       <div className="absolute top-[50%] w-[30%] flex justify-center items-center left-[50%] translate-x-[-50%] translate-y-[-50%]"> <ClipLoader /></div>
        :
        
        msg === "verified" ?
        <div className=" absolute top-[50%] w-[90%] md:w-[50%] 2xl:w-[30%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
          <h1 className="text-xl mb-8">Reset Password</h1>
          <form action="" onSubmit={formSubmit}>
            <label htmlFor="" className="text-sm md:text-base"  > New Password</label>
            <div className="border border-[grey] border-[1px] relative  rounded mb-8 mt-2">

              <input
                type="password"
                className=" sm:p-3 outline-none rounded text-sm sm:text-base  border-transparent bg-transparent w-[90%] focus:ring-[transparent]  focus:border-[transparent] "
                id="password"
                placeholder="Enter new Password"
                onChange={handleNewPasswordChange}
              ></input>
              <VisibilityIcon onClick={showPassword} className="w-[15px] text-[grey] cursor-pointer" />
            </div>


            <label htmlFor="" className="text-sm md:text-base"  > Retype Password</label>
            <div className="border border-[grey] border-[1px] relative  rounded mb-4 mt-2">

              <input
                type="password"
                className=" sm:p-3 outline-none rounded text-sm sm:text-base  border-transparent bg-transparent w-[90%] focus:ring-[transparent]  focus:border-[transparent] "
                id="confirmpassword"
                placeholder="Retype Password"
                onChange={handleConfirmPasswordChange}
              ></input>
              <VisibilityIcon onClick={showConfirmPassword} className="w-[15px] text-[grey] cursor-pointer" />
            </div>
            {!passwordsMatch && confirmPassword !== '' && newPassword !== '' && <p className="text-[red] text-sm">Passwords do not match.</p>}
            <input type="submit" value="Reset Password" className="gradientbg px-4 py-2 text-white rounded cursor-pointer mt-8" />

          </form>
        </div> 
        :
        <div className=" absolute top-[50%] w-[30%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <p className="text-center">{msg}</p>
        </div>
        
        }
      <div className="absolute bottom-0 right-0 w-full flex gap-4 px-4 md:gap-8 flex-wrap justify-center pb-8 font-body text-sm text-[grey]">
        <span>&copy; Trouvailler Enterprises Private Limited</span>
        <Link>Return to Home</Link>
        <Link>Terms and Conditions</Link>
        <Link>Privacy policy</Link>
      </div>
    </div>
  )
}

export default ResetPassword