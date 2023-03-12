import React from 'react';
import "./navVertical.scss"

const Nav = () => {
    return (
        <nav className='Nav-Vertical'>
        <h3>კატეგორია</h3>
        <ul>
          <li>
            <a href="!#">ლეპტოპები</a>
          </li>
          <li>
            <a href="!#">მონიტორები</a>
          </li>
          <li>
            <a href="!#">ვინჩესტერები</a>
          </li>
          <li>
            <a href="!#">დედაპლატები</a>
          </li>
          <li>
            <a href="!#">კლავიატურები</a>
          </li>
        </ul>
      </nav>
    );
};

export default Nav;