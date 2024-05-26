import React from "react";

interface DropdownMenuGroupProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
}

const DropdownMenuGroup = React.forwardRef<
  HTMLDivElement,
  DropdownMenuGroupProps
>(({ children }, ref) => (
  <div className="group flex-col space-y-[30px] " ref={ref}>
    {children}
  </div>
));

export default DropdownMenuGroup;
