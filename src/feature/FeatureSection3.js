import React from "react";
import imageOne from "./../images/1.svg";
import imageTwo from "./../images/2.svg";
import imageThree from "./../images/3.svg";
import imageFour from "./../images/4.svg";

export default function FeatureSection3() {
  return (
    <div className="container">
      <div className="row py-5">
        {/* item card */}
        <div
          className="col-lg-3"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-delay="300"
        >
          <div className="mb-4">
            <img src={imageOne} className="bg-info rounded p-3 fs-lg" />
          </div>
          <div className="">
            <h5 className="mb-3">Bring Ideas to Life</h5>
            <p className="fw-light">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
        </div>
        {/* item card */}
        <div
          className="col-lg-3"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-delay="400"
        >
          <div className="mb-4">
            <img src={imageTwo} className="bg-warning rounded p-3 fs-lg" />
          </div>
          <div className="">
            <h5 className="mb-3">Bring Ideas to Life</h5>
            <p className="fw-light">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
        </div>
        {/* item card */}
        <div
          className="col-lg-3"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-delay="500"
        >
          <div className="mb-4">
            <img src={imageThree} className="bg-danger rounded p-3 fs-lg" />
          </div>
          <div className="">
            <h5 className="mb-3">Bring Ideas to Life</h5>
            <p className="fw-light">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
        </div>
        {/* item card */}
        <div
          className="col-lg-3"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-delay="600"
        >
          <div className="mb-4">
            <img src={imageFour} className="bg-primary rounded p-3 fs-lg" />
          </div>
          <div className="">
            <h5 className="mb-3">Bring Ideas to Life</h5>
            <p className="fw-light">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
