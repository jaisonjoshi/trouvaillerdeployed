import Header from '../../../components/header/Header'
import './updateUser.scss'
import profile from '../../../Assets/profile.jpg'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import hotel from '../../../Assets/hotel.jpg'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import Footer from '../../../components/Footer/Footer';
import Link from 'react-router-dom'
const UpdateUser = () => {


    return(
        <>
       <Header />
      <div className="update-profile">
      <h2 className='text-center'>Update your Profile details</h2>
      
       <div className="p-box">
           
       </div>
      </div>
       <Footer />
       </>
    )
}

export default UpdateUser