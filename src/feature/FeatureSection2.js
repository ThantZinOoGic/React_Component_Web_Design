import React from 'react';
import Grow from '../sub-component/GrowYourBusiness';
import Build from '../sub-component/BuildProduct';
import Success from '../sub-component/SuccessEveryDay';
import Bring from '../sub-component/BringIdeaToLife';
import FeatureCarousel from '../sub-component/FeatureCarousel';
import './../style.css';


export default function FeatureSection2() {
  return (
    <div className='container-fluid' style={{ 'background' : '#f8f9fa' }}>
        <div className=''>
            <div className='container'>
                <div className='row  vh-100 justify-content-between align-items-center'>
                  <div className='col-md-6' data-aos="fade-up" data-aos-delay="200">
                    {/* <div className='row align-items-center'> */}
                      <div className='card'>
                        <FeatureCarousel/>
                      </div>
                    {/* </div> */}
                  </div>
                  <div className='col-md-5'>
                    {/* <div className='row align-items-center'> */}
                      <div className=''>
                        <Grow/>
                        <Build/>
                        <Success/>
                        <Bring/>

                      </div>
                    {/* </div> */}
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}
