import React from 'react'

export default function Footer() {
  return (
    <div className='container-cluid' style={{ 'background': '#efefef' }} data-aos="fade-up" data-aos-delay="50">
        <div className='container'>
            <div className='row py-5'>
                <div className='col-6 col-md-4'>
                    <h5 className='fw-light'>About Launch.</h5>
                    <p className='fw-light lh-lg'>
                        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                    </p>
                    <p className='fw-bold'>Contact</p>
                    <p className='d-flex justify-content-between col-7'>
                        <i class="bg-secondary text-white rounded-circle fs-lg p-2 mr-2 fa fa-instagram" aria-hidden="true"></i>
                        <i class="bg-secondary text-white rounded-circle fs-lg p-2 mr-2 fa fa-twitter" aria-hidden="true"></i>
                        <i class="bg-secondary text-white rounded-circle fs-lg p-2 mr-2 fa fa-facebook" aria-hidden="true"></i>
                        <i class="bg-secondary text-white rounded-circle fs-lg p-2 mr-2 fa fa-linkedin" aria-hidden="true"></i>
                        <i class="bg-secondary text-white rounded-circle fs-lg p-2 mr-2 fa fa-pinterest-p" aria-hidden="true"></i>
                    </p>
                </div>
                <div className='col-6 col-md-2'>
                    <h5 className='fw-light'>Projects</h5>
                    <p className='fw-light'>La Lega Stadium</p>
                    <p className='fw-light'>France Building</p>
                    <p className='fw-light'>22 New Homes</p>
                    <p className='fw-light'>Manage Center</p>
                </div>
                <div className='col-6 col-md-2'>
                    <h5 className='fw-light'>Services</h5>
                    <p className='fw-light'>Architect</p> 
                    <p className='fw-light'>Interior Design</p>
                    <p className='fw-light'>Landscape Design</p>
                    <p className='fw-light'>Consultancy</p>
                </div>
                <div className='col-6 col-md-2'>
                    <h5 className='fw-light mb-3'>Contact</h5>
                    <p className='fw-light mb-2'>43 Raymouth Rd. Baltemoer, London 3910</p>
                    <p className='fw-light'>+1(123)-456-7890</p>
                    <p className='fw-light'>+1(123)-456-7890</p>
                    <p className='fw-light'>Projects</p>
                </div>
                <div className='fw-light text-center my-5'>Copyright ©2024 All rights reserved | This template is made with  by Colorlib</div>
            </div>
        </div>

    </div>
  )
}
