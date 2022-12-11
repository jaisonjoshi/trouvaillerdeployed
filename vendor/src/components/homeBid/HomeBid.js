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

        <div className="home-bid">

            {bids && bids.map((bid, i)=> (
                <Bidcard  key={i} bid={bid}/>
            ))}
        </div></>
    )
}

export default HomeBid