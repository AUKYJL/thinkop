import React from "react";

import { cn } from "../lib/utils";

interface Props {
  className?: string;
  children: React.ReactNode;
}

export const Container: React.FC<Props> = ({ className, children }) => {
  return (
    <div className={cn("mx-auto max-w-[1120px] px-2", className)}>
      {children}
    </div>
  );
};
