import React from 'react'
import cardimage from "../../assets/cardimage.png";
import styles from './Card.module.css';
import { Chip, Tooltip } from "@mui/material";

const Card = ({data, type}) => {

  const getCard = (type) => {
    switch(type){
      case "album":{
        const {image, follows, title, songs} = data;
        return (
          <Tooltip title={`${songs?.length} songs`} placement="top" arrow>
          <div className={styles.wrapper}>
            <div className={styles.card}>
              <img src={image} alt='album' width="100%" height="100%"/>
              <div className={styles.banner}>
                <Chip label={`${follows} Follows`} className={styles.chip} size="small"/>
              </div>
            </div>
            <div className={styles.titleWrapper}>
              <p>{title}</p>
            </div>
          </div>
          </Tooltip>
        )
      }

      case "new":{
        const {image, follows, title, songs} = data;
        return (
          <Tooltip title={`${songs?.length} songs`} placement="top" arrow>
          <div className={styles.wrapper}>
            <div className={styles.card}>
              <img src={image} alt='album' width="100%" height="100%"/>
              <div className={styles.banner}>
                <Chip label={`${follows} Follows`} className={styles.chip} size="small"/>
              </div>
            </div>
            <div className={styles.titleWrapper}>
              <p>{title}</p>
            </div>
          </div>
          </Tooltip>
        )
      }

      case 'song': {
        const { image, likes, title } = data;
        return (
          <div className={styles.wrapper}>
            <div className={styles.card}>
              <img src={image} alt="song" loading="lazy" />
              <div className={styles.banner}>
                <Chip
                  label={`${likes} likes`}
                  size="small"
                  className={styles.chip}
                />
              </div>
            </div>
            <div className={styles.titleWrapper}>
              <p>{title}</p>
            </div>
          </div>
        );
      }

      default: 
            return <></>;
    }
  }

  return getCard(type);
}

export default Card