import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Swiper } from "swiper/types";

import { cn } from "../../lib/utils";
import { slidesStore } from "../../store/sliderStore";

import { Bullet } from "./bullet";

interface Props {
  className?: string;
  swiper: Swiper;
}

export const Pagination: React.FC<Props> = ({ className, swiper }) => {
  const { activeSlide, setActiveSlide, fullfilledPages } = slidesStore(
    (state) => state,
  );

  const slidesCount = swiper?.slides.length;
  const slideTo = (i: number) => {
    if (i === 0) {
      swiper.slideTo(i);
      setActiveSlide(i);
    } else if (fullfilledPages.slice(0, i).every((val) => val)) {
      swiper.slideTo(i);
      setActiveSlide(i);
    }
  };

  return (
    <div className={cn("flex items-center", className)}>
      {activeSlide > 0 && (
        <FaArrowLeft
          className="cursor-pointer"
          onClick={() => slideTo(activeSlide - 1)}
        />
      )}
      <ul className="flex items-center gap-1">
        {activeSlide >= 2 && (
          <>
            <Bullet
              i={0}
              activeSlide={activeSlide}
              onClick={() => slideTo(0)}
            />
            <div className="">...</div>
          </>
        )}
        {new Array(3).fill(0).map((_, i) => {
          const slide = activeSlide - 1 + i;
          if (slide >= 0 && slide < slidesCount) {
            return (
              <Bullet
                key={slide}
                i={slide}
                activeSlide={activeSlide}
                onClick={() => slideTo(slide)}
              />
            );
          }
          return null;
        })}

        {slidesCount - activeSlide >= 3 && (
          <>
            <div className="">...</div>
            <Bullet
              i={slidesCount - 1}
              activeSlide={activeSlide}
              onClick={() => slideTo(slidesCount - 1)}
            />
          </>
        )}
      </ul>
      {activeSlide < swiper?.slides.length - 1 && (
        <FaArrowRight
          className="cursor-pointer"
          onClick={() => slideTo(activeSlide + 1)}
        />
      )}
    </div>
  );
};
