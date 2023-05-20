import {
  BrowserRouter,
  Routes,
  Route,

  Navigate
} from "react-router-dom";
import CircleLoading from './components/spinningLoader/CircleLoading';
import BarLoader from "react-spinners/BarLoader";
import logo from './Assets/logo.png'
import { AuthContext } from "./components/context/AuthContext.jsx";
import { useContext , useState, useEffect, lazy, Suspense} from "react";
import loadinggif from './Assets/488.gif'
const User  = lazy(()=>import("./Pages/user/User.js"))
const Login = lazy(()=>import( "./Pages/login/Login.jsx"))
const Signup = lazy(()=>import("./Pages/signup/signup.jsx"))

const UpdateUser= lazy(()=>import("./Pages/user/updateUser/UpdateUser.js"))
const CreateHotel =lazy(()=>import("./Pages/user/createHotel/CreateHotel.js"))
const SingleHotel  =lazy(()=>import("./Pages/user/singlepage/SingleHotel.js"))
const UpdateHotel =lazy(()=>import("./Pages/user/updateHotel/UpdateHotel.js"))

const TermsAndCond =lazy(()=>import("./Pages/Terms&Cond/TermsAndCond.jsx"))
const PrivacyPolicy =lazy(()=>import("./Pages/privacy policy/privacypolicy.jsx"))
const Home = lazy(()=>import('./Pages/Home/Home.jsx'))






const LoadingScreen = () => {
  return (
    <div className="h-[100vh] flex flex-col justify-center items-center">
      <img src={loadinggif} className="w-[30px]" />
      <p className="text-[#4f4d4db4] text-center px-16">
        Almost there, your destination is just around the corner!
      </p>
    </div>
  );
};

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
           <LoadingScreen />
      
      :
      <BrowserRouter>
    <Routes>
    
      <Route path='/'>
      < Route path="termandconditions" element={<Suspense><TermsAndCond/></Suspense>}/>
      < Route path="privacypolicy" element={<Suspense><PrivacyPolicy/></Suspense>}/>

        <Route path='login' >
            <Route index element={<Suspense><Login  setOpen={setOpen}/></Suspense>} />
          </Route>
          <Route path='signup'>
            <Route index element={<Suspense><Signup /></Suspense>} />
          </Route>
        <Route index element={
        <ProtectedRoute>
        
        <Home />
        </ProtectedRoute>} />
        <Route path="vendor" >
        <Route index element={<Suspense><User /></Suspense>} />
        <Route path="updateprofile" element={<Suspense><UpdateUser  setOpen={setOpen}/></Suspense>} />
        <Route path="createhotel" element={<Suspense><CreateHotel setOpen={setOpen}/></Suspense>} />
        <Route path="hotel">
        <Route path=":id" element={<Suspense><SingleHotel /></Suspense>} />
        <Route path=":id/update" element={<Suspense><UpdateHotel /></Suspense>} />
        </Route>
          </Route>
      </Route>
    </Routes>
  </BrowserRouter>}


    </div>
  
  );
}

export default App;
