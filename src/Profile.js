import React from 'react';
import profile from './images/profile.jpg'

export default function Profile() {
  return (
    <div className='row align-items-start'>
        <div className='col-2'>
            <img src={profile} style={{"width":'50px', "height":'50px'}} className='rounded-circle'/>
        </div>
        <div className='col-7'>
            <h6>
                James Anderson
            </h6>
            <p className='fw-light'>
                Facebook, Product Lead
            </p>
        </div>
    </div>
  )
}
