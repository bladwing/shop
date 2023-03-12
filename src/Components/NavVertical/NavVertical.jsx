import React from 'react';
import "./navVertical.scss"

const Nav = () => {
    return (
        <nav className='Nav-Vertical'>
     

    <div className="header">
      <h3>კატეგორია</h3>
    </div>
    <div className="body">
      <ul>
        <li><i className="fas fa-home icon"></i> ლეპტოპები</li>
        <li><i className="fas fa-underline icon"></i> მონიტორები</li>
        <li><i className="fas fa-boxes icon"></i> ვინჩესტერები</li>
        <li><i className="fas fa-table icon"></i> დედაპლატები</li>
        <li><i className="fab fa-wpforms icon"></i> კლავიატურები
        </li>
      </ul>
    </div>


      </nav>
    );
};

export default Nav;