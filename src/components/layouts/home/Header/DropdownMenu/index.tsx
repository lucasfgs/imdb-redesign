"use client";

import React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";

import Image from "next/image";

import DropdownMenuContent from "./content";
import DropdownMenuGroup from "./group";
import DropdownMenuImage from "./image";
import DropdownMenuItem from "./item";
import DropdownMenuTrigger from "./trigger";

const DropdownMenu = DropdownMenuPrimitive.Root;

export {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuImage,
  DropdownMenuItem,
  DropdownMenuTrigger,
};

const DropdownMenuDemo = () => {
  return (
    <DropdownMenuPrimitive.Root>
      <DropdownMenuPrimitive.Trigger asChild>
        <span className="flex items-center justify-center cursor-pointer">
          <span className="text-[13px] leading-none text-violet11">Movies</span>
        </span>
      </DropdownMenuPrimitive.Trigger>

      <DropdownMenuPrimitive.Portal>
        <DropdownMenuPrimitive.Content
          className="flex items-center justify-center w-screen bg-black h-[465px]
             will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
          sideOffset={5}
        >
          <div className="flex max-w-[1442px] w-full space-x-[122px]">
            <div className="group flex-col space-y-[30px] ">
              <DropdownMenuPrimitive.Item className="group text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1">
                Top 250 Movies
              </DropdownMenuPrimitive.Item>
              <DropdownMenuPrimitive.Item className="group text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1">
                Most Popular Movies
              </DropdownMenuPrimitive.Item>
              <DropdownMenuPrimitive.Item className="group text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1">
                Top Box Office
              </DropdownMenuPrimitive.Item>
            </div>

            <div className="group flex-col space-y-[30px] ">
              <DropdownMenuPrimitive.Item className="group text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1">
                Release Calendar
              </DropdownMenuPrimitive.Item>
              <DropdownMenuPrimitive.Item className="group text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1">
                Browse Movies by Genre
              </DropdownMenuPrimitive.Item>
              <DropdownMenuPrimitive.Item className="group text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1">
                Movie News
              </DropdownMenuPrimitive.Item>
              <DropdownMenuPrimitive.Item className="group text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1">
                Showtimes and Tickets
              </DropdownMenuPrimitive.Item>
              <DropdownMenuPrimitive.Item className="group text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1">
                India Movie Spotlight
              </DropdownMenuPrimitive.Item>
            </div>

            <div className="flex-1">
              <Image
                src={require("@/assets/images/popcorn.svg")}
                alt="Porpcorn image"
                className="ml-auto"
              />
            </div>
          </div>
          <DropdownMenuPrimitive.Arrow className="fill-white" />
        </DropdownMenuPrimitive.Content>
      </DropdownMenuPrimitive.Portal>
    </DropdownMenuPrimitive.Root>
  );
};

export default DropdownMenuDemo;
