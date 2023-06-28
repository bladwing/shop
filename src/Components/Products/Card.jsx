import React from "react";
import { Link } from "react-router-dom";
import "./card.scss";

const Card = () => {
  return (
    <main>

      <div className="card">
        <div className="imgBox">
          <img
            src="/img/CH-9300011-NA-Gallery-M65-PRO-RGB-BLK-04.png"
            alt="mouse corsair"
            className="mouse"
          />
        </div>

        <div className="contentBox">
          <h3><Link to="/detail">Mouse Corsair M65</Link></h3>
          <h2 className="price">
            61.<small>98</small> ₾
          </h2>
          <Link to="/" className="buy">
            ყიდვა
          </Link>
        </div>
      </div>

      <div className="card">
        <div className="imgBox">
          <img
            src="/ram.png"
            alt="mouse corsair"
            className="mouse"
          />
        </div>

        <div className="contentBox">
          <h3>Kingston Ram</h3>
          <h2 className="price">
            120.<small>98</small> ₾
          </h2>
          <Link to="/" className="buy">
            ყიდვა
          </Link>
        </div>

      </div>

      <div className="card">
        <div className="imgBox">
          <img
             src="/img/CH-9300011-NA-Gallery-M65-PRO-RGB-BLK-04.png"
            alt="mouse corsair"
            className="mouse"
          />
        </div>

        <div className="contentBox">
          <h3>Mouse Corsair M65</h3>
          <h2 className="price">
            61.<small>98</small> ₾
          </h2>
          <Link to="/" className="buy">
            ყიდვა
          </Link>
        </div>
      </div>

      <div className="card">
        <div className="imgBox">
          <img
             src="/img/CH-9300011-NA-Gallery-M65-PRO-RGB-BLK-04.png"
            alt="mouse corsair"
            className="mouse"
          />
        </div>

        <div className="contentBox">
          <h3>Mouse Corsair M65</h3>
          <h2 className="price">
            61.<small>98</small> ₾
          </h2>
          <Link to="/" className="buy">
            ყიდვა
          </Link>
        </div>
      </div>

      <div className="card">
        <div className="imgBox">
          <img
             src="/img/CH-9300011-NA-Gallery-M65-PRO-RGB-BLK-04.png"
            alt="mouse corsair"
            className="mouse"
          />
        </div>

        <div className="contentBox">
          <h3>Mouse Corsair M65</h3>
          <h2 className="price">
            61.<small>98</small> ₾
          </h2>
          <Link to="/" className="buy">
            ყიდვა
          </Link>
        </div>
      </div>

      <div className="card">
        <div className="imgBox">
          <img
            src="/img/CH-9300011-NA-Gallery-M65-PRO-RGB-BLK-04.png"
            alt="mouse corsair"
            className="mouse"
          />
        </div>

        <div className="contentBox">
          <h3>Mouse Corsair M65</h3>
          <h2 className="price">
            61.<small>98</small> ₾
          </h2>
          <Link to="/" className="buy">
            ყიდვა
          </Link>
        </div>
      </div>

      <div className="card">
        <div className="imgBox">
          <img
             src="/img/CH-9300011-NA-Gallery-M65-PRO-RGB-BLK-04.png"
            alt="mouse corsair"
            className="mouse"
          />
        </div>

        <div className="contentBox">
          <h3>Mouse Corsair M65</h3>
          <h2 className="price">
            61.<small>98</small> ₾
          </h2>
          <Link to="/" className="buy">
            ყიდვა
          </Link>
        </div>
      </div>


    </main>
  );
};

export default Card;
