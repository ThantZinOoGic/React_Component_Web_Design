import React from 'react';
import profile from './../images/profile.jpg'
import Profile from './Profile';


export default function NewsCard() {
  return (
    <div className='card'>
        <div className='bg-white p-4 rounded'>
            {/* profile */}
            <Profile picture={profile} name={'James Anderson'} para={'Jun 14, 2020'}/>

            {/* main content */}
            <p className='fw-light'>Digital Service, 4 min read</p>
            <h4 className=''>Far far away behind the word mountains far from the countries</h4>
            <a href='#' className='btn btn-outline-secondary'>
                <i class="fa fa-arrow-right" aria-hidden="true"></i>
            </a>
        </div>
    </div>
  )
}
