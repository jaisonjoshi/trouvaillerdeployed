import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate} from "react-router-dom";



const Logout = () => {

const navigate=useNavigate();

    useEffect(()=>{
        fetch('auth/logout',{
            method:"GET"
            
        }).then((res)=>{
            sessionStorage.removeItem("user");
            navigate('/login',{replace:true});
            
            if(res.status!=200){
                const error=new Error (res.error);
                throw error;
            }
        }).catch((err)=>{
            //console.log(err);
            alert("An unexpected error occured!");
        })

    });


    return(
        <div>
        <div>You Have Successfully logged out!</div>
        <div>Click here to login again</div>
        <Link to='/login'>
            login
        </Link>

        </div>
    );
}
export default Logout;
