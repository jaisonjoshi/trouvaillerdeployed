import Navbar from '../../components/navbar/Navbar';
import Sidenav from '../../components/sidenav/Sidenav';
import './bidsContainer.scss';
import {useState} from 'react'

import BidTable from '../../components/bidTable/BidTable';


const BidsContainer =() => {

    const [sidenavOpen, setSideNavOpen] = useState(false)
    const handlesidenavOpen = () => {
        setSideNavOpen(!sidenavOpen);
    }

    return(
        <div className="bids-container">
            <Navbar onclick={handlesidenavOpen}/>
            <Sidenav isOpen={sidenavOpen}/>
            <div className="bids-container-body">
                <h1>Recent Bids </h1>
                <BidTable count="9"/>
            </div>



            
            
        </div>
    )
}

export default BidsContainer