import Navbar from '../../../components/navbar/Navbar'
import Sidenav from '../../../components/sidenav/Sidenav'
import './singleOffer.scss'
import Packageimg from "../../../components/assets/package.png"
import { useLocation, useNavigate } from 'react-router-dom'
import useFecth from '../../../hooks/useFetch'
import axios from 'axios'
import {useState} from 'react'

const SingleOffer = () => {
    const [sidenavOpen, setSideNavOpen] = useState(false)
    const handlesidenavOpen = () => {
        setSideNavOpen(!sidenavOpen);
    }
    const axiosInstance = axios.create({
        baseURL: process.env.REACT_APP_API_URL,
    })
    const navigate = useNavigate();
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const {data, loading, error } = useFecth(`/offers/${id}`);


    const handleofferUpdate = (id) => {
        navigate(`/offers/${id}/update`)
    }
    const handleofferDelete = async (id) => {
        try{
            await axiosInstance.delete(`/offers/${id}`);
            navigate('/offers')
        }catch(err){
            console.log(err);
        }

    }
    return(

        <div className="Single-offer">
           <Navbar onclick={handlesidenavOpen}/>
            <Sidenav isOpen={sidenavOpen}/>

            <div className="singleoffer-container">
               {loading ? ("loading ") : (
                    <div className="singleoffer">
                    <div className="singleoffer-head">
                        <h1>{data.title}</h1>
                        <div className="singleoffer-btngrp">
                            <button className='singleoffer-btn' onClick={() => handleofferUpdate(id)}>Update Hotel</button>
                            <button className='singleoffer-btn' onClick={() => handleofferDelete(id)}>Delete Hotel</button>
                        </div>
                    </div>
                    <div className="singleoffer-body">
                        <div className="singleoffer-img">
                            <img src={Packageimg} />
                        </div>
                        <div className="singleoffer-content">  
                            <p>{data.description}</p>
                            <h3>{data.location}</h3>
                            <h2>{data.cheapestPrice}</h2>
                        </div>

                    </div>
                </div>
               )}
            </div>



            
            
        </div>
    )
}


export default SingleOffer