import React from "react";
import MainleftCont from "../component/MainleftCont";
import MainrightCont from "../component/MainrightCont";
import { Navigate } from "react-router-dom";
function Home() {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return (
    <>
      <div className=" flex h-screen overflow-hidden ">
        <MainleftCont />
        <MainrightCont />
      </div>
    </>
  );
}

export default Home;
