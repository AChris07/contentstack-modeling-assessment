"use client";

import { Children, isValidElement, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import clsx from "clsx";

import SwiperCore from "swiper";

import "swiper/css";

export interface TopicsCarouselClientProps {
  children?: React.ReactNode;
  title: string;
}

export function TopicsCarouselClient({
  children,
  title,
}: TopicsCarouselClientProps) {
  const swiperRef = useRef<SwiperCore>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <div className="mb-4 lg:mb-9">
      <div className="flex items-center justify-between mb-6 lg:mb-8">
        <h2 className="font-primary font-bold text-2xl lg:text-[32px] leading-none">
          {title}
        </h2>
        <div className="flex gap-x-0.5">
          <button
            className={clsx(
              "w-6 h-6 bg-highlight-color rounded-full flex items-center justify-center",
              isBeginning && "opacity-50"
            )}
            disabled={isBeginning}
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <ChevronLeftIcon
              className="w-3 h-3 text-main-color"
              height={24}
              width={24}
            />
          </button>
          <button
            className={clsx(
              "w-6 h-6 bg-highlight-color rounded-full flex items-center justify-center",
              isEnd && "opacity-50"
            )}
            disabled={isEnd}
            onClick={() => swiperRef.current?.slideNext()}
          >
            <ChevronRightIcon
              className="w-3 h-3 text-main-color"
              height={24}
              width={24}
            />
          </button>
        </div>
      </div>
      <Swiper
        slidesPerView={2}
        spaceBetween={4}
        breakpoints={{
          1024: {
            slidesPerView: 6,
            spaceBetween: 10,
          },
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
      >
        {Children.map(children, (child, index) => {
          if (!isValidElement(child)) {
            return null;
          }
          return <SwiperSlide key={index}>{child}</SwiperSlide>;
        })}
      </Swiper>
    </div>
  );
}
