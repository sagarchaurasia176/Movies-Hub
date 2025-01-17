import React from "react";
import SideBar from "../Templates/SideBar";
import TopHeaderComponent from "./TopHeaderComponent";
import GlobalComponentFromRghtSide from "./GlobalComponentFromRghtSide";

const HomeComponents = () => {
  document.title = "Mov | HomePage ";
  return (
    <>

      {/* sidebar */}
        <SideBar/>
      {/* right bar */}
      <div className=" w-[80%]   bg-slate-950  h-screen overflow-auto">
        <GlobalComponentFromRghtSide/>
        {/* Top naviagetion */}
        {/* <TopHeaderComponent/> */}
      </div>
    </>
  );
};

export default HomeComponents;
