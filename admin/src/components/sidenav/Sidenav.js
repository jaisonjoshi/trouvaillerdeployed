import { Link } from 'react-router-dom';
import './sidenav.scss';
import {useState, useEffect} from 'react'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ReviewsIcon from '@mui/icons-material/Reviews';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import RequestPageIcon from '@mui/icons-material/RequestPage';

const Sidenav = ({isOpen}) => {
    const [sideanim, setsideAnim] = useState("")
    useEffect(()=>{
        window.addEventListener('load', setsideAnim("show"))

    }, [])

    const sidenavOpenClass = isOpen ? "sidenav open" : "sidenav";
    return(
        <div className={`${sidenavOpenClass} ${sideanim} bg-[#e6e6e6] gradientbg`}>
            <ul>
                <Link to="/users">
                <li>
                    <PeopleAltIcon className='sidenav-icn'/><span >Users</span>
                </li>
                </Link>
                <Link to="/hotels">
                <li>
                    <AddBusinessIcon className='sidenav-icn'/><span>Properties</span>
                </li>
                </Link>
                <Link to="/bids">
                    <li>
                        <RequestPageIcon className='sidenav-icn'/><span>Bids</span>
                    </li>
                </Link>
                <Link to="/packages">
                <li>
                   <TravelExploreIcon className='sidenav-icn'/> <span>Packages</span>
                </li>
                </Link>
                <Link to="/reviews">
                    <li>
                        <ReviewsIcon className='sidenav-icn'/><span>Reviews</span>
                    </li>
                </Link>
               
                <Link to="/vendors">
                    <li>
                        <PeopleAltIcon className='sidenav-icn'/><span>Vendors</span>
                    </li>
                </Link>
                <Link to="/interests">
                    <li>
                        <PeopleAltIcon className='sidenav-icn'/><span>Interest Data</span>
                    </li>
                </Link>
            </ul>
        </div>
    )
}


export default Sidenav
