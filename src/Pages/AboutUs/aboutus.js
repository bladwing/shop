import React from "react";
import "./about.scss";
import "./aboutResponsive.scss";

const aboutus = () => {
  return (
    <div className="responsive-container-block bigContainer">
      <div className="responsive-container-block Container">
        <div className="imgContainer">
          <img
            className="blueDots"
            src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/aw3.svg"
            alt=""
          />
          <img
            className="mainImg"
            src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/aw2.svg"
            alt=""
          />
        </div>
        <div className="responsive-container-block textSide">
          <p className="text-blk heading">About Us</p>
          <p className="text-blk subHeading">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget purus
            lectus viverra in semper nec pretium mus. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Eget purus lectus viverra in
            semper nec pretium mus. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Eget purus lectus viverra in semper nec pretium
            mus.
          </p>
          <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
            <div className="cardImgContainer">
              <img
                className="cardImg"
                src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/id2.svg"
                alt=""
              />
            </div>
            <div className="cardText">
              <p className="text-blk cardHeading">Value</p>
              <p className="text-blk cardSubHeading">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
          <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
            <div className="cardImgContainer">
              <img
                className="cardImg"
                src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/id2.svg"
                alt=""
              />
            </div>
            <div className="cardText">
              <p className="text-blk cardHeading">Value</p>
              <p className="text-blk cardSubHeading">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
          <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
            <div className="cardImgContainer">
              <img
                className="cardImg"
                src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/id2.svg"
                alt=""
              />
            </div>
            <div className="cardText">
              <p className="text-blk cardHeading">Value</p>
              <p className="text-blk cardSubHeading">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
          <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
            <div className="cardImgContainer">
              <img
                className="cardImg"
                src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/id2.svg"
                alt=""
              />
            </div>
            <div className="cardText">
              <p className="text-blk cardHeading">Value</p>
              <p className="text-blk cardSubHeading">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default aboutus;
