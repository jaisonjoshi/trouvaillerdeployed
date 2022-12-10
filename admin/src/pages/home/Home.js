import BidTable from '../../components/bidTable/BidTable';
import Navbar from '../../components/navbar/Navbar';
import Sidenav from '../../components/sidenav/Sidenav';
import Widgets from '../../components/widgets/Widgets';
import timg from '../../components/assets/timg.png'
import './home.scss';
import logo from '../../components/assets/logo.png'
import headerimg from '../../components/assets/vendorbg4.jpg'
import NotificationPanel from '../../components/notificationPanel/NotificationPanel';
import {useState} from 'react'
const Home =() => {
    const [sidenavOpen, setSideNavOpen] = useState(false)
    const handlesidenavOpen = () => {
        setSideNavOpen(!sidenavOpen);
    }
    return(
        <div className="home">
            <Navbar onclick={handlesidenavOpen}/>
            <Sidenav isOpen={sidenavOpen}/>

            <div className="home-body">
                <div className="home-body-head">
                    <img src={logo} />
                </div>
                <div className="home-body-widgets">
                <Widgets type="users"/>
                                <Widgets type="packages"/>
                                <Widgets type="hotels"/>

                                <Widgets type="offers"/>
                </div>
                <div className="home-bid">
                        <h2>Recent Bid requests</h2>
                        <BidTable count="5" />
                    </div>
                {/* <div className="left">
                    <div className="home-left-header">
                        <div className="home-left-img">
                            <img src={timg} />
                        </div>
                        <div className="home-left-widgets">
                            <div className="widgets">
                                <Widgets type="users"/>
                                <Widgets type="packages"/>
                                <Widgets type="hotels"/>

                                <Widgets type="offers"/>

                            </div>
                        </div>
                    </div>
                  

                     */}
            
              {/*   <div className="right">

                    <NotificationPanel />
                </div> */}
            </div>



            
            
        </div>
    )
}

export default Home