import React from "react";

const CenteralDropDown = ({ title, options, MovCate, genre }) => {
  return (
    <div className="flex justify-center items-center my-4">
      <select
        value={genre}
        onChange={MovCate}
        className="bg-zinc-800 p-4 text-white font-normal rounded shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="filter" disabled>
          {title}
        </option>
          {options.map((val, i) => (
          <option value={val} key={i}>
            {val.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CenteralDropDown;
