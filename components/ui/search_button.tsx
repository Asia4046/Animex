"use client"

import * as React from "react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { MagnifyingGlassIcon } from "@radix-ui/react-icons"

export function SearchButton() {
  const { setTheme } = useTheme()

  return (
        <Button variant="outline" size="icon">
          <MagnifyingGlassIcon className="absolute h-[1.2rem] w-[1.2rem] transition-all rotate-0 scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
  )
}
