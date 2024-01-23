import React from 'react';
import aboutImage from './images/about.svg'

export default function About() {
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-8'>
                <img src={aboutImage}/>
            </div>
            <div className='col-4'>
                <p className='text-info'>ABOUT</p>
                <h2 className='mb-3'>About Us</h2>
                <p className='fw-light lh-lg'>
                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast
                </p>
                <p className='fw-light lh-lg'>
                    Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.
                </p>
                <ul className='fw-light lh-lg'>
                    <li>There live the blind texts</li>
                    <li>Far far away behind the word</li>
                    <li>Their place and supplies</li> 
                </ul>
                <div className='row mt-3'>
                    <div className='col-6'>
                        <h2 className=''>59 M</h2>
                        <p className='fw-light'>MEMBERS</p>
                    </div>
                    <div className='col-4'>
                        <h2 className=''> 14</h2>
                        <p className='fw-light'>TEAM</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
