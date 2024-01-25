import React from 'react';
import imageThree from './../images/3.svg';

export default function SuccessEveryDay() {
  return (
    <div className='row item'  data-aos="fade-left" data-aos-once="true" data-aos-delay="600">
        <div className='col-2'>
            <img src={imageThree} className='bg-danger rounded p-3 fs-lg'/>
        </div>
        <div className='col-10'>
            <h5>Success Every Day</h5>
            <p className='fw-light'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
        </div>
    </div>
  )
}
