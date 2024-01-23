import React from 'react';
import imageFour from './images/4.svg';

export default function Build() {
  return (
    <div className='row'>
        <div className='col-2'>
            <img src={imageFour} className='bg-primary rounded p-3 fs-lg'/>
        </div>
        <div className='col-10'>
            <h5>Bring Ideas to Life</h5>
            <p className='fw-light'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
        </div>
    </div>
  )
}
