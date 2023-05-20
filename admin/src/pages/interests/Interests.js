import axios from "axios";
import { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import Navbar from "../../components/navbar/Navbar";
import Sidenav from "../../components/sidenav/Sidenav";
import useFetch from "../../hooks/useFetch";
import "../Hotels/hotels.scss";
const Interests = () => {
  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
})
  const [anim, setAnim] = useState("");
  useEffect(() => {
    window.addEventListener("load", setAnim("show"));
  }, []);
  const [sidenavOpen, setSideNavOpen] = useState(false);
  const handlesidenavOpen = () => {
    setSideNavOpen(!sidenavOpen);
  };
  const { data, loading, error , reFetch} = useFetch("/interests");
  const handleDelete = async(id) => {
    try {
      await axiosInstance.delete(`/interests/${id}`)
      reFetch();
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="">
      <Navbar onclick={handlesidenavOpen} />
      <Sidenav isOpen={sidenavOpen} />

      <div className={`hotels-body ${anim}`}>
        <h1 className="text-black">Interests received</h1>

        {loading ? (
          <div className="flex justify-center my-20">
            <ClipLoader />
          </div>
        ) : (
          <div className="py-8 flex flex-col gap-8">
            {data
              ?.slice(0)
              .reverse()
              .map((itm, i) => (
                <div className="shadow-lg relative bg-[#ededed] rounded px-12 py-4">
                  <div className="bg-[#00ffa6] absolute top-0 bottom-0 left-0 w-[10px] rounded-l"></div>
                  <button className="absolute top-0 right-0 bg-[#00ffa6] px-4 py-2 shadow-lg rounded-tr" onClick={()=>{handleDelete(itm._id)}}>
                    Delete this interest
                  </button>
                  <span className="font-bold text-xl">Interest</span>
                  <div className="flex flex-wrap justify-start px-4 text-lg py-4">
                    <p className="flex-1 "> Name : {itm.name}</p>
                    <p className="flex-1">Phone :{itm.phone}</p>
                    <p className="flex-1">E-mail : {itm.email}</p>
                  </div>
                  <div className="flex flex-wrap px-4 text-lg">
                    <p className="flex-1">Destination: {itm.destination}</p>
                    <p className="flex-1">
                      Travelling with: {itm.travellingWith}
                    </p>
                    <p className="flex-1">No. of People : 6</p>
                  </div>
                  <div className="px-4 py-4">
                    <p className="text-lg font-bold">
                      Any special or specifications from the trip
                    </p>
                    <p>
                     {itm.description ? itm.description : "NA"}
                    </p>
                  </div>
                  <div className="flex flex-wrap justify-start gap-8 text-lg px-4">
                    <p>Are you a salaried employee : {itm.salaried}</p>
                    <p>Are you a business owner who files ITR : {itm.itr}</p>
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Interests;
