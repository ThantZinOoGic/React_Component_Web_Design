import React, { useRef } from "react";
import CustromerFeedbackCard from "../sub-component/CustromerFeedbackCard";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export default function Feedback() {
  const carouselRef = useRef(null);

  const handlePrev = () => {
    carouselRef.current.prev();
  };

  const handleNext = () => {
    carouselRef.current.next();
  };
  let responsive = {
    0: {
      items: 1, // Number of items to show on small screens
    },
    1000: {
      items: 2, // Number of items to show on medium screens
    }
  }

  return (
    <div className="container">
      <div className="row vh-75 align-items-center my-5 vh-50">
        {/* paragraph */}
        <div
          className="col-lg-4 my-3"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-delay="300"
        >
          <p className="text-info">TESTIMONIALS</p>
          <h3 className="lh-lg">
            Our Customers <br /> Feedbck
          </h3>
          <div className="d-flex justify-content-between col-3">
            <div className="mr-2  d-none d-lg-blog d-xl-block">
              <button
                onClick={handlePrev}
                className="btn btn-secondary"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
                href="#"
              >
                <i class="text-white fa fa-arrow-left" aria-hidden="true"></i>
              </button>
            </div>
            <div className=" d-none d-lg-blog d-xl-block">
              <button
                onClick={handleNext}
                className="btn btn-secondary"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
                href="#"
              >
                <i class="text-white fa fa-arrow-right" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Carousel part */}
        <div className="col-lg-8">
          <div
            className="row"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="300"
          >
            <div>
              <OwlCarousel
                ref={carouselRef}
                margin={10}
                loop
                autoplay
                responsive={responsive}
              >
                {/* carousel items */}
                <CustromerFeedbackCard />
                <CustromerFeedbackCard />
                <CustromerFeedbackCard />
              </OwlCarousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
