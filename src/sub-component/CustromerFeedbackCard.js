import React from 'react';
import Profile from '../sub-component/Profile';
import profile1 from '../images/profile.jpg';

export default function CustromerFeedbackCard() {
  return (
    <div className='col-md-11'>
        <p className='fst-italic mb-3'>
            “Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. ”
        </p>
        <Profile picture={profile1} name={'James Anderson'} para={'Facebook, Product Lead'}/>
    </div>
  )
}
