import React from "react";
import Link from "next/link";

import { urlFor } from "../lib/client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, EffectFade, Autoplay } from "swiper";
const MainVisual = ({ data }) => {
  console.log(data);
  return (
    <div className="main-banner">
      <Swiper
        pagination={{
          clickable: true,
        }}
        spaceBetween={40}
        modules={[Pagination, Autoplay]}
        loop={true}
        className="mySwiper"
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        centeredSlides={true}
      >
        {data.map((item) => (
          <SwiperSlide key={item._id}>
            <Link href={`/product/${item.link}`}>
              <img
                src={urlFor(item.image)}
                alt="headphones"
                className="main-banner-image a"
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MainVisual;
