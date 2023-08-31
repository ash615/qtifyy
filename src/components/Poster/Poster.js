import React from 'react'
import heroimage from "../../assets/heroimage.png";
import styles from './Poster.module.css';

const Poster = () => {
  return (
    <div className={styles.heroImageBackground}>
        <img src={heroimage} alt="Hero Image" className={styles.heroimage}/>
    </div>
  )
}

export default Poster