"use client";

import * as React from "react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

const SearchButton = ({ onClick } : {onClick:any}) => {

  return (
    <div className="relative">
      <Button variant="outline" size="icon" onClick={onClick}>
        <MagnifyingGlassIcon className="absolute h-[1.2rem] w-[1.2rem] transition-all rotate-0 scale-100" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </div>
  );
}

export default SearchButton;
