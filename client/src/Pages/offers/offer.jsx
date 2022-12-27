
import React, { useState , useEffect} from 'react';
import useFetch from '../../hooks/useFetch';
import OfferCard from '../components/cards/offerCard';
import PropagateLoader from "react-spinners/PropagateLoader";

const Offer = () => {
  const [anim, setAnim] = useState("hide")
    useEffect(()=>{
        window.addEventListener('load', setAnim("show"))

    }, [])
  const {data,loading,error}=useFetch("/packages?offers=true")
            return(

              <div className={`w-full animationset ${anim}`}>
                <div className="package-card">
                    {loading?(
                       <div className='loading-div'>
                       <PropagateLoader
             
             
                           color={'#32fca7'}
                           loading={loading}
             
                           size={15}
             
                           />
                     </div>
                      ):(
                    <>
                    {data.map((item)=>(
                             <OfferCard key={item._id} item={item} />


                    ))}</>)}
            </div>
            </div>)

}

export default Offer