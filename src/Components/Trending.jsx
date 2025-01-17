import React, { useEffect } from "react";
import { FaArrowCircleLeft } from "react-icons/fa";
import TopHeaderComponent from "./TopHeaderComponent";
import CenteralDropDown from "./partials/CenteralDropDown";
import { Link } from "react-router-dom";
import { useState } from "react";
import reqFromApi from "../utils/SingReqToTmdb";
import VerticalsCard from "./partials/VerticalsCard";
import toast from "react-hot-toast";

// Trending handler.
const Trending = () => {
  const [categ, setCateg] = useState("all");
  const [duration, setDuration] = useState("day");
  const [trend, setTrend] = useState([]);
  const[page,setPage]  = useState(1);


  const TrendingHandler = async () => {
    try {
      
      // This is very curcial if you're api not work |
      const category  = categ === 'all' ? categ : categ.toLowerCase();
      const durations = duration === 'day' ? duration : duration.toLowerCase();

      // Fetched data applied it here ~
      const { data } = await reqFromApi.get(`trending/${category}/${durations}`);
      if (data?.results) {
        // Store the results in the state
        setTrend(data.results);
        console.log(data)
        //also take it prev data
        setTrend((prev)=>([...prev , ...data.results]));
      } else {
        console.warn("No results found.");
        setTrend([]); // Clear the state if no results
      }
    } catch (er) {
      console.error("Error fetching data:", er);
    }
  };
  // Categ,duration
  useEffect(() => {
    TrendingHandler();
  }, [categ, duration , page]);

  return (

  
    <div className=" w-full text-zinc-800">
      {/* Header Section */}
      <div className="flex  bg-slate-900 px-4 rounded-2xl items-center">
        <Link to="/">
          <div className=" flex items-center text-zinc-500 text-2xl font-semibold">
            <FaArrowCircleLeft size={30} className="text-red-500 mr-2" />
            Trending
          </div>
        </Link>
        <TopHeaderComponent />
        {/* Dropdown Section */}
        <div className="flex gap-12   py-4">
          <CenteralDropDown
            title="Category"
            options={["Tv", "Movie", "All"]}
            MovCate={(e) => setCateg(e.target.value)}
            // thsi is basically my values !
            genre={categ}
          />
          <CenteralDropDown
            title="Duration"
            options={["week", "day"]}
            MovCate={(e) => setDuration(e.target.value)}
            genre={duration}
          />
        </div>
      </div>
      <div className="">
        {/* vertical card */}
        <VerticalsCard trend={trend} setTrend={setTrend} />
      </div>
    </div>
  );
};

export default Trending;
