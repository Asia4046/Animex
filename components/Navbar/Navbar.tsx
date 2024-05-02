"use client"

import React, { useState } from "react";
import Image from "next/image";
import { Input } from "../ui/input";
import { ModeToggle } from "../ui/ModeToggle";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import  SearchButton  from "../ui/search_button";
import SearchBar from "../ui/search_bar";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);
   
  const toggleSearchBar = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="bg-background p-[1rem] flex justify-evenly fixed nav w-full h-auto items-center transition-all">
      <div className="transition ease-in-out flex delay-150 hover:translate-y-1 hover:translate-x-1 hover:scale-100 duration-300 place-items-center mr-[45px] pr-[1.75rem] w-[230px]">
        <Image
          src="/assets/animex_no_back_1.png"
          width={55}
          height={55}
          alt="logo"
          className=""
        />
        <h3 className="font-extrabold transition ease-in-out duration-200 text-2xl antialiased hover:text-teal-500 hover:subpixel-antialiased">
          ANIMEX
        </h3>
      </div>
      <div className="flex bg-slate-100 dark:bg-slate-900 rounded-md h-auto w-screen max-[470px]:hidden transition-all ease-out ">
        <MagnifyingGlassIcon className="mt-[0.7rem] mr-[0.7rem] ml-[0.7rem]"/>
        <Input type="search" placeholder="Search Anime" className="bg-slate-100 dark:bg-slate-900"/>
      </div>
      <div className="flex pl-[2rem] pt-[2.5px]">
        <ModeToggle />
      </div>
      <div className="flex pl-[1rem] pt-[8px] min-[470px]:hidden">
        <SearchButton onClick={toggleSearchBar} />
        <SearchBar isVisible={isVisible} />
      </div>
    </div>
  );
};

export default Navbar;

//    <div className=" transition ease-in-out delay-150 hover:translate-y-1 hover:translate-x-1 hover:scale-110 duration-300  place-items-center mr-[65px] w-[230px] ">