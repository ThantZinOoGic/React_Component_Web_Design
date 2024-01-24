import React from 'react';
import './style.css';
import CustromerFeedbackCard from './CustromerFeedbackCard';

export default function Carousel() {
  return (
    <div>
      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel" >
        <div class="carousel-indicators" style={{  position: 'absolute', bottom: '-50px' }}>
          <button type="button" data-bs-target="#carouselExampleIndicators" style={{ width : '10px', height:'10px' }} data-bs-slide-to="0" class="active bg-secondary rounded-circle" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" style={{ width : '10px', height:'10px' }} data-bs-slide-to="1" className='bg-secondary rounded-circle' aria-label="Slide 2"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div className='row'>
              <CustromerFeedbackCard/>
              <CustromerFeedbackCard/>
            </div>
          </div>
          <div class="carousel-item">
            <div className='row'>
                <CustromerFeedbackCard/>
                <CustromerFeedbackCard/>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}
