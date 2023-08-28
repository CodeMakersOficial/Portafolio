import React,  {forwardRef} from 'react';
import { NavLink } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import '../styles/components/layout/nav.css';

const Nav = forwardRef((props, ref) => {
  const showNavbar = () => {
    if (ref.current) {
      ref.current.classList.toggle("responsive_nav");
    }
  };

  return (
    <nav ref={ref}>
      <ul>
        <li>
          <NavLink to='/' onClick={showNavbar} className={({ isActive }) => isActive ? "activo" : undefined}>HOME</NavLink>
        </li>
        <br></br><hr></hr><br></br>
        <li>
          <NavLink to='/staff' onClick={showNavbar} className={({ isActive }) => isActive ? "activo" : undefined}>STAFF</NavLink>
        </li>
        <br></br><hr></hr><br></br>
        <li>
          <NavLink to='/contacto' onClick={showNavbar} className={({ isActive }) => isActive ? "activo" : undefined}>CONTACTO</NavLink>
        </li>
        <br></br><hr></hr><br></br>
      </ul>
      <button className='nav-btn nav-close-btn' onClick={showNavbar}>
        <FaTimes />
      </button>
    </nav>
  );
});

export default Nav;
