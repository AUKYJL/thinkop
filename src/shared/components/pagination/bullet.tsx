import React from "react";

import { cn } from "../../lib/utils";

interface Props {
  className?: string;
  activeSlide: number;
  i: number;

  onClick: () => void;
}

export const Bullet: React.FC<Props> = ({
  className,
  activeSlide,

  i,
  onClick,
}) => {
  return (
    <li
      onClick={onClick}
      className={cn(
        "flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full border-[1px] border-transparent text-[#1D1D1D]/50 duration-300",
        activeSlide === i && "border-[#1D1D1D]/50 text-[#1D1D1D]",
      )}
    >
      {i}
    </li>
  );
};
