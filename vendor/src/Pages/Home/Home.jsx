import React from "react";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";

import "./home.scss";
import HomeBid from "../../components/homeBid/HomeBid";
import { AuthContext } from "../../components/context/AuthContext";
import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../../components/header/Header";
import useFetch from "../../hooks/useFetch";
import UserCard from "../../components/userCard/UserCard";





const Home = () => {
  const { user, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
})
  
  
  const [bids, setbids] = useState()
  
  const {data, loading, error} = useFetch(`/bids/getvendorbids?vendorid=${user._id}`)


  useEffect(()=>{
    setbids(data)
  },[data])



  
  
  
  return (
    <div>
      {/* Header */}
      <Header/>
      <div className="profile">
                <div className="left">
                    <UserCard />
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
                        {bids != undefined &&   <HomeBid bids={bids}/>
}
                            
                         
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
