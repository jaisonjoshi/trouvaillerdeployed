import {
  BrowserRouter,
  Routes,
  Route,
  Ridirect,
  Switch,
  Navigate
} from "react-router-dom";
import Home from './Pages/Home/Home.jsx';
import User from "./Pages/user/User.js";
import Login from "./Pages/login/Login.jsx";

import { AuthContext } from "./components/context/AuthContext.jsx";
import { useContext, useState, useEffect } from "react";
import UpdateUser from "./Pages/user/updateUser/UpdateUser.js";
import CreateHotel from "./Pages/user/createHotel/CreateHotel.js";
import SingleHotel from "./Pages/user/singlepage/SingleHotel.js";
import UpdateHotel from "./Pages/user/updateHotel/UpdateHotel.js";
import CircleLoading from './components/spinningLoader/CircleLoading'
import logo from './Assets/logo.png'
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

  const ProtectedRoute=({children})=>{
    const {user}=useContext(AuthContext)

    if(!user){
      return <Navigate to="/login"/>
    }
    return children;
  }
  return(
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
    <Routes>
    
      <Route path='/'>

        <Route path='login'>
            <Route index element={<Login />} />
          </Route>
        <Route index element={
        <ProtectedRoute>
        
        <Home />
        </ProtectedRoute>} />
        <Route path="vendor" >
        <Route index element={<User />} />
        <Route path="updateprofile" element={<UpdateUser setOpen={setOpen} />} />
        <Route path="createhotel" element={<CreateHotel setOpen={setOpen} />} />
        <Route path="hotel">
        <Route path=":id" element={<SingleHotel />} />
        <Route path=":id/update" element={<UpdateHotel />} />
        </Route>
          </Route>
      </Route>
    </Routes>
  </BrowserRouter>
}
</div>
  );
}

export default App;
