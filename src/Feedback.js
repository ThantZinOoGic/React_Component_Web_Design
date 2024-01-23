import React from 'react'
import Profile from './Profile'

export default function 
() {
  return (
    <div className='container'>
        <div className='row mb-5'>
            <div className='col-4'>
                <p className='text-info'>TESTIMONIALS</p>
                <h3 className='lh-lg'>Our Customers <br/> Feedbck</h3>
                <div><a className='btn btn-secondary' href='#'>{ '<-' }</a> <a className='btn btn-secondary' href='#'>{ '->' }</a></div>
            </div>
            <div className='col-8'>
                 <div className='row'>
                    <div className='col-6'>
                        <p className='fst-italic mb-3'>
                            “Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. ”
                        </p>
                        <Profile/>
                    </div>
                    <div className='col-6'>
                        <p className='fst-italic mb-3'>
                            “Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. ”
                        </p>
                        <Profile/>
                    </div>
                 </div>
            </div>
        </div>
    </div>
  )
}
