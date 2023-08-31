import React, { useState } from 'react'
import { useEffect } from 'react';
import {useSwiper} from 'swiper/react';
import {ReactComponent as Right} from "../../../assets/Right.svg";
import styles from '../Carousel.module.css'


const CarouselRightNavigation = () => {

    const swiper = useSwiper();
    const [isEnd, setIsEnd] = useState(swiper.isEnd);
    
    useEffect(()=>{
        swiper.on("slideChange", ()=> {
            setIsEnd(swiper.isEnd);
        })
    },[])

    return (
    <div className={styles.rightNavigation}>
        {!isEnd && <Right onClick ={()=> swiper.slideNext()}/>}
    </div>
  )
}

export default CarouselRightNavigation