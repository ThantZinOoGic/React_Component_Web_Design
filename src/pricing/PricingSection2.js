import React from "react";
import imageOne from "./../images/1.svg";
import imageTwo from "./../images/2.svg";
import imageThree from "./../images/3.svg";
import imageFour from "./../images/4.svg";

export default function PricingSection2() {
  return (
    <div className="container">
      <div className="row mb-5  vh-75 align-items-center">
        <div
          className="mt-0 col-12"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-delay="300"
        >
          <h2 className="text-center my-3">Advantage of using our products</h2>
          <p className="text-center fw-light">
            Far from the countries Vokalia and Consonantia
          </p>
        </div>
        <div className="row mt-5">
          {/* Grow Business Cart  */}
          <div
            className="col-lg-6 mb-4 text-right"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="400"
          >
            <div className="row">
              <div className="col-2">
                <img src={imageOne} className="bg-info rounded p-3 fs-lg" />
              </div>
              <div className="col-10">
                <h5>Grow Your Business</h5>
                <p className="fw-light">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia.
                </p>
                <a className="btn text-info">Learn More..</a>
              </div>
            </div>
          </div>
          {/* Bulid Product Cart  */}
          <div
            className="col-lg-6 mb-4 text-right"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="600"
          >
            <div className="row">
              <div className="col-2">
                <img src={imageTwo} className="bg-warning rounded p-3 fs-lg" />
              </div>
              <div className="col-10">
                <h5>Build Products</h5>
                <p className="fw-light">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia.
                </p>
                <a className="btn text-info">Learn More..</a>
              </div>
            </div>
          </div>
          {/* Success Every Day */}
          <div
            className="col-lg-6 mb-4 text-right"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="800"
          >
            <div className="row">
              <div className="col-2">
                <img src={imageThree} className="bg-danger rounded p-3 fs-lg" />
              </div>
              <div className="col-10">
                <h5>Success Every Day</h5>
                <p className="fw-light">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia.
                </p>
                <a className="btn text-info">Learn More..</a>
              </div>
            </div>
          </div>
          {/* Bring Ideas to Life */}
          <div
            className="col-lg-6 mb-4 text-right"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="1000"
          >
            <div className="row">
              <div className="col-2">
                <img src={imageFour} className="bg-primary rounded p-3 fs-lg" />
              </div>
              <div className="col-10">
                <h5>Success Every Day</h5>
                <p className="fw-light">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia.
                </p>
                <a className="btn text-info">Learn More..</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
