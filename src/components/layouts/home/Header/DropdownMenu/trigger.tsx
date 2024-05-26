import { cn } from "@/utils/cn";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import React from "react";

const DropdownMenuTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Trigger>
>(({ children, className }, ref) => (
  <DropdownMenuPrimitive.Trigger asChild ref={ref}>
    <div
      className={cn(
        "flex items-center justify-center cursor-pointer ",
        className
      )}
    >
      {children}
    </div>
  </DropdownMenuPrimitive.Trigger>
));

export default DropdownMenuTrigger;
