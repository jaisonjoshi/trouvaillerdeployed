import BidTable from '../../components/bidTable/BidTable';
import Navbar from '../../components/navbar/Navbar';
import Sidenav from '../../components/sidenav/Sidenav';
import Widgets from '../../components/widgets/Widgets';
import timg from '../../components/assets/timg.png'
import './home.scss';
import logo from '../../components/assets/logo.png'
import headerimg from '../../components/assets/vendorbg4.jpg'
import NotificationPanel from '../../components/notificationPanel/NotificationPanel';
import {useState, useEffect} from 'react'
import useFetch from '../../hooks/useFetch';

import Loader from '../../components/loading/Loading';
const Home =() => {
    const [sidenavOpen, setSideNavOpen] = useState(false)
    const handlesidenavOpen = () => {
        setSideNavOpen(!sidenavOpen);
    }
    const {data:data2, loading:loading2} = useFetch('/bids')

    const {data,loading,error} = useFetch('/hotels/count')
    const [homebids,sethomebids] = useState([])
    useEffect(()=>{
        sethomebids(data2);
    }, [data2])
    const [anim, setAnim] = useState("")
    useEffect(()=>{
        window.addEventListener('load', setAnim("show"))

    }, [])
    console.log(data)
    return(
        <div className="home">
            <Navbar onclick={handlesidenavOpen}/>
            <Sidenav isOpen={sidenavOpen}/>
            <div className={`home-body ${anim}`}>
                <div className="home-body-head">
                    <img src={logo} />
                </div>
                <div className="home-body-widgets">
                <Widgets type="users" />
                                <Widgets type="packages"/>
                                <Widgets type="hotels"/>

                                <Widgets type="offers"/>
                </div>
                <div className="home-bid">
                        <h2>Recent Bid requests</h2>
                        {(typeof homebids !== undefined && homebids.length !== 0) ?  (<BidTable  dat={homebids}/>): (<h2 className='text-[gray] text-base'>Sorry, You have no bids to show. Please check again later</h2>)}

                        
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