import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Api } from "../../api/api";
import "./card.scss";

const Card = () => {
  const [Products, setProducts] = useState([]);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      return getProducts();
    }, 1000);
  }, []);

  const getProducts = async () => {
    const response = await axios.get(Api + "/products");
    setLoading(false);
    setProducts(response.data);
  };

  



  console.log(Products);
  return (
    <main>
      {Products.map((product) => (
        <div className="card" key={product.id}>
          <div>{product.id}</div>
          <img src={product.img} alt="" />
          <div className="contentBox">
            <h3>{product.name}</h3>
            <h2 className="price">{product.price}₾</h2>
            <Link to="/" className="buy">
              ყიდვა
            </Link>
          </div>
        </div>
      ))}
      <div className="card">
        <div className="imgBox">
          <img
            src="/img/CH-9300011-NA-Gallery-M65-PRO-RGB-BLK-04.png"
            alt="mouse corsair"
            className="mouse"
          />
        </div>

        <div className="contentBox">
          <h3>
            <Link to="/detail">Mouse Corsair M65</Link>
          </h3>
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
          <img src="/ram.png" alt="mouse corsair" className="mouse" />
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
    </main>
  );
};

export default Card;
