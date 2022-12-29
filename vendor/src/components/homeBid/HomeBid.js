import './homeBid.css'
import Bidcard from '../bidCard/Bidcard';
import useFetch from '../../hooks/useFetch'
import { useEffect, useState } from 'react';



const HomeBid = ({url}) => {
    const [bids, setBids] = useState([]);


   

    const {data, loading,error}= useFetch(url)
    useEffect(()=> {
        setBids(data);
    },[data])
    return(<>

        <div className="home-bid">
            {bids.length != 0 ? 
            bids.map((bid, i)=> (
                <Bidcard  key={i} bid={bid}/>
            )) :
            <h3>You have no any bid requests till now</h3>
            }
        </div></>
    )
}

export default HomeBid