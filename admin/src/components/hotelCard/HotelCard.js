import './hotelCard.scss'
import packageimg from '../assets/package.png';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { useNavigate } from 'react-router-dom';


const HotelCard = ({hotel}) => {
    const navigate = useNavigate()
    const handlehotelcardclick = () => {
        navigate(`/hotels/${hotel._id}`)
    }

    return(
        <div className="hotel-card" onClick={handlehotelcardclick}>
            <div className="hotel-card-img">
                <img src={hotel.images[0]} alt="" />
            </div>
            <div className="hotel-card-body">
                <h3>{hotel.title}</h3>
                <p>{hotel.description}</p>

            </div>
            <div className="hotel-card-footer">
            <h4 className='duration'>{hotel.location}</h4> 

                <h4><CurrencyRupeeIcon /> {hotel.cheapestPrice.toString().replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}</h4>
            </div>
        </div>
    )
}

export default HotelCard