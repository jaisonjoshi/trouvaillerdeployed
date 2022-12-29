


import {
  BrowserRouter,
  Routes,
  Route,
  Ridirect,
  Switch,
}from "react-router-dom";
import {useState, useEffect} from 'react'
import ScrollToTop from "./scrollToTop/scrollToTop.js";
import Bidform from "./Pages/bidform/bidform.jsx";
import Home from "./Pages/home/Home.jsx";
import Login from "./Pages/login/login.jsx";
import Signup from "./Pages/signup/signup.jsx";
import IntroToBid from "./Pages/Bid/IntroBid.jsx";
import BidStatus from "./Pages/Bid/BidStatus.jsx";
import Package from "./Pages/DetailViews/Package.jsx";
import Hotel from "./Pages/DetailViews/Hotel.jsx";
import Review from "./Pages/rev/rev.jsx";
import Destination from "./Pages/trending/trending.jsx";
import Offers from "./Pages/offers/offers.jsx";
import List1_card from "./Pages/components/cards/list1.jsx";
import List2_card from "./Pages/components/cards/list2.jsx";
import Userprofile from "./Pages/userProfile/Userprofile.js";
import Updateuser from "./Pages/userProfile/Updateprofile.js";
import Updatepassword from "./Pages/userProfile/Updatepassword.js";
import CircleLoading from '../src/Pages/components/spinningLoader/CircleLoading'
import logo from './Pages/Assets/TrouvaillerGreen .png'
import BarLoader from "react-spinners/BarLoader";



function App() {

  const [loading, setLoading] = useState(true)
  useEffect(()=> {
    setLoading(true);
    setTimeout(()=>{
      setLoading(false);
    }, 2000)
  }, [])
  const [open, setOpen] = useState(false)

  return (
    <div className="App">
      <CircleLoading open={open}/>
      {loading ?
           <div className='preloader'>
             <img src={logo} />
             <BarLoader


           color={'#00b771'}
           loading={loading}
           
           size={8}

         /></div>
      
      :
      
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/user" element={<Userprofile />} />
        <Route path="/user/update" element={<Updateuser setOpen={setOpen}/>} />
        <Route path="/user/update/password" element={<Updatepassword />} />

        <Route path="/bidform" element={<Bidform/>}/>
        <Route path="/packages" element={<List1_card/>}/>
        <Route path="/hotels" element={<List2_card/>}/>

        {/* {hotels && hotels.map((hotel)=> (
                                <div className="hotel-card" key={hotel._id} onClick={() => handleClick(hotel._id)}>
                                <div className="img">
                                    <img src={hotel.images[0]} alt="" />
                                </div>
                                <div className="card-body">
                                    <h3>{hotel.title}</h3>
                                    <p>{hotel.description}</p>
                                    <div className='tags'>                                    <span className='tag'>{hotel.location}</span><span className='tag'>{hotel.cheapestPrice}</span>
                                </div>
                                </div>
                            </div>))}  */}  <Route path="/what-is-bid" element={<IntroToBid/>}/>
        <Route path="/bid-status" element={<BidStatus/>}/>
        <Route path="/package" element={<Package/>}/>
        <Route path="/hotel" element={<Hotel/>}/>
        <Route path="/rev" element={<Review/>}/>
        <Route path="/trending" element={<Destination/>}/>
        <Route path="/offers" element={<Offers/>}/>
        <Route path="/list/package/:id" element={<Package/>}/>
        <Route path="/list/hotel/:id" element={<Hotel/>}/>
      </Routes>
    </BrowserRouter>
}
    </div>
  );
}

export default App;
        

    
