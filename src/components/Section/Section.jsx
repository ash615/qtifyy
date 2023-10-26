import { CircularProgress } from '@mui/material'
import React from 'react'
import { useState, useEffect } from 'react'
import Card from '../Card/Card'
import Carousel from '../Carousel/Carousel'
import styles from './Section.module.css'
import Filter from '../Filter/Filter'

const Section = ({title, data, type}) => {
    // ES6 or latest Javascript will not work on 
    // all the browsers... 
    const [carouselToggle, setCarouselToggle] = useState(true);
  const [value, setValue] = useState(0);

  const [filterData, setFilterData] = useState(data);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    // console.log(newValue);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const generateSongData = (key) => {
    if (key === 'all') {
      setFilterData(data);
    } else {
      const res = data.filter((item) => item.genre.key === key);
      console.log(res);
      setFilterData(res);
    }
  };

  const filteredData = type === 'song' ? filterData : data;

  useEffect(() => {
    const genres = { 0: 'all', 1: 'rock', 2: 'jazz', 3: 'pop', 4: 'blues' };
    if (value >= 0 && value <= 4) {
      console.log(value)
      generateSongData(genres[value]);
    }
  }, [ generateSongData,value]);

    const handleToggleChange = () => {
        setCarouselToggle(!carouselToggle);
    }

    return (
    <div>
        <div className={styles.header}>
            <h3>{title}</h3>
            <h4 className={styles.toggleText} onClick={handleToggleChange}>{carouselToggle? "show All": "collapse All"}</h4>
        </div>
        {type === 'song' && (
        <Filter key={value} value={value} handleChange={handleChange} />
      )}

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
                            <Carousel data={filteredData} renderCardComponent={(data)=> <Card data={data} type={type}/>}/>
                        )
                    }
                </div>
            )
        }
    </div>
  )
}

export default Section