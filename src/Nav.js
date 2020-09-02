import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css';
// import Logo from './Logo.jpg';

const Nav = () => {
  return (
    <header>
      <img alt="website logo" />
      <nav>
        <ul>
          <li><a href='/#/'>Home</a></li>
          <li><a href='/#/about'>About</a></li>
          <li><a href='/#/donate'>Donate</a></li>
          <li><a href='/#/contactus'>Contact Us</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
