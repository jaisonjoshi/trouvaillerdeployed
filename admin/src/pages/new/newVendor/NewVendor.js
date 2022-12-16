import React from 'react';
import {useNavigate} from 'react-router-dom';
import Navbar from '../../../components/navbar/Navbar';
import Sidenav from '../../../components/sidenav/Sidenav';
import './newVendor.scss';
import axios from "axios"
import {useContext,useState} from "react";
import {AuthContext} from '../../../components/context/AuthContext';

const NewVendor =() => {
    const axiosInstance = axios.create({
        baseURL: process.env.REACT_APP_API_URL,
    })
    const navigate = useNavigate();
    
    //register procedure
const [credentials, setCredentials] = useState({
    username: undefined,
    email: undefined,
    phone: undefined,
    password: undefined,
    city:undefined,
    country:undefined,
    isVendor:true
  });

  const { user, loading, error, dispatch } = useContext(AuthContext);

    

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
    // const handleRoomChange = (e) => {
        
    // }
  
    const handleClick = async e => {
       
        e.preventDefault();
        dispatch({ type: "REGISTER_START" });
        try {

           
          const res = await axiosInstance.post("/auth/register", credentials);
          //if(res.data.isAdmin){//check this code to control user and admin access to login
          if(res.data){
          dispatch({ type: "REGISTER_SUCCESS", payload: res.data.details });
          
          navigate("/vendors");
    
                              }
          else{
            dispatch({type:"REGISTER_FAILURE",payload:{message:"Invalid input for Registration!"}})
            
          }
        } catch (err) {
          dispatch({ type: "REGISTER_FAILURE", payload: {message:"Registration Unsuccessful! Please try again"}});
        }
    
    }
    return(
        <div className="new-hotel">
            <Navbar />
            <Sidenav />

            <div className="newhotel-body">
                    <h1>Create a New Vendor</h1>
                   <div className="new-hotel-box">
                    <div className="newhotelform-container">
                     <div>
                           <form >
                            
                                <div className="form-item">
                                    <label > Username</label>
                                    <input type="text"  id="username" onChange={handleChange}/>
                                
                                </div>
                                <div className="form-item">
                                    <label>Email-Id</label>
                                    <textarea type="email" id="email" onChange={handleChange}/>
                                
                                </div>
                                <div className="form-item">
                                    <label>Phone number</label>
                                    <input type="tel" id="phone" onChange={handleChange}/>
                                
                                </div>
                                <div className="form-item">
                                    <label>Password</label>
                                    <input type="password" id="password" onChange={handleChange}/>
                                
                                </div>
                                <div className="form-item">
                                    <label>City</label>
                                    <input type="text" id="city" onChange={handleChange}/>
                                    
                                
                                </div>
                            
                                <div className="form-item">
                                    <label>Country</label>
                                    <input type="text" id="country" onChange={handleChange}/>
                                
                                </div>
                                
                                <div className="hotel-form-submit">
                                    <button onClick={handleClick}>Create Vendor</button>
                                    {error && <span>{error.message}</span>} 
                                </div>
                            </form>

                        </div>
                       


                                    
                                
                          
                   </div>
            </div>



</div>            
            
        </div>
    )
}

export default NewVendor
