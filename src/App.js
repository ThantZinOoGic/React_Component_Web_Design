import './App.css';
import NavSection from './NavSection';
import HomeSection from './HomeSection';
import FeatureSection from './FeatureSection';
import FeatureTwo from './Feature2';
import Grow from './Grow';
import Feature3 from './Feature3';
import PriceingSection from './PriceingSection';
import Pricing2 from './Pricing2';
import Feedback from './Feedback';
import About from './About';
import NewsSectiom from './NewsSection';
import Contact from './Contact';
import Footer from './Footer';


function App() {
  return (
   <div className='container-fluid'>
      <NavSection/>
      <HomeSection/>
      <FeatureSection/>
      <FeatureTwo/>
      <Feature3/>
      <PriceingSection/>
      <Pricing2/>
      <Feedback/>
      <About/>
      <NewsSectiom/>
      <Contact/>
      <Footer/>
   </div>
  );
}

export default App;
