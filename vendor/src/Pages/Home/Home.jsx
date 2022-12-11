import React from "react";
import Footer from "../../components/Footer/Footer";
import Headerimg from "../../Assets/Group.jpg";
import { Link } from "react-router-dom";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import hotel from '../../Assets/hotel.jpg'
import CreateRoundedIcon from '@mui/icons-material/CreateRounded';
import "./home.scss";
import HomeBid from "../../components/homeBid/HomeBid";
import profile from "../../Assets/profile.jpg";
import { AuthContext } from "../../components/context/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../../components/header/Header";

const Home = () => {
  const { user, loading, error, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
})
  //logout code fetching
  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGOUT" });
    try {
      const res = await axiosInstance.get("/auth/logout");
      localStorage.removeItem("user");
      if (res) {
        navigate("/");
      }
    } catch (err) {
      dispatch({ type: "LOGOUT", payload: { message: "logged out" } });
    }
  };
  console.log(user);

  return (
    <div>
      {/* Header */}
      <Header />
      <div className="profile">
                <div className="left">
                <div className="profile-container">
                        <div className="img">
                            <img src={profile} />
                            <div className="img-data">
                            <h2>Jaison Joshi</h2>
                            <p>Owns 2 properties</p>
                            </div>
                        </div>
                       
                        <div className="profile-body">
                           
                                <div className="pd-itm">
                                    <WhatsAppIcon className='icn'/><p>9562523642</p>
                                </div>
                                <div className="pd-itm">
                                    <EmailIcon className='icn'/><p>jaisonjoshi2001@gmail.com</p>
                                </div>
                                <div className="pd-itm">
                                <Link to="/vendor/updateprofile"> <CreateRoundedIcon className='icn'/><p>Edit Profile</p></Link>
                                </div>

                            
                        </div>
                    </div>
                    <div className="profile-container-1">
                        <p className="mb-8">See all bids that you have in your region. Make fast accept the bids inorder to have the customer</p>
                        <Link to="/vendor">Go to Hotels</Link>
                    </div>
                </div>
                <div className="right">
                    <div className="property-con">
                        
                        <div className="pc-head">
                        <h2>Bids in your region</h2>
                         
                        </div>
                        <div className="pc-body">
                        <HomeBid />

                            
                         
                        </div>
                    </div>
                </div>
            </div>  

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
