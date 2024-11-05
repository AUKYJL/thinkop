"use client";

import React, { useState } from "react";
import "swiper/css/pagination";
import { register } from "swiper/element/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Swiper as SwiperType } from "swiper/types";

import { FULLFILLED_PAGES, OPTIONS } from "@/shared/types/consts";

import { slidesStore } from "../../store/sliderStore";
import { Button } from "../../ui/button";
import { Container } from "../container";
import { FormSlide1 } from "../formSlides/formSlide1";
import { FormSlide2 } from "../formSlides/formSlide2";
import { FormSlide3 } from "../formSlides/formSlide3";
import { FormSlide4 } from "../formSlides/formSlide4";

import { BottomSlider } from "./bottomSlider";

register();

interface Props {
  className?: string;
}

export const Form: React.FC<Props> = ({ className }) => {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const { setFullfilledPages } = slidesStore((state) => state);
  const setPagesData = (sw: SwiperType) => {
    const fullfilledPages = JSON.parse(
      localStorage.getItem(FULLFILLED_PAGES) ??
        JSON.stringify(new Array(sw.slides.length).fill(false)),
    );
    setFullfilledPages(fullfilledPages);
  };
  const onSwiper = (sw: SwiperType) => {
    setSwiper(sw);
    setPagesData(sw);
  };
  const cancelForm = () => {
    localStorage.removeItem(OPTIONS);
    localStorage.removeItem(FULLFILLED_PAGES);
    window.location.reload();
  };
  return (
    <Container>
      <div className="mb-[112px] flex gap-2 max-[650px]:mb-[20px] max-[650px]:flex-col max-[650px]:gap-4">
        <h1 className="flex-1 text-[48px] font-semibold leading-none max-[1000px]:flex-auto max-[1000px]:text-[40px] max-[650px]:text-[28px]">
          Производственные параметры фильма
        </h1>
        <div className="flex flex-1 items-center justify-end max-[650px]:justify-start">
          <Button variant={"border"} onClick={cancelForm}>
            Отменить заполнение
          </Button>
        </div>
      </div>
      <Swiper
        onSwiper={onSwiper}
        spaceBetween={50}
        slidesPerView={1}
        allowTouchMove={false}
      >
        <SwiperSlide>
          <FormSlide1 />
        </SwiperSlide>
        <SwiperSlide>
          <FormSlide2 />
        </SwiperSlide>
        <SwiperSlide>
          <FormSlide3 />
        </SwiperSlide>
        <SwiperSlide>
          <FormSlide4 />
        </SwiperSlide>
      </Swiper>
      <BottomSlider className="mt-5" swiper={swiper!} />
    </Container>
  );
};
