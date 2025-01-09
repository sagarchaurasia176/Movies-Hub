import React from "react";

const CenteralDropDown = ({title, options, MovCate, genre }) => {
  return (
    <div>
      <select
        value={genre}
        onChange={MovCate}
        className="bg-zinc-800  text-white  font-normal p-2 rounded"
      >
        <option value = '0' disabled>
          {title}
        </option>
        {options.map((val, i) => (
          <>
            <option value={val} key={i}>
              {val.toUpperCase()} 
            </option>
          </>
        ))}
      </select>
    </div>
  );
};

export default CenteralDropDown;
