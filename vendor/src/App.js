import {
  BrowserRouter,
  Routes,
  Route,

  Navigate
} from "react-router-dom";
import Home from './Pages/Home/Home.jsx';
import User from "./Pages/user/User.js";
import Login from "./Pages/login/Login.jsx";
import Signup from "./Pages/signup/signup.jsx";
import logo from './Assets/logo.png'
import { AuthContext } from "./components/context/AuthContext.jsx";
import { useContext , useState, useEffect} from "react";
import UpdateUser from "./Pages/user/updateUser/UpdateUser.js";
import CreateHotel from "./Pages/user/createHotel/CreateHotel.js";
import SingleHotel from "./Pages/user/singlepage/SingleHotel.js";
import UpdateHotel from "./Pages/user/updateHotel/UpdateHotel.js";
import CircleLoading from './components/spinningLoader/CircleLoading';
import PropagateLoader from "react-spinners/PropagateLoader";


function App() {
  const [loading, setLoading] = useState(true)
    useEffect(()=> {
      setLoading(true);
      setTimeout(()=>{
        setLoading(false);
      }, 2000)
    }, [])


  const ProtectedRoute=({children})=>{
    const {user}=useContext(AuthContext)

    if(!user || user === null){
      return <Navigate to="/login"/>
    }
    return children;
  }
  const [open, setOpen] = useState(false)

  return(
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

        <Route path='login' >
            <Route index element={<Login  setOpen={setOpen}/>} />
          </Route>
          <Route path='signup'>
            <Route index element={<Signup />} />
          </Route>
        <Route index element={
        <ProtectedRoute>
        
        <Home />
        </ProtectedRoute>} />
        <Route path="vendor" >
        <Route index element={<User />} />
        <Route path="updateprofile" element={<UpdateUser  setOpen={setOpen}/>} />
        <Route path="createhotel" element={<CreateHotel setOpen={setOpen}/>} />
        <Route path="hotel">
        <Route path=":id" element={<SingleHotel />} />
        <Route path=":id/update" element={<UpdateHotel />} />
        </Route>
          </Route>
      </Route>
    </Routes>
  </BrowserRouter>}


    </div>
  
  );
}

export default App;
