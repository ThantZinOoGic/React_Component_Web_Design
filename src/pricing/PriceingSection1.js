import React from 'react';
import PricingCard from '../sub-component/PricingCard';

export default function PriceingSection1() {
  return (
    <div className='container-flud' style={{ 'background' : '#f8f9fa' }} id="pricing">
          <div className='container'>
            <div  data-aos="fade-up" data-aos-delay="400">
              <h1 className='text-center pt-5'>Pricing</h1>
              <p className='text-center fw-light'>Pricing for everyone. Choose your plan now!</p>
            </div>
            <div className=''>
              <div className='row justify-content-center'>
                {/* Free Card  */}
                  <PricingCard title='Free' price='0' duration={500}/>
                  
                {/* Standard card */}
                  <PricingCard title='Standard' price='19.99' duration={600}/>
                {/* Premium card */}
                  <PricingCard title='Premium' price='79.9' duration={700}/>
              </div>
            </div>
          </div>
    </div>
  )
}
