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
import { useContext } from "react";
import UpdateUser from "./Pages/user/updateUser/UpdateUser.js";
import CreateHotel from "./Pages/user/createHotel/CreateHotel.js";
import SingleHotel from "./Pages/user/singlepage/SingleHotel.js";
import UpdateHotel from "./Pages/user/updateHotel/UpdateHotel.js";


function App() {

  const ProtectedRoute=({children})=>{
    const {user}=useContext(AuthContext)

    if(!user){
      return <Navigate to="/login"/>
    }
    return children;
  }
  return(
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
        <Route path="updateprofile" element={<UpdateUser />} />
        <Route path="createhotel" element={<CreateHotel />} />
        <Route path="hotel">
        <Route path=":id" element={<SingleHotel />} />
        <Route path=":id/update" element={<UpdateHotel />} />
        </Route>
          </Route>
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
