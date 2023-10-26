import React, { useEffect } from 'react';
import { useState } from 'react';
import { useSwiper } from 'swiper/react';

import { ReactComponent as LeftArrow } from '../../../assets/Left.svg';
import styles from './CarouselLeft.module.css';

const CarouselLeftNavigation = () => {
  const swiper = useSwiper();
  const [isBegining, setIsBegining] = useState(swiper.isBeginning);

  useEffect(() => {
    swiper.on('slideChange', function () {
      setIsBegining(swiper.isBeginning);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.leftNavigarion}>
      {isBegining && <LeftArrow onClick={() => swiper.slidePrev()} />}
    </div>
  );
};

export default CarouselLeftNavigation;