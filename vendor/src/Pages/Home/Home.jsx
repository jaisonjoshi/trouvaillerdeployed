import React from "react";
import Footer from "../../components/Footer/Footer";
import Headerimg from "../../Assets/Group.jpg";
import { Link } from "react-router-dom";

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
  

      <HomeBid />
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
