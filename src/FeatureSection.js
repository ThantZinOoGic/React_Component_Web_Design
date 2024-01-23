import React from 'react';
import Profile from './Profile';
import featureImage from './images/feature.webp';

export default function FeatureSection() {
  return (
    <div className='container'>
        <div className='row vh-100'>
            <div className='col-5'>
                <p className='text-primary'>DIGITAL SERVICES</p>
                <h1 className='fw-bold'>Selling Digital<br/> Services</h1>
                <p className='fw-light lh-lg'>
                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast
                </p>
                <ul className='fw-light lh-lg'>
                    <li>
                        There live the blind texts
                    </li>
                    <li>
                        Far far away behind the word
                    </li>
                </ul>
                <p className='fst-italic lh-lg'>
                    “Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. ”
                </p>
                <Profile/>
            </div>
            <div className='col-7'>
                <div className='card'>
                    <img src={featureImage} />
                </div>
            </div>
        </div>
    </div>
  )
}
