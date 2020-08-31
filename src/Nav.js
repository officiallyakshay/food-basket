import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <header>
      <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/donate'>Donate</NavLink>
        <NavLink to='/contactus'>Contact Us</NavLink>
      </nav>
    </header>
  );
}

export default Nav;
