import React from 'react';
import imageOne from './images/1.svg';
import imageTwo from './images/2.svg';
import imageThree from './images/3.svg';
import imageFour from './images/4.svg';

export default function Feature3() {
  return (
      <div className='container'>
        <div className='row py-5'>
          <div className='col-3'>
            <div className='mb-4'>
                <img src={imageOne} className='bg-info rounded p-3 fs-lg'/>
            </div>
            <div className=''>
                <h5 className='mb-3'>Bring Ideas to Life</h5>
                <p className='fw-light'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            </div>
          </div>
          <div className='col-3'>
            <div className='mb-4'>
                <img src={imageTwo} className='bg-warning rounded p-3 fs-lg'/>
            </div>
            <div className=''>
                <h5 className='mb-3'>Bring Ideas to Life</h5>
                <p className='fw-light'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            </div>
          </div>
          <div className='col-3'>
            <div className='mb-4'>
                <img src={imageThree} className='bg-danger rounded p-3 fs-lg'/>
            </div>
            <div className=''>
                <h5 className='mb-3'>Bring Ideas to Life</h5>
                <p className='fw-light'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            </div>
          </div>
          <div className='col-3'>
            <div className='mb-4'>
                <img src={imageFour} className='bg-primary rounded p-3 fs-lg'/>
            </div>
            <div className=''>
                <h5 className='mb-3'>Bring Ideas to Life</h5>
                <p className='fw-light'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            </div>
          </div>
        </div>
      </div>
  )
}
