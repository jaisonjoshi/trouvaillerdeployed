import './App.css';
import {useState, useEffect} from 'react'

import Home from './pages/home/Home';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Userlist from './pages/userList/Userlist';
import Packages from './pages/packages/Packages';
import NewPacakge from './pages/new/newPackage/NewPackage';
import SinglePackage from './pages/single/singlePackage/SInglePackage';
import UpdatePackage from './pages/update/updatePackage/UpdatePackage';
import Reviews from './pages/reviews/Reviews';
import NewReview from './pages/new/newReview/NewReview';
import UpdateReview from './pages/update/updateReview/UpdateReview';
import Hotels from './pages/Hotels/Hotels';
import NewHotel from './pages/new/newHotel/NewHotel';
import SingleHotel from './pages/single/singleHotel/SingleHotel';
import UpdateHotel from './pages/update/updateHotel/UpdateHotel';

import BidsContainer from './pages/bids/BidsContainer';
import SingleBid from './pages/single/singleBid/SingleBid';
import { useContext, useMemo } from 'react';
import Login from './pages/login/Login';
import { AuthContext } from './components/context/AuthContext';
//import Vendors from './pages/vendors/Vendors';
import Vendors from './pages/vendors/Vendors';
import NewVendor from './pages/new/newVendor/NewVendor'
//import Logout from './pages/logout/Logout';
import PropagateLoader from "react-spinners/PropagateLoader";
import logo from './components/assets/logo.png'
import Loading from './components/spinningLoader/CircleLoading';
import CircleLoading from './components/spinningLoader/CircleLoading';
import VendorDetails from './pages/vendors/VendorDetails';


function App() {

   
    const { user} = useContext(AuthContext);
    const [loading, setLoading] = useState(true)
    useEffect(()=> {
      setLoading(true);
      setTimeout(()=>{
        setLoading(false);
      }, 2000)
    }, [])
   
    const ProtectedRoute=({children})=>{
      const {user}=useContext(AuthContext)

      if(!user){
        return <Navigate to="/login"/>
      }
      return children;
    }
    const [open, setOpen] = useState(false)
  return (
    <div className="App">
      <CircleLoading open={open}/>
      {loading ?
           <div className='preloader'>
             <img src={logo} />
             <PropagateLoader


           color={'#32fca7'}
           loading={loading}
           
           size={15}

         /></div>
      
      :
      <BrowserRouter>

      <Routes>
        <Route path='/'>

        <Route path='login'>
            <Route index element={<Login />} />
          </Route>
              <Route index element={
               <ProtectedRoute>
                 <Home />

                   </ProtectedRoute>
                    } />
          <Route path="users">
            <Route index element={user?<Userlist />:<Login/>} />

          </Route>
          <Route path="hotels">
            <Route index element={user?<Hotels />:<Login/>} />
            <Route path=":id" element= {user?<SingleHotel />:<Login/>} />
            <Route path=':id/update' element={user?<UpdateHotel />:<Login/>} />
            <Route path='newhotel' element={user?<NewHotel setOpen={setOpen}/>:<Login/>} />
          
          </Route>
          

          <Route path="vendors">
            <Route index element={user?<Vendors />:<Login/>} />
            <Route path='newvendor' element={<NewVendor />} />
            <Route path=":id" element={<VendorDetails />} />
          </Route>

        
          <Route path="packages">
            <Route index element={user?<Packages />:<Login/>} />
            <Route path=":id" element= {<SinglePackage />} />
            <Route path=':id/update' element={<UpdatePackage setOpen={setOpen}/>} />
            <Route path='newpackage' element={<NewPacakge setOpen={setOpen}/>} />
          </Route>
          <Route path="reviews">
            <Route index element={user?<Reviews />:<Login/>} />
              <Route path=':id/update' element={<UpdateReview />} />
            <Route path='newreview' element={<NewReview  setOpen={setOpen} />} />

          </Route>
         
          <Route path='bids'>
            <Route index element={user?<BidsContainer />:<Login/>} />
            <Route path=':id' element={<SingleBid />} />
          </Route>
          

          {/*<Route path="logout">
            <Route index element={<Logout />} />
            className="bids-container"
                  </Route>*/}
          
          
        </Route>
      


      </Routes>
      
      
      </BrowserRouter>
      }
    </div>
  );
}

export default App;
