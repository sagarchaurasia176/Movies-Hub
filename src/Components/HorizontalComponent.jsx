import React, { useEffect, useState } from "react";
import reqFromApi from "../utils/SingReqToTmdb";
import { FaPlay } from "react-icons/fa";
import CenteralDropDown from "./partials/CenteralDropDown";

const HorizontalComponent = () => {
  const [movieText, setText] = useState([]);
  const [genre, setGenre] = useState("all");

  // TRENDINH HANDLER
  const TrendingHandler = async () => {
    try {
      const { data } = await reqFromApi.get(`trending/${genre}/day`);
      setText(data.results);
      setGenre(data.results); // This line sets the genre based on the results
      console.log(data.results);
    } catch (er) {
      console.error(er);
    }
  };
  useEffect(() => {
    TrendingHandler();
  }, [genre]);

  return (
    <div className="w-full h-full font-semibold p-4">
      <div className="font-bold flex flex-row justify-between items-center text-2xl text-zinc-400">
        <div>
          <h1 className="text-wrap">Trending</h1>
        </div>
        <div>
          <CenteralDropDown
            title="Filter"
            options={["Tv", "Movie", "All"]}
            MovCate={(e) => setGenre(e.target.value)}
            genre={genre}
          />
        </div>
      </div>
      <br />
      <div className="flex flex-row flex-wrap sm:flex-nowrap p-2 cursor-pointer overflow-x-auto text-white space-x-4">
        {movieText.map((datas, idx) => (
          <div
            key={idx}
            className="flex-none w-full sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-[15%] p-2"
          >
            <img
              className="w-full h-auto rounded-lg shadow-lg"
              src={`https://image.tmdb.org/t/p/original${datas.poster_path}`}
              alt={datas.title || datas.name || "Movie Poster"}
            />
            <div className="relative  rounded-lg  -mt-2">
              <div className="absolute inset-0 flex  items-center  justify-center">
                <FaPlay className="text-white  bg-purple-900 text-3xl" />
              </div>
            </div>
            <div className="mt-12">
              <p className="font-sans text-sm text-zinc-400">
                {datas.overview.length > 40
                  ? `${datas.overview.slice(0, 20)}...`
                  : datas.overview}
                <span className="text-blue-500"> more</span>
              </p>
              <p className="font-sans text-sm text-zinc-400">
                Size: {datas.size || "N/A"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalComponent;
