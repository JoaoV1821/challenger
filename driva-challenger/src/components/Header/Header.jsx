import React from 'react';
import style from './header.module.css';

const Header = () => {
  return (
    <header className={style.Header}>
        <img src="\src\assets\driva-logo.png" alt="" />

        <nav className={style.navBar}>
          <p><a href="#">Home</a></p>
          <p><a href="#">Sobre</a></p>
          <p><a href="#">Contato</a></p>
        </nav>
        
    </header>
  )
}

export default Header