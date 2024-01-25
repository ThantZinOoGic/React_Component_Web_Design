import React from 'react';
import image from './../images/feature.webp'

export default function FeatureCarousel() {
  return (
    <div>
      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel" >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div className='row'>
              <img src={image}/>
            </div>
          </div>
          <div class="carousel-item">
            <div className='row'>
              <img src={image}/>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}
