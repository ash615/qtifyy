import { CircularProgress } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import Card from '../Card/Card'
import Carousel from '../Carousel/Carousel'
import styles from './Section.module.css'

const Section = ({title, data, type}) => {
    // ES6 or latest Javascript will not work on 
    // all the browsers... 
    const [carouselToggle, setCarouselToggle] = useState(true);

    const handleToggle = () => {
        setCarouselToggle(!carouselToggle);
    }

    return (
    <div>
        <div className={styles.header}>
            <h3>{title}</h3>
            <h4 className={styles.toggleText} onClick={handleToggle}>{carouselToggle ? "show All": "collapse All"}</h4>
        </div>
        {
            data?.length === 0 ? (
                <CircularProgress/>
            ) :(
                <div className={styles.cardWrapper}>
                    {
                        !carouselToggle ? (
                        <div className={styles.wrapper}>
                        {
                        data.map((ele) => (
                            <Card data={ele} type={type} key={ele.id}/>
                        ))
                        }
                        </div>): 
                        (
                            <Carousel data={data} renderCardComponent={(data)=> <Card data={data} type={type}/>}/>
                        )
                    }
                </div>
            )
        }
    </div>
  )
}

export default Section