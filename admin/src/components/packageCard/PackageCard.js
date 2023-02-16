import './packageCard.scss'
import packageimg from '../assets/package.png';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { useNavigate } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';

const PackageCard = ({pack}) => {
  
    const navigate = useNavigate()
    const handlepackagecardclick = () => {
        navigate(`/packages/${pack._id}`)
    }


    return(
        <div className="package-card" onClick={handlepackagecardclick}> 
            <div className="package-card-img">
                <img src={pack.images[0]} alt="" />
            </div>
            <div className="package-card-body">
                <h3>{pack.title}</h3>
                
                <p>{pack.description}</p>

            </div>
            <div className="package-card-footer">
            <h4 className='duration'>{pack.duration}</h4> 

                <h4><CurrencyRupeeIcon /> <span>{pack.cheapestPrice.toString().replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}</span></h4>
            </div>
        </div>
    )
}

export default PackageCard