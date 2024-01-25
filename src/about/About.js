import React from "react";
import aboutImage from "./../images/about.svg";

export default function About() {
  return (
    <div className="container" id="about">
      <div className="row">
        {/* image part */}
        <div
          className="col-lg-8"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-delay="400"
        >
          <img src={aboutImage} />
        </div>
        {/* paragraph */}
        <div className="col-lg-4">
          <div data-aos="fade-up" data-aos-once="true" data-aos-delay="400">
            <p className="text-info">ABOUT</p>
            <h2 className="mb-3">About Us</h2>
            <p className="fw-light lh-lg">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast
            </p>
            <p className="fw-light lh-lg">
              Separated they live in Bookmarksgrove right at the coast of the
              Semantics, a large language ocean. A small river named Duden flows
              by their place and supplies it with the necessary regelialia.
            </p>
          </div>
          <ul
            className="fw-light lh-lg"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="500"
          >
            <li class="list-group-item d-flex justify-content-start align-items-center">
              <i class="fa fa-check text-primary p-3" aria-hidden="true"></i>
              vThere live the blind texts
            </li>
            <li class="list-group-item d-flex justify-content-start align-items-center">
              <i class="fa fa-check text-primary p-3" aria-hidden="true"></i>Far
              far away behind the word
            </li>
            <li
              class="list-group-item d-flex justify-content-start align-items-center"
              s
            >
              <i class="fa fa-check text-primary p-3" aria-hidden="true"></i>
              Their place and supplies
            </li>
          </ul>
          <div
            className="row mt-3"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="600"
          >
            <div className="col-6">
              <h2 className="">59 M</h2>
              <p className="fw-light">MEMBERS</p>
            </div>
            <div className="col-4">
              <h2 className=""> 14</h2>
              <p className="fw-light">TEAM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
