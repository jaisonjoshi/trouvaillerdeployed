import './homeBid.css'
import Bidcard from '../bidCard/Bidcard';
import useFetch from '../../hooks/useFetch'
import { useEffect, useState } from 'react';

import axios from 'axios';

const HomeBid = ({hotels}) => {
    const axiosInstance = axios.create({
        baseURL: process.env.REACT_APP_API_URL,
    })
    const [bids, setBids] = useState([]);
    useEffect(()=>{
        if(hotels.length !=0){
            const getBids = async ()=> {
                let url = ""
                await hotels.map((hotel)=>{
                    hotel.locations.map((obj)=>{
                        url = url +"destination=" +obj + "&"
                    })
                })
                const bi = await axiosInstance.get("/bids?"+ url)
                setBids(bi.data)
            }
            getBids()
            
        }
        else{
            console.log("no ")
        }
    },[hotels])


   

   /*  const {data, loading,error}= useFetch(url)
    useEffect(()=> {
        setBids(data);
    },[]) */
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