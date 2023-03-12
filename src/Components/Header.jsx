import React from 'react';
import Search from './Search/Search';
import NavHorizontal from './NavHorizontal/NavHorizontal';

import logo from "../img/logo.png"

const Header = () => {
    return (
        <header>
        <div className="Logo-Container">
          <a href="/">
            <img src={logo} alt="it-shop" />
          </a>   
        </div>
        <Search />
        <NavHorizontal/>
      </header>
    );
};

export default Header;