import React from "react";

import { FULLFILLED_PAGES } from "@/shared/types/consts";

import { slidesStore } from "../../store/sliderStore";

interface Props {
  className?: string;
  slideIndex: number;
  isValid: boolean;
  children?: React.ReactNode;
}

export const FormWrapper: React.FC<Props> = ({
  className,
  slideIndex,
  isValid,
  children,
}) => {
  const { fullfilledPages, setFullfilledPages } = slidesStore((state) => state);
  return (
    <form
      className="flex justify-between gap-[120px] max-[1000px]:gap-[100px] max-[750px]:flex-col max-[750px]:gap-3"
      onBlur={() => {
        const pages = [...fullfilledPages];
        pages[slideIndex] = isValid;
        setFullfilledPages(pages);
        localStorage.setItem(FULLFILLED_PAGES, JSON.stringify(pages));
      }}
    >
      {children}
    </form>
  );
};
