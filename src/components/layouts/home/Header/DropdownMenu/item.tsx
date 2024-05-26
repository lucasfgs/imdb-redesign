import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import React from "react";

const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Portal>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Portal>
>(({ children }, ref) => (
  <DropdownMenuPrimitive.Item className="group text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1">
    {children}
  </DropdownMenuPrimitive.Item>
));

export default DropdownMenuItem;
