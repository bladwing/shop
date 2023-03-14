import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./slide.scss";

const fadeImages = [
  {
    url: "/img/1.jpg",
  },
  {
    url: "/img/2.jpg",
  },
  {
    url: "/img/3.jpg",
  },
];

const Slider = () => {
  return (
    <div className="slide-container">
      <Fade>
        {fadeImages.map((fadeImage, index) => (
          <div key={index}>
            <img
              style={{ width: "100%" }}
              src={fadeImage.url}
              alt="slideShowPhoto"
            />
            <h2>{fadeImage.caption}</h2>
          </div>
        ))}
      </Fade>
    </div>
  );
};

export default Slider;
