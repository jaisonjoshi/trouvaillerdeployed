import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import Sidenav from '../../components/sidenav/Sidenav';
import './reviews.scss';
import useFetch from "../../hooks/useFetch"
import { useEffect, useState } from 'react';
import profile from '../../components/assets/profile.jpg'
import axios from 'axios';
import PropagateLoader from "react-spinners/PropagateLoader";



const Reviews =() => {
    const [anim, setAnim] = useState("")
    useEffect(()=>{
        window.addEventListener('load', setAnim("show"))

    }, [])
    const [sidenavOpen, setSideNavOpen] = useState(false)
    const handlesidenavOpen = () => {
        setSideNavOpen(!sidenavOpen);
    }
    const axiosInstance = axios.create({
        baseURL: process.env.REACT_APP_API_URL,
    })
    const [reviews, setReviews] = useState([]);
    const {data, loading, err, reFetch} = useFetch("/reviews");
    useEffect(()=> {
         setReviews(data);
    }, [data]);
   //console.log(reviews)
    const navigate = useNavigate();
    const handleReviewUpdate = (id) => {
        navigate(`/reviews/${id}/update`);
    }
    const handleReviewDelete = async (id) => {
        try{
            const confirmDelete = window.confirm('Are you sure you want to delete this item?');

           if(confirmDelete){
            await axiosInstance.delete(`/reviews/${id}`);
            reFetch("/reviews")
           }
            
        }catch(error){
            if (error.response && error.response.status==400) {  
                
                alert('Sorry, no such review found');
              }
              if (error.response && error.response.status==404) {  
                
                alert('Sorry, no such review found');
              }
              else if (error.request) {  
                    alert('Network error! Please try again later');
                }
            else{
                alert(error.message);
            }
        }
    }
    


    return(
        <div className="reviews">
            <Navbar onclick={handlesidenavOpen}/>
            <Sidenav isOpen={sidenavOpen}/>

            <div className={`reviews-body ${anim}`}>
                    <div className="reviews-head">
                        <h2>Add, Update or delete your reviews</h2>
                        <Link to="/reviews/newreview" className='review-btn'>Create a review</Link>
                    </div>
                    <div className="review-container">
                        {loading ?  <div className='loading-div'>
                        <PropagateLoader


                            color={'#32fca7'}
                            loading={loading}

                            size={15}

                            />
                      </div>:(
                            reviews && reviews.map((rev) => (
                                <div className="review-card" key={rev._id} >
                                    <div className="review-img">
                                        <div className="review-img-container">
                                            <img src={rev.image} alt="" className='review-img-img'/>
                                        </div>
                                    </div>
                                    <div className="review-txt">
                                        <p>{rev.reviewnote}</p>
                                    </div>
                                    <div className="review-footer">
                                        <span className='author'>{rev.author} </span><span className='authorde'>{rev.place}</span>
                                    </div>
                                    <div className="review-admin">
                                        <div className="review-admin-btn-grp">
                                            <button className='review-btn'onClick={() => handleReviewUpdate(rev._id)}>Update</button>
                                            <button className='review-btn' onClick={() => handleReviewDelete(rev._id)}>Delete</button>
                                        </div>
                                    </div>
                                </div>
                        )))
                        }

                    </div>
            </div>



            
            
        </div>
    ) 
}



export default Reviews