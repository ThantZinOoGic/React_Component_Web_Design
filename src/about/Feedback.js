import React from 'react'
import CustromerFeedbackCard from '../sub-component/CustromerFeedbackCard';
import Carousel from '../sub-component/FeeedbackCarousel';
import Owldemo1 from '../sub-component/Owldemo1';
export default function Feedback() {
  return (
    <div className='container'>
        <div className='row mb-5 vh-50'>
            <div className='col-md-4 my-3' data-aos="fade-up" data-aos-delay="300">
                <p className='text-info'>TESTIMONIALS</p>
                <h3 className='lh-lg'>Our Customers <br/> Feedbck</h3>
                <div className='d-flex justify-content-between col-3'>
                   <div className='mr-2  d-none d-md-block d-lg-blog d-xl-block'>
                        <button className='btn btn-secondary' data-bs-target="#carouselExampleIndicators" data-bs-slide="prev" href='#'>                        
                             <i class="text-white fa fa-arrow-left" aria-hidden="true"></i>
                        </button>
                   </div>
                   <div className=' d-none d-md-block d-lg-blog d-xl-block'>
                        <button className='btn btn-secondary' data-bs-target="#carouselExampleIndicators" data-bs-slide="prev" href='#'>
                             <i class="text-white fa fa-arrow-right" aria-hidden="true"></i>
                         </button>
                   </div>
                </div>
            </div>
            <div className='col-md-8'>
                 <div className='row' data-aos="fade-left" data-aos-delay="300">
                    <Carousel/>
                 </div>
            </div>
        </div>
    </div>
  )
}
