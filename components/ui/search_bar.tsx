import React from 'react';

const SearchBar = ({ isVisible } : {isVisible: boolean}) => {
  return (
    <div
      className={` absolute transition-all ease-in-out duration-[0.2s] top-[5rem] left-0 w-full h-16 bg-slate-100  dark:bg-gray-900 rounded shadow-md ${
        isVisible ? '' : 'hidden ransition-all ease-in-out duration-[0.2s]'
      }`}
    >
      <input type="text" className="w-full h-full px-4 py-2 bg-slate-100 dark:bg-gray-900 transition ease-in-out  rounded focus:outline-none" placeholder="Search Anime" />
    </div>
  );
};

export default SearchBar;