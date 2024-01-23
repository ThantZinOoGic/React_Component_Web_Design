import React from 'react'
import NewsCard from './NewsCard'
export default function NewsSectiom() {
  return (
    <div className='container-fluid vh-100' style={{ 'background' : '#f8f9fa' }}>
        <div className='container py-5'>
          {/* new header  */}
          <div className=''>
            <h1 className='text-center'>Our News</h1>
            <p className='text-center fw-light'>Far from the countries Vokalia and Consonantia</p>
          </div>
          {/* news card row  */}
          <div className='row mt-4'>
          <div className='col-4'>
              <NewsCard/>
          </div>
          <div className='col-4'>
            <NewsCard/>
          </div>
          <div className='col-4'>
            <NewsCard/>
          </div>
        </div>
      </div>
    </div>
  )
}
