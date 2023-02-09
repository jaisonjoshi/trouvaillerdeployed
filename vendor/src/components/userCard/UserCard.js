import '../../Pages/user/user.scss'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import CreateRoundedIcon from '@mui/icons-material/CreateRounded';
import { Link } from 'react-router-dom';
import profile from '../../Assets/profile.jpg'

const UserCard =({userobj})=> {
    return(
        <div className="profile-container">
        <div className="img">
            <img src={userobj.img} />
            <div className="img-data">
                
            <h2>{userobj.username}</h2>
            <p>Owns 2 properties</p>
            </div>
        </div>
       
        <div className="profile-body">
           
                <div className="pd-itm">
                    <WhatsAppIcon className='icn'/><p>{userobj.phone}</p>
                </div>
                <div className="pd-itm">
                    <EmailIcon className='icn'/><p>{userobj.email}</p>
                </div>
                <div className="pd-itm">
                   <Link to="/vendor/updateprofile"> <CreateRoundedIcon className='icn'/><p>Edit Profile</p></Link>
                </div>

            
        </div>
    </div>
    )
}

export default UserCard