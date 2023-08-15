import './widgets.scss'
import TourIcon from '@mui/icons-material/Tour';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import useFetch from '../../hooks/useFetch'

import { Link } from 'react-router-dom';


const Widgets = ({type}) => {
    let dat;

    switch (type) {
        case "users" : 
            dat = {
                title : "USERS",
                countlink: "/user/countusers",
                icon: (
                    <PeopleAltIcon className='widget-header-icn' style={{  color: "red" }}/>

                ),
                link: "/users"

            };
            break;
            case "packages" :
                dat = {
                    title : "PACKAGES",
                    countlink: "/packages/count",
                    icon: (
                        <TourIcon className='widget-header-icn' style={{  color: "blue" }}/>
    
                    ),
                    link: "/packages"
    
                };
                break;
                case "hotels" :
                dat = {
                    title : "HOTELS",
                    countlink: "/hotels/count",
                    icon: (
                        <AddBusinessIcon className='widget-header-icn' style={{  color: "violet" }}/>
    
                    ),
                    link: "/hotels"
    
                };
                break;
                case "offers" :
                dat = {
                    title : "VENDORS",
                    countlink: "/user/countvendors",
                    icon: (
                        <LocalOfferIcon className='widget-header-icn' style={{  color: "yellow" }}/>
    
                    ),
                    link: "/vendors"
    
                };
                break;
                default: break;

    }
    const {data} = useFetch(dat.countlink);

    return(
        <div className="widget">
            <div className="widget-header">
            <h4 className='text-xl'> {dat.title}</h4>
            </div>
            <div className="widget-body">
            <h1 className='text-3xl'>{data}</h1>{dat.icon}
            </div>
            <div className="widget-footer">
            <Link to={dat.link} className='bg-[#00A45E] px-4 py-1 text-[white]' >View</Link>
            </div>
        </div>
    )
}


export default Widgets