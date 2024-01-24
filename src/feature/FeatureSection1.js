import React from 'react';
import Profile from '../sub-component/Profile';
import featureImage from './../images/feature.webp';
import profile1 from './../images/profile.jpg';

export default function FeatureSection1() {
  return (
    <div className='container' id='feature'>
        <div className='row vh-100'>
            <div className='col-md-5'>
                <div  data-aos="fade-up" data-aos-delay="300" >
                    <p className='text-primary'>DIGITAL SERVICES</p>
                    <h1 className='fw-bold'>Selling Digital<br/> Services</h1>
                </div>
                <div data-aos="fade-up" data-aos-delay="500">
                    <p className='fw-light lh-lg'>
                        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast
                    </p>
                    <ul className='fw-light lh-lg'>
                        <li class="list-group-item d-flex justify-content-start align-items-center">
                            <i class="fa fa-check text-primary p-3" aria-hidden="true"></i> Pay Car Insurance
                        </li>
                        <li class="list-group-item d-flex justify-content-start align-items-center">
                            <i class="fa fa-check text-primary p-3" aria-hidden="true"></i>Far far away behind the word
                        </li>
                    </ul>
                    <p className='fst-italic lh-lg'>
                        “Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. ”
                    </p>
                    <Profile picture={profile1} name={'James Anderson'} para={'Facebook, Product Lead'}/>
                </div>
            </div>
            <div className='col-md-7' data-aos="fade-up" data-aos-delay="700">
                <div className='card'>
                    <img src={featureImage} />
                </div>
            </div>
        </div>
    </div>
  )
}
