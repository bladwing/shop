import React from "react";
import "./detail.scss";

import Carousel from "../Carousel/Carousel";
const Detail = () => {
  return (
    <div className="details-container">
      <div className="container">
          <div className="card-body">
            <h2 className="card-title">Rounded Chair</h2>
            <h6 className="card-subtitle">Code: 001</h6>
            <div className="row">
              <div className="col-lg-5 col-md-5 col-sm-6">
                <div className="white-box text-center">
                  <img
                    src="/ram.png"
                    className="" alt="Product"
                  />
                </div>
              </div>
              <div className="col-lg-7 col-md-7 col-sm-6">
                <h4 className="box-title mt-5">Product description</h4>
                <p>
                  Lorem Ipsum available,but the majority have suffered
                  alteration in some form,by injected humour,or randomised words
                  which don't look even slightly believable.but the majority
                  have suffered alteration in some form,by injected humour
                </p>
                <h2 className="mt-5">
                  $153
                </h2>

                <div className="cart-button-container">
                <button
                  className="btn btn-dark btn-rounded mr-1"
                  data-toggle="tooltip"
                  title=""
                  data-original-title="Add to cart"
                >
                  <i className="fa fa-shopping-cart"></i>
                </button>
                <button className="btn btn-primary btn-rounded">Buy Now</button>

                </div>
                
                <h3 className="box-title mt-5">Key Highlights</h3>
                <ul className="list-unstyled">
                  <li>
                    <i className="fa fa-check text-success"></i>Sturdy structure
                  </li>
                  <li>
                    <i className="fa fa-check text-success"></i>Designed to foster
                    easy portability
                  </li>
                  <li>
                    <i className="fa fa-check text-success"></i>Perfect furniture to
                    flaunt your wonderful collectibles
                  </li>
                </ul>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12">
                <h3 className="box-title mt-5">General Info</h3>
                <div className="table-responsive">
                  <table className="table table-striped table-product">
                    <tbody>
                      <tr>
                        <td width="400px">Brand</td>
                        <td>Stellar</td>
                      </tr>
                      <tr>
                        <td>Delivery Condition</td>
                        <td>Knock Down</td>
                      </tr>
                      <tr>
                        <td>Seat Lock Included</td>
                        <td>Yes</td>
                      </tr>
                      <tr>
                        <td>Type</td>
                        <td>Office Chair</td>
                      </tr>
                      <tr>
                        <td>Style</td>
                        <td>Contemporary&amp;Modern</td>
                      </tr>
                      <tr>
                        <td>Wheels Included</td>
                        <td>Yes</td>
                      </tr>
                      <tr>
                        <td>Upholstery Included</td>
                        <td>Yes</td>
                      </tr>
                      <tr>
                        <td>Upholstery Type</td>
                        <td>Cushion</td>
                      </tr>
                      <tr>
                        <td>Head Support</td>
                        <td>No</td>
                      </tr>
                      <tr>
                        <td>Suitable For</td>
                        <td>Study&amp;Home Office</td>
                      </tr>
                      <tr>
                        <td>Adjustable Height</td>
                        <td>Yes</td>
                      </tr>
                      <tr>
                        <td>Model Number</td>
                        <td>F01020701-00HT744A06</td>
                      </tr>
                      <tr>
                        <td>Armrest Included</td>
                        <td>Yes</td>
                      </tr>
                      <tr>
                        <td>Care Instructions</td>
                        <td>
                          Handle With Care,Keep In Dry Place,Do Not Apply Any
                          Chemical For Cleaning.
                        </td>
                      </tr>
                      <tr>
                        <td>Finish Type</td>
                        <td>Matte</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
      </div>
      <Carousel />
    </div>
  );
};

export default Detail;
