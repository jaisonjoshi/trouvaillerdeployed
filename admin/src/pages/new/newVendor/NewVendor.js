import React from 'react';
import {useNavigate} from 'react-router-dom';
import Navbar from '../../../components/navbar/Navbar';
import Sidenav from '../../../components/sidenav/Sidenav';
import './newVendor.scss';
import axios from "axios"
import {useContext,useState} from "react";
import {AuthContext} from '../../../components/context/AuthContext';
// var validate = require("react-email-validator");
// var res = require("react-email-validator");


const NewVendor =() => {
    const axiosInstance = axios.create({
        baseURL: process.env.REACT_APP_API_URL,
    })
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
   // const [emailerr,setEmailerr] = useState(false);

    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;


    
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

  const { user, loading, err, dispatch } = useContext(AuthContext);
  
 

    
  const handleChangeEmail = (e) =>{

    setEmail(e.target.value);
    if (!emailRegex.test(e.target.value)) {
      setEmailError('Invalid email address');
     // setEmailerr(true);
    } else {
        
      setEmailError('');
      setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));

    }
  }
  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
    // const handleRoomChange = (e) => {
        
    // }
  
    const handleClick = async e => {
       
        e.preventDefault();
        //dispatch({ type: "REGISTER_VENDOR_START" });
        try {

           if(!emailError)
           {

           
          const res = await axiosInstance.post("/auth/register", credentials);
          //if(res.data.isAdmin){//check this code to control user and admin access to login
          if(res.data){
          //dispatch({ type: "REGISTER_VENDOR_SUCCESS", payload: res.data.details });
          
          navigate("/vendors")
         
    
                              }
          else{
           // dispatch({type:"REGISTER_VENDOR_FAILURE",payload:{message:"Invalid input for Registration!"}})
            alert("Failed to create new vendor. Please try again.")
          }
        }
        else{
            alert('Kindly try again with a valid email id.')
        }
        } catch (error) {

            if(error.response){
            
            if (error.response && error.response.status==403) {  
                
                alert('Sorry, the username already exists!');
              }
              else if (error.response && error.response.status==405) {  
                
                alert('Sorry, the email id alredy exists!');
              }
             
              else if (error.response && error.response.status==500) {  
                
                alert('Unable to create a new vendor. Kindly fill all the mandatory fields.');
              }
              else{
                alert(error.message + '. Please try again later.');
            }
            }
            else{
                alert(error.message + '. Please try again later.');
            }
              
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
                                    <label> Username <span style={{ color: "red" }}> *</span></label>
                                    <input type="text"  id="username" onChange={handleChange} required/>
                                
                                </div>
                                <div className="form-item">
                                    <label>Email-Id <span style={{ color: "red" }}> *</span></label>
                                    <input type="email" id="email" onChange={handleChangeEmail} required/>
                                   
                                
                                </div>
                                { emailError && <div className="email-err" style={{ color: "red" }}>{emailError}</div>}

                                <div className="form-item">
                                    <label>Phone number <span style={{ color: "red" }}> *</span></label>
                                    <input type="tel" id="phone" onChange={handleChange} required/>
                                </div>

                                <div className="form-item">
                                    <label>Password <span style={{ color: "red" }}> *</span></label>
                                    <input type="password" id="password" onChange={handleChange} required/>
                                
                                </div>
                                {/* <div className="form-item">
                                    <label>City</label>
                                    <input type="text" id="city" onChange={handleChange}/>
                                    
                                
                                </div>
                            
                                <div className="form-item">
                                    <label>Country</label>
                                    <input type="text" id="country" onChange={handleChange}/>
                                
                                </div> */}
                                
                                <div className="hotel-form-submit">

                                    <button  onClick={handleClick}>Create Vendor</button>
                                    {/* {err && <div style={{ color: "red" }}>{error.message}</div>}  */}
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
