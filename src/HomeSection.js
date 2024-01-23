import React from 'react';
import homeImage from './images/home.svg'

export default function () {
  return (
    <div className='container'>
        <div className='row vh-100 align-items-center'>
            <div className='col-6'>
                <div className='fs-1 fw-bolder'>
                    Promote Your <br/>Products by<br/> Colorlib
                </div>
                <div className='mt-4 fw-lighter lh-lg'>
                    Another cool free html css template by <span className='text-primary'>Colorlib</span> Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast
                </div>
                <div className='mt-5'>
                    <a className='btn btn-primary rounded-pill'>SEE FEATURE</a>
                    <a className='btn btn-outline-primary rounded-pill mx-3'>PRICING</a>
                </div>
            </div>
            <div className='col-6'>
                <img src={homeImage}/>
            </div>
        </div>
    </div>
  )
}
