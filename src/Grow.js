import React from 'react';
import imageOne from './images/1.svg';

export default function Grow() {
  return (
    <div className='row'>
        <div className='col-2'>
            <img src={imageOne} className='bg-info rounded p-3 fs-lg'/>
        </div>
        <div className='col-10'>
            <h5>Grow Your Business</h5>
            <p className='fw-light'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
        </div>
    </div>
  )
}
