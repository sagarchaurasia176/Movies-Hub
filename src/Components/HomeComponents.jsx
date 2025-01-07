import React from "react";
import SideBar from "../Templates/SideBar";
import TopHeaderComponent from "./TopHeaderComponent";

const HomeComponents = () => {
  document.title = "Mov | HomePage ";
  return (
    <>
      {/* sidebar */}
        <SideBar/>
      {/* right bar */}
      <div className=" w-[80%] bg-slate-950 h-full overflow-auto">
        {/* Top naviagetion */}
        <TopHeaderComponent/>
      </div>
    </>
  );
};

export default HomeComponents;
