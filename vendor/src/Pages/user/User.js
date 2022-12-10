import Footer from '../../components/Footer/Footer'
import Header from '../../components/header/Header'
import './user.scss'
import profile from '../../Assets/profile.jpg'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import hotel from '../../Assets/hotel.jpg'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { Link, Navigate, useNavigate } from 'react-router-dom';
const User = () => {
    const navigate = useNavigate()
    const handleClick = (val) => {
        navigate(`/vendor/hotel/${val}`);
    }
    return(
        <>
       <Header />
      <div className="profile">
      <h1 className='text-center'>Vendor Profile</h1>
       <div className="profile-box">
           <div className="box-img">
           <img src={profile} />

           </div>
           <div className="profile-details">
               <h1>Name of vendor</h1>
               
               <div className="details-itm">
                   <WhatsAppIcon />
                   <span>123456789</span>
               </div>
               <div className="details-itm">
                   <EmailIcon />
                   <span>jaisonjoshi@gmail.com</span>
               </div>
                <div className="details-footer">
                <Link to="/vendor/updateprofile"><button>Update Profile</button></Link>

                </div>
           </div>
       </div>
       <div className="hotel-box">
           <div className="hotel-box-head">
               <span>Hotels</span><Link to="/vendor/createhotel"><button>Create a hotel</button></Link>
           </div>
            <div className="hotel-container">
            <div className="hotel-card" onClick={() => handleClick("328t648")}>
            <div className="hotel-card-img">
                <img src={hotel} alt="" />
            </div>
            <div className="hotel-card-body">
                <h2 className='text-xl'>Hotel Nmae</h2>
                <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit nihil laboriosam sapiente modi qui excepturi delectus facere eum. Facere ea, aspernatur ullam nulla placeat eaque dolore id repellendus magnam repudiandae.</p>

            </div>
            <div className="hotel-card-footer">
            <h3 className='duration'>Munnar</h3> 

                <h2><CurrencyRupeeIcon /> 5000/-</h2>
            </div>
        </div>
        <div className="hotel-card" /* onClick={handlehotelcardclick} */>
            <div className="hotel-card-img">
                <img src={hotel} alt="" />
            </div>
            <div className="hotel-card-body">
                <h2 className='text-xl'>Hotel Nmae</h2>
                <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit nihil laboriosam sapiente modi qui excepturi delectus facere eum. Facere ea, aspernatur ullam nulla placeat eaque dolore id repellendus magnam repudiandae.</p>

            </div>
            <div className="hotel-card-footer">
            <h3 className='duration'>Munnar</h3> 

                <h2><CurrencyRupeeIcon /> 5000/-</h2>
            </div>
        </div>
            </div>
           
       </div>
      </div>
       <Footer />
       </>
    )
}

export default User