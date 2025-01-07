import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  RiFireLine,
  RiStarLine,
  RiFilmLine,
  RiTvLine,
  RiUserLine,
  RiContactsBook3Line,
  RiBarChartGroupedFill,
} from "react-icons/ri";


const SideBar = () => {
    return (
    <>
      <div className="  border-r-2 border-zinc-600 p-10 bg-slate-950 w-[20%]  h-full">
        <h1 className=" text-2xl flex items-center gap-2  font-semibold">
          <svg
            className=" w-12"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="rgba(141,0,0,1)"
          >
            <path d="M12 20H20V22H12C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 14.2512 21.2561 16.3287 20.0007 18H17.2916C18.9525 16.5341 20 14.3894 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 10C10.8954 10 10 9.10457 10 8C10 6.89543 10.8954 6 12 6C13.1046 6 14 6.89543 14 8C14 9.10457 13.1046 10 12 10ZM8 14C6.89543 14 6 13.1046 6 12C6 10.8954 6.89543 10 8 10C9.10457 10 10 10.8954 10 12C10 13.1046 9.1046 14 8 14ZM16 14C14.8954 14 14 13.1046 14 12C14 10.8954 14.8954 10 16 10C17.1046 10 18 10.8954 18 12C18 13.1046 17.1046 14 16 14ZM12 18C10.8954 18 10 17.1046 10 16C10 14.8954 10.8954 14 12 14C13.1046 14 14 14.8954 14 16C14 17.1046 13.1046 18 12 18Z"></path>
          </svg>
          {/* <i class="ri-movie-2-line text-purple-400"></i> */}
          <span className="  text-2xl text-white">Movies | Hub</span>
        </h1>

        {/* next feed */}
        <nav className=" flex flex-col  text-zinc-400 text-xl gap-3">
          <h1 className=" text-white font-semibold  mt-10 mb-5 ">New Feeds</h1>
          <Link className=" hover:bg-purple-300 hover:text-white  rounded-lg  duration-300 p-5 flex items-center gap-2">
            <RiFireLine /> Trending
          </Link>
          <Link className=" hover:bg-purple-300 hover:text-white  rounded-lg  duration-300 p-5 flex items-center gap-2">
            <RiStarLine /> Popular
          </Link>
          <Link className=" hover:bg-purple-300 hover:text-white  rounded-lg  duration-300 p-5 flex items-center gap-2">
            <RiFilmLine /> Movies
          </Link>
          <Link className=" hover:bg-purple-300 hover:text-white  rounded-lg  duration-300 p-5 flex items-center gap-2">
            <RiTvLine /> Tv Shows
          </Link>
          <Link className=" hover:bg-purple-300 hover:text-white  rounded-lg  duration-300 p-5 flex items-center gap-2">
            <RiUserLine /> People
          </Link>
        </nav>
        <br />
        <hr className="  border-none bg-transparent  h-1 bg-zinc-400" />
        {/* next feed */}
        <br />
        <nav className=" flex flex-col  text-zinc-400 text-xl gap-3">
          <h1 className=" text-white font-semibold   ">Website Information</h1>
          <Link className=" hover:bg-purple-300 hover:text-white  rounded-lg  duration-300 p-5 flex items-center gap-2">
            <RiBarChartGroupedFill /> About us
          </Link>
          <Link className=" hover:bg-purple-300 hover:text-white  rounded-lg  duration-300 p-5 flex items-center gap-2">
            <RiContactsBook3Line/> Contacts
          </Link>
        </nav>
      </div>
    </>
  );
};

export default SideBar;
