// import React, { Component } from "react";
// import OwlCarousel from "react-owl-carousel";
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";
// import "./../owl.css";
import CustromerFeedbackCard from "./CustromerFeedbackCard";
// export class Owldemo1 extends Component {
//   render() {
//     return (
//       <div>
//         <div class="">
//           <OwlCarousel items={2} className="row" loop nav margin={8} autoPlay={true}>
//               <CustromerFeedbackCard/>
//               <CustromerFeedbackCard/>
//               <CustromerFeedbackCard/>
//               <CustromerFeedbackCard/>
//           </OwlCarousel>
//         </div>
//       </div>
//     );
//   }
// }

// export default Owldemo1;

import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
// import './owl.css';
export class OwlDemo extends Component {
  render() {
    return (
      <div>
        <div class="">
          <OwlCarousel items={2} margin={1} autoplay={true}>
            <CustromerFeedbackCard />
            <CustromerFeedbackCard />
            <CustromerFeedbackCard />
            <CustromerFeedbackCard />
            <CustromerFeedbackCard />
            <CustromerFeedbackCard />
          </OwlCarousel>
        </div>
      </div>
    );
  }
}

export default OwlDemo;
