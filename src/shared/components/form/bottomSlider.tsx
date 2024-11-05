"use client";

import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Swiper } from "swiper/types";

import { cn } from "../../lib/utils";
import { slidesStore } from "../../store/sliderStore";
import { Button } from "../../ui/button";
import { Pagination } from "../pagination/pagination";

interface Props {
  className?: string;
  swiper: Swiper;
}

export const BottomSlider: React.FC<Props> = ({ className, swiper }) => {
  const { activeSlide, fullfilledPages, setActiveSlide } = slidesStore(
    (state) => state,
  );

  const hasAccessToNext = () => {
    return fullfilledPages.slice(0, activeSlide + 1).every((val) => val);
  };
  const next = () => {
    if (hasAccessToNext() && activeSlide < swiper.slides.length - 1) {
      swiper.slideNext();
      setActiveSlide(activeSlide + 1);
    }
  };
  return (
    <div
      className={cn(
        "relative flex w-full items-center justify-end max-[700px]:flex-col max-[700px]:justify-start max-[700px]:gap-3",
        className,
      )}
    >
      <Pagination
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-[700px]:static max-[700px]:translate-x-0 max-[700px]:translate-y-0"
        swiper={swiper}
      />
      {activeSlide < swiper?.slides.length - 1 && (
        <Button
          variant={"border"}
          onClick={() => next()}
          className={cn(
            hasAccessToNext()
              ? ""
              : "cursor-not-allowed border-none bg-[#EFEFEF] text-[#ACACAC]",
          )}
        >
          Следующий шаг <FaLongArrowAltRight />
        </Button>
      )}
      {activeSlide >= swiper?.slides.length - 1 && (
        <Button variant={"border"}>
          Завершить <FaLongArrowAltRight />
        </Button>
      )}
    </div>
  );
};
