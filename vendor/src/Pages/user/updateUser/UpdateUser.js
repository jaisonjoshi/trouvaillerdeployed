import Header from '../../../components/header/Header'
import './updateUser.scss'
import profile from '../../../Assets/profile.jpg'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import hotel from '../../../Assets/hotel.jpg'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import Footer from '../../../components/Footer/Footer';
const UpdateUser = () => {


    return(
        <>
       <Header />
      <div className="profile">
      <h1 className='text-center'>Vendor Profile</h1>
       <div className="profile-box">
           <div className="box-img">
           <img src={profile} />

           </div>
           <div className="profile-details-update">
                <input type="text" name="" id="" placeholder='Name'/>
               
               <div className="details-itm">
                   <WhatsAppIcon />
                   <input type="text" name="" id="" placeholder='1234567890'/>
               </div>
               <div className="details-itm">
                   <EmailIcon />
<input type="email" name="" id="" placeholder='jaisonjoshi2001@gmail.com'/>               </div>
                <div className="details-footer">
                <button>Update Profile</button>

                </div>
           </div>
       </div>
       
      </div>
       <Footer />
       </>
    )
}

export default UpdateUser