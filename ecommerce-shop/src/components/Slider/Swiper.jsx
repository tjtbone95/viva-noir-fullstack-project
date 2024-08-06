import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "./Swiper.scss";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

export default function SwiperComponent() {
  return (
    <div className="swiper-container">
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        pagination={{
          type: 'fraction',
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/img/Slider/malicki-m-beser-PKMvkg7vnUo-unsplash.jpg" alt="Slide 1 Promo" aria-label="Promo Slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/Slider/cesar-la-rosa-HbAddptme1Q-unsplash.jpg" alt="Slide 2 Promo" aria-label="Promo Slide 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/Slider/jane-palash-eqDo7KG13vc-unsplash.jpg" alt="Slide 3 Promo" aria-label="Promo Slide 3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/Slider/cleo-vermij-wSct4rrBPWc-unsplash.jpg" alt="Slide 4 Promo" aria-label="Promo Slide 4" />
        </SwiperSlide>
        <div className="swiper-button-next" aria-label="Next slide">
          <ChevronRightIcon />
        </div>
        <div className="swiper-button-prev" aria-label="Previous slide">
          <ChevronLeftIcon />
        </div>
      </Swiper>
    </div>
  );
}
