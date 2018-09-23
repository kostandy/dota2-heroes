import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../static/logo-full.png';

import style from './Navbar.styl';

const Navbar = () => (
  <nav className={style.nav}>
    <Link to="/">
      <img
        src={logo}
        alt="Dota 2"
        width="auto"
        height="65px"
        className={style.logo} />
    </Link>
  </nav>
);

export default Navbar;
