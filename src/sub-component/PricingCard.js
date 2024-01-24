import React from 'react';

export default function PricingCard({title, price, duration}) {
  return (
        <div className='col-md-3 mb-3'  data-aos="fade-up" data-aos-delay={duration}>
            <div className='card rounded'>
              <div className='card-body'>
                <div>
                  <h2 className='text-center mt-5'>{title}</h2>
                  <h3 className='text-center text-info my-4'><sup>$</sup>{price}</h3>
                </div>
                <ul className='text-left mb-2'>
                  <li className='fw-light mb-3'>There live the blind texts</li>
                  <li className='fw-light mb-3'>Far far away behind the word</li>
                  <li className='fw-light mb-3'>Far from the countries Vokalia and Consonantia</li>
                </ul>
                <div className='text-center my-5'>
                  <a href='#' className='btn btn-outline-primary rounded-pill'>GET START</a>
                </div>
              </div>
            </div>
    </div>
  )
}
