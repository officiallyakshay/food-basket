import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <header>
      <nav>
        <NavLink to='/'>Home</NavLink>
      </nav>
    </header>
  );
}

export default Nav;
