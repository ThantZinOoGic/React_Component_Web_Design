import React from 'react';
import ImageTwo from './images/2.svg';

export default function Build() {
  return (
    <div className='row'>
        <div className='col-2'>
            <img src={ImageTwo} className='bg-warning rounded p-3 fs-lg'/>
        </div>
        <div className='col-10'>
            <h5>Build Products</h5>
            <p className='fw-light'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
        </div>
    </div>
  )
}
