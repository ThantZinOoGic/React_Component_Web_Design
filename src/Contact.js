import React from "react";

export default function Contact() {
  return (
    <div className="container " id="contact">
      <div className="row my-5  vh-75  align-items-center">
        {/* feedbck from */}
        <div
          className="text-center"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-delay="300"
        >
          <h1 className="">Get In Touch</h1>
          <p className="fw-light">
            Far from the countries Vokalia and Consonantia
          </p>
        </div>
        {/* contact */}
        <div className="row justify-content-between">
          <div
            className="col-lg-7 mb-5"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="400"
          >
            <form className="">
              <div className="row">
                <div className="mb-3 col-6">
                  <label for="exampleInputEmail1" className="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="form-control border-top-0 border-start-0 border-end-0"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="mb-3 col-6">
                  <label for="exampleInputPassword1" className="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="form-control border-top-0 border-start-0 border-end-0"
                    id="exampleInputPassword1"
                  />
                </div>
              </div>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control border-top-0 border-start-0 border-end-0"
                  id="exampleInputPassword1"
                />
              </div>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">
                  Message
                </label>
                <input
                  type="textarea"
                  className="form-control border-top-0 border-start-0 border-end-0"
                  id="exampleInputPassword1"
                  style={{ height: "100px" }}
                />
              </div>
              <button className="btn btn-primary rounded-pill">
                SEND MESSAGE
              </button>
            </form>
          </div>
          <div
            className="col-lg-4 px-4"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="400"
          >
            <h4 className="mb-3">Contact Info</h4>
            <p><i className="fa fa-map-marker mx-2"></i>43 Raymouth Rd. Baltemoer, London 3910</p>
            <p><i className="fa fa-phone mx-2"></i>+1(123)-456-7890, +1(123)-456-7890</p>
            <p><i className="fa fa-envelope mx-2"></i>info@mydomain.com</p>
            <p><i className="fa fa-globe mx-2"></i>https://Colorlib.com/</p>
          </div>
        </div>
      </div>
    </div>
  );
}
