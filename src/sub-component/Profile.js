import React from 'react';

export default function Profile({picture, name, para}) {
  return (
    <div className='row align-items-start'>
        <div className='col-2'>
            <img src={picture} style={{"width":'50px', "height":'50px'}} className='rounded-circle'/>
        </div>
        <div className='col-7'>
            <h6>
                {name}
            </h6>
            <p className='fw-light'>
                {para}
            </p>
        </div>
    </div>
  )
}
