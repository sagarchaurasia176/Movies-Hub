import React, { useEffect, useState } from "react";
import { RiCloseFill, RiSearchLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import reqFromApi from "../utils/SingReqToTmdb";
import toast from "react-hot-toast";

import { useMemo } from "react";

const TopHeaderComponent = () => {
  // searchText
  const [movieText, setText] = useState("");
  const [search, setSearchResult] = useState(null);
  const CloseHandler = () => {
    setText("");
  };

  const getSearcher = async () => {
    try {
      const { data } = await reqFromApi.get(`search/multi?query=${movieText}`);
      setSearchResult(data.results);
    } catch (er) {
      console.log(er);
    }
  };


  useEffect(() => {
    if (movieText) {
      getSearcher();
    } else {
      setSearchResult(null);
    }
  }, [movieText]);

  return (
    <div className="relative w-full h-[8vh] ">
      <div className="flex items-center w-full max-w-4xl mx-auto px-4 p-4">
        <RiSearchLine className="text-2xl text-gray-600" />
        <input
          onChange={(e) => setText(e.target.value)}
          value={movieText}
          className="flex-grow text-lg font-sans outline-none border-none bg-transparent text-gray-800 mx-4 p-2"
          type="text"
          placeholder="Try searching to get started"
        />
        {movieText && (
          <RiCloseFill
            onClick={CloseHandler}
            className="text-2xl cursor-pointer text-gray-600"
          />
        )}
      </div>
      {search && (
        <div className="absolute w-[64%]  max-h-[80vh]  top-[-40rem]  overflow-y-auto ml-[15rem] text-black mt-[45rem] bg-white  border-t border-gray-200 z-50">
          {search.map((value, index) => (
            <Link
              key={index}
              to={`/details/${value.id}`}
              className="flex items-center p-4 hover:bg-gray-100"
            >
              <img
                src={value.poster_path ? `https://image.tmdb.org/t/p/w92${value.poster_path}` : 'https://static.vecteezy.com/system/resources/thumbnails/022/059/000/small/no-image-available-icon-vector.jpg'}
                alt={value.name || value.title}
                className="w-12 h-18 object-cover mr-4"
              />
              <span className="text-gray-800">
                {value.name || value.title}
              </span>
            </Link>
          ))}
        </div>
      )}

    </div>
  );
};

export default TopHeaderComponent;
