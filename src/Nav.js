import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css';
// import logo from '../images/logo.jpg';

const Nav = () => {
  // console.log(logo)
  return (
    <header>
      <a href='/#/'><img className="logo" alt="x" /></a>
      <nav>
        <ul>
          {/* <li><a href='/#/'>Home</a></li> */}
          <li><a href='/#/about'>About</a></li>
          <li><a href='/#/donate'>Donate</a></li>
          <li><a href='/#/contactus'>Contact Us</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
