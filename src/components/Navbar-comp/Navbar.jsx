import React, { Component } from 'react';
import style from './style.module.scss'

const Navbar = () => {
    return (
        <>
            <nav className={style.navbar}>
            
            <a className={style.navbarLogo}>Pizza</a>
            
            <div className={style.navbarContentDiv}>
                <a className={style.navbarTag}>Home</a>
                <a className={style.navbarTag}>Services</a>
                <a className={style.navbarTag}>Contact Us</a>
                <button className={style.navbarBtns}>Sign In</button>
                <button className={style.navbarBtns}>Log In</button>
                </div>
            </nav>
        </>
      );
}
 
export default Navbar;