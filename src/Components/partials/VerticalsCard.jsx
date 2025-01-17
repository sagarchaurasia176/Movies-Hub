import React, { useRef } from "react";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { FaPlay } from "react-icons/fa";
import { SyncLoader } from "react-spinners"; // Example loader, you can use any

const VerticalsCard = ({ trend, setTrend }) => {
  const loader = useRef(true); // Initialize loader as true

  // Simulate data fetch effect
  useEffect(() => {
    if (trend) {
      loader.current = false; // Turn off loader once trend is available
    }
  }, [trend]);

  return (
    <div className="">
      {loader.current ? (
        // Loader component
        <div className="flex items-center justify-center">
          <SyncLoader color="#6B46C1" size={15} />
        </div>
      ) : trend?.length > 0 ? (
        // Render data
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 rounded-lg shadow-md">
          {trend.map((value, index) => (
            <div key={index} className="p-2">
              <img
                className="w-full h-auto rounded-lg shadow-lg"
                src={`https://image.tmdb.org/t/p/original${value.poster_path}`}
                alt={value.title || value.name || "Movie Poster"}
              />
              <div className="relative rounded-lg -mt-2">
                <div className="absolute inset-0 flex items-center justify-center">
                  <FaPlay className="text-white bg-purple-900 text-3xl" />
                </div>
              </div>
              <div className="mt-12">
                <p className="font-sans text-sm text-zinc-400">
                  {value.overview?.length > 40
                    ? `${value.overview.slice(0, 40)}...`
                    : value.overview || "No overview available."}
                  <span className="text-blue-500"> more</span>
                </p>
                <p className="font-sans text-sm text-zinc-400">
                  Size: {value.size || "N/A"}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        // No data available
        <div className="text-center flex justify-center">
          <p>No data available</p>
        </div>
      )}
    </div>
  );
};

export default VerticalsCard;
