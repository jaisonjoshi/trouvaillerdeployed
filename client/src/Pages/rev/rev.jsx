import React from 'react'
import Navbar from '../components/navbar/navbar'
import Reviewpage from '../components/cards/reviewpage'

import Footer from '../components/Footer/Footer'



const Home = () => {
    return (
        <div className="">
            
        <Navbar />
        <div className="h:50">

        </div>
        <div classname=""><h>Reviews</h></div>
        <div className="grid  sm:grid-cols-2 md:grid-cols-3 gap-30 m-11">
                <Reviewpage />
                
                
            </div>
            <Footer/>

        </div>    
    )
}
export default Home

 
