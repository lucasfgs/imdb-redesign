import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";

interface DropdownMenuImageProps extends React.HTMLAttributes<HTMLSpanElement> {
  src: string | StaticImport;
  alt: string;
}

const DropdownMenuImage = React.forwardRef<
  HTMLDivElement,
  DropdownMenuImageProps
>(({ alt, src }, ref) => (
  <div className="flex-1" ref={ref}>
    <Image src={src} alt={alt} className="ml-auto" />
  </div>
));

export default DropdownMenuImage;
