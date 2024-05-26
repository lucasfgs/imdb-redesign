import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import React from "react";

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Portal>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Portal>
>(({ children }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      className="flex items-center justify-center w-screen bg-black h-[465px]
       will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
      sideOffset={5}
    >
      <div className="flex max-w-[1442px] w-full space-x-[122px]">
        {children}
      </div>
      <DropdownMenuPrimitive.Arrow className="fill-white" />
    </DropdownMenuPrimitive.Content>
  </DropdownMenuPrimitive.Portal>
));

export default DropdownMenuContent;
