import React from "react";
import Spinner from "react-spinkit";


const Loader = () => {
  return (
    <div
         style={{
            display: "flex",
            justifyContent: "space-between",alignItems:"center"}}>
        <Spinner name="three-bounce" style={{ width: 100, height: 100 }} />
          </div>
  );
};

export default Loader;