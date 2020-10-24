import React from "react";
import Card from "../card/card";
import "./swipercarousel.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectFlip, Autoplay, Navigation } from "swiper";
import "swiper/swiper-bundle.css";
// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

import cr1 from "../../assets/cr1.jpg";
import cr2 from "../../assets/cr2.jpg";
import cr3 from "../../assets/cr3.jpg";
import cr4 from "../../assets/cr4.jpg";
import cr5 from "../../assets/cr5.jpg";
import cr6 from "../../assets/cr6.jpg";

SwiperCore.use([EffectFlip, Navigation, Autoplay]);

const SwiperCarousel = () => {
  return (
    <React.Fragment>
      <Swiper
        tag="section"
        wrapperTag="ul"
        effect="cube"
        navigation={true}
        loop={true}
        autoplay={true}
        initialSlide={1}
        center
        breakpoints={{
          350: {
            slidesPerView: 1,
            centeredSlides: true,
            spaceBetween: 100,
          },
          // 650: {
          //   slidesPerView: 1,
          //   // spaceBetween: 50,
          //   centeredSlides: true,
          // },
          768: {
            slidesPerView: 2,
            centeredSlides: true,
            spaceBetween: 60,
          },
          968: {
            slidesPerView: 3,
            centeredSlides: true,
            spaceBetween: 100,
          },
        }}
      >
        <SwiperSlide tag="li">
          <Card
            cardimage={cr1}
            cardtxt={{
              quote:
                "you only live once, but if you do it right, once is enough",
              author: "mae west",
            }}
          />
        </SwiperSlide>
        <SwiperSlide tag="li">
          <Card
            cardimage={cr2}
            cardtxt={{
              quote:
                "you only live once, but if you do it right, once is enough",
              author: "mae west",
            }}
          />
        </SwiperSlide>
        <SwiperSlide tag="li">
          <Card
            cardimage={cr3}
            cardtxt={{
              quote:
                "you only live once, but if you do it right, once is enough",
              author: "mae west",
            }}
          />
        </SwiperSlide>
        <SwiperSlide tag="li">
          <Card
            cardimage={cr4}
            cardtxt={{
              quote:
                "you only live once, but if you do it right, once is enough",
              author: "mae west",
            }}
          />
        </SwiperSlide>
        <SwiperSlide tag="li">
          <Card
            cardimage={cr5}
            cardtxt={{
              quote:
                "you only live once, but if you do it right, once is enough",
              author: "mae west",
            }}
          />
        </SwiperSlide>
        <SwiperSlide tag="li">
          <Card
            cardimage={cr6}
            cardtxt={{
              quote:
                "you only live once, but if you do it right, once is enough",
              author: "mae west",
            }}
          />
        </SwiperSlide>
      </Swiper>
    </React.Fragment>
  );
};

export default SwiperCarousel;
