import React, { useState } from 'react'
import { useEffect } from 'react';
import {useSwiper} from 'swiper/react';
// As svg image has svg code so we can create component as below for svg images...
// But for png, jpg we cannot do such...
import {ReactComponent as Left} from "../../../assets/Left.svg";
import styles from '../Carousel.module.css'

const CarouselLeftNavigation = () => {

    const swiper = useSwiper();
    const [isBeginning, setIsBeginning] = useState(swiper.isBeginning);
    
    useEffect(()=>{
        swiper.on("slideChange", ()=> {
            setIsBeginning(swiper.isBeginning);
        })
    },[])

    return (
    <div className={styles.leftNavigation}>
        {!isBeginning && <Left onClick ={()=> swiper.slidePrev()}/> }
    </div>
  )
}

export default CarouselLeftNavigation