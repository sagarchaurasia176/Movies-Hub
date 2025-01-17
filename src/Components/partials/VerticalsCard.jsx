import React, { useRef, useEffect } from "react";
import toast from "react-hot-toast";
import { FaPlay } from "react-icons/fa";
import InfiniteScroll from "react-infinite-scroll-component";
import { SyncLoader } from "react-spinners";

const VerticalsCard = ({ trend, setTrend }) => {
  const loader = useRef(true);
  
  useEffect(() => {
    if (trend) {
      loader.current = false;
    }
  }, [trend]);

  return (
    <div id="scrollableDiv" className="">
      {loader.current ? (
        <div className="flex items-center justify-center">
          <SyncLoader color="#6B46C1" size={15} />
        </div>
      ) : trend?.length > 0 ? (
        <div className="flex flex-wrap justify-center">
          <InfiniteScroll
            dataLength={trend?.length}
            next={trend}
            hasMore={true}
            loader={<h4>Loading...</h4>}
            scrollableTarget="scrollableDiv"
            className=" flex  flex-wrap flex-shrink-0"
          >
            {trend.map((value, index) => (
              <div
                key={index}
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2"
              >
                <div className="bg-gray-800 text-white rounded-lg shadow-md p-4 hover:shadow-xl transition-shadow duration-300">
                  <img
                    className="w-full h-auto rounded-lg object-cover"
                    src={`https://image.tmdb.org/t/p/original${value.poster_path}`}
                    alt={value.title || value.name || "Movie Poster"}
                  />
                  <div className="relative rounded-lg -mt-6">
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
                      <FaPlay className="text-white text-3xl" />
                    </div>
                  </div>
                  <div className="mt-6">
                    <p className="text-sm font-medium text-gray-300 line-clamp-2">
                      {value.overview?.length > 50
                        ? `${value.overview.slice(0, 50)}...`
                        : value.overview || "No overview available."}
                      <span className="text-blue-500 cursor-pointer"> more</span>
                    </p>
                    <p className="text-xs text-gray-500 mt-2">
                      Size: {value.size || "N/A"}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </InfiniteScroll>
        </div>
      ) : (
        <div className="text-center flex justify-center items-center h-full">
          <p className="text-gray-500">No data available</p>
        </div>
      )}
    </div>
  );
};

export default VerticalsCard;
