import React from "react";
import { Link } from "react-router-dom";

import "./detail.scss";

import Carousel from "../Carousel/Carousel";
const Detail = () => {
  return (
    <div className="details-container">
      <div className="main-spec-label">
        <h1>Product Name</h1>
        <span>Price: 00 00 L</span>
        <button>ყიდვა</button>
        <Link to="/something">
          <i className="fa fa-shopping-basket" aria-hidden="true"></i>
        </Link>
      </div>
      <div>
        <img src="ram.png" alt="product" />
      </div>
      <table>
        <thead>
          <tr>
            <th>Product Specification</th>
          </tr>
          <tr>
            <td>CPU</td>
            <td>i7</td>
          </tr>
          <tr>
            <td>RAM</td>
            <td>8gb</td>
          </tr>
          <tr>
            <td>HDD</td>
            <td>500gb</td>
          </tr>
          <tr>
            <td>SSD</td>
            <td>128gb</td>
          </tr>
        </thead>
      </table>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
        temporibus non laudantium officiis libero eum at eaque soluta ipsum,
        quis perspiciatis optio esse vel voluptas natus ab assumenda a minima.
      </p>
      <Carousel />
    </div>
  );
};

export default Detail;
