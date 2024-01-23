import React from 'react';
import profile from './images/profile.jpg'


export default function NewsCard() {
  return (
    <div className='card'>
        <div className='bg-white p-4 rounded'>
            <div className='row align-items-start'>
                <div className='col-2'>
                    <img src={profile} style={{"width":'50px', "height":'50px'}} className='rounded-circle'/>
                </div>
                <div className='col-7'>
                    <h6>
                        James Anderson
                    </h6>
                    <p className='fw-light'>
                        Jun 14, 2020
                    </p>
                </div>
            </div>
            <p className='fw-light'>Digital Service, 4 min read</p>
            <h4 className=''>Far far away behind the word mountains far from the countries</h4>
            <a href='#' className='btn btn-outline-secondary'>{'->'}</a>
        </div>
    </div>
  )
}
