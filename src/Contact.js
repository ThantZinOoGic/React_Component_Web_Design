import React from 'react';

export default function Contact() {
  return (
    <div className='container vh-100' id='contact'>
        <div className='row py-5'>
            <div className='text-center mb-3' data-aos="fade-up" data-aos-delay="300">
                <h1 className=''>Get In Touch</h1>
                <p className='fw-light'>Far from the countries Vokalia and Consonantia</p>
            </div>
            <div className='row justify-content-between'>
                <div className='col-md-7 mb-5' data-aos="fade-up" data-aos-delay="400">
                    <form className=''>
                    <div className='row'>
                        <div className="mb-3 col-6">
                            <label for="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control border-top-0 border-start-0 border-end-0" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        </div>
                        <div className="mb-3 col-6">
                            <label for="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control border-top-0 border-start-0 border-end-0" id="exampleInputPassword1"/>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Email</label>
                        <input type="email" className="form-control border-top-0 border-start-0 border-end-0" id="exampleInputPassword1"/>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Message</label>
                        <input type="textarea" className="form-control border-top-0 border-start-0 border-end-0" id="exampleInputPassword1"
                            style={{ "height": "100px" }}/>
                    </div>
                    <button className='btn btn-primary rounded-pill'>SEND MESSAGE</button>
                    </form>
                </div>
                <div className='col-md-4 px-4' data-aos="fade-up" data-aos-delay="400">
                    <h4 className='mb-3'>Contact Info</h4>
                    <p>43 Raymouth Rd. Baltemoer, London 3910</p>
                    <p>+1(123)-456-7890</p>
                    <p>+1(123)-456-7890</p>
                    <p>info@mydomain.com</p>
                    <p>https://Colorlib.com/</p>
                </div>
            </div>
        </div>
    </div>
  )
}
