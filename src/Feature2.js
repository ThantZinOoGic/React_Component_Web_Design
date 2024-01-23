import React from 'react';
import Grow from './Grow';
import Build from './Build';
import Success from './Success';
import Bring from './Bring';
import featureImage from './images/feature.webp';


export default function Feature2() {
  return (
    <div className='container-fluid vh-100' style={{ 'background' : '#f8f9fa' }}>
        <div className='vh-100'>
            <div className='container'>
                <div className='row justify-content-between'>
                  <div className='col-6'>
                    <div className='row align-items-center'>
                      <div className='card mt-5'>
                        <img src={featureImage} />
                      </div>
                    </div>
                  </div>
                  <div className='col-5'>
                    <div className='row align-items-center'>
                      <div className='mt-5'>
                        <Grow/>
                        <Build/>
                        <Success/>
                        <Bring/>

                      </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}
