import React from 'react'

export default function PriceingSection() {
  return (
    <div className='container-flud vh-100' style={{ 'background' : '#f8f9fa' }}>
          <div className='container'>
            <div>
              <h1 className='text-center pt-5'>Pricing</h1>
              <p className='text-center fw-light'>Pricing for everyone. Choose your plan now!</p>
            </div>
            <div className=''>
              <div className='row justify-content-center'>
                {/* Free Card  */}
                  <div className='col-3'>
                    <div className='card rounded'>
                      <div className='card-body'>
                        <div>
                          <h2 className='text-center mt-5'>Free</h2>
                          <h3 className='text-center text-info my-4'><sup>$</sup>0</h3>
                        </div>
                        <ul className='text-left mb-2'>
                          <li className='fw-light mb-3'>There live the blind texts</li>
                          <li className='fw-light mb-3'>Far far away behind the word</li>
                          <li className='fw-light mb-3'>Far from the countries Vokalia and Consonantia</li>
                        </ul>
                        <div className='text-center my-5'>
                          <a href='#' className='btn btn-outline-primary'>GET START</a>
                        </div>
                      </div>
                    </div>
                  </div>
                {/* Standard card */}
                <div className='col-3'>
                    <div className='card rounded'>
                      <div className='card-body'>
                        <div>
                          <h2 className='text-center mt-5'>Standard</h2>
                          <h3 className='text-center text-info my-4'><sup>$</sup>19.99</h3>
                        </div>
                        <ul className='text-left mb-2'>
                          <li className='fw-light mb-3'>There live the blind texts</li>
                          <li className='fw-light mb-3'>Far far away behind the word</li>
                          <li className='fw-light mb-3'>Far from the countries Vokalia and Consonantia</li>
                        </ul>
                        <div className='text-center my-5'>
                          <a href='#' className='btn btn-primary'>GET START</a>
                        </div>
                      </div>
                    </div>
                </div>
                {/* Premium card */}
                <div className='col-3'>
                    <div className='card rounded'>
                      <div className='card-body'>
                        <div>
                          <h2 className='text-center mt-5'>Premium</h2>
                          <h3 className='text-center text-info my-4'><sup>$</sup>79.99</h3>
                        </div>
                        <ul className='text-left mb-2'>
                          <li className='fw-light mb-3'>There live the blind texts</li>
                          <li className='fw-light mb-3'>Far far away behind the word</li>
                          <li className='fw-light mb-3'>Far from the countries Vokalia and Consonantia</li>
                        </ul>
                        <div className='text-center my-5'>
                          <a href='#' className='btn btn-outline-primary'>GET START</a>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
    </div>
  )
}
