import Navbar from '../../components/navbar/Navbar';
import Sidenav from '../../components/sidenav/Sidenav';
import './bidsContainer.scss';
import useFetch from '../../hooks/useFetch';
import {useState, useEffect} from 'react'

import BidTable from '../../components/bidTable/BidTable';
import Footer from '../../components/footer/Footer';


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
            <div className="bids-container-body mb-16">
                <h1 className='gradientbg px-20 py-16 text-2xl text-[white]'>Recent Bids </h1>
<div className='px-20'>                {(bids != undefined && bids.length !== 0) ?  (<BidTable  dat={bids}/>): (<h2 className='text-[gray] text-base'>Sorry, You have no bids to show. Please check again later</h2>)}
</div>
                <h2 className='mt-12 text-2xl px-20'>Previous bids</h2>
<div className='px-20'>                {(prevbids != undefined && prevbids.length !== 0) ?  (<BidTable  dat={prevbids}/>): (<h2 className='text-[gray] text-base'>Sorry, You have no bids to show. Please check again later</h2>)}
</div>
            </div>



            
            <Footer />
        </div>
    )
}

export default BidsContainer