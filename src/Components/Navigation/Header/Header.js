import React,{useEffect, useState} from 'react';
import './Header.css';
import {Link,useLocation} from 'react-router-dom'

const Header = () => {
  const [HamburgerState,setHamburgerState] = useState(false)
  let location = useLocation();
  
  useEffect(()=>{
    console.log(location.pathname);
  },[location])

  return (
    <header className="Header">
        <p className='logo'>DentaHealth</p>
        <div className={HamburgerState?'hamburger-menu  hamburger-menu-opened':'hamburger-menu'} onClick={()=>setHamburgerState(!HamburgerState)}>
          <div className='line line1'></div>
          <div className='line line2'></div>
          <div className='line line3'></div>
        </div>

        <nav className={HamburgerState?'mobile-nav':''}>
            <ul className='nav-bar'>
                <div className='nav-link-container'><li className='nav-links'>
                  <Link to="/">Home</Link>
                  {location.pathname=="/"?<div className='nav-link-line'></div>:<></>}</li></div>
                <div className='nav-link-container'><li className='nav-links'>
                  <Link to="/Services">Services</Link>
                  {location.pathname=="/Services"?<div className='nav-link-line'></div>:<></>}</li></div>
                <div className='nav-link-container'><li className='nav-links'>
                  <Link to="/Team">Team</Link>
                  {location.pathname=="/Team"?<div className='nav-link-line'></div>:<></>}</li></div>
                <div className='nav-link-container'><li className='nav-links'>
                  <Link to="/Contact">Contact</Link>
                  {location.pathname=="/Contact"?<div className='nav-link-line'></div>:<></>}</li></div>
            </ul>
        </nav>

    </header>
  );
}

export default Header;
