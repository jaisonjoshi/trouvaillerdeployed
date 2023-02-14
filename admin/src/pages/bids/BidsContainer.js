import Navbar from '../../components/navbar/Navbar';
import Sidenav from '../../components/sidenav/Sidenav';
import './bidsContainer.scss';
import useFetch from '../../hooks/useFetch';
import {useState, useEffect} from 'react'

import BidTable from '../../components/bidTable/BidTable';


const BidsContainer =() => {

    const [sidenavOpen, setSideNavOpen] = useState(false)
    const handlesidenavOpen = () => {
        setSideNavOpen(!sidenavOpen);
    }
    
    const [prevbids, setPrevBids] = useState([])
   
    const {data:data2, loading:loading2} = useFetch("/bids?closed=true")
       
    useEffect(()=>{
        setPrevBids(data2);
    }, [data2])
    const [bids, setBids] = useState([]);
    const {data, loading, err} = useFetch("/bids?closed=false");
    useEffect(() => {
        setBids(data);
    },[data]);
       

    return(
        <div className="bids-container">
            <Navbar onclick={handlesidenavOpen}/>
            <Sidenav isOpen={sidenavOpen}/>
            <div className="bids-container-body">
                <h1>Recent Bids </h1>
                {(bids != undefined && bids.length !== 0) ?  (<BidTable  dat={bids}/>): (<h2 className='text-[gray] text-base'>Sorry, You have no bids to show. Please check again later</h2>)}

                <h2>Previous bids</h2>
                {(prevbids != undefined && prevbids.length !== 0) ?  (<BidTable  dat={prevbids}/>): (<h2 className='text-[gray] text-base'>Sorry, You have no bids to show. Please check again later</h2>)}

            </div>



            
            
        </div>
    )
}

export default BidsContainer