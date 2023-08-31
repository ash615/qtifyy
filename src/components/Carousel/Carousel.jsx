import React, { useRef } from 'react'
import { SwiperSlide, Swiper, useSwiper } from 'swiper/react'
import styles from './Carousel.module.css';
import {Navigation} from 'swiper/modules';
import { useEffect } from 'react';
import CarouselLeftNavigation from './CarouselLeftNavigation/CarouselLeftNavigation';
import CarouselRightNavigation from './CarouselRightNavigation/CarouselRightNavigation';

const Controls = ({data}) => {

    const swiper = useSwiper();
    useEffect(()=>{
     //   console.log(swiper.slideTo(0, 300))
        swiper.slideTo(0, 100);
    },[data]);

    return <></>;
}

const Carousel = ({data, renderCardComponent}) => {

  return (
    <div className={styles.wrapper}>
        <Swiper
        initialSlide={0} modules={{Navigation}} slidePerView={"auto"} spaceBetween={40} allowTouchOption={true}>
            <Controls data={data} />
            <CarouselLeftNavigation/>
            <CarouselRightNavigation/>
            {
                data.map((item) => (
                    <SwiperSlide>
                        {renderCardComponent(item)}
                    </SwiperSlide>
                ))
            }
        </Swiper>
    </div>
  )
}

export default Carousel