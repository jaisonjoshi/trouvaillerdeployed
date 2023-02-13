import './homeBid.css'
import Bidcard from '../bidCard/Bidcard';
import useFetch from '../../hooks/useFetch'
import { useEffect, useState } from 'react';



const HomeBid = ({bids}) => {


   

   
    return(<>

        <div className="home-bid flex flex-wrap">
            {bids != undefined &&bids.length != 0 ? 
            bids.map((bid, i)=> (
                <div>
                    {bid.closed==false && 
                        <Bidcard  key={i} bid={bid}/>

                    }
                </div>
            )) :
            <p>You do not have any bid requests at the moment! </p>
            }
        </div></>
    )
}

export default HomeBid