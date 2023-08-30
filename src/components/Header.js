import React, {useRef} from 'react';
import {FaBars} from 'react-icons/fa';
import '../styles/components/layout/header.css';
import '../styles/components/layout/nav.css';
import Nav from './Nav.js'
import logo from "../assets/codemakerredondoblanco.png";

const Header = (props) => {
    const NavRef = useRef(null);

    const showNavbar = () => {
      if (NavRef.current) {
        NavRef.current.classList.toggle("responsive_nav");
      }
};
  
    return (
      <header className={'head'}>
        <img src={logo} alt='logo'/>
        <Nav ref={NavRef} />
        <button className='nav-btn' onClick={showNavbar}>
          <FaBars/>
        </button>
      </header>
    );
  };

export default Header;