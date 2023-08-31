import React from 'react'
import Button from '../Button/Button'
import Logo from '../Logo/Logo'
import SearchBar from '../SearchBar/SearchBar.jsx';
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
        <Logo/>
        <SearchBar/>
        <Button children={'Give Feedback'}/>
    </nav>
  )
}

export default NavBar