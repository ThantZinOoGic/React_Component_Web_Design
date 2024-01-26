import React from "react";
import Grow from "../sub-component/GrowYourBusiness";
import Build from "../sub-component/BuildProduct";
import Success from "../sub-component/SuccessEveryDay";
import Bring from "../sub-component/BringIdeaToLife";
import FeatureCarousel from "../sub-component/FeatureCarousel";

export default function FeatureSection2() {
  return (
    <div className="container-fluid bg">
      <div className="">
        <div className="container">
          <div className="row  min-vh-100 justify-content-between align-items-center">
            {/* item catds */}
            <div className="col-lg-5 order-lg-last mt-4">
              <div className="">
                <Grow />
                <Build />
                <Success />
                <Bring />
              </div>
            </div>
            {/* picture carousel part */}
            <div
              className="col-lg-6 order-lg-first"
              data-aos-once="true"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="card">
                <FeatureCarousel />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
