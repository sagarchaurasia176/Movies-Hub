import React, { useEffect } from "react";
import { FaArrowCircleLeft } from "react-icons/fa";
import TopHeaderComponent from "./TopHeaderComponent";
import CenteralDropDown from "./partials/CenteralDropDown";
import { Link } from "react-router-dom";
import { useState } from "react";
import reqFromApi from "../utils/SingReqToTmdb";
import VerticalsCard from "./partials/VerticalsCard";

// Trending handler.
const Trending = () => {
  const [categ, setCateg] = useState("all");

  const [duration, setDuration] = useState("day");
  const [trend, setTrend] = useState("");

  const TrendingHandler = async () => {
    try {
      const category = categ === "all" ? "movie" : categ.toLowerCase();
      const { data } = await reqFromApi.get(`trending/${category}/day`);
      if (data?.results) {
        setCateg(data.results); // Store the results in the state
      } else {
        console.warn("No results found.");
        setCateg([]); // Clear the state if no results
      }
    } catch (er) {
      console.error("Error fetching data:", er);
    }
  };

  useEffect(() => {
    TrendingHandler();
  }, [categ, duration]);

  return (
    <div className="px-12 w-full text-zinc-800">
      {/* Header Section */}
      <div className="flex w-full bg-white px-4 rounded-2xl items-center">
        <Link to="/">
          <div className=" flex items-center text-zinc-500 text-2xl font-semibold">
            <FaArrowCircleLeft size={30} className="text-red-500 mr-2" />
            Trending
          </div>
        </Link>
        <TopHeaderComponent />
        {/* Dropdown Section */}
        <div className="flex gap-12   py-4">
          <CenteralDropDown title="Category" options={["Tv", "Movie", "All"]} />
          <CenteralDropDown title="Duration" options={["week", "day"]} />
        </div>
      </div>
      {/* vertical card */}
      <VerticalsCard/>
    </div>
  );
};

export default Trending;
