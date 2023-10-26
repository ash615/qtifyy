import React, { useEffect } from 'react';

import styles from './Carousel.module.css';

import { Navigation } from 'swiper';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import CarouselLeftNavigation from './CarouselLeftNavigation/CarouselLeftNavigation';
import CarouselRightNavigation from './CarouselRightNavigation/CarouselRightNavigation';

const Controls = ({ data }) => {
  const swiper = useSwiper();

  useEffect(() => {
    swiper.slideTo(0, null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);
};

const Carousel = ({ data, renderCardComponent }) => {
  return (
    <div className={styles.container}>
      <Swiper
        style={{ padding: '0 20px' }}
        initialSlide={0}
        slidesPerView={'auto'}
        spaceBetween={30}
        modules={[Navigation]}
        allowTouchMove
      >
        <Controls data={data} />
        <CarouselLeftNavigation />
        <CarouselRightNavigation />

        {data.map((item, idx) => {
          return <SwiperSlide key={idx}>{renderCardComponent(item)}</SwiperSlide>;
        })}
      </Swiper>
    </div>
  );
};

export default Carousel;
