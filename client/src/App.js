import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import TermsAndCond from "./Pages/Terms&Cond/TermsAndCond.jsx";
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
import List1_card from "./Pages/components/cards/list1.jsx";
import List2_card from "./Pages/components/cards/list2.jsx";
import Userprofile from "./Pages/userProfile/Userprofile.js";
import Updateuser from "./Pages/userProfile/Updateprofile.js";
import Updatepassword from "./Pages/userProfile/Updatepassword.js";
import CircleLoading from "../src/Pages/components/spinningLoader/CircleLoading";
import logo from "./Pages/Assets/TrouvaillerGreen .png";
import loadinggif from './Pages/Assets/488.gif'
import BarLoader from "react-spinners/BarLoader";
import Offershotels from "./Pages/offers/offershotels.jsx";
import SearchList from "./Pages/searchlist/SearchList.js";
import Offerspage from "./Pages/offers/Offerspage.jsx";
import SearchListPack from "./Pages/searchlist/SearchlistPack.js";
import SearchListType from "./Pages/searchlist/searchListType.js";
import SearchListPackType from "./Pages/searchlist/SearchListPackType.js";
import PrivacyPolicy from "./Pages/privacy policy/privacypolicy.jsx";
import Emipage from "./Pages/emipage/Emipage.js";

function App() {
  const [loading, setLoading] = useState(true);
  /* useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []); */
  const [open, setOpen] = useState(false);
  const [location, setlocation] = useState("");
  const [type, settype] = useState("");
  useEffect(() => {
    document.addEventListener("DOMContentLoaded", handleContentLoaded);

    return () => {
      document.removeEventListener("DOMContentLoaded", handleContentLoaded);
    };
  }, []);

  const handleContentLoaded = () => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };
  return (
    <div className="App">
      <CircleLoading open={open} />
      {loading ? (
        <div className="preloader">
          <img src={loadinggif}  className="w-[30px]"/>
          <h1 className="text-[#4f4d4db4] text-center px-16">Almost there, your destination is just around the corner!
</h1>
        </div>
      ) : (
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/se" element={<SearchList location={location} />} />
            <Route path="/set" element={<SearchListType type={type} />} />

            <Route
              path="/sep"
              element={<SearchListPack location={location} />}
            />
            <Route path="/sept" element={<SearchListPackType type={type} />} />

            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/user" element={<Userprofile />} />
            <Route
              path="/user/update"
              element={<Updateuser setOpen={setOpen} />}
            />
            <Route path="/user/update/password" element={<Updatepassword />} />
            <Route path="/emi" element={<Emipage />} />

            <Route path="/bidform" element={<Bidform />} />
            <Route
              path="/packages"
              element={
                <List2_card setlocation={setlocation} settype={settype} />
              }
            />
            <Route
              path="/hotels"
              element={
                <List1_card setlocation={setlocation} settype={settype} />
              }
            />

            <Route path="/what-is-bid" element={<IntroToBid />} />
            <Route path="/bid-status" element={<BidStatus />} />
            <Route path="/package" element={<Package />} />
            <Route path="/hotel" element={<Hotel />} />
            <Route path="/rev" element={<Review />} />
            <Route path="/trending" element={<Destination />} />
            <Route path="/traveloffers" element={<Offerspage />} />
            <Route path="/hoteloffers" element={<Offershotels />} />

            <Route path="/offershotels" element={<Offershotels />} />

            <Route path="/list/package/:id" element={<Package />} />
            <Route path="/list/hotel/:id" element={<Hotel />} />

            <Route path="/termandconditions" element={<TermsAndCond />} />
            <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
