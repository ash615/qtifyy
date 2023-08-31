import React from 'react'
import SearchIcon from '../../assets/SearchIcon.jpg'
import styles from "./SearchBar.module.css"

// function Search({placeholder, data}){
//     const onSubmit =(e)=>{
//         e.preventDefault();
//     }
// }

const SearchBar = () => {
  return (
    <>
    <form className={styles.wrapper}>
        <input className={styles.search} placeholder="Search a album of your choice"/>
        <button type='submit' className={styles.searchButton}>
            <img src={SearchIcon} height="20px" width="20px"/>
        </button>
    </form>
    </>
  )
}

export default SearchBar