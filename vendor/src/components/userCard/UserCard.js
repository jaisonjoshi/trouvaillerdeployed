import '../../Pages/user/user.scss'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import CreateRoundedIcon from '@mui/icons-material/CreateRounded';
import { Link } from 'react-router-dom';
import profile from '../../Assets/profile.jpg'
import { AuthContext } from '../context/AuthContext';
import {useContext, useEffect, useState} from 'react'
import useFetch from '../../hooks/useFetch';


const UserCard =()=> {
    const { user, loading, error, dispatch } = useContext(AuthContext);
    const {data} = useFetch(`/user/find/${user._id}`)
    return(
        <div className="profile-container">
        <div className="img">
            <img src={data.img} />
            <div className="img-data">
                
            <h2>{data.username}</h2>
            </div>
        </div>
       
        <div className="profile-body">
           
                <div className="pd-itm">
                    <WhatsAppIcon className='icn'/><p>{data.phone}</p>
                </div>
                <div className="pd-itm">
                    <EmailIcon className='icn'/><p>{data.email}</p>
                </div>
                <div className="pd-itm">
                    <p><b>Your user ID : </b>{data._id}</p>
                </div>
                
                <div className="pd-itm">
                   <Link to="/vendor/updateprofile"> <CreateRoundedIcon className='icn'/><p>Edit Profile</p></Link>
                </div>

            
        </div>
    </div>
    )
}

export default UserCard