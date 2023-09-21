import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState,useEffect, lazy, Suspense } from "react";
import ScrollToTop from "./scrollToTop/scrollToTop.js";
import CircleLoading from "../src/Pages/components/spinningLoader/CircleLoading";
import loadinggif from "./Pages/Assets/travelgif.gif";
import TagManager from 'react-gtm-module'
import ResetPassword from "./Pages/login/resetPassword.jsx";


const Home = lazy(()=>import('./Pages/home/Home'))
const TermsAndCond = lazy(() => import("./Pages/Terms&Cond/TermsAndCond"));
const Emipage = lazy(() => import("./Pages/emipage/Emipage.js"));
const PrivacyPolicy = lazy(() =>
  import("./Pages/privacy policy/privacypolicy.jsx")
);
const Ebook = lazy(()=> import('./Pages/ebook/Ebook.js'))
const SearchListPackType = lazy(() =>
  import("./Pages/searchlist/SearchListPackType.js")
);
const SearchListType = lazy(() =>
  import("./Pages/searchlist/searchListType.js")
);
const SearchListPack = lazy(() =>
  import("./Pages/searchlist/SearchlistPack.js")
);
const Offerspage = lazy(() => import("./Pages/offers/Offerspage.jsx"));
const SearchList = lazy(() => import("./Pages/searchlist/SearchList.js"));
const Offershotels = lazy(() => import("./Pages/offers/offershotels.jsx"));
const Updatepassword = lazy(() =>
  import("./Pages/userProfile/Updatepassword.js")
);
const Updateuser = lazy(() => import("./Pages/userProfile/Updateprofile.js"));
const Userprofile = lazy(() => import("./Pages/userProfile/Userprofile.js"));
const List2_card = lazy(() => import("./Pages/components/cards/list2.jsx"));
const List1_card = lazy(() => import("./Pages/components/cards/list1.jsx"));
const Hotel = lazy(() => import("./Pages/DetailViews/Hotel.jsx"));
const Package = lazy(() => import("./Pages/DetailViews/Package.jsx"));
const BidStatus = lazy(() => import("./Pages/Bid/BidStatus.jsx"));
const IntroToBid = lazy(() => import("./Pages/Bid/IntroBid.jsx"));
const Signup = lazy(() => import("./Pages/signup/signup.jsx"));
const Login = lazy(() => import("./Pages/login/login.jsx"));
const Bidform = lazy(() => import("./Pages/bidform/bidform.jsx"));
const tagManagerArgs = {
  gtmId: 'G-LF63P71ZJD'
}
TagManager.initialize(tagManagerArgs)


const LoadingScreen = () => {
  return (
    <div className="preloader">
      <img src={loadinggif} className="w-[150px]" />
      <h1 className="text-[#4f4d4db4] text-center px-16">
        Almost there, your destination is just around the corner!
      </h1>
    </div>
  );
};
function App() {
  const [popupShow, setPopupShow] = useState(false)

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setTimeout(()=>{
        setPopupShow(true)
      }, 3000)
    }, 3500);
  }, []);
  const [open, setOpen] = useState(false);
  const [location, setlocation] = useState("");
  const [type, settype] = useState("");
  /* useEffect(() => {
    document.addEventListener("DOMContentLoaded", handleContentLoaded);

    return () => {
      document.removeEventListener("DOMContentLoaded", handleContentLoaded);
    };
  }, []);

  const handleContentLoaded = () => {
    setTimeout(() => {
      setLoading(false);

    }, 1000);
  }; */

 
  return (
    <div className="App">
      <CircleLoading open={open} />
      {loading ? (
        <div className="preloader">
          <img src={loadinggif} className="w-[150px]" />
          <h1 className="text-[#4f4d4db4] text-center px-16">
            Almost there, your destination is just around the corner!
          </h1>
        </div>
      ) : (
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route
              path="/se/:id"
              element={
                <Suspense fallback={<LoadingScreen />}>
                  <SearchList location={location} />
                </Suspense>
              }
            />
            <Route
              path="/set/:id"
              element={
                <Suspense fallback={<LoadingScreen />}>
                  <SearchListType type={type} />
                </Suspense>
              }
            />

            <Route
              path="/sep/:id"
              element={
                <Suspense fallback={<LoadingScreen />}>
                  <SearchListPack  />
                </Suspense>
              }
            />
             <Route
              path="ebook"
              element={
                <Suspense fallback={<LoadingScreen />}>
                  <Ebook  />
                </Suspense>
              }
            />
            <Route
              path="/sept/:id"
              element={
                <Suspense fallback={<LoadingScreen />}>
                  <SearchListPackType type={type} />
                </Suspense>
              }
            />

            <Route
              path="/"
              element={
                <Suspense fallback={<LoadingScreen />}>
                <Home setlocation={setlocation} popupShow={popupShow} setPopupShow={setPopupShow}/>
              </Suspense>
              }
            />
            <Route
              path="/login"
              element={
                <Suspense fallback={<LoadingScreen />}>
                  <Login />
                </Suspense>
              }
            />
            <Route
              path="/signup"
              element={
                <Suspense fallback={<LoadingScreen />}>
                  <Signup />
                </Suspense>
              }
            />
            <Route
              path="/user"
              element={
                <Suspense fallback={<LoadingScreen />}>
                  <Userprofile />
                </Suspense>
              }
            />
            <Route
              path="/user/update"
              element={
                <Suspense fallback={<LoadingScreen />}>
                  <Updateuser setOpen={setOpen} />
                </Suspense>
              }
            />
            <Route
              path="/user/update/password"
              element={
                <Suspense fallback={<LoadingScreen />}>
                  <Updatepassword />
                </Suspense>
              }
            />
            <Route
              path="/emi"
              element={
                <Suspense fallback={<LoadingScreen />}>
                  <Emipage />
                </Suspense>
              }
            />

            <Route
              path="/bidform"
              element={
                <Suspense fallback={<LoadingScreen />}>
                  <Bidform />
                </Suspense>
              }
            />
            <Route
              path="/packages"
              element={
                <Suspense fallback={<LoadingScreen />}>
                  <List2_card setlocation={setlocation} settype={settype} />
                </Suspense>
              }
            />
            <Route
              path="/hotels"
              element={
                <Suspense fallback={<LoadingScreen />}>
                  <List1_card setlocation={setlocation} settype={settype} />
                </Suspense>
              }
            />

            <Route
              path="/what-is-bid"
              element={
                <Suspense fallback={<LoadingScreen />}>
                  <IntroToBid />
                </Suspense>
              }
            />
            <Route
              path="/bid-status"
              element={
                <Suspense fallback={<LoadingScreen />}>
                  <BidStatus />
                </Suspense>
              }
            />
            <Route
              path="/package"
              element={
                <Suspense fallback={<LoadingScreen />}>
                  <Package />
                </Suspense>
              }
            />
            <Route
              path="/hotel"
              element={
                <Suspense fallback={<LoadingScreen />}>
                  <Hotel />
                </Suspense>
              }
            />
            
            <Route
              path="/traveloffers"
              element={
                <Suspense fallback={<LoadingScreen />}>
                  <Offerspage />
                </Suspense>
              }
            />
            <Route
              path="/hoteloffers"
              element={
                <Suspense fallback={<LoadingScreen />}>
                  <Offershotels />
                </Suspense>
              }
            />

            <Route
              path="/offershotels"
              element={
                <Suspense fallback={<LoadingScreen />}>
                  <Offershotels />
                </Suspense>
              }
            />

            <Route
              path="/list/package/:id"
              element={
                <Suspense fallback={<LoadingScreen />}>
                  <Package />
                </Suspense>
              }
            />
            <Route
              path="/list/hotel/:id"
              element={
                <Suspense fallback={<LoadingScreen />}>
                  <Hotel />
                </Suspense>
              }
            />

            <Route
              path="/termandconditions"
              element={
                <Suspense fallback={<LoadingScreen />}>
                  <TermsAndCond />
                </Suspense>
              }
            />
            <Route
              path="/privacypolicy"
              element={
                <Suspense fallback={<LoadingScreen />}>
                  <PrivacyPolicy />
                </Suspense>
              }
            />
            <Route
              path="/reset-password/:id/:token"
              element={
                
                  <ResetPassword />
                
              }
            />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
