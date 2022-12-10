import './homeBid.css'
import Bidcard from '../bidCard/Bidcard';
import useFetch from '../../hooks/useFetch'
import { useEffect, useState } from 'react';



const HomeBid = () => {

    const [bids, setBids] = useState([]);
    const {data, loading,error}= useFetch('/bids')
    useEffect(()=> {
        setBids(data);
    },[data])
    console.log(data)
    return(<>
        <h1 className='mb-8 pl-[10%]'>Recent bids in your region</h1>

        <div className="home-bid">

            {bids && bids.map((bid, i)=> (
                <Bidcard  key={i} bid={bid}/>
            ))}
        </div></>
    )
}

export default HomeBid