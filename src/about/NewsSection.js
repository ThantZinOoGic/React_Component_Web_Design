import React from "react";
import NewsCard from "../sub-component/NewsCard";
export default function NewsSectiom() {
  return (
    <div className="container-fluid bg">
      <div className="container">
        <div className="row py-5">
          {/* new header  */}
          <div
            className="col-12 my-4"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="400"
          >
            <h1 className="text-center">Our News</h1>
            <p className="text-center fw-light">
              Far from the countries Vokalia and Consonantia
            </p>
          </div>
          {/* news card row  */}
          <div className="row py-4">
            <div
              className="col-lg-4 mb-3"
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-delay="500"
            >
              <NewsCard />
            </div>
            <div
              className="col-lg-4 mb-3"
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-delay="600"
            >
              <NewsCard />
            </div>
            <div
              className="col-lg-4 mb-3"
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-delay="700"
            >
              <NewsCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
