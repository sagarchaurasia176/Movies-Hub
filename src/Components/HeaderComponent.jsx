import React, { useEffect, useState } from "react";
import SingReqToTmdb from "../utils/SingReqToTmdb";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { FaStar, FaCalendarAlt, FaPlay } from "react-icons/fa";
const HeaderComponent = () => {
  const [bannerStr, setStr] = useState("");

  const MovieBanner = async () => {
    try {
      let load = toast.loading("Loading...");
      const { data } = await SingReqToTmdb.get(
        "trending/all/day?language=en-US"
      );
      let randomData =
        data.results[Math.floor(Math.random() * data.results.length)];
      console.log(randomData);
      setStr(randomData);
      toast.dismiss(load);
    } catch (er) {
      console.log("Error while fetching banner image");
    }
  };

  useEffect(() => {
    if (!bannerStr) {
      MovieBanner();
    }
  }, [bannerStr]);

  return (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(https://image.tmdb.org/t/p/original${bannerStr.backdrop_path})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover", // Makes the background image responsive
        backgroundPosition:"center", // Ensures the image is centered
      }}
      className="w-full  flex  flex-col  justify-end  p-12 text-white"
    >
      {/* Content overlay */}
      <div className="text-center">
        <h1 className="text-3xl w-[50%] sm:text-2xl text-white lg:text-6xl font-bold">
          {bannerStr.title || bannerStr.name || "Loading..."}
        </h1>
        <p className="mt-2   w-[50%] text-sm lg:text-2xl md:text-base">
          {bannerStr && bannerStr.overview.slice(0, 100)}
          <Link>
            {" "}
            <b className="  animate-bounce  text-orange-300">more....</b>
          </Link>

          {/* Datas */}
          <div className=" flex mt-4">
            <p className="ml-4 flex items-center flex-row justify-center">
              <h4 className=" flex items-center gap-3 text-white font-semibold  mr-2">
                <FaCalendarAlt className=" bg-orange-300 rounded-lg p-1 " />{" "}
                {new Date(
                  bannerStr.release_date || bannerStr.first_air_date || "Comming Soon"
                ).toDateString()}
              </h4>
              <p className="ml-4 flex items-center gap-2 justify-end">
                <FaStar className=" bg-orange-300 rounded-lg p-1" />{" "}
                {bannerStr.vote_average}
                <p>{bannerStr.vote_average}</p>
              </p>
            </p>
          </div>
          <br />
          <div className=" flex items-center  justify-start bg-black  max-w-fit p-4 text-center text-zinc-400 rounded-lg  ">
            <Link>Watch Trailer</Link>
            <FaPlay className="ml-2 text-orange-300" />
          </div>
        </p>
      </div>
    </div>
  );
};

export default HeaderComponent;
